import React from 'react';
import { MapPin, Phone, MessageCircle, Facebook, Linkedin, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="contact-card-wrapper">

                    {/* Left Side - Form */}
                    <div className="contact-form-side">
                        <div className="form-header">
                            <h2>Just Say Hi !</h2>
                            <p>Tell us more about you and we'll contact you soon.</p>
                        </div>

                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <input type="text" placeholder=" " id="name" required />
                                <label htmlFor="name">Name</label>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <input type="email" placeholder=" " id="email" required />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="form-group">
                                    <input type="tel" placeholder=" " id="phone" />
                                    <label htmlFor="phone">Phone Number</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <textarea placeholder=" " id="message" rows="4"></textarea>
                                <label htmlFor="message">Type your message here</label>
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="submit-btn" onClick={() => alert("Thank you. We will be in touch.")}>Submit</button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side - Info */}
                    <div className="contact-info-side">
                        <div className="carbon-texture"></div>
                        <div className="info-content">
                            <div className="info-block">
                                <h3>Contact Information</h3>
                                <div className="info-item">
                                    <MapPin size={18} />
                                    <span>123 Luxury Lane, Beverly Hills, CA 90210</span>
                                </div>
                                <div className="info-item">
                                    <Phone size={18} />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="info-item">
                                    <MessageCircle size={18} />
                                    <span>+1 (555) 987-6543</span>
                                </div>
                            </div>

                            <div className="info-block">
                                <h3>Follow Us</h3>
                                <div className="social-icons">
                                    <a href="#"><Facebook size={20} /></a>
                                    <a href="#"><Linkedin size={20} /></a>
                                    <a href="#"><Twitter size={20} /></a>
                                </div>
                            </div>

                            <div className="watermark">
                                Contact Us
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
