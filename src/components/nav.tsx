"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const NAV_HEIGHT = 96; // h-24 = 24*4px = 96px

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
                setIsVisible(true);
            }

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navClass = `
    fixed top-0 left-0 right-0 z-50
    transition-all duration-300 ease-in-out
    ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"}
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
  `;

    // Conditional link/button styles
    const linkClass = `
    transition 
    hover:text-blue-600
    ${isScrolled ? "text-gray-700" : "text-white"}
  `;
    const buttonClass = `
    px-6 py-3 rounded-lg font-semibold transition
    ${isScrolled ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-600 text-white hover:bg-blue-700"}
  `;

    return (
        <nav className={navClass} style={{ height: `${NAV_HEIGHT}px` }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-between items-center h-full">
                    <div className="flex items-center">
                        <Image
                            src="/Expert-Movers-Logo.png"
                            alt="Expert Movers Logo"
                            width={150}
                            height={50}
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#services" className={linkClass}>
                            Services
                        </a>
                        <a href="#calculator" className={linkClass}>
                            Get Quote
                        </a>
                        <a href="#testimonials" className={linkClass}>
                            Reviews
                        </a>
                        <a href="#contact" className={linkClass}>
                            Contact
                        </a>
                        <a href="tel:+17733607602" className={buttonClass}>
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
