import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Cormorant_Garamond, IBM_Plex_Mono, Manrope } from 'next/font/google';
import { SiteFooter } from '@/components/site/SiteFooter';
import { SiteHeader } from '@/components/site/SiteHeader';
import { siteConfig } from '@/lib/portfolio-data';
import './globals.css';

config.autoAddCss = false;

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.fullName} | Premium Portfolio`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  keywords: [
    'Loay Eldin',
    'full stack developer',
    'robotics engineer',
    'Next.js portfolio',
    'React developer',
    'technical educator',
    'Alexandria Egypt developer',
  ],
  authors: [{ name: siteConfig.fullName }],
  openGraph: {
    title: `${siteConfig.fullName} | Premium Portfolio`,
    description: siteConfig.description,
    siteName: `${siteConfig.shortName} Portfolio`,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.fullName} | Premium Portfolio`,
    description: siteConfig.description,
    creator: '@loay_eldin',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%2309090b'/><text x='50' y='62' font-size='44' fill='%23f2c27a' text-anchor='middle' font-family='Georgia, serif'>L</text></svg>"
        />
      </head>
      <body
        className={`${sans.variable} ${display.variable} ${mono.variable} bg-black font-body antialiased`}
      >
        <div className="relative min-h-screen">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
