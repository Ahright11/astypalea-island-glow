import { Link } from "react-router-dom";
import { Bus, Car, Bike, Plane, Ship, MapPin, Clock, Users, CheckCircle2, Phone, Shield, Star } from "lucide-react";
import PageHero from "@/components/PageHero";

const transferTypes = [
  { icon: Plane, title: "Airport Transfer", desc: "Αεροδρόμιο Αστυπάλαιας ↔ Ξενοδοχείο", price: "€15", time: "10-20 λεπτά" },
  { icon: Ship, title: "Port Transfer", desc: "Λιμάνι Αστυπάλαιας ↔ Ξενοδοχείο", price: "€12", time: "5-15 λεπτά" },
  { icon: Bus, title: "Ξενάγηση Νησιού", desc: "Ολοήμερη περιήγηση με μίνι λεωφορείο", price: "€35", time: "6-8 ώρες" },
  { icon: Car, title: "Ιδιωτικός Οδηγός", desc: "VIP μεταφορά με ιδιωτικό αυτοκίνητο", price: "€80", time: "Ημερήσια" },
];

const rentals = [
  { icon: Car, title: "Αυτοκίνητο", options: ["Fiat Panda", "Suzuki Jimny", "Toyota Yaris"], priceFrom: "€30/ημέρα" },
  { icon: Bike, title: "Μοτοσυκλέτα / ATV", options: ["Scooter 125cc", "ATV 250cc", "Μηχανή 300cc"], priceFrom: "€15/ημέρα" },
  { icon: Bus, title: "Μίνι Van", options: ["8-θέσιο", "12-θέσιο", "Με οδηγό"], priceFrom: "€80/ημέρα" },
];

const Transfers = () => {
  return (
    <div>
      <PageHero
        badge="Μεταφορές & Ενοικιάσεις"
        title="Μετακινήσεις στην"
        highlight="Αστυπάλαια"
        subtitle="Airport & port transfers, ενοικίαση οχημάτων & ιδιωτικές μεταφορές"
      />

      {/* Transfer Types */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">Transfers</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Μεταφορές <span className="text-gradient-ocean">Χωρίς Άγχος</span>
            </h2>
            <p className="text-muted-foreground">Σας περιμένουμε στο αεροδρόμιο ή το λιμάνι</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {transferTypes.map((t) => (
              <div key={t.title} className="bg-card rounded-2xl p-6 shadow-soft text-center hover:shadow-elevated transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-ocean mx-auto mb-4 flex items-center justify-center">
                  <t.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{t.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t.desc}</p>
                <div className="flex items-center justify-center gap-3 text-sm mb-4">
                  <span className="flex items-center gap-1 text-muted-foreground"><Clock size={14} /> {t.time}</span>
                </div>
                <div className="font-display text-2xl font-bold text-accent mb-4">{t.price}</div>
                <Link
                  to="/contact"
                  className="block rounded-xl bg-accent text-accent-foreground text-sm font-semibold py-2.5 transition-all hover:scale-105"
                >
                  Κράτηση
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-5 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">Online Κράτηση</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Κλείστε το Transfer σας
              </h2>
            </div>

            <form className="bg-card rounded-2xl p-6 md:p-8 shadow-card space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Τύπος Μεταφοράς</label>
                  <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option>Airport Transfer</option>
                    <option>Port Transfer</option>
                    <option>Ξενάγηση Νησιού</option>
                    <option>Ιδιωτικός Οδηγός</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Κατεύθυνση</label>
                  <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option>Αεροδρόμιο → Ξενοδοχείο</option>
                    <option>Ξενοδοχείο → Αεροδρόμιο</option>
                    <option>Λιμάνι → Ξενοδοχείο</option>
                    <option>Ξενοδοχείο → Λιμάνι</option>
                    <option>Μετ' επιστροφής</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Ημερομηνία</label>
                  <input type="date" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Ώρα Άφιξης</label>
                  <input type="time" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Επιβάτες</label>
                  <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Όνομα ξενοδοχείου / διεύθυνση" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input type="text" placeholder="Αρ. πτήσης / πλοίου (προαιρετικό)" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <button type="submit" className="w-full rounded-xl bg-accent text-accent-foreground font-semibold py-3.5 transition-all hover:scale-[1.02] hover:shadow-elevated">
                Κράτηση Transfer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Rentals */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">Ενοικιάσεις</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ενοικίαση <span className="text-gradient-ocean">Οχημάτων</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rentals.map((r) => (
              <div key={r.title} className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="w-14 h-14 rounded-2xl bg-secondary mx-auto mb-4 flex items-center justify-center">
                  <r.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground text-center mb-4">{r.title}</h3>
                <ul className="space-y-2 mb-6">
                  {r.options.map((o) => (
                    <li key={o} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-accent" /> {o}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <span className="font-display text-lg font-bold text-accent">{r.priceFrom}</span>
                </div>
                <Link
                  to="/contact"
                  className="block mt-4 text-center rounded-xl bg-secondary text-secondary-foreground text-sm font-semibold py-2.5 transition-all hover:bg-accent hover:text-accent-foreground"
                >
                  Κράτηση
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-5 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-center">
            {[
              { icon: Shield, label: "Ασφαλισμένα Οχήματα" },
              { icon: Clock, label: "24/7 Υποστήριξη" },
              { icon: Star, label: "4.9 Αξιολόγηση" },
              { icon: Users, label: "5000+ Μεταφορές/έτος" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-muted-foreground text-sm">
                <t.icon size={18} className="text-primary" />
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transfers;
