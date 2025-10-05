import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen bg-[url(/Frame1,1.svg)] flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-20 pt-32 md:pt-40"
      >
        <div className="max-w-5xl mx-auto">
          {/* Başlık */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight bg-[linear-gradient(to_top,#333333,#333333,#000000,#000000)] inline-block text-transparent bg-clip-text mb-6">
            Instantly Transform Your Ideas into Stunning Media
          </h1>

          {/* Açıklama */}
          <p className="text-base sm:text-lg lg:text-2xl text-black mx-auto mb-10 max-w-2xl">
            Enter your prompt, and let our AI bring your creative visions to
            life — effortlessly generate images, videos, and designs.
          </p>

          {/* Buton */}
          <div>
            <Link
              href="#preorder"
              className=" bg-black  inset-shadow-sm inset-shadow-[#362c2c] text-white px-4 py-3.5 rounded-[12px] "
            >
              Preorder for $40
            </Link>
          </div>
        </div>

        {/* Görsel */}
        <div className="pt-16 md:pt-24 w-full flex justify-center">
          <img
            src="/Frame1.svg"
            alt=""
            className="w-full max-w-[1400px] h-auto px-4"
          />
        </div>
      </section>
    </>
  );
}
