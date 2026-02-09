import { Shield, Clock, Award } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Αξιοπιστία & Εμπιστοσύνη",
    description:
      "IATA πιστοποίηση, 40+ χρόνια εμπειρίας. Χιλιάδες ικανοποιημένοι πελάτες μας εμπιστεύονται κάθε χρόνο.",
    stat: "40+",
    statLabel: "Χρόνια",
  },
  {
    icon: Clock,
    title: "24/7 Υποστήριξη",
    description:
      "Είμαστε δίπλα σας σε κάθε βήμα του ταξιδιού σας. Τηλέφωνο, email & WhatsApp για άμεση εξυπηρέτηση.",
    stat: "24/7",
    statLabel: "Υποστήριξη",
  },
  {
    icon: Award,
    title: "Τοπική Εμπειρογνωμοσύνη",
    description:
      "Γνωρίζουμε κάθε γωνιά της Αστυπάλαιας. Σας προτείνουμε τα καλύτερα μέρη που μόνο οι ντόπιοι ξέρουν.",
    stat: "4.9★",
    statLabel: "Αξιολόγηση",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-14 md:py-24 bg-muted/50">
      <div className="container mx-auto px-5 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <p className="text-accent font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-2 md:mb-3">
            Γιατί Εμάς
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Η Διαφορά <span className="text-gradient-ocean">Astypalea Tours</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft text-center transition-all duration-500 hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-ocean mx-auto mb-4 md:mb-6 flex items-center justify-center">
                <b.icon className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
              </div>
              <div className="mb-3 md:mb-4">
                <span className="font-display text-3xl md:text-4xl font-bold text-accent">{b.stat}</span>
                <span className="block text-xs md:text-sm text-muted-foreground mt-1">{b.statLabel}</span>
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
