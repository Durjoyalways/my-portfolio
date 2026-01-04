const Process = () => {
  const steps = [
    { num: "01", title: "Strategy", desc: "Understanding the problem and planning the architecture." },
    { num: "02", title: "Design", desc: "Creating UI/UX with high conversion and clean aesthetics." },
    { num: "03", title: "Develop", desc: "Writing clean, scalable code with the latest tech stack." },
    { num: "04", title: "Deploy", desc: "Optimizing for SEO and deploying to robust cloud servers." }
  ];

  return (
    <section className="py-20 bg-base-300/30">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {steps.map((step) => (
          <div key={step.num} className="relative space-y-4">
            <span className="text-6xl font-black text-primary/10 absolute -top-8 -left-4 leading-none">
              {step.num}
            </span>
            <h4 className="text-xl font-bold relative z-10">{step.title}</h4>
            <p className="text-base-content/60 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;