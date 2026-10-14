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
        <p className="font-semibold">Android UI Layer</p>
        <p className="text-xs opacity-80 mt-1">
          XML Layouts · Activities · RecyclerView Adapters
        </p>
      </div>

      <div className="text-muted-foreground text-lg">↕</div>

      <div className="w-full max-w-sm bg-gradient-sunset text-white rounded-lg px-4 py-3 text-center">
        <p className="font-semibold">Application Logic</p>
        <p className="text-xs opacity-80 mt-1">
          Kotlin · Search · Filter · Budget Tracking
        </p>
      </div>

      <div className="text-muted-foreground text-lg">↕</div>

      <div className="w-full max-w-sm bg-primary text-white rounded-lg px-4 py-3 text-center">
        <p className="font-semibold">Data Layer</p>
        <p className="text-xs opacity-80 mt-1">
          Sample Resource Data · SharedPreferences (user data)
        </p>
      </div>
    </div>
  </div>
);

const ResourceHubArtifact = () => {
  const navigate = useNavigate();

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
            Course Project
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            ResourceHub
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            An Android prototype for finding community resources like housing,
            food banks, job centers, and utilities in one place. It searches a
            sample set of resources by ZIP code and includes a budget tracker.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                window.open("https://github.com/Sfayson1/ResourceHub", "_blank")
              }
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
            <Button
              size="sm"
              onClick={() =>
                window.open(
                  "https://raw.githubusercontent.com/Sfayson1/ResourceHub/master/assets/resourcehub.gif",
                  "_blank",
                )
              }
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {["Kotlin", "Android Studio", "XML"].map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Timeline", value: "5 wks" },
            { label: "Platform", value: "Android" },
            { label: "Developer", value: "Solo" },
            { label: "Platform to me", value: "New" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="bg-muted/40 border border-border rounded-xl p-4 text-center"
            >
              <p className="text-2xl font-bold text-primary">{value}</p>
              <p className="text-xs text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            The Problem
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            People facing housing insecurity often need several kinds of help at
            once: shelter, food, work, and utility assistance. Finding them
            usually means separate searches across websites, phone books, and
            referrals. ResourceHub puts that in one app. You search once by ZIP
            code, filter by what you need, and see the address, phone number,
            and hours for each resource. The budget tracker adds a simple way to
            log income and expenses during a hard stretch.
          </p>
        </section>

        {/* What Done Looked Like */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            What "Done" Looked Like
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            {[
              "Users can search a sample set of resources by city, ZIP code, or address",
              "Resources are filterable by category: Housing, Food, Jobs, Utilities",
              "Each resource shows address, phone number, and operating hours",
              "Users can save resources to a Favorites list for quick access",
              "Budget tracker lets users log income and expenses and see remaining balance",
              "User profile screen (stored locally)",
              "App runs on Android with a working demo recorded and published",
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
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Architecture
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            ResourceHub is a native Android app. The UI uses Activities and XML
            layouts, with RecyclerView adapters for the resource list. Favorites
            and user preferences are saved with SharedPreferences. Resource data
            is hardcoded sample data, which let me build and test the full UI
            inside a five-week timeline.
          </p>
          <ArchDiagram />
        </section>

        {/* Key Tradeoff */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Key Technical Decision
          </h2>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Building Native Android Instead of Cross-Platform
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Building natively meant learning a new language, IDE, and
                platform at the same time, in five weeks. The cost was a steep
                start. The payoff was working directly with the Android SDK and
                understanding how native apps are put together. Search and
                filtering were the hardest parts. Keeping state in sync across
                Activities and getting RecyclerView adapters to update correctly
                on filter changes forced me to really learn Android's lifecycle.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Limitations and Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Limitations and Next Steps
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            ResourceHub runs on hardcoded sample data, so it doesn't show real
            resources yet. The biggest upgrade would be connecting a real data
            source. The 211 API covers verified community resources across the
            US, and Google Maps would let users see resources on a map instead
            of a list.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            On the code side, I'd move from SharedPreferences to Room for
            structured storage and try Jetpack Compose for the UI. I'd also plan
            the data models before writing code. A clearer schema up front would
            have made search and filtering cleaner from the start.
          </p>
        </section>

        {/* Lessons Learned */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Lessons Learned
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            {[
              "You can learn a new platform and a new language at the same time, but your first pass won't be clean.",
              "Sample data is a fine starting point. It let me build the whole UI before picking a data provider.",
              "Plan state management early on Android. RecyclerView filtering exposed that fast.",
              "A short deadline forces you to choose what matters and cut the rest on purpose.",
              "The fundamentals transfer. Stepping outside my usual stack showed me that.",
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
          <h2 className="text-2xl font-bold text-foreground mb-4">
            How It Was Built
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I built ResourceHub solo as a course project in five weeks, while
            learning Kotlin and Android Studio for the first time. To ship on
            time, I chose sample data over a live API and SharedPreferences over
            a full database. The result is a working prototype with a clear path
            to a production version.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResourceHubArtifact;
