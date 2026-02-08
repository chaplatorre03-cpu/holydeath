'use client';

import AnimatedSection from './AnimatedSection';

export default function FeaturesSection() {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: 'Estrategia de Contenidos',
            description: 'Creamos contenido relevante y atractivo que conecta con tu audiencia y genera resultados.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: 'Análisis y Métricas',
            description: 'Monitoreamos y analizamos el rendimiento de tus redes para optimizar resultados.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Community Management',
            description: 'Gestionamos tu comunidad, respondemos comentarios y construimos relaciones duraderas.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            ),
            title: 'Publicidad en Redes',
            description: 'Campañas de publicidad en Facebook, Instagram, LinkedIn y más para maximizar tu alcance.'
        }
    ];

    return (
        <section id="servicios" className="pt-10 pb-16 md:pt-14 md:pb-24 bg-gray-50 relative overflow-hidden">
            {/* Animated Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-10 top-40 w-40 h-40 bg-red-200/30 rounded-full blur-3xl blob blob-1"></div>
                <div className="absolute right-0 bottom-20 w-64 h-64 bg-red-300/20 rounded-full blur-3xl blob blob-2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <AnimatedSection animation="fade-up" className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                        Nuestros Servicios
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        ¿Qué hacemos por ti?
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-4"></div>
                    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                        Estrategias integrales diseñadas para potenciar tu presencia digital y maximizar resultados.
                    </p>
                </AnimatedSection>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <AnimatedSection
                            key={index}
                            animation="fade-up"
                            delay={index * 100}
                        >
                            <div className="group bg-white rounded-2xl p-6 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 transition-all duration-500 shadow-lg hover:shadow-2xl card-animated border border-gray-100 relative overflow-hidden h-full">
                                {/* Decorative element */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-100/50 group-hover:bg-white/10 rounded-bl-full -mr-8 -mt-8 transition-all duration-500 group-hover:scale-150"></div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-red-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110">
                                        <div className="text-red-600 group-hover:text-white transition-colors duration-300">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 group-hover:text-red-100 text-sm leading-relaxed transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
