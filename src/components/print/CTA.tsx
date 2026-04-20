import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="container py-24 md:py-32">
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-cmyk p-10 md:p-16 paper-grain shadow-press">
        <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-background/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-foreground/20 blur-3xl" />

        <div className="relative grid items-end gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-bold leading-[0.95] tracking-tight text-background md:text-6xl">
              Ready to put<br />your idea in print?
            </h2>
            <p className="mt-5 max-w-md text-base text-background/85 md:text-lg">
              Tell us what you're making. We'll quote, proof and press — usually faster than you'd expect.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <Button asChild size="lg" className="group h-14 rounded-full bg-foreground px-7 text-base text-background hover:bg-foreground/90">
              <a href="mailto:hello@inkwell.press">
                Request a quote
                <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <div className="flex flex-col gap-2 text-background/90 md:items-end">
              <a href="mailto:hello@inkwell.press" className="flex items-center gap-2 text-sm font-medium hover:text-background">
                <Mail className="h-4 w-4" /> hello@inkwell.press
              </a>
              <a href="tel:+910000000000" className="flex items-center gap-2 text-sm font-medium hover:text-background">
                <Phone className="h-4 w-4" /> +91 00000 00000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
