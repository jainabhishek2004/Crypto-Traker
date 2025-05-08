import CryptoTracker from "@/components/crypto-tracker"
import { Providers } from "@/components/providers"

export default function Home() {
  return (
    <Providers>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 transition-colors duration-200">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Crypto Market</h1>
          <CryptoTracker />
        </div>
      </main>
    </Providers>
  )
}
