"use client"

import { useState } from "react"
import type { CryptoAsset } from "@/lib/features/crypto-slice"
import { formatNumber, formatCurrency, formatPercentage } from "@/lib/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, HelpCircle, Star } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import dynamic from "next/dynamic"

interface CryptoTableProps {
  assets: CryptoAsset[]
  onSort: (column: string) => void
  onToggleFavorite: (id: string) => void
}

const Sparkline = dynamic(() => import("./Sparkline"), { ssr: false })

export function CryptoTable({ assets, onSort, onToggleFavorite }: CryptoTableProps) {
  const [sortColumn, setSortColumn] = useState<string>("rank")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
    onSort(column)
  }

  return (
    <div className="rounded-md border bg-white dark:bg-gray-800 overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">1h %</TableHead>
              <TableHead className="text-right">24h %</TableHead>
              <TableHead className="text-right">7d %</TableHead>
              <TableHead className="text-right">
                <div className="flex items-center justify-end gap-1">
                  Market Cap
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Market capitalization is the total value of a cryptocurrency.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className="text-right">
                <div className="flex items-center justify-end gap-1">
                  Volume(24h)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          A measure of how much of a cryptocurrency was traded in the last 24 hours.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className="text-right">
                <div className="flex items-center justify-end gap-1">
                  Circulating Supply
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          The amount of coins that are circulating in the market and are in public hands.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead>Last 7 Days</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assets.map((asset, index) => (
              <TableRow key={asset.id} className={index % 2 === 0 ? "" : "bg-gray-50 dark:bg-gray-900/50"}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => onToggleFavorite(asset.id)}>
                      <Star
                        className={`h-4 w-4 ${asset.isFavorite ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    </Button>
                    {asset.rank}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div
                      className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-white font-medium
                      ${
                        asset.symbol === "BTC"
                          ? "bg-orange-500"
                          : asset.symbol === "ETH"
                            ? "bg-gray-500"
                            : asset.symbol === "USDT"
                              ? "bg-teal-500"
                              : asset.symbol === "XRP"
                                ? "bg-gray-700"
                                : asset.symbol === "BNB"
                                  ? "bg-yellow-500"
                                  : asset.symbol === "SOL"
                                    ? "bg-purple-600"
                                    : asset.symbol === "ADA"
                                      ? "bg-blue-500"
                                      : asset.symbol === "DOGE"
                                        ? "bg-yellow-400"
                                        : asset.symbol === "DOT"
                                          ? "bg-pink-500"
                                          : "bg-blue-600"
                      }
                    `}
                    >
                      {asset.logo}
                    </div>
                    <div>
                      <div className="font-medium">{asset.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{asset.symbol}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium">{formatCurrency(asset.price)}</TableCell>
                <TableCell className={`text-right ${asset.priceChange1h >= 0 ? "text-green-500" : "text-red-500"}`}>
                  <div className="flex items-center justify-end gap-1">
                    {asset.priceChange1h >= 0 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    {formatPercentage(asset.priceChange1h)}
                  </div>
                </TableCell>
                <TableCell className={`text-right ${asset.priceChange24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                  <div className="flex items-center justify-end gap-1">
                    {asset.priceChange24h >= 0 ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                    {formatPercentage(asset.priceChange24h)}
                  </div>
                </TableCell>
                <TableCell className={`text-right ${asset.priceChange7d >= 0 ? "text-green-500" : "text-red-500"}`}>
                  <div className="flex items-center justify-end gap-1">
                    {asset.priceChange7d >= 0 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    {formatPercentage(asset.priceChange7d)}
                  </div>
                </TableCell>
                <TableCell className="text-right">{formatCurrency(asset.marketCap)}</TableCell>
                <TableCell className="text-right">
                  <div>{formatCurrency(asset.volume24h)}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {formatNumber(asset.volume24h / asset.price)} {asset.symbol}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div>
                    {formatNumber(asset.circulatingSupply)}M {asset.symbol}
                  </div>
                  {asset.maxSupply && (
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-1 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-500 h-full rounded-full"
                        style={{ width: `${(asset.circulatingSupply / asset.maxSupply) * 100}%` }}
                      ></div>
                    </div>
                  )}
                </TableCell>
                <TableCell>
                  <div className="h-10 w-32 flex items-center">
                    <Sparkline data={asset.chartData} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
