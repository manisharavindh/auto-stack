import React, { useState } from 'react';
import './BrandMarquee.css';
import { useNavigate } from 'react-router-dom';

const brands = [
    "ROLLS-ROYCE", "BENTLEY", "PORSCHE", "FERRARI", "LAMBORGHINI", "ASTON MARTIN", "MERCEDES-MAYBACH", "MASERATI",
    "BUGATTI", "MCLAREN", "AUDI", "BMW", "LEXUS", "KOENIGSEGG", "PAGANI"
];

const BrandMarquee = () => {
    const navigate = useNavigate();
    const [isPaused, setIsPaused] = useState(false);

    const handleBrandClick = (brand) => {
        // Clean up brand name for URL (e.g. AUDI RS -> AUDI) or just pass as is
        // Going with direct match since data uses uppercase
        navigate(`/inventory?brand=${brand}`);
    };

    return (
        <section className="brand-section">
            <div className="container">
                <h4 className="section-title text-center">LEADING LUXURY BRANDS</h4>
                <div
                    className="marquee-wrapper"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="marquee-content" style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
                        {brands.map((brand, i) => (
                            <div key={i} className="brand-item" onClick={() => handleBrandClick(brand)}>
                                {brand}
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {brands.map((brand, i) => (
                            <div key={`dup-${i}`} className="brand-item" onClick={() => handleBrandClick(brand)}>
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandMarquee;
