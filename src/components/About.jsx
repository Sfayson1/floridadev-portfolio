import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palmtree, Sun } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I got into software engineering during the pandemic out of boredom and curiosity — and never looked back. As a U.S. Marine Corps Aviation Avionics Technician, I was trained to follow systems, troubleshoot methodically, and not stop until the problem is solved. Turns out that's exactly what software development requires. I build full-stack web apps focused on real human problems — the kind of tools that make someone's life meaningfully easier. I'm research-oriented to a fault, stubborn when debugging, and genuinely excited by the moment something finally works.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-8 shadow-florida hover:shadow-sunset transition-all duration-300 hover:-translate-y-2">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Builds for People</h3>
              <p className="text-muted-foreground">
                Full-stack apps with React, Python, and FastAPI — focused on real human problems, not just technical exercises
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 shadow-florida hover:shadow-sunset transition-all duration-300 hover:-translate-y-2">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                <Palmtree className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Systems Thinker</h3>
              <p className="text-muted-foreground">
                From avionics to APIs — trained as a U.S. Marine to understand systems, isolate variables, and fix root causes, not symptoms
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 shadow-florida hover:shadow-sunset transition-all duration-300 hover:-translate-y-2">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Stubborn by Nature</h3>
              <p className="text-muted-foreground">
                Curious and research-oriented to a fault — I don't stop at "it kind of works." I dig until I understand why it works
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-ocean rounded-2xl p-8 md:p-12 text-white shadow-sunset">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Looking for a team where I can contribute from day one
            </h3>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              I'm looking for a Junior Software Engineer role where I can keep growing,
              ship real features, and build things that actually matter to the people using them.
              If that sounds like a fit, let's talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
