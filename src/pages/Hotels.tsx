import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import {
  Search,
  Star,
  Wifi,
  Wind,
  Waves,
  Eye,
  MapPin,
  Calendar,
  Users,
  BedDouble,
  Building2,
  Home,
  ShieldCheck,
  XCircle,
  Zap,
  Headphones,
  Phone,
  Mail,
  ChevronDown,
  UtensilsCrossed,
  Car,
  Dumbbell,
  Coffee,
} from "lucide-react";

const destinations = [
  "Αστυπάλαια - Χώρα",
  "Λιβάδια",
  "Αναλίπτη",
  "Μαλτεζάνα",
  "Βαθύ",
];

const propertyTypes = ["Ξενοδοχείο", "Βίλα", "Στούντιο", "Διαμέρισμα"];

interface Property {
  name: string;
  type: string;
  area: string;
  rating: number;
  stars: number;
  reviews: number;
  amenities: { icon: React.ReactNode; label: string }[];
  price: number;
  gradient: string;
  icon: React.ReactNode;
  description: string;
}

const properties: Property[] = [
  {
    name: "Astro Palace Hotel",
    type: "Ξενοδοχείο",
    area: "Χώρα",
    rating: 4.9,
    stars: 5,
    reviews: 234,
    amenities: [
      { icon: <Wifi className="w-4 h-4" />, label: "WiFi" },
      { icon: <Wind className="w-4 h-4" />, label: "A/C" },
      { icon: <Waves className="w-4 h-4" />, label: "Πισίνα" },
      { icon: <Eye className="w-4 h-4" />, label: "Θέα" },
      { icon: <UtensilsCrossed className="w-4 h-4" />, label: "Εστιατόριο" },
      { icon: <Car className="w-4 h-4" />, label: "Πάρκινγκ" },
    ],
    price: 180,
    gradient: "bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400",
    icon: <Building2 className="w-16 h-16 text-white/60" />,
    description:
      "Πολυτελές ξενοδοχείο στην καρδιά της Χώρας με πανοραμική θέα στο Αιγαίο και εξαιρετικές παροχές.",
  },
  {
    name: "Maltezana Beach Resort",
    type: "Ξενοδοχείο",
    area: "Αναλίπτη",
    rating: 4.7,
    stars: 4,
    reviews: 189,
    amenities: [
      { icon: <Wifi className="w-4 h-4" />, label: "WiFi" },
      { icon: <Wind className="w-4 h-4" />, label: "A/C" },
      { icon: <Waves className="w-4 h-4" />, label: "Πισίνα" },
      { icon: <Eye className="w-4 h-4" />, label: "Θέα Θαλάσσης" },
      { icon: <Coffee className="w-4 h-4" />, label: "Πρωινό" },
    ],
    price: 120,
    gradient: "bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-400",
    icon: <Waves className="w-16 h-16 text-white/60" />,
    description:
      "Μπροστά στη θάλασσα, ιδανικό για χαλαρωτικές διακοπές στην Αναλίπτη με άμεση πρόσβαση στην παραλία.",
  },
  {
    name: "Villa Panorama",
    type: "Βίλα",
    area: "Χώρα",
    rating: 4.9,
    stars: 5,
    reviews: 67,
    amenities: [
      { icon: <Wifi className="w-4 h-4" />, label: "WiFi" },
      { icon: <Wind className="w-4 h-4" />, label: "A/C" },
      { icon: <Waves className="w-4 h-4" />, label: "Ιδιωτική Πισίνα" },
      { icon: <Eye className="w-4 h-4" />, label: "Πανοραμική Θέα" },
      { icon: <Car className="w-4 h-4" />, label: "Πάρκινγκ" },
      { icon: <Dumbbell className="w-4 h-4" />, label: "Γυμναστήριο" },
    ],
    price: 250,
    gradient: "bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500",
    icon: <Home className="w-16 h-16 text-white/60" />,
    description:
      "Εντυπωσιακή βίλα με ιδιωτική πισίνα και απεριόριστη θέα στο Κάστρο και τη Χώρα.",
  },
  {
    name: "Livadi Studios",
    type: "Στούντιο",
    area: "Λιβάδια",
    rating: 4.5,
    stars: 3,
    reviews: 142,
    amenities: [
      { icon: <Wifi className="w-4 h-4" />, label: "WiFi" },
      { icon: <Wind className="w-4 h-4" />, label: "A/C" },
      { icon: <Eye className="w-4 h-4" />, label: "Θέα Κήπου" },
      { icon: <Coffee className="w-4 h-4" />, label: "Κουζινάκι" },
    ],
    price: 65,
    gradient: "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-400",
    icon: <BedDouble className="w-16 h-16 text-white/60" />,
    description:
      "Άνετα και προσιτά στούντιο κοντά στην παραλία Λιβάδια, ιδανικά για ζευγάρια και solo ταξιδιώτες.",
  },
  {
    name: "Blue Bay Apartments",
    type: "Διαμέρισμα",
    area: "Μαλτεζάνα",
    rating: 4.6,
    stars: 3,
    reviews: 98,
    amenities: [
      { icon: <Wifi className="w-4 h-4" />, label: "WiFi" },
      { icon: <Wind className="w-4 h-4" />, label: "A/C" },
      { icon: <Eye className="w-4 h-4" />, label: "Θέα Θαλάσσης" },
      { icon: <Coffee className="w-4 h-4" />, label: "Κουζίνα" },
      { icon: <Car className="w-4 h-4" />, label: "Πάρκινγκ" },
    ],
    price: 85,
    gradient: "bg-gradient-to-br from-indigo-500 via-blue-500 to-sky-400",
    icon: <Building2 className="w-16 h-16 text-white/60" />,
    description:
      "Πλήρως εξοπλισμένα διαμερίσματα στη Μαλτεζάνα, μόλις 2 λεπτά από τη θάλασσα.",
  },
  {
    name: "Castle View Suites",
    type: "Ξενοδοχείο",
    area: "Χώρα",
    rating: 4.8,
    stars: 4,
    reviews: 156,
    amenities: [
      { icon: <Wifi className="w-4 h-4" />, label: "WiFi" },
      { icon: <Wind className="w-4 h-4" />, label: "A/C" },
      { icon: <Eye className="w-4 h-4" />, label: "Θέα Κάστρο" },
      { icon: <Coffee className="w-4 h-4" />, label: "Πρωινό" },
      { icon: <UtensilsCrossed className="w-4 h-4" />, label: "Bar" },
    ],
    price: 150,
    gradient: "bg-gradient-to-br from-purple-600 via-violet-500 to-fuchsia-400",
    icon: <Building2 className="w-16 h-16 text-white/60" />,
    description:
      "Boutique σουίτες με μοναδική θέα στο Κάστρο της Αστυπάλαιας και παραδοσιακή αρχιτεκτονική.",
  },
];

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Εγγύηση Καλύτερης Τιμής",
    description:
      "Βρήκατε χαμηλότερη τιμή αλλού; Θα την ισοφαρίσουμε και θα σας δώσουμε επιπλέον 10% έκπτωση.",
  },
  {
    icon: <XCircle className="w-8 h-8" />,
    title: "Δωρεάν Ακύρωση",
    description:
      "Δωρεάν ακύρωση μέχρι 48 ώρες πριν την άφιξη στα περισσότερα καταλύματά μας.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Άμεση Επιβεβαίωση",
    description:
      "Λάβετε άμεση επιβεβαίωση κράτησης μέσω email και SMS αμέσως μετά την ολοκλήρωση.",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Υποστήριξη 24/7",
    description:
      "Η ομάδα μας είναι διαθέσιμη 24 ώρες το 24ωρο για οποιαδήποτε απορία ή ανάγκη.",
  },
];

const Hotels = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);
  const [propertyType, setPropertyType] = useState("");

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Ξενοδοχεία &"
        highlight="Καταλύματα"
        subtitle="Ανακαλύψτε τα καλύτερα καταλύματα της Αστυπάλαιας. Από πολυτελή ξενοδοχεία μέχρι γοητευτικά στούντιο, βρείτε τον ιδανικό χώρο για τις διακοπές σας."
      />

      {/* Search Form */}
      <section className="relative -mt-8 z-10 max-w-6xl mx-auto px-4">
        <div className="bg-card rounded-2xl shadow-card p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <Search className="w-5 h-5 text-accent" />
            <h2 className="font-display text-lg font-semibold text-foreground">
              Αναζήτηση Καταλύματος
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Destination */}
            <div className="relative">
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                <MapPin className="w-4 h-4 inline mr-1" />
                Προορισμός
              </label>
              <div className="relative">
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-background text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                >
                  <option value="">Όλοι οι προορισμοί</option>
                  {destinations.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Check-in */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                <Calendar className="w-4 h-4 inline mr-1" />
                Check-in
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              />
            </div>

            {/* Check-out */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                <Calendar className="w-4 h-4 inline mr-1" />
                Check-out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              />
            </div>

            {/* Rooms */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                <BedDouble className="w-4 h-4 inline mr-1" />
                Δωμάτια
              </label>
              <div className="relative">
                <select
                  value={rooms}
                  onChange={(e) => setRooms(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-background text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Δωμάτιο" : "Δωμάτια"}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                <Users className="w-4 h-4 inline mr-1" />
                Επισκέπτες
              </label>
              <div className="relative">
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-background text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Άτομο" : "Άτομα"}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                <Building2 className="w-4 h-4 inline mr-1" />
                Τύπος Καταλύματος
              </label>
              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-background text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                >
                  <option value="">Όλοι οι τύποι</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-xl shadow-soft transition-all duration-300 hover:shadow-lg flex items-center gap-2">
              <Search className="w-5 h-5" />
              Αναζήτηση Καταλυμάτων
            </button>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 md:py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Προτεινόμενα <span className="text-accent">Καταλύματα</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Επιλεγμένα καταλύματα με εγγυημένη ποιότητα για αξέχαστες διακοπές
            στην Αστυπάλαια
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-card overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div
                className={`${property.gradient} h-52 relative flex items-center justify-center`}
              >
                {property.icon}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {property.type}
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  {property.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {property.name}
                  </h3>
                </div>

                <div className="flex items-center gap-1 mb-1">
                  {renderStars(property.stars)}
                  <span className="text-xs text-muted-foreground ml-2">
                    ({property.reviews} κριτικές)
                  </span>
                </div>

                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  {property.area}, Αστυπάλαια
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {property.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {property.amenities.map((amenity, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2.5 py-1.5 rounded-lg"
                    >
                      {amenity.icon}
                      {amenity.label}
                    </span>
                  ))}
                </div>

                {/* Price & Button */}
                <div className="flex items-end justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-2xl font-bold text-accent">
                      €{property.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / διανυκτέρευση
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-accent hover:bg-accent/90 text-white font-semibold px-5 py-2.5 rounded-xl shadow-soft transition-all duration-300 hover:shadow-lg text-sm"
                  >
                    Κράτηση
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Γιατί να κλείσετε <span className="text-accent">μαζί μας</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Η Astypalea Tours εγγυάται την καλύτερη εμπειρία κράτησης
              καταλύματος στην Αστυπάλαια
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-soft p-6 text-center group hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-ocean rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Χρειάζεστε βοήθεια με την κράτηση;
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Η ομάδα μας είναι στη διάθεσή σας για να βρει το ιδανικό
                κατάλυμα για εσάς. Επικοινωνήστε μαζί μας για εξατομικευμένες
                προτάσεις.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-accent font-semibold px-8 py-3.5 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Στείλτε μας Μήνυμα
                </Link>
                <a
                  href="tel:+302243061571"
                  className="bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center gap-2 border border-white/30"
                >
                  <Phone className="w-5 h-5" />
                  +30 22430 61571
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hotels;
