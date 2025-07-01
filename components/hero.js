import Link from "next/link";

export default function Hero({ data }) {
  const { supertitle, title, subtitle, button, backgroundImage } = data;

  const backgroundImageUrl = backgroundImage?.url
    ? `${process.env.STRAPI_API_URL || ""}${backgroundImage.url}`
    : "";

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32 lg:py-48"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <p className="text-lg md:text-xl font-semibold text-[#4ade80] mb-2">
          {supertitle}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-4">
          {title}
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
          {subtitle}
        </p>
        <Link
          href={button.href}
          className="inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition-colors text-lg"
        >
          {button.text} 
        </Link>
      </div>
    </section>
  );
}