"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CarProps {
    id: string;
    name: string; // e.g., "Lamborghini Huracan"
    year: number;
    price: string; // Formatted price, e.g., "₹ 3.50 Cr"
    kms: string; // e.g., "2,500 km"
    fuelType: string;
    imageUrl: string;
}

export default function CarCard({ car }: { car: CarProps }) {
    return (
        <Link href={`/inventory/${car.id}`} className="block w-full">
            <motion.div
                className="group relative w-full overflow-hidden rounded-xl bg-bbt-charcoal cursor-pointer"
                initial="rest"
                whileHover="hover"
                animate="rest"
            >
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden">
                    <Image
                        src={car.imageUrl}
                        alt={car.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                    {/* Glow Effect on Hover */}
                    <motion.div
                        className="absolute inset-0 bg-bbt-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ mixBlendMode: "overlay" }}
                    />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 w-full p-6">
                    <motion.div
                        variants={{
                            rest: { y: 20, opacity: 0.8 },
                            hover: { y: 0, opacity: 1 },
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-xs font-bold text-bbt-silver uppercase tracking-wider mb-1">
                                    {car.year} | {car.fuelType}
                                </p>
                                <h3 className="font-heading text-xl font-bold text-white leading-tight mb-1">
                                    {car.name}
                                </h3>
                                <p className="text-sm text-gray-400">{car.kms}</p>
                            </div>
                            <div className="text-right">
                                <motion.span
                                    className="block text-xl font-bold text-bbt-red"
                                    layoutId={`price-${car.id}`}
                                >
                                    {car.price}
                                </motion.span>
                                <motion.span
                                    className="text-[10px] text-white/50 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 block mt-1"
                                >
                                    View Details
                                </motion.span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Lift Effect Border Bottom */}
                <motion.div
                    className="absolute bottom-0 left-0 h-1 w-full bg-bbt-red"
                    variants={{
                        rest: { scaleX: 0, originX: 0 },
                        hover: { scaleX: 1, originX: 0 },
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </motion.div>
        </Link>
    );
}
