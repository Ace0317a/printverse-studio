const steps = [
  { n: "01", title: "Brief & quote", desc: "Tell us the format, quantity and deadline. You'll get a quote in under an hour.", color: "from-cyan to-cyan/40" },
  { n: "02", title: "Design proof", desc: "Send artwork or let our team design it. We share a digital proof for your sign-off.", color: "from-magenta to-magenta/40" },
  { n: "03", title: "Press & finish", desc: "Offset, digital or large-format presses run your job. Cutting, binding, lamination — all in-house.", color: "from-yellow to-yellow/40" },
  { n: "04", title: "Doorstep delivery", desc: "Carefully packed and delivered, on time, every time. Pickup also available.", color: "from-foreground to-foreground/40" },
];

const Process = () => {
  return (
    <section id="process" className="relative overflow-hidden bg-foreground py-24 text-background md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-cyan blur-3xl" />
        <div className="absolute right-10 bottom-10 h-64 w-64 rounded-full bg-magenta blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-background/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-background/70">How it works</span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
            From idea to ink<br />in <span className="text-yellow">four steps</span>.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative rounded-3xl border border-background/10 bg-background/5 p-7 backdrop-blur-sm transition-all duration-500 hover:bg-background/10"
            >
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} font-display text-lg font-bold text-foreground`}>
                {s.n}
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/70">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-background/20 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
