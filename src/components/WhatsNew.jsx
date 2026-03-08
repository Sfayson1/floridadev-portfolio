import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { manualUpdates } from "@/data/updates";

const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

const artifactUpdates = projects
  .filter((p) => p.artifact && p.artifactDate)
  .map((p) => ({
    date: p.artifactDate,
    text: `Published artifact deep dive for ${p.title} — ${p.summary}`,
    href: p.artifact,
  }));

const allUpdates = [...artifactUpdates, ...manualUpdates].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

const WhatsNew = () => {
  const navigate = useNavigate();

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
            {allUpdates.map((update, index) => (
              <div
                key={index}
                className={`relative ${update.href ? "cursor-pointer group" : ""}`}
                onClick={() => update.href && navigate(update.href)}
              >
                <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-gradient-sunset border-2 border-background" />
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                  {formatDate(update.date)}
                </p>
                <p className={`leading-relaxed ${update.href ? "text-foreground group-hover:text-primary transition-colors" : "text-foreground"}`}>
                  {update.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
