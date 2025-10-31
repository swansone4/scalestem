import { Reveal } from "@/components/Reveal";

export function KeyDetails() {
  const items = [
    { label: "Application Deadline", value: "Dec 15" },
    { label: "Cohort Size", value: "Max 6 students" },
    { label: "Session Dates", value: "6 weeks • Jan–Feb" },
    { label: "Format", value: "Weekly mentor sessions + project" },
  ];

  const highlights = [
    "Mentor pairing in your target field",
    "Computational research deliverables",
    "Professional communication training",
  ];

  return (
    <section id="details" className="mx-auto container-width px-6 py-16 md:py-20">
      <Reveal>
        <h2 className="heading-serif text-2xl font-semibold">Key details</h2>
      </Reveal>
      <div className="mt-6 grid gap-6 md:grid-cols-4">
        {items.map((it, idx) => (
          <Reveal key={it.label} delayMs={idx * 60}>
            <div className="card rounded-2xl p-5">
              <p className="text-xs uppercase tracking-widest text-white/60">{it.label}</p>
              <p className="mt-2 text-sm font-medium">{it.value}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {highlights.map((h, idx) => (
          <Reveal key={h} delayMs={idx * 80}>
            <div className="card rounded-xl px-4 py-3 text-sm">{h}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


