'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface LegalLinkProps {
    slug: string;
    pdfPath: string;
    children: React.ReactNode;
}

export default function LegalLink({ slug, pdfPath, children }: LegalLinkProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) {
        return (
            <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
            >
                {children}
            </a>
        );
    }

    return (
        <Link
            href={`/legal/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
        >
            {children}
        </Link>
    );
}
