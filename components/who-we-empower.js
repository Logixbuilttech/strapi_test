export default function WhoWeEmpower({ data }) {
  const { tag, title, subtitle, audiences } = data
  return (
    <section id="who-we-empower" className="py-20 md:py-28 bg-[#1a2228]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-sm font-bold text-[#4ade80] uppercase tracking-wider mb-2">{tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-400 md:text-lg">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div key={index} className="bg-[#252f38] p-8 rounded-lg text-center border border-gray-700/50">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#4ade80]/10 p-4 rounded-full">
                    <Icon className="w-8 h-8 text-[#4ade80]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{audience.title}</h3>
                <p className="text-gray-400">{audience.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
