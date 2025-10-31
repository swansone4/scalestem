import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Typewriter } from "@/components/Typewriter";

export function HowItWorks() {
  const steps = [
    {
      title: "Career Path Identification",
      desc: "Start with our personalized questionnaire to map your goals and background.",
      sub: "We audit your grades, major, and mission.",
      icons: ["gpa", "degree", "path"],
    },
    {
      title: "Mentor Pairing",
      desc: "You’re matched with a mentor in your target field who’s been where you want to go.",
      icons: ["mentor"],
    },
    {
      title: "Video Module Advancement",
      desc: "Embedded modules teach research skills, workflows, and application secrets.",
      icons: ["video"],
    },
    {
      title: "Project Experience",
      desc: "Apply your learning to a real research project with regular feedback.",
      icons: ["project"],
    },
    {
      title: "Communication Accelerator",
      desc: "Master professional communication with weekly reports and presentation coaching.",
      icons: ["comm"],
    },
    {
      title: "Research Symposium",
      desc: "Present your work at a virtual symposium — the capstone experience.",
      icons: ["symposium"],
    },
  ];

  const projects = [
    { name: "Monte Carlo Neutron Transport for Shielding" },
    { name: "Rocket Trajectory Optimization with SciPy" },
    { name: "Graph Neural Networks for Materials Discovery" },
    { name: "AI-Driven Energy Load Forecasting" },
    { name: "Visualization of Magnetic Field Turbulence" },
  ];

  const iconSrc = (key: string) => `/static/images/icon-${key}.svg`;

  return (
    <section id="how" className="mx-auto container-width px-6 py-16 md:py-20">
      <Reveal>
        <h2 className="text-2xl font-semibold">How it works</h2>
      </Reveal>

      {/* Step flow - horizontally on md+, stacked on mobile */}
      <div className="mt-8 grid gap-6 md:grid-cols-6">
        {steps.map((s, idx) => (
          <Reveal key={s.title} delayMs={idx * 60}>
            <div className="card h-full rounded-2xl p-5">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
                {idx + 1}
              </div>
              <div className="flex items-center gap-2">
                {s.icons.map((k) => (
                  <Image key={k} src={iconSrc(k)} alt="" width={20} height={20} />
                ))}
              </div>
              <h3 className="mt-3 text-sm font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/80">{s.desc}</p>
              {s.sub ? (
                <p className="mt-1 text-xs text-white/60">{s.sub}</p>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Project tiles */}
      <div className="mt-12 text-center">
        <Reveal>
          <h3 className="text-lg font-semibold heading-serif">Build Your Research Project</h3>
        </Reveal>
        <Typewriter
          className="mt-2 mx-auto block text-base text-white/80"
          items={projects.map((p) => p.name)}
        />
      </div>

      {/* Removed extra sales/FAQ content per requirements */}
    </section>
  );
}


