"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const carImageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Intro Animation
            const tl = gsap.timeline();

            tl.from(".hero-text", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            })
                .from(carImageRef.current, {
                    y: 100,
                    opacity: 0,
                    duration: 1.5,
                    ease: "power4.out",
                }, "-=0.5");

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-center pt-24 overflow-hidden"
        >
            {/* Halo Background Effect */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Main Content */}
            <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center">

                {/* Welcome Text */}
                <p className="hero-text text-gray-400 text-sm md:text-base mb-4 tracking-wide font-light">
                    Welcome to the Dream Destination for Supercar Lovers.
                </p>

                {/* Main Heading */}
                <h1 className="hero-text font-heading text-5xl md:text-7xl lg:text-8xl font-normal text-white mb-10 tracking-tight">
                    Supercars <span className="font-light text-gray-400">for</span> Superstars
                </h1>

                {/* Action Bar: Search & Discover */}
                <div className="hero-text flex flex-col md:flex-row items-center gap-4 mb-16 w-full max-w-xl">
                    {/* Search Input */}
                    <div className="relative flex-1 w-full md:w-auto">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search Your Dream Car Here"
                            className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all"
                        />
                        <div className="absolute inset-y-0 right-4 flex items-center cursor-pointer hover:text-white text-gray-400 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                        </div>
                    </div>

                    {/* Discover Button */}
                    <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 transition-transform hover:scale-105">
                        Discover Collection
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>

                {/* ----------------------------------------------------------- */}
                {/* IMAGE PLACEHOLDER: USER, PUT YOUR CAR IMAGE URL BELOW      */}
                {/* ----------------------------------------------------------- */}
                <div
                    ref={carImageRef}
                    className="relative w-full max-w-5xl aspect-[16/9] md:aspect-[2/1] mt-8"
                >
                    {/* REPLACE THE 'src' BELOW WITH YOUR OWN IMAGE URL */}
                    <Image
                        src=""
                        alt="Highlight Supercar"
                        fill
                        className="object-contain object-bottom drop-shadow-2xl"
                        priority
                    />

                    {/* Gradient Fade at Bottom to blend with section below */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                </div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-[10px] tracking-widest uppercase"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-[20px] h-[32px] border border-gray-600 rounded-full flex justify-center pt-2">
                    <div className="w-[2px] h-[6px] bg-white rounded-full" />
                </div>
                Scroll Down
            </motion.div>
        </section>
    );
}
