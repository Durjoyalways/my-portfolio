import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer"; 

export const metadata = {
  title: "Durjoy | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* ১. data-theme কে "light" করে দেওয়া হয়েছে ২. পিওর হোয়াইট ফিক্স ইনজেক্ট করা হয়েছে */
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