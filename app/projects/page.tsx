"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaEye } from 'react-icons/fa';

const projectsData = [
  {
    id: "proj-01",
    title: "E-Commerce Ecosystem",
    category: "MERN Stack",
    image: "/images/your-photo2.png", 
    description: "A high-performance online store featuring SSLCommerz payments, real-time inventory, and an admin dashboard.",
    tech: ["Next.js", "Node.js", "SSLCommerz", "MongoDB"]
  },
  {
    id: "proj-02",
    title: "AI Nexus Platform",
    category: "Next.js",
    image: "/images/your-photo6.png", 
    description: "An intelligent real-time communication platform using OpenAI for smart responses and Socket.io.",
    tech: ["React", "Node.js", "OpenAI", "Socket.io"]
  },
  {
    id: "proj-03",
    title: "Smart Inventory",
    category: "Backend",
    image: "/images/your-photo1.png", 
    description: "Scalable backend architecture for managing large scale warehouse inventory systems with deep analytics.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis"]
  },

];

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');

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
            Explore 4 of my latest high-end full-stack architectures.
          </p>
        </div>

        {/* Filter System */}
        <div className="flex justify-center gap-3 mb-16 overflow-x-auto pb-4 scrollbar-hide">
          {['All', 'MERN Stack', 'Next.js', 'Backend'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`btn btn-md rounded-full px-8 transition-all ${filter === cat ? 'btn-primary shadow-lg shadow-primary/20' : 'btn-ghost border border-base-content/10'}`}
            >
              {cat}
            </button>
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

              <div className="p-10 pt-2 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-2 block">{project.category}</span>
                    <h3 className="text-4xl font-bold tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <div className="flex gap-3">
                    <Link href="#" className="w-12 h-12 bg-base-300 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-black transition-all"><FaCode /></Link>
                    <Link href="#" className="w-12 h-12 bg-base-300 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-black transition-all"><FaEye /></Link>
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