"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll efekti
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md backdrop-blur-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-[72px]">
        {/* Logo */}
        <Link href="#home" className="flex items-center">
          <img
            src="/Logo.svg"
            alt="Resolve Logo"
            className="w-[100px] sm:w-[110px] h-auto cursor-pointer"
          />
        </Link>

        {/* Masaüstü Menü */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-800">
          <li>
            <Link href="#customers" className="hover:text-black transition">
              Customers
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-black transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#blog" className="hover:text-black transition">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-black transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Preorder Butonu (masaüstü) */}
        <div className="hidden md:block">
          <Link
            href="#preorder"
            className="bg-black text-white px-5 py-3.5 rounded-xl font-medium hover:opacity-90 transition"
          >
            Preorder for $40
          </Link>
        </div>

        {/* Mobil Menü Butonu */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu Toggle"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobil Menü - Tam ekran ve soldan sağa açılıyor */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 15 }}
            className="md:hidden absolute left-0 top-[72px] w-full h-[calc(100vh-72px)] bg-white shadow-lg border-t border-gray-100 z-40 flex flex-col"
          >
            <div className="flex flex-col items-start justify-start p-6 space-y-6 text-lg font-medium text-gray-800">
              <Link href="#customers" onClick={handleLinkClick}>
                Customers
              </Link>
              <Link href="#about" onClick={handleLinkClick}>
                About
              </Link>
              <Link href="#blog" onClick={handleLinkClick}>
                Blog
              </Link>
              <Link href="#contact" onClick={handleLinkClick}>
                Contact
              </Link>

              <Link
                href="#preorder"
                onClick={handleLinkClick}
                className="mt-24 bg-black text-white px-12 py-5 mx-auto text-xl rounded-2xl font-medium hover:opacity-90 transition transform hover:scale-105"
              >
                Preorder for $40
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Smooth Scroll */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </nav>
  );
}
