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
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Luma</h1>
            <Badge className="bg-gradient-sunset text-white border-0">Featured</Badge>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            A private journaling app for mindful self-reflection — mood tracking, analytics, daily prompts, and no social noise.
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
            Most people who want to journal don't have a dedicated, distraction-free place to do it.
            Existing options are either buried inside social platforms full of comparison and noise,
            or generic note-taking apps with no structure for self-reflection. Luma is built for one
            thing: a private, calm space to write, track your mood over time, and gain insight into
            your emotional patterns — with no audience, no followers, and no likes.
          </p>
        </section>

        {/* What Done Looked Like */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What "Done" Looked Like</h2>
          <ul className="space-y-2 text-muted-foreground">
            {[
              "Users can create an account and authenticate securely via JWT",
              "Users can create, edit, delete, and search journal entries with mood and hashtag support",
              "A new daily reflection prompt rotates automatically — no manual setup",
              "Analytics dashboard shows mood trends, streak history, and writing patterns",
              "All data is private — no social features of any kind",
              "Frontend deployed on Vercel, backend on Render, with auto-deploy on push to main",
              "Interactive API documentation available via FastAPI's built-in /docs",
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
            Luma is a decoupled full-stack app. The React + TypeScript frontend communicates with a
            FastAPI backend over REST using JWT bearer tokens for authentication. SQLAlchemy manages
            the database layer against a Neon PostgreSQL instance. The frontend auto-deploys to
            Vercel on push to main; the backend auto-deploys to Render on commit.
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
                I chose FastAPI for the backend instead of the more familiar Express/Node.js stack.
                The deciding factor was FastAPI's automatic interactive documentation — it generates
                a live, testable API explorer at <code className="text-xs bg-muted px-1 py-0.5 rounded">/docs</code> out
                of the box. While building and debugging data models, being able to visualize the
                schema and test endpoints directly in the browser — without a separate tool like
                Postman — made the development loop significantly faster. It was also an intentional
                choice to deepen my Python skills alongside the project.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Observability */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Observability</h2>
          <p className="text-muted-foreground leading-relaxed">
            The backend logs all requests via Uvicorn's access log — method, path, status code, and
            response time. Errors surface through FastAPI's default exception handlers. In production,
            the key signals to watch are HTTP 401/403 rates (auth failures), 500 error frequency, and{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">/api/posts/</code> response
            latency as the primary data-path endpoint. Render exposes these logs in the dashboard.
            Adding structured logging with <code className="text-xs bg-muted px-1 py-0.5 rounded">structlog</code> and
            a log drain to Datadog or Logtail is the identified next step for alerting.
          </p>
        </section>

        {/* What Went Wrong / V2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What I'd Change in V2</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The biggest technical debt in Luma came from poorly planned data models early in the build.
            Loose model definitions caused cascading issues across the codebase — a bug in one model
            surfaced as a confusing error somewhere else entirely, which made troubleshooting harder
            than it needed to be.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If I rebuilt Luma today, I'd start by mapping out exactly what data the app needs before
            writing a single line of code. A clear schema designed upfront — with relationships and
            constraints defined explicitly — would have prevented most of those downstream issues and
            made the codebase easier to reason about from day one.
          </p>
        </section>

        {/* How It Was Built */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">How It Was Built</h2>
          <p className="text-muted-foreground leading-relaxed">
            Luma was a solo project built while actively learning parts of the stack. FastAPI,
            SQLAlchemy, Neon, and Render were all technologies worked with hands-on for the first
            time during this build. The approach was incremental: build one feature end-to-end,
            validate it with FastAPI's built-in docs, then move forward. Every bug became a learning
            checkpoint rather than a blocker.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LumaArtifact;
