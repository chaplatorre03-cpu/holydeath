'use client';

import AnimatedSection from './AnimatedSection';

export default function HeroSection() {
    return (
        <section id="inicio" className="min-h-screen flex items-center bg-black pt-[80px] relative overflow-hidden">
            {/* Mystical background blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,20,1)_0%,rgba(0,0,0,1)_100%)]"></div>
                <div className="absolute top-20 left-10 w-96 h-96 bg-gold-600/10 rounded-full blur-[120px] blob blob-1"></div>
                <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[150px] blob blob-2"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-30"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-8 lg:pr-16 py-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white relative z-10">
                        <AnimatedSection animation="fade-up" delay={0}>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 mystical-shadow">
                                <span className="text-gradient-animated">La Santísima</span><br />
                                Guía y Protección
                            </h1>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={100}>
                            <p className="text-xl md:text-2xl text-gold-400 font-medium mb-8 tracking-wide">
                                ¿Buscas respuestas, protección o el camino hacia la prosperidad?
                            </p>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={200}>
                            <div className="space-y-4 text-zinc-100 mb-10 max-w-lg text-lg leading-relaxed">
                                <p>
                                    La Santa Muerte es la entidad protectora de quienes caminan en la sombra y la luz.
                                    <strong className="text-white font-bold"> Sin juicios, sin críticas</strong>, ella recibe tu fe y te devuelve su poder.
                                </p>
                                <p>
                                    Estamos aquí para ser el puente entre tu necesidad y su benevolencia.
                                    Realizamos <strong className="text-white font-bold">trabajos garantizados</strong> y consultas espirituales directas.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={300} className="mb-12">
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
                                className="inline-flex items-center bg-gold-600 text-black px-10 py-4 rounded-full font-bold text-lg btn-animated hover-glow shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                            >
                                Consulta Espiritual Gratis
                                <svg className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </a>
                        </AnimatedSection>
                    </div>

                    {/* Right - Phone Mockup */}
                    <AnimatedSection animation="fade-left" delay={200} className="flex justify-center lg:justify-end">
                        <div className="relative w-80 h-[500px]">
                            {/* Mystical Silhouette/Icon Representation */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gold-600/20 to-transparent rounded-full filter blur-3xl animate-pulse-glow"></div>

                            <div className="relative z-10 w-full h-full flex items-center justify-center transform -translate-y-2 lg:translate-y-0">
                                {/* Detailed Icon of Santa Muerte */}
                                <div className="w-full h-full animate-float-slow drop-shadow-[0_0_30px_rgba(212,175,55,0.5)] scale-110">
                                    <img
                                        src="/favicon.png"
                                        alt="La Santísima"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>

                            {/* Floating Mystical Elements */}
                            {/* Justice - Green */}
                            <div className="absolute top-16 right-10 w-20 h-20 bg-green-500/10 backdrop-blur-sm rounded-full border border-green-500/30 flex items-center justify-center animate-float z-20 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                <span className="text-2xl">⚖️</span>
                            </div>
                            {/* Love - Red */}
                            <div className="absolute top-[33%] left-[38%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-500/15 backdrop-blur-md rounded-full border border-red-500/40 flex items-center justify-center animate-float-delay-1 z-20 shadow-[0_0_25px_rgba(239,68,68,0.3)]">
                                <span className="text-3xl">❤️</span>
                            </div>
                            {/* Wealth - Yellow/Gold */}
                            <div className="absolute top-[55%] right-[15%] w-16 h-16 bg-yellow-500/10 backdrop-blur-sm rounded-full border border-yellow-500/50 flex items-center justify-center animate-float-delay-2 z-20 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                                <span className="text-xl">💰</span>
                            </div>
                            {/* Protection - Blue */}
                            <div className="absolute top-0 left-1/4 w-16 h-16 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/30 flex items-center justify-center animate-float-delay-1 z-20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                <span className="text-xl">🛡️</span>
                            </div>
                            {/* Health/Limpia - White */}
                            <div className="absolute bottom-1/3 left-0 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center animate-float-delay-2 z-20 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                <span className="text-2xl">🕊️</span>
                            </div>
                            {/* Consultations - Purple */}
                            <div className="absolute top-1/3 left-4 w-14 h-14 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/30 flex items-center justify-center animate-float z-20 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                <span className="text-lg">🔮</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
