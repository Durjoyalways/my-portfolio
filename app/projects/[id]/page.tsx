"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaLaptopCode, FaServer, FaLayerGroup } from 'react-icons/fa';
import Link from 'next/link';

// টাইপস্ক্রিপ্ট এরর এড়াতে মোশন এলিমেন্ট কাস্টিং
const MotionDiv = motion.div as any;

const projectsData = [
  {
    id: "proj-01",
    title: "Lead Front-end Architect & UX Engineer",
    category: "Front End",
    image: "/images/your-photo2.png", 
    description: "Developed a high-performance, conversion-focused E-commerce storefront.",
    longDescription: "This project involved creating a massive storefront with Next.js. I focused on optimizing Core Web Vitals, implementing complex filtering logic, and ensuring a 100% responsive design across all devices. The project also included integrating SSLCommerz for secure payment processing.",
    features: ["Dynamic Product Grid", "Complex State Management", "Custom Animation Library", "SEO Optimized Architecture"],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "SSLCommerz"],
    liveLink: "#",
    githubLink: "https://github.com/Durjoyalways/B11-A2"
  },
  {
    id: "proj-02",
    title: "Backend Systems & Admin Logic Engineer",
    category: "Back End",
    image: "/images/your-photo6.png", 
    description: "Architected the core backend for an AI-driven platform with complex Admin logic.",
    longDescription: "I built the engine that powers an AI platform's order management. My work involved creating secure REST APIs, implementing Socket.io for real-time notifications, and designing an efficient MongoDB schema to handle large volumes of order data.",
    features: ["Real-time Order Processing", "Socket.io Integration", "Secure Admin Authentication", "AI API Management"],
    tech: ["Node.js", "Express", "MongoDB", "Socket.io", "OpenAI API"],
    liveLink: "https://dia-medical-shop-wler.vercel.app/admin/all-orders", 
    githubLink: "https://github.com/Durjoyalways/Dia-Medical-Shop/tree/main/app/admin/all-orders",
  },
  {
    id: "proj-03",
    title: "Full-Stack Inventory Architect",
    category: "MERN Stack",
    image: "/images/your-photo1.png", 
    description: "Built a comprehensive warehouse management system with deep analytics.",
    longDescription: "As a full-stack developer, I handled everything from the PostgreSQL database design to the React-based dashboard. I used Redis for caching analytics data to ensure that the admin receives real-time updates without any lag.",
    features: ["Inventory Tracking", "Data Visualization", "Redis Caching Layer", "Role-based Dashboard"],
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS"],
    liveLink: "https://dia-medical-shop-wler.vercel.app",
    githubLink: "https://github.com/Durjoyalways/Dia-Medical-Shop"
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold italic">Project Not Found!</h1>
        <button onClick={() => router.push('/projects')} className="btn btn-primary">Back to Projects</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 pb-20 pt-24">
      {/* Background Decorative Element */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Navigation & Header */}
        <MotionDiv 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6"
        >
          <button 
            onClick={() => router.back()}
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
            <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back to Archive
          </button>

          <div className="flex gap-4">
            <Link href={project.githubLink} target="_blank" className="btn btn-ghost btn-circle border border-base-content/10 hover:bg-base-content hover:text-base-100">
              <FaGithub size={20} />
            </Link>
            <Link href={project.liveLink} target="_blank" className="btn btn-primary px-8 rounded-full shadow-lg shadow-primary/20">
              Live Demo <FaExternalLinkAlt className="ml-2 text-xs" />
            </Link>
          </div>
        </MotionDiv>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-12">
            <MotionDiv 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 text-primary font-mono text-sm font-bold uppercase tracking-[0.3em]">
                 <FaLayerGroup /> {project.category}
              </div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase italic">
                {project.title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 !== 0 ? "text-primary not-italic" : ""}>{word} </span>
                ))}
              </h1>
            </MotionDiv>

            {/* Featured Image */}
            <MotionDiv 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video rounded-[3rem] overflow-hidden border-8 border-base-200 shadow-2xl bg-black"
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold uppercase flex items-center gap-3 italic">
                  <FaLaptopCode className="text-primary" /> The Mission
                </h3>
                <p className="text-base-content/60 text-lg leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold uppercase flex items-center gap-3 italic">
                  <FaServer className="text-primary" /> Key Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-base-content/80 font-medium">
                      <FaCheckCircle className="text-primary text-sm" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8 bg-base-200/50 p-10 rounded-[3rem] border border-base-content/5 backdrop-blur-md">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 opacity-40">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-5 py-2 bg-base-100 rounded-xl text-[10px] font-black border border-base-content/10 uppercase tracking-widest text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-base-content/5">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 opacity-40">My Role</h4>
                <p className="text-lg font-bold italic">{project.category} Specialist</p>
              </div>

              <div className="pt-6 border-t border-base-content/5">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 opacity-40">Timeline</h4>
                <p className="text-lg font-bold italic">2024 - Present</p>
              </div>

              <div className="p-6 bg-primary rounded-3xl text-black">
                <h4 className="font-black uppercase tracking-tighter text-2xl mb-2">Have a project?</h4>
                <p className="text-sm font-bold mb-6 opacity-80">Let's build something extraordinary together.</p>
                <Link href="/contact" className="btn btn-block bg-black text-white border-none rounded-xl hover:bg-black/80">Hire Me</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;