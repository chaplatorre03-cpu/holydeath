'use client';

import AnimatedSection from './AnimatedSection';

export default function WhyChooseUsSection() {
    const reasons = [
        {
            icon: "📜",
            title: 'Sin Juicios',
            description: 'Recibimos a todos por igual, sin importar tu pasado o acciones. La Santa Muerte nos iguala a todos.'
        },
        {
            icon: "⚖️",
            title: 'Reciprocidad',
            description: 'Entendemos el intercambio sagrado. Cumplimos lo prometido para que ella cumpla sus favores.'
        },
        {
            icon: "✨",
            title: 'Resultados Reales',
            description: 'Nuestra fe se basa en hechos. Rituales efectivos para situaciones desesperadas o cotidianas.'
        },
        {
            icon: "🦅",
            title: 'Respeto y Fe',
            description: 'Tratamos cada petición con el máximo respeto y discreción que La Santísima exige a sus devotos.'
        }
    ];

    return (
        <section id="devocion" className="pt-4 pb-10 md:pt-6 md:pb-16 bg-gradient-to-br from-black via-zinc-900 to-black relative overflow-hidden">
            {/* Mystical background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px] blob blob-1"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-900/5 rounded-full blur-[100px] blob blob-2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Title */}
                <AnimatedSection animation="fade-up" className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mystical-shadow">
                        Fe y Devoción
                    </h2>
                    <div className="w-32 h-1 bg-gold-600 mx-auto mt-6"></div>
                </AnimatedSection>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {reasons.map((reason, index) => (
                        <AnimatedSection
                            key={index}
                            animation="fade-up"
                            delay={index * 100}
                        >
                            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 text-center border border-gold-600/20 card-animated hover:border-gold-500 transition-all duration-300">
                                <div className="text-4xl mb-6 hover-scale">
                                    {reason.icon}
                                </div>
                                <h4 className="text-white font-bold text-xl mb-4 tracking-wide">{reason.title}</h4>
                                <p className="text-white text-sm leading-relaxed">{reason.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* CTA Button Moved Here */}
                <AnimatedSection animation="fade-up" delay={500} className="text-center mt-16 md:mt-24">
                    <a
                        href="#contacto"
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('contacto');
                            if (element) {
                                const headerOffset = 96;
                                const elementPosition = element.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                            }
                        }}
                        className="inline-flex items-center gap-2 bg-gold-600 text-black px-10 py-4 rounded-full font-bold text-lg btn-animated hover-glow shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    >
                        <span>Inicia Tu Proceso</span>
                        <span className="text-white">Hoy</span>
                        <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14.015c0 1.105.895 2 2 2" />
                        </svg>
                    </a>
                </AnimatedSection>

            </div>
        </section>
    );
}
