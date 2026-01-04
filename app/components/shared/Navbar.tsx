"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // একটিভ পেজ ধরার জন্য

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // বর্তমান ইউআরএল পাথ চেক করবে

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // নেভিগেশন আইটেমগুলোর লিস্ট
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinks = navItems.map((item) => {
    const isActive = pathname === item.path;
    return (
      <li key={item.path}>
        <Link
          href={item.path}
          className={`relative px-4 py-2 transition-all duration-300 rounded-lg font-medium
            ${isActive 
              ? "text-primary bg-primary/10 shadow-[0_0_15px_rgba(var(--p),0.1)]" 
              : "hover:text-primary hover:bg-base-200"
            }`}
        >
          {item.name}
          {/* Active Bottom Indicator */}
          {isActive && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-pulse"></span>
          )}
        </Link>
      </li>
    );
  });

  return (
    <div
      className={`navbar fixed top-0 z-50 transition-all duration-500 px-4 md:px-12 ${
        isScrolled
          ? "bg-base-100/80 backdrop-blur-xl border-b border-primary/20 py-2 shadow-lg shadow-primary/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-base-100 rounded-2xl w-52 border border-base-content/10 gap-2">
            {navLinks}
          </ul>
        </div>

        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-primary text-primary-content h-11 w-11 flex items-center justify-center rounded-xl font-black text-2xl group-hover:rotate-[360deg] transition-all duration-700 shadow-lg shadow-primary/30">
            D
          </div>
          <span className="text-2xl font-black tracking-tighter hidden sm:block">
            DURJOY<span className="text-primary animate-pulse">.DEV</span>
          </span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1 font-semibold">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end gap-3 md:gap-5">
        {/* Theme Switcher with Hover Effect */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-primary/10 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] p-3 shadow-2xl bg-base-200 rounded-2xl w-52 mt-4 border border-base-content/10 space-y-1">
            {["light", "night", "luxury", "cupcake", "dracula"].map((theme) => (
              <li key={theme}>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start capitalize"
                  aria-label={theme}
                  value={theme}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Resume Button with Glow */}
        <Link
          href="/resume.pdf"
          target="_blank"
          className="btn btn-primary btn-sm md:btn-md rounded-full px-8 text-white font-bold hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(var(--p),0.4)] hover:shadow-primary/60 border-none"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Navbar;