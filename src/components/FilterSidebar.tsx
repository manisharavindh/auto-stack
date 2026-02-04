"use client";

import React from "react";

interface FilterSidebarProps {
    selectedBrands: string[];
    onBrandChange: (brand: string) => void;
    selectedYear: string;
    onYearChange: (year: string) => void;
    onReset: () => void;
}

export default function FilterSidebar({
    selectedBrands,
    onBrandChange,
    selectedYear,
    onYearChange,
    onReset,
}: FilterSidebarProps) {

    const brands = ["Lamborghini", "Ferrari", "Porsche", "Rolls-Royce", "Bentley", "Audi", "Mercedes-AMG", "McLaren"];

    return (
        <aside className="w-full md:w-64 lg:w-80 bg-bbt-charcoal p-6 rounded-xl border border-white/10 h-fit">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-bold text-xl text-white uppercase tracking-wider">
                    Filters
                </h3>
                <button
                    onClick={onReset}
                    className="text-xs text-bbt-red font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                    Reset All
                </button>
            </div>

            {/* Brand Filter */}
            <div className="mb-8">
                <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wide">Brand</h4>
                <div className="space-y-2">
                    {brands.map((brand) => (
                        <div key={brand} className="flex items-center">
                            <input
                                type="checkbox"
                                id={`brand-${brand}`}
                                checked={selectedBrands.includes(brand)}
                                onChange={() => onBrandChange(brand)}
                                className="w-4 h-4 rounded border-gray-600 bg-black/50 text-bbt-red focus:ring-bbt-red focus:ring-offset-bbt-charcoal accent-bbt-red"
                            />
                            <label htmlFor={`brand-${brand}`} className="ml-3 text-sm text-gray-300 hover:text-white cursor-pointer transition-colors">
                                {brand}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Year */}
            <div>
                <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wide">Model Year</h4>
                <select
                    value={selectedYear}
                    onChange={(e) => onYearChange(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 text-gray-300 text-sm rounded-lg focus:ring-bbt-red focus:border-bbt-red block p-2.5 outline-none"
                >
                    <option value="">Any Year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020 & Older</option>
                </select>
            </div>

        </aside>
    );
}
