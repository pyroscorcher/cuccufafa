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

      {/* Simple Footer */}
      <footer className="py-10 text-center text-sm text-zinc-500 border-t border-zinc-200 dark:border-zinc-800">
        <p>© 2025 CufuCafa All rights reserved.</p>
      </footer>
    </div>
  );
}