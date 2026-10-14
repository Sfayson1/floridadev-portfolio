import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const systemLayers = [
  {
    label: "Client",
    title: "Next.js 16 + React (App Router)",
    detail: "TypeScript · Tailwind · shadcn/ui",
    color: "bg-gradient-ocean",
    arrow: "↓ Server Actions / API Routes",
  },
  {
    label: "Server Layer",
    title: "Server Actions + API Routes",
    detail: "Authentication via Clerk",
    color: "bg-gradient-sunset",
    arrow: "↓",
  },
  {
    label: "Data Layer",
    title: "Prisma ORM",
    detail: "Type-safe queries · Schema migrations",
    color: "bg-gradient-hero",
    arrow: "↓",
  },
  {
    label: "Database",
    title: "Neon PostgreSQL",
    detail: "Projects · Roles · Applications · Users",
    color: "bg-primary",
    arrow: "↓",
  },
  {
    label: "Deployment",
    title: "Vercel",
    detail: "Full-stack auto deploy on push",
    color: "bg-foreground",
    arrow: null,
  },
];

const ArchDiagram = () => (
  <div className="bg-muted/40 rounded-xl p-6 border border-border">
    <div className="flex flex-col items-center gap-2 text-sm font-medium">
      {systemLayers.map((layer) => (
        <div key={layer.label} className="w-full max-w-sm flex flex-col items-center gap-2">
          <div className={`w-full ${layer.color} text-white rounded-lg px-4 py-3 text-center`}>
            <p className="text-xs font-semibold uppercase tracking-wider opacity-70 mb-0.5">{layer.label}</p>
            <p className="font-semibold">{layer.title}</p>
            <p className="text-xs opacity-80 mt-0.5">{layer.detail}</p>
          </div>
          {layer.arrow && (
            <p className="text-muted-foreground text-base">{layer.arrow}</p>
          )}
        </div>
      ))}
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
          <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">
            Built with AI assistance
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Crucible</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            A project collaboration platform for developers who want to build side projects together. Post your idea, find your team, and ship something real.
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
            Most developers have side project ideas they never build. Not because they lack the
            skills, but because they lack a team. GitHub and Discord make it hard to find
            collaborators around a specific idea. Crucible is built for that: post a project, list
            the roles you need, and let developers who want to contribute find you. It's
            matchmaking for side projects.
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
            Crucible is a full-stack Next.js app using the App Router, deployed as one unit on
            Vercel. There's no separate backend service. Server logic runs through Next.js Server
            Actions and API routes. Prisma handles type-safe database access to Neon PostgreSQL, and
            Clerk handles authentication and sessions. Frontend, server logic, and database access
            all live in one codebase, with clear boundaries between them.
          </p>
          <ArchDiagram />
        </section>

        {/* Why This Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why This Architecture</h2>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                Crucible is one full-stack app on purpose, not a set of separate services. Server
                Actions keep frontend and backend logic in the same codebase while data changes still
                run securely on the server. At this size, that means less infrastructure and simpler
                deploys, with Prisma and PostgreSQL keeping the data boundaries clear.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Tradeoff */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Key Technical Decision</h2>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-2">Clerk instead of custom auth</h3>
              <p className="text-muted-foreground leading-relaxed">
                Luma uses custom JWT auth. For Crucible I chose Clerk instead. The complexity in
                Crucible lives in the collaboration data model (projects → roles → applications), not
                in auth. Handing auth to Clerk meant more time on the core product, with email
                verification, sessions, and route protection handled out of the box.
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
              "Project: owned by a user (Clerk ID), with a title, description, and tech stack",
              "Role: belongs to a project, with a title, required skills, and open/filled status",
              "Application: links a role to an applicant (Clerk ID), with a message and status (pending / accepted / rejected)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            The schema was designed up front, with explicit foreign keys and cascade rules. That was
            a lesson from Luma, where loose data models caused hard-to-trace bugs late in the build.
          </p>
        </section>

        {/* How It Was Built */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">How It Was Built</h2>
          <p className="text-muted-foreground leading-relaxed">
            I built Crucible with AI assistance while using Next.js 16, Prisma, and Clerk for the
            first time. I directed the product and built it one vertical slice at a time (post a
            project → add a role → apply → accept), testing each slice before expanding. The hardest
            concept was the App Router's split between server and client components: knowing what
            runs where. I'm working through the codebase in depth so I can explain and extend every
            part of it.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CrucibleArtifact;
