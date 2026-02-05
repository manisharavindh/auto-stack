import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Gauge, Fuel, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { cars } from '../data/cars';
import './Inventory.css';
import { useNavigate } from 'react-router-dom';

const Inventory = () => {
    const scrollRef = useRef(null);
    const navigate = useNavigate();

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 400;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Auto scroll effect
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 5) { // Reset if at end
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
                }
            }
        }, 5000); // Scroll every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="inventory section-padding" id="inventory">
            <div className="container">
                <div className="inventory-header">
                    <h2>Recently Parked</h2>
                    <div className="line-dec"></div>
                    <div className="inventory-controls">
                        <button className="nav-btn" onClick={() => scroll('left')}><ArrowLeft size={20} /></button>
                        <button className="nav-btn" onClick={() => scroll('right')}><ArrowRight size={20} /></button>
                        <button className="btn-primary" onClick={() => navigate('/inventory')}>All Collection</button>
                    </div>
                </div>

                <div className="inventory-carousel" ref={scrollRef}>
                    {cars.slice(0, 6).map((car) => (
                        <div key={car.id} className="car-card glass carousel-item">
                            <div className="card-badge">
                                {car.year} • {car.brand}
                            </div>

                            <div className="img-wrapper">
                                <img src={car.image} alt={car.model} draggable="false" />
                                <div className="hover-shine"></div>
                            </div>

                            <div className="card-content">
                                <h3>{car.model}</h3>
                                <div className="price-tag">${car.price.toLocaleString()}</div>

                                <div className="specs-grid">
                                    <div className="spec-item">
                                        <Gauge size={16} />
                                        <div>
                                            <span className="label">Mileage</span>
                                            <span className="value">{car.mileage.toLocaleString()} mi</span>
                                        </div>
                                    </div>
                                    <div className="spec-item">
                                        <Fuel size={16} />
                                        <div>
                                            <span className="label">Fuel</span>
                                            <span className="value">{car.fuel}</span>
                                        </div>
                                    </div>
                                    <div className="spec-item">
                                        <Calendar size={16} />
                                        <div>
                                            <span className="label">Reg</span>
                                            <span className="value">{car.reg}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Inventory;
