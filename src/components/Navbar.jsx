import React, { useState, useEffect } from 'react';
import { Menu, Search, Globe } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate(`/${targetId}`);
        } else {
            const element = document.querySelector(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="brand-logo">LBX World</Link>

                <div className="nav-links">
                    <Link to="/" onClick={(e) => handleNavClick(e, '#home')}>Home</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/" onClick={(e) => handleNavClick(e, '#services')}>Services</Link>
                    <Link to="/" onClick={(e) => handleNavClick(e, '#contact')}>Contact</Link>
                </div>

                <div className="nav-actions">
                    <div className="lang-switcher">
                        <Globe size={18} />
                        <span>ENG</span>
                    </div>
                    <button className="icon-btn">
                        <Search size={20} />
                    </button>
                    <button className="icon-btn mobile-menu">
                        <Menu size={20} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
