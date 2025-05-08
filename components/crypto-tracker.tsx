"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  selectSortedFilteredAssets,
  setSortBy,
  setSearchTerm,
  toggleFavorite,
  toggleShowFavoritesOnly,
} from "@/lib/features/crypto-slice"
import { webSocketSimulator } from "@/lib/websocket-simulator"
import { CryptoTable } from "@/components/crypto-table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Search, Star } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CryptoTracker() {
  const dispatch = useDispatch()
  const assets = useSelector(selectSortedFilteredAssets)
  const [updateSpeed, setUpdateSpeed] = useState<string>("normal")

  // Connect to WebSocket simulator on component mount
  useEffect(() => {
    webSocketSimulator.connect()

    // Cleanup on unmount
    return () => {
      webSocketSimulator.disconnect()
    }
  }, [])

  // Handle update speed changes
  useEffect(() => {
    switch (updateSpeed) {
      case "slow":
        webSocketSimulator.setUpdateInterval(3000)
        break
      case "normal":
        webSocketSimulator.setUpdateInterval(1500)
        break
      case "fast":
        webSocketSimulator.setUpdateInterval(500)
        break
      default:
        webSocketSimulator.setUpdateInterval(1500)
    }
  }, [updateSpeed])

  // Handle sorting
  const handleSort = (column: string) => {
    dispatch(
      setSortBy({
        sortBy: column as any,
        sortDirection: "asc",
      }),
    )
  }

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value))
  }

  // Toggle favorites only view
  const handleToggleFavorites = () => {
    dispatch(toggleShowFavoritesOnly())
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input type="search" placeholder="Search by name or symbol..." className="pl-8" onChange={handleSearch} />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleToggleFavorites} className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span className="hidden sm:inline">Favorites</span>
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:inline">Update speed:</span>
            <Select value={updateSpeed} onValueChange={setUpdateSpeed}>
              <SelectTrigger className="w-[110px]">
                <SelectValue placeholder="Normal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="slow">Slow</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="fast">Fast</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <ModeToggle />
        </div>
      </div>

      <CryptoTable assets={assets} onSort={handleSort} onToggleFavorite={(id) => dispatch(toggleFavorite(id))} />
    </div>
  )
}
