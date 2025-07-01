import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhatWeDo({ data }) {
  const { tag, title, subtitle, service_card } = data;
  console.log("🚀 ~ WhatWeDo ~ data:", data);
  console.log('image ulrl', `${service_card[0].icon.url}`)
  return (
    <section id="what-we-do" className="py-20 md:py-28 bg-[#1a2228]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-sm font-bold text-[#4ade80] uppercase tracking-wider mb-2">{tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-400 md:text-lg">{subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {service_card.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
          <div className="hidden lg:block">
            <Image
              src={`${process.env.STRAPI_API_URL}${service_card[0].icon.url}`}
              alt="Tech Illustration"
              width={500}
              height={700}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center mt-8">
          <div className="hidden lg:block">
            {/* <Image
              src="/placeholder.svg?width=500&height=500&text=Consulting+Illustration"
              alt="Consulting Illustration"
              width={500}
              height={500}
              className="rounded-lg mx-auto"
            /> */}
          </div>
          <div className="space-y-8">
            {service_card.slice(3).map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const { title, Description, icon } = service;
  console.log("🚀 ~ ServiceCard ~ title:", title)
  console.log("🚀 ~ ServiceCard ~ icon:", icon)
  console.log("🚀 ~ ServiceCard ~ Description:", Description)
  // Check if the icon is an image (since the JSON data provides image data)
  const isImage = icon && icon.url;
  console.log("🚀 ~ ServiceCard ~ isImage:", isImage)

  return (
    <div className="bg-[#252f38] p-6 rounded-lg border border-gray-700/50">
      <div className="flex items-start gap-4">
        <div className="bg-[#4ade80]/10 p-3 rounded-full">
          {/* If the icon is an image, render it as an img tag, otherwise render it as a React component */}
          {isImage ? (
            <Image
              src={`${process.env.STRAPI_API_URL}${icon.url}`}
              alt={icon.alternativeText || "Service Icon"}
              width={640}
              height={491}
              className="w-6 h-6 text-[#4ade80]"
            />
          ) : (
            <ArrowRight className="w-6 h-6 text-[#4ade80]" />
          )}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{Description}</p>
          <Link href="#" className="font-semibold text-[#4ade80] hover:text-green-300 inline-flex items-center gap-2">
            Discover More <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
