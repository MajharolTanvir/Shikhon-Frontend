import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="px-5 sm:px-0 container sm:mx-auto">
        <Hero />
        <Features />
      </div>
    </main>
  );
}
