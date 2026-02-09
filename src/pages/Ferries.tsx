import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import {
  Ship,
  Clock,
  Calendar,
  Users,
  Car,
  Search,
  CreditCard,
  Mail,
  ChevronRight,
  Phone,
  MessageCircle,
  Anchor,
  ArrowRight,
  CheckCircle2,
  Info,
} from "lucide-react";

const ports = [
  "Πειραιάς",
  "Κάλυμνος",
  "Ρόδος",
  "Κως",
  "Νάξος",
  "Πάρος",
];

const portsWithAstypalea = [...ports, "Αστυπάλαια"];

const popularRoutes = [
  {
    from: "Πειραιάς",
    to: "Αστυπάλαια",
    duration: "10-12 ώρες",
    frequency: "3x / εβδομάδα",
    priceFrom: 38,
    companies: ["Blue Star Ferries", "SeaJets"],
    note: "Απευθείας ή μέσω Νάξου & Πάρου",
  },
  {
    from: "Κάλυμνος",
    to: "Αστυπάλαια",
    duration: "2-3 ώρες",
    frequency: "4x / εβδομάδα",
    priceFrom: 18,
    companies: ["Dodekanisos Seaways"],
    note: "Ταχύπλοο & συμβατικό",
  },
  {
    from: "Ρόδος",
    to: "Αστυπάλαια",
    duration: "6-8 ώρες",
    frequency: "2x / εβδομάδα",
    priceFrom: 32,
    companies: ["Blue Star Ferries", "ANEK Lines"],
    note: "Μέσω Κω & Καλύμνου",
  },
  {
    from: "Κως",
    to: "Αστυπάλαια",
    duration: "3-4 ώρες",
    frequency: "3x / εβδομάδα",
    priceFrom: 22,
    companies: ["Dodekanisos Seaways", "Blue Star Ferries"],
    note: "Απευθείας δρομολόγια",
  },
  {
    from: "Νάξος",
    to: "Αστυπάλαια",
    duration: "3.5 ώρες",
    frequency: "2x / εβδομάδα",
    priceFrom: 24,
    companies: ["SeaJets"],
    note: "Καλοκαιρινή περίοδος",
  },
  {
    from: "Πάρος",
    to: "Αστυπάλαια",
    duration: "4-5 ώρες",
    frequency: "2x / εβδομάδα",
    priceFrom: 28,
    companies: ["Blue Star Ferries"],
    note: "Μέσω Νάξου",
  },
];

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Αναζήτηση",
    desc: "Επιλέξτε λιμάνια, ημερομηνίες και αριθμό επιβατών στη φόρμα αναζήτησης.",
  },
  {
    icon: Ship,
    step: "02",
    title: "Επιλογή",
    desc: "Συγκρίνετε δρομολόγια, εταιρείες & τιμές. Επιλέξτε θέση ή καμπίνα.",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Πληρωμή",
    desc: "Ασφαλής πληρωμή με κάρτα, PayPal ή τραπεζική μεταφορά.",
  },
  {
    icon: Mail,
    step: "04",
    title: "E-ticket",
    desc: "Λάβετε το ηλεκτρονικό σας εισιτήριο αμέσως στο email σας.",
  },
];

const companies = [
  {
    name: "Blue Star Ferries",
    desc: "Η μεγαλύτερη ακτοπλοϊκή εταιρεία στην Ελλάδα. Καθημερινά δρομολόγια σε Δωδεκάνησα & Κυκλάδες.",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "SeaJets",
    desc: "Ταχύπλοα στο Αιγαίο. Μικρότερη διάρκεια ταξιδιού, ιδανικά για καλοκαιρινές μετακινήσεις.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Dodekanisos Seaways",
    desc: "Εξειδίκευση στα Δωδεκάνησα. Τακτικά δρομολόγια μεταξύ των νησιών της περιοχής.",
    color: "from-sky-500 to-cyan-600",
  },
  {
    name: "ANEK Lines",
    desc: "Αξιόπιστα δρομολόγια σε Κρήτη, Δωδεκάνησα & Ανατολικό Αιγαίο. Μεγάλα & σύγχρονα πλοία.",
    color: "from-emerald-600 to-teal-700",
  },
];

const Ferries = () => {
  return (
    <div>
      {/* ============ HERO ============ */}
      <PageHero
        title="Ακτοπλοϊκά"
        highlight="Εισιτήρια"
        subtitle="Κρατήσεις ακτοπλοϊκών εισιτηρίων για όλα τα νησιά του Αιγαίου. Σύγκριση τιμών, δρομολογίων & εταιρειών σε ένα μέρος."
        badge="Πλοία & Δρομολόγια"
      />

      {/* ============ BOOKING FORM ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl shadow-elevated p-6 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-ocean flex items-center justify-center">
                  <Ship className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    Αναζήτηση Δρομολογίων
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Βρείτε τα καλύτερα δρομολόγια για το ταξίδι σας
                  </p>
                </div>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
              >
                {/* From */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    <Anchor className="w-4 h-4 inline mr-1.5 text-muted-foreground" />
                    Από
                  </label>
                  <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition">
                    <option value="">Επιλέξτε λιμάνι</option>
                    {ports.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                {/* To */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    <Anchor className="w-4 h-4 inline mr-1.5 text-muted-foreground" />
                    Προς
                  </label>
                  <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition">
                    <option value="">Επιλέξτε λιμάνι</option>
                    {portsWithAstypalea.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                {/* Departure Date */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    <Calendar className="w-4 h-4 inline mr-1.5 text-muted-foreground" />
                    Ημερομηνία Αναχώρησης
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                  />
                </div>

                {/* Return Date */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    <Calendar className="w-4 h-4 inline mr-1.5 text-muted-foreground" />
                    Ημερομηνία Επιστροφής
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                  />
                </div>

                {/* Adults */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    <Users className="w-4 h-4 inline mr-1.5 text-muted-foreground" />
                    Ενήλικες
                  </label>
                  <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                {/* Children */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    <Users className="w-4 h-4 inline mr-1.5 text-muted-foreground" />
                    Παιδιά (5-10)
                  </label>
                  <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition">
                    {[0, 1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                {/* Infants */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    <Users className="w-4 h-4 inline mr-1.5 text-muted-foreground" />
                    Βρέφη (0-4)
                  </label>
                  <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition">
                    {[0, 1, 2, 3].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                {/* Vehicle */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    <Car className="w-4 h-4 inline mr-1.5 text-muted-foreground" />
                    Όχημα
                  </label>
                  <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition">
                    <option value="none">Χωρίς</option>
                    <option value="car">Αυτοκίνητο</option>
                    <option value="moto">Μοτοσυκλέτα</option>
                    <option value="camper">Τροχόσπιτο</option>
                  </select>
                </div>

                {/* Cabin */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    <Ship className="w-4 h-4 inline mr-1.5 text-muted-foreground" />
                    Θέση / Καμπίνα
                  </label>
                  <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition">
                    <option value="deck">Κατάστρωμα</option>
                    <option value="air">Αεροπορική Θέση</option>
                    <option value="cabin2">Καμπίνα 2κλινη</option>
                    <option value="cabin4">Καμπίνα 4κλινη</option>
                  </select>
                </div>

                {/* Submit */}
                <div className="md:col-span-2 lg:col-span-3 mt-2">
                  <button
                    type="submit"
                    className="w-full md:w-auto rounded-full bg-accent px-10 py-4 text-accent-foreground font-semibold text-base shadow-elevated transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Search className="w-5 h-5" />
                    Αναζήτηση Δρομολογίων
                  </button>
                </div>
              </form>

              <div className="mt-5 flex items-start gap-2 text-xs text-muted-foreground">
                <Info className="w-4 h-4 mt-0.5 shrink-0" />
                <p>
                  Οι τιμές ενημερώνονται σε πραγματικό χρόνο από τις ακτοπλοϊκές εταιρείες. Η κράτηση ολοκληρώνεται μέσω ασφαλούς σύνδεσης.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ POPULAR ROUTES ============ */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Δημοφιλή Δρομολόγια
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Ταξιδέψτε στην <span className="text-gradient-ocean">Αστυπάλαια</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Τα πιο δημοφιλή ακτοπλοϊκά δρομολόγια προς και από το νησί
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {popularRoutes.map((route) => (
              <div
                key={`${route.from}-${route.to}`}
                className="group bg-card rounded-2xl p-6 shadow-soft transition-all duration-500 hover:shadow-elevated hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-ocean flex items-center justify-center shrink-0">
                    <Ship className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                    <span>{route.from}</span>
                    <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                    <span>{route.to}</span>
                  </div>
                </div>

                <div className="space-y-2.5 mb-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" /> Διάρκεια
                    </span>
                    <span className="font-medium text-foreground">{route.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" /> Συχνότητα
                    </span>
                    <span className="font-medium text-foreground">{route.frequency}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Anchor className="w-4 h-4" /> Εταιρείες
                    </span>
                    <span className="font-medium text-foreground text-right text-xs">
                      {route.companies.join(", ")}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mb-4">{route.note}</p>

                <div className="flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <span className="text-xs text-muted-foreground">Από</span>
                    <div className="font-display text-2xl font-bold text-foreground">
                      €{route.priceFrom}
                      <span className="text-sm font-normal text-muted-foreground"> /άτομο</span>
                    </div>
                  </div>
                  <button className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-105">
                    Κράτηση
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Πώς Λειτουργεί
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Κράτηση σε <span className="text-gradient-ocean">4 Βήματα</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Εύκολη και γρήγορη διαδικασία κράτησης ακτοπλοϊκών εισιτηρίων
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {steps.map((s, idx) => (
              <div
                key={s.title}
                className="relative bg-card rounded-2xl p-6 md:p-8 shadow-soft text-center transition-all duration-500 hover:shadow-elevated hover:-translate-y-1"
              >
                <span className="absolute top-4 right-4 font-display text-4xl font-bold text-muted-foreground/10">
                  {s.step}
                </span>
                <div className="w-14 h-14 rounded-2xl bg-gradient-ocean mx-auto mb-5 flex items-center justify-center">
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                {idx < steps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-accent z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FERRY COMPANIES ============ */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Συνεργαζόμενες Εταιρείες
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Ακτοπλοϊκές <span className="text-gradient-ocean">Εταιρείες</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Συνεργαζόμαστε με τις μεγαλύτερες ακτοπλοϊκές εταιρείες της Ελλάδας
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {companies.map((company) => (
              <div
                key={company.name}
                className="bg-card rounded-2xl p-6 shadow-soft transition-all duration-500 hover:shadow-elevated hover:-translate-y-1 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${company.color} mx-auto mb-4 flex items-center justify-center`}
                >
                  <Ship className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2">
                  {company.name}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {company.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 bg-card rounded-full px-6 py-3 shadow-soft text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              Εξουσιοδοτημένος αντιπρόσωπος όλων των ακτοπλοϊκών εταιρειών
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 md:px-6">
          <div className="bg-gradient-ocean rounded-3xl p-8 md:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Χρειάζεστε Βοήθεια με την Κράτηση;
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Η ομάδα μας είναι εδώ για να σας βοηθήσει να βρείτε τα καλύτερα δρομολόγια και τιμές. Επικοινωνήστε μαζί μας για εξατομικευμένη εξυπηρέτηση.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto rounded-full bg-accent px-8 py-4 text-accent-foreground font-semibold text-lg shadow-elevated transition-all hover:scale-105"
              >
                Online Κράτηση
              </Link>
              <a
                href="tel:+302243061571"
                className="w-full sm:w-auto rounded-full border-2 border-white/30 px-8 py-4 text-white font-medium text-lg transition-all hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <Phone size={18} /> 22430 61571
              </a>
              <a
                href="https://wa.me/306945431485"
                className="w-full sm:w-auto rounded-full border-2 border-white/30 px-8 py-4 text-white font-medium text-lg transition-all hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ferries;
