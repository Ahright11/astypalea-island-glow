import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import {
  Anchor,
  Ship,
  Users,
  Ruler,
  Bed,
  Euro,
  Fuel,
  Navigation,
  Waves,
  Wind,
  Sun,
  MapPin,
  CalendarDays,
  Send,
  ChevronRight,
  Check,
  Star,
  Compass,
  UtensilsCrossed,
  Glasses,
  LifeBuoy,
  Clock,
} from "lucide-react";

import yachtImg from "@/assets/yacht-astypalea.jpg";

interface Boat {
  id: number;
  name: string;
  type: string;
  length: string;
  guests: number;
  cabins: number | null;
  engine: string;
  pricePerDay: string;
  priceSkippered?: string;
  gradient: string;
  features: string[];
}

const fleet: Boat[] = [
  {
    id: 1,
    name: "Oceanis 45",
    type: "Ιστιοπλοϊκό",
    length: "14μ",
    guests: 10,
    cabins: 3,
    engine: "Yanmar 57HP",
    pricePerDay: "€350/ημέρα (bareboat)",
    priceSkippered: "€500/ημέρα (με κυβερνήτη)",
    gradient: "from-blue-600 via-sky-500 to-cyan-400",
    features: [
      "Πλήρες σύστημα πλοήγησης GPS",
      "Αυτόματος πιλότος",
      "Bimini top & σπρέι hood",
      "Ψυγείο & κουζίνα",
      "Εξωτερικό ντους",
      "Σετ snorkeling",
    ],
  },
  {
    id: 2,
    name: "Lagoon 42",
    type: "Καταμαράν",
    length: "13μ",
    guests: 12,
    cabins: 4,
    engine: "2x Yanmar 57HP",
    pricePerDay: "€450/ημέρα",
    gradient: "from-teal-500 via-emerald-500 to-green-400",
    features: [
      "Ευρύχωρο flybridge",
      "4 διπλές καμπίνες με μπάνιο",
      "Τραμπολίνο πλώρης",
      "Πλήρης κουζίνα",
      "Σύστημα ψυχαγωγίας",
      "SUP & kayak",
    ],
  },
  {
    id: 3,
    name: "Azimut 55",
    type: "Motor Yacht",
    length: "17μ",
    guests: 8,
    cabins: 3,
    engine: "2x MAN 730HP",
    pricePerDay: "€800/ημέρα",
    gradient: "from-slate-700 via-gray-600 to-zinc-500",
    features: [
      "Πολυτελές σαλόνι",
      "Master cabin με jacuzzi",
      "Πλατφόρμα κολύμβησης",
      "Πλήρες bar",
      "Σύστημα κλιματισμού",
      "Jet ski (προαιρετικά)",
    ],
  },
  {
    id: 4,
    name: "Traditional Caique",
    type: "Παραδοσιακή Καΐκι",
    length: "12μ",
    guests: 15,
    cabins: null,
    engine: "Yanmar 120HP",
    pricePerDay: "€200/ημέρα",
    gradient: "from-amber-600 via-orange-500 to-yellow-400",
    features: [
      "Αυθεντικό ξύλινο σκάφος",
      "Σκίαστρο καταστρώματος",
      "Ψησταριά στο σκάφος",
      "Μουσικό σύστημα",
      "Εξοπλισμός ψαρέματος",
      "Σετ snorkeling",
    ],
  },
  {
    id: 5,
    name: "Speedboat 25",
    type: "Ταχύπλοο",
    length: "7.5μ",
    guests: 6,
    cabins: null,
    engine: "Mercury 250HP",
    pricePerDay: "€150/ημέρα",
    gradient: "from-red-500 via-rose-500 to-pink-400",
    features: [
      "Μέγιστη ταχύτητα 40 κόμβοι",
      "Bimini top",
      "Ψυγείο",
      "Μουσικό σύστημα Bluetooth",
      "Σκάλα κολύμβησης",
      "Εύκολο στη χρήση",
    ],
  },
];

const charterTypes = [
  {
    title: "Ημερήσια Ενοικίαση",
    description:
      "Εξερευνήστε τις παραλίες και τους κόλπους της Αστυπάλαιας σε μία ημέρα. Ιδανική για οικογένειες και ομάδες φίλων.",
    icon: <Sun className="w-7 h-7" />,
    highlight: "Από €150",
  },
  {
    title: "Εβδομαδιαία Ενοικίαση",
    description:
      "Ζήστε την απόλυτη ναυτική εμπειρία με εβδομαδιαία κρουαζιέρα στα Δωδεκάνησα. Επισκεφτείτε πολλά νησιά.",
    icon: <CalendarDays className="w-7 h-7" />,
    highlight: "Έκπτωση 15%",
  },
  {
    title: "Bareboat Charter",
    description:
      "Για έμπειρους ναυτικούς με δίπλωμα. Πλήρης ελευθερία στον προγραμματισμό της διαδρομής σας.",
    icon: <Compass className="w-7 h-7" />,
    highlight: "Με δίπλωμα",
  },
  {
    title: "Skippered Charter",
    description:
      "Χαλαρώστε ενώ ο έμπειρος κυβερνήτης μας φροντίζει τα πάντα. Γνωρίζει κάθε κρυφή γωνιά του νησιού.",
    icon: <Navigation className="w-7 h-7" />,
    highlight: "Συνιστάται",
  },
];

const includedServices = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Κυβερνήτης",
    description: "Έμπειρος κυβερνήτης με γνώση της περιοχής (skippered charter)",
  },
  {
    icon: <Fuel className="w-5 h-5" />,
    title: "Καύσιμα",
    description: "Τα καύσιμα περιλαμβάνονται στην τιμή ημερήσιας ενοικίασης",
  },
  {
    icon: <Glasses className="w-5 h-5" />,
    title: "Εξοπλισμός Snorkeling",
    description: "Μάσκες, αναπνευστήρες και πτερύγια για όλους τους επιβάτες",
  },
  {
    icon: <UtensilsCrossed className="w-5 h-5" />,
    title: "Catering (Προαιρετικά)",
    description: "Παραδοσιακό ελληνικό μπουφέ ή πολυτελές δείπνο στο σκάφος",
  },
  {
    icon: <LifeBuoy className="w-5 h-5" />,
    title: "Εξοπλισμός Ασφαλείας",
    description: "Πλήρης εξοπλισμός ασφαλείας και σωσίβια για κάθε επιβάτη",
  },
  {
    icon: <Wind className="w-5 h-5" />,
    title: "Δωρεάν Ακυρώσεις",
    description: "Δωρεάν ακύρωση έως 48 ώρες πριν λόγω κακοκαιρίας",
  },
];

const routes = [
  {
    name: "Κουτσομύτη - Κουνούπες",
    duration: "Ολοήμερη",
    description:
      "Η κλασική διαδρομή. Τιρκουάζ νερά, αμμώδεις παραλίες και κολύμπι σε ακατοίκητα νησάκια.",
    stops: ["Μαλτεζάνα", "Κουτσομύτη", "Κουνούπες", "Βάτσες"],
  },
  {
    name: "Γύρος Αστυπάλαιας",
    duration: "Ολοήμερη",
    description:
      "Πλήρης περίπλους του νησιού με στάσεις σε κρυφές παραλίες και θαλάσσιες σπηλιές.",
    stops: ["Λιβάδι", "Κόκκινα Βράχια", "Πλάκες", "Άγιος Ιωάννης"],
  },
  {
    name: "Δωδεκάνησα Explorer",
    duration: "3-7 ημέρες",
    description:
      "Πολυήμερη κρουαζιέρα στα γειτονικά νησιά. Αμοργός, Κάλυμνος, Κως και άλλα.",
    stops: ["Αστυπάλαια", "Αμοργός", "Κάλυμνος", "Κως"],
  },
];

const Yachts = () => {
  const [formData, setFormData] = useState({
    boat: "",
    startDate: "",
    endDate: "",
    guests: "4",
    charterType: "",
    requests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Yacht inquiry submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <PageHero
        title="Ενοικίαση"
        highlight="Σκαφών & Yacht"
        subtitle="Ανακαλύψτε την Αστυπάλαια από τη θάλασσα. Ιστιοπλοϊκά, καταμαράν, motor yachts και παραδοσιακά σκάφη για κάθε γούστο και προϋπολογισμό."
      />

      {/* Fleet Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ο Στόλος μας
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Επιλέξτε το ιδανικό σκάφος για την περιπέτειά σας. Όλα τα σκάφη
              μας είναι άριστα συντηρημένα και πλήρως εξοπλισμένα.
            </p>
          </div>

          <div className="space-y-10">
            {fleet.map((boat, index) => (
              <div
                key={boat.id}
                className={`bg-card rounded-2xl shadow-card overflow-hidden flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } hover:shadow-soft transition-all duration-300`}
              >
                {/* Image / Gradient */}
                <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${boat.gradient} flex items-center justify-center min-h-[320px]`}
                  >
                    <div className="text-center text-white/80">
                      <Ship className="w-16 h-16 mx-auto mb-3 opacity-40" />
                      <span className="font-display text-2xl font-bold opacity-60">
                        {boat.name}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-foreground font-bold px-4 py-2 rounded-full text-sm shadow-soft">
                    {boat.type}
                  </div>
                </div>

                {/* Details */}
                <div className="lg:w-3/5 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        {boat.name}
                      </h3>
                      <p className="text-accent font-semibold">{boat.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-accent font-display text-xl font-bold">
                        {boat.pricePerDay}
                      </p>
                      {boat.priceSkippered && (
                        <p className="text-muted-foreground text-sm">
                          {boat.priceSkippered}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    <div className="bg-muted/50 rounded-xl p-3 text-center">
                      <Ruler className="w-5 h-5 mx-auto mb-1 text-accent" />
                      <p className="text-xs text-muted-foreground">Μήκος</p>
                      <p className="font-bold text-foreground text-sm">
                        {boat.length}
                      </p>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-3 text-center">
                      <Users className="w-5 h-5 mx-auto mb-1 text-accent" />
                      <p className="text-xs text-muted-foreground">Επιβάτες</p>
                      <p className="font-bold text-foreground text-sm">
                        {boat.guests}
                      </p>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-3 text-center">
                      <Bed className="w-5 h-5 mx-auto mb-1 text-accent" />
                      <p className="text-xs text-muted-foreground">Καμπίνες</p>
                      <p className="font-bold text-foreground text-sm">
                        {boat.cabins ?? "---"}
                      </p>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-3 text-center">
                      <Fuel className="w-5 h-5 mx-auto mb-1 text-accent" />
                      <p className="text-xs text-muted-foreground">Μηχανή</p>
                      <p className="font-bold text-foreground text-sm">
                        {boat.engine}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {boat.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-accent shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-3 rounded-xl transition-colors duration-200 flex items-center gap-2 shadow-soft">
                    <Send className="w-4 h-4" />
                    Ζητήστε Προσφορά
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charter Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Τύποι Ενοικίασης
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Επιλέξτε τον τύπο ενοικίασης που ταιριάζει στις ανάγκες σας.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {charterTypes.map((charter) => (
              <div
                key={charter.title}
                className="bg-card rounded-2xl shadow-card p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-accent">
                  {charter.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {charter.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {charter.description}
                </p>
                <span className="inline-block bg-accent/10 text-accent font-bold px-4 py-1.5 rounded-full text-sm">
                  {charter.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Τι Περιλαμβάνεται
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Όλες οι ενοικιάσεις περιλαμβάνουν βασικές υπηρεσίες για μια
              ξέγνοιαστη εμπειρία.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedServices.map((service) => (
              <div
                key={service.title}
                className="flex items-start gap-4 bg-card rounded-2xl shadow-card p-6 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Route Suggestions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Προτεινόμενες Διαδρομές
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Δημοφιλείς ναυτικές διαδρομές γύρω από την Αστυπάλαια και τα
              Δωδεκάνησα.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {routes.map((route) => (
              <div
                key={route.name}
                className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header gradient */}
                <div className="bg-gradient-ocean p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Compass className="w-6 h-6 opacity-80" />
                    <h3 className="font-display text-xl font-bold">
                      {route.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{route.duration}</span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {route.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs font-bold text-foreground uppercase tracking-wide">
                      Στάσεις
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {route.stops.map((stop, idx) => (
                        <span
                          key={stop}
                          className="flex items-center gap-1 bg-muted/50 text-muted-foreground px-3 py-1 rounded-full text-xs"
                        >
                          <MapPin className="w-3 h-3 text-accent" />
                          {stop}
                          {idx < route.stops.length - 1 && (
                            <ChevronRight className="w-3 h-3 ml-1 text-muted-foreground/50" />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yacht Hero Image */}
      <section className="relative h-80 overflow-hidden">
        <img
          src={yachtImg}
          alt="Yacht Αστυπάλαια"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10">
            <p className="font-display text-3xl font-bold text-white">
              Ζήστε την ελευθερία της θάλασσας
            </p>
            <p className="text-white/70 text-lg mt-2">
              Αστυπάλαια - Η πεταλούδα του Αιγαίου
            </p>
          </div>
        </div>
      </section>

      {/* Booking Inquiry Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Αίτηση Ενοικίασης
            </h2>
            <p className="text-muted-foreground text-lg">
              Συμπληρώστε τη φόρμα και θα σας στείλουμε προσαρμοσμένη προσφορά
              εντός 24 ωρών.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl shadow-card p-8 space-y-6"
          >
            {/* Boat Preference */}
            <div>
              <label
                htmlFor="boat"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Προτίμηση Σκάφους
              </label>
              <select
                id="boat"
                name="boat"
                value={formData.boat}
                onChange={handleChange}
                className="w-full bg-background border border-muted-foreground/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors"
                required
              >
                <option value="">-- Επιλέξτε σκάφος --</option>
                {fleet.map((b) => (
                  <option key={b.id} value={b.name}>
                    {b.name} - {b.type} ({b.pricePerDay})
                  </option>
                ))}
              </select>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Ημερομηνία Έναρξης
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full bg-background border border-muted-foreground/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="endDate"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Ημερομηνία Λήξης
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full bg-background border border-muted-foreground/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Guests & Charter Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Αριθμός Επιβατών
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  max="20"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-background border border-muted-foreground/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="charterType"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Τύπος Ενοικίασης
                </label>
                <select
                  id="charterType"
                  name="charterType"
                  value={formData.charterType}
                  onChange={handleChange}
                  className="w-full bg-background border border-muted-foreground/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors"
                >
                  <option value="">-- Επιλέξτε τύπο --</option>
                  <option value="daily">Ημερήσια</option>
                  <option value="weekly">Εβδομαδιαία</option>
                  <option value="bareboat">Bareboat</option>
                  <option value="skippered">Skippered (με κυβερνήτη)</option>
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label
                htmlFor="requests"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Ειδικά Αιτήματα
              </label>
              <textarea
                id="requests"
                name="requests"
                value={formData.requests}
                onChange={handleChange}
                rows={4}
                placeholder="Catering, ειδικός εξοπλισμός, προτιμήσεις διαδρομής..."
                className="w-full bg-background border border-muted-foreground/20 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-lg shadow-soft"
            >
              <Send className="w-5 h-5" />
              Αποστολή Αιτήματος
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-ocean text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Anchor className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Έτοιμοι να σαλπάρετε;
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Η ομάδα μας είναι στη διάθεσή σας για να σχεδιάσει την ιδανική
            ναυτική εμπειρία. Ιδιωτικές κρουαζιέρες, εταιρικά events ή
            ρομαντικά ταξίδια -- εμείς φροντίζουμε τα πάντα.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-accent font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors shadow-soft text-lg"
            >
              Επικοινωνήστε μαζί μας
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+302243061000"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-lg"
            >
              +30 22430 61000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Yachts;
