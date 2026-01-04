"use client";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 px-6 lg:px-20 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Side: Big Profile Photo */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] group">
            
            {/* Spinning Dashed Ring */}
            <div className="absolute inset-0 border-4 border-dashed border-primary/20 rounded-full animate-[spin_40s_linear_infinite]"></div>
            
            {/* Main Photo Container */}
            <div className="absolute inset-6 rounded-full overflow-hidden border-8 border-base-200 shadow-2xl transition-all duration-500 group-hover:shadow-primary/30">
              <Image 
                src="/images/your-photo.jpg" 
                alt="Durjoy - MERN Stack Developer"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
            </div>

            {/* Status Badge */}
            <div className="absolute top-12 right-0 bg-base-100/80 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-primary/20 flex items-center gap-3 animate-bounce">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
              </span>
              <span className="font-bold text-xs uppercase tracking-widest text-base-content">Open for Opportunities</span>
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          <div className="space-y-6">
            <h2 className="text-primary font-mono font-bold tracking-[0.3em] text-sm uppercase flex items-center justify-center lg:justify-start gap-3">
              <span className="h-[1px] w-8 bg-primary"></span>
              Full-Stack MERN Developer
            </h2>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-base-content">
              SCALING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                IDEAS TO REALITY.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-base-content/70 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Hi, I'm <span className="text-base-content font-bold border-b-4 border-primary/50">Durjoy</span>. 
              I specialize in building high-performance web applications using the 
              <span className="text-base-content font-semibold"> MERN Stack </span> 
              (MongoDB, Express, React, Node.js) with a focus on scalability and seamless user experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link href="/projects" className="btn btn-primary btn-lg rounded-2xl px-12 shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all normal-case">
              View Portfolio
            </Link>
            <Link href="/contact" className="btn btn-ghost btn-lg rounded-2xl px-12 border border-base-content/10 hover:bg-base-content hover:text-base-100 transition-all normal-case">
              Get In Touch
            </Link>
          </div>
          
          {/* Quick Skill Indicator */}
          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 opacity-50 grayscale hover:grayscale-0 transition-all">
             <span className="text-xs font-bold tracking-widest uppercase">Expertise in:</span>
             <div className="flex gap-4 text-sm font-mono">
                <span>MongoDB</span>
                <span>Express</span>
                <span>React</span>
                <span>Node.js</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;