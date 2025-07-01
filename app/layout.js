import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "RenewEdge Solutions",
  description: "Empowering Smarter Growth Through Technology, Design, and Digital Innovation",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#12181c] text-gray-300`}>{children}</body>
    </html>
  )
}
