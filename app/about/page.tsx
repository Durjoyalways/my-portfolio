"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCode, FaPaintBrush, FaRocket, FaDatabase } from 'react-icons/fa';

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const xTransform = useTransform(scrollYProgress, [0, 1], [0, -500]);

  // Force cast motion components to 'any' to stop TypeScript from checking props
  const MotionDiv = motion.div as any;
  const MotionH2 = motion.h2 as any;
  const MotionP = motion.p as any;

  return (
    <div className="min-h-screen bg-base-100 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <MotionH2 
          style={{ x: xTransform }} 
          className="absolute whitespace-nowrap text-[15rem] md:text-[25rem] font-black text-base-content/[0.03] pointer-events-none select-none uppercase"
        >
          Creative Developer — Designer — Architect —
        </MotionH2>
        
        <div className="container mx-auto px-6 z-10">
          <MotionDiv 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
              Engineering <br /> 
              <span className="text-primary italic">Aesthetics.</span>
            </h1>
          </MotionDiv>
        </div>
      </section>

      {/* 2. Content Section */}
      <section className="container mx-auto px-6 py-24 border-t border-base-content/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <MotionDiv 
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
          </MotionDiv>

          <div className="space-y-8">
            <MotionP 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl md:text-3xl font-medium leading-relaxed text-base-content/80"
            >
              I am a Full-stack Developer based in <span className="text-base-content underline decoration-primary decoration-4">Bangladesh</span>, 
              obsessed with building digital products that balance deep technical architecture with elite design.
            </MotionP>
            <p className="text-lg text-base-content/60 leading-relaxed">
              My journey started with a passion for logic, which evolved into a mastery of the 
              MERN stack and Next.js. I build secure, scalable systems 
              like integrated SSLCommerz payment ecosystems and AI-driven dashboards.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Skill Cards */}
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
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group p-10 rounded-[2.5rem] bg-base-100 border border-base-content/5 overflow-hidden transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                    {skill.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{skill.title}</h4>
                  <p className="text-base-content/50 group-hover:text-base-content/80 transition-colors">
                    {skill.desc}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Process */}
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
                    <MotionDiv 
                        key={idx}
                        whileHover={{ x: 20 }}
                        className="group flex items-center justify-between py-10 border-b border-base-content/5 cursor-pointer"
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
                    </MotionDiv>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;