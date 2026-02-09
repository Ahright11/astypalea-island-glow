import { Star } from "lucide-react";
import heroImage from "@/assets/hero-astypalea.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Astypalea island aerial view at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="text-accent font-body text-sm md:text-base uppercase tracking-[0.3em] mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Καλώς ήρθατε στην Αστυπάλαια
        </p>
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Island Paradise
          <span className="block text-accent">Awaits</span>
        </h1>
        <p
          className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Ανακαλύψτε την κρυφή ομορφιά των Δωδεκανήσων. Κρουαζιέρες, αεροπορικά,
          ξενοδοχεία & ολοκληρωμένα πακέτα διακοπών.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#packages"
            className="rounded-full bg-accent px-8 py-4 text-accent-foreground font-semibold text-lg shadow-elevated transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_-10px_hsla(24,95%,55%,0.4)]"
          >
            Σχεδιάστε τη Διαφυγή σας
          </a>
          <a
            href="#services"
            className="rounded-full border-2 border-primary-foreground/30 px-8 py-4 text-primary-foreground font-medium text-lg transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/60"
          >
            Οι Υπηρεσίες μας
          </a>
        </div>

        {/* Trust signals */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/70 text-sm font-body opacity-0 animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          <span>Από το 1985</span>
          <span className="hidden sm:inline text-primary-foreground/30">•</span>
          <span>IATA Certified</span>
          <span className="hidden sm:inline text-primary-foreground/30">•</span>
          <span className="flex items-center gap-1">
            <Star size={14} className="text-gold fill-gold" />
            4.9 Αξιολογήσεις
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-primary-foreground/60 animate-fade-up" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
