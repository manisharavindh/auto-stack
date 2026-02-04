"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CarProps {
    id: string;
    name: string;
    year: number;
    price: string;
    kms: string;
    fuelType: string;
    imageUrl: string;
}

export default function RecentlyParkedCard({ car }: { car: CarProps }) {
    return (
        <div className="bg-white rounded-sm border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-[380px] w-[300px] md:w-[320px] flex-shrink-0 relative group snap-start block">

            {/* Top Content Section */}
            <div className="p-5 flex-1 relative">
                {/* Decorative Top Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-bbt-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Tag */}
                <div className="flex justify-between items-start mb-2">
                    <span className="inline-block bg-black text-white text-[9px] font-bold px-2 py-1 uppercase tracking-widest">
                        {car.year}
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-light">
                        Ready for Delivery
                    </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-black mb-1 truncate tracking-tight group-hover:text-bbt-red transition-colors duration-300" title={car.name}>
                    {car.name}
                </h3>

                {/* Price */}
                <p className="text-lg font-normal text-gray-800 mb-4 font-serif italic">
                    {car.price}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-3">
                    {/* Kms */}
                    <div className="flex flex-col">
                        <span className="text-[9px] text-gray-400 uppercase tracking-wide mb-1">Driven</span>
                        <span className="text-[11px] font-medium text-black">{car.kms}</span>
                    </div>

                    {/* Fuel */}
                    <div className="flex flex-col border-l border-gray-100 pl-2">
                        <span className="text-[9px] text-gray-400 uppercase tracking-wide mb-1">Fuel</span>
                        <span className="text-[11px] font-medium text-black">{car.fuelType}</span>
                    </div>

                    {/* Reg State (Static) */}
                    <div className="flex flex-col border-l border-gray-100 pl-2">
                        <span className="text-[9px] text-gray-400 uppercase tracking-wide mb-1">Reg.</span>
                        <span className="text-[11px] font-medium text-black">MH</span>
                    </div>
                </div>
            </div>

            {/* Bottom Image Section */}
            <div className="relative h-40 w-full bg-gray-50 mt-auto overflow-hidden">
                <Image
                    src={car.imageUrl}
                    alt={car.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Link href={`/inventory/${car.id}`} className="absolute inset-0 z-10" />
            </div>
        </div>
    );
}
