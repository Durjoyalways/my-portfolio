import Hero from "./components/home/Hero";
import Process from "./components/home/Process";
import FeaturedProjects from "./components/home/FeaturedProjects";

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

      {/* Stats Section with Scrolling & Glow Effect */}
      <section className="relative py-24 overflow-hidden group">
        
        {/* Animated Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[120px] -z-10 group-hover:bg-primary/20 transition-all duration-1000"></div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stats.map((s, i) => (
              <div 
                key={i} 
                className="text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="relative inline-block">
                  {/* Digital Glow behind numbers */}
                  <span className="absolute inset-0 blur-2xl bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                  <div className="relative text-6xl md:text-7xl font-black tracking-tighter text-base-content group-hover:text-primary transition-all duration-500 hover:scale-110">
                    {s.value}
                  </div>
                </div>
                
                <div className="text-[10px] font-bold opacity-40 uppercase tracking-[0.4em] group-hover:opacity-100 group-hover:tracking-[0.5em] transition-all duration-500">
                  {s.label}
                </div>
                
                {/* Decorative underline */}
                <div className="h-1 w-10 bg-primary/20 mx-auto rounded-full group-hover:w-20 group-hover:bg-primary transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <div className="flex flex-col gap-32 pb-24">
        <Process />
        <FeaturedProjects />
      </div>
    </main>
  );
}