import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript"],
      color: "bg-gradient-ocean",
    },
    {
      title: "Backend",
      skills: ["Python", "FastAPI", "REST APIs"],
      color: "bg-gradient-sunset",
    },
    {
      title: "Data",
      skills: ["PostgreSQL", "SQL"],
      color: "bg-gradient-hero",
    },
    {
      title: "DevOps",
      skills: ["Git", "Docker", "Linux", "CI/CD"],
      color: "bg-gradient-ocean",
    },
  ];

  return (
    <section className="py-20 bg-background scroll-mt-24" id="skills">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-florida hover:shadow-sunset transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`h-2 ${category.color}`} />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-gradient-to-r from-muted/50 to-primary/10 border-0 shadow-florida">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Always Learning
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As an A.S. graduate (2025), now completing my BS in IT, expected
                April 2027, I'm committed to continuous learning and staying
                updated with the latest technologies and best practices in
                software development. Currently exploring cloud platforms and
                advanced React patterns.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
