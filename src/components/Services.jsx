import React from 'react';
import { CreditCard, Wrench, Globe, Tag, ArrowRight } from 'lucide-react';
import './Services.css';

const servicesData = [
    {
        icon: <CreditCard size={32} />,
        title: "Bespoke Financing",
        description: "Tailored financial solutions designed to maximize your capital efficiency while acquiring your dream machine.",
        link: "#"
    },
    {
        icon: <Wrench size={32} />,
        title: "Expert Maintenance",
        description: "factory-trained technicians ensuring your vehicle performs at its peak with genuine parts and precision care.",
        link: "#"
    },
    {
        icon: <Globe size={32} />,
        title: "Global Logistics",
        description: "Seamless door-to-door delivery anywhere in the world, handling all customs, insurance, and transport logistics.",
        link: "#"
    },
    {
        icon: <Tag size={32} />,
        title: "Consignment",
        description: "Maximize the value of your asset. We handle marketing, negotiation, and sale while you retain ownership until closing.",
        link: "#"
    }
];

const Services = () => {
    return (
        <section className="services section-padding" id="services">
            <div className="container">
                <div className="services-header">
                    <h2>Elevate your Ride</h2>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div
                            className="service-card glass"
                            key={index}
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a href={service.link} className="service-link">
                                Learn More <ArrowRight size={16} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
