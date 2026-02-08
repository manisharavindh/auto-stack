import React, { useState } from 'react';
import { Phone, MessageCircle, X, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './FloatingContact.css';

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const contactOptions = [
        {
            icon: <Phone size={20} />,
            label: 'Call Sales',
            action: () => window.location.href = 'tel:+1234567890',
            color: '#25D366' // WhatsApp/Phone green-ish, or keep theme
        },
        {
            icon: <MessageCircle size={20} />,
            label: 'Whatapp Us',
            action: () => window.open('https://wa.me/1234567890', '_blank'),
            color: '#25D366'
        }
    ];

    return (
        <div className="floating-contact-wrapper">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="contact-options"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        {contactOptions.map((option, index) => (
                            <button
                                key={index}
                                className="contact-option-btn glass"
                                onClick={option.action}
                            >
                                <span className="icon">{option.icon}</span>
                                <span className="label">{option.label}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className={`main-fab ${isOpen ? 'open' : ''}`}
                onClick={toggleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {isOpen ? <X size={24} /> : <Phone size={24} />}
            </motion.button>
        </div>
    );
};

export default FloatingContact;
