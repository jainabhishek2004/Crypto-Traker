# Crypto Market Table

A real-time, dynamic cryptocurrency market table built with Next.js, React, Redux Toolkit, and Recharts.

## 🚀 Demo

![Demo GIF](demo.gif)

Or watch the full walkthrough video: [Demo Video](https://your-demo-video-link.com)

---

## 🛠 Tech Stack

- **Next.js** (App Router, SSR/CSR)
- **React 19**
- **Redux Toolkit** (state management)
- **Recharts** (dynamic sparklines)
- **Tailwind CSS** (UI styling)
- **Radix UI** (accessible UI components)
- **TypeScript**

---

## 🏗️ Architecture

- **App Structure:**
  - `/app` - Next.js app entry
  - `/components` - UI components (including dynamic sparkline)
  - `/lib` - Redux slice, WebSocket simulator, sample data
- **State Flow:**
  - Redux store holds all crypto asset data
  - WebSocket simulator dispatches live price/volume updates
  - Components subscribe to Redux state and re-render on updates
- **Live Updates:**
  - Price, volume, and sparkline charts update in real time
  - Volatility and big moves simulate real market behavior

---

## 🧑‍💻 Setup Instructions

1. **Clone the repo:**
   ```sh
   git clone https://github.com/your-username/crypto-table.git
   cd crypto-table
   ```
2. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   ```
3. **Run the development server:**
   ```sh
   pnpm dev
   # or
   npm run dev
   ```
4. **Open in your browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

---

## 📹 Demo Video/GIF

- **UI Layout:**
  - Responsive table with crypto info, prices, and sparklines
- **Live Updates:**
  - Watch prices and charts update in real time
- **State Flow:**
  - See how Redux state drives the UI
- **Thought Process:**
  - Clean, modular code with best practices for state and UI

> Replace the demo GIF/video link with your own recording!

---

## 📄 License

MIT 
