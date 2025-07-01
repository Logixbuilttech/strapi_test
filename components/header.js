"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Briefcase } from "lucide-react"

export default function Header({ links }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[#12181c]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Briefcase className="h-8 w-8 text-[#4ade80]" />
            <span className="text-xl font-bold text-white">RenewEdge</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#1a2228]">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-[#252f38] rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
