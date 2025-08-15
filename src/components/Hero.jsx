import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/florida-hero-bg.jpg";

const Hero = () => {
  const [nameText, setNameText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentPhase, setCurrentPhase] = useState("name");
  const [typingComplete, setTypingComplete] = useState(false);

  const fullName = "Sherika Fayson";
  const fullTitle = "Software Engineer";

useEffect(() => {
  let interval;
  if (currentPhase === "name" && nameText.length < fullName.length) {
    interval = setTimeout(() => {
      setNameText(fullName.slice(0, nameText.length + 1));
    }, 100);
  } else if (currentPhase === "name" && nameText.length === fullName.length) {
    interval = setTimeout(() => {
      setCurrentPhase("title");
    }, 500);
  } else if (
    currentPhase === "title" &&
    titleText.length < fullTitle.length
  ) {
    interval = setTimeout(() => {
      setTitleText(fullTitle.slice(0, titleText.length + 1));
    }, 100);
  } else if (
    currentPhase === "title" &&
    titleText.length === fullTitle.length
  ) {
    interval = setTimeout(() => {
      setTypingComplete(true);
    }, 1000);
  }
  return () => clearTimeout(interval);
}, [nameText, titleText, currentPhase, fullName, fullTitle]);

useEffect(() => {
  if (!typingComplete) {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  } else {
    setShowCursor(false);
  }
}, [typingComplete]);

  const handleContactme = () => {
    const contactSection = document.querySelector("#contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjects = () => {
    const contactSection = document.querySelector("#projects");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <div>
              Hi, I'm{" "}
              <span className="bg-gradient-sunset bg-clip-text text-transparent">
                {nameText}
                {currentPhase === "name" && showCursor && (
                  <span className="animate-pulse">|</span>
                )}
              </span>
            </div>
            <div className="block font-special-elite text-4xl md:text-5xl font-normal tracking-wide">
              {titleText}
              {currentPhase === "title" && showCursor && (
                <span className="animate-pulse">|</span>
              )}
            </div>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            A.A.S. Computer Information Science graduate with Software
            Development concentration. Former USMC avionics technician bringing
            technical expertise and problem-solving skills to innovative
            software solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              variant="hero"
              className="px-8 py-3 text-lg"
              onClick={handleProjects}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="ocean"
              className="px-8 py-3 text-lg"
              onClick={handleContactme}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} className="opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
