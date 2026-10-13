"use client";

import { useState, useEffect, useRef } from "react";

/* ---------- CONTACT (from feedinguniversities.com) ---------- */
const PHONE = "+919140309999";
const WHATSAPP =
  "https://wa.me/919140309999?text=Hello%20Feeding%20Universities%2C%20I%20want%20free%20counselling%20to%20choose%20an%20online%20degree%20for%20my%20goal.";

/* ---------- SHARED ---------- */
const steps = (a, b) => [
  { t: "Verify recognition", d: "Check UGC-DEB entitlement for that program and session." },
  { t: "Check eligibility", d: a },
  { t: "Compare fit", d: b },
  { t: "Apply officially", d: "Use the university's official admission process." },
];

/* ---------- DATA ---------- */
const goalsData = {
  "working-professionals": {
    label: "Working Professionals",
    short: "Working",
    emoji: "💼",
    gradient: "from-blue-700 via-blue-600 to-yellow-400",
    title: "Working Professionals",
    subtitle: "Study online without leaving your job.",
    desc: "Find programs with flexible schedules, recorded classes and weekend options, so your degree grows your career instead of pausing it.",
    stats: [
      { v: "Flexible", l: "Best for" },
      { v: "8 – 12 hrs/wk", l: "Study time" },
      { v: "Schedule fit", l: "Top priority" },
      { v: "Live-only classes", l: "Watch out for" },
    ],
    specs: ["Recorded lectures", "Weekend batches", "Flexible exams", "EMI options", "Peer network", "Applied projects"],
    overview: "Your biggest limit is time, not ability. Pick a program whose schedule and exam model you can actually keep up with for 1 to 3 years.",
    points: [
      "Live classes with recordings if you miss a session",
      "Exam dates and assignment deadlines that avoid work peaks",
      "Weekend or evening batch options",
      "EMI that fits your monthly budget",
      "Employer or promotion value of the degree",
      "Recognition and session validity must be verified",
    ],
    cards: [
      ["⏱️", "Time and schedule", "Ask how many hours per week are realistic, and what happens if you miss a live class."],
      ["💳", "Budget and EMI", "Check total fee, EMI type and whether your employer offers education support."],
      ["📜", "Recognition", "Your employer may check the degree. Confirm UGC-DEB entitlement before paying."],
    ],
    roadmap: [
      { t: "Protect your time", d: "Block fixed weekly study hours before you enrol." },
      { t: "Use work as projects", d: "Pick assignments you can apply directly to your role." },
      { t: "Tell your manager", d: "Link the degree to a promotion or role change you are aiming for." },
    ],
    steps: steps("Confirm your qualification and any experience rules.", "Schedule, exam model, fees and EMI."),
    faq: [
      { q: "Can I really study while working full time?", a: "Yes, many people do. Choose recorded classes, flexible exam windows and a realistic weekly study plan." },
      { q: "Will my employer accept an online degree?", a: "Recognised, UGC-DEB entitled degrees are generally accepted, but employer policies vary. Ask your HR to be sure." },
      { q: "Which is better, Executive MBA or Online MBA?", a: "Executive MBA suits 5+ years of experience and leadership goals. Online MBA suits wider experience ranges." },
    ],
  },
  "fresh-graduates": {
    label: "Fresh Graduates",
    short: "Freshers",
    emoji: "🎓",
    gradient: "from-blue-800 via-blue-600 to-yellow-400",
    title: "Fresh Graduates",
    subtitle: "Turn a new degree into a clear first step.",
    desc: "Compare programs that add job-ready skills, projects and a stronger profile right after graduation.",
    stats: [
      { v: "Skills + degree", l: "Best for" },
      { v: "1 – 2 Yrs", l: "Typical length" },
      { v: "Projects", l: "Top priority" },
      { v: "Theory-only", l: "Watch out for" },
    ],
    specs: ["Foundation support", "Internship-style projects", "Career services", "Specializations", "Portfolio", "Certifications"],
    overview: "With little work experience, projects and skills carry more weight than the title. Choose programs that make you build things.",
    points: [
      "Projects, capstones and internship-style work",
      "Foundation modules for areas new to you",
      "Specialization that matches a job family",
      "Career support scope (assistance, not guaranteed placement)",
      "Cost you can handle without pressure",
      "Recognition and session validity must be verified",
    ],
    cards: [
      ["🧪", "Projects", "Ask for sample projects and portfolio work, not just the syllabus."],
      ["🎯", "Direction", "Pick a specialization tied to a role you can name today."],
      ["📜", "Recognition", "Confirm UGC-DEB entitlement before you pay the first installment."],
    ],
    roadmap: [
      { t: "Choose a direction", d: "Pick one job family and match your specialization to it." },
      { t: "Build proof", d: "Keep projects and certificates in a simple portfolio." },
      { t: "Add experience", d: "Look for internships or part-time work next to your studies." },
    ],
    steps: steps("Confirm graduation subject and marks.", "Projects, fees and career support."),
    faq: [
      { q: "Should I work first or study first?", a: "Both work. If you can find a job, online study alongside it is cost-effective. If not, choose a skills-heavy program." },
      { q: "Will an online degree help me get a first job?", a: "It helps when it is recognised and paired with projects. Skills and portfolio often decide the outcome." },
      { q: "Is career support a job guarantee?", a: "No. Support is assistance such as resume help and interview prep, not a guaranteed placement." },
    ],
  },
  "career-switchers": {
    label: "Career Switchers",
    short: "Switchers",
    emoji: "🔄",
    gradient: "from-blue-900 via-blue-700 to-yellow-500",
    title: "Career Switchers",
    subtitle: "Move into a new field with a plan, not a gamble.",
    desc: "Compare programs that open a new field, with bridge content, hands-on projects and honest guidance on eligibility.",
    stats: [
      { v: "New field", l: "Best for" },
      { v: "1 – 2 Yrs", l: "Typical length" },
      { v: "Bridge + projects", l: "Top priority" },
      { v: "Fast-track claims", l: "Watch out for" },
    ],
    specs: ["Bridge courses", "Hands-on labs", "Mentoring", "Portfolio", "Transferable skills", "Certifications"],
    overview: "A switch works best when you reuse what you already know. Choose a program that fills gaps and helps you show proof in the new field.",
    points: [
      "Bridge modules if your background is different",
      "Eligibility rules for non-matching graduations",
      "Labs and projects you can show to recruiters",
      "Mentor or industry-expert sessions",
      "Realistic timeline with a job or savings buffer",
      "Recognition and session validity must be verified",
    ],
    cards: [
      ["🌉", "Bridge support", "Ask what the program does for students from a different background."],
      ["🧰", "Transferable skills", "List what you already know, then pick a field that values it."],
      ["⚠️", "Reality check", "Be careful with claims of fast switches or guaranteed jobs."],
    ],
    roadmap: [
      { t: "Map your skills", d: "Write what from your current job carries into the new field." },
      { t: "Learn and build", d: "Build two or three real projects while you study." },
      { t: "Bridge the gap", d: "Aim first for adjacent roles that let you step across gradually." },
    ],
    steps: steps("Check whether non-matching graduates are accepted.", "Bridge content, projects and fees."),
    faq: [
      { q: "Can I switch to tech without a tech degree?", a: "Often yes, but you may need a bridge course or groundwork in maths and programming. Check each university's rule." },
      { q: "How long does a switch take?", a: "Usually longer than the program itself, because you also need projects and interviews. Plan for a buffer." },
      { q: "Is a degree enough?", a: "Rarely on its own. Projects, skills and networking matter as much as the certificate." },
    ],
  },
  "govt-job-aspirants": {
    label: "Government Job Aspirants",
    short: "Govt Jobs",
    emoji: "🏛️",
    gradient: "from-blue-950 via-blue-700 to-yellow-400",
    title: "Government Job Aspirants",
    subtitle: "Get the graduation you need while you prepare.",
    desc: "Many exams ask for graduation first. Compare low-cost, flexible degrees that leave time for exam preparation.",
    stats: [
      { v: "Eligibility", l: "Best for" },
      { v: "Low cost", l: "Top priority" },
      { v: "Any stream", l: "Common rule" },
      { v: "Exam notification", l: "Always check" },
    ],
    specs: ["Low fees", "Flexible exams", "Any-stream entry", "Subject choice", "Self-paced study", "Prep-friendly schedule"],
    overview: "A degree is only one part of eligibility. Age limits, subjects and degree acceptance are set by each exam body, so check the notification.",
    points: [
      "Recognition and session validity for the degree",
      "Whether the exam you want accepts online-mode degrees",
      "Subject that matches the exam syllabus (if relevant)",
      "Low total fee and flexible exam dates",
      "Time left for daily exam preparation",
      "Official notification as the final authority",
    ],
    cards: [
      ["📄", "Read the notification", "Eligibility, degree rules and age limits come from the recruiter, not the university."],
      ["💸", "Keep it affordable", "Choose a low-cost degree so preparation stays your main focus."],
      ["🗓️", "Protect prep time", "Pick exam dates and workload that leave daily study hours free."],
    ],
    roadmap: [
      { t: "Pick your exam", d: "Read the latest notification and note degree and age rules." },
      { t: "Choose a degree", d: "Select the lowest-hassle recognised degree that fits." },
      { t: "Plan both tracks", d: "Run degree study and exam prep on one weekly timetable." },
    ],
    steps: steps("Match degree level and subject to the exam notification.", "Fee, schedule and exam acceptance."),
    faq: [
      { q: "Is an online degree accepted for government jobs?", a: "It depends on the recruiter and degree recognition. Check the exam notification and the university's UGC-DEB entitlement." },
      { q: "Which stream is best for government exams?", a: "Many exams accept any stream. Pick a subject you can manage alongside preparation, unless the post needs a specific one." },
      { q: "Can I do a degree and prepare at once?", a: "Yes, with a low-load program and a fixed weekly plan. Many aspirants choose BA or B.Com for this reason." },
    ],
  },
};

const KEYS = Object.keys(goalsData);

/* ---------- SMALL UI PIECES ---------- */
function SectionHead({ title, sub }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-extrabold tracking-tight text-blue-950 sm:text-3xl">
        {title}
        <span className="mt-2 block h-1 w-14 rounded-full bg-yellow-400" />
      </h2>
      {sub && <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">{sub}</p>}
    </div>
  );
}

/* ---------- PAGE ---------- */
export default function ExploreByGoalPage() {
  const [active, setActive] = useState("working-professionals");
  const [fading, setFading] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const tabRefs = useRef({});

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (goalsData[hash]) setActive(hash);
  }, []);

  const change = (key) => {
    if (key === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(key);
      setOpenFaq(0);
      window.history.replaceState(null, "", `#${key}`);
      setFading(false);
    }, 180);
  };

  const onKey = (e, i) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = KEYS[(i + (e.key === "ArrowRight" ? 1 : -1) + KEYS.length) % KEYS.length];
    change(next);
    tabRefs.current[next]?.focus();
  };

  const toTop = (k) => {
    change(k);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const g = goalsData[active];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className={`relative overflow-hidden bg-linear-to-br ${g.gradient} transition-all duration-500`}>
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-blue-950/30 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-12 sm:pt-16 lg:px-8">
          <div className={`mx-auto max-w-3xl text-center text-white transition-all duration-200 ${fading ? "translate-y-2 opacity-0" : "opacity-100"}`}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
              <span className="text-lg">{g.emoji}</span> Explore by goal
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight drop-shadow sm:text-5xl lg:text-6xl">{g.title}</h1>
            <p className="mt-4 text-lg font-medium text-yellow-200">{g.subtitle}</p>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-blue-50 sm:text-base">{g.desc}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#overview" className="rounded-xl bg-yellow-400 px-6 py-3 text-sm font-bold text-blue-950 shadow-lg shadow-yellow-500/30 transition hover:bg-yellow-300">
                What matters most
              </a>
              <a href="#compare" className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
                Compare all goals
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY TABS */}
      <div className="sticky top-0 z-30 -mt-10 px-4">
        <div role="tablist" aria-label="Goals" className="mx-auto grid max-w-3xl grid-cols-4 gap-1.5 rounded-2xl border border-blue-100 bg-white/95 p-1.5 shadow-xl backdrop-blur">
          {KEYS.map((key, i) => {
            const d = goalsData[key];
            const on = key === active;
            return (
              <button
                key={key}
                ref={(el) => (tabRefs.current[key] = el)}
                role="tab"
                aria-selected={on}
                tabIndex={on ? 0 : -1}
                onKeyDown={(e) => onKey(e, i)}
                onClick={() => change(key)}
                className={`flex flex-col items-center gap-0.5 rounded-xl px-1 py-2.5 text-xs font-bold transition sm:flex-row sm:justify-center sm:gap-2 sm:px-2 sm:text-sm ${
                  on ? "bg-blue-700 text-white shadow-md ring-2 ring-yellow-400" : "text-slate-600 hover:bg-blue-50"
                }`}
              >
                <span className="text-lg">{d.emoji}</span>
                <span className="sm:hidden">{d.short}</span>
                <span className="hidden text-center leading-tight sm:inline">{d.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <main className={`transition-opacity duration-200 ${fading ? "opacity-0" : "opacity-100"}`}>
        {/* QUICK FACTS */}
        <section className="mx-auto max-w-6xl px-4 pt-10 lg:px-8">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {g.stats.map((s) => (
              <div key={s.l} className="rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-sm">
                <div className="text-lg font-extrabold text-blue-700 sm:text-xl">{s.v}</div>
                <div className="mt-1 text-xs font-medium text-slate-500">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* OVERVIEW */}
        <section id="overview" className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
          <SectionHead title={`What matters most for ${g.label}`} sub={g.overview} />
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="rounded-3xl bg-blue-950 p-6 text-white sm:p-8 lg:col-span-3">
              <h3 className="text-lg font-bold text-yellow-300">Your checklist</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {g.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-blue-100">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-blue-950">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="mb-3 text-xs font-semibold text-blue-200">Look for these features</p>
                <div className="flex flex-wrap gap-2">
                  {g.specs.map((s) => (
                    <span key={s} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">{s}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4 lg:col-span-2">
              {g.cards.map(([ic, t, d]) => (
                <div key={t} className="flex gap-4 rounded-2xl border-l-4 border-yellow-400 bg-white p-5 shadow-sm">
                  <span className="text-2xl">{ic}</span>
                  <div>
                    <h3 className="font-bold text-blue-950">{t}</h3>
                    <p className="mt-1 text-sm text-slate-600">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
          <SectionHead title="Your roadmap" sub="Three moves that work for this goal." />
          <div className="grid gap-4 md:grid-cols-3">
            {g.roadmap.map((c, i) => (
              <div key={c.t} className={`rounded-2xl p-6 ${i === 1 ? "bg-yellow-400 text-blue-950" : "border border-blue-100 bg-white"}`}>
                <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-extrabold ${i === 1 ? "bg-blue-900 text-white" : "bg-blue-700 text-white"}`}>{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{c.t}</h3>
                <p className={`mt-2 text-sm ${i === 1 ? "text-blue-900" : "text-slate-600"}`}>{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">Career support is assistance, not a placement guarantee. Verify current services and exam rules with the official source.</p>
        </section>

        {/* ADMISSION TIMELINE */}
        <section className="bg-blue-50 py-14">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <SectionHead title="A calm route before applying" />
            <ol className="grid gap-6 md:grid-cols-4">
              {g.steps.map((s, i) => (
                <li key={s.t} className="relative">
                  {i < g.steps.length - 1 && <span className="absolute left-12 top-5 hidden h-0.5 w-[calc(100%-2rem)] bg-blue-200 md:block" />}
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-extrabold text-white ring-4 ring-yellow-300">{i + 1}</span>
                  <h3 className="mt-4 font-bold text-blue-950">{s.t}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* COMPARE TABLE */}
        <section id="compare" className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
          <SectionHead title="Compare all four goals" sub="Tap a row to open that goal." />
          <div className="overflow-x-auto rounded-2xl border border-blue-100 bg-white shadow-sm">
            <table className="w-full min-w-170 text-left text-sm">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="px-4 py-3">Goal</th>
                  {goalsData["working-professionals"].stats.map((_, i) => <th key={i} className="px-4 py-3">Key point {i + 1}</th>)}
                </tr>
              </thead>
              <tbody>
                {KEYS.map((k) => (
                  <tr key={k} onClick={() => toTop(k)} className={`cursor-pointer border-t border-blue-50 transition hover:bg-yellow-50 ${k === active ? "bg-yellow-50" : ""}`}>
                    <td className="px-4 py-3 font-bold text-blue-900">{goalsData[k].emoji} {goalsData[k].label}</td>
                    {goalsData[k].stats.map((s) => (
                      <td key={s.l} className="px-4 py-3 text-slate-700">
                        <span className="block text-xs text-slate-400">{s.l}</span>
                        {s.v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-4 pb-14 lg:px-8">
          <SectionHead title={`${g.label} questions`} />
          <div className="space-y-3">
            {g.faq.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className={`overflow-hidden rounded-2xl border bg-white ${open ? "border-yellow-400 shadow-md" : "border-blue-100"}`}>
                  <button type="button" aria-expanded={open} onClick={() => setOpenFaq(open ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-blue-950">
                    {f.q}
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform ${open ? "rotate-45 bg-yellow-400 text-blue-950" : "bg-blue-700 text-white"}`}>+</span>
                  </button>
                  {open && <p className="px-5 pb-5 text-sm text-slate-600">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA BAND */}
        <section className="mx-auto max-w-6xl px-4 pb-16 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-yellow-400 p-8 text-center text-blue-950 md:flex-row md:text-left">
            <div>
              <h2 className="text-xl font-extrabold sm:text-2xl">Want a counsellor to verify your shortlist?</h2>
              <p className="mt-1 text-sm text-blue-900">Free guidance on recognition, fees, EMI and eligibility before you apply.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-xl bg-blue-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800">WhatsApp us</a>
              <a href={`tel:${PHONE}`} className="rounded-xl border-2 border-blue-900 px-5 py-3 text-sm font-bold text-blue-900 transition hover:bg-blue-900 hover:text-white">Call now</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-950 px-4 py-8 text-center text-xs text-blue-200">
        Student-first guidance for comparing online degree programs, checking recognition, planning fees and applying with clarity.
        Always verify final details from official university and UGC-DEB sources.
      </footer>
    </div>
  );
}