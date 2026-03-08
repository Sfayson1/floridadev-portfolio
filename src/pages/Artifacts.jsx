import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const artifacts = [
  {
    title: "Luma",
    summary: "Private journaling with mood tracking and analytics — designed, built, and deployed solo from first commit to production.",
    tech: ["React", "TypeScript", "Python", "FastAPI", "Neon", "Vercel", "Render"],
    href: "/artifacts/luma",
    featured: true,
  },
  {
    title: "ResourceHub",
    summary: "An Android app that connects people facing housing insecurity with local community resources — built solo in 5 weeks on a new platform.",
    tech: ["Kotlin", "Java", "Android Studio", "XML"],
    href: "/artifacts/resourcehub",
    featured: false,
  },
  {
    title: "Crucible",
    summary: "A full-stack developer matchmaking platform — post a project, define your open roles, and connect with contributors who want to build with you.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "Prisma", "PostgreSQL", "Neon", "Vercel"],
    href: "/artifacts/crucible",
    featured: false,
  },
];

const Artifacts = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Artifacts</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Deep dives into real projects — the problem, the approach, the tradeoffs, and what I'd change.
          </p>
        </div>

        <div className="space-y-6">
          {artifacts.map((artifact) => (
            <Card
              key={artifact.title}
              className={`group hover:shadow-sunset transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                artifact.featured ? "ring-2 ring-primary/20 bg-gradient-to-br from-card to-primary/5" : ""
              }`}
              onClick={() => navigate(artifact.href)}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {artifact.title}
                      </h2>
                      {artifact.featured && (
                        <Badge className="bg-gradient-sunset text-white border-0">Featured</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {artifact.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {artifact.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="hero"
                    className="shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(artifact.href);
                    }}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Artifacts;
