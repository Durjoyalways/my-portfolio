"use client";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Pro",
    description: "A full-stack shop with Stripe integration and Dashboard.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    link: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000"
  },
  {
    title: "AI Chat Platform",
    description: "Real-time AI assistant using OpenAI API and WebSockets.",
    tech: ["Node.js", "OpenAI", "Redis"],
    link: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000"
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="flex flex-col mb-16">
        <h2 className="text-4xl font-black mb-2">Selected Works</h2>
        <div className="h-1.5 w-20 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="group relative bg-base-200 rounded-3xl overflow-hidden border border-base-content/5 hover:border-primary/30 transition-all duration-500 shadow-xl">
            {/* Project Image */}
            <div className="h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="badge badge-primary badge-outline badge-sm font-mono">{t}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-base-content/70 mb-6">{project.description}</p>
              <Link href={project.link} className="btn btn-primary btn-md rounded-xl">View Case Study</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;