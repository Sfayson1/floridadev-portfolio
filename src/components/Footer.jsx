import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="font-bold text-2xl mb-6">
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Florida
            </span>
            <span className="text-primary">Dev</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/Sfayson1/"
              className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
            >
              <Github className="w-5 h-5 text-background group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/sherika-fayson/"
              className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-background group-hover:text-white transition-colors" />
            </a>
            <a
              href="mailto:sherika.fayson@proton.me"
              className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
            >
              <Mail className="w-5 h-5 text-background group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Quote */}
          <p className="text-lg text-background/80 mb-6 italic">
            "Building the future, one line of code at a time, with Florida sunshine in every project."
          </p>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-6">
            <p className="text-background/60 flex items-center justify-center">
              © 2024 Florida Developer Portfolio. Made with
              <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" />
              in the Sunshine State
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
