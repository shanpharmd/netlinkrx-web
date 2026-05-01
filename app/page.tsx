import Image from "next/image";

const services = [
  {
    title: "Remote Order Entry & Verification",
    body: "Centralized medication order review and approval process for life-saving therapies. We deliver patient safety, HIPAA compliance, and quality monitoring across your acute care, infusion, or outpatient clinical needs.",
  },
  {
    title: "24/7 Pharmacist Availability",
    body: "Round-the-clock clinical pharmacist coverage for overnight, weekend, peak times, sudden licensure absences, and emergencies — without the FTE cost.",
  },
  {
    title: "Medication Order Management",
    body: "End-to-end medication review prior to administration. Integrates with 200+ pharmacy information systems and CPOE platforms to ensure compliance and reduce turnaround time.",
  },
  {
    title: "Admission & Discharge Medication Reconciliation",
    body: "Pharmacist-led reconciliation at every transition point, admission, transfer, and discharge, to eliminate discrepancies, reduce readmissions, and improve care continuity.",
  },
  {
    title: "Clinical Program Support",
    body: "Specialized pharmacist expertise in antimicrobial stewardship, transitions of care, discharge counseling, post-discharge follow-up, and provider education.",
  },
];

const coverageScenarios = [
  "Days, nights, and weekends",
  "Weather events and emergency preparedness",
  "EHR transitions and go-live support",
  "Large hospital systems overflow coverage",
  "Peak hours, holidays, and leaves of absence",
  "Emergency Department order processing",
  "Small to mid-size hospital staffing gaps",
];

const howWeWork = [
  {
    step: "01",
    title: "Discover",
    body: "We scope your pharmacy operations, staffing gaps, and coverage windows to map your specific clinical and regulatory needs.",
  },
  {
    step: "02",
    title: "Design",
    body: "We architect a tailored telepharmacy model. Coverage levels, EHR integration, escalation pathways, and compliance protocols.",
  },
  {
    step: "03",
    title: "Deploy",
    body: "Board-certified clinical pharmacists go live within 30 days with continuous support from day one.",
  },
  {
    step: "04",
    title: "Optimize",
    body: "Our pharmacists meet weekly to evaluate coverage and operational efficiency to maximize outcomes and cost efficiencies.",
  },
];

const stats = [
  { value: "<20min", label: "AVG ORDER TURNAROUND" },
  { value: "Up to 70%", label: "HARD COST SAVINGS VS. FTE" },
  { value: "10+", label: "YEARS AVG CLINICAL EXPERIENCE" },
  { value: "24/7", label: "PHARMACIST AVAILABILITY" },
];

const whyNetLinkRx = [
  "W-2 clinical pharmacists, not contractors",
  "10+ years avg hospital pharmacy experience",
  "ASHP-aligned clinical competencies",
  "Proprietary compliance & reporting platform",
  "Deep Critical Access Hospital specialization",
  "Sub-20 minute average order turnaround",
  "Compatible with 60+ pharmacy information systems",
];

const clinicalPrograms = [
  {
    title: "Antimicrobial Stewardship",
    body: "Pharmacist-led ASP programs to optimize antibiotic selection, dosing, and duration to reduce resistance and improve outcomes.",
  },
  {
    title: "Opioid Stewardship",
    body: "Evidence-based protocols to minimize opioid misuse, manage pain relief, and comply with state and federal laws.",
  },
  {
    title: "Medication Reconciliation",
    body: "Comprehensive reconciliation across admission, transfer, and discharge to eliminate discrepancies and prevent adverse drug events.",
  },
  {
    title: "Transitions of Care",
    body: "Pharmacist reviews of transitioning patients to outpatient, reducing 30-day readmissions and improving community continuity.",
  },
  {
    title: "Discharge Counseling",
    body: "Patient-facing pharmacist-led counseling at discharge to improve adherence, reduce errors, and support post-discharge compliance.",
  },
  {
    title: "Post-Discharge Follow-Up",
    body: "Provides outreach to discharged patients to identify medication adherence behaviors, key issues, and assess outcomes.",
  },
  {
    title: "Drug Information & Hotline",
    body: "On demand, on-call drug information support for physicians, nurses, and clinical staff. 24 hours a day, 7 days a week.",
  },
  {
    title: "Provider Education & Support",
    body: "Tailored pharmacist-led education on safe prescribing, formulary, and medication management protocols.",
  },
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Coverage", href: "#coverage" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Clinical Programs", href: "#clinical-programs" },
];

function Check() {
  return (
    <svg
      className="h-5 w-5 flex-shrink-0 text-emerald-600"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.42 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Arrow() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 10a1 1 0 011-1h11.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 11H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2">
            <Image
              src="/netlinkrx-logo.svg"
              alt="NetLinkRx"
              width={140}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-slate-200">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/40 via-white to-white" />
          <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
            <div className="flex justify-center mb-6">
              <Eyebrow>Clinical Telepharmacy</Eyebrow>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
              Remote Pharmacy Care
              <br />
              <span className="text-emerald-600">When It Matters Most</span>
            </h1>
            <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-slate-600">
              NetLinkRx puts board-certified clinical pharmacists inside your
              Critical Access or Rural Hospital. On demand, overnight, or
              around the clock. Zero staffing gaps. Zero compromises on
              patient safety.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Request a Demo <Arrow />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-colors"
              >
                View Services
              </a>
            </div>
            <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Critical Access · Rural Hospital · Specialty Telepharmacy
            </p>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section id="services" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto">
              <Eyebrow>Core Services</Eyebrow>
              <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                Clinical Telepharmacy, Built for{" "}
                <span className="text-emerald-600">Underserved Facilities</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                From order verification to specialized clinical programs,
                NetLinkRx operates as a seamless extension of your pharmacy
                team.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-sm transition-all"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 flex-1">
                    {s.body}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Learn more <Arrow />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIALIZED OFFERING */}
        <section id="coverage" className="bg-slate-50 py-24 md:py-32 border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <Eyebrow>Specialized Offering</Eyebrow>
                <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                  Telepharmacy Serves Facilities{" "}
                  <span className="text-emerald-600">of All Sizes, Day or Night</span>
                </h2>
                <p className="mt-5 text-lg text-slate-600">
                  Both individual Critical Access Hospitals and multi-site
                  rural health systems can benefit from NetLinkRx, not just
                  overnight. We support your pharmacy around the clock with
                  scheduled or on-demand consultation and verification.
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
                >
                  Get a Quote <Arrow />
                </a>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 shadow-lg">
                {/* Pharmacist photo placeholder. Add /public/pharmacist-on-phone.png */}
                <Image
                  src="/pharmacist-on-phone.png"
                  alt="Clinical pharmacist consulting by phone"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-16 grid lg:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                  Coverage Scenarios
                </h3>
                <ul className="mt-6 space-y-3">
                  {coverageScenarios.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check />
                      <span className="text-sm text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                  Remote Order Entry & Verification
                </h3>
                <p className="mt-4 font-semibold text-slate-900 text-lg">
                  Extend your local pharmacy team&apos;s resources.
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  We complete medication order reviews and approvals to drive
                  patient safety, HIPAA compliance, and quality monitoring
                  across your acute care, infusion, and outpatient clinical
                  needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section id="how-we-work" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                How We Work
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                A rigorous, clinician-led approach to deploying remote
                pharmacy services.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {howWeWork.map((s) => (
                <div key={s.step} className="border-t-2 border-slate-200 pt-6">
                  <div className="text-5xl font-semibold text-slate-200 leading-none">
                    {s.step}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REAL RESULTS */}
        <section className="bg-slate-50 py-24 md:py-32 border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                  Real Results,
                  <br />
                  <span className="text-emerald-600">Not Just Theory</span>
                </h2>
                <p className="mt-5 text-lg text-slate-600">
                  NetLinkRx solutions are measured by their impact on patient
                  safety and your bottom line. Our pharmacists average 10+
                  years of clinical hospital experience.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-8">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-4xl md:text-5xl font-semibold text-emerald-600">
                        {s.value}
                      </div>
                      <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
                >
                  Get Your Custom Quote Today <Arrow />
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Why NetLinkRx?
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                    Why Us
                  </span>
                </div>
                <ul className="mt-6 space-y-4">
                  {whyNetLinkRx.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check />
                      <span className="text-sm text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CLINICAL PROGRAMS */}
        <section id="clinical-programs" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto">
              <Eyebrow>Clinical Programs</Eyebrow>
              <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                Clinical Expertise That Extends{" "}
                <span className="text-emerald-600">Beyond Medication Orders</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                Our pharmacists hold specialized training and advanced
                degrees. We help you design and manage clinical programs that
                move the dial on patient care.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clinicalPrograms.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-sm transition-all"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-slate-50 py-24 md:py-32 border-t border-slate-200">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center">
              <Eyebrow>Get Started</Eyebrow>
              <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                Does Your Pharmacy Need{" "}
                <span className="text-emerald-600">to Do More With Less?</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                Tell us about your facility and coverage needs. We&apos;ll
                respond within one business day with a tailored telepharmacy
                proposal.
              </p>
            </div>

            <form className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-slate-700">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Dr. Jane Smith"
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="title" className="block text-xs font-semibold uppercase tracking-widest text-slate-700">
                    Title *
                  </label>
                  <input
                    id="title"
                    type="text"
                    required
                    placeholder="Director of Pharmacy"
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-slate-700">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@hospital.com"
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="facility" className="block text-xs font-semibold uppercase tracking-widest text-slate-700">
                    Hospital / Facility *
                  </label>
                  <input
                    id="facility"
                    type="text"
                    required
                    placeholder="Community Medical Center"
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-slate-700">
                  Message / Coverage Notes
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your current staffing, challenges, coverage hours needed, and facility size..."
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Send Message <Arrow />
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-md">
              <Image
                src="/netlinkrx-logo.svg"
                alt="NetLinkRx"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
              <p className="mt-4 text-sm text-slate-600">
                Clinical Telepharmacy for Critical Access &amp; Rural
                Hospitals. A NABP-Compliant LLC.
              </p>
            </div>
            <nav className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500">
            <p>© 2026 NetLinkRx. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-700 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-slate-700 transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
