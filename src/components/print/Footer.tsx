const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background/60 py-12 backdrop-blur">
      <div className="container grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <a href="#top" className="flex items-center gap-2">
            <span className="relative inline-flex h-8 w-8 items-center justify-center">
              <span className="absolute h-5 w-5 rounded-full bg-cyan mix-blend-multiply -translate-x-1.5" />
              <span className="absolute h-5 w-5 rounded-full bg-magenta mix-blend-multiply translate-x-1.5" />
              <span className="absolute h-5 w-5 rounded-full bg-yellow mix-blend-multiply translate-y-1.5" />
            </span>
            <span className="font-display text-lg font-bold">Inkwell<span className="text-magenta">.</span></span>
          </a>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A full-stack printing studio for banners, books and everything in between. Press-grade quality, on time, every time.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">Studio</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#services" className="hover:text-magenta">Services</a></li>
            <li><a href="#showcase" className="hover:text-magenta">Showcase</a></li>
            <li><a href="#process" className="hover:text-magenta">Process</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">Visit</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Press Lane 24</li>
            <li>Mon–Sat · 9am–8pm</li>
            <li>hello@inkwell.press</li>
          </ul>
        </div>
      </div>
      <div className="container mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} Inkwell Press. All rights reserved.</span>
        <span>Pressed with cyan, magenta, yellow & black.</span>
      </div>
    </footer>
  );
};

export default Footer;
