import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-white px-5 md:px-10 lg:px-20">
      <div className="ring-1 ring-[#F1F1F1] bg-[#F7F7F7] mx-auto rounded-4xl p-6 md:p-10 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Sol Kısım */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-t from-[#000000] to-[#333333] text-transparent bg-clip-text leading-tight">
              Tailor to Your Taste, Customizable Style Filters
            </h2>
            <p className="text-black font-medium text-base sm:text-lg md:text-xl max-w-2xl">
              Dive deeper into customization with our style filters. Whether you
              prefer bold and modern or subtle and classic, adjust the AI
              outputs to match your unique artistic vision. Experiment with
              settings to ensure the final product isn't just generated, but
              genuinely yours.
            </p>

            <div className="pt-8">
              <Link
                href="#preorder"
                className="bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-xl hover:bg-gray-900 transition-colors"
              >
                Preorder for $40
              </Link>
            </div>
          </div>

          {/* Sağ Görsel */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/Frame3.svg"
              alt="Customizable Filters"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain pt-10 lg:pt-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
