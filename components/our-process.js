import Link from "next/link"

export default function OurProcess({ data }) {
  const { tag, title, subtitle, steps, cta } = data
  return (
    <section id="our-process" className="py-20 md:py-28 bg-[#f3f4f6] text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-sm font-bold text-green-600 uppercase tracking-wider mb-2">{tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 md:text-lg">{subtitle}</p>
        </div>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="flex items-start gap-6 md:gap-8 mb-8">
                <div className="flex flex-col items-center">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && <div className="w-px h-16 bg-gray-300 mt-4"></div>}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-4">{cta.text}</p>
          <Link
            href={cta.href}
            className="inline-block bg-gray-900 text-white font-bold py-3 px-8 rounded-md hover:bg-gray-800 transition-colors text-lg"
          >
            {cta.buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}
