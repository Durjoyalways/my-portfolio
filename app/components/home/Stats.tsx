"use client";
import React from "react";
import { motion } from "framer-motion";

// টাইপস্ক্রিপ্ট বিল্ড এরর এড়াতে মোশন এলিমেন্ট কাস্টিং
const MDiv = motion.div as any;

export default function Stats() {
  const stats = [
    { label: "Exp Years", value: "02+" },
    { label: "Projects Done", value: "25+" },
    { label: "Technologies", value: "12+" },
    { label: "Success Rate", value: "100%" },
  ];

  return (
    <section className="relative py-24 overflow-hidden group bg-base-100">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[120px] -z-10 group-hover:bg-primary/25 transition-all duration-1000"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((s, i) => (
            <MDiv 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="text-center space-y-4 transition-all duration-700 hover:-translate-y-2"
            >
              <div className="relative inline-block">
                <div className="text-5xl md:text-7xl font-black tracking-tighter text-base-content group-hover:text-primary transition-colors duration-500">
                  {s.value}
                </div>
              </div>
              
              <div className="text-[10px] font-bold opacity-40 uppercase tracking-[0.4em] group-hover:opacity-100 group-hover:text-primary transition-all">
                {s.label}
              </div>
              
              {/* Animated underline */}
              <div className="h-1 w-10 bg-primary/20 mx-auto rounded-full group-hover:w-20 group-hover:bg-primary transition-all duration-500"></div>
            </MDiv>
          ))}
        </div>
      </div>
    </section>
  );
}