import Image from "next/image";
import Link from "next/link";
import { HowItWorks } from "@/components/HowItWorks";
import { KeyDetails } from "@/components/KeyDetails";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur">
        <div className="mx-auto container-width px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/static/images/molecule.svg" alt="Scale STEM" width={28} height={28} />
            <span className="text-sm tracking-widest uppercase">Scale STEM</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:opacity-80">How it works</a>
            <a href="#program" className="hover:opacity-80">Program</a>
            <a href="#founder" className="hover:opacity-80">Founder</a>
            <a href="#results" className="hover:opacity-80">Results</a>
            <a href="#apply" className="hover:opacity-80">Apply</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="#apply" className="rounded-full px-4 py-2 text-sm font-medium bg-[--accent-green] text-white hover:opacity-90">
              Apply
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/static/images/grid.svg" alt="" fill className="object-cover" />
        </div>
        <div className="relative mx-auto container-width px-6 py-20 md:py-28">
          <h1 className="heading-serif max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Unlock Your Potential. Connect With Mentors. Land Impactful STEM Careers.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            A 6-week mentorship and research accelerator for students—especially from smaller or less-resourced schools—to gain projects, connections, and confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="#apply" className="rounded-full bg-[--accent-blue] px-6 py-3 text-sm font-semibold text-white hover:opacity-90">
              Apply for Cohort 1
            </Link>
            <span className="text-sm text-white/70">Deadline: Dec 15</span>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="mx-auto container-width px-6 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card rounded-2xl p-6">
            <h2 className="text-xl font-semibold">The Problem</h2>
            <p className="mt-3 text-white/80">
              Most STEM students lack opportunities, connections, and research experience—especially those at smaller or less-resourced schools.
            </p>
          </div>
          <div className="card rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Our Solution</h2>
            <p className="mt-3 text-white/80">
              A small-cohort, 6-week mentorship and project experience with professional communication support and hands-on computational research deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works - interactive */}
      <HowItWorks />

      {/* Key Details */}
      <KeyDetails />

      {/* Founder */}
      <section id="founder" className="mx-auto container-width px-6 py-16 md:py-20">
        <div className="grid items-center gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="heading-serif text-2xl font-semibold">Founder’s Story</h2>
            <p className="mt-4 text-white/80">
              I came from a small university and found my way to a national lab PhD. Scale STEM reflects the mentorship and project-based guidance I wished I’d had earlier—clear goals, real research, and support to communicate like a scientist.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-white/80 md:grid-cols-2">
              <li>• National lab PhD researcher</li>
              <li>• Mentored dozens of students</li>
              <li>• Research communication coaching</li>
              <li>• Inclusive, supportive pedagogy</li>
            </ul>
          </div>
          <div className="justify-self-center">
            <Image src="/static/images/founder-placeholder.svg" alt="Founder headshot" width={220} height={220} className="rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Program & Apply */}
      <section id="program" className="mx-auto container-width px-6 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Program Details</h2>
            <ul className="mt-3 space-y-2 text-white/80">
              <li>• Small cohort: max 6 students</li>
              <li>• 6 weeks, weekly mentor sessions</li>
              <li>• Computational research project deliverables</li>
              <li>• Flexible payment with scholarships available</li>
            </ul>
          </div>
          <div id="apply" className="card rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Apply to Cohort 1</h2>
            <p className="mt-2 text-white/80">Submit interest below and we’ll follow up for a quick intro call.</p>
            <a
              href="https://forms.gle/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-[--accent-green] px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Open Application Form
            </a>
            <p className="mt-3 text-xs text-white/60">Deadline: Dec 15 • Limited to 6 students</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto container-width px-6 py-10 text-sm text-white/70">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Image src="/static/images/molecule.svg" alt="Scale STEM" width={22} height={22} />
              <span>Scale STEM</span>
            </div>
            <nav className="flex gap-4">
              <a href="mailto:contact@scalestem.org" className="hover:opacity-80">Contact</a>
              <a href="#" className="hover:opacity-80">X</a>
              <a href="#" className="hover:opacity-80">LinkedIn</a>
            </nav>
            <span>© {new Date().getFullYear()} Scale STEM</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
