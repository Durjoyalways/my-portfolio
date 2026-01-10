import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Durjoy | Full Stack Developer Portfolio",
  description: "Explore the professional portfolio of Durjoy, a Full Stack Developer specializing in modern web technologies, React, and TypeScript.",
  metadataBase: new URL('https://durjoy-dev.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Durjoy | Portfolio",
    description: "Full Stack Developer Portfolio showcasing modern web projects.",
    url: 'https://durjoy-dev.vercel.app',
    siteName: 'Durjoy Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" style={{ colorScheme: 'light' }}>
      <head>
        <style>{`
          [data-theme="light"] {
            background-color: #ffffff !important;
            --b1: 0 0% 100% !important;
          }
          body {
            transition: background-color 0.3s ease;
          }
        `}</style>
      </head>
      <body className="antialiased selection:bg-primary selection:text-primary-content">
        <Navbar />
        
        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}