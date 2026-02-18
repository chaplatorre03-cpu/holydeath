'use client';

import AnimatedSection from './AnimatedSection';

export default function WhatIsSection() {
    const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById('servicios');
        if (element) {
            const headerOffset = 96;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="que-es" className="pt-6 pb-10 bg-black overflow-hidden relative">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <AnimatedSection animation="fade-up" className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mystical-shadow">
                        ¿Quién es La Santa Muerte?
                    </h2>
                    <div className="w-32 h-1 bg-gold-600 mx-auto mt-6"></div>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Illustration */}
                    <AnimatedSection animation="fade-right" className="flex justify-center relative">
                        <div className="bg-black border border-gold-900/50 rounded-3xl p-6 md:p-10 max-w-lg w-full hover-lift shadow-[0_0_50px_rgba(212,175,55,0.05)]">
                            {/* Symbolic Altar Representation */}
                            <div className="relative h-auto md:h-[400px] flex items-center justify-center mb-0 md:mb-2">
                                <div className="absolute w-80 h-80 bg-gold-600/5 rounded-full blur-3xl animate-pulse-glow"></div>
                                <div className="z-10 w-full h-full flex items-center justify-center">
                                    <img
                                        src="/favicon.png"
                                        alt="La Santísima"
                                        className="w-80 h-80 md:w-[350px] md:h-[350px] object-contain animate-float translate-y-4 md:translate-y-0"
                                    />
                                </div>
                            </div>

                            {/* Devotion Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-gold-900/10 border border-gold-600/20 rounded-xl p-4 text-center shadow-sm hover-glow cursor-default transition-all">
                                    <div className="text-2xl font-bold text-gold-500">Suprema</div>
                                    <div className="text-sm text-gold-400 opacity-70">Manifiesta Tu Fe</div>
                                </div>
                                <div className="bg-gold-900/10 border border-gold-600/20 rounded-xl p-4 text-center shadow-sm hover-glow cursor-default transition-all">
                                    <div className="text-2xl font-bold text-gold-500">Soberana</div>
                                    <div className="text-sm text-gold-400 opacity-70">Lealtad Sin Juicios</div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right Content */}
                    <div className="space-y-8">
                        <AnimatedSection animation="fade-left" delay={100}>
                            <p className="text-white text-xl leading-relaxed">
                                La Santa Muerte es la personificación sagrada de la transición y el poder. Considerada una entidad justa que
                                <strong className="text-gold-400"> no distingue entre ricos o pobres, pecados o virtudes</strong>,
                                ella ofrece un regazo de paz y protección para quienes la invocan con verdadera fe.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-left" delay={200}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Protección contra envidias y enemigos",
                                    "Guía en momentos de desespero",
                                    "Justicia en causas difíciles",
                                    "Abundancia y prosperidad real"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className="w-6 h-6 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0 border border-gold-600/30 group-hover:bg-gold-600 transition-all">
                                            <svg className="w-3 h-3 text-gold-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-white group-hover:text-gold-400 group-hover:font-bold transition-all text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-left" delay={300}>
                            <a
                                href="#servicios"
                                onClick={handleScrollToServices}
                                className="inline-flex items-center bg-transparent border-2 border-gold-600 text-gold-500 px-8 py-3 rounded-full font-bold hover:bg-gold-600 hover:text-white transition-all group"
                            >
                                Ver Rituales y Servicios
                                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
