"use client";
import Link from "next/link";

const projects = [
{
    id: "proj-01",
    title: "E-Commerce Ecosystem",
    description: "A high-performance MERN & Firebase application featuring a custom admin dashboard and secure SSLCommerz payment integration with real-time order tracking.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "SSLCommerz"], 
    link: "/projects/proj-01",
    github: "https://github.com/Durjoyalways/Dia-Medical-Shop",
    laptopImg: "/images/your-photo1.png", 
    mobileImg: "/images/your-photo2.png"  
  },
{
    id: "proj-02",
    title: "AI Nexus Platform",
    description: "An intelligent real-time interaction engine built with Firebase for instant data synchronization and integrated with SSLCommerz for premium AI features.",
    tech: ["React", "Firebase", "OpenAI", "SSLCommerz"], // প্রথম প্রজেক্টের সাথে টেক স্ট্যাক সামঞ্জস্যপূর্ণ করা হয়েছে
    link: "/projects/proj-02", 
    github: "https://github.com/Durjoyalways/Dia-Medical-Shop/tree/main/app/admin/all-orders", 
    laptopImg: "/images/your-photo3.png", 
    mobileImg: "/images/your-photo4.png"  
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-32 bg-base-100 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-24 items-center text-center">
          <span className="text-primary font-mono tracking-[0.3em] text-xs uppercase mb-3 px-4 py-1 border border-primary/20 rounded-full bg-primary/5">
            Portfolio Showcase
          </span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter">
            SELECTED <span className="text-primary italic">WORKS.</span>
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-48">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Visual Display */}
              <div className="relative w-full lg:w-3/5 group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                <div className="relative z-10 transition-all duration-700 transform group-hover:scale-[1.05] group-hover:-translate-y-4">
                  <img 
                    src={project.laptopImg} 
                    alt={project.title} 
                    className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                  />
                </div>

                <div className="absolute -bottom-16 -right-4 md:-right-8 z-20 w-[28%] transition-all duration-700 delay-75 transform group-hover:scale-110 group-hover:-translate-y-8 group-hover:-rotate-6">
                  <img 
                    src={project.mobileImg} 
                    alt="Mobile View" 
                    className="w-full h-auto drop-shadow-[0_25px_25px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>

              {/* Content Description */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 bg-base-200/50 border border-base-content/10 rounded-full backdrop-blur-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base-content/60 text-lg leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-10 pt-6">
                  {/* Details Button - এখন কাজ করবে */}
                  <Link 
                    href={project.link} 
                    className="btn btn-primary btn-lg rounded-full px-12 text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/30"
                  >
                    Details
                  </Link>

                  {/* Code Button - এখন সরাসরি গিটহাবে নিয়ে যাবে */}
                  <Link 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-sm tracking-[0.2em] border-b-2 border-primary/40 hover:border-primary transition-all pb-1 uppercase"
                  >
                    Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;