import { Ship, Plane, Hotel, Package, Sailboat, Heart, MapPin, Compass } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Ακτοπλοϊκά",
    description: "Εισιτήρια πλοίων για όλα τα νησιά του Αιγαίου & Δωδεκάνησα",
  },
  {
    icon: Plane,
    title: "Αεροπορικά",
    description: "Πτήσεις εσωτερικού & εξωτερικού σε ανταγωνιστικές τιμές",
  },
  {
    icon: Hotel,
    title: "Ξενοδοχεία",
    description: "Κρατήσεις σε ξενοδοχεία σε όλη την Ελλάδα & τον κόσμο",
  },
  {
    icon: Package,
    title: "Πακέτα Διακοπών",
    description: "Ολοκληρωμένα πακέτα για αξέχαστες διακοπές",
  },
  {
    icon: Sailboat,
    title: "Κρουαζιέρες & Σκάφη",
    description: "Ενοικίαση σκαφών, ιστιοπλοϊκών & ημερήσιες κρουαζιέρες",
  },
  {
    icon: Heart,
    title: "Γάμοι & Εκδηλώσεις",
    description: "Ονειρεμένοι γάμοι στην Αστυπάλαια, ρομαντικοί & αξέχαστοι",
  },
  {
    icon: MapPin,
    title: "Ημερήσιες Εκδρομές",
    description: "Εκδρομές σε Κουτσομύτη, Κουνούπες, Κόκκινα Βράχια & άλλα",
  },
  {
    icon: Compass,
    title: "Εξερεύνηση Αιγαίου",
    description: "Ταξίδια στα πιο απρόσιτα & εντυπωσιακά σημεία του Αιγαίου",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Οι Υπηρεσίες μας
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ό,τι Χρειάζεστε για το <span className="text-gradient-ocean">Ταξίδι σας</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Πλήρεις ταξιδιωτικές υπηρεσίες από το 1985 με αξιοπιστία και εμπειρία
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-7 shadow-soft transition-all duration-500 hover:shadow-elevated hover:-translate-y-2 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-ocean opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 transition-colors duration-500 group-hover:bg-primary-foreground/20">
                  <service.icon className="w-7 h-7 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 transition-colors duration-500 group-hover:text-primary-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-500 group-hover:text-primary-foreground/80">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
