'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
        e.preventDefault();
        const sectionId = item.toLowerCase();
        const element = document.getElementById(sectionId);

        if (element) {
            const headerOffset = 96; // Actualizado de 64 para compensar el header más alto (h-24)
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        // Close mobile menu if open
        setIsMenuOpen(false);
    };

    const menuItems = ['Inicio', 'Devoción', 'Ofrendas', 'Servicios', 'Consulta'];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-black/95 backdrop-blur-md shadow-lg'
            : 'bg-black'
            }`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="relative w-16 h-16 bg-black border-2 border-gold-500 rounded-full p-1 transition-transform group-hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                            <img
                                src="/favicon.png"
                                alt="La Santísima Logo"
                                className="w-full h-full object-contain rounded-full"
                            />
                        </div>
                        <span className="text-base md:text-3xl font-bold text-white tracking-widest uppercase">La Santísima</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 pr-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item}
                                href={`#${item === 'Devoción' ? 'devocion' : item === 'Consulta' ? 'contacto' : item.toLowerCase()}`}
                                onClick={(e) => handleNavClick(e, item === 'Devoción' ? 'devocion' : item === 'Consulta' ? 'contacto' : item)}
                                className="text-white/80 hover:text-gold-400 text-sm font-semibold uppercase tracking-widest transition-all hover:scale-110 relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-white transition-transform hover:scale-110"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu with animation */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="py-4 border-t border-white/10">
                        {menuItems.map((item, index) => {
                            const sectionId = item === 'Devoción' ? 'devocion' : item === 'Consulta' ? 'contacto' : item.toLowerCase();
                            return (
                                <Link
                                    key={item}
                                    href={`#${sectionId}`}
                                    onClick={(e) => handleNavClick(e, sectionId)}
                                    className="block text-white py-3 px-2 font-medium hover:bg-white/10 rounded-lg transition-all"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    {item}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </header>
    );
}
