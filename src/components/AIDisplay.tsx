"use client";

export default function AIDisplay() {
  return (
    <>
      <div className="inline-flex justify-center items-center">
        {/* Arkadaki büyüyen yuvarlaklar */}
        <div className="absolute flex ring-1 z-0 ring-black/10 w-[300px] h-[300px] rounded-full bg-black/5 opacity-50 animate-pulse"></div>
        <div className="absolute flex ring-1 z-0 ring-black/10 w-[380px] h-[380px] rounded-full bg-black/5 opacity-40 animate-pulse delay-200"></div>
        <div className="absolute flex ring-1 z-0 ring-black/10 w-[480px] h-[480px] rounded-full bg-black/5 opacity-30 animate-pulse delay-400"></div>
        <div className="absolute flex ring-1 z-0 ring-black/10 w-[600px] h-[600px] rounded-full bg-black/5 opacity-25 animate-pulse delay-600"></div>
        <div className="max-h-28 mx-auto mt-10 z-10">
          <div className="flex items-center text-center bg-white border border-gray-200 shadow-sm rounded-full px-4 py-4">
            {/* Sol taraftaki yuvarlak div */}

            {/* Sol taraftaki yuvarlak div (Logo/İkon) */}
            <img
              src="/Frame6,4.svg"
              alt="AI Logo"
              className="rounded-full bg-gray-200 flex items-center justify-center 
                     w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0"
            />

            {/* Ortadaki sabit yazı (Metin) */}
            <div
              className="flex-1 text-black font-semibold text-sm sm:text-base md:text-lg 
                     mx-3 sm:mx-5 md:mx-7 text-center whitespace-nowrap overflow-hidden text-ellipsis"
            >
              Collaborate faster with Resolve AI tool
            </div>
            {/* Sağdaki tüykalem ikonu */}
            <img src="/Frame6,3.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
