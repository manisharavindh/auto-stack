"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SellCarForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        year: "",
        condition: "",
        contactName: "",
        contactPhone: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            setStep(4); // Success step
        }, 1000);
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-bbt-charcoal p-8 rounded-2xl shadow-2xl border border-white/10">
            {/* Progress Bar */}
            <div className="flex justify-between mb-8 relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-700 -z-0"></div>
                <div
                    className="absolute top-1/2 left-0 h-1 bg-bbt-red -z-0 transition-all duration-300"
                    style={{ width: `${((step - 1) / 2) * 100}%` }}
                ></div>
                {[1, 2, 3].map((s) => (
                    <div
                        key={s}
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-colors ${s <= step ? "bg-bbt-red text-white" : "bg-gray-700 text-gray-400"
                            }`}
                    >
                        {s}
                    </div>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h3 className="text-2xl font-bold font-heading uppercase text-white mb-6">Car Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Brand</label>
                                <input
                                    type="text" name="brand" value={formData.brand} onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-bbt-red focus:outline-none"
                                    placeholder="e.g. Audi"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Model</label>
                                <input
                                    type="text" name="model" value={formData.model} onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-bbt-red focus:outline-none"
                                    placeholder="e.g. R8"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Year</label>
                                <select
                                    name="year" value={formData.year} onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-bbt-red focus:outline-none"
                                >
                                    <option value="">Select Year</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="Older">Older</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Condition</label>
                                <select
                                    name="condition" value={formData.condition} onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-bbt-red focus:outline-none"
                                >
                                    <option value="">Select Condition</option>
                                    <option value="Like New">Like New</option>
                                    <option value="Excellent">Excellent</option>
                                    <option value="Good">Good</option>
                                    <option value="Fair">Fair</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={nextStep}
                                className="bg-bbt-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full font-heading uppercase tracking-widest transition-colors"
                            >
                                Next Step
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h3 className="text-2xl font-bold font-heading uppercase text-white mb-6">Your Information</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Full Name</label>
                                <input
                                    type="text" name="contactName" value={formData.contactName} onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-bbt-red focus:outline-none"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Phone Number</label>
                                <input
                                    type="tel" name="contactPhone" value={formData.contactPhone} onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-bbt-red focus:outline-none"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                        </div>
                        <div className="mt-8 flex justify-between">
                            <button
                                onClick={prevStep}
                                className="text-gray-400 hover:text-white font-bold py-3 px-8 font-heading uppercase tracking-widest transition-colors"
                            >
                                Back
                            </button>
                            <button
                                onClick={nextStep}
                                className="bg-bbt-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full font-heading uppercase tracking-widest transition-colors"
                            >
                                Review
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h3 className="text-2xl font-bold font-heading uppercase text-white mb-6">Review Details</h3>
                        <div className="bg-black/30 p-6 rounded-lg mb-8">
                            <p className="text-gray-400 mb-2"><strong className="text-white">Car:</strong> {formData.year} {formData.brand} {formData.model}</p>
                            <p className="text-gray-400 mb-2"><strong className="text-white">Condition:</strong> {formData.condition}</p>
                            <p className="text-gray-400 mb-2"><strong className="text-white">Name:</strong> {formData.contactName}</p>
                            <p className="text-gray-400"><strong className="text-white">Phone:</strong> {formData.contactPhone}</p>
                        </div>
                        <div className="mt-8 flex justify-between">
                            <button
                                onClick={prevStep}
                                className="text-gray-400 hover:text-white font-bold py-3 px-8 font-heading uppercase tracking-widest transition-colors"
                            >
                                Back
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="bg-bbt-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full font-heading uppercase tracking-widest transition-colors shadow-glow"
                            >
                                Submit Request
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 4 && (
                    <motion.div
                        key="step4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                    >
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold font-heading uppercase text-white mb-4">Request Received!</h3>
                        <p className="text-gray-400 text-lg max-w-md mx-auto">
                            Our valuation experts will contact you within 29 minutes with a competitive offer.
                        </p>
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    );
}
