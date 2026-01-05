import "./globals.css";
import Navbar from "./components/shared/Navbar";
// ১. ফুটারটি ইম্পোর্ট করুন
import Footer from "./components/shared/Footer"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="night">
      <body className="antialiased selection:bg-primary selection:text-primary-content">
        <Navbar />
        
        {/* মেইন কন্টেন্ট এরিয়া */}
        <main className="min-h-screen pt-24 px-4 md:px-12">
          {children}
        </main>

        {/* ২. ফুটারটি এখানে রেন্ডার করুন */}
        <Footer />
      </body>
    </html>
  );
}