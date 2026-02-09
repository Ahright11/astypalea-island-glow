import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import {
  Clock,
  Users,
  Check,
  Star,
  Anchor,
  Ship,
  MapPin,
  Calendar,
  Heart,
  Sparkles,
  Phone,
  Mail,
  ArrowRight,
  Shield,
  Sunrise,
  UtensilsCrossed,
  Camera,
  Mountain,
} from "lucide-react";

import beachImg from "@/assets/beach-astypalea.jpg";
import yachtImg from "@/assets/yacht-astypalea.jpg";
import villageImg from "@/assets/village-astypalea.jpg";
import castleImg from "@/assets/castle-astypalea.jpg";

interface Package {
  image: string;
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  duration: string;
  people: string;
  included: string[];
  price: string;
  priceLabel: string;
}

const packages: Package[] = [
  {
    image: beachImg,
    tag: "Δημοφιλές",
    tagColor: "bg-orange-500",
    title: "Ημερήσια Κρουαζιέρα",
    description:
      "Εξερευνήστε τις κρυφές παραλίες και τα γαλαζοπράσινα νερά της Αστυπάλαιας με την ημερήσια μας κρουαζιέρα. Κολύμπι σε απομονωμένους όρμους, σνόρκελινγκ και γεύμα πάνω στο σκάφος.",
    duration: "1 ημέρα",
    people: "Μέχρι 20 άτομα",
    included: [
      "Μεταφορά με σκάφος",
      "Επίσκεψη σε 4-5 παραλίες",
      "Εξοπλισμός σνόρκελινγκ",
      "Ελαφρύ γεύμα & αναψυκτικά",
      "Ξεναγός στο σκάφος",
    ],
    price: "€45",
    priceLabel: "/ άτομο",
  },
  {
    image: villageImg,
    tag: "Προτεινόμενο",
    tagColor: "bg-blue-600",
    title: "Αστυπάλαια Discovery 5 Ημέρες",
    description:
      "Ολοκληρωμένο πακέτο 5 ημερών που συνδυάζει διαμονή, εκδρομές και μεταφορές. Ανακαλύψτε κάθε γωνιά του νησιού με τοπικούς ξεναγούς.",
    duration: "5 ημέρες / 4 διανυκτερεύσεις",
    people: "2-6 άτομα",
    included: [
      "Διαμονή σε ξενοδοχείο 4*",
      "Ημερήσια κρουαζιέρα",
      "Περιήγηση Χώρας & Κάστρου",
      "Μεταφορές από/προς λιμάνι",
      "Πρωινό καθημερινά",
      "Ξεναγός σε κάθε εκδρομή",
    ],
    price: "€449",
    priceLabel: "/ άτομο",
  },
  {
    image: yachtImg,
    tag: "Premium",
    tagColor: "bg-amber-600",
    title: "Ιδιωτικό Yacht Charter",
    description:
      "Αποκλειστική εμπειρία με ιδιωτικό yacht. Σχεδιάστε τη δική σας διαδρομή, εξερευνήστε κρυφούς κόλπους και απολαύστε πολυτέλεια στη θάλασσα.",
    duration: "Ολοήμερο (8 ώρες)",
    people: "Μέχρι 8 άτομα",
    included: [
      "Ιδιωτικό yacht με καπετάνιο",
      "Προσαρμοσμένη διαδρομή",
      "Gourmet γεύμα & ποτά",
      "Εξοπλισμός θαλάσσιων σπορ",
      "Φωτογράφηση drone",
      "Ηλιοβασίλεμα εμπειρία",
    ],
    price: "€350",
    priceLabel: "/ ημέρα",
  },
  {
    image: castleImg,
    tag: "Best Seller",
    tagColor: "bg-emerald-600",
    title: "Αστυπάλαια 7 Ημέρες All-Inclusive",
    description:
      "Η απόλυτη εμπειρία Αστυπάλαιας! Μια εβδομάδα γεμάτη εξερεύνηση, χαλάρωση και αυθεντικές γεύσεις. Τα πάντα περιλαμβάνονται για ανέμελες διακοπές.",
    duration: "7 ημέρες / 6 διανυκτερεύσεις",
    people: "2-4 άτομα",
    included: [
      "Διαμονή σε σουίτα 4-5*",
      "Πλήρης διατροφή (πρωινό, γεύμα, δείπνο)",
      "2 θαλάσσιες εκδρομές",
      "Περιήγηση Χώρας & Κάστρου",
      "Επίσκεψη σε τοπικό οινοποιείο",
      "Μεταφορές & transfers",
      "Δωρεάν ενοικίαση ποδηλάτου",
    ],
    price: "€599",
    priceLabel: "/ άτομο",
  },
  {
    image: yachtImg,
    tag: "Περιπέτεια",
    tagColor: "bg-violet-600",
    title: "Island Hopping Δωδεκάνησα",
    description:
      "Εξερευνήστε τα Δωδεκάνησα με αφετηρία την Αστυπάλαια. Επισκεφθείτε Κάλυμνο, Κω, Νίσυρο και Τήλο σε ένα μοναδικό ταξίδι ανακάλυψης στο Αιγαίο.",
    duration: "10 ημέρες / 9 διανυκτερεύσεις",
    people: "2-8 άτομα",
    included: [
      "Διαμονή σε κάθε νησί",
      "Ακτοπλοϊκά εισιτήρια",
      "Ξεναγήσεις σε κάθε νησί",
      "Πρωινό καθημερινά",
      "Τοπικές γαστρονομικές εμπειρίες",
      "24/7 συντονιστής ταξιδιού",
      "Ασφάλεια ταξιδιού",
    ],
    price: "€899",
    priceLabel: "/ άτομο",
  },
  {
    image: villageImg,
    tag: "Ρομαντικό",
    tagColor: "bg-rose-500",
    title: "Ρομαντικό Πακέτο Ζευγαριού",
    description:
      "Δημιουργήστε αξέχαστες αναμνήσεις με το αγαπημένο σας πρόσωπο. Ιδιωτικά δείπνα υπό τα αστέρια, spa, ηλιοβασίλεμα κρουαζιέρα και πολλές εκπλήξεις.",
    duration: "5 ημέρες / 4 διανυκτερεύσεις",
    people: "2 άτομα",
    included: [
      "Σουίτα με θέα θάλασσα",
      "Ιδιωτικό δείπνο στην παραλία",
      "Sunset κρουαζιέρα για δύο",
      "Couples spa θεραπεία",
      "Καλάθι καλωσορίσματος",
      "Πρωινό στο δωμάτιο",
      "Φωτογράφηση ζευγαριού",
    ],
    price: "€799",
    priceLabel: "/ ζευγάρι",
  },
];

const expectations = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Ασφάλεια & Εμπιστοσύνη",
    description: "Πλήρης ασφάλιση ταξιδιού και εγγύηση επιστροφής χρημάτων.",
  },
  {
    icon: <Sunrise className="w-6 h-6" />,
    title: "Αυθεντικές Εμπειρίες",
    description:
      "Τοπικοί ξεναγοί που γνωρίζουν κάθε κρυφή γωνιά του νησιού.",
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    title: "Γαστρονομικές Απολαύσεις",
    description:
      "Αυθεντική τοπική κουζίνα με φρέσκα υλικά από ντόπιους παραγωγούς.",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Αξέχαστες Αναμνήσεις",
    description:
      "Επαγγελματική φωτογράφηση σε επιλεγμένα πακέτα για να θυμάστε κάθε στιγμή.",
  },
  {
    icon: <Mountain className="w-6 h-6" />,
    title: "Φύση & Εξερεύνηση",
    description:
      "Πεζοπορία, σνόρκελινγκ και θαλάσσια σπορ για τους λάτρεις της περιπέτειας.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Προσωπική Εξυπηρέτηση",
    description:
      "Κάθε πακέτο προσαρμόζεται στις δικές σας ανάγκες και επιθυμίες.",
  },
];

const Packages = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Πακέτα"
        highlight="Διακοπών"
        subtitle="Ανακαλύψτε τα ολοκληρωμένα πακέτα διακοπών μας στην Αστυπάλαια. Από ημερήσιες εκδρομές μέχρι πολυήμερες περιπέτειες, έχουμε ό,τι χρειάζεστε."
      />

      {/* Packages Grid */}
      <section className="py-16 md:py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Επιλέξτε το <span className="text-accent">Πακέτο σας</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Κάθε πακέτο είναι προσεκτικά σχεδιασμένο για να σας προσφέρει την
            καλύτερη δυνατή εμπειρία στην Αστυπάλαια
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-card overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span
                  className={`absolute top-4 left-4 ${pkg.tagColor} text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide`}
                >
                  {pkg.tag}
                </span>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-4 text-white/90 text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {pkg.people}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {pkg.description}
                </p>

                {/* Included */}
                <div className="mb-6 flex-grow">
                  <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Τι περιλαμβάνει:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.included.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="flex items-end justify-between pt-5 border-t border-gray-100">
                  <div>
                    <span className="text-sm text-muted-foreground">
                      Από
                    </span>
                    <div>
                      <span className="text-3xl font-bold text-accent">
                        {pkg.price}
                      </span>
                      <span className="text-muted-foreground text-sm ml-1">
                        {pkg.priceLabel}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-xl shadow-soft transition-all duration-300 hover:shadow-lg flex items-center gap-2"
                  >
                    Κράτηση
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Τι να <span className="text-accent">Περιμένετε</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Κάθε πακέτο μας περιλαμβάνει υψηλής ποιότητας υπηρεσίες και
              εμπειρίες που κάνουν τις διακοπές σας μοναδικές
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expectations.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-soft p-6 group hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-ocean rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                  <span className="text-white/80 text-sm font-semibold uppercase tracking-wide">
                    Εξατομικευμένο Πακέτο
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Φτιάξτε το δικό σας πακέτο
                </h2>
                <p className="text-white/90 text-lg mb-2">
                  Δεν βρήκατε αυτό που ψάχνετε; Σχεδιάστε τις διακοπές σας
                  ακριβώς όπως τις θέλετε! Επιλέξτε διαμονή, εκδρομές,
                  μεταφορές και δραστηριότητες σύμφωνα με τις προτιμήσεις σας.
                </p>
                <ul className="text-white/80 text-sm space-y-1 mt-4 mb-6 lg:mb-0">
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <Check className="w-4 h-4 text-yellow-300" />
                    Επιλέξτε τις ημέρες και τις δραστηριότητες που θέλετε
                  </li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <Check className="w-4 h-4 text-yellow-300" />
                    Προσαρμόστε τον προϋπολογισμό στα μέτρα σας
                  </li>
                  <li className="flex items-center gap-2 justify-center lg:justify-start">
                    <Check className="w-4 h-4 text-yellow-300" />
                    Λάβετε προσφορά εντός 24 ωρών
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-accent font-semibold px-8 py-4 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-center justify-center"
                >
                  <Mail className="w-5 h-5" />
                  Ζητήστε Προσφορά
                </Link>
                <a
                  href="tel:+302243061571"
                  className="bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center gap-2 border border-white/30 text-center justify-center"
                >
                  <Phone className="w-5 h-5" />
                  +30 22430 61571
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="py-10 bg-muted/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span>
                <strong className="text-foreground">4.9/5</strong> Βαθμολογία
                Πελατών
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              <span>
                <strong className="text-foreground">2,500+</strong> Ευχαριστημένοι
                Ταξιδιώτες
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Anchor className="w-5 h-5 text-accent" />
              <span>
                <strong className="text-foreground">10+</strong> Χρόνια
                Εμπειρίας
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Ship className="w-5 h-5 text-accent" />
              <span>
                <strong className="text-foreground">50+</strong> Εκδρομές
                Ετησίως
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
