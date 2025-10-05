import Image from "next/image";

export default function AnalyticsSection() {
  return (
    <section
      id="analytics"
      className="bg-white min-h-screen items-center justify-center text-center px-4 sm:px-6 lg:px-12"
    >
      <div className="bg-[url(/Frame9.svg)] bg-cover bg-center rounded-4xl ring-1 ring-gray-200">
        {/* Başlık ve açıklama */}
        <div className="max-w-3xl mx-auto pt-16 sm:pt-24 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight bg-[linear-gradient(to_top,#333333,#333333,#000000,#000000)] inline-block text-transparent bg-clip-text">
            Insights That Inspire Advanced Creation Analytics
          </h2>
          <p className="text-base sm:text-lg font-medium text-black mt-5">
            Make informed decisions based on data. Our advanced analytics tools
            track your most used prompts and successful outputs, giving you
            valuable insights into your creative trends and preferences.
          </p>
        </div>

        {/* Görsel alanı */}
        <div className="relative w-full max-w-5xl mx-auto my-12 sm:my-16 md:my-20 p-2.5 bg-black/5 rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-300">
          <img
            src="/Frame8.svg"
            alt="Analytics main visual"
            className="object-cover rounded-2xl"
          />
          <img
            src="/Frame8,2.svg"
            alt="Analytics overlay"
            className=" absolute top-1/4 left-1/4 -translate-x-1/4 -translate-y-1/4 p-10 sm:p-6 md:p-10"
          />
        </div>

        {/* Alt açıklama */}
        <p className="text-black text-lg sm:text-xl md:text-2xl font-medium pb-16 sm:pb-24 md:pb-32 max-w-2xl mx-auto px-4">
          Use this data to streamline your creative process and optimize your
          future projects.
        </p>
      </div>
    </section>
  );
}
