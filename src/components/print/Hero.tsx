import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroScene from "./HeroScene";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Color blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan/40 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-10 h-80 w-80 rounded-full bg-magenta/40 blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-yellow/50 blur-3xl animate-blob" style={{ animationDelay: "-8s" }} />
      </div>

      <div className="container grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7 animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-magenta" />
            Press-grade color · 24h turnaround
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]">
            We print <span className="text-gradient-cmyk">everything</span>
            <br />you can imagine.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Banners, flyers, flexes, books, notebook covers, hoardings, standies — bold ideas pressed onto paper, vinyl, fabric and more. Crafted with obsessive color precision.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="group h-14 rounded-full bg-foreground px-7 text-base text-background hover:bg-foreground/90">
              <a href="#contact">
                Start a project
                <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-2 px-7 text-base">
              <a href="#services">Explore services</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div><span className="font-display text-2xl font-bold text-foreground">12k+</span> orders printed</div>
            <div className="h-4 w-px bg-border" />
            <div><span className="font-display text-2xl font-bold text-foreground">98%</span> on-time delivery</div>
            <div className="h-4 w-px bg-border" />
            <div><span className="font-display text-2xl font-bold text-foreground">15</span> years pressing</div>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative h-[420px] w-full md:h-[520px]">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-paper shadow-press paper-grain" />
            <div className="absolute inset-0">
              <HeroScene />
            </div>
            {/* Floating label chips */}
            <div className="absolute left-4 top-6 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold shadow-soft backdrop-blur animate-float">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-cyan" />C 100
            </div>
            <div className="absolute right-6 top-20 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold shadow-soft backdrop-blur animate-float" style={{ animationDelay: "-2s" }}>
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-magenta" />M 87
            </div>
            <div className="absolute bottom-10 left-10 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold shadow-soft backdrop-blur animate-float" style={{ animationDelay: "-4s" }}>
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-yellow" />Y 64
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
