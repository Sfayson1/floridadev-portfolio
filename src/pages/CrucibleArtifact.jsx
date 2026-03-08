import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ArchDiagram = () => (
  <div className="bg-muted/40 rounded-xl p-6 border border-border">
    <div className="flex flex-col items-center gap-4 text-sm font-medium">
      <div className="w-full max-w-sm bg-gradient-ocean text-white rounded-lg px-4 py-3 text-center">
        <p className="font-semibold">Next.js 16 Frontend (App Router)</p>
        <p className="text-xs opacity-80 mt-1">TypeScript · Tailwind CSS · shadcn/ui · Clerk</p>
      </div>

      <div className="text-muted-foreground text-lg">↕ Server Actions / API Routes</div>

      <div className="w-full max-w-sm bg-gradient-sunset text-white rounded-lg px-4 py-3 text-center">
        <p className="font-semibold">Prisma ORM</p>
        <p className="text-xs opacity-80 mt-1">
          Projects · Roles · Applications · Users
        </p>
        <p className="text-xs opacity-70 mt-1">Type-safe queries · Schema migrations</p>
      </div>

      <div className="text-muted-foreground text-lg">↕ SQL</div>

      <div className="w-full max-w-sm bg-primary text-white rounded-lg px-4 py-3 text-center">
        <p className="font-semibold">Neon PostgreSQL</p>
        <p className="text-xs opacity-80 mt-1">Projects · Roles · Applications</p>
      </div>

      <div className="mt-2 w-full max-w-sm flex gap-3">
        <div className="flex-1 border border-border rounded-lg px-3 py-3 text-center">
          <p className="font-semibold text-foreground text-sm">Vercel</p>
          <p className="text-xs text-muted-foreground mt-1">Full-stack · Auto-deploy on push to master</p>
        </div>
        <div className="flex-1 border border-border rounded-lg px-3 py-3 text-center">
          <p className="font-semibold text-foreground text-sm">Clerk</p>
          <p className="text-xs text-muted-foreground mt-1">Auth · Email sign-up · Session management</p>
        </div>
      </div>
    </div>
  </div>
);

const CrucibleArtifact = () => {
  const navigate = useNavigate();

  const techStack = ["Next.js 16", "TypeScript", "Tailwind CSS", "shadcn/ui", "Clerk", "Prisma", "PostgreSQL", "Neon", "Vercel"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-32 pb-20 max-w-3xl">
        {/* Back */}
        <button
          onClick={() => navigate("/#projects")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </button>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Crucible</h1>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            A project collaboration platform for developers who want to build side projects together — find your team, post your idea, and ship something real.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("https://github.com/Sfayson1/crucible", "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
            <Button
              size="sm"
              onClick={() => window.open("https://crucible.sherikafayson.com/demo", "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Stack</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => <Badge key={t} variant="secondary">{t}</Badge>)}
          </div>
        </div>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
          <p className="text-muted-foreground leading-relaxed">
            Most developers have side project ideas they never build — not because they lack the skills,
            but because they lack a team. Existing platforms like GitHub or Discord make it hard to
            discover collaborators around a specific idea. Crucible is purpose-built for this: post a
            project, define the roles you need filled, and let developers who want to contribute find you.
            It's matchmaking for side projects.
          </p>
        </section>

        {/* What Done Looked Like */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What "Done" Looked Like</h2>
          <ul className="space-y-2 text-muted-foreground">
            {[
              "Users can sign up and authenticate via Clerk (email)",
              "Project owners can post a project with a description, tech stack, and open roles",
              "Each role specifies required skills and a description of the contribution needed",
              "Developers can browse open projects and apply to roles with a message",
              "Project owners can accept or reject applicants from a management view",
              "A personal dashboard shows all projects you've posted and all roles you've applied to",
              "Full-stack deployed on Vercel with auto-deploy on push to master",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Architecture</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Crucible is a full-stack Next.js app using the App Router. There is no separate backend
            service — data mutations go through Next.js Server Actions and API routes, and Prisma
            handles all database queries against a Neon PostgreSQL instance. Clerk manages auth end-to-end:
            sign-up, sign-in, session tokens, and middleware-based route protection. The entire app
            deploys to Vercel as a single unit.
          </p>
          <ArchDiagram />
        </section>

        {/* Key Tradeoff */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Key Technical Decision</h2>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-2">Clerk over rolling auth from scratch</h3>
              <p className="text-muted-foreground leading-relaxed">
                For Luma I built JWT auth manually — token generation, hashing, expiry, middleware.
                For Crucible I used Clerk. The tradeoff was deliberate: Crucible's complexity lives in
                the collaboration data model (projects → roles → applications), not in the auth layer.
                Offloading auth to Clerk meant I could design and iterate on the core product faster,
                with email verification, session management, and route protection handled out of the box.
                Knowing how to build auth from scratch made it easier to evaluate when not to.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Data Model */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Data Model</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The schema is built around three core entities and their relationships:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            {[
              "Project — owned by a user (Clerk ID), holds title, description, and tech stack",
              "Role — belongs to a project, has a title, required skills, and open/filled status",
              "Application — joins a role to an applicant (Clerk ID) with a message and status (pending / accepted / rejected)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Designing this schema upfront — with explicit foreign keys and cascade rules — was a direct
            lesson carried over from Luma, where loose data models caused cascading bugs late in the build.
          </p>
        </section>

        {/* How It Was Built */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">How It Was Built</h2>
          <p className="text-muted-foreground leading-relaxed">
            Crucible was built solo from scratch. Next.js 16, Prisma, and Clerk were worked with
            hands-on for the first time during this project. The approach was the same as Luma:
            build one vertical slice end-to-end (post a project → add a role → apply → accept),
            validate it works, then expand. The App Router's co-location of server and client
            components required a clearer mental model of the rendering boundary than previous
            React work — figuring out what runs on the server vs. the client was the steepest
            part of the learning curve.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CrucibleArtifact;
