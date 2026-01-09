"use client";
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

// --- Type Casting for Framer Motion ---
const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;
const MotionForm = motion.form as any;

// --- Magnetic Component ---
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
        <MotionDiv
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </MotionDiv>
    );
};

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "6a19c243-244b-43e1-aead-b0ffe0d8894b"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Submission Error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-100 pt-28 pb-20 overflow-hidden relative">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Text and Socials */}
          <MotionDiv 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <MotionH1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]">
              Let's <br /> 
              <span className="text-primary italic">Talk.</span>
            </MotionH1>
            <p className="text-xl text-base-content/60 max-w-md leading-relaxed">
              I'm currently available for freelance projects and full-time opportunities. Let's build something exceptional together.
            </p>

            <div className="flex gap-6 pt-4">
              <a href="https://github.com/Durjoyalways" target="_blank" rel="noreferrer">
                <Magnetic><button className="btn btn-circle btn-outline border-base-content/10 hover:btn-primary text-xl transition-colors"><FaGithub /></button></Magnetic>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <Magnetic><button className="btn btn-circle btn-outline border-base-content/10 hover:btn-primary text-xl transition-colors"><FaLinkedin /></button></Magnetic>
              </a>
              <a href="https://wa.me/8801XXXXXXXXX" target="_blank" rel="noreferrer">
                <Magnetic><button className="btn btn-circle btn-outline border-base-content/10 hover:btn-primary text-xl transition-colors"><FaWhatsapp /></button></Magnetic>
              </a>
            </div>
          </MotionDiv>

          {/* Right Side: Form Section */}
          <MotionDiv 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-base-200/50 backdrop-blur-3xl p-8 md:p-12 rounded-[3rem] border border-base-content/5 shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <MotionDiv 
                    key="success"
                    initial={{ scale: 0.8, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="text-center py-20 space-y-4"
                  >
                    <FaCheckCircle className="text-primary text-7xl mx-auto animate-bounce" />
                    <h2 className="text-3xl font-bold">Message Sent!</h2>
                    <p className="opacity-60 font-medium">I've received your message. I'll get back to you as soon as possible.</p>
                  </MotionDiv>
                ) : (
                  <MotionForm 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    exit={{ opacity: 0 }}
                  >
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold uppercase tracking-widest text-xs opacity-50">Full Name</span>
                      </label>
                      <input name="name" required type="text" placeholder="Enter your name" className="input input-ghost bg-base-100/50 border-base-content/10 focus:border-primary focus:bg-base-100 rounded-2xl h-16 text-lg transition-all outline-none" />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold uppercase tracking-widest text-xs opacity-50">Email Address</span>
                      </label>
                      <input name="email" required type="email" placeholder="email@example.com" className="input input-ghost bg-base-100/50 border-base-content/10 focus:border-primary focus:bg-base-100 rounded-2xl h-16 text-lg transition-all outline-none" />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold uppercase tracking-widest text-xs opacity-50">Project Inquiry</span>
                      </label>
                      <textarea name="message" required rows={4} placeholder="Tell me about your project..." className="textarea textarea-ghost bg-base-100/50 border-base-content/10 focus:border-primary focus:bg-base-100 rounded-3xl text-lg transition-all p-6 outline-none" />
                    </div>

                    <div className="pt-6">
                      <Magnetic>
                        <button 
                          disabled={isSubmitting}
                          type="submit" 
                          className={`btn btn-primary btn-lg rounded-2xl w-full flex items-center justify-center gap-3 shadow-lg transition-all ${isSubmitting ? 'opacity-50' : 'shadow-primary/20 active:scale-95'}`}
                        >
                          {isSubmitting ? (
                            <span className="loading loading-spinner loading-md"></span>
                          ) : (
                            <>Send Message <FaPaperPlane /></>
                          )}
                        </button>
                      </Magnetic>
                    </div>
                  </MotionForm>
                )}
              </AnimatePresence>
            </div>
          </MotionDiv>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;