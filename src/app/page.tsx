"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecentlyParkedSection from "@/components/RecentlyParkedSection";
import SellingHook from "@/components/SellingHook";
import Showroom360 from "@/components/Showroom360";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bbt-black text-white selection:bg-bbt-red selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* New Light Inventory Section */}
      <RecentlyParkedSection />

      {/* Selling Hook */}
      <div id="sell-your-car">
        <SellingHook />
      </div>

      {/* 360 Showroom */}
      <section id="showroom" className="relative h-screen w-full">
        <div className="absolute top-10 left-0 right-0 z-10 text-center pointer-events-none">
          <span className="text-bbt-red font-bold uppercase tracking-widest text-sm block mb-2">Virtual Experience</span>
          <h2 className="font-heading text-4xl font-bold uppercase text-white">
            360&deg; Showroom
          </h2>
          <p className="text-gray-400 text-sm mt-2">Drag to rotate • Scroll to zoom</p>
        </div>
        <Showroom360 />
      </section>

      <Footer />
    </main>
  );
}
