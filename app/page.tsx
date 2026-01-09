"use client";
import Hero from "./components/home/Hero";
import Process from "./components/home/Process";
import FeaturedProjects from "./components/home/FeaturedProjects";
import TechStack from "./components/home/TechStack"; // এটি নতুন যুক্ত হয়েছে
import { motion } from "framer-motion";

const MDiv = motion.div as any;

export default function Home() {
  const stats = [
    { label: "Exp Years", value: "02+" },
    { label: "Projects Done", value: "25+" },
    { label: "Technologies", value: "12+" },
    { label: "Success Rate", value: "100%" },
  ];

  return (
    <main className="min-h-screen bg-base-100 overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="relative py-24 overflow-hidden group">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[120px] -z-10 group-hover:bg-primary/20 transition-all duration-1000"></div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stats.map((s, i) => (
              <MDiv 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="relative inline-block">
                  <span className="absolute inset-0 blur-2xl bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                  <div className="relative text-6xl md:text-7xl font-black tracking-tighter text-base-content group-hover:text-primary transition-all duration-500 hover:scale-110">
                    {s.value}
                  </div>
                </div>
                <div className="text-[10px] font-bold opacity-40 uppercase tracking-[0.4em] group-hover:opacity-100 transition-all">
                  {s.label}
                </div>
                <div className="h-1 w-10 bg-primary/20 mx-auto rounded-full group-hover:w-20 group-hover:bg-primary transition-all duration-500"></div>
              </MDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="flex flex-col gap-32 pb-24">
        <TechStack />        {/* এখানে টেক স্ট্যাক দেখা যাবে */}
        <Process />
        <FeaturedProjects />
      </div>
    </main>
  );
}