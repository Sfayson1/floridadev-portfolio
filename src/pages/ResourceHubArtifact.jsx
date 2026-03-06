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
        <p className="text-xs opacity-80 mt-1">XML Layouts · Activities · RecyclerView Adapters</p>
      </div>

      <div className="text-muted-foreground text-lg">↕</div>

      <div className="w-full max-w-sm bg-gradient-sunset text-white rounded-lg px-4 py-3 text-center">
        <p className="font-semibold">Application Logic</p>
        <p className="text-xs opacity-80 mt-1">Kotlin/Java · Search · Filter · Budget Tracking</p>
      </div>

      <div className="text-muted-foreground text-lg">↕</div>

      <div className="w-full max-w-sm bg-primary text-white rounded-lg px-4 py-3 text-center">
        <p className="font-semibold">Data Layer</p>
        <p className="text-xs opacity-80 mt-1">Mock Resource Data · SharedPreferences (user data)</p>
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">ResourceHub</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            An Android app that connects people facing housing insecurity with local community resources — housing, food banks, job centers, and utilities — all in one place.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("https://github.com/Sfayson1/ResourceHub", "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
            <Button
              size="sm"
              onClick={() => window.open("https://raw.githubusercontent.com/Sfayson1/ResourceHub/master/assets/resourcehub.gif", "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Demo
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {["Kotlin", "Java", "Android Studio", "XML"].map((t) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
        </div>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
          <p className="text-muted-foreground leading-relaxed">
            People facing housing insecurity often need multiple types of support at once — shelter,
            food, employment, utilities assistance — but finding those resources means running
            separate searches across different websites, phone books, and referrals. ResourceHub
            consolidates that into a single app: search once by ZIP code, filter by what you need,
            and get the address, phone number, and hours for resources near you. The built-in budget
            tracker adds a second layer of practical support, helping users manage income and
            expenses while navigating a difficult period.
          </p>
        </section>

        {/* What Done Looked Like */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What "Done" Looked Like</h2>
          <ul className="space-y-2 text-muted-foreground">
            {[
              "Users can search for resources by city, ZIP code, or address",
              "Resources are filterable by category: Housing, Food, Jobs, Utilities",
              "Each resource shows address, phone number, and operating hours",
              "Users can save resources to a Favorites list for quick access",
              "Budget tracker lets users log income and expenses and see remaining balance",
              "User profile screen for managing account information",
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
          <h2 className="text-2xl font-bold text-foreground mb-4">Architecture</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            ResourceHub is a native Android app built in Kotlin and Java. The UI is composed of
            Activities and XML layouts, with RecyclerView adapters handling the resource list.
            User preferences and saved favorites are persisted with SharedPreferences. Resource
            data is currently mocked locally — real API integration (Google Places, 211 API) is
            the primary planned next step.
          </p>
          <ArchDiagram />
        </section>

        {/* Key Tradeoff */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Key Technical Decision</h2>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-2">Building Native Android over a Cross-Platform Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Choosing to build natively in Kotlin and Android Studio — rather than a
                cross-platform framework — meant learning a new language, IDE, and platform
                simultaneously within a five-week window. The tradeoff was steep upfront learning
                cost in exchange for working directly with the Android SDK and understanding how
                native apps are structured. The search and filter features proved to be the hardest
                to implement — managing state across Activities and wiring up RecyclerView adapters
                to respond correctly to filter changes required careful attention to Android's
                lifecycle and data flow patterns.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What I'd Change */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What I'd Change in V2</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The most important upgrade is replacing the mock data with a real API. The 211 API
            provides verified community resource data across the US and would make ResourceHub
            genuinely useful in the real world. Google Maps integration would let users see
            resources plotted on a map rather than just listed by address.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            On the architecture side, I'd replace SharedPreferences with Room Database for
            structured local storage, and migrate the UI to Jetpack Compose for a more modern
            Android development approach. Most importantly, I'd spend more time upfront planning
            the data models — the same lesson from building Luma. A clearer schema before writing
            code would have made the search and filter logic cleaner from the start.
          </p>
        </section>

        {/* Constraints */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">How It Was Built</h2>
          <p className="text-muted-foreground leading-relaxed">
            ResourceHub was built solo in five weeks while learning Kotlin and Android Studio for
            the first time. The tight timeline meant making pragmatic choices — mock data over real
            API integration, SharedPreferences over a full database — to ship a working, demonstrable
            app within the deadline. The result is a functional proof of concept with a clear
            roadmap for what a production version would look like.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResourceHubArtifact;
