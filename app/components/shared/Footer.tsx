"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // bg-[#050505] সরিয়ে bg-base-100 ব্যবহার করা হয়েছে যা বডির সাথে মিশে যাবে
    <footer className="relative bg-base-100 pt-32 pb-10 overflow-hidden border-t border-base-content/5">
      
      {/* Background Decorative Glow - এটি ফুটারকে বডি থেকে হালকা আলাদা লুক দিবে */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Call to Action Section */}
        <div className="flex flex-col items-center text-center mb-28">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
          >
            READY TO <span className="italic text-primary">COLLABORATE?</span>
          </motion.h2>
          
          <Link 
            href="mailto:your-email@example.com" 
            className="group flex items-center gap-3 text-xl md:text-2xl font-bold border-b-2 border-primary pb-2 hover:border-white transition-all duration-300"
          >
            <FaEnvelope className="text-primary" />
            Let's talk about your project
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-3xl font-black tracking-tighter">
              DEV<span className="text-primary">PORTFOLIO.</span>
            </h3>
            <p className="text-base-content/50 max-w-sm leading-relaxed text-lg">
              Full-stack developer focused on creating clean, performant, and user-centric digital experiences.
            </p>
            <div className="flex gap-4 pt-4">
              {[
                { icon: <FaGithub />, link: "#" },
                { icon: <FaLinkedin />, link: "#" },
                { icon: <FaTwitter />, link: "#" }
              ].map((item, i) => (
                <Link 
                  key={i} 
                  href={item.link} 
                  className="w-12 h-12 rounded-xl bg-base-200 border border-base-content/5 flex items-center justify-center text-xl hover:bg-primary hover:text-primary-content transition-all duration-300 shadow-lg"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold text-sm uppercase tracking-[0.3em] mb-8 text-primary">Explore</h4>
            <ul className="space-y-4 font-medium">
              {["Home", "Projects", "About Me", "Process"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-base-content/60 hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold text-sm uppercase tracking-[0.3em] mb-8 text-primary">Stay Connected</h4>
            <p className="text-base-content/50 mb-6">Join my newsletter for the latest tech insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-base-200 border border-base-content/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all"
              />
              <button className="btn btn-primary rounded-xl">Join</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-base-content/5 gap-6 text-base-content/40 text-sm">
          <p>© {new Date().getFullYear()} YourName. Crafted with Passion.</p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
            Back to top 
            <span className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-content transition-all">
              <FaArrowUp />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;