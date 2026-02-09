interface PageHeroProps {
  title: string;
  highlight?: string;
  subtitle: string;
  badge?: string;
}

const PageHero = ({ title, highlight, subtitle, badge }: PageHeroProps) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-ocean overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "30px 30px",
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-5 md:px-6 text-center">
        {badge && (
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.25em] mb-3">
            {badge}
          </p>
        )}
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          {title}{" "}
          {highlight && <span className="text-accent">{highlight}</span>}
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
