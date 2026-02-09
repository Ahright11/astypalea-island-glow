import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import {
  Plane,
  Clock,
  Calendar,
  Users,
  Search,
  ChevronRight,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Info,
  Luggage,
  MapPin,
  Sun,
  Wind,
  CloudSun,
} from "lucide-react";

const originAirports = [
  { code: "ATH", city: "Αθήνα" },
  { code: "SKG", city: "Θεσσαλονίκη" },
  { code: "HER", city: "Ηράκλειο" },
  { code: "RHO", city: "Ρόδος" },
  { code: "KGS", city: "Κως" },
];

const destinationAirports = [
  { code: "JTY", city: "Αστυπάλαια" },
  { code: "RHO", city: "Ρόδος" },
  { code: "KGS", city: "Κως" },
  { code: "JNX", city: "Νάξος" },
  { code: "JMK", city: "Μύκονος" },
];

const mockFlights = [
  {
    airline: "Olympic Air",
    flightNo: "OA 352",
    from: "Αθήνα (ATH)",
    to: "Αστυπάλαια (JTY)",
    departure: "07:15",
    arrival: "08:10",
    duration: "55 λεπτά",
    price: 89,
    stops: "Απευθείας",
    baggage: "23kg",
    availability: "Διαθέσιμο",
  },
  {
    airline: "Sky Express",
    flightNo: "GQ 114",
    from: "Αθήνα (ATH)",
    to: "Αστυπάλαια (JTY)",
    departure: "14:30",
    arrival: "15:20",
    duration: "50 λεπτά",
    price: 75,
    stops: "Απευθείας",
    baggage: "20kg",
    availability: "Τελευταίες θέσεις",
  },
  {
    airline: "Aegean Airlines",
    flightNo: "A3 218",
    from: "Αθήνα (ATH)",
    to: "Αστυπάλαια (JTY)",
    departure: "11:00",
    arrival: "12:40",
    duration: "1ω 40λ",
    price: 112,
    stops: "1 στάση (Νάξος)",
    baggage: "23kg + χειραποσκευή",
    availability: "Διαθέσιμο",
  },
  {
    airline: "Olympic Air",
    flightNo: "OA 358",
    from: "Αθήνα (ATH)",
    to: "Αστυπάλαια (JTY)",
    departure: "18:45",
    arrival: "19:40",
    duration: "55 λεπτά",
    price: 95,
    stops: "Απευθείας",
    baggage: "23kg",
    availability: "Διαθέσιμο",
  },
];

const airlines = [
  {
    name: "Olympic Air",
    desc: "Η ιστορική ελληνική αεροπορική εταιρεία. Τακτικές πτήσεις προς Αστυπάλαια καθ' όλη τη διάρκεια του έτους.",
    routes: "ATH-JTY Καθημερινά",
    color: "from-blue-700 to-blue-900",
  },
  {
    name: "Aegean Airlines",
    desc: "Η μεγαλύτερη αεροπορική εταιρεία της Ελλάδας. Πτήσεις με ανταπόκριση & εποχιακά απευθείας δρομολόγια.",
    routes: "ATH-JTY μέσω Νάξου",
    color: "from-indigo-600 to-blue-700",
  },
  {
    name: "Sky Express",
    desc: "Περιφερειακή αεροπορική με έδρα την Κρήτη. Προσιτές τιμές & μικρά αεροσκάφη ATR.",
    routes: "ATH-JTY / HER-JTY",
    color: "from-green-600 to-emerald-700",
  },
];

const tips = [
  {
    icon: Calendar,
    title: "Κλείστε Νωρίς",
    desc: "Οι πτήσεις προς Αστυπάλαια είναι περιορισμένες, ειδικά τους καλοκαιρινούς μήνες. Κλείστε τουλάχιστον 2-3 μήνες πριν.",
  },
  {
    icon: Luggage,
    title: "Αποσκευές",
    desc: "Ελέγξτε τα όρια αποσκευών. Τα μικρά αεροσκάφη ATR έχουν αυστηρότερους περιορισμούς βάρους.",
  },
  {
    icon: Wind,
    title: "Καιρικές Συνθήκες",
    desc: "Οι πτήσεις ενδέχεται να ακυρωθούν λόγω ισχυρών ανέμων (μελτέμια). Έχετε εναλλακτικό σχέδιο μέσω πλοίου.",
  },
  {
    icon: MapPin,
    title: "Αεροδρόμιο Αστυπάλαιας",
    desc: "Το αεροδρόμιο (JTY) βρίσκεται στα Ανάληψη, 12 χλμ. από τη Χώρα. Προσφέρουμε μεταφορά από/προς.",
  },
  {
    icon: Sun,
    title: "Ιδανική Περίοδος",
    desc: "Ιούνιος-Σεπτέμβριος: υπάρχουν περισσότερα δρομολόγια. Μάιος & Οκτώβριος: χαμηλότερες τιμές.",
  },
  {
    icon: CloudSun,
    title: "Ευελιξία Ημερομηνιών",
    desc: "Αν είστε ευέλικτοι στις ημερομηνίες, μπορείτε να εξοικονομήσετε έως και 40% στο εισιτήριό σας.",
  },
];

const Flights = () => {
  return (
    <div>
      {/* ============ HERO ============ */}
      <PageHero
        title="Αεροπορικά"
        highlight="Εισιτήρια"
        subtitle="Βρείτε τις καλύτερες πτήσεις προς Αστυπάλαια και τα νησιά του Αιγαίου. Σύγκριση τιμών από όλες τις αεροπορικές εταιρείες."
        badge="Πτήσεις & Αεροπορικά"
      />

      {/* ============ FLIGHT SEARCH FORM ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl shadow-elevated p-6 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-ocean flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    Αναζήτηση Πτήσεων
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Βρείτε και κλείστε την ιδανική πτήση σας
                  </p>
                </div>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                {/* Trip Type Radio */}
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="tripType"
                      value="roundtrip"
                      defaultChecked
                      className="w-4 h-4 text-accent accent-accent"
                    />
                    <span className="text-sm font-medium text-foreground">
                      Μετ' επιστροφής
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="tripType"
                      value="oneway"
                      className="w-4 h-4 text-accent accent-accent"
                    />
                    <span className="text-sm font-medium text-foreground">
                      Απλή
                    </span>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {/* From */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">
                      <Plane className="w-4 h-4 inline mr-1.5 text-muted-foreground rotate-[-45deg]" />
                      Από
                    </label>
                    <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition">
                      <option value="">Επιλέξτε αεροδρόμιο</option>
                      {originAirports.map((a) => (
                        <option key={a.code} value={a.code}>
                          {a.city} ({a.code})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* To */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">
                      <Plane className="w-4 h-4 inline mr-1.5 text-muted-foreground rotate-[45deg]" />
                      Προς
                    </label>
                    <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition">
                      <option value="">Επιλέξτε αεροδρόμιο</option>
                      {destinationAirports.map((a) => (
                        <option key={a.code} value={a.code}>
                          {a.city} ({a.code})
                        </option>
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

                  {/* Passengers */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">
                      <Users className="w-4 h-4 inline mr-1.5 text-muted-foreground" />
                      Επιβάτες
                    </label>
                    <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "Επιβάτης" : "Επιβάτες"}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Class */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">
                      <Plane className="w-4 h-4 inline mr-1.5 text-muted-foreground" />
                      Θέση
                    </label>
                    <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition">
                      <option value="economy">Οικονομική</option>
                      <option value="business">Business</option>
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-2">
                  <button
                    type="submit"
                    className="w-full md:w-auto rounded-full bg-accent px-10 py-4 text-accent-foreground font-semibold text-base shadow-elevated transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Search className="w-5 h-5" />
                    Αναζήτηση Πτήσεων
                  </button>
                </div>
              </form>

              <div className="mt-5 flex items-start gap-2 text-xs text-muted-foreground">
                <Info className="w-4 h-4 mt-0.5 shrink-0" />
                <p>
                  Οι τιμές περιλαμβάνουν φόρους & τέλη αεροδρομίου. Ενδέχεται να υπάρξουν επιπλέον χρεώσεις για αποσκευές ή επιλογή θέσης.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SEARCH RESULTS MOCKUP ============ */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Αποτελέσματα Αναζήτησης
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Διαθέσιμες <span className="text-gradient-ocean">Πτήσεις</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Αθήνα (ATH) - Αστυπάλαια (JTY) | Ενδεικτικά δρομολόγια
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {mockFlights.map((flight, idx) => (
              <div
                key={flight.flightNo}
                className={`bg-card rounded-2xl p-5 md:p-6 shadow-soft transition-all duration-500 hover:shadow-elevated ${
                  idx === 1 ? "ring-2 ring-accent/30" : ""
                }`}
              >
                {idx === 1 && (
                  <div className="mb-3">
                    <span className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Καλύτερη Τιμή
                    </span>
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Airline & Flight */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-ocean flex items-center justify-center shrink-0">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-foreground">
                        {flight.airline}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {flight.flightNo}
                      </p>
                    </div>
                  </div>

                  {/* Times */}
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="text-center">
                      <p className="font-display text-xl font-bold text-foreground">
                        {flight.departure}
                      </p>
                      <p className="text-xs text-muted-foreground">ATH</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs text-muted-foreground">
                        {flight.duration}
                      </span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <div className="w-16 md:w-24 h-px bg-border" />
                        <ArrowRight className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {flight.stops}
                      </span>
                    </div>
                    <div className="text-center">
                      <p className="font-display text-xl font-bold text-foreground">
                        {flight.arrival}
                      </p>
                      <p className="text-xs text-muted-foreground">JTY</p>
                    </div>
                  </div>

                  {/* Baggage info */}
                  <div className="hidden lg:block text-center">
                    <p className="text-xs text-muted-foreground">Αποσκευή</p>
                    <p className="text-sm font-medium text-foreground">
                      {flight.baggage}
                    </p>
                  </div>

                  {/* Price & Book */}
                  <div className="flex items-center justify-between md:flex-col md:items-end gap-3">
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground">
                        {flight.availability}
                      </span>
                      <p className="font-display text-2xl font-bold text-foreground">
                        €{flight.price}
                        <span className="text-sm font-normal text-muted-foreground">
                          {" "}/άτομο
                        </span>
                      </p>
                    </div>
                    <button className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-105 shrink-0">
                      Κράτηση
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Οι τιμές είναι ενδεικτικές και ενημερώνονται σε πραγματικό χρόνο. Κάντε αναζήτηση για ακριβείς τιμές.
            </p>
          </div>
        </div>
      </section>

      {/* ============ AIRLINES ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Αεροπορικές Εταιρείες
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Πετάξτε με <span className="text-gradient-ocean">Αξιοπιστία</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Συνεργαζόμαστε με τις κορυφαίες αεροπορικές εταιρείες για πτήσεις προς Αστυπάλαια
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {airlines.map((airline) => (
              <div
                key={airline.name}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-soft transition-all duration-500 hover:shadow-elevated hover:-translate-y-2 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${airline.color} mx-auto mb-5 flex items-center justify-center`}
                >
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {airline.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {airline.desc}
                </p>
                <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 text-xs font-medium text-foreground">
                  <MapPin className="w-3 h-3 text-accent" />
                  {airline.routes}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 bg-card rounded-full px-6 py-3 shadow-soft text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              IATA πιστοποιημένο ταξιδιωτικό γραφείο για αεροπορικά εισιτήρια
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRAVEL TIPS ============ */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Χρήσιμες Πληροφορίες
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Ταξιδιωτικές <span className="text-gradient-ocean">Συμβουλές</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Τι πρέπει να γνωρίζετε πριν πετάξετε προς Αστυπάλαια
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="bg-card rounded-2xl p-6 shadow-soft transition-all duration-500 hover:shadow-elevated hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-ocean flex items-center justify-center mb-4">
                  <tip.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 md:px-6">
          <div className="bg-gradient-ocean rounded-3xl p-8 md:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Κλείστε την Πτήση σας Σήμερα
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Η ομάδα μας θα σας βοηθήσει να βρείτε τις καλύτερες τιμές αεροπορικών εισιτηρίων. Δεν υπάρχει χρέωση εξυπηρέτησης για online κρατήσεις.
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

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 text-white/60 text-xs">
              <span className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-accent" /> Χωρίς κρυφές χρεώσεις
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-accent" /> IATA πιστοποίηση
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-accent" /> Δωρεάν ακύρωση 24ώρες
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flights;
