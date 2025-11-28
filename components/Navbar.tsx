"use client"; // <--- 1. This is required for interactivity (onClick)

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // <--- 2. State to track menu open/close

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#672409] backdrop-blur-md border-b border-zinc-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <Link href="/" className="w-max flex-shrink-0 flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="CufuCafa Logo"
              width={128}
              height={128} // Note: You might want to adjust this if the logo looks too tall in the h-16 container
              className="object-contain h-12 w-auto" // Added this to ensure it fits within the navbar height
              priority
            />
          </Link>

          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-zinc-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="#" className="text-zinc-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Fitur
              </Link>
              <Link href="#" className="text-zinc-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Promo
              </Link>
            </div>
          </div>

          {/* Desktop CTA (Hidden on Mobile) */}
          <div className="hidden md:block">
            <Link
              href="http://ipb.link/preorder-cufucafa"
              className="bg-white hover:bg-zinc-200 text-[#672409] px-4 py-2 rounded-full text-sm font-bold transition-colors"
            >
              Pesan Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-200 hover:text-white hover:bg-[#5a1f08] focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon logic: Show 'X' if open, 'Hamburger' if closed */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Area */}
      {isOpen && (
        <div className="md:hidden bg-[#672409] border-b border-zinc-200/20" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)} // Close menu when clicked
              className="text-zinc-200 hover:text-white hover:bg-[#5a1f08] block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link 
              href="#" 
              onClick={() => setIsOpen(false)}
              className="text-zinc-200 hover:text-white hover:bg-[#5a1f08] block px-3 py-2 rounded-md text-base font-medium"
            >
              Fitur
            </Link>
            <Link 
              href="#" 
              onClick={() => setIsOpen(false)}
              className="text-zinc-200 hover:text-white hover:bg-[#5a1f08] block px-3 py-2 rounded-md text-base font-medium"
            >
              Promo
            </Link>
            
            {/* Mobile CTA Button */}
            <div className="mt-4 pt-4 border-t border-[#7a2e0d]">
                <Link
                href="http://ipb.link/preorder-cufucafa"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-white text-[#672409] px-4 py-3 rounded-full text-base font-bold"
                >
                Pesan Sekarang
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}