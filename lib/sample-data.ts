import type { CryptoAsset } from "./features/crypto-slice"

export const initialCryptoData: CryptoAsset[] = [
  {
    id: "bitcoin",
    rank: 1,
    name: "Bitcoin",
    symbol: "BTC",
    logo: "₿",
    price: 93759.48,
    priceChange1h: 0.43,
    priceChange24h: 0.93,
    priceChange7d: 11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    circulatingSupply: 19.85,
    maxSupply: 21,
    chartData: [93000, 93500, 94000, 94500, 95000, 96000, 93759.48],
    isFavorite: false,
  },
  {
    id: "ethereum",
    rank: 2,
    name: "Ethereum",
    symbol: "ETH",
    logo: "Ξ",
    price: 1802.46,
    priceChange1h: 0.6,
    priceChange24h: 3.21,
    priceChange7d: 13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    circulatingSupply: 120.71,
    maxSupply: null,
    chartData: [1700, 1720, 1750, 1780, 1790, 1800, 1802.46],
    isFavorite: false,
  },
  {
    id: "tether",
    rank: 3,
    name: "Tether",
    symbol: "USDT",
    logo: "₮",
    price: 1.0,
    priceChange1h: 0.0,
    priceChange24h: 0.0,
    priceChange7d: 0.04,
    marketCap: 145320022085,
    volume24h: 92288882007,
    circulatingSupply: 145.27,
    maxSupply: null,
    chartData: [0.99, 1.01, 1.00, 1.00, 1.00, 1.00, 1.00],
    isFavorite: false,
  },
  {
    id: "xrp",
    rank: 4,
    name: "XRP",
    symbol: "XRP",
    logo: "X",
    price: 2.22,
    priceChange1h: 0.46,
    priceChange24h: 0.54,
    priceChange7d: 6.18,
    marketCap: 130073814966,
    volume24h: 5131481491,
    circulatingSupply: 58.39,
    maxSupply: 100,
    chartData: [2.10, 2.15, 2.18, 2.20, 2.21, 2.22, 2.22],
    isFavorite: false,
  },
  {
    id: "bnb",
    rank: 5,
    name: "BNB",
    symbol: "BNB",
    logo: "B",
    price: 606.65,
    priceChange1h: 0.09,
    priceChange24h: -1.2,
    priceChange7d: 3.73,
    marketCap: 85471956947,
    volume24h: 1874281784,
    circulatingSupply: 140.89,
    maxSupply: 200,
    chartData: [590, 595, 600, 605, 606, 607, 606.65],
    isFavorite: false,
  },
  {
    id: "solana",
    rank: 6,
    name: "Solana",
    symbol: "SOL",
    logo: "S",
    price: 151.51,
    priceChange1h: 0.53,
    priceChange24h: 1.26,
    priceChange7d: 14.74,
    marketCap: 78381958631,
    volume24h: 4881674486,
    circulatingSupply: 517.31,
    maxSupply: null,
    chartData: [140, 145, 147, 149, 150, 151, 151.51],
    isFavorite: false,
  },
  {
    id: "cardano",
    rank: 7,
    name: "Cardano",
    symbol: "ADA",
    logo: "A",
    price: 0.45,
    priceChange1h: 0.21,
    priceChange24h: 1.05,
    priceChange7d: 5.32,
    marketCap: 15987654321,
    volume24h: 987654321,
    circulatingSupply: 35.5,
    maxSupply: 45,
    chartData: [0.40, 0.42, 0.43, 0.44, 0.45, 0.45, 0.45],
    isFavorite: false,
  },
  {
    id: "dogecoin",
    rank: 8,
    name: "Dogecoin",
    symbol: "DOGE",
    logo: "D",
    price: 0.12,
    priceChange1h: -0.32,
    priceChange24h: 2.15,
    priceChange7d: -3.45,
    marketCap: 16543210987,
    volume24h: 1234567890,
    circulatingSupply: 138.7,
    maxSupply: null,
    chartData: [0.10, 0.11, 0.12, 0.12, 0.12, 0.12, 0.12],
    isFavorite: false,
  },
  {
    id: "polkadot",
    rank: 9,
    name: "Polkadot",
    symbol: "DOT",
    logo: "P",
    price: 6.78,
    priceChange1h: 0.87,
    priceChange24h: -0.54,
    priceChange7d: 7.65,
    marketCap: 8765432109,
    volume24h: 543210987,
    circulatingSupply: 1293.4,
    maxSupply: null,
    chartData: [6.50, 6.60, 6.65, 6.70, 6.75, 6.78, 6.78],
    isFavorite: false,
  },
  {
    id: "polygon",
    rank: 10,
    name: "Polygon",
    symbol: "MATIC",
    logo: "M",
    price: 0.56,
    priceChange1h: 1.23,
    priceChange24h: 3.45,
    priceChange7d: -2.34,
    marketCap: 5432109876,
    volume24h: 321098765,
    circulatingSupply: 9701.2,
    maxSupply: 10000,
    chartData: [0.50, 0.52, 0.54, 0.55, 0.56, 0.56, 0.56],
    isFavorite: false,
  },
]
