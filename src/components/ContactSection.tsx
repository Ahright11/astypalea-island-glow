import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-14 md:py-24 bg-background">
      <div className="container mx-auto px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Left */}
          <div>
            <p className="text-accent font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-2 md:mb-3">
              Επικοινωνία
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Ας Μιλήσουμε για το <span className="text-gradient-ocean">Ταξίδι σας</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-10 leading-relaxed">
              Επικοινωνήστε μαζί μας για κρατήσεις, πληροφορίες ή εξατομικευμένα πακέτα. Είμαστε εδώ για εσάς!
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "Τηλέφωνο", value: "+30 22430 61571", href: "tel:+302243061571" },
                { icon: Mail, label: "Email", value: "info@astypaleatours.gr", href: "mailto:info@astypaleatours.gr" },
                { icon: MessageCircle, label: "WhatsApp", value: "+30 697 123 4567", href: "https://wa.me/306971234567" },
                { icon: MapPin, label: "Διεύθυνση", value: "Χώρα Αστυπάλαιας, 85900", href: "#" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center transition-colors duration-300 group-hover:bg-accent">
                    <c.icon className="w-5 h-5 text-primary transition-colors duration-300 group-hover:text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{c.label}</p>
                    <p className="font-medium text-foreground">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right - form */}
          <div className="bg-card rounded-2xl p-5 md:p-8 shadow-card">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Στείλτε μας Μήνυμα</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Όνομα</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="Το όνομά σας"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Θέμα</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="π.χ. Κράτηση κρουαζιέρας"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Μήνυμα</label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  placeholder="Πείτε μας τι χρειάζεστε..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-accent text-accent-foreground font-semibold py-3.5 transition-all duration-300 hover:shadow-elevated hover:scale-[1.02]"
              >
                Αποστολή Μηνύματος
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
