import beachImg from "@/assets/beach-astypalea.jpg";
import yachtImg from "@/assets/yacht-astypalea.jpg";
import villageImg from "@/assets/village-astypalea.jpg";
import { Users, Clock, Star } from "lucide-react";

const packages = [
  {
    image: beachImg,
    tag: "Δημοφιλές",
    title: "Ημερήσια Κρουαζιέρα",
    description: "Κουτσομύτη, Κουνούπες, Κόκκινα Βράχια. Μπάνιο σε κρυστάλλινα νερά & snorkeling.",
    price: "45",
    priceNote: "/άτομο",
    details: [
      { icon: Clock, text: "11:00 - 18:00" },
      { icon: Users, text: "Μέχρι 20 άτομα" },
      { icon: Star, text: "4.9 (320+ κριτικές)" },
    ],
  },
  {
    image: yachtImg,
    tag: "Premium",
    title: "Ιδιωτική Κρουαζιέρα Yacht",
    description: "Ενοικίαση ιστιοπλοϊκού ή yacht για ιδιωτική περιήγηση στο Αιγαίο.",
    price: "350",
    priceNote: "/ημέρα",
    details: [
      { icon: Clock, text: "Ευέλικτο πρόγραμμα" },
      { icon: Users, text: "Μέχρι 10 άτομα" },
      { icon: Star, text: "VIP Εμπειρία" },
    ],
  },
  {
    image: villageImg,
    tag: "Ολοκληρωμένο",
    title: "Πακέτο Αστυπάλαια 7 Ημέρες",
    description: "Ξενοδοχείο, εκδρομές, αεροπορικά/ακτοπλοϊκά & ξενάγηση – όλα σε ένα.",
    price: "599",
    priceNote: "/άτομο",
    details: [
      { icon: Clock, text: "7 διανυκτερεύσεις" },
      { icon: Users, text: "2+ άτομα" },
      { icon: Star, text: "All-inclusive" },
    ],
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-14 md:py-24 bg-background">
      <div className="container mx-auto px-5 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <p className="text-accent font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-2 md:mb-3">
            Πακέτα & Τιμές
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Δημοφιλή <span className="text-gradient-ocean">Πακέτα</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Επιλέξτε την εμπειρία που σας ταιριάζει
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.title}
              className={`group bg-card rounded-2xl overflow-hidden shadow-soft transition-all duration-500 hover:shadow-elevated hover:-translate-y-2 ${
                idx === 1 ? "md:-translate-y-4 ring-2 ring-accent/30" : ""
              }`}
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {pkg.tag}
                </span>
              </div>
              <div className="p-5 md:p-7">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                  {pkg.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {pkg.description}
                </p>
                <div className="flex flex-col gap-2 mb-6">
                  {pkg.details.map((d) => (
                    <div key={d.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <d.icon size={15} className="text-primary" />
                      <span>{d.text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-display text-3xl font-bold text-foreground">€{pkg.price}</span>
                    <span className="text-muted-foreground text-sm">{pkg.priceNote}</span>
                  </div>
                  <a
                    href="#contact"
                    className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-soft"
                  >
                    Κράτηση
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
