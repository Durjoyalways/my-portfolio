"use client";
import React from "react";
import { motion } from "framer-motion";

const MDiv = motion.div as any;

const TechStack = () => {
  const skills = [
    { name: "Next.js", color: "hover:text-white" },
    { name: "React", color: "hover:text-blue-400" },
    { name: "TypeScript", color: "hover:text-blue-600" },
    { name: "Node.js", color: "hover:text-green-500" },
    { name: "MongoDB", color: "hover:text-green-600" },
    { name: "Tailwind", color: "hover:text-cyan-400" },
    { name: "Express", color: "hover:text-gray-400" }, // Prisma এর বদলে Express যোগ করা হয়েছে
    { name: "Firebase", color: "hover:text-yellow-500" }, // PostgreSQL এর বদলে Firebase
  ];

  return (
    <section className="py-20 bg-base-200/50">
      <div className="container mx-auto px-6">
        <MDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">My Tech Stack</h3>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </MDiv>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <MDiv 
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className={`p-8 bg-base-100 border border-base-content/5 rounded-3xl flex items-center justify-center text-xl font-bold transition-all duration-300 hover:border-primary/50 hover:shadow-2xl ${skill.color}`}
            >
              {skill.name}
            </MDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;