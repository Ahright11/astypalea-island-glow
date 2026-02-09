import { Link } from "react-router-dom";
import { Star, Ship, Plane, Hotel, Package, Sailboat, Heart, MapPin, Bus, Shield, Clock, Award, ChevronRight, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-astypalea.jpg";
import beachImg from "@/assets/beach-astypalea.jpg";
import castleImg from "@/assets/castle-astypalea.jpg";
import yachtImg from "@/assets/yacht-astypalea.jpg";
import villageImg from "@/assets/village-astypalea.jpg";
import BookingEngine from "@/components/BookingEngine";

const services = [
  { icon: Ship, title: "Ακτοπλοϊκά", desc: "Εισιτήρια πλοίων για όλα τα νησιά του Αιγαίου", href: "/ferries" },
  { icon: Plane, title: "Αεροπορικά", desc: "Πτήσεις εσωτερικού & εξωτερικού", href: "/flights" },
  { icon: Hotel, title: "Ξενοδοχεία", desc: "Κρατήσεις σε ξενοδοχεία & βίλες", href: "/hotels" },
  { icon: Package, title: "Πακέτα", desc: "Ολοκληρωμένα πακέτα διακοπών", href: "/packages" },
  { icon: Sailboat, title: "Σκάφη & Yacht", desc: "Ενοικίαση σκαφών & ιστιοπλοϊκών", href: "/yachts" },
  { icon: Heart, title: "Γάμοι", desc: "Ονειρεμένοι γάμοι στην Αστυπάλαια", href: "/weddings" },
  { icon: MapPin, title: "Εκδρομές", desc: "Ημερήσιες εκδρομές & δραστηριότητες", href: "/excursions" },
  { icon: Bus, title: "Μεταφορές", desc: "Transfers & ενοικίαση οχημάτων", href: "/transfers" },
];

const packages = [
  { img: beachImg, tag: "Δημοφιλές", title: "Ημερήσια Κρουαζιέρα", price: "45", note: "/άτομο", desc: "Κουτσομύτη, Κουνούπες & Κόκκινα Βράχια" },
  { img: yachtImg, tag: "Premium", title: "Ιδιωτικό Yacht", price: "350", note: "/ημέρα", desc: "Ιδιωτική περιήγηση στο Αιγαίο" },
  { img: villageImg, tag: "All-Inclusive", title: "Αστυπάλαια 7 Ημέρες", price: "599", note: "/άτομο", desc: "Ξενοδοχείο, εκδρομές & μεταφορές" },
];

const testimonials = [
  { name: "Μαρία Κ.", text: "Εξαιρετική εξυπηρέτηση! Όλα ήταν οργανωμένα στο λεπτό. Θα ξαναέρθουμε σίγουρα!", rating: 5 },
  { name: "Thomas W.", text: "Best travel agency in Astypalea. They arranged everything — ferry, hotel, and daily excursions. Highly recommended!", rating: 5 },
  { name: "Δημήτρης Π.", text: "40 χρόνια εμπειρίας φαίνεται! Μας βρήκαν τις καλύτερες τιμές και το τέλειο ξενοδοχείο.", rating: 5 },
];

const galleryImages = [
  { src: beachImg, alt: "Παραλία", label: "Κρυστάλλινα Νερά", span: "col-span-2 row-span-2" },
  { src: castleImg, alt: "Κάστρο", label: "Κάστρο Querini", span: "" },
  { src: yachtImg, alt: "Yacht", label: "Κρουαζιέρες", span: "" },
  { src: villageImg, alt: "Χώρα", label: "Γραφικά Σοκάκια", span: "col-span-2" },
];

const Index = () => {
  return (
    <div>
      {/* ============ HERO + BOOKING ENGINE ============ */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Astypalea aerial" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative z-10 w-full px-5 md:px-6 pt-24 md:pt-32">
          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-10">
            <p className="text-accent font-body text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Ταξιδιωτικό Γραφείο Αστυπάλαιας
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              Ανακαλύψτε την
              <span className="block text-accent">Αστυπάλαια</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-2 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              Ακτοπλοϊκά, αεροπορικά, ξενοδοχεία, κρουαζιέρες & ολοκληρωμένα πακέτα διακοπών.
              Από το 1985 δίπλα στους ταξιδιώτες.
            </p>
          </div>

          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <BookingEngine />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8 text-white/60 text-xs md:text-sm opacity-0 animate-fade-up" style={{ animationDelay: "1s" }}>
            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-accent" /> IATA Certified</span>
            <span className="flex items-center gap-1"><Star size={14} className="text-gold fill-gold" /> 4.9 (500+ κριτικές)</span>
            <span>Από το 1985</span>
            <span>24/7 Υποστήριξη</span>
          </div>
        </div>
      </section>

      {/* ============ SERVICES GRID ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">Υπηρεσίες</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Ό,τι Χρειάζεστε για το <span className="text-gradient-ocean">Ταξίδι σας</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Πλήρεις ταξιδιωτικές υπηρεσίες — κρατήσεις, μεταφορές, εκδρομές & πολλά περισσότερα
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.href}
                className="group relative bg-card rounded-2xl p-5 md:p-6 shadow-soft transition-all duration-500 hover:shadow-elevated hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-ocean opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl bg-secondary flex items-center justify-center mb-3 md:mb-4 transition-colors duration-500 group-hover:bg-white/20">
                    <s.icon className="w-5 h-5 md:w-7 md:h-7 text-primary transition-colors duration-500 group-hover:text-white" />
                  </div>
                  <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-1 transition-colors duration-500 group-hover:text-white">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm transition-colors duration-500 group-hover:text-white/80">
                    {s.desc}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary transition-colors group-hover:text-accent">
                    Περισσότερα <ChevronRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ POPULAR PACKAGES ============ */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">Δημοφιλή Πακέτα</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Επιλέξτε την <span className="text-gradient-ocean">Εμπειρία σας</span>
            </h2>
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
                  <img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {pkg.tag}
                  </span>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{pkg.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.desc}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="font-display text-3xl font-bold text-foreground">€{pkg.price}</span>
                      <span className="text-muted-foreground text-sm">{pkg.note}</span>
                    </div>
                    <Link
                      to="/packages"
                      className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-105"
                    >
                      Κράτηση
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Δείτε όλα τα πακέτα <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">Γιατί Εμάς</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Η Διαφορά <span className="text-gradient-ocean">Astypalea Tours</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {[
              { icon: Shield, stat: "40+", label: "Χρόνια", title: "Αξιοπιστία & Εμπιστοσύνη", desc: "IATA πιστοποίηση, 40+ χρόνια εμπειρίας. Χιλιάδες ικανοποιημένοι πελάτες." },
              { icon: Clock, stat: "24/7", label: "Υποστήριξη", title: "Πάντα Δίπλα σας", desc: "Τηλέφωνο, email & WhatsApp για άμεση εξυπηρέτηση σε κάθε βήμα." },
              { icon: Award, stat: "4.9★", label: "Αξιολόγηση", title: "Τοπική Εμπειρογνωμοσύνη", desc: "Γνωρίζουμε κάθε γωνιά της Αστυπάλαιας. Σας προτείνουμε τα καλύτερα." },
            ].map((b) => (
              <div key={b.title} className="bg-card rounded-2xl p-6 md:p-8 shadow-soft text-center transition-all duration-500 hover:shadow-elevated hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-ocean mx-auto mb-5 flex items-center justify-center">
                  <b.icon className="w-7 h-7 text-white" />
                </div>
                <div className="mb-3">
                  <span className="font-display text-3xl font-bold text-accent">{b.stat}</span>
                  <span className="block text-xs text-muted-foreground mt-1">{b.label}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-16 md:py-24 bg-gradient-ocean">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">Κριτικές</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              Τι Λένε οι Ταξιδιώτες μας
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <p className="text-white font-semibold text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">Γκαλερί</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Εικόνες που <span className="text-gradient-ocean">Μαγεύουν</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[220px]">
            {galleryImages.map((img) => (
              <div key={img.label} className={`group relative rounded-2xl overflow-hidden cursor-pointer ${img.span}`}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/40 transition-colors duration-500 flex items-end p-5">
                  <span className="text-white font-display text-lg font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA CONTACT ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 md:px-6">
          <div className="bg-gradient-ocean rounded-3xl p-8 md:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Έτοιμοι για το Ταξίδι σας;
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Επικοινωνήστε μαζί μας για κρατήσεις, πληροφορίες ή εξατομικευμένα πακέτα. Είμαστε εδώ για εσάς!
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

export default Index;
