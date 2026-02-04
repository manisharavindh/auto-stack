"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-bbt-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-heading text-2xl md:text-3xl font-bold tracking-tighter text-white">
                    <span className="text-bbt-red">LBX</span> WORLD
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link
                        href="/inventory"
                        className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors"
                    >
                        Inventory
                    </Link>
                    <Link
                        href="/sell"
                        className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors"
                    >
                        Sell Your Car
                    </Link>
                    <Link
                        href="/#showroom"
                        className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors"
                    >
                        Showroom
                    </Link>
                    <Link
                        href="/#about"
                        className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors"
                    >
                        About
                    </Link>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <button className="hidden md:block border border-white/30 hover:border-white text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
                        Contact Us
                    </button>
                    {/* Mobile Menu Icon (Placeholder) */}
                    <div className="md:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
