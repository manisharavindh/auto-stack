"use client";

import React, { useRef, useEffect, useState } from "react";
import RecentlyParkedCard from "./RecentlyParkedCard";
import { inventoryCars } from "@/data/cars";

export default function RecentlyParkedSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Scroll handlers using standard DOM API
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
    };

    // Auto Scroll
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused && scrollContainerRef.current) {
                // Check if we reached the end
                if (scrollContainerRef.current.scrollLeft + scrollContainerRef.current.clientWidth >= scrollContainerRef.current.scrollWidth - 10) {
                    scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
                }
            }
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section className="bg-[#F5F5F5] py-24 px-4 overflow-hidden">
            <div className="container mx-auto max-w-7xl">

                {/* Header Row */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-black whitespace-nowrap">
                        Recently Parked
                    </h2>

                    {/* Divider Line */}
                    <div className="hidden md:block h-[1px] bg-gray-300 w-full mx-8" />

                    <button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full font-bold text-sm whitespace-nowrap transition-colors">
                        All Collection
                    </button>
                </div>

                {/* Carousel Container */}
                <div
                    className="relative group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Left Arrow */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm text-black p-3 rounded-full shadow-lg hover:bg-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>

                    {/* Content Scroll Area */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {/* Adding specific padding-left to ensure first card isn't cut off on small screens if needed,
                            but flex gap usually handles it. */}
                        {inventoryCars.map((car, index) => (
                            <RecentlyParkedCard key={`${car.id} -${index} `} car={car} />
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm text-black p-3 rounded-full shadow-lg hover:bg-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>

            </div>

            <div className='fixed bottom-8 right-8 z-50'>
                <button className="bg-[#E53e29] p-4 rounded-md shadow-lg hover:bg-red-600 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                </button>
            </div>
        </section>
    );
}
