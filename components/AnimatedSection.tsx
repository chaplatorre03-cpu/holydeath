'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'fade';
    delay?: number;
    duration?: number;
    threshold?: number;
    once?: boolean;
}

export default function AnimatedSection({
    children,
    className = '',
    animation = 'fade-up',
    delay = 0,
    duration = 600,
    threshold = 0.1,
    once = true
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setHasAnimated(true);
                } else if (!once) {
                    // Only reset visibility if 'once' is false
                    setIsVisible(false);
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px 50px 0px'
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            // If once is true and it has already animated, we don't need to observe anymore
            if (!(once && hasAnimated)) {
                observer.observe(currentRef);
            }
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, once, hasAnimated]);

    const getAnimationStyles = () => {
        const baseStyles = {
            opacity: isVisible ? 1 : 0,
            transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        };

        const transforms: Record<string, string> = {
            'fade-up': isVisible ? 'translateY(0)' : 'translateY(40px)',
            'fade-left': isVisible ? 'translateX(0)' : 'translateX(-20px)',
            'fade-right': isVisible ? 'translateX(0)' : 'translateX(20px)',
            'scale': isVisible ? 'scale(1)' : 'scale(0.9)',
            'fade': 'none'
        };

        return {
            ...baseStyles,
            transform: transforms[animation]
        };
    };

    return (
        <div ref={ref} className={className} style={getAnimationStyles()}>
            {children}
        </div>
    );
}
