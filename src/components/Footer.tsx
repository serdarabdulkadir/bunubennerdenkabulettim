import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[url(/Frame11.svg)] bg-cover bg-center my-5 pb-10 mx-auto max-w-7xl w-full text-white pt-10 rounded-3xl px-4 sm:px-8 lg:px-16">
      {/* Üst kısım */}
      <img
        src="/Frame11,1.svg"
        alt="Footer Logo"
        className="mb-10 pt-10 mx-auto w-48 sm:w-56 md:w-64"
      />

      <div className="text-center justify-center items-center mb-16 mx-auto max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
          Ready to Unleash Your Creativity?
        </h2>
        <p className="text-lg sm:text-xl mb-6 text-gray-200">
          Sign up today and transform your creative process with the power of
          AI.
        </p>
        <Link
          href="#preorder"
          className="inline-block bg-white text-black px-6 py-3.5 rounded-xl shadow-inner ring-2 ring-[#E6E6E6] hover:bg-gray-100 transition"
        >
          Preorder for $40
        </Link>
      </div>

      {/* Alt kısım */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 text-[18px] font-medium bg-gradient-to-t from-[#121212] to-[#1A1A1A] rounded-3xl p-10 lg:py-16 lg:px-20 ring-1 ring-[#262626]">
        {/* Sol sütun */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start space-x-2 mb-10">
            <img src="/Frame11,3.svg" alt="Resolve" className="w-28 sm:w-36" />
          </div>
          <p className="text-gray-200 text-base  sm:text-lg leading-relaxed">
            The Pavyon template lets businesses show off their products with a
            really eye-catching design and a fun online experience.
          </p>
        </div>

        {/* Orta sütun */}
        <div className="lg:w-1/3 ml-0  md:ml-48  text-center lg:text-left">
          <h3 className="text-xl font-medium mb-10">Menu</h3>
          <ul className="space-y-3 text-[#999999]">
            <li>
              <Link href="#home" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="#features" className="hover:text-gray-300">
                Features
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-gray-300">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#blog" className="hover:text-gray-300">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Sağ sütun */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h3 className="text-xl font-medium mb-10">Utilities</h3>
          <ul className="space-y-3 text-[#999999]">
            <li>
              <Link href="#sign-in" className="hover:text-gray-300">
                Sign in
              </Link>
            </li>
            <li>
              <Link href="/create-account" className="hover:text-gray-300">
                Create an account
              </Link>
            </li>
            <li>
              <Link href="/404" className="hover:text-gray-300">
                404
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-gray-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-condition" className="hover:text-gray-300">
                Terms and Condition
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
