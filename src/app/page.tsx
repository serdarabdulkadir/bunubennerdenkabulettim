import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Customers from "@/components/Customers";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Preorve from "@/components/Preorve";
import Analytics from "@/components/Analytics";
import Summary from "@/components/Summary";
import Footer from "@/components/Footer";
const Home: React.FC = () => {
  return (
    <div className="bg-white font-latin">
      {" "}
      {/* Navbar */} <Navbar /> {/* anasayfa */}{" "}
      <main className="pt-[72px]">
        {" "}
        <Hero /> <Customers /> <About /> <Blog /> <Contact /> <Preorve />{" "}
        <Analytics /> <Summary /> <Footer />{" "}
      </main>{" "}
    </div>
  );
};
export default Home;
