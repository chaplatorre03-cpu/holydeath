'use client';

import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

interface PrivacyModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAccept?: () => void;
}

export default function PrivacyModal({ isOpen, onClose, onAccept }: PrivacyModalProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isHoveringScrollbar, setIsHoveringScrollbar] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';

            // Reset scroll position when modal opens
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTop = 0;
            }
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isOpen]);

    // Update scroll percentage
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
            const maxScroll = scrollHeight - clientHeight;
            const percentage = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
            setScrollPercentage(percentage);
        }
    };

    // Handle track click (click anywhere on the scrollbar track)
    const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!scrollContainerRef.current || e.target !== e.currentTarget) return;

        const container = scrollContainerRef.current;
        const trackRect = e.currentTarget.getBoundingClientRect();
        const clickY = e.clientY - trackRect.top;
        const trackHeight = trackRect.height;

        const scrollPercentage = clickY / trackHeight;
        const maxScroll = container.scrollHeight - container.clientHeight;
        container.scrollTop = scrollPercentage * maxScroll;
    };

    // Handle thumb drag
    const handleThumbMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging || !scrollContainerRef.current) return;

            const container = scrollContainerRef.current;
            const containerRect = container.getBoundingClientRect();

            // Calcular la posición del mouse relativa al contenedor del scroll
            const mouseY = e.clientY - containerRect.top;
            const containerHeight = containerRect.height;

            // Asegurar que el valor esté entre 0 y 1
            let scrollRatio = mouseY / containerHeight;
            scrollRatio = Math.max(0, Math.min(1, scrollRatio));

            // Aplicar el scroll
            const maxScroll = container.scrollHeight - container.clientHeight;
            if (maxScroll > 0) {
                container.scrollTop = scrollRatio * maxScroll;
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            // Prevenir selección de texto mientras se arrastra
            document.body.style.userSelect = 'none';
        } else {
            document.body.style.userSelect = '';
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.body.style.userSelect = '';
        };
    }, [isDragging]);

    // Calculate thumb position and height
    const getThumbStyle = () => {
        if (!scrollContainerRef.current) return { height: '60px', transform: 'translateY(0px)' };

        const { scrollHeight, clientHeight } = scrollContainerRef.current;

        // Si no hay scroll, no mostrar el thumb
        if (scrollHeight <= clientHeight) {
            return { height: '0px', transform: 'translateY(0px)', opacity: 0 };
        }

        // Calcular altura del thumb (mínimo 50px, proporcional al contenido visible)
        const thumbHeightRatio = clientHeight / scrollHeight;
        const thumbHeight = Math.max(50, clientHeight * thumbHeightRatio);

        // Margen inferior para que el thumb no baje completamente hasta el final
        const bottomMargin = 40; // píxeles de margen en la parte inferior

        // Calcular posición del thumb con precisión y límite inferior
        const maxThumbTop = clientHeight - thumbHeight - bottomMargin;
        const thumbTop = (scrollPercentage / 100) * maxThumbTop;

        return {
            height: `${thumbHeight}px`,
            transform: `translateY(${thumbTop}px)`,
            opacity: 1,
        };
    };

    if (!isMounted) return null;

    const modalContent = (
        <div
            className={`fixed inset-0 z-[100000] flex items-center justify-center p-4 md:p-8 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
        >
            {/* Solid Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div
                className={`relative bg-black w-full max-w-5xl h-full max-h-[90vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden transition-all duration-500 transform border border-gold-600/20 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'
                    }`}
            >
                {/* Header */}
                <div className="bg-zinc-900 px-8 py-6 flex items-center justify-between border-b border-gold-600/30 shrink-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">Compromiso de Discreción y Privacidad</h3>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-gold-400 transition-colors p-2"
                        aria-label="Cerrar"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body with Custom Scrollbar */}
                <div className="flex-1 relative flex overflow-hidden">
                    {/* Content Area */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex-1 overflow-y-auto p-6 md:p-14 prose prose-red max-w-none"
                    >
                        <style jsx>{`
                            @media (min-width: 768px) {
                                div {
                                    scrollbar-width: none;
                                    -ms-overflow-style: none;
                                }
                                div::-webkit-scrollbar {
                                    display: none;
                                }
                            }
                        `}</style>
                        <div className="max-w-4xl mx-auto space-y-10 text-zinc-300 leading-relaxed text-lg">
                            <div className="bg-gold-900/10 border-l-8 border-gold-600 p-8 rounded-r-2xl mb-10">
                                <p className="text-gold-500 font-bold text-xl m-0">
                                    TU PAZ ES NUESTRA PRIORIDAD: Tratamos cada petición con el respeto sagrado que mereces.
                                </p>
                            </div>

                            <section>
                                <h4 className="text-white font-black text-2xl mb-4 uppercase">01. Santuario y Confidencialidad</h4>
                                <p>
                                    La Santísima, como red de apoyo espiritual y devoción, garantiza que cada consulta es tratada bajo estricto secreto.
                                    Tus datos personales y motivos de consulta jamás serán compartidos.
                                </p>
                            </section>

                            <section>
                                <h4 className="text-white font-black text-2xl mb-4 uppercase">02. Finalidad del Contacto</h4>
                                <p>La información recolectada se utiliza exclusivamente para brindar la asesoría espiritual solicitada y coordinar los rituales necesarios para tu bienestar.</p>
                            </section>

                            <section>
                                <h4 className="text-gold-500 font-black text-2xl mb-4 uppercase">03. Ciberseguridad</h4>
                                <p>Implementamos encriptación SSL de alta seguridad y restricción de acceso por niveles para proteger cada lead procesado.</p>
                            </section>

                            <section>
                                <h4 className="text-gold-500 font-black text-2xl mb-4 uppercase">04. Derechos del Titular</h4>
                                <p>Como titular de los datos, usted tiene derecho a conocer, actualizar y rectificar sus datos personales, así como a revocar la autorización otorgada en cualquier momento.</p>
                            </section>

                            <section>
                                <h4 className="text-gold-500 font-black text-2xl mb-4 uppercase">05. Autorización</h4>
                                <p>Al proporcionar sus datos, usted autoriza de manera previa, expresa e informada a Red Cardinal para el tratamiento de su información personal conforme a lo aquí establecido.</p>
                            </section>

                            <div className="pt-16 pb-12 border-t border-white/5 text-center">
                                <p className="text-gold-100/40 text-base mb-8 italic">
                                    Al aceptar, confirmas que actúas por voluntad propia y con fe.
                                </p>
                                <button
                                    onClick={() => {
                                        if (onAccept) onAccept();
                                        onClose();
                                    }}
                                    className="inline-flex items-center justify-center bg-gold-600 text-black px-12 py-4 rounded-full font-black text-xl uppercase tracking-widest hover:bg-gold-500 transition-all shadow-2xl hover:shadow-gold-600/20 hover:-translate-y-1 active:translate-y-0"
                                >
                                    Acepto con Fe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Custom Scrollbar */}
                    <div
                        className="hidden md:block absolute right-3 top-4 bottom-6 w-3 z-10"
                        onMouseEnter={() => setIsHoveringScrollbar(true)}
                        onMouseLeave={() => setIsHoveringScrollbar(false)}
                    >
                        {/* Track */}
                        <div
                            className="relative w-full h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-inner cursor-pointer"
                            onClick={handleTrackClick}
                        >
                            {/* Progress Indicator (behind thumb) */}
                            <div
                                className="absolute left-0 right-0 top-0 bg-gradient-to-b from-gold-500/20 to-transparent rounded-full transition-all duration-300 pointer-events-none"
                                style={{ height: `${scrollPercentage}%` }}
                            ></div>

                            {/* Thumb */}
                            <div
                                ref={thumbRef}
                                onMouseDown={handleThumbMouseDown}
                                style={getThumbStyle()}
                                className={`absolute left-0 right-0 rounded-full cursor-grab active:cursor-grabbing transition-all duration-300 ${isDragging || isHoveringScrollbar
                                    ? 'bg-white shadow-lg shadow-white/20 scale-105'
                                    : 'bg-gold-500 shadow-sm'
                                    }`}
                            >
                                {/* Grip Lines */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
                                    <div className={`w-1.5 h-0.5 rounded-full transition-colors ${isDragging || isHoveringScrollbar ? 'bg-gold-500' : 'bg-white/50'
                                        }`}></div>
                                    <div className={`w-1.5 h-0.5 rounded-full transition-colors ${isDragging || isHoveringScrollbar ? 'bg-gold-500' : 'bg-white/50'
                                        }`}></div>
                                    <div className={`w-1.5 h-0.5 rounded-full transition-colors ${isDragging || isHoveringScrollbar ? 'bg-gold-500' : 'bg-white/50'
                                        }`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}
