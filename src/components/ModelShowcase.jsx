
import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import './ModelShowcase.css';

const ModelShowcase = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    // Scroll progress for the entire section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Transform scroll progress to frame index (0 to 39 for 40 frames)
    const frameCount = 40;
    const currentFrame = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

    // Text opacity transformations
    const text1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0, 1, 0]);
    const text2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
    const text3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.9], [0, 1, 0]);

    // Scale text for better effect
    const text1Scale = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0.8, 1, 1.2]);
    const text2Scale = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0.8, 1, 1.2]);
    const text3Scale = useTransform(scrollYProgress, [0.7, 0.8, 0.9], [0.8, 1, 1.2]);

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages = [];
            const placeholderSrc = '/assets/hb3.png'; // Fallback

            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                // File naming: ezgif-frame-001.jpg
                const paddedIndex = i.toString().padStart(3, '0');
                const imgSrc = `/assets/car-side/ezgif-frame-${paddedIndex}.jpg`;

                img.src = imgSrc;

                await new Promise((resolve) => {
                    img.onload = () => resolve();
                    img.onerror = () => {
                        console.warn(`Failed to load frame ${i}, falling back`);
                        img.src = placeholderSrc;
                        resolve();
                    };
                });
                loadedImages.push(img);
            }

            setImages(loadedImages);
            setLoading(false);
        };

        loadImages();
    }, []);

    // Draw to canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');

        // Resize canvas to fit window
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Draw immediately after resize
            const index = Math.floor(currentFrame.get());
            if (images[index]) {
                renderFrame(images[index], context, canvas.width, canvas.height);
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Animation loop
        const unsubscribe = currentFrame.on("change", (latest) => {
            const index = Math.floor(latest);
            if (images.length > 0 && images[index]) {
                renderFrame(images[index], context, canvas.width, canvas.height);
            }
        });

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            unsubscribe();
        };
    }, [images, currentFrame]);

    const renderFrame = (image, ctx, width, height) => {
        ctx.clearRect(0, 0, width, height);

        // "Cover" fit logic for canvas
        const scale = Math.max(width / image.width, height / image.height);
        const x = (width / 2) - (image.width / 2) * scale;
        const y = (height / 2) - (image.height / 2) * scale;

        ctx.drawImage(image, x, y, image.width * scale, image.height * scale);

        // Overlay for text readability
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.fillRect(0, 0, width, height);
    };

    return (
        <div ref={containerRef} className="model-showcase-container">
            <div className="sticky-wrapper">
                <canvas ref={canvasRef} className="showcase-canvas" />

                {loading && (
                    <div className="loading-overlay">
                        <div className="spinner"></div>
                        <p>Initializing M Performance...</p>
                    </div>
                )}

                {/* Text Overlays - Scrollytelling */}
                <div className="overlay-content">
                    <motion.div style={{ opacity: text1Opacity, scale: text1Scale }} className="scroll-text">
                        <h2>The M340i xDrive</h2>
                        <p className="highlight">LBX WORLD BESTSELLER</p>
                        <p>3.0L M TwinPower Turbo Inline-6</p>
                    </motion.div>

                    <motion.div style={{ opacity: text2Opacity, scale: text2Scale }} className="scroll-text">
                        <h2>Track-Ready Precision</h2>
                        <p>Adaptive M Suspension & Differential</p>
                    </motion.div>

                    <motion.div style={{ opacity: text3Opacity, scale: text3Scale }} className="scroll-text">
                        <h2>Unmatched Presence</h2>
                        <p>Aerodynamic excellence meets daily drivability.</p>
                    </motion.div>
                </div>

                <div className="scroll-indicator">
                    <span>Scroll to Explore</span>
                    {/* <div className="mouse-icon"></div> */}
                </div>
            </div>
        </div>
    );
};

export default ModelShowcase;
