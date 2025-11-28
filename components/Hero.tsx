// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
          Kamu ingin fokus? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#672409]">
            dengan kopi?
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg leading-8 text-zinc-600 max-w-2xl mx-auto dark:text-zinc-400">
            Kopi CufuCafa disajikan dengan rasa yang manis dan creamy, dengan cita rasa homemade.
        </p>

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