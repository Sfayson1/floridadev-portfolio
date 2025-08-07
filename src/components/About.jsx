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
            A.A.S. Computer Information Science graduate from ECPI University with Software Development concentration.
            Former USMC aviation avionics technician bringing military precision, technical troubleshooting
            expertise, and teamwork skills to software development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-8 shadow-florida hover:shadow-sunset transition-all duration-300 hover:-translate-y-2">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Full-Stack Development</h3>
              <p className="text-muted-foreground">
                A.A.S. in Computer Information Science with hands-on experience in React, Python, SQL, and cloud solutions
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 shadow-florida hover:shadow-sunset transition-all duration-300 hover:-translate-y-2">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                <Palmtree className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Military Background</h3>
              <p className="text-muted-foreground">
                Former USMC aviation avionics technician with expertise in technical troubleshooting and problem-solving
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 shadow-florida hover:shadow-sunset transition-all duration-300 hover:-translate-y-2">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Experience</h3>
              <p className="text-muted-foreground">
                Software Engineer and Full Stack Developer with real-world experience in Agile environments
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-ocean rounded-2xl p-8 md:p-12 text-white shadow-sunset">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to bring your ideas to life
            </h3>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              I combine technical expertise with creative problem-solving to build
              applications that are not only functional but also delightful to use.
              Let's create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
