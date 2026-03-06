const updates = [
  {
    date: "Mar 2026",
    text: "Published artifact deep dive for ResourceHub — Android community resource app.",
  },
  {
    date: "Mar 2026",
    text: "Published artifact deep dive for Luma — full-stack journaling app with mood tracking and analytics.",
  },
  {
    date: "Mar 2026",
    text: "Added Luma to production with CI/CD pipeline, test coverage, and Codecov reporting.",
  },
];

const WhatsNew = () => {
  return (
    <section className="py-20 bg-muted/30" id="whats-new">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            What's New
          </h2>
          <p className="text-muted-foreground mb-10">
            Recent updates to my portfolio and projects.
          </p>

          <div className="relative border-l-2 border-primary/20 pl-8 space-y-8">
            {updates.map((update, index) => (
              <div key={index} className="relative">
                {/* Dot */}
                <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-gradient-sunset border-2 border-background" />
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                  {update.date}
                </p>
                <p className="text-foreground leading-relaxed">{update.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
