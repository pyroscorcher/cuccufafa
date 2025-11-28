import Image from "next/image";

// List your images here so we can map through them cleanly
const testimonialImages = [
  "/testi1.png",
  "/testi2.png",
  "/testi3.png",
  "/testi4.png",
  "/testi5.png",
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#DDA66D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            💬 Testimoni Pelanggan
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Apa kata mereka tentang CufuCafa
          </p>
        </div>

        {/* Container Logic:
           - Mobile: 'flex' + 'overflow-x-auto' creates a horizontal scroll.
           - Desktop (md+): 'grid' + 'grid-cols-3' creates a clean layout.
        */}
        <div className="
          flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory 
          md:grid md:grid-cols-3 md:overflow-visible md:pb-0
          scrollbar-hide
        ">
          {testimonialImages.map((src, index) => (
            <div 
              key={index} 
              className="
                min-w-[280px] flex-shrink-0 snap-center 
                bg-white dark:bg-zinc-900 
                rounded-2xl p-2 shadow-sm border border-zinc-200 dark:border-zinc-800
                hover:shadow-md transition-shadow duration-300
              "
            >
              <div className="relative w-full overflow-hidden rounded-xl">
                {/* We use 'w-full h-auto' to let the image define its height naturally,
                   or you can use 'aspect-[9/16]' if they are phone screenshots.
                */}
                <Image
                  src={src}
                  alt={`Testimoni ${index + 1}`}
                  width={500}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}