import inkSplash from "@/assets/ink-splash.jpg";
import samples from "@/assets/print-samples.jpg";
import banner from "@/assets/banner-print.jpg";
import books from "@/assets/books-stack.jpg";

const Showcase = () => {
  return (
    <section id="showcase" className="container py-24 md:py-32">
      <div className="flex flex-col items-end justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Selected work</span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
            Color you can <em className="not-italic text-gradient-cmyk">touch</em>.
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground md:text-lg">
          A glimpse of the spreads, banners and books that left our press this season.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-12">
        <figure className="relative md:col-span-7 group overflow-hidden rounded-[2rem] shadow-soft">
          <img src={inkSplash} alt="CMYK ink splashes mixing" loading="lazy" width={1536} height={1024} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <figcaption className="absolute bottom-5 left-5 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold backdrop-blur">CMYK Ink Lab · 2025</figcaption>
        </figure>
        <figure className="relative md:col-span-5 group overflow-hidden rounded-[2rem] shadow-soft">
          <img src={samples} alt="Stack of vibrant printed brochures" loading="lazy" width={1280} height={1280} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <figcaption className="absolute bottom-5 left-5 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold backdrop-blur">Brochure Series</figcaption>
        </figure>
        <figure className="relative md:col-span-5 group overflow-hidden rounded-[2rem] shadow-soft">
          <img src={books} alt="Premium hardcover books" loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <figcaption className="absolute bottom-5 left-5 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold backdrop-blur">Hardbound Editions</figcaption>
        </figure>
        <figure className="relative md:col-span-7 group overflow-hidden rounded-[2rem] shadow-soft">
          <img src={banner} alt="Large format banner being printed" loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <figcaption className="absolute bottom-5 left-5 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold backdrop-blur">Outdoor Hoarding · 18ft</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Showcase;
