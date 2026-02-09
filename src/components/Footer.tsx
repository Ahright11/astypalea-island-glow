import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-ocean py-12 md:py-16 text-primary-foreground">
      <div className="container mx-auto px-5 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-10">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display text-xl font-bold mb-4">Astypalea Tours</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Από το 1985 δίπλα στους ταξιδιώτες. IATA Certified ταξιδιωτικό γραφείο.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-colors hover:bg-primary-foreground/20">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider mb-4 text-primary-foreground/60">Υπηρεσίες</h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li><Link to="/ferries" className="hover:text-primary-foreground transition-colors">Ακτοπλοϊκά</Link></li>
              <li><Link to="/flights" className="hover:text-primary-foreground transition-colors">Αεροπορικά</Link></li>
              <li><Link to="/hotels" className="hover:text-primary-foreground transition-colors">Ξενοδοχεία</Link></li>
              <li><Link to="/packages" className="hover:text-primary-foreground transition-colors">Πακέτα</Link></li>
              <li><Link to="/excursions" className="hover:text-primary-foreground transition-colors">Εκδρομές</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider mb-4 text-primary-foreground/60">Περισσότερα</h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li><Link to="/yachts" className="hover:text-primary-foreground transition-colors">Ενοικίαση Σκαφών</Link></li>
              <li><Link to="/weddings" className="hover:text-primary-foreground transition-colors">Γάμοι</Link></li>
              <li><Link to="/transfers" className="hover:text-primary-foreground transition-colors">Μεταφορές</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Επικοινωνία</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider mb-4 text-primary-foreground/60">Επικοινωνία</h4>
            <ul className="space-y-3 text-primary-foreground/70 text-sm">
              <li className="flex items-center gap-2"><Phone size={14} /> +30 22430 61571</li>
              <li className="flex items-center gap-2"><Mail size={14} /> info@astypaleatours.gr</li>
              <li className="flex items-center gap-2"><MapPin size={14} /> Χώρα, 85900 Αστυπάλαια</li>
            </ul>
            <div className="mt-4 flex items-center gap-2 text-xs text-primary-foreground/50">
              <Shield size={14} /> IATA Certified Agency
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <span>&copy; {new Date().getFullYear()} Astypalea Tours. Όλα τα δικαιώματα κατοχυρωμένα.</span>
          <div className="flex gap-6 text-xs">
            <span>Όροι Χρήσης</span>
            <span>Πολιτική Απορρήτου</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
