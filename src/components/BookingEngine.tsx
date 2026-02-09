import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Ship, Plane, Hotel, Package, MapPin, ArrowRight, ArrowLeftRight, Calendar, Users, Search } from "lucide-react";

const tabs = [
  { id: "ferries", label: "Πλοία", icon: Ship },
  { id: "flights", label: "Πτήσεις", icon: Plane },
  { id: "hotels", label: "Ξενοδοχεία", icon: Hotel },
  { id: "packages", label: "Πακέτα", icon: Package },
  { id: "activities", label: "Εκδρομές", icon: MapPin },
];

const BookingEngine = () => {
  const [activeTab, setActiveTab] = useState("ferries");
  const navigate = useNavigate();

  const handleSearch = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Tabs */}
      <div className="flex bg-white/10 backdrop-blur-md rounded-t-2xl border border-white/20 border-b-0 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 min-w-0 flex items-center justify-center gap-1.5 px-3 py-3 md:py-3.5 text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-white text-primary shadow-sm"
                : "text-white/80 hover:text-white hover:bg-white/10"
            } ${tab.id === "ferries" ? "rounded-tl-2xl" : ""} ${tab.id === "activities" ? "rounded-tr-2xl" : ""}`}
          >
            <tab.icon size={16} className="shrink-0" />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Form body */}
      <div className="bg-white rounded-b-2xl shadow-elevated p-4 md:p-5">
        {activeTab === "ferries" && (
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Από</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Ship size={16} className="text-primary shrink-0" />
                <select className="w-full bg-transparent text-sm text-foreground focus:outline-none">
                  <option>Πειραιάς</option>
                  <option>Κάλυμνος</option>
                  <option>Ρόδος</option>
                  <option>Κως</option>
                </select>
              </div>
            </div>
            <div className="hidden md:flex items-end pb-3">
              <ArrowLeftRight size={18} className="text-muted-foreground" />
            </div>
            <div className="flex-1">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Προς</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Ship size={16} className="text-primary shrink-0" />
                <select className="w-full bg-transparent text-sm text-foreground focus:outline-none">
                  <option>Αστυπάλαια</option>
                  <option>Πειραιάς</option>
                  <option>Κάλυμνος</option>
                  <option>Ρόδος</option>
                </select>
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Ημερομηνία</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Calendar size={16} className="text-primary shrink-0" />
                <input type="date" className="w-full bg-transparent text-sm text-foreground focus:outline-none" />
              </div>
            </div>
            <div className="w-full md:w-28">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Επιβάτες</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Users size={16} className="text-primary shrink-0" />
                <select className="w-full bg-transparent text-sm text-foreground focus:outline-none">
                  <option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
                </select>
              </div>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => handleSearch("/ferries")}
                className="w-full md:w-auto rounded-xl bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground flex items-center justify-center gap-2 transition-all hover:shadow-elevated hover:scale-105"
              >
                <Search size={16} /> Αναζήτηση
              </button>
            </div>
          </div>
        )}

        {activeTab === "flights" && (
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Από</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Plane size={16} className="text-primary shrink-0" />
                <select className="w-full bg-transparent text-sm text-foreground focus:outline-none">
                  <option>Αθήνα (ATH)</option>
                  <option>Θεσσαλονίκη (SKG)</option>
                  <option>Ρόδος (RHO)</option>
                  <option>Κως (KGS)</option>
                </select>
              </div>
            </div>
            <div className="hidden md:flex items-end pb-3">
              <ArrowLeftRight size={18} className="text-muted-foreground" />
            </div>
            <div className="flex-1">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Προς</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Plane size={16} className="text-primary shrink-0" />
                <select className="w-full bg-transparent text-sm text-foreground focus:outline-none">
                  <option>Αστυπάλαια (JTY)</option>
                  <option>Αθήνα (ATH)</option>
                  <option>Ρόδος (RHO)</option>
                </select>
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Αναχώρηση</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Calendar size={16} className="text-primary shrink-0" />
                <input type="date" className="w-full bg-transparent text-sm text-foreground focus:outline-none" />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Επιστροφή</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Calendar size={16} className="text-primary shrink-0" />
                <input type="date" className="w-full bg-transparent text-sm text-foreground focus:outline-none" />
              </div>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => handleSearch("/flights")}
                className="w-full md:w-auto rounded-xl bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground flex items-center justify-center gap-2 transition-all hover:shadow-elevated hover:scale-105"
              >
                <Search size={16} /> Αναζήτηση
              </button>
            </div>
          </div>
        )}

        {activeTab === "hotels" && (
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-[2]">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Προορισμός</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Hotel size={16} className="text-primary shrink-0" />
                <select className="w-full bg-transparent text-sm text-foreground focus:outline-none">
                  <option>Αστυπάλαια</option>
                  <option>Χώρα</option>
                  <option>Λιβάδια</option>
                  <option>Αναλίπτη</option>
                  <option>Μαλτεζάνα</option>
                </select>
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Check-in</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Calendar size={16} className="text-primary shrink-0" />
                <input type="date" className="w-full bg-transparent text-sm text-foreground focus:outline-none" />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Check-out</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Calendar size={16} className="text-primary shrink-0" />
                <input type="date" className="w-full bg-transparent text-sm text-foreground focus:outline-none" />
              </div>
            </div>
            <div className="w-full md:w-28">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Δωμάτια</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Users size={16} className="text-primary shrink-0" />
                <select className="w-full bg-transparent text-sm text-foreground focus:outline-none">
                  <option>1</option><option>2</option><option>3</option><option>4+</option>
                </select>
              </div>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => handleSearch("/hotels")}
                className="w-full md:w-auto rounded-xl bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground flex items-center justify-center gap-2 transition-all hover:shadow-elevated hover:scale-105"
              >
                <Search size={16} /> Αναζήτηση
              </button>
            </div>
          </div>
        )}

        {activeTab === "packages" && (
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-[2]">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Τύπος Πακέτου</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Package size={16} className="text-primary shrink-0" />
                <select className="w-full bg-transparent text-sm text-foreground focus:outline-none">
                  <option>Αστυπάλαια All-Inclusive</option>
                  <option>Island Hopping Δωδεκάνησα</option>
                  <option>Ρομαντικό Πακέτο</option>
                  <option>Οικογενειακό Πακέτο</option>
                  <option>Γαμήλιο Ταξίδι</option>
                </select>
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Ημερομηνία</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Calendar size={16} className="text-primary shrink-0" />
                <input type="date" className="w-full bg-transparent text-sm text-foreground focus:outline-none" />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Διάρκεια</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Calendar size={16} className="text-primary shrink-0" />
                <select className="w-full bg-transparent text-sm text-foreground focus:outline-none">
                  <option>3 ημέρες</option><option>5 ημέρες</option><option>7 ημέρες</option><option>14 ημέρες</option>
                </select>
              </div>
            </div>
            <div className="w-full md:w-28">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Άτομα</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Users size={16} className="text-primary shrink-0" />
                <select className="w-full bg-transparent text-sm text-foreground focus:outline-none">
                  <option>2</option><option>3</option><option>4</option><option>5+</option>
                </select>
              </div>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => handleSearch("/packages")}
                className="w-full md:w-auto rounded-xl bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground flex items-center justify-center gap-2 transition-all hover:shadow-elevated hover:scale-105"
              >
                <Search size={16} /> Δείτε Πακέτα
              </button>
            </div>
          </div>
        )}

        {activeTab === "activities" && (
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-[2]">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Δραστηριότητα</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <MapPin size={16} className="text-primary shrink-0" />
                <select className="w-full bg-transparent text-sm text-foreground focus:outline-none">
                  <option>Ημερήσια Κρουαζιέρα</option>
                  <option>Snorkeling & Κατάδυση</option>
                  <option>Ψαρική Εκδρομή</option>
                  <option>Ηλιοβασίλεμα Cruise</option>
                  <option>Πεζοπορία</option>
                  <option>Ξενάγηση Κάστρου</option>
                </select>
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Ημερομηνία</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Calendar size={16} className="text-primary shrink-0" />
                <input type="date" className="w-full bg-transparent text-sm text-foreground focus:outline-none" />
              </div>
            </div>
            <div className="w-full md:w-28">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Άτομα</label>
              <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2.5 bg-background">
                <Users size={16} className="text-primary shrink-0" />
                <select className="w-full bg-transparent text-sm text-foreground focus:outline-none">
                  <option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
                </select>
              </div>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => handleSearch("/excursions")}
                className="w-full md:w-auto rounded-xl bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground flex items-center justify-center gap-2 transition-all hover:shadow-elevated hover:scale-105"
              >
                <Search size={16} /> Αναζήτηση
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingEngine;
