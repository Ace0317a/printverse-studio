import { Star } from "lucide-react";

const reviews = [
  { name: "Aarav Mehta", role: "Founder, Bloom Cafe", quote: "The hoarding they printed for our launch turned heads for blocks. Color was insanely accurate.", tint: "bg-cyan/10" },
  { name: "Sara Khan", role: "Marketing Lead, Lyra Co.", quote: "10,000 flyers in 36 hours, zero quality compromise. Inkwell is our secret weapon.", tint: "bg-magenta/10" },
  { name: "Vikram Rao", role: "Author", quote: "My poetry book finally feels like the object I imagined. The paper, the binding — chef's kiss.", tint: "bg-yellow/15" },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="container py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Loved by makers</span>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
          Words from<br />the people we press for.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <article key={r.name} className={`relative overflow-hidden rounded-3xl border border-border/60 ${r.tint} p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-press`}>
            <div className="flex gap-0.5 text-yellow">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow stroke-yellow" />
              ))}
            </div>
            <p className="mt-5 font-display text-lg leading-snug text-foreground">"{r.quote}"</p>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground font-display font-semibold text-background">
                {r.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
