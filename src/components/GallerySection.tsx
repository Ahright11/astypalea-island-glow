import beachImg from "@/assets/beach-astypalea.jpg";
import castleImg from "@/assets/castle-astypalea.jpg";
import yachtImg from "@/assets/yacht-astypalea.jpg";
import villageImg from "@/assets/village-astypalea.jpg";

const images = [
  { src: beachImg, alt: "Παραλία Αστυπάλαιας", label: "Κρυστάλλινα Νερά", span: "col-span-2 row-span-2" },
  { src: castleImg, alt: "Κάστρο Αστυπάλαιας", label: "Κάστρο Querini", span: "" },
  { src: yachtImg, alt: "Ιστιοπλοϊκό", label: "Κρουαζιέρες", span: "" },
  { src: villageImg, alt: "Χώρα Αστυπάλαιας", label: "Γραφικά Σοκάκια", span: "col-span-2" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-14 md:py-24 bg-muted/50">
      <div className="container mx-auto px-5 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <p className="text-accent font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-2 md:mb-3">
            Γκαλερί
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Εικόνες που <span className="text-gradient-ocean">Μαγεύουν</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[220px]">
          {images.map((img) => (
            <div
              key={img.label}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/40 transition-colors duration-500 flex items-end p-5">
                <span className="text-primary-foreground font-display text-lg font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
