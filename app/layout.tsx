import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer"; 
import type { Metadata } from "next";

// --- SEO Metadata ---
export const metadata: Metadata = {
  title: "Durjoy | Full Stack Developer Portfolio",
  description: "Explore the professional portfolio of Durjoy, a Full Stack Developer specializing in modern web technologies, React, Next.js, and TypeScript. Let's build something exceptional.",
  keywords: ["Durjoy", "Durjoy Developer", "Full Stack Developer", "Web Developer in Bangladesh", "React Developer portfolio", "Durjoy Web Dev"],
  authors: [{ name: "Durjoy" }],
  creator: "Durjoy",
  metadataBase: new URL('https://durjoy-dev.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Durjoy | Full Stack Web Developer Portfolio",
    description: "Hi, I'm Durjoy. Explore my projects and skills in modern web development.",
    url: 'https://durjoy-dev.vercel.app',
    siteName: 'Durjoy Portfolio',
    images: [
      {
        url: '/your-photo.jpg', // নিশ্চিত করুন public ফোল্ডারে এই ছবিটি আছে
        width: 1200,
        height: 630,
        alt: 'Durjoy Portfolio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Durjoy | Full Stack Developer",
    description: "Building modern web applications with React and Next.js.",
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
        {/* JSON-LD Schema: এটি গুগল সার্চে আপনার নাম ও প্রফেশনাল তথ্য দেখাতে সাহায্য করবে */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Durjoy",
              "url": "https://durjoy-dev.vercel.app",
              "jobTitle": "Full Stack Web Developer",
              "sameAs": [
                "https://github.com/Durjoyalways",
                "https://wa.me/8801581797930"
              ],
              "knowsAbout": ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"]
            }),
          }}
        />
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