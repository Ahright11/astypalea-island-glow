import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Ship, Plane, Hotel, Package, Sailboat, Heart, MapPin, Bus, Phone } from "lucide-react";

const services = [
  { label: "Ακτοπλοϊκά Εισιτήρια", href: "/ferries", icon: Ship },
  { label: "Αεροπορικά Εισιτήρια", href: "/flights", icon: Plane },
  { label: "Ξενοδοχεία", href: "/hotels", icon: Hotel },
  { label: "Πακέτα Διακοπών", href: "/packages", icon: Package },
  { label: "Εκδρομές & Δραστηριότητες", href: "/excursions", icon: MapPin },
  { label: "Ενοικίαση Σκαφών", href: "/yachts", icon: Sailboat },
  { label: "Γάμοι & Εκδηλώσεις", href: "/weddings", icon: Heart },
  { label: "Μεταφορές", href: "/transfers", icon: Bus },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  const showTransparent = isHome && !scrolled && !menuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showTransparent
          ? "bg-transparent py-4 md:py-5"
          : "bg-white/95 backdrop-blur-md shadow-soft py-3"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span
            className={`font-display text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
              showTransparent ? "text-white" : "text-primary"
            }`}
          >
            Astypalea Tours
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-300 hover:text-accent ${
                showTransparent ? "text-white/90" : "text-foreground"
              }`}
            >
              Υπηρεσίες <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                <div className="bg-white rounded-2xl shadow-elevated border border-border/50 p-3 min-w-[320px] grid grid-cols-2 gap-1">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-foreground hover:bg-secondary transition-colors"
                    >
                      <s.icon size={16} className="text-primary shrink-0" />
                      <span>{s.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/packages"
            className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-accent ${
              showTransparent ? "text-white/90" : "text-foreground"
            }`}
          >
            Πακέτα
          </Link>
          <Link
            to="/excursions"
            className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-accent ${
              showTransparent ? "text-white/90" : "text-foreground"
            }`}
          >
            Εκδρομές
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-accent ${
              showTransparent ? "text-white/90" : "text-foreground"
            }`}
          >
            Επικοινωνία
          </Link>

          <div className="flex items-center gap-3 ml-2">
            <a
              href="tel:+302243061571"
              className={`flex items-center gap-1.5 text-sm font-medium ${
                showTransparent ? "text-white/80" : "text-muted-foreground"
              }`}
            >
              <Phone size={14} />
              22430 61571
            </a>
            <Link
              to="/contact"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all duration-300 hover:shadow-elevated hover:scale-105"
            >
              Κράτηση
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            showTransparent ? "text-white" : "text-foreground"
          }`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg shadow-elevated border-t border-border/30 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col px-5 py-4 gap-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-3 pt-2 pb-1">
              Υπηρεσίες
            </p>
            {services.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="flex items-center gap-3 text-foreground font-medium py-2.5 px-3 rounded-xl hover:bg-secondary transition-colors"
              >
                <s.icon size={18} className="text-primary" />
                {s.label}
              </Link>
            ))}
            <div className="border-t border-border/50 my-2" />
            <Link to="/packages" className="text-foreground font-medium py-2.5 px-3 rounded-xl hover:bg-secondary">
              Πακέτα Διακοπών
            </Link>
            <Link to="/excursions" className="text-foreground font-medium py-2.5 px-3 rounded-xl hover:bg-secondary">
              Εκδρομές
            </Link>
            <Link to="/contact" className="text-foreground font-medium py-2.5 px-3 rounded-xl hover:bg-secondary">
              Επικοινωνία
            </Link>
            <div className="border-t border-border/50 my-2" />
            <a
              href="tel:+302243061571"
              className="flex items-center gap-2 text-primary font-semibold py-2.5 px-3"
            >
              <Phone size={16} /> +30 22430 61571
            </a>
            <Link
              to="/contact"
              className="rounded-xl bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground mt-1"
            >
              Online Κράτηση
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
