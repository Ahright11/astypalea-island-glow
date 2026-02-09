import { Phone, Mail, MapPin, MessageCircle, Clock, Globe, Shield, Star } from "lucide-react";
import PageHero from "@/components/PageHero";

const contactInfo = [
  { icon: Phone, label: "Τηλέφωνο", value: "+30 22430 61571-572", href: "tel:+302243061571", desc: "Δευτ-Σαβ 09:00-21:00" },
  { icon: MessageCircle, label: "WhatsApp", value: "+30 6945 431 485", href: "https://wa.me/306945431485", desc: "Άμεση επικοινωνία 24/7" },
  { icon: Mail, label: "Email", value: "info@astypaleatours.gr", href: "mailto:info@astypaleatours.gr", desc: "Απάντηση εντός 2 ωρών" },
  { icon: MapPin, label: "Γραφείο", value: "Χώρα Αστυπάλαιας, 85900", href: "#", desc: "Κεντρική πλατεία" },
];

const faqs = [
  { q: "Πώς μπορώ να κάνω κράτηση;", a: "Online μέσω της ιστοσελίδας μας, τηλεφωνικά, μέσω WhatsApp ή email. Επίσης μπορείτε να μας επισκεφτείτε στο γραφείο μας στη Χώρα." },
  { q: "Ποιες μορφές πληρωμής δέχεστε;", a: "Visa, Mastercard, PayPal, τραπεζική κατάθεση και μετρητά στο γραφείο. Δυνατότητα πληρωμής σε δόσεις για πακέτα άνω των €500." },
  { q: "Μπορώ να ακυρώσω την κράτηση;", a: "Δωρεάν ακύρωση έως 48 ώρες πριν για ξενοδοχεία & εκδρομές. Για ακτοπλοϊκά & αεροπορικά ισχύουν οι όροι κάθε εταιρείας." },
  { q: "Προσφέρετε ταξιδιωτική ασφάλεια;", a: "Ναι, προσφέρουμε ολοκληρωμένη ταξιδιωτική ασφάλεια σε συνεργασία με κορυφαίες ασφαλιστικές εταιρείες." },
];

const Contact = () => {
  return (
    <div>
      <PageHero
        badge="Επικοινωνία"
        title="Ας Μιλήσουμε για το"
        highlight="Ταξίδι σας"
        subtitle="Είμαστε εδώ για κρατήσεις, πληροφορίες & εξατομικευμένα πακέτα — 24/7"
      />

      {/* Contact Info + Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            {/* Left - Info */}
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Επικοινωνήστε <span className="text-gradient-ocean">Μαζί μας</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Από το 1985 εξυπηρετούμε ταξιδιώτες με αγάπη και επαγγελματισμό. Επικοινωνήστε μαζί μας
                με όποιον τρόπο σας βολεύει — είμαστε πάντα εδώ για εσάς.
              </p>

              <div className="space-y-5 mb-10">
                {contactInfo.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 transition-colors group-hover:bg-accent">
                      <c.icon className="w-5 h-5 text-primary transition-colors group-hover:text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{c.label}</p>
                      <p className="font-medium text-foreground">{c.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{c.desc}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Working Hours */}
              <div className="bg-muted/50 rounded-2xl p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Clock size={18} className="text-primary" /> Ωράριο Λειτουργίας
                </h3>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Δευτέρα - Παρασκευή</span><span className="font-medium text-foreground">09:00 - 21:00</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Σάββατο</span><span className="font-medium text-foreground">09:00 - 18:00</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Κυριακή</span><span className="font-medium text-foreground">10:00 - 15:00</span></div>
                  <div className="flex justify-between text-accent font-medium mt-2"><span>Καλοκαίρι (Ιούν-Σεπ)</span><span>08:00 - 23:00 καθημερινά</span></div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Φόρμα Επικοινωνίας</h3>
              <p className="text-muted-foreground text-sm mb-6">Απαντάμε σε κάθε μήνυμα εντός 2 ωρών</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Όνομα *</label>
                    <input type="text" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Το όνομά σας" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <input type="email" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="email@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Τηλέφωνο</label>
                    <input type="tel" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="+30..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Υπηρεσία</label>
                    <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                      <option value="">Επιλέξτε...</option>
                      <option>Ακτοπλοϊκά Εισιτήρια</option>
                      <option>Αεροπορικά Εισιτήρια</option>
                      <option>Ξενοδοχεία</option>
                      <option>Πακέτα Διακοπών</option>
                      <option>Εκδρομές</option>
                      <option>Ενοικίαση Σκαφών</option>
                      <option>Γάμοι & Εκδηλώσεις</option>
                      <option>Μεταφορές</option>
                      <option>Γενική Πληροφόρηση</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Μήνυμα *</label>
                  <textarea rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Πείτε μας τι χρειάζεστε..." />
                </div>
                <button type="submit" className="w-full rounded-xl bg-accent text-accent-foreground font-semibold py-3.5 transition-all hover:scale-[1.02] hover:shadow-elevated">
                  Αποστολή Μηνύματος
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Ή καλέστε μας: <a href="tel:+302243061571" className="text-primary font-medium">+30 22430 61571</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">Συχνές Ερωτήσεις</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">FAQ</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-card rounded-2xl p-6 shadow-soft">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-12 bg-gradient-ocean">
        <div className="container mx-auto px-5 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-white/80 text-sm">
            <span className="flex items-center gap-2"><Shield size={18} /> IATA Certified</span>
            <span className="flex items-center gap-2"><Star size={18} className="text-gold" /> 4.9/5 Αξιολόγηση</span>
            <span className="flex items-center gap-2"><Globe size={18} /> Από το 1985</span>
            <span className="flex items-center gap-2"><Clock size={18} /> 24/7 Υποστήριξη</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
