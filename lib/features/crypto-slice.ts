import { createSlice, type PayloadAction, createSelector } from "@reduxjs/toolkit"
import type { RootState } from "@/lib/store"
import { initialCryptoData } from "@/lib/sample-data"

export interface CryptoAsset {
  id: string
  rank: number
  name: string
  symbol: string
  logo: string
  price: number
  priceChange1h: number
  priceChange24h: number
  priceChange7d: number
  marketCap: number
  volume24h: number
  circulatingSupply: number
  maxSupply: number | null
  chartData: number[]
  isFavorite: boolean
}

interface CryptoState {
  assets: CryptoAsset[]
  loading: boolean
  error: string | null
  sortBy: keyof CryptoAsset | null
  sortDirection: "asc" | "desc"
  searchTerm: string
  showFavoritesOnly: boolean
}

const initialState: CryptoState = {
  assets: initialCryptoData,
  loading: false,
  error: null,
  sortBy: "rank",
  sortDirection: "asc",
  searchTerm: "",
  showFavoritesOnly: false,
}

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateAsset: (state, action: PayloadAction<Partial<CryptoAsset> & { id: string }>) => {
      const index = state.assets.findIndex((asset) => asset.id === action.payload.id)
      if (index !== -1) {
        state.assets[index] = { ...state.assets[index], ...action.payload }
      }
    },
    updateMultipleAssets: (state, action: PayloadAction<Array<Partial<CryptoAsset> & { id: string }>>) => {
      action.payload.forEach((update) => {
        const index = state.assets.findIndex((asset) => asset.id === update.id)
        if (index !== -1) {
          state.assets[index] = { ...state.assets[index], ...update }
        }
      })
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const index = state.assets.findIndex((asset) => asset.id === action.payload)
      if (index !== -1) {
        state.assets[index].isFavorite = !state.assets[index].isFavorite
      }
    },
    setSortBy: (state, action: PayloadAction<{ sortBy: keyof CryptoAsset; sortDirection: "asc" | "desc" }>) => {
      state.sortBy = action.payload.sortBy
      state.sortDirection = action.payload.sortDirection
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
    toggleShowFavoritesOnly: (state) => {
      state.showFavoritesOnly = !state.showFavoritesOnly
    },
  },
})

// Selectors
export const selectAllAssets = (state: RootState) => state.crypto.assets
export const selectSearchTerm = (state: RootState) => state.crypto.searchTerm
export const selectShowFavoritesOnly = (state: RootState) => state.crypto.showFavoritesOnly
export const selectSortConfig = (state: RootState) => ({
  sortBy: state.crypto.sortBy,
  sortDirection: state.crypto.sortDirection
})

export const selectSortedFilteredAssets = createSelector(
  [selectAllAssets, selectSearchTerm, selectShowFavoritesOnly, selectSortConfig],
  (assets, searchTerm, showFavoritesOnly, { sortBy, sortDirection }) => {
    let filteredAssets = assets

    // Apply search filter
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase()
      filteredAssets = filteredAssets.filter(
        (asset) => asset.name.toLowerCase().includes(searchTermLower) || asset.symbol.toLowerCase().includes(searchTermLower),
      )
    }

    // Apply favorites filter
    if (showFavoritesOnly) {
      filteredAssets = filteredAssets.filter((asset) => asset.isFavorite)
    }

    // Apply sorting
    if (sortBy) {
      return [...filteredAssets].sort((a, b) => {
        const aValue = a[sortBy]
        const bValue = b[sortBy]

        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
        }

        // Handle numeric values
        const aNum = Number(aValue) || 0
        const bNum = Number(bValue) || 0

        return sortDirection === "asc" ? aNum - bNum : bNum - aNum
      })
    }

    return filteredAssets
  }
)

export const { updateAsset, updateMultipleAssets, toggleFavorite, setSortBy, setSearchTerm, toggleShowFavoritesOnly } =
  cryptoSlice.actions

export default cryptoSlice.reducer
