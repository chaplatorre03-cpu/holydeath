import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ slug: string }>;
}

const docsMap: Record<string, { title: string; file: string }> = {
    'aviso-legal': {
        title: 'Aviso Legal | La Santísima',
        file: '/documentos/Aviso_Legal_La_Santisima.pdf',
    },
    'politica-privacidad': {
        title: 'Política de Privacidad | La Santísima',
        file: '/documentos/Politica_de_Privacidad_La_Santisima.pdf',
    },
    'politica-cookies': {
        title: 'Política de Cookies | La Santísima',
        file: '/documentos/Politica_de_Cookies_La_Santisima.pdf',
    },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const doc = docsMap[slug];

    if (!doc) {
        return {
            title: 'Documento no encontrado',
        };
    }

    return {
        title: doc.title,
        description: `Consulta el ${doc.title} de La Santísima.`,
        icons: {
            icon: "/logos/holy-death-logo.png",
            shortcut: "/logos/holy-death-logo.png",
            apple: "/logos/holy-death-logo.png",
        },
    };
}

export default async function LegalPage({ params }: Props) {
    const { slug } = await params;
    const doc = docsMap[slug];

    if (!doc) {
        notFound();
    }

    return (
        <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#323639] flex flex-col items-center justify-center p-4 md:p-10">
            <iframe
                src={`${doc.file}#toolbar=0&navpanes=0&view=FitH&zoom=80`}
                className="w-full max-w-6xl h-full border-none shadow-2xl rounded-sm"
                title={doc.title}
            />
        </div>
    );
}
