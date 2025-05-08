import { store } from "@/lib/store"
import { updateMultipleAssets } from "@/lib/features/crypto-slice"

export class WebSocketSimulator {
  private intervalId: NodeJS.Timeout | null = null
  private updateInterval = 1500 // 1.5 seconds

  constructor() {}

  connect() {
    if (this.intervalId) return

    this.intervalId = setInterval(() => {
      const assets = store.getState().crypto.assets
      const updates = assets.map((asset) => {
        // Realistic, volatile price changes
        const baseVolatility = 0.03; // 3% normal volatility
        let priceChange = asset.price * (Math.random() * 2 * baseVolatility - baseVolatility);
        if (Math.random() < 0.15) { // 15% chance of a big move
          priceChange += asset.price * (Math.random() * 0.3 - 0.15); // -15% to +15%
        }
        const newPrice = Math.max(0.01, asset.price + priceChange);

        // Update percentage changes
        const priceChange1h = asset.priceChange1h + (Math.random() * 0.4 - 0.2)
        const priceChange24h = asset.priceChange24h + (Math.random() * 0.6 - 0.3)
        const priceChange7d = asset.priceChange7d + (Math.random() * 1 - 0.5)

        // Update volume
        const volumeChange = asset.volume24h * (Math.random() * 0.05 - 0.025)
        const newVolume = asset.volume24h + volumeChange

        // Update chartData (keep last 7 values)
        const newChartData = [...asset.chartData, Number.parseFloat(newPrice.toFixed(2))]
        if (newChartData.length > 7) newChartData.shift()

        return {
          id: asset.id,
          price: Number.parseFloat(newPrice.toFixed(2)),
          priceChange1h: Number.parseFloat(priceChange1h.toFixed(2)),
          priceChange24h: Number.parseFloat(priceChange24h.toFixed(2)),
          priceChange7d: Number.parseFloat(priceChange7d.toFixed(2)),
          volume24h: Number.parseFloat(newVolume.toFixed(0)),
          chartData: newChartData,
        }
      })

      // Dispatch updates to Redux store
      store.dispatch(updateMultipleAssets(updates))
    }, this.updateInterval)

    console.log("WebSocket simulator connected")
  }

  disconnect() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
      console.log("WebSocket simulator disconnected")
    }
  }

  setUpdateInterval(ms: number) {
    this.updateInterval = ms
    if (this.intervalId) {
      this.disconnect()
      this.connect()
    }
  }
}

export const webSocketSimulator = new WebSocketSimulator()
