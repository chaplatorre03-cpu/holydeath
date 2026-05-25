'use client';

import React, { useState, useEffect } from 'react';
import {
    CreditCard, MousePointer2, Wallet, Send,
    CheckCircle, Copy, ArrowLeft, X, Phone
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PAYMENT_LINKS = [
    { amount: "30.000", url: "https://kiire.mpos.com/mailpos/#/jb-27LN" },
    { amount: "50.000", url: "https://kiire.mpos.com/mailpos/#/jb-P1X4" },
    { amount: "120.000", url: "https://kiire.mpos.com/mailpos/#/jb-GFPM" },
    { amount: "300.000", url: "https://kiire.mpos.com/mailpos/#/jb-ZNLQ" },
    { amount: "400.000", url: "https://kiire.mpos.com/mailpos/#/jb-LPTL" },
    { amount: "600.000", url: "https://kiire.mpos.com/mailpos/#/jb-PJ2Z" },
    { amount: "800.000", url: "https://kiire.mpos.com/mailpos/#/jb-R66W" },
    { amount: "1.100.000", url: "https://kiire.mpos.com/mailpos/#/jb-C6TI" },
];

export default function MediosDePagoPage() {
    const router = useRouter();
    const [paymentDetailView, setPaymentDetailView] = useState<string | null>(null);
    const [copiedField, setCopiedField] = useState<string | null>(null);

    // Reset scroll to top whenever the view changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [paymentDetailView]);

    // Using the phone number from holydeath contact section
    const organizerPhone = '3222020818';

    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const handleOpenApp = (app: 'nequi' | 'daviplata') => {
        const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
        const isAndroid = /android/i.test(ua);
        const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

        const packageId = app === 'nequi' ? 'com.nequi.MobileApp' : 'com.davivienda.daviplataapp';
        const fallbackUrl = app === 'nequi'
            ? (isIOS ? 'https://apps.apple.com/co/app/nequi/id1010765891' : 'https://play.google.com/store/apps/details?id=com.nequi.MobileApp')
            : (isIOS ? 'https://apps.apple.com/co/app/daviplata/id1220379146' : 'https://play.google.com/store/apps/details?id=com.davivienda.daviplataapp');

        if (isAndroid) {
            const intentUrl = `intent:#Intent;action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;package=${packageId};S.browser_fallback_url=${encodeURIComponent(fallbackUrl)};end`;
            window.location.href = intentUrl;
        } else if (isIOS) {
            let iOSFallbackCleared = false;
            const fallbackTimer = setTimeout(() => {
                if (!iOSFallbackCleared) {
                    window.location.assign(fallbackUrl);
                }
            }, 2500);

            const onVisChange = () => {
                if (document.hidden) {
                    iOSFallbackCleared = true;
                    clearTimeout(fallbackTimer);
                }
            };
            document.addEventListener('visibilitychange', onVisChange, { once: true });
            window.location.assign(`${app === 'nequi' ? 'nequi' : 'daviplata'}://`);
        } else {
            window.open(fallbackUrl, '_blank');
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-0 md:p-4 font-sans selection:bg-gold-500 selection:text-black">
            <div className="relative bg-white w-full max-w-md md:rounded-[2.5rem] shadow-2xl overflow-hidden min-h-screen md:min-h-0 flex flex-col">

                {/* Close/Back Button - Redirection back to home if on main view */}
                <button
                    onClick={() => paymentDetailView ? setPaymentDetailView(null) : router.push('/')}
                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-[#ff6b00] hover:bg-[#e66000] text-white rounded-full shadow-lg shadow-[#ff6b00]/30 transition-all duration-500 hover:rotate-90 hover:scale-110 active:scale-95 z-50 group"
                >
                    {paymentDetailView ? <ArrowLeft className="w-5 h-5" /> : <X className="w-5 h-5" />}
                </button>

                {!paymentDetailView ? (
                    /* Main payment methods list */
                    <>
                        <div className="pt-20 px-8 pb-8 shrink-0 relative border-b border-gray-100">
                            <div className="text-center space-y-2">
                                <div className="mx-auto w-64 h-64 bg-black rounded-[3rem] flex items-center justify-center mb-4 shadow-2xl border-4 border-gray-800 overflow-hidden group">
                                    <Image
                                        src="/holy-death-logo.png"
                                        alt="Holy Death"
                                        width={256}
                                        height={256}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        priority
                                    />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 uppercase italic tracking-tighter">Medios de Pago</h3>
                                <p className="text-sm text-gray-500 font-medium">Selecciona tu método preferido</p>
                            </div>
                        </div>

                        <div className="p-8 space-y-3">
                            <button
                                onClick={() => setPaymentDetailView('tarjeta')}
                                className="w-full p-5 bg-gray-50 rounded-2xl border border-gray-100 flex items-center space-x-4 hover:bg-white hover:shadow-xl transition-all group cursor-pointer text-left"
                            >
                                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                                    <CreditCard className="w-6 h-6 text-indigo-600 group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">Tarjeta Débito / Crédito</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Visa, MasterCard, Amex</p>
                                </div>
                            </button>

                            <button
                                onClick={() => setPaymentDetailView('pse')}
                                className="w-full p-5 bg-gray-50 rounded-2xl border border-gray-100 flex items-center space-x-4 hover:bg-white hover:shadow-xl transition-all group cursor-pointer text-left"
                            >
                                <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                                    <MousePointer2 className="w-6 h-6 text-pink-600 group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">PSE</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Banca en línea</p>
                                </div>
                            </button>

                            <button
                                onClick={() => setPaymentDetailView('nequi')}
                                className="w-full p-5 bg-gray-50 rounded-2xl border border-gray-100 flex items-center space-x-4 hover:bg-white hover:shadow-xl transition-all group cursor-pointer text-left"
                            >
                                <div className="w-12 h-12 bg-[#1f0e33]/5 rounded-xl flex items-center justify-center group-hover:bg-[#1f0e33] transition-colors">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 19.5V5h3.2l5.4 9.8V5h2.8v14.5h-3.2L10.3 9.7v9.8H7.5z" fill="currentColor" className="text-[#1f0e33] group-hover:text-white" />
                                        <rect x="3.5" y="5" width="2.5" height="2.5" fill="#e3007b" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">Nequi</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Transferencia rápida</p>
                                </div>
                            </button>

                            <button
                                onClick={() => setPaymentDetailView('daviplata')}
                                className="w-full p-5 bg-gray-50 rounded-2xl border border-gray-100 flex items-center space-x-4 hover:bg-white hover:shadow-xl transition-all group cursor-pointer text-left"
                            >
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors">
                                    <Wallet className="w-6 h-6 text-red-600 group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">Daviplata</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">App Daviplata</p>
                                </div>
                            </button>

                            <button
                                onClick={() => setPaymentDetailView('breb')}
                                className="w-full p-5 bg-gray-50 rounded-2xl border border-gray-100 flex items-center space-x-4 hover:bg-white hover:shadow-xl transition-all group cursor-pointer text-left"
                            >
                                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                                    <Send className="w-6 h-6 text-yellow-500 group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">Bre-B</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Transferencia inmediata</p>
                                </div>
                            </button>
                        </div>

                        <div className="p-8">
                            <button
                                onClick={() => router.push('/')}
                                className="w-full bg-black text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl transition-all hover:scale-[1.02] active:scale-95"
                            >
                                VOLVER AL INICIO
                            </button>
                        </div>
                    </>
                ) : (
                    /* Detail sub-view */
                    <>
                        <div className="pt-20 px-8 pb-8 shrink-0 relative border-b border-gray-100">
                            <div className="text-center space-y-2">
                                <h3 className="text-2xl font-black text-gray-900 uppercase italic tracking-tighter">
                                    {paymentDetailView === 'nequi' ? 'Pago por Nequi'
                                        : paymentDetailView === 'daviplata' ? 'Pago por Daviplata'
                                            : paymentDetailView === 'breb' ? 'Pago por Bre-B'
                                                : paymentDetailView === 'pse' ? 'Pago por PSE'
                                                    : 'Pago con Tarjeta'}
                                </h3>
                                <p className="text-sm text-gray-500 font-medium">
                                    {(paymentDetailView === 'pse' || paymentDetailView === 'tarjeta')
                                        ? 'Selecciona el valor a pagar'
                                        : (paymentDetailView === 'nequi' || paymentDetailView === 'daviplata')
                                            ? 'Copia los datos y abre la App'
                                            : 'Copia los datos'}
                                </p>
                            </div>
                        </div>

                        {(paymentDetailView === 'pse' || paymentDetailView === 'tarjeta') ? (
                            <div className="px-8 pt-4 pb-6 space-y-4">
                                <div className="px-4 text-center">
                                    <p className="text-[10px] text-gray-400 font-medium leading-tight italic">
                                        Elige el monto que corresponde a tu servicio. Serás redirigido a nuestra pasarela segura.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {PAYMENT_LINKS.map((item, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => window.open(item.url, '_blank')}
                                            className="p-5 bg-gray-50 border border-gray-100 rounded-2xl flex flex-col items-center justify-center space-y-1 hover:bg-white hover:shadow-xl hover:border-[#ff6b00]/30 transition-all group cursor-pointer text-center"
                                        >
                                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Valor</span>
                                            <span className="text-xl font-black text-gray-900 font-mono italic tracking-tighter">${item.amount}</span>
                                            <div className="pt-1 flex items-center space-x-1 text-[#ff6b00] opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-[8px] font-black uppercase tracking-tighter">Pagar Ahora</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                <div className="text-center">
                                    <p className="text-xs text-gray-400 font-medium px-4">
                                        Una vez realizado el pago, envía tu comprobante a nuestro WhatsApp para procesar tu solicitud.
                                    </p>
                                </div>
                                <a
                                    href={`https://wa.me/57${organizerPhone}?text=Hola,%20acabo%20de%20realizar%20un%20pago.%20Adjunto%20comprobante.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => {
                                        if (typeof window !== 'undefined' && (window as any).gtag) {
                                            (window as any).gtag('event', 'conversion', {
                                                'send_to': 'AW-18175597350/t33KCIPbx7AcEKa25tpD'
                                            });
                                        }
                                    }}
                                    className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-green-500/20"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>Enviar Comprobante</span>
                                </a>
                                <button
                                    onClick={() => setPaymentDetailView(null)}
                                    className="w-full py-4 rounded-2xl bg-gray-100 text-gray-900 font-black text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all active:scale-95"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    <span>VOLVER</span>
                                </button>
                            </div>
                        ) : (
                            <div className="p-8 space-y-6">
                                <div className="bg-gray-50 rounded-3xl border border-gray-100 p-6 space-y-4">
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Enviar a número</p>
                                        <div className="flex items-center justify-between">
                                            <p className="text-2xl font-black text-gray-900 font-mono tracking-wider">
                                                {organizerPhone}
                                            </p>
                                            <button
                                                onClick={() => copyToClipboard(organizerPhone, 'phone')}
                                                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${copiedField === 'phone' ? 'bg-green-100 text-green-600' : 'bg-white shadow-sm text-gray-600 hover:bg-gray-100'}`}
                                            >
                                                {copiedField === 'phone' ? (
                                                    <><CheckCircle className="w-4 h-4" /><span>Copiado</span></>
                                                ) : (
                                                    <><Copy className="w-4 h-4" /><span>Copiar</span></>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {paymentDetailView !== 'breb' && (
                                    <button
                                        onClick={() => handleOpenApp(paymentDetailView as 'nequi' | 'daviplata')}
                                        className={`w-full py-5 rounded-2xl text-white font-black text-sm uppercase tracking-widest flex items-center justify-center space-x-3 transition-all active:scale-95 shadow-xl ${paymentDetailView === 'nequi'
                                            ? 'bg-gradient-to-r from-[#E6007E] to-[#D4145A] shadow-[#E6007E]/30'
                                            : 'bg-gradient-to-r from-[#ED1C24] to-[#C41017] shadow-[#ED1C24]/30'
                                            }`}
                                    >
                                        {paymentDetailView === 'nequi' ? (
                                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.5 19.5V5h3.2l5.4 9.8V5h2.8v14.5h-3.2L10.3 9.7v9.8H7.5z" fill="currentColor" />
                                                <rect x="3.5" y="5" width="2.5" height="2.5" fill="currentColor" />
                                            </svg>
                                        ) : <Wallet className="w-5 h-5" />}
                                        <span>Abrir {paymentDetailView === 'nequi' ? 'Nequi' : 'Daviplata'}</span>
                                    </button>
                                )}

                                <div className="pt-4">
                                    <p className="text-xs text-gray-400 font-medium text-center px-4">
                                        Una vez realizado el pago, envía tu comprobante a nuestro WhatsApp para procesar tu solicitud.
                                    </p>
                                </div>
                            </div>
                        )}

                        {(paymentDetailView === 'nequi' || paymentDetailView === 'daviplata' || paymentDetailView === 'breb') && (
                            <div className="px-8 pb-6 flex flex-col gap-3">
                                <a
                                    href={`https://wa.me/57${organizerPhone}?text=Hola,%20acabo%20de%20realizar%20un%20pago.%20Adjunto%20comprobante.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => {
                                        if (typeof window !== 'undefined' && (window as any).gtag) {
                                            (window as any).gtag('event', 'conversion', {
                                                'send_to': 'AW-18175597350/t33KCIPbx7AcEKa25tpD'
                                            });
                                        }
                                    }}
                                    className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-green-500/20"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>Enviar Comprobante</span>
                                </a>
                                <button
                                    onClick={() => setPaymentDetailView(null)}
                                    className="w-full py-4 rounded-2xl bg-gray-100 text-gray-900 font-black text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all active:scale-95"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    <span>VOLVER</span>
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
