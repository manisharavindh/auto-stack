"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { inventoryCars } from "@/data/cars";
import { notFound } from "next/navigation";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const car = inventoryCars.find((c) => c.id === id);

    if (!car) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-bbt-black text-white">
            <Navbar />

            {/* Hero Section / Main Image */}
            <section className="relative h-[60vh] md:h-[80vh] w-full">
                <Image
                    src={car.imageUrl}
                    alt={car.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bbt-black via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                    <div className="container mx-auto">
                        <motion.h1
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter mb-4"
                        >
                            {car.name}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-300 font-light"
                        >
                            {car.year} • {car.kms} • {car.fuelType}
                        </motion.p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
                {/* Left Column: Gallery & Details */}
                <div className="lg:w-2/3">

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        {/* Simulating gallery images by re-using the main image for now */}
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="relative h-64 rounded-lg overflow-hidden group">
                                <Image
                                    src={car.imageUrl}
                                    alt={`${car.name} view ${i}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Description */}
                    <div className="mb-12">
                        <h3 className="font-heading text-2xl font-bold uppercase mb-4 border-l-4 border-bbt-red pl-4">Vehicle Description</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Experience the thrill of commanding a masterpiece.
                            This {car.name} represents the pinnacle of automotive engineering, combining raw power with exquisite luxury.
                            Meticulously maintained and structurally immaculate, it stands as a testament to its heritage.
                            Finished in {car.exteriorColor || "Standard"} with a handcrafted {car.interiorColor || "Premium"} interior.
                        </p>
                    </div>

                </div>

                {/* Right Column: Spec Sheet & Sticky CTA */}
                <div className="lg:w-1/3">
                    <div className="sticky top-24 bg-bbt-charcoal p-8 rounded-xl border border-white/10 shadow-2xl">
                        <div className="text-3xl font-bold text-bbt-red mb-2">{car.price}</div>
                        <p className="text-gray-400 text-sm mb-6">*Ex-Showroom Price</p>

                        <button className="w-full bg-bbt-red hover:bg-red-700 text-white font-bold py-4 rounded-full font-heading uppercase tracking-widest transition-all mb-4 transform hover:scale-105">
                            Inquire Now
                        </button>
                        <button className="w-full bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-4 rounded-full font-heading uppercase tracking-widest transition-all">
                            Book Test Drive
                        </button>

                        <div className="mt-8">
                            <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-sm">Technical Specifications</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-gray-400">Engine</span>
                                    <span className="font-bold text-white">{car.engine || "N/A"}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-gray-400">Power (BHP)</span>
                                    <span className="font-bold text-white">{car.bhp || "N/A"}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-gray-400">Torque</span>
                                    <span className="font-bold text-white">{car.torque || "N/A"} Nm</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-gray-400">Exterior</span>
                                    <span className="font-bold text-white">{car.exteriorColor || "N/A"}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-gray-400">Interior</span>
                                    <span className="font-bold text-white">{car.interiorColor || "N/A"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
