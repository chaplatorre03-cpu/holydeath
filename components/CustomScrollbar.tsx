'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomScrollbar() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isHoveringScrollbar, setIsHoveringScrollbar] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const thumbRef = useRef<HTMLDivElement>(null);

    // Update scroll percentage
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const maxScroll = scrollHeight - clientHeight;
        const percentage = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
        setScrollPercentage(percentage);

        // Show scrollbar only if there's content to scroll
        setIsVisible(scrollHeight > clientHeight);
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // Handle track click
    const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target !== e.currentTarget) return;

        const trackRect = e.currentTarget.getBoundingClientRect();
        const clickY = e.clientY - trackRect.top;
        const trackHeight = trackRect.height;

        const scrollPercentage = clickY / trackHeight;
        const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        window.scrollTo({ top: scrollPercentage * maxScroll, behavior: 'smooth' });
    };

    // Handle thumb drag
    const handleThumbMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;

            const windowHeight = window.innerHeight;
            const mouseY = e.clientY;

            // Calcular el porcentaje de scroll basado en la posición del mouse
            let scrollRatio = mouseY / windowHeight;
            scrollRatio = Math.max(0, Math.min(1, scrollRatio));

            // Aplicar el scroll
            const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (maxScroll > 0) {
                window.scrollTo({ top: scrollRatio * maxScroll });
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.body.style.userSelect = 'none';
        } else {
            document.body.style.userSelect = '';
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.body.style.userSelect = '';
        };
    }, [isDragging]);

    // Calculate thumb position and height
    const getThumbStyle = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollHeight <= clientHeight) {
            return { height: '0px', transform: 'translateY(0px)', opacity: 0 };
        }

        // Calcular altura del thumb
        const thumbHeightRatio = clientHeight / scrollHeight;
        const thumbHeight = Math.max(50, clientHeight * thumbHeightRatio);

        // Margen inferior para que el thumb no baje completamente hasta el final
        const bottomMargin = 40;

        // Calcular posición del thumb
        const maxThumbTop = clientHeight - thumbHeight - bottomMargin;
        const thumbTop = (scrollPercentage / 100) * maxThumbTop;

        return {
            height: `${thumbHeight}px`,
            transform: `translateY(${thumbTop}px)`,
            opacity: 1,
        };
    };

    if (!isVisible) return null;

    return (
        <div
            className="hidden md:block fixed right-3 top-4 bottom-6 w-3 z-[99999]"
            onMouseEnter={() => setIsHoveringScrollbar(true)}
            onMouseLeave={() => setIsHoveringScrollbar(false)}
        >
            {/* Track */}
            <div
                className="relative w-full h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-inner cursor-pointer"
                onClick={handleTrackClick}
            >
                {/* Progress Indicator (behind thumb) */}
                <div
                    className="absolute left-0 right-0 top-0 bg-gradient-to-b from-gold-500/20 to-transparent rounded-full transition-all duration-300 pointer-events-none"
                    style={{ height: `${scrollPercentage}%` }}
                ></div>

                {/* Thumb */}
                <div
                    ref={thumbRef}
                    onMouseDown={handleThumbMouseDown}
                    style={getThumbStyle()}
                    className={`absolute left-0 right-0 rounded-full cursor-grab active:cursor-grabbing transition-all duration-300 ${isDragging || isHoveringScrollbar
                        ? 'bg-white shadow-lg shadow-white/20 scale-105'
                        : 'bg-gold-500 shadow-sm'
                        }`}
                >
                    {/* Grip Lines */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
                        <div className={`w-1.5 h-0.5 rounded-full transition-colors ${isDragging || isHoveringScrollbar ? 'bg-gold-500' : 'bg-white/50'
                            }`}></div>
                        <div className={`w-1.5 h-0.5 rounded-full transition-colors ${isDragging || isHoveringScrollbar ? 'bg-gold-500' : 'bg-white/50'
                            }`}></div>
                        <div className={`w-1.5 h-0.5 rounded-full transition-colors ${isDragging || isHoveringScrollbar ? 'bg-gold-500' : 'bg-white/50'
                            }`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
