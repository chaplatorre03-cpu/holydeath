'use client';

import ContactForm from './ContactForm';
import AnimatedSection from './AnimatedSection';

export default function ContactSection() {
    return (
        <section id="contacto" className="pt-4 pb-10 md:pt-6 md:pb-16 bg-[rgb(5,5,5)] relative overflow-hidden">
            {/* Mystical background blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[120px] blob blob-1 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-950/10 rounded-full blur-[120px] blob blob-2 translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Form Section - First on Mobile, Second on Desktop */}
                    <div className="order-1 lg:order-2">
                        <AnimatedSection animation="fade-left" delay={100}>
                            <ContactForm />
                        </AnimatedSection>
                    </div>

                    {/* Left Content (Text Info) - Second on Mobile, First on Desktop */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <AnimatedSection animation="fade-right">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mystical-shadow">
                                Da un paso hacia<br />el cambio
                            </h2>
                            <p className="text-white mt-6 text-lg">
                                Escríbenos y cuéntanos tu caso. Recibirás orientación espiritual con total discreción y respeto.
                            </p>
                            <div className="w-24 h-1 bg-gold-600 mt-6 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                        </AnimatedSection>

                        {/* Contact Info */}
                        <AnimatedSection animation="fade-right" delay={100}>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-gold-900/20 border border-gold-600/30 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-gold-600">
                                        <svg className="w-6 h-6 text-gold-500 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="group-hover:font-bold transition-all">
                                        <p className="font-semibold text-gold-500 text-lg transition-colors">Santuario Principal</p>
                                        <div className="text-white block text-base mt-1 group-hover:text-gold-500 transition-colors">
                                            <p>Carrera 3 # 25c - 15</p>
                                            <p>Soacha, Cundinamarca</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-gold-900/20 border border-gold-600/30 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-gold-600">
                                        <svg className="w-6 h-6 text-gold-500 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <a href="mailto:chaplatorre03@gmail.com" className="text-white hover:text-gold-400 hover:font-bold transition-all text-lg font-medium">
                                        santísima@devocion.com
                                    </a>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-gold-900/20 border border-gold-600/30 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-gold-600">
                                        <svg className="w-6 h-6 text-gold-500 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <a
                                        href="https://wa.me/573222020818?text=Hola%2C%20necesito%20una%20consulta%20espiritual%20con%20La%20Sant%C3%ADsima."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gold-400 font-bold text-xl hover:text-white transition-colors"
                                    >
                                        +57 322 202 0818
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Google Partner Badge */}
                        <AnimatedSection animation="fade-right" delay={200}>
                            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gold-600/30 hover-lift group">
                                <div className="flex items-center gap-6">
                                    <div className="bg-gold-600/20 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-gold-600 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                        <span className="text-3xl">🤫</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-bold text-xl mb-1 tracking-wide">Discreción Total</h4>
                                        <p className="text-white/80 text-sm">
                                            Tu privacidad es nuestro mayor compromiso. Cada consulta es estrictamente confidencial.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>

            </div>
        </section>
    );
}
