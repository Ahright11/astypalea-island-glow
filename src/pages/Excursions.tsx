import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import {
  Anchor,
  Clock,
  Users,
  Euro,
  Mountain,
  Fish,
  Camera,
  Sun,
  Waves,
  MapPin,
  CalendarDays,
  Send,
  ChevronRight,
  Star,
  Compass,
  Shell,
  Ship,
} from "lucide-react";

import beachImg from "@/assets/beach-astypalea.jpg";
import yachtImg from "@/assets/yacht-astypalea.jpg";
import castleImg from "@/assets/castle-astypalea.jpg";

interface Activity {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: string;
  groupSize: string;
  difficulty: string;
  image?: string;
  gradient?: string;
  icon: React.ReactNode;
}

const activities: Activity[] = [
  {
    id: 1,
    title: "Κρουαζιέρα Κουτσομύτη & Κουνούπες",
    description:
      "Ανακαλύψτε τις απομονωμένες παραλίες των Κουτσομύτη και Κουνούπες με το παραδοσιακό μας σκάφος. Κολυμπήστε σε κρυστάλλινα νερά, εξερευνήστε κρυφούς κόλπους και απολαύστε ένα αυθεντικό ελληνικό γεύμα πάνω στο κατάστρωμα.",
    duration: "7 ώρες",
    price: "€45/άτομο",
    groupSize: "Έως 20 άτομα",
    difficulty: "Εύκολη",
    image: beachImg,
    icon: <Ship className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Snorkeling & Κατάδυση",
    description:
      "Εξερευνήστε τον υποβρύχιο κόσμο της Αστυπάλαιας με έμπειρους δύτες. Θαλάσσιες σπηλιές, πολύχρωμα ψάρια και αρχαία ναυάγια σας περιμένουν στα βάθη του Αιγαίου.",
    duration: "4 ώρες",
    price: "€65/άτομο",
    groupSize: "Έως 8 άτομα",
    difficulty: "Μέτρια",
    gradient: "from-cyan-600 via-blue-700 to-indigo-800",
    icon: <Waves className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Ηλιοβασίλεμα Cruise",
    description:
      "Ζήστε το μαγευτικό ηλιοβασίλεμα της Αστυπάλαιας από τη θάλασσα. Απολαύστε τοπικό κρασί, παραδοσιακά σνακ και τη χρυσή λάμψη του ήλιου που βυθίζεται στο Αιγαίο.",
    duration: "3 ώρες",
    price: "€55/άτομο",
    groupSize: "Έως 15 άτομα",
    difficulty: "Εύκολη",
    gradient: "from-orange-500 via-rose-500 to-purple-700",
    icon: <Sun className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Ψαρική Εκδρομή",
    description:
      "Ακολουθήστε τους ντόπιους ψαράδες σε μια αυθεντική ψαρική εμπειρία. Μάθετε παραδοσιακές τεχνικές αλιείας και μαγειρέψτε το ψάρεμα σας σε μια απομονωμένη παραλία.",
    duration: "5 ώρες",
    price: "€50/άτομο",
    groupSize: "Έως 6 άτομα",
    difficulty: "Εύκολη",
    gradient: "from-sky-500 via-teal-500 to-emerald-600",
    icon: <Fish className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "Πεζοπορία Κάστρο Querini",
    description:
      "Ανεβείτε στο ιστορικό Κάστρο Querini με ξεναγό που θα σας ταξιδέψει στην ιστορία. Θέα 360° στο Αιγαίο, βυζαντινές εκκλησίες και μεσαιωνικά μονοπάτια.",
    duration: "3 ώρες",
    price: "€25/άτομο",
    groupSize: "Έως 12 άτομα",
    difficulty: "Μέτρια",
    image: castleImg,
    icon: <Mountain className="w-5 h-5" />,
  },
  {
    id: 6,
    title: "Γύρος Νησιού με Σκάφος",
    description:
      "Ολοήμερη κρουαζιέρα γύρω από την Αστυπάλαια. Επισκεφτείτε κρυφές παραλίες, θαλάσσιες σπηλιές, τα νησάκια Κουτσομύτη και Κουνούπες, με γεύμα και αναψυκτικά.",
    duration: "Ολοήμερη",
    price: "€75/άτομο",
    groupSize: "Έως 20 άτομα",
    difficulty: "Εύκολη",
    image: yachtImg,
    icon: <Anchor className="w-5 h-5" />,
  },
  {
    id: 7,
    title: "Κόκκινα Βράχια Εκδρομή",
    description:
      "Εξερευνήστε τους εντυπωσιακούς κόκκινους βράχους στο νοτιοδυτικό τμήμα του νησιού. Μοναδικοί γεωλογικοί σχηματισμοί, κολύμπι σε φυσικές πισίνες και φωτογραφικές στάσεις.",
    duration: "5 ώρες",
    price: "€40/άτομο",
    groupSize: "Έως 10 άτομα",
    difficulty: "Μέτρια",
    gradient: "from-red-600 via-orange-600 to-amber-500",
    icon: <Compass className="w-5 h-5" />,
  },
  {
    id: 8,
    title: "Φωτογραφική Περιήγηση",
    description:
      "Περιηγηθείτε στη γραφική Χώρα με επαγγελματία φωτογράφο. Ανεμόμυλοι, λευκά σπιτάκια, γραφικά σοκάκια και η πιο φωτογενική θέα του Αιγαίου.",
    duration: "3 ώρες",
    price: "€35/άτομο",
    groupSize: "Έως 8 άτομα",
    difficulty: "Εύκολη",
    gradient: "from-violet-600 via-fuchsia-500 to-pink-500",
    icon: <Camera className="w-5 h-5" />,
  },
];

const destinations = [
  {
    name: "Κουτσομύτη",
    description:
      "Ακατοίκητο νησάκι με τιρκουάζ νερά και αμμώδεις παραλίες. Ιδανικό για κολύμπι και snorkeling σε απόλυτη ηρεμία.",
    icon: <Shell className="w-6 h-6" />,
  },
  {
    name: "Κουνούπες",
    description:
      "Μικρό νησί με εξωτικές παραλίες που θυμίζουν Καραϊβική. Κρυστάλλινα νερά και λευκή άμμος.",
    icon: <Waves className="w-6 h-6" />,
  },
  {
    name: "Κόκκινα Βράχια",
    description:
      "Εντυπωσιακοί γεωλογικοί σχηματισμοί κόκκινου χρώματος στη νοτιοδυτική ακτή. Μοναδικό τοπίο για φωτογραφίες.",
    icon: <Mountain className="w-6 h-6" />,
  },
  {
    name: "Βάτσες",
    description:
      "Προστατευμένος κόλπος με ρηχά, ζεστά νερά. Ιδανική για οικογένειες και αρχάριους κολυμβητές.",
    icon: <Sun className="w-6 h-6" />,
  },
  {
    name: "Άγιος Ιωάννης",
    description:
      "Γραφική παραλία κοντά στο ομώνυμο εκκλησάκι. Γαλήνιο περιβάλλον με θέα στο ανοιχτό Αιγαίο.",
    icon: <Star className="w-6 h-6" />,
  },
];

const Excursions = () => {
  const [formData, setFormData] = useState({
    activity: "",
    date: "",
    people: "2",
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
    console.log("Booking submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <PageHero
        title="Εκδρομές &"
        highlight="Δραστηριότητες"
        subtitle="Καθημερινές εκδρομές και δραστηριότητες για να ανακαλύψετε τις κρυφές ομορφιές της Αστυπάλαιας. Θαλάσσιες περιπέτειες, πεζοπορίες και πολιτιστικές εμπειρίες σας περιμένουν."
      />

      {/* Activities Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Οι Εκδρομές μας
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Επιλέξτε ανάμεσα σε 8 μοναδικές εμπειρίες και δημιουργήστε
              αξέχαστες αναμνήσεις στην Αστυπάλαια.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-card rounded-2xl shadow-card overflow-hidden group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image or Gradient */}
                <div className="relative h-52 overflow-hidden">
                  {activity.image ? (
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${activity.gradient} flex items-center justify-center`}
                    >
                      <div className="text-white/30 scale-[3]">
                        {activity.icon}
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-accent font-bold px-3 py-1.5 rounded-full text-sm shadow-soft">
                    {activity.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-accent">{activity.icon}</span>
                    <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                      {activity.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {activity.description}
                  </p>

                  {/* Meta */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Users className="w-3.5 h-3.5 text-accent" />
                      <span>{activity.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Euro className="w-3.5 h-3.5 text-accent" />
                      <span>{activity.price}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Mountain className="w-3.5 h-3.5 text-accent" />
                      <span>{activity.difficulty}</span>
                    </div>
                  </div>

                  {/* Button */}
                  <button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-2.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm">
                    <CalendarDays className="w-4 h-4" />
                    Κράτηση
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Κράτηση Εκδρομής
            </h2>
            <p className="text-muted-foreground text-lg">
              Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας για
              επιβεβαίωση εντός 24 ωρών.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl shadow-card p-8 space-y-6"
          >
            {/* Activity Select */}
            <div>
              <label
                htmlFor="activity"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Επιλογή Εκδρομής
              </label>
              <select
                id="activity"
                name="activity"
                value={formData.activity}
                onChange={handleChange}
                className="w-full bg-background border border-muted-foreground/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors"
                required
              >
                <option value="">-- Επιλέξτε δραστηριότητα --</option>
                {activities.map((a) => (
                  <option key={a.id} value={a.title}>
                    {a.title} ({a.price})
                  </option>
                ))}
              </select>
            </div>

            {/* Date & People */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Ημερομηνία
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-background border border-muted-foreground/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="people"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Αριθμός Ατόμων
                </label>
                <input
                  type="number"
                  id="people"
                  name="people"
                  min="1"
                  max="20"
                  value={formData.people}
                  onChange={handleChange}
                  className="w-full bg-background border border-muted-foreground/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors"
                  required
                />
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
                placeholder="Αλλεργίες, ειδικές ανάγκες, προτιμήσεις..."
                className="w-full bg-background border border-muted-foreground/20 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-lg shadow-soft"
            >
              <Send className="w-5 h-5" />
              Αποστολή Κράτησης
            </button>
          </form>
        </div>
      </section>

      {/* Destinations Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Κορυφαίοι Προορισμοί
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Οι ομορφότερες τοποθεσίες που θα επισκεφτείτε με τις εκδρομές μας.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {destinations.map((dest) => (
              <div
                key={dest.name}
                className="bg-card rounded-2xl shadow-card p-6 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-accent">
                  {dest.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {dest.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-ocean text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Anchor className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Δεν βρήκατε αυτό που ψάχνετε;
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Σχεδιάζουμε και προσαρμοσμένες εκδρομές σύμφωνα με τις επιθυμίες
            σας. Ιδιωτικές κρουαζιέρες, ρομαντικά δείπνα στη θάλασσα, ή
            περιπέτειες για όλη την οικογένεια.
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

export default Excursions;
