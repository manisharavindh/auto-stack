"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SellingHook() {
    const [timeLeft, setTimeLeft] = useState(29 * 60); // 29 minutes in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 29 * 60));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs
            .toString()
            .padStart(2, "0")}`;
    };

    return (
        <section className="py-24 bg-bbt-charcoal relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-bbt-red/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 uppercase leading-tight">
                            Sell Your Car in <span className="text-bbt-red">29 Minutes</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Experience the fastest, most transparent luxury car selling process.
                            Get a competitive offer and complete the paperwork before the timer runs out.
                            No hassle, just performance.
                        </p>
                        <ul className="space-y-4 mb-8 text-left inline-block">
                            {[
                                "Instant Valuation",
                                "Doorstep Inspection",
                                "Immediate Payment"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-gray-200">
                                    <span className="w-2 h-2 bg-bbt-red rounded-full mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div>
                            <Link href="/sell">
                                <button className="bg-white text-bbt-black hover:bg-gray-200 font-bold py-3 px-8 rounded-full font-heading tracking-wider transition-colors">
                                    GET AN OFFER NOW
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Countdown Graphic */}
                <div className="lg:w-1/2 flex justify-center">
                    <motion.div
                        className="relative"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Outer Ring */}
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-bbt-charcoal bg-bbt-black shadow-2xl flex items-center justify-center relative">
                            <div className="absolute inset-0 rounded-full border-4 border-bbt-red/30 animate-pulse-slow"></div>
                            {/* Time */}
                            <div className="text-center">
                                <span className="block text-6xl md:text-7xl font-mono font-bold text-white tracking-widest tabular-nums">
                                    {formatTime(timeLeft)}
                                </span>
                                <span className="text-bbt-red font-bold uppercase tracking-widest text-sm mt-2 block">
                                    Time to Sell
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
