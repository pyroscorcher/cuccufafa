// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#672409] backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
            <Link href="/" className="w-max flex-shrink-0 flex items-center gap-2">
                {/* Replaced the "N" box with this Image component */}
                <Image 
                src="/Logo.png"       // Make sure 'logo.png' is in your 'public' folder
                alt="CufuCafa Logo"
                width={32}            // Width in pixels
                height={32}           // Height in pixels
                priority              // Loads the logo immediately
                />
            </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-zinc-200 hover:text-zinc-400 dark:text-zinc-100 dark:hover:text-zinc-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="#" className="text-zinc-200 hover:text-zinc-400 dark:text-zinc-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Fitur
              </Link>
              <Link href="#" className="text-zinc-200 hover:text-zinc-400 dark:text-zinc-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Promo
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-white hover:bg-zinc-800 text-black dark:bg-white dark:text-black dark:hover:bg-zinc-200 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}