"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SellCarForm from "@/components/SellCarForm";

export default function SellPage() {
    return (
        <main className="min-h-screen bg-bbt-black text-white">
            <Navbar />

            <div className="pt-32 pb-24 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
                        Sell Your <span className="text-bbt-red">Supercar</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Get the best value for your exotic vehicle. Our transparent, fast, and hassle-free process ensures you get an offer in just 29 minutes.
                    </p>
                </div>

                <SellCarForm />

            </div>

            <Footer />
        </main>
    );
}
