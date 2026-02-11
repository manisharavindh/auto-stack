import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, Phone, Mail, MapPin, Shield, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCarContext } from '../context/CarContext';
import './CarDetailsPage.css';

const CarDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { allCars } = useCarContext();

    // Find the car
    const car = allCars.find(c => c.id === parseInt(id));

    // State
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Handle car not found
    useEffect(() => {
        if (!car && allCars.length > 0) {
            navigate('/inventory');
        }
    }, [car, allCars, navigate]);

    if (!car) return null;

    // Use images array or fallback to single image
    const galleryImages = car.images && car.images.length > 0 ? car.images : [car.image];
    // Default to Car if type is missing (for backward compatibility)
    const isMotorcycle = car.type === 'Motorcycle';

    // Handlers
    const nextImage = (e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setIsLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        document.body.style.overflow = 'auto';
    };

    // Keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isLightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isLightboxOpen]);

    // Features List - Use dynamic features if available, else generic fallback
    const featuresList = car.features && car.features.length > 0
        ? car.features
        : [
            'Premium Sound System', 'Adaptive Cruise Control', 'Heated & Ventilated Seats',
            '360 Degree Camera', 'Carbon Fiber Trim', 'Sport Exhaust',
            'Apple CarPlay / Android Auto', 'Active Suspension'
        ];

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <div className="lightbox-counter">
                            {currentImageIndex + 1} / {galleryImages.length}
                        </div>
                        <button className="lightbox-close" onClick={closeLightbox}>
                            <X size={32} />
                        </button>

                        <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                            <button className="lightbox-nav prev" onClick={prevImage}>
                                <ChevronLeft size={40} />
                            </button>

                            <motion.img
                                key={currentImageIndex}
                                src={galleryImages[currentImageIndex]}
                                alt={`${car.model} view`}
                                className="lightbox-image"
                                initial={{ opacity: 0.5, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2 }}
                            />

                            <button className="lightbox-nav next" onClick={nextImage}>
                                <ChevronRight size={40} />
                            </button>
                        </div>

                        {/* Thumbnail Strip in Lightbox */}
                        <div className="lightbox-thumbnails" onClick={e => e.stopPropagation()}>
                            {galleryImages.map((img, index) => (
                                <div
                                    key={index}
                                    className={`lightbox-thumb ${currentImageIndex === index ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                >
                                    <img src={img} alt="thumbnail" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container car-details-page">
                {/* Header Section */}
                <div className="details-header-section">
                    <button onClick={() => navigate(-1)} className="back-button">
                        <ArrowLeft size={18} /> Back to Inventory
                    </button>

                    <div className="header-content">
                        <div className="header-titles">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {car.year} {car.brand} <span className="text-gradient">{car.model}</span>
                            </motion.h1>
                            <div className="car-badges">
                                <span className="badge">
                                    {isMotorcycle ? 'Motorcycle' : 'Car'}
                                </span>
                                <span className="badge-outline">
                                    Stock #{1000 + car.id}
                                </span>
                                <span className="badge-outline">
                                    <MapPin size={14} /> {car.reg === 'Unregistered' ? 'Showroom' : car.reg}
                                </span>
                            </div>
                        </div>
                        <div className="header-price-mobile">
                            ${car.price.toLocaleString()}
                        </div>
                    </div>
                </div>

                <div className="details-grid">

                    {/* Left Column: Gallery & Info */}
                    <div className="details-main">

                        {/* Interactive Gallery */}
                        <div className="gallery-section">
                            <div className="car-hero-image-container">
                                <button className="expand-btn" onClick={() => openLightbox(currentImageIndex)}>
                                    <Maximize2 size={24} />
                                </button>

                                <motion.img
                                    key={currentImageIndex}
                                    src={galleryImages[currentImageIndex]}
                                    alt={car.model}
                                    className="car-hero-image"
                                    initial={{ opacity: 0.9 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => openLightbox(currentImageIndex)}
                                />

                                <button className="hero-nav prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                                    <ChevronLeft size={24} />
                                </button>
                                <button className="hero-nav next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                                    <ChevronRight size={24} />
                                </button>
                            </div>

                            <div className="thumbnails-wrapper">
                                <div className="thumbnails-row">
                                    {galleryImages.slice(0, 6).map((img, index) => (
                                        <div
                                            key={index}
                                            className={`thumbnail-container ${currentImageIndex === index ? 'active' : ''}`}
                                            onClick={() => {
                                                if (index === 5 && galleryImages.length > 6) {
                                                    openLightbox(5);
                                                } else {
                                                    setCurrentImageIndex(index);
                                                }
                                            }}
                                            style={{ position: 'relative', overflow: 'hidden' }}
                                        >
                                            <img src={img} alt={`View ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            {index === 5 && galleryImages.length > 6 && (
                                                <div style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    background: 'rgba(0,0,0,0.6)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'white',
                                                    fontSize: '1.2rem',
                                                    fontWeight: 'bold',
                                                    zIndex: 2
                                                }}>
                                                    +{galleryImages.length - 6}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Specifications Grid */}
                        <div className="specs-section">
                            <h3 className="section-title">
                                {isMotorcycle ? 'Technical Specifications' : 'Vehicle Specifications'}
                            </h3>
                            <div className="specs-grid-large">
                                {car.specifications && car.specifications.length > 0 ? (
                                    car.specifications.map((spec, index) => (
                                        <div className="spec-box" key={index}>
                                            <span className="spec-label">{spec.label}</span>
                                            <span className="spec-value">{spec.value}</span>
                                        </div>
                                    ))
                                ) : (
                                    <>
                                        <div className="spec-box">
                                            <span className="spec-label">Mileage</span>
                                            <span className="spec-value">{car.mileage.toLocaleString()} {isMotorcycle ? 'km' : 'mi'}</span>
                                        </div>
                                        <div className="spec-box">
                                            <span className="spec-label">Fuel Type</span>
                                            <span className="spec-value">{car.fuel}</span>
                                        </div>
                                        <div className="spec-box">
                                            <span className="spec-label">Year</span>
                                            <span className="spec-value">{car.year}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Description */}
                        <div className='specs-section'>
                            <h3 className="section-title">Overview</h3>
                            <div className="description-section">
                                <p>{car.description}</p>
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className='specs-section'>
                            <h3 className="section-title">Key Features</h3>
                            <div className="features-grid">
                                {featuresList.map((feature, i) => (
                                    <div key={i} className="feature-item">
                                        <div className="feature-icon">
                                            <Check size={14} color="#fff" />
                                        </div>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar (Right) */}
                    <div className="details-sidebar">
                        <div className="price-card">
                            <div className="price-label">Offered At</div>
                            <div className="price-amount">${car.price.toLocaleString()}</div>

                            <div className="verification-badges">
                                <div className="v-badge">
                                    <Shield size={16} /> Verified Dealer
                                </div>
                                <div className="v-badge">
                                    <Check size={16} /> Inspection Passed
                                </div>
                            </div>

                            <div className="inquiry-form">
                                <div className="form-group">
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="tel" placeholder="Phone Number" />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder={`I am interested in this ${car.year} ${car.model}...`}></textarea>
                                </div>
                                <button className="contact-button">
                                    Send Inquiry <Mail size={18} />
                                </button>
                                <button className="call-button">
                                    <Phone size={18} /> (555) 123-4567
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CarDetailsPage;
