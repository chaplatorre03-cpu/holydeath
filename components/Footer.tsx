import Link from 'next/link';
import Image from 'next/image';
import WhatsAppButton from './WhatsAppButton';
import LegalLink from './LegalLink';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-10 pb-4 md:pt-16 md:pb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-8 md:mb-16">
                    {/* Logo & Vision */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center space-x-6 mb-6 md:mb-8 group text-white">
                            <div className="relative w-16 h-16 bg-black border-2 border-gold-500 rounded-full p-1 transition-transform group-hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                                <img
                                    src="/favicon.png"
                                    alt="La Santísima Logo"
                                    className="w-full h-full object-contain rounded-full"
                                />
                            </div>
                            <span className="text-xl md:text-3xl font-bold tracking-widest uppercase text-gradient-animated">La Santísima</span>
                        </Link>
                        <p className="text-white/60 max-w-sm text-lg leading-relaxed">
                            Guía espiritual y protección bajo el manto sagrado de La Santa Muerte.
                            Sin juicios, solo fe y devoción.
                        </p>
                    </div>

                    {/* Columns can be added here if needed, but reference implies simple footer */}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-10 border-t border-white/5 text-white/40">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} La Santísima. Todos los derechos reservados bajo su protección.</p>
                    </div>
                    <div className="flex space-x-6 pr-4 md:pr-10">
                        <LegalLink slug="aviso-legal" pdfPath="/documentos/Aviso_Legal_La_Santisima.pdf">Aviso Legal</LegalLink>
                        <LegalLink slug="politica-privacidad" pdfPath="/documentos/Politica_de_Privacidad_La_Santisima.pdf">Política de Privacidad</LegalLink>
                        <LegalLink slug="politica-cookies" pdfPath="/documentos/Politica_de_Cookies_La_Santisima.pdf">Política de Cookies</LegalLink>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button - integrated here to be available globally if footer is present */}
            <WhatsAppButton />
        </footer>
    );
}

