export default function TheEdge({ data }) {
  const { title, features } = data
  return (
    <section className="py-20 md:py-28 bg-[#12181c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-[#1a2228] p-6 rounded-lg text-center border border-gray-700/50">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#4ade80]/10 p-4 rounded-full">
                    <Icon className="w-8 h-8 text-[#4ade80]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
