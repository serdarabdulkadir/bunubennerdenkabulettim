import Link from "next/link";
import Image from "next/image";

import AIDisplay from "./AIDisplay";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="relative bg-[url(/Frame6.svg)] bg-cover bg-center mt-10 px-5 md:px-10 lg:px-20 py-16 overflow-hidden"
      >
        <div className="h-full flex flex-col items-center justify-center text-center relative z-10">
          {/* Üstteki Buton */}
          <div className="flex justify-center items-center mx-auto pt-5">
            <button className="bg-black/5 ring-1 ring-gray-200 text-black text-center text-xs md:text-sm lg:text-[14px] px-3 py-2 md:px-4 md:py-3 font-medium rounded-xl">
              WE REDEFINED COLLABORATION
            </button>
          </div>

          {/* Başlık */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold pt-5 bg-[linear-gradient(to_top,#333333,#333333,#000000,#000000)] inline-block text-transparent bg-clip-text max-w-[90%] md:max-w-[60%] lg:max-w-[70%] mx-auto leading-tight">
            Defining A New Way To Work
          </h1>

          {/* Açıklama */}
          <p className="text-base md:text-lg lg:text-xl text-black font-medium max-w-[90%] md:max-w-[70%] lg:max-w-[45%] mt-5 mx-auto">
            Creativity is often a team effort. Invite team members to join your
            workspace for real-time collaboration. Share prompts, provide
            feedback, and create collectively.
          </p>
          <div className="p-84">
            <AIDisplay />
          </div>
          {/* Dekoratif dairesel pattern */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full border border-gray-200 opacity-20 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
}
