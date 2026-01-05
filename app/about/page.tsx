"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCode, FaPaintBrush, FaRocket, FaDatabase } from 'react-icons/fa';

const AboutPage = () => {
  // Scroll animation for the parallax background text
  const { scrollYProgress } = useScroll();
  const xTransform = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <div className="min-h-screen bg-base-100 overflow-hidden">
      
      {/* 1. Hero Section with Parallax Text */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <motion.h2 
          style={{ x: xTransform }}
          className="absolute whitespace-nowrap text-[15rem] md:text-[25rem] font-black text-white/[0.02] pointer-events-none select-none uppercase"
        >
          Creative Developer — Designer — Architect —
        </motion.h2>
        
        <div className="container mx-auto px-6 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
              Engineering <br /> 
              <span className="text-primary italic">Aesthetics.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Content Section with Image & Description */}
      <section className="container mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image with Tilt-like Hover Effect */}
          <motion.div 
            whileHover={{ scale: 0.98, rotate: -1 }}
            className="relative aspect-square group cursor-crosshair"
          >
            <div className="absolute inset-0 border-2 border-primary rounded-[3rem] translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            <div className="relative h-full w-full bg-base-200 rounded-[3rem] overflow-hidden">
              <img 
                src="/images/your-photo1.png" 
                alt="About Me"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl md:text-3xl font-medium leading-relaxed text-base-content/80"
            >
              I am a Full-stack Developer based in <span className="text-white underline decoration-primary">Bangladesh</span>, 
              obsessed with building digital products that balance deep technical architecture with elite design.
            </motion.p>
            <p className="text-lg text-base-content/50 leading-relaxed">
              My journey started with a passion for logic, which evolved into a mastery of the 
              MERN stack and Next.js. I don't just write code; I build secure, scalable systems 
              like integrated SSLCommerz payment ecosystems and AI-driven dashboards.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Skill Cards with Subtle Light Glow (Updated) */}
      <section className="bg-base-200/50 py-32">
        <div className="container mx-auto px-6">
          <h3 className="text-sm font-bold tracking-[0.4em] uppercase text-primary mb-16 text-center">Technical Arsenal</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Frontend", icon: <FaPaintBrush />, desc: "Next.js, Tailwind, Framer Motion" },
              { title: "Backend", icon: <FaCode />, desc: "Node.js, Express, Socket.io" },
              { title: "Database", icon: <FaDatabase />, desc: "MongoDB, PostgreSQL, Redis" },
              { title: "Scale", icon: <FaRocket />, desc: "SSLCommerz, AWS, Docker" },
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group p-10 rounded-[2.5rem] bg-base-100 border border-white/5 overflow-hidden transition-all duration-500"
              >
                {/* Subtle Radial Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                     style={{
                       background: 'radial-gradient(circle at center, rgba(var(--p), 0.1) 0%, transparent 70%)'
                     }}>
                </div>

                {/* Flare Light in Corner */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 blur-[50px] rounded-full group-hover:bg-primary/15 transition-all duration-700"></div>

                <div className="relative z-10">
                  <div className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                    {skill.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-2 transition-colors">{skill.title}</h4>
                  <p className="text-base-content/50 group-hover:text-base-content/80 transition-colors">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Process Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 flex flex-col items-center">
            <h3 className="text-6xl md:text-8xl font-black mb-12 italic opacity-10 uppercase select-none">The Process</h3>
            <div className="w-full max-w-5xl space-y-1">
                {[
                    { step: "01", label: "Discovery", detail: "Understanding the problem & defining goals." },
                    { step: "02", label: "Architecture", detail: "Designing secure DB schemas & API flows." },
                    { step: "03", label: "Execution", detail: "Pixel-perfect UI meets high-end code." },
                    { step: "04", label: "Deployment", detail: "Optimizing performance & scaling live." },
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ x: 20 }}
                        className="group flex items-center justify-between py-10 border-b border-white/5 cursor-pointer"
                    >
                        <div className="flex items-center gap-10">
                            <span className="font-mono text-primary text-xl">{item.step}</span>
                            <h5 className="text-4xl md:text-6xl font-bold group-hover:italic group-hover:text-primary transition-all duration-300">
                              {item.label}
                            </h5>
                        </div>
                        <p className="hidden md:block text-base-content/40 text-right max-w-xs group-hover:text-base-content transition-colors">
                          {item.detail}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;