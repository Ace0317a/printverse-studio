const items = [
  "Banners", "Flyers", "Flex Prints", "Brochures", "Hoardings",
  "Standies", "Notebooks", "Books", "Business Cards", "Posters",
  "Stickers", "Vinyl Wraps", "Pamphlets", "Calendars", "ID Cards",
];

const Marquee = () => {
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-foreground py-6 text-background">
      <div className="mask-fade-r flex">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="font-display text-2xl font-semibold tracking-tight md:text-4xl">{item}</span>
              <span className="inline-block h-2 w-2 rounded-full bg-magenta" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
