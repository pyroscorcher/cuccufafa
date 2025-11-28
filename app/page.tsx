import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#DDA66D] dark:bg-black font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800">
      
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Example Content Section to show scrolling */}
        <section className="py-24 bg-[#DDA66D] dark:bg-zinc-900/50">
           <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Jangan lupa fufufafa
              </h2>
           </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="py-10 text-center text-sm text-zinc-500 border-t border-zinc-200 dark:border-zinc-800">
        <p>© 2025 CufuCafa All rights reserved.</p>
      </footer>
    </div>
  );
}