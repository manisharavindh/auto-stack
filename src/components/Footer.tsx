import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-16 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="font-heading text-3xl font-bold mb-6">
                            <span className="text-bbt-red">LBX</span> WORLD
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The content is for demonstration purposes only. This is a high-fidelity recreation of a luxury automotive platform.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-heading font-bold uppercase tracking-widest mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-bbt-red transition-colors">Inventory</Link></li>
                            <li><Link href="#" className="hover:text-bbt-red transition-colors">Sell Your Car</Link></li>
                            <li><Link href="#" className="hover:text-bbt-red transition-colors">Finance</Link></li>
                            <li><Link href="#" className="hover:text-bbt-red transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold uppercase tracking-widest mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-bbt-red transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-bbt-red transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-bbt-red transition-colors">Disclaimer</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-heading font-bold uppercase tracking-widest mb-6">Stay Updated</h4>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 px-4 py-2 rounded-l-md focus:outline-none focus:border-bbt-red w-full text-sm placeholder-gray-500"
                            />
                            <button className="bg-bbt-red px-4 py-2 rounded-r-md hover:bg-red-700 transition-colors">
                                &rarr;
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} LbxSuite. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <span>Made by LbxSuite.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
