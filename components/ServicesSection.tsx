'use client';

import AnimatedSection from './AnimatedSection';

export default function ServicesSection() {
    const services = [
        {
            icon: "🛡️",
            title: 'Protección Total (Túnica Negra)',
            description: 'Blindaje espiritual contra envidias, salamientos y enemigos. La Santa Muerte negra será tu escudo inquebrantable.',
            color: 'text-blue-400',
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/30'
        },
        {
            icon: "❤️",
            title: 'Amarres de Amor (Túnica Roja)',
            description: 'Unimos corazones y fortalecemos vínculos sentimentales. Recupera al ser amado con la bendición de La Santa Muerte roja.',
            color: 'text-red-500',
            bg: 'bg-red-500/10',
            border: 'border-red-500/40'
        },
        {
            icon: "💰",
            title: 'Prosperidad y Dinero (Túnica Dorada)',
            description: 'Abre tus caminos económicos y atrae fortuna. Rituales con la Santa Muerte dorada para el éxito financiero.',
            color: 'text-yellow-500',
            bg: 'bg-yellow-500/10',
            border: 'border-yellow-500/50'
        },
        {
            icon: "🕊️",
            title: 'Salud y Limpia (Túnica Blanca)',
            description: 'Limpiezas espirituales para restaurar el equilibrio físico y mental bajo la pureza de la Santa Muerte blanca.',
            color: 'text-white',
            bg: 'bg-white/10',
            border: 'border-white/30'
        },
        {
            icon: "⚖️",
            title: 'Justicia Legal (Túnica Verde)',
            description: 'Apoyo en causas difíciles, juicios y trámites legales. La Santa Muerte verde aboga por la verdad.',
            color: 'text-green-500',
            bg: 'bg-green-500/10',
            border: 'border-green-500/30'
        },
        {
            icon: "🔮",
            title: 'Consultas Espirituales',
            description: 'Lectura de señales y guía directa para resolver tus dudas más profundas con total confidencialidad.',
            color: 'text-purple-400',
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/30'
        },
    ];

    return (
        <section id="servicios" className="pt-0 pb-16 md:pt-0 md:pb-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <AnimatedSection animation="fade-up" className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mystical-shadow">
                        Rituales y Servicios Sagrados
                    </h2>
                    <p className="text-white mt-4 max-w-2xl mx-auto font-semibold text-lg">
                        Ayuda espiritual profesional bajo el manto protector de La Santísima
                    </p>
                    <div className="w-24 h-1 bg-gold-600 mx-auto mt-6"></div>
                </AnimatedSection>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <AnimatedSection
                            key={index}
                            animation="fade-up"
                            delay={index * 100}
                            className="h-full"
                        >
                            <div className={`${service.bg} p-8 rounded-2xl border ${service.border} card-animated group hover:border-gold-500/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col items-center text-center h-full`}>
                                <div className={`${service.color} text-4xl mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                                    {service.title}
                                </h3>
                                <p className="text-white text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

            </div>
        </section>
    );
}
