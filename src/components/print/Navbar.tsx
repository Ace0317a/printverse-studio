import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Showcase", href: "#showcase" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`container transition-all duration-500 ${scrolled ? "max-w-5xl" : "max-w-6xl"}`}>
        <nav
          className={`flex items-center justify-between rounded-full border border-border/60 px-4 py-2.5 backdrop-blur-xl transition-all duration-500 ${
            scrolled ? "bg-background/80 shadow-soft" : "bg-background/40"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 pl-2">
            <span className="relative inline-flex h-8 w-8 items-center justify-center">
              <span className="absolute h-5 w-5 rounded-full bg-cyan mix-blend-multiply -translate-x-1.5" />
              <span className="absolute h-5 w-5 rounded-full bg-magenta mix-blend-multiply translate-x-1.5" />
              <span className="absolute h-5 w-5 rounded-full bg-yellow mix-blend-multiply translate-y-1.5" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">Inkwell<span className="text-magenta">.</span></span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild variant="default" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
              <a href="#contact">Get a quote</a>
            </Button>
          </div>

          <button
            className="md:hidden rounded-full p-2 hover:bg-muted"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="mt-2 rounded-3xl border border-border/60 bg-background/95 p-3 backdrop-blur-xl md:hidden animate-fade-in">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-medium hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full rounded-2xl bg-foreground text-background hover:bg-foreground/90">
              <a href="#contact" onClick={() => setOpen(false)}>Get a quote</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
