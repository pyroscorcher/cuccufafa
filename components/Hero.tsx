// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm leading-6 text-zinc-600 mb-8 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          <span>v2.0 is now available</span>
          <span className="ml-2 inline-block h-4 w-px bg-zinc-200 dark:bg-zinc-700"></span>
          <a href="#" className="ml-2 font-semibold text-blue-600 dark:text-blue-400 hover:underline">Read more &rarr;</a>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
          Build your next idea <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            faster than ever.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg leading-8 text-zinc-600 max-w-2xl mx-auto dark:text-zinc-400">
          A properly structured Next.js website template. Includes a responsive navbar, a modern hero section, and dark mode support out of the box.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-white dark:text-black dark:hover:bg-zinc-200">
            Start Building
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Abstract Visual / Image Placeholder */}
        <div className="mt-16 flow-root sm:mt-24">
          <div className="-m-2 rounded-xl bg-zinc-900/5 p-2 ring-1 ring-inset ring-zinc-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 dark:bg-white/10 dark:ring-white/10">
             {/* Replace the src below with your actual hero image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                 <p className="text-zinc-400 dark:text-zinc-600 font-mono text-sm">[ Hero Image Placeholder ]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}