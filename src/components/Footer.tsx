import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-ocean py-10 md:py-16 text-primary-foreground">
      <div className="container mx-auto px-5 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-8 md:mb-12">
          <div className="col-span-2 md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">Astypalea Tours</h3>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Από το 1985 δίπλα στους ταξιδιώτες. Ανακαλύψτε την Αστυπάλαια & τον κόσμο μαζί μας.
              Αξιοπιστία, εμπειρία & αγάπη για το ταξίδι.
            </p>
            <div className="flex gap-4 mt-6">
              {[Facebook, Instagram, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-colors duration-300 hover:bg-primary-foreground/20"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/60">
              Υπηρεσίες
            </h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              {["Ακτοπλοϊκά", "Αεροπορικά", "Ξενοδοχεία", "Κρουαζιέρες", "Γάμοι"].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-primary-foreground transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/60">
              Επικοινωνία
            </h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li>+30 22430 61571</li>
              <li>info@astypaleatours.gr</li>
              <li>Χώρα Αστυπάλαιας, 85900</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Astypalea Tours. Όλα τα δικαιώματα κατοχυρωμένα.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
