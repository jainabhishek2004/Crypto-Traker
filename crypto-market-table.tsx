"use client"

import { useState } from "react"
import { Star, HelpCircle, ArrowUp, ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CryptoMarketTable() {
  const [scrollVisible, setScrollVisible] = useState(false)

  // Handle scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="w-full overflow-x-auto relative">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-3 px-4 text-left">#</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-right">Price</th>
            <th className="py-3 px-4 text-right">1h %</th>
            <th className="py-3 px-4 text-right">24h %</th>
            <th className="py-3 px-4 text-right">7d %</th>
            <th className="py-3 px-4 text-right">
              Market Cap <HelpCircle className="inline h-4 w-4 text-gray-400" />
            </th>
            <th className="py-3 px-4 text-right">
              Volume(24h) <HelpCircle className="inline h-4 w-4 text-gray-400" />
            </th>
            <th className="py-3 px-4 text-right">
              Circulating Supply <HelpCircle className="inline h-4 w-4 text-gray-400" />
            </th>
            <th className="py-3 px-4 text-left">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="py-4 px-4">
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-gray-300 hover:text-yellow-400 cursor-pointer" />
                <span>1</span>
              </div>
            </td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-2">
                <div className="bg-orange-500 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center text-xs">
                  ₿
                </div>
                <div className="font-medium">Bitcoin</div>
                <div className="text-gray-500 ml-1">BTC</div>
              </div>
            </td>
            <td className="py-4 px-4 text-right font-medium">$93,759.48</td>
            <td className="py-4 px-4 text-right text-green-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronUp className="h-3 w-3" />
                0.43%
              </div>
            </td>
            <td className="py-4 px-4 text-right text-green-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronUp className="h-3 w-3" />
                0.93%
              </div>
            </td>
            <td className="py-4 px-4 text-right text-green-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronUp className="h-3 w-3" />
                11.11%
              </div>
            </td>
            <td className="py-4 px-4 text-right">$1,861,618,902,186</td>
            <td className="py-4 px-4 text-right">
              <div>$43,874,950,947</div>
              <div className="text-gray-500 text-sm">467.81K BTC</div>
            </td>
            <td className="py-4 px-4 text-right">
              <div>19.85M BTC</div>
            </td>
            <td className="py-4 px-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sample%20Output.jpg-5tH5RGehJJvcpPUYqWCg9BVcNx7K7E.jpeg"
                alt="Bitcoin 7-day price chart"
                className="h-10 w-32 object-cover"
                style={{ objectFit: "cover", objectPosition: "0 -270px" }}
              />
            </td>
          </tr>

          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="py-4 px-4">
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-gray-300 hover:text-yellow-400 cursor-pointer" />
                <span>2</span>
              </div>
            </td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-2">
                <div className="bg-gray-500 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center text-xs">
                  Ξ
                </div>
                <div className="font-medium">Ethereum</div>
                <div className="text-gray-500 ml-1">ETH</div>
              </div>
            </td>
            <td className="py-4 px-4 text-right font-medium">$1,802.46</td>
            <td className="py-4 px-4 text-right text-green-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronUp className="h-3 w-3" />
                0.60%
              </div>
            </td>
            <td className="py-4 px-4 text-right text-green-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronUp className="h-3 w-3" />
                3.21%
              </div>
            </td>
            <td className="py-4 px-4 text-right text-green-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronUp className="h-3 w-3" />
                13.68%
              </div>
            </td>
            <td className="py-4 px-4 text-right">$217,581,279,327</td>
            <td className="py-4 px-4 text-right">
              <div>$23,547,469,307</div>
              <div className="text-gray-500 text-sm">13.05M ETH</div>
            </td>
            <td className="py-4 px-4 text-right">
              <div>120.71M ETH</div>
            </td>
            <td className="py-4 px-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sample%20Output.jpg-5tH5RGehJJvcpPUYqWCg9BVcNx7K7E.jpeg"
                alt="Ethereum 7-day price chart"
                className="h-10 w-32 object-cover"
                style={{ objectFit: "cover", objectPosition: "0 -330px" }}
              />
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="py-4 px-4">
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-gray-300 hover:text-yellow-400 cursor-pointer" />
                <span>3</span>
              </div>
            </td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-2">
                <div className="bg-teal-500 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center text-xs">
                  ₮
                </div>
                <div className="font-medium">Tether</div>
                <div className="text-gray-500 ml-1">USDT</div>
              </div>
            </td>
            <td className="py-4 px-4 text-right font-medium">$1.00</td>
            <td className="py-4 px-4 text-right text-red-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronDown className="h-3 w-3" />
                0.00%
              </div>
            </td>
            <td className="py-4 px-4 text-right text-red-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronDown className="h-3 w-3" />
                0.00%
              </div>
            </td>
            <td className="py-4 px-4 text-right text-green-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronUp className="h-3 w-3" />
                0.04%
              </div>
            </td>
            <td className="py-4 px-4 text-right">$145,320,022,085</td>
            <td className="py-4 px-4 text-right">
              <div>$92,288,882,007</div>
              <div className="text-gray-500 text-sm">92.25B USDT</div>
            </td>
            <td className="py-4 px-4 text-right">
              <div>145.27B USDT</div>
            </td>
            <td className="py-4 px-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sample%20Output.jpg-5tH5RGehJJvcpPUYqWCg9BVcNx7K7E.jpeg"
                alt="Tether 7-day price chart"
                className="h-10 w-32 object-cover"
                style={{ objectFit: "cover", objectPosition: "0 -390px" }}
              />
            </td>
          </tr>

          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="py-4 px-4">
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-gray-300 hover:text-yellow-400 cursor-pointer" />
                <span>4</span>
              </div>
            </td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-2">
                <div className="bg-gray-700 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center text-xs">
                  X
                </div>
                <div className="font-medium">XRP</div>
                <div className="text-gray-500 ml-1">XRP</div>
              </div>
            </td>
            <td className="py-4 px-4 text-right font-medium">$2.22</td>
            <td className="py-4 px-4 text-right text-green-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronUp className="h-3 w-3" />
                0.46%
              </div>
            </td>
            <td className="py-4 px-4 text-right text-green-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronUp className="h-3 w-3" />
                0.54%
              </div>
            </td>
            <td className="py-4 px-4 text-right text-green-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronUp className="h-3 w-3" />
                6.18%
              </div>
            </td>
            <td className="py-4 px-4 text-right">$130,073,814,966</td>
            <td className="py-4 px-4 text-right">
              <div>$5,131,481,491</div>
              <div className="text-gray-500 text-sm">2.30B XRP</div>
            </td>
            <td className="py-4 px-4 text-right">
              <div>58.39B XRP</div>
            </td>
            <td className="py-4 px-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sample%20Output.jpg-5tH5RGehJJvcpPUYqWCg9BVcNx7K7E.jpeg"
                alt="XRP 7-day price chart"
                className="h-10 w-32 object-cover"
                style={{ objectFit: "cover", objectPosition: "0 -450px" }}
              />
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="py-4 px-4">
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-gray-300 hover:text-yellow-400 cursor-pointer" />
                <span>5</span>
              </div>
            </td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-2">
                <div className="bg-yellow-500 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center text-xs">
                  B
                </div>
                <div className="font-medium">BNB</div>
                <div className="text-gray-500 ml-1">BNB</div>
              </div>
            </td>
            <td className="py-4 px-4 text-right font-medium">$606.65</td>
            <td className="py-4 px-4 text-right text-green-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronUp className="h-3 w-3" />
                0.09%
              </div>
            </td>
            <td className="py-4 px-4 text-right text-red-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronDown className="h-3 w-3" />
                1.20%
              </div>
            </td>
            <td className="py-4 px-4 text-right text-green-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronUp className="h-3 w-3" />
                3.73%
              </div>
            </td>
            <td className="py-4 px-4 text-right">$85,471,956,947</td>
            <td className="py-4 px-4 text-right">
              <div>$1,874,281,784</div>
              <div className="text-gray-500 text-sm">3.08M BNB</div>
            </td>
            <td className="py-4 px-4 text-right">
              <div>140.89M BNB</div>
            </td>
            <td className="py-4 px-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sample%20Output.jpg-5tH5RGehJJvcpPUYqWCg9BVcNx7K7E.jpeg"
                alt="BNB 7-day price chart"
                className="h-10 w-32 object-cover"
                style={{ objectFit: "cover", objectPosition: "0 -510px" }}
              />
            </td>
          </tr>

          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="py-4 px-4">
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-gray-300 hover:text-yellow-400 cursor-pointer" />
                <span>6</span>
              </div>
            </td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-2">
                <div className="bg-purple-600 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center text-xs">
                  S
                </div>
                <div className="font-medium">Solana</div>
                <div className="text-gray-500 ml-1">SOL</div>
              </div>
            </td>
            <td className="py-4 px-4 text-right font-medium">$151.51</td>
            <td className="py-4 px-4 text-right text-green-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronUp className="h-3 w-3" />
                0.53%
              </div>
            </td>
            <td className="py-4 px-4 text-right text-green-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronUp className="h-3 w-3" />
                1.26%
              </div>
            </td>
            <td className="py-4 px-4 text-right text-green-500">
              <div className="flex items-center justify-end gap-1">
                <ChevronUp className="h-3 w-3" />
                14.74%
              </div>
            </td>
            <td className="py-4 px-4 text-right">$78,381,958,631</td>
            <td className="py-4 px-4 text-right">
              <div>$4,881,674,486</div>
              <div className="text-gray-500 text-sm">32.25M SOL</div>
            </td>
            <td className="py-4 px-4 text-right">
              <div>517.31M SOL</div>
            </td>
            <td className="py-4 px-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sample%20Output.jpg-5tH5RGehJJvcpPUYqWCg9BVcNx7K7E.jpeg"
                alt="Solana 7-day price chart"
                className="h-10 w-32 object-cover"
                style={{ objectFit: "cover", objectPosition: "0 -570px" }}
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 rounded-full bg-gray-800 hover:bg-gray-700 p-3 shadow-lg"
        size="icon"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  )
}
