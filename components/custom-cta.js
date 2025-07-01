import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CustomCta({ data }) {
  const { title, subtitle, button } = data
  return (
    <section className="py-20 bg-[#12181c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400 text-lg mb-8">{subtitle}</p>
        <Link
          href={button.href}
          className="inline-flex items-center gap-2 bg-[#4ade80] text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-green-400 transition-colors text-lg"
        >
          {button.text} <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  )
}
