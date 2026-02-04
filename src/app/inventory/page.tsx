"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilterSidebar from "@/components/FilterSidebar";
import CarCard from "@/components/CarCard";

// Expanded Dummy Data for Inventory Page
import { inventoryCars } from "@/data/cars";

export default function InventoryPage() {
    const [selectedBrands, setSelectedBrands] = React.useState<string[]>([]);
    const [selectedYear, setSelectedYear] = React.useState<string>("");

    const toggleBrand = (brand: string) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter(b => b !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    const resetFilters = () => {
        setSelectedBrands([]);
        setSelectedYear("");
    };

    const filteredCars = inventoryCars.filter(car => {
        // Filter by Brand
        if (selectedBrands.length > 0) {
            // Check if car name contains any of the selected brands
            const brandMatch = selectedBrands.some(brand => car.name.toLowerCase().includes(brand.toLowerCase().split(' ')[0]));
            // Simple match logic: if car name includes "Lamborghini", it matches "Lamborghini" brand. 
            // Note: Data names are like "Lamborghini Huracan", Brand is "Lamborghini".
            if (!brandMatch) return false;
        }

        // Filter by Year
        if (selectedYear) {
            if (selectedYear === "2020") {
                if (car.year > 2020) return false;
            } else if (car.year.toString() !== selectedYear) {
                return false;
            }
        }

        return true;
    });

    return (
        <main className="min-h-screen bg-bbt-black text-white">
            <Navbar />

            {/* Header */}
            <div className="pt-32 pb-12 px-6 bg-bbt-black border-b border-white/10">
                <div className="container mx-auto">
                    <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
                        Exclusive <span className="text-bbt-red">Collezione</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        Browse our curated selection of the world's finest automobiles.
                        Each vehicle is inspected and certified for excellence.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <div className="lg:w-1/4">
                        <FilterSidebar
                            selectedBrands={selectedBrands}
                            onBrandChange={toggleBrand}
                            selectedYear={selectedYear}
                            onYearChange={setSelectedYear}
                            onReset={resetFilters}
                        />
                    </div>

                    {/* Grid */}
                    <div className="lg:w-3/4">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-gray-400 text-sm italic">{filteredCars.length} vehicles found</span>
                        </div>

                        {filteredCars.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredCars.map((car) => (
                                    <CarCard key={car.id} car={car} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white/5 rounded-lg border border-white/10">
                                <p className="text-xl text-gray-400 font-heading uppercase">No vehicles match your criteria.</p>
                                <button onClick={resetFilters} className="mt-4 text-bbt-red font-bold hover:underline">Clear Filters</button>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
