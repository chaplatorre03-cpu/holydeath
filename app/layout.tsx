import type { Metadata } from "next";
import "./globals.css";
import CustomScrollbar from "@/components/CustomScrollbar";

export const metadata: Metadata = {
  title: "La Santísima - Consultas Esotéricas y Devoción a La Santa Muerte",
  description: "Servicios esotéricos profesionales: Amarres de amor, protección total, rituales para el dinero y salud. Sin juicios, solo fe y resultados.",
  keywords: "Santa Muerte, esoterismo, amarres de amor, rituales de protección, limpia espiritual, prosperidad económica, fe mexicana, devoción",
  icons: {
    icon: [
      {
        url: "/favicon.png?v=3",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png?v=3",
    apple: "/favicon.png?v=3",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        <CustomScrollbar />
      </body>
    </html>
  );
}
