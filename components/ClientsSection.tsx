'use client';

import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

export default function ClientsSection() {
    const clients = [
        { name: 'Broseta', logo: '/logos/broseta.png' },
        { name: 'El Tiempo', logo: '/logos/el-tiempo.png' },
        { name: 'Qbano', logo: '/logos/qbano.png' },
        { name: 'JW Marriott', logo: '/logos/marriott.png' },
        { name: 'PSE', logo: '/logos/pse.png' },
        { name: 'Avianca', logo: '/logos/avianca.png' },
    ];

    // Double the list for seamless infinite scroll
    const scrollClients = [...clients, ...clients];

    return (
        <section id="clientes" className="py-20 pb-32 bg-white border-y border-gray-100 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                {/* Title */}
                <AnimatedSection animation="fade-up" className="text-center">
                    <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4">
                        Nuestra Trayectoria
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Empresas que confían en nosotros
                    </h2>
                    <div className="w-12 h-1 bg-red-600 mx-auto rounded-full"></div>
                </AnimatedSection>
            </div>

            {/* Desktop Carousel - Hidden on Mobile */}
            <div className="hidden md:flex relative w-full overflow-hidden group">
                <div className="flex animate-scroll whitespace-nowrap">
                    {scrollClients.map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center min-w-[300px] lg:min-w-[400px] px-12 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 transform hover:scale-110"
                        >
                            <div className="relative w-64 lg:w-[512px] h-32 lg:h-64">
                                <Image
                                    src={client.logo}
                                    alt={`${client.name} logo`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 512px"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Vertical List - Hidden on Desktop */}
            <div className="md:hidden flex flex-col items-center gap-12 px-6">
                {clients.map((client, index) => (
                    <AnimatedSection
                        key={index}
                        animation="fade-up"
                        delay={index * 100}
                        className="w-full flex justify-center"
                    >
                        <div className="relative w-full max-w-[280px] h-48 flex items-center justify-center p-4">
                            <Image
                                src={client.logo}
                                alt={`${client.name} logo`}
                                width={280}
                                height={192}
                                className="object-contain"
                            />
                        </div>
                    </AnimatedSection>
                ))}
            </div>

            {/* Gradient Mask for a premium feel */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 hidden md:block"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 hidden md:block"></div>
        </section>
    );
}
