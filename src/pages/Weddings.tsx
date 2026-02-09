import { Link } from "react-router-dom";
import { Heart, Camera, Music, Utensils, MapPin, Users, Calendar, Star, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import castleImg from "@/assets/castle-astypalea.jpg";
import beachImg from "@/assets/beach-astypalea.jpg";
import villageImg from "@/assets/village-astypalea.jpg";

const venues = [
  { img: beachImg, title: "Παραλιακός Γάμος", desc: "Τελετή στην αμμουδιά με θέα το ηλιοβασίλεμα του Αιγαίου", capacity: "Έως 100 άτομα", price: "από €2.500" },
  { img: castleImg, title: "Κάστρο Querini", desc: "Ρομαντική τελετή στην αυλή του μεσαιωνικού κάστρου", capacity: "Έως 80 άτομα", price: "από €3.000" },
  { img: villageImg, title: "Ιδιωτική Βίλα", desc: "Αποκλειστική γιορτή σε πολυτελή βίλα με πισίνα", capacity: "Έως 60 άτομα", price: "από €4.000" },
];

const weddingServices = [
  { icon: MapPin, title: "Επιλογή Χώρου", desc: "Παραλία, κάστρο, εκκλησία ή βίλα — βρίσκουμε τον ιδανικό χώρο" },
  { icon: Utensils, title: "Catering & Menu", desc: "Τοπική κουζίνα, διεθνείς γεύσεις & εξατομικευμένα μενού" },
  { icon: Camera, title: "Φωτογραφία & Βίντεο", desc: "Επαγγελματική κάλυψη drone, φωτογράφηση & βίντεο κλιπ" },
  { icon: Music, title: "Μουσική & DJ", desc: "Ζωντανή μουσική, DJ sets & ηχητική κάλυψη" },
  { icon: Heart, title: "Ανθοστολισμός", desc: "Λουλούδια, διακόσμηση & δημιουργία ατμόσφαιρας" },
  { icon: Users, title: "Διαμονή Καλεσμένων", desc: "Κρατήσεις ξενοδοχείων για όλους τους καλεσμένους σας" },
];

const packages = [
  { title: "Essential", price: "2.500", features: ["Χώρος τελετής", "Coordinator ημέρας", "Ανθοστολισμός βασικός", "Μουσική τελετής", "Νομικά έγγραφα"] },
  { title: "Premium", price: "5.000", features: ["Όλα τα Essential +", "Catering 50 ατόμων", "Φωτογράφος 4 ώρες", "DJ Party 4 ώρες", "Τούρτα γάμου", "Decoration πολυτελής"], highlighted: true },
  { title: "Luxury All-Inclusive", price: "10.000", features: ["Όλα τα Premium +", "Drone βίντεο", "Φωτογράφηση full day", "Μεταφορές καλεσμένων", "Honeymoon night suite", "Fireworks show"] },
];

const Weddings = () => {
  return (
    <div>
      <PageHero
        badge="Γάμοι & Εκδηλώσεις"
        title="Ονειρεμένοι Γάμοι στην"
        highlight="Αστυπάλαια"
        subtitle="Ρομαντικοί γάμοι σε μαγευτικές τοποθεσίες — παραλίες, κάστρα & ιδιωτικές βίλες"
      />

      {/* Venues */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">Χώροι Τελετής</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Μαγευτικές <span className="text-gradient-ocean">Τοποθεσίες</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {venues.map((v) => (
              <div key={v.title} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
                <div className="h-56 overflow-hidden">
                  <img src={v.img} alt={v.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{v.desc}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1"><Users size={14} /> {v.capacity}</span>
                    <span className="font-display font-bold text-accent">{v.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">Υπηρεσίες Γάμου</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Αναλαμβάνουμε <span className="text-gradient-ocean">τα Πάντα</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {weddingServices.map((s) => (
              <div key={s.title} className="bg-card rounded-2xl p-5 md:p-6 shadow-soft text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-ocean mx-auto mb-4 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">Πακέτα Γάμου</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Επιλέξτε το Πακέτο σας
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className={`bg-card rounded-2xl p-6 md:p-8 shadow-soft transition-all hover:shadow-elevated ${
                  pkg.highlighted ? "ring-2 ring-accent md:-translate-y-4" : ""
                }`}
              >
                {pkg.highlighted && (
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    Δημοφιλές
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">{pkg.title}</h3>
                <div className="mb-6">
                  <span className="font-display text-4xl font-bold text-foreground">€{pkg.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center rounded-xl py-3 text-sm font-semibold transition-all ${
                    pkg.highlighted
                      ? "bg-accent text-accent-foreground hover:scale-105"
                      : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  Ζητήστε Προσφορά
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 md:py-24 bg-gradient-ocean">
        <div className="container mx-auto px-5 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Σχεδιάστε τον Γάμο σας
              </h2>
              <p className="text-white/70">Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών</p>
            </div>
            <form className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Ονοματεπώνυμο" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" />
                <input type="email" placeholder="Email" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="tel" placeholder="Τηλέφωνο" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" />
                <input type="date" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/50">
                  <option value="" className="text-foreground">Αριθμός Καλεσμένων</option>
                  <option className="text-foreground">Έως 30</option>
                  <option className="text-foreground">30-60</option>
                  <option className="text-foreground">60-100</option>
                  <option className="text-foreground">100+</option>
                </select>
                <select className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/50">
                  <option value="" className="text-foreground">Πακέτο Ενδιαφέροντος</option>
                  <option className="text-foreground">Essential</option>
                  <option className="text-foreground">Premium</option>
                  <option className="text-foreground">Luxury All-Inclusive</option>
                  <option className="text-foreground">Custom</option>
                </select>
              </div>
              <textarea rows={4} placeholder="Πείτε μας για τον γάμο των ονείρων σας..." className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none" />
              <button type="submit" className="w-full rounded-xl bg-accent text-accent-foreground font-semibold py-3.5 transition-all hover:scale-[1.02] hover:shadow-elevated">
                Αποστολή Αιτήματος
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Weddings;
