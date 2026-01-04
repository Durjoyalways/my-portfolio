import "./globals.css";
// সরাসরি রিলেটিভ পাথ ব্যবহার করাই বুদ্ধিমানের কাজ
import Navbar from "./components/shared/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="night">
      <body className="antialiased selection:bg-primary selection:text-primary-content">
        <Navbar />
        {/* কন্টেন্ট যাতে নেভবারের নিচে না ঢাকা পড়ে তাই pt-24 বা pt-28 ব্যবহার করুন */}
        <main className="min-h-screen pt-24 px-4 md:px-12">
          {children}
        </main>
      </body>
    </html>
  );
}