"use client";

const Process = () => {
  const steps = [
    { 
      title: "Strategy", 
      desc: "Deep diving into requirements, defining the system architecture, and selecting the right database schema for MongoDB.",
      icon: "🎯" 
    },
    { 
      title: "Design", 
      desc: "Crafting a pixel-perfect React UI with a focus on user psychology and high-performance UX/UI design.",
      icon: "🎨" 
    },
    { 
      title: "Develop", 
      desc: "Building robust APIs with Node/Express and integrating seamless front-end components with state management.",
      icon: "💻" 
    },
    { 
      title: "Deploy", 
      desc: "CI/CD automation, SEO optimization, and deploying on AWS/Vercel with SSL and production-ready security.",
      icon: "🚀" 
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-base-100">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-24 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
          MY WORK <span className="text-primary">PROCESS</span>
        </h2>
        <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Simplified Grid - No background numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative p-10 rounded-[2.5rem] bg-base-200/40 border border-base-content/5 hover:border-primary/20 transition-all duration-500 hover:bg-base-200"
            >
              <div className="relative z-10 space-y-6">
                {/* Icon with a subtle glow */}
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-16 h-16 rounded-2xl bg-base-300 flex items-center justify-center text-3xl group-hover:bg-primary group-hover:text-primary-content transition-all duration-500 shadow-inner">
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-base-content/60 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Accent Bar */}
                <div className="h-1 w-0 bg-primary/40 rounded-full group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;