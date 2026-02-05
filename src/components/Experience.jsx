import React from 'react';
import { Check } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    return (
        <section className="experience section-padding" id="services">
            <div className="container">
                <div className="experience-wrapper">
                    <div className="exp-content">
                        <span className="subtitle">BESPOKE SERVICES</span>
                        <h2>Tailored to Your<br />Exacting Standards</h2>
                        <p className="exp-description">
                            We understand that true luxury lies in the details. Our concierge service ensures every aspect of your ownership experience is flawless, from acquisition to delivery.
                        </p>

                        <ul className="services-list">
                            <li>
                                <div className="check-icon"><Check size={16} /></div>
                                <span>Global Sourcing & Acquisition</span>
                            </li>
                            <li>
                                <div className="check-icon"><Check size={16} /></div>
                                <span>Private Collection Management</span>
                            </li>
                            <li>
                                <div className="check-icon"><Check size={16} /></div>
                                <span>Secure Global Logistics</span>
                            </li>
                            <li>
                                <div className="check-icon"><Check size={16} /></div>
                                <span>VIP Track Days & Events</span>
                            </li>
                        </ul>

                        <button className="btn-outline" style={{ marginTop: '2rem' }}>Learn More</button>
                    </div>

                    <div className="exp-image-container">
                        <div className="exp-image glass">
                            <img src="/assets/interior.png" alt="Luxury Interior" />
                        </div>
                        <div className="exp-deco"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
