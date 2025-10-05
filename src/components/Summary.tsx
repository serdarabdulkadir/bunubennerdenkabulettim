import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section
      id="summary"
      className="bg-[url(/Frame10,1.svg)] bg-cover bg-center text-center py-5 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 rounded-3xl"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header logo */}
        <img
          src="/Frame10.svg"
          alt="Summary header visual"
          className="py-20 sm:py-16 md:py-20 w-full  mx-auto object-contain"
        />

        {/* Başlık */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-[linear-gradient(to_top,#333333,#333333,#000000,#000000)] inline-block text-transparent bg-clip-text leading-tight">
          Defining a New Way to Work
        </h1>

        {/* Açıklama */}
        <p className=" sm:text-lg md:text-xl font-medium max-w-2xl mx-auto text-black pt-4 sm:pt-5 pb-10 sm:pb-16 md:pb-20">
          Creativity is often a team effort. Invite team members to join your
          workspace for real-time collaboration. Share prompts, provide
          feedback, and create collectively.
        </p>
      </div>
    </section>
  );
}
