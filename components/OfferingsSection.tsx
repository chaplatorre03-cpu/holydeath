'use client';

import AnimatedSection from './AnimatedSection';

export default function OfferingsSection() {
    const offerings = [
        {
            title: "Tequila y Aguardiente",
            description: "Para celebrar su presencia y agradecer con alegría. Se ofrece en copa de cristal limpia.",
            icon: "🥃"
        },
        {
            title: "Flores Frescas",
            description: "Rosas rojas para el amor, blancas para paz y amarillas para el éxito. El aroma la complace.",
            icon: "🌹"
        },
        {
            title: "Tabaco y Puros",
            description: "El humo del tabaco limpia las energías y eleva tus peticiones directamente a sus oídos.",
            icon: "🚬"
        },
        {
            title: "Agua y Pan",
            description: "Símbolos básicos de vida y sustento. Nunca deben faltar en un altar a La Santísima.",
            icon: "🍞"
        },
        {
            title: "Dulces y Chocolate",
            description: "Para endulzar los caminos y agradecer los favores recibidos con cariño y devoción.",
            icon: "🍫"
        },
        {
            title: "Incienso de Copal",
            description: "Purifica el ambiente y crea el ambiente sagrado necesario para la conexión espiritual.",
            icon: "💨"
        }
    ];

    return (
        <section id="ofrendas" className="pt-4 pb-10 md:pt-6 md:pb-16 bg-[rgb(5,5,5)] relative overflow-hidden transform -translate-y-6">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatedSection animation="fade-up" className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mystical-shadow">
                        Ofrendas Sagradas
                    </h2>
                    <div className="w-32 h-1 bg-gold-600 mx-auto mt-6"></div>
                    <p className="text-white/80 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
                        El altar es el punto de encuentro con La Santa Muerte. Las ofrendas son muestras de nuestra gratitud, respeto y fe hacia ella.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offerings.map((offering, index) => (
                        <AnimatedSection
                            key={index}
                            animation="fade-up"
                            delay={index * 100}
                        >
                            <div className="bg-black/50 border border-gold-600/20 rounded-2xl p-8 hover:border-gold-500 transition-all duration-300 group hover-lift h-full flex flex-col items-center text-center">
                                <div className="text-5xl mb-6 transition-transform group-hover:scale-110">
                                    {offering.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 tracking-wide group-hover:text-gold-400">
                                    {offering.title}
                                </h3>
                                <p className="text-white/70 leading-relaxed">
                                    {offering.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection animation="fade-up" delay={400} className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 p-8 md:p-12 rounded-[2.5rem] border border-gold-600/30">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">¿Quieres montar tu primer altar?</h3>
                        <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
                            Te guiamos en el proceso de crear un espacio digno para La Santa Muerte en tu hogar. Recibe orientación experta sobre la ubicación, elementos y oraciones necesarias.
                        </p>
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
                            className="inline-flex flex-wrap justify-center items-center gap-2 bg-gold-600 text-black px-6 py-4 sm:px-10 rounded-full font-bold text-base sm:text-lg btn-animated hover-glow shadow-[0_0_20px_rgba(212,175,55,0.4)] max-w-full"
                        >
                            <span>Consultar sobre</span>
                            <span className="text-white">Altares</span>
                            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                            </svg>
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
