"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

// --- 1. Magnetic Component (Internal to avoid import errors) ---
const Magnetic = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        if (!ref.current) return;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
};

// --- 2. Main Contact Page ---
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-base-100 pt-28 pb-20 overflow-hidden relative">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Bold Typography */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]">
              Let's <br /> 
              <span className="text-primary italic">Talk.</span>
            </h1>
            <p className="text-xl text-base-content/60 max-w-md leading-relaxed">
              I’m available for freelance projects and full-time opportunities. Let’s build something extraordinary together.
            </p>

            <div className="flex gap-6 pt-4">
              {[<FaGithub />, <FaLinkedin />, <FaWhatsapp />].map((icon, i) => (
                <Magnetic key={i}>
                  <button className="btn btn-circle btn-outline border-base-content/10 hover:btn-primary text-xl transition-colors">
                    {icon}
                  </button>
                </Magnetic>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-base-200/50 backdrop-blur-3xl p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl">
              <form className="space-y-6">
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold uppercase tracking-widest text-xs opacity-50">Full Name</span>
                  </label>
                  <input type="text" placeholder="Your Name" className="input input-ghost bg-base-100/50 border-white/5 focus:border-primary focus:bg-base-100 rounded-2xl h-16 text-lg transition-all outline-none" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold uppercase tracking-widest text-xs opacity-50">Email</span>
                  </label>
                  <input type="email" placeholder="email@example.com" className="input input-ghost bg-base-100/50 border-white/5 focus:border-primary focus:bg-base-100 rounded-2xl h-16 text-lg transition-all outline-none" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold uppercase tracking-widest text-xs opacity-50">Message</span>
                  </label>
                  <textarea rows={4} placeholder="What are we building?" className="textarea textarea-ghost bg-base-100/50 border-white/5 focus:border-primary focus:bg-base-100 rounded-3xl text-lg transition-all p-6 outline-none" />
                </div>

                <div className="pt-6">
                  <Magnetic>
                    <button className="btn btn-primary btn-lg rounded-2xl w-full flex items-center justify-center gap-3 shadow-lg shadow-primary/20 transition-all active:scale-95">
                      Send Message <FaPaperPlane />
                    </button>
                  </Magnetic>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;