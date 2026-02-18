'use client';

import { useState } from 'react';
import PrivacyModal from './PrivacyModal';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        motivo: '',
        mensaje: ''
    });

    const [accepted, setAccepted] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    nombre: '',
                    correo: '',
                    telefono: '',
                    motivo: '',
                    mensaje: ''
                });
                setAccepted(false);

                // Limpiar el mensaje de éxito después de 5 segundos
                setTimeout(() => {
                    setSubmitStatus(null);
                }, 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const inputClasses = (fieldName: string) => `
        w-full px-4 py-3 rounded-lg bg-black/60 text-white placeholder-gold-300/50 
        border-2 transition-all duration-300
        ${focusedField === fieldName
            ? 'border-gold-500 shadow-lg shadow-gold-500/20'
            : 'border-white/10'
        }
        focus:outline-none focus:border-gold-500 focus:shadow-lg focus:shadow-gold-500/20
    `;

    return (
        <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-gold-600/20 relative overflow-hidden group">
            {/* Decorative mystical element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-600/5 rounded-full blur-3xl group-hover:bg-gold-600/10 transition-all duration-700 pointer-events-none"></div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 relative z-10 tracking-widest uppercase">
                Consulta Espiritual
            </h3>
            <p className="text-gold-500 text-base mb-8 relative z-10">
                Abre tu corazón a La Santísima. Cuéntanos tu situación con fe.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="transform transition-transform duration-300 hover:scale-[1.01]">
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre completo"
                        value={formData.nombre}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('nombre')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses('nombre')}
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div className="transform transition-transform duration-300 hover:scale-[1.01]">
                    <input
                        type="email"
                        name="correo"
                        placeholder="Correo electrónico"
                        value={formData.correo}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('correo')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses('correo')}
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div className="transform transition-transform duration-300 hover:scale-[1.01]">
                    <input
                        type="tel"
                        name="telefono"
                        placeholder="Teléfono"
                        value={formData.telefono}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('telefono')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses('telefono')}
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div className="transform transition-transform duration-300 hover:scale-[1.01]">
                    <select
                        name="motivo"
                        value={formData.motivo}
                        onChange={(e) => handleChange(e as any)}
                        onFocus={() => setFocusedField('motivo')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses('motivo')}
                        required
                        disabled={isSubmitting}
                    >
                        <option value="" disabled className="bg-black text-white">¿Qué favor necesitas?</option>
                        <option value="amor" className="bg-black text-white">Amarres de Amor (Túnica Roja)</option>
                        <option value="dinero" className="bg-black text-white">Prosperidad y Dinero (Túnica Dorada)</option>
                        <option value="proteccion" className="bg-black text-white">Protección Total (Túnica Negra)</option>
                        <option value="salud" className="bg-black text-white">Salud y Limpia (Túnica Blanca)</option>
                        <option value="justicia" className="bg-black text-white">Justicia Legal (Túnica Verde)</option>
                        <option value="otra" className="bg-black text-white">Otro Motivo</option>
                    </select>
                </div>

                <div className="transform transition-transform duration-300 hover:scale-[1.01]">
                    <textarea
                        name="mensaje"
                        placeholder="Describe tu situación con fe y detalle..."
                        value={formData.mensaje}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('mensaje')}
                        onBlur={() => setFocusedField(null)}
                        rows={4}
                        className={`${inputClasses('mensaje')} resize-none`}
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div className="flex items-start gap-3">
                    <input
                        type="checkbox"
                        id="privacy"
                        checked={accepted}
                        onChange={(e) => setAccepted(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-gold-600/50 text-gold-600 focus:ring-gold-500 bg-black/80 cursor-pointer transition-transform"
                        required
                    />
                    <label htmlFor="privacy" className="text-white/80 text-sm cursor-pointer hover:text-white transition-colors">
                        Acepto que mi petición sea tratada con respeto y discreción bajo la
                        <button
                            type="button"
                            onClick={() => setIsPrivacyModalOpen(true)}
                            className="text-gold-400 underline font-medium hover:text-gold-300 ml-1 transition-colors"
                        >
                            política de privacidad
                        </button>
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={!accepted || isSubmitting}
                    className="w-full bg-gold-600 text-black font-bold py-4 px-6 rounded-xl uppercase tracking-widest
                        transition-all duration-300 shadow-[0_5px_20px_rgba(212,175,55,0.2)]
                        hover:bg-gold-500 hover:shadow-gold-500/40 hover:-translate-y-1
                        active:translate-y-0
                        disabled:bg-zinc-700 disabled:text-zinc-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none
                        btn-animated flex items-center justify-center gap-3 text-lg"
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-red-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            ENVIANDO...
                        </>
                    ) : (
                        'ENVIAR PETICIÓN SAGRADA'
                    )}
                </button>

                {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-black border-2 border-white rounded-xl text-white text-center text-base animate-fade-in font-bold shadow-2xl flex items-center justify-center gap-3">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                        ¡Mensaje enviado con éxito!
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-white border-2 border-black rounded-xl text-red-600 text-center text-base animate-fade-in font-bold shadow-2xl">
                        ⚠️ Error al enviar. Por favor intente de nuevo.
                    </div>
                )}
            </form>

            <PrivacyModal
                isOpen={isPrivacyModalOpen}
                onClose={() => setIsPrivacyModalOpen(false)}
                onAccept={() => setAccepted(true)}
            />
        </div>
    );
}
