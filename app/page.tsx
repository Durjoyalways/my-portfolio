import Hero from "./components/home/Hero";
import Process from "./components/home/Process";
import FeaturedProjects from "./components/home/FeaturedProjects";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-12 bg-base-200/40 border-y border-base-content/5">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Exp Years", value: "02+" },
            { label: "Projects Done", value: "25+" },
            { label: "Technologies", value: "12+" },
            { label: "Success Rate", value: "100%" },
          ].map((s, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl font-black text-primary transition-transform duration-300 group-hover:scale-110">{s.value}</div>
              <div className="text-[10px] font-bold opacity-50 uppercase tracking-[0.2em] mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Sections */}
      <Process />
      <FeaturedProjects />
    </main>
  );
}