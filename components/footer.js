import Link from "next/link"
import { Briefcase, Facebook, Twitter, Instagram } from "lucide-react"

const socialIcons = {
  Facebook: <Facebook size={20} />,
  Twitter: <Twitter size={20} />,
  Instagram: <Instagram size={20} />,
}

export default function Footer({ data }) {
  const { logo, description, socials, links, legal } = data
  return (
    <footer className="bg-[#1a2228] text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Briefcase className="h-8 w-8 text-[#4ade80]" />
              <span className="text-xl font-bold text-white">{logo}</span>
            </Link>
            <p className="max-w-xs">{description}</p>
            <div className="flex space-x-4 mt-6">
              {socials.map((social) => (
                <a key={social.name} href={social.href} className="text-gray-400 hover:text-white">
                  <span className="sr-only">{social.name}</span>
                  {socialIcons[social.name]}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            {links.map((linkGroup) => (
              <div key={linkGroup.title}>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">{linkGroup.title}</h3>
                <ul className="mt-4 space-y-2">
                  {linkGroup.items.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700/50 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; {legal.copyright}</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href={legal.privacy.href} className="text-sm text-gray-500 hover:text-white">
              {legal.privacy.name}
            </a>
            <a href={legal.terms.href} className="text-sm text-gray-500 hover:text-white">
              {legal.terms.name}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
