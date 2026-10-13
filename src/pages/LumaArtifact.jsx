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
        <p className="font-semibold">React 19 + TypeScript Frontend</p>
        <p className="text-xs opacity-80 mt-1">Vite · Tailwind v4 · Radix UI · Recharts · Tiptap</p>
      </div>

      <div className="text-muted-foreground text-lg">↕ HTTPS / REST · Bearer JWT</div>

      <div className="w-full max-w-sm bg-gradient-sunset text-white rounded-lg px-4 py-3 text-center">
        <p className="font-semibold">FastAPI Backend</p>
        <p className="text-xs opacity-80 mt-1">
          /auth · /posts · /prompts · /users
        </p>
        <p className="text-xs opacity-70 mt-1">SQLAlchemy ORM · python-jose JWT · bcrypt</p>
      </div>

      <div className="text-muted-foreground text-lg">↕ SQL via SQLAlchemy</div>

      <div className="w-full max-w-sm bg-primary text-white rounded-lg px-4 py-3 text-center">
        <p className="font-semibold">Neon PostgreSQL</p>
        <p className="text-xs opacity-80 mt-1">Users · Journal entries · Moods · Hashtags</p>
      </div>

      <div className="mt-2 w-full max-w-sm flex gap-3">
        <div className="flex-1 border border-border rounded-lg px-3 py-3 text-center">
          <p className="font-semibold text-foreground text-sm">Vercel</p>
          <p className="text-xs text-muted-foreground mt-1">Frontend · Auto-deploy on push to main</p>
        </div>
        <div className="flex-1 border border-border rounded-lg px-3 py-3 text-center">
          <p className="font-semibold text-foreground text-sm">Render</p>
          <p className="text-xs text-muted-foreground mt-1">Backend · Auto-deploy on commit</p>
        </div>
      </div>
    </div>
  </div>
);

const LumaArtifact = () => {
  const navigate = useNavigate();

  const techFrontend = ["React 19", "TypeScript", "Vite 7", "Tailwind CSS v4", "Radix UI", "Tiptap", "Recharts", "React Router v7"];
  const techBackend = ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "python-jose", "bcrypt", "Uvicorn"];
  const techInfra = ["Neon", "Vercel", "Render"];

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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Luma</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            A private journaling app for self-reflection, with mood tracking, analytics, and daily
            prompts. No social features.
          </p>
          {/* CI badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <a href="https://github.com/Sfayson1/Luma/actions/workflows/lint.yml" target="_blank" rel="noopener noreferrer">
              <img src="https://github.com/Sfayson1/Luma/actions/workflows/lint.yml/badge.svg" alt="Lint" />
            </a>
            <a href="https://github.com/Sfayson1/Luma/actions/workflows/test.yml" target="_blank" rel="noopener noreferrer">
              <img src="https://github.com/Sfayson1/Luma/actions/workflows/test.yml/badge.svg" alt="Tests" />
            </a>
            <a href="https://codecov.io/gh/Sfayson1/Luma" target="_blank" rel="noopener noreferrer">
              <img src="https://codecov.io/gh/Sfayson1/Luma/branch/main/graph/badge.svg" alt="Coverage" />
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("https://github.com/Sfayson1/Luma", "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
            <Button
              size="sm"
              onClick={() => window.open("https://www.lumajournal.com/demo", "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Test Coverage", value: "95%" },
            { label: "Deployments", value: "2" },
            { label: "Build", value: "AI-assisted" },
            { label: "Status", value: "Live" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-muted/40 border border-border rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-primary">{value}</p>
              <p className="text-xs text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-12 space-y-3">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Frontend</p>
            <div className="flex flex-wrap gap-2">
              {techFrontend.map((t) => <Badge key={t} variant="secondary">{t}</Badge>)}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Backend</p>
            <div className="flex flex-wrap gap-2">
              {techBackend.map((t) => <Badge key={t} variant="secondary">{t}</Badge>)}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Infrastructure</p>
            <div className="flex flex-wrap gap-2">
              {techInfra.map((t) => <Badge key={t} variant="secondary">{t}</Badge>)}
            </div>
          </div>
        </div>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
          <p className="text-muted-foreground leading-relaxed">
            Most people who want to journal don't have a quiet place to do it. The options are
            either social platforms full of comparison and noise, or generic note apps with no
            structure for reflection. Luma does one thing: gives you a private space to write, track
            your mood over time, and see your patterns. No audience, no followers, no likes.
          </p>
        </section>

        {/* What Done Looked Like */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What "Done" Looked Like</h2>
          <ul className="space-y-2 text-muted-foreground">
            {[
              "Users can create an account and sign in securely with JWT",
              "Users can create, edit, delete, and search journal entries with mood and hashtag support",
              "A new daily reflection prompt rotates automatically",
              "Analytics dashboard shows mood trends, streak history, and writing patterns",
              "All data is private, with no social features",
              "Frontend deployed on Vercel and backend on Render, both auto-deploying from main",
              "Interactive API documentation available at FastAPI's built-in /docs",
              "95% test coverage across unit, integration, and end-to-end tests, with CI on every PR and push to main",
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
            Luma is a decoupled full-stack app. The React + TypeScript frontend talks to a FastAPI
            backend over REST, using JWT bearer tokens for auth. SQLAlchemy handles the database
            layer against Neon PostgreSQL. The frontend auto-deploys to Vercel on push to main, and
            the backend auto-deploys to Render on commit. There's no staging environment yet, so main
            is production. Adding staging is the next infrastructure step.
          </p>
          <ArchDiagram />
          <p className="text-xs text-muted-foreground mt-3">
            Full Mermaid diagrams (system overview, request flow, auth flow, data model) in{" "}
            <a
              href="https://github.com/Sfayson1/Luma/blob/main/docs/architecture.md"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              docs/architecture.md
            </a>
          </p>
        </section>

        {/* Key Tradeoff */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Key Technical Decision</h2>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-2">FastAPI over Express/Node.js</h3>
              <p className="text-muted-foreground leading-relaxed">
                I chose FastAPI over the more familiar Express/Node.js stack. The deciding factor was
                its automatic interactive docs at{" "}
                <code className="text-xs bg-muted px-1 py-0.5 rounded">/docs</code>, which let you
                see the schema and test endpoints in the browser without a separate tool like Postman.
                That made debugging data models much faster. It was also a deliberate way to build
                my Python skills.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Observability */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Observability</h2>
          <p className="text-muted-foreground leading-relaxed">
            The backend logs every request through Uvicorn's access log: method, path, status code,
            and response time. Errors surface through FastAPI's default exception handlers. The
            signals worth watching are 401/403 rates (auth failures), 500 errors, and response time
            on <code className="text-xs bg-muted px-1 py-0.5 rounded">/api/posts/</code>, the main
            data endpoint. Render shows these logs in its dashboard. Structured logging with{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">structlog</code> and a log
            drain for alerting is the next step.
          </p>
        </section>

        {/* What I'd Change */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What I'd Change in V2</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The biggest source of technical debt was data models that weren't planned early. Loose
            definitions caused cascading problems. A bug in one model would show up as a confusing
            error somewhere else, which made troubleshooting slow.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If I rebuilt Luma, I'd map out the data before writing any code. A clear schema with
            relationships and constraints defined up front would have prevented most of those
            issues.
          </p>
        </section>

        {/* Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Security</h2>
          <ul className="space-y-2 text-muted-foreground mb-4">
            {[
              "Passwords are hashed with bcrypt. Plaintext is never stored or logged.",
              "JWT access tokens expire, and every protected route validates them server-side.",
              "Every API route requires a valid Bearer token except /auth/register and /auth/login.",
              "Pydantic validates input on the server, so bad payloads are rejected before they reach the database.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Input schemas (like <code className="text-xs bg-muted px-1 py-0.5 rounded">PostIn</code>) are
            kept separate from output schemas (like{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">PostOut</code>) to control
            exactly what data reaches the client.{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">EmailStr</code> enforces email format at the boundary.
          </p>
        </section>

        {/* Lessons Learned */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Lessons Learned</h2>
          <ul className="space-y-2 text-muted-foreground">
            {[
              "Design the data model before building features. Loose schemas caused bugs that were hard to trace.",
              "FastAPI's /docs speeds up debugging. Test the API directly before wiring up the frontend.",
              "Set up CI from the start. Catching lint and test failures before merge saves hours later.",
              "Separate input and output schemas (PostIn / PostOut) by default for any API that handles user data.",
              "AI can generate working code fast, but you still have to understand it well enough to debug and explain it.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How It Was Built */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">How It Was Built</h2>
          <p className="text-muted-foreground leading-relaxed">
            I built Luma with AI assistance while learning parts of the stack for the first time,
            including FastAPI, SQLAlchemy, Neon, and Render. I directed the product, chose the
            stack, and tested each feature through FastAPI's interactive docs before moving on. I'm
            now working through the codebase in depth so I can explain and extend every part of it.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LumaArtifact;
