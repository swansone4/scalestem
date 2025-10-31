import Image from "next/image";
import Link from "next/link";
import { HowItWorks } from "@/components/HowItWorks";
import { KeyDetails } from "@/components/KeyDetails";
import { QuoteRotator } from "@/components/QuoteRotator";

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
            <a href="#about" className="hover:opacity-80">About Me</a>
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
            <div className="mt-4 border-t border-white/10 pt-4">
              <QuoteRotator />
            </div>
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

      {/* About Me */}
      <section id="about" className="mx-auto container-width px-6 py-16 md:py-20">
        <div className="grid items-center gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="heading-serif text-2xl font-semibold">About Me</h2>
            <div className="heading-serif mt-4 text-white/85 leading-relaxed">
              <p>
                I nearly flunked out of my physics degree at a small state university in 2021. But through a combination of grit, late nights, and sheer persistence, I landed a research opportunity at Oak Ridge National Laboratory less than a year later. That break changed everything—it led to another internship at the National Institute of Standards and Technology, and ultimately to a PhD program at the University of Florida.
              </p>
              <p className="mt-4">
                Having navigated this non-traditional, often uncertain path myself, I’m now dedicated to helping other students who find themselves lost, overlooked, or underestimated in STEM—because I know, firsthand, how transformative the right mentorship and opportunity can be.
              </p>
            </div>

            <div className="mt-6 max-w-md">
              <div className="card rounded-xl p-5 heading-serif text-xs md:text-sm leading-snug text-white/85 space-y-3">
                <div>
                  <p className="font-semibold">Ph.D. Student, Nuclear Engineering</p>
                  <p>University of Florida, Gainesville, FL (2024–Present)</p>
                </div>
                <hr className="border-white/10" />
                <div>
                  <p className="font-semibold">Research Fellow, Oak Ridge National Laboratory</p>
                  <p>Nuclear Physics Eastern Tennessee Fellowship (2023–2024)</p>
                </div>
                <hr className="border-white/10" />
                <div>
                  <p className="font-semibold">SURF Research Fellow, National Institute of Standards and Technology</p>
                  <p>Core loading optimization and criticality safety (Summer 2024)</p>
                </div>
                <hr className="border-white/10" />
                <div>
                  <p className="font-semibold">B.S., Physics</p>
                  <p>Montclair State University, NJ (2021–2025)</p>
                </div>
                <hr className="border-white/10" />
                <div>
                  <p className="font-semibold">Independent & Group Research Projects:</p>
                  <p>Machine learning for reactor core design • Quantitative NMR techniques • Computational physics</p>
                </div>
                <hr className="border-white/10" />
                <div>
                  <p className="font-semibold">Conference Presenter:</p>
                  <p>Division of Nuclear Physics, National Society of Black Physicists, University Symposia</p>
                </div>
              </div>
            </div>
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
