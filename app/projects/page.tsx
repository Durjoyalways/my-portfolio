"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaEye } from 'react-icons/fa';

const projectsData = [
{
    id: "proj-01",
    title: "Lead Front-end Architect & UX Engineer",
    category: "Front End", // ক্যাটাগরি পরিবর্তন করা হয়েছে
    image: "/images/your-photo2.png", 
    description: "Developed a high-performance, conversion-focused E-commerce storefront. Focused on seamless user journeys, complex state management for shopping carts, and smooth payment gateway integration.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "SSLCommerz"] // ফ্রন্ট-এন্ড ফোকাসড টেক
  },
{
    id: "proj-02",
    title: "Backend Systems & Admin Logic Engineer",
    category: "Back End", // ক্যাটাগরি পরিবর্তন করে Back End করা হয়েছে
    image: "/images/your-photo6.png", 
    description: "Architected the core backend for an AI-driven platform, focusing on a robust Admin Order Maintenance system. Engineered real-time order tracking, automated status updates, and complex database schemas for seamless management.",
    tech: ["Node.js", "Express", "MongoDB", "Socket.io", "OpenAI API"] // ব্যাক-এন্ড ফোকাসড টেক
  },
{
    id: "proj-03",
    title: "Full-Stack Inventory Architect",
    category: "MERN Stack", // যেহেতু উভয় পাশে কাজ করেছেন, এটি Full Stack ক্যাটাগরিতে পড়ে
    image: "/images/your-photo1.png", 
    description: "Built a comprehensive warehouse management system from scratch. Engineered a high-performance REST API for deep analytics and a real-time dashboard for seamless inventory tracking and data visualization.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS"] // ফ্রন্ট এবং ব্যাক উভয় টেকনোলজি রাখা হয়েছে
  },
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');

  // ফিল্টার লজিক: ক্যাটাগরি অথবা টেকনোলজির সাথে মিললে দেখাবে
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter || p.tech.includes(filter));

  return (
    <div className="min-h-screen bg-base-100 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="pt-20 mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic"
          >
            Archive <span className="text-primary not-italic">.</span>
          </motion.h1>
          <p className="text-base-content/50 text-xl mt-4 max-w-2xl mx-auto">
            Explore my latest high-end architectures.
          </p>
        </div>

        {/* Filter System with Light Effect */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 pb-4">
          {['All', 'Front End', 'Back End', 'MERN Stack'].map((cat) => (
            <motion.button 
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`relative px-8 py-3 rounded-full font-bold transition-all duration-300 overflow-hidden group
                ${filter === cat 
                  ? 'bg-primary text-black shadow-[0_0_20px_rgba(var(--p),0.4)]' 
                  : 'bg-base-200 text-base-content border border-white/5 hover:border-primary/50'
                }`}
            >
              {/* Hover Light Effect (Nyon Glow) */}
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              key={project.id} 
              className="group relative bg-base-200/30 rounded-[3rem] overflow-hidden border border-base-content/5 hover:border-primary/30 transition-all duration-500"
            >
              {/* Image Section */}
              <div className="p-5">
                <div className="relative h-[300px] md:h-[450px] w-full rounded-[2.5rem] overflow-hidden bg-base-300">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <Link href={`/projects/${project.id}`} className="btn btn-primary btn-lg rounded-full px-8 shadow-2xl">
                      Case Study <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10 pt-2 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-2 block">{project.category}</span>
                    <h3 className="text-4xl font-bold tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <div className="flex gap-3">
                    <Link href="#" className="w-12 h-12 bg-base-300 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-black transition-all shadow-lg hover:shadow-primary/20"><FaCode /></Link>
                    <Link href="#" className="w-12 h-12 bg-base-300 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-black transition-all shadow-lg hover:shadow-primary/20"><FaEye /></Link>
                  </div>
                </div>

                <p className="text-base-content/60 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={`${project.id}-${t}`} className="px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary text-[11px] font-black uppercase rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;