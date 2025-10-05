import Link from "next/link";
import Image from "next/image";

export default function Customers() {
  return (
    <>
      <section id="customers" className="bg-white px-5 md:px-10 lg:px-20 py-5">
        <div className="w-full max-w-[1400px] mx-auto bg-[url(/Frame2.svg)] bg-cover bg-center rounded-3xl ring-1 ring-[#F1F1F1] p-6 md:p-10 lg:p-16">
          {/* Üst Kısım */}
          <div className="flex justify-center items-center">
            <button className="bg-black/5 ring-1 ring-gray-200 text-black text-center text-xs md:text-sm lg:text-[14px] px-4 py-2 md:px-5 md:py-3 font-medium rounded-xl">
              HOW IT WORKS
            </button>
          </div>

          <div className="pt-6 text-center mx-auto max-w-3xl">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight bg-[linear-gradient(to_top,#333333,#333333,#000000,#000000)] inline-block text-transparent bg-clip-text mb-5">
              Your Artistry, Enhanced by AI
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-black font-medium max-w-[700px] mx-auto">
              Enter your prompt, and let our AI bring your creative visions to
              life — effortlessly generate images, videos, and designs.
            </p>
          </div>

          {/* Kartlar */}
          <div className="bg-black/5 mt-20 rounded-3xl p-1.5 md:p-2 lg:p-2.5 flex flex-col gap-2.5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
              {/* Sol Üst - Type Your Prompt */}
              <div className="bg-white rounded-3xl shadow p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Type Your Prompt
                  </h2>
                  <p className="text-base md:text-lg text-black font-medium mb-6">
                    Start with a simple sentence or a word. The clearer your
                    prompt, the better the results.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/Frame2,1.svg"
                    alt="Type Prompt Illustration"
                    width={400}
                    height={250}
                    className="w-[80%] md:w-[70%] lg:w-[60%] h-auto"
                  />
                </div>
              </div>

              {/* Sağ Üst - AI Generates Your Media */}
              <div className="bg-white rounded-3xl shadow  flex flex-col justify-between p-6 sm:p-10">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 ">
                    AI Generates Your Media
                  </h2>
                  <p className="text-base md:text-lg text-black font-medium mb-6">
                    Watch as the AI interprets your prompt and crafts diverse
                    media files, from graphics to video clips.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/Frame2,2.svg"
                    alt="AI Generates Media"
                    width={400}
                    height={250}
                    className="w-[80%] md:w-[70%] lg:w-[60%] h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Alt - Refine or Accept */}
            <div className="bg-white bg-cover bg-center shadow rounded-3xl w-full flex flex-col lg:flex-row items-center lg:items-start p-6 sm:p-10">
              {/* Sol metin kısmı */}
              <div className="lg:w-2/3 w-full text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black mb-3">
                  Refine or Accept
                </h3>
                <p className="text-base sm:text-lg lg:text-xl">
                  Use our suggestions to refine the output or accept it as is.
                  Creativity is at your fingertips.
                </p>
                <div className="mt-6 sm:mt-10">
                  <Link
                    href="#preorder"
                    className="bg-black text-white px-4 py-3.5 rounded-[12px] inline-block"
                  >
                    Preorder for $40
                  </Link>
                </div>
              </div>

              <div className=" w-full flex justify-center lg:justify-end">
                <Image
                  src="/Frame2,3.svg"
                  alt="Refine Illustration"
                  width={871}
                  height={494}
                  className="w-full max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
