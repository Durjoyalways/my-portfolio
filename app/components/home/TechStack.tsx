const TechStack = () => {
  const skills = [
    { name: "Next.js", color: "hover:text-white" },
    { name: "React", color: "hover:text-blue-400" },
    { name: "TypeScript", color: "hover:text-blue-600" },
    { name: "Node.js", color: "hover:text-green-500" },
    { name: "MongoDB", color: "hover:text-green-600" },
    { name: "Tailwind", color: "hover:text-cyan-400" },
    { name: "Prisma", color: "hover:text-indigo-400" },
    { name: "PostgreSQL", color: "hover:text-blue-300" },
  ];

  return (
    <section className="py-20 bg-base-200/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">My Tech Stack</h3>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className={`p-8 bg-base-100 border border-base-content/5 rounded-3xl flex items-center justify-center text-xl font-bold transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2 ${skill.color}`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;