import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
  // Format large numbers with appropriate suffixes
  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(2)}B`
  } else if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`
  } else if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(2)}K`
  } else if (value < 0.01) {
    return `$${value.toFixed(6)}`
  } else {
    return `$${value.toFixed(2)}`
  }
}

export function formatNumber(value: number): string {
  // Format large numbers with appropriate suffixes
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(2)}B`
  } else if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(2)}M`
  } else if (value >= 1_000) {
    return `${(value / 1_000).toFixed(2)}K`
  } else {
    return value.toFixed(2)
  }
}

export function formatPercentage(value: number): string {
  return `${Math.abs(value).toFixed(2)}%`
}
