'use client';

import { useState } from 'react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: '¿Por qué es importante tener presencia en redes sociales?',
            answer: 'Las redes sociales son fundamentales para construir la reputación de tu marca, generar confianza con tu audiencia, aumentar la visibilidad de tu negocio y crear una comunidad leal de clientes. Además, te permiten comunicarte directamente con tu público objetivo y obtener feedback valioso.',
        },
        {
            question: '¿Qué redes sociales son mejores para mi negocio?',
            answer: 'Depende de tu industria y público objetivo. Facebook e Instagram son excelentes para B2C y negocios visuales. LinkedIn es ideal para B2B y servicios profesionales. TikTok funciona bien para audiencias jóvenes. Analizamos tu negocio para determinar las plataformas más efectivas.',
        },
        {
            question: '¿Cuánto tiempo toma ver resultados en redes sociales?',
            answer: 'Los primeros resultados suelen verse entre 3-6 meses con una estrategia consistente. El crecimiento orgánico requiere tiempo y dedicación. Sin embargo, con campañas pagadas puedes ver resultados más rápidos. La clave está en la constancia y calidad del contenido.',
        },
        {
            question: '¿Qué incluye la gestión de redes sociales?',
            answer: 'Incluye la creación de contenido, programación de publicaciones, diseño gráfico, interacción con la comunidad, análisis de métricas, reportes mensuales, estrategia de contenidos y optimización continua basada en resultados.',
        },
        {
            question: '¿Necesito invertir en publicidad pagada?',
            answer: 'Si bien el crecimiento orgánico es importante, la publicidad pagada acelera significativamente los resultados. Te permite llegar a audiencias específicas, aumentar el alcance rápidamente y obtener conversiones más directas. Recomendamos una combinación de ambas estrategias.',
        },
        {
            question: '¿Cómo miden el éxito de las campañas?',
            answer: 'Utilizamos KPIs específicos según tus objetivos: alcance, engagement, crecimiento de seguidores, tráfico web, generación de leads, conversiones y ROI. Proporcionamos reportes detallados mensuales con análisis de rendimiento y recomendaciones.',
        },
    ];

    return (
        <section id="preguntas" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Resolvemos tus dudas sobre marketing digital y redes sociales
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                            >
                                <span className="text-lg font-semibold text-gray-900 pr-8">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-6 h-6 text-red-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
