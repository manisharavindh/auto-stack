import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-bg">
                <img src="/assets/hb3.png" alt="Luxury Car" />
                <div className="gradient-overlay"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text">
                    <motion.p
                        className="brand-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        LuxeMotion
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        Luxury Without Limits
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        A curated selection of the world's finest automobiles. <br />
                        Unrivaled performance. Unparalleled elegance.
                    </motion.p>

                    <motion.button
                        className="btn-primary"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    >
                        Explore Collection <ArrowRight size={20} />
                    </motion.button>
                </div>

                {/* <motion.div
                    className="spec-card glass"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                    <div className="spec-header">
                        <h3>LuxeVanta V16</h3>
                        <ArrowRight size={16} />
                    </div>
                    <div className="specs-list">
                        <span>2200 HP V16 engine</span>
                        <span>1.8 seconds to 60 mph</span>
                        <span>Limited to 3 units</span>
                        <span>AI-driven</span>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default Hero;
