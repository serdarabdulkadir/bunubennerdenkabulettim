import Link from "next/link";

export default function Blog() {
  return (
    <section id="blog" className="bg-white mt-5 pt-20 px-4">
      <div className="max-w-6xl w-full mx-auto rounded-4xl flex flex-col items-center">
        <div className="mb-12 w-full flex flex-col items-center">
          <img
            src="/Frame4.svg"
            alt="Blog Hero"
            className="w-full max-w-3xl h-auto"
          />
          <div className="text-center max-w-4xl pt-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-t from-[#000000] to-[#333333] text-transparent bg-clip-text mb-4">
              Powerful Tools at Your Disposal
            </h1>
            <p className="text-base md:text-xl font-medium text-black pt-3">
              Discovering what methods are effective and which ones aren’t can
              help us increase our search traffic collaboratively.
            </p>
          </div>
        </div>
      </div>

      {/* Ana içerik */}
      <div className="min-h-screen ring-1 ring-gray-200 bg-black/5 p-2 md:2.5 rounded-3xl max-w-7xl mx-auto">
        {/* Üst Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5 mb-2.5">
          {/* Sol Üst */}
          <div className="bg-white ring-1 ring-gray-200 p-8 rounded-3xl shadow w-full h-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Multi-Media Creation
            </h2>
            <p className="text-gray-800 text-base md:text-lg font-medium mb-6">
              Generate anything from static images to animated videos with a
              single prompt. Embrace the true potential of creative diversity.
            </p>
            <img
              src="/Frame5,1.svg"
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Sağ Üst (iki sütunu kapsıyor) */}
          <div className="bg-white ring-1 ring-gray-200 p-8 rounded-3xl shadow w-full h-auto lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Speed and Efficiency
            </h2>
            <p className="text-gray-800 text-base md:text-lg font-medium mb-6 max-w-2xl">
              Within seconds, see your ideas turn into reality. No more waiting
              for inspiration to strike.
            </p>
            <img
              src="/Frame5,2.svg"
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* İkinci Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 mb-2.5">
          <div className="bg-white ring-1 ring-gray-200 p-8 rounded-3xl shadow w-full h-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Multi-Media Creation
            </h2>
            <p className="text-gray-800 text-base md:text-lg font-medium mb-6">
              Generate anything from static images to animated videos with a
              single prompt. Embrace the true potential of creative diversity.
            </p>
            <img
              src="/Frame5,3.svg"
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="bg-white ring-1 ring-gray-200 p-8 rounded-3xl shadow w-full h-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Speed and Efficiency
            </h2>
            <p className="text-gray-800 text-base md:text-lg font-medium mb-6 max-w-2xl">
              Within seconds, see your ideas turn into reality. No more waiting
              for inspiration to strike.
            </p>
            <img
              src="/Frame5,4.svg"
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Üçüncü Grid */}
        <div className="bg-white ring-1 ring-gray-200 p-8 rounded-3xl shadow w-full">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Real-Time Shared Workspaces
          </h2>
          <p className="text-gray-800 text-base md:text-lg font-medium mb-6 max-w-3xl">
            Creativity is often a team effort. Invite team members to join your
            workspace for real-time collaboration. Share prompts, provide
            feedback, and create collectively.
          </p>
          <img
            src="/Frame5,5.svg"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
