import { BookOpen, Flag, Image, Layers, Megaphone, Notebook, Sticker, Users } from "lucide-react";

const services = [
  { icon: Flag, title: "Banners & Flexes", desc: "Vinyl, mesh and fabric in any size — weatherproof and vibrant.", tint: "bg-cyan/15", dot: "bg-cyan" },
  { icon: Image, title: "Flyers & Pamphlets", desc: "Sharp offset & digital printing on premium uncoated stock.", tint: "bg-magenta/15", dot: "bg-magenta" },
  { icon: BookOpen, title: "Books & Magazines", desc: "Perfect-bound, saddle-stitched, hardcover — done right.", tint: "bg-yellow/20", dot: "bg-yellow" },
  { icon: Notebook, title: "Notebook Covers", desc: "Embossed, foiled and laminated covers that feel premium.", tint: "bg-cyan/15", dot: "bg-cyan" },
  { icon: Megaphone, title: "Hoardings", desc: "Large-format outdoor prints up to 20 feet wide.", tint: "bg-magenta/15", dot: "bg-magenta" },
  { icon: Users, title: "Standies & Cutouts", desc: "Free-standing display boards with rigid sunboard backing.", tint: "bg-yellow/20", dot: "bg-yellow" },
  { icon: Sticker, title: "Stickers & Labels", desc: "Die-cut, kiss-cut, holographic — any shape, any quantity.", tint: "bg-cyan/15", dot: "bg-cyan" },
  { icon: Layers, title: "Custom & Bulk", desc: "Whatever you dream up — we'll figure out how to print it.", tint: "bg-magenta/15", dot: "bg-magenta" },
];

const Services = () => {
  return (
    <section id="services" className="container py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">What we press</span>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
          One studio.<br />
          <span className="text-gradient-cmyk">Every kind of print.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground md:text-lg">
          From a single business card to a 60-foot hoarding — explore the full menu of formats we craft daily.
        </p>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <article
            key={s.title}
            className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-press"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${s.tint} blur-2xl transition-all duration-700 group-hover:scale-150`} />
            <div className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl ${s.tint}`}>
              <s.icon className="h-6 w-6" strokeWidth={2.2} />
              <span className={`absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full ${s.dot}`} />
            </div>
            <h3 className="relative mt-5 font-display text-xl font-semibold">{s.title}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <div className="relative mt-6 flex items-center text-sm font-semibold text-foreground">
              <span className="border-b border-foreground/30 pb-0.5 transition-all group-hover:border-magenta group-hover:text-magenta">Learn more →</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
