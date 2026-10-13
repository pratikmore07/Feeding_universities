"use client";

import { useState, useEffect, useRef } from "react";

/* ---------- CONTACT (from feedinguniversities.com) ---------- */
const PHONE = "+919140309999";
const WHATSAPP =
  "https://wa.me/919140309999?text=Hello%20Feeding%20Universities%2C%20I%20want%20free%20counselling%20for%20online%20arts%20degree%20admission.";

/* ---------- SHARED DATA ---------- */
const steps = (eligibility, compare) => [
  { t: "Verify recognition", d: "Check UGC-DEB entitlement for that program and session." },
  { t: "Check eligibility", d: eligibility },
  { t: "Compare fit", d: compare },
  { t: "Apply officially", d: "Use the university's official admission process." },
];

const common = {
  emi: "Ask if EMI is university-backed or finance-partner backed, and whether it is no-cost or interest-bearing.",
  refund: "Read the refund and cancellation rule before the first payment.",
};

/* ---------- DATA ---------- */
const programsData = {
  "online-ba": {
    label: "Online BA",
    short: "BA",
    emoji: "🎨",
    gradient: "from-blue-700 via-blue-600 to-yellow-400",
    title: "Online BA",
    subtitle: "Flexible undergraduate arts degree after 12th.",
    desc: "Choose from subjects like History, Political Science, Sociology, Economics and more. Great for exam aspirants and working learners.",
    stats: [
      { v: "3 Yrs", l: "Duration" },
      { v: "12th pass", l: "Eligibility" },
      { v: "₹50K – ₹1.3L", l: "Typical fee*" },
      { v: "100% Online", l: "Mode" },
    ],
    specs: ["History", "Political Science", "Sociology", "Economics", "Public Administration", "Journalism"],
    overview:
      "Online BA is a low-cost, flexible degree that works well beside a job or exam preparation. Subject choices vary by university.",
    points: [
      "UGC-DEB approval for the current academic session",
      "Subject combinations offered and elective freedom",
      "Whether any 12th stream is accepted",
      "Exam model, assignments and live-class support",
      "Study material quality and language options",
      "Path to MA, B.Ed or competitive exams later",
    ],
    fee: "Add yearly fee, exam fee, registration and one-time charges across all three years.",
    ...common,
    careerTitle: "Use the BA as a base for exams, teaching and media",
    career: [
      { t: "Prepare for exams", d: "A graduation is the base eligibility for many government and civil service exams. Check each exam's rules." },
      { t: "Build a profile", d: "Pair subjects like Journalism or Public Administration with skills and internships." },
      { t: "Study further", d: "A recognized BA opens MA, B.Ed and other master's routes." },
    ],
    steps: steps("Confirm 12th-pass status and minimum marks.", "Subjects, fees, exam mode and support."),
    faq: [
      { q: "Can I do Online BA from any stream?", a: "Most universities accept any 12th stream for BA. Confirm in the official eligibility rule." },
      { q: "Is Online BA valid for government exams?", a: "Generally yes when the degree is recognized and entitled for that session. Always verify each exam's own criteria." },
      { q: "Can I do MA after Online BA?", a: "Yes. A recognized BA is generally accepted for MA, subject to each university's rules." },
    ],
  },
  "online-ma": {
    label: "Online MA",
    short: "MA",
    emoji: "📜",
    gradient: "from-blue-800 via-blue-600 to-yellow-400",
    title: "Online MA",
    subtitle: "Postgraduate arts degree for depth, teaching and research.",
    desc: "Compare Online MA programs in subjects like English, History, Sociology, Political Science and Economics by approval, subjects and support.",
    stats: [
      { v: "2 Yrs", l: "Duration" },
      { v: "Graduate", l: "Eligibility" },
      { v: "₹60K – ₹1.5L", l: "Typical fee*" },
      { v: "100% Online", l: "Mode" },
    ],
    specs: ["English", "History", "Sociology", "Political Science", "Economics", "Public Administration"],
    overview:
      "Online MA suits graduates who want subject depth, a stronger profile or a teaching and research path. Subject rules differ by university.",
    points: [
      "UGC-DEB approval for the current academic session",
      "Whether your graduation subject matches the MA subject",
      "Minimum marks in graduation",
      "Dissertation or project requirements",
      "Exam pattern and assignment load",
      "Fit with teaching or research exam routes",
    ],
    fee: "Add semester fee, exam fee, registration and project charges to see the final total.",
    ...common,
    careerTitle: "Use the MA for teaching, research and subject expertise",
    career: [
      { t: "Teach", d: "An MA is a common step toward teaching routes. Check the exact eligibility rules." },
      { t: "Research", d: "Strong dissertation work helps if you plan to continue to research." },
      { t: "Grow your profile", d: "A master's can support writing, policy, content and public-sector roles." },
    ],
    steps: steps("Confirm graduation, subject match and minimum marks.", "Subject depth, fees and exam model."),
    faq: [
      { q: "Can I do MA in a different subject from my BA?", a: "Some universities allow it, others want the same or related subject. Confirm the rule first." },
      { q: "Is Online MA accepted for higher studies?", a: "Generally yes when recognized and entitled for that session. Verify the exam's own rules as well." },
      { q: "Which MA subject should I choose?", a: "Choose by your target role or exam syllabus, not only by the cheapest fee." },
    ],
  },
  psychology: {
    label: "Psychology",
    short: "Psych",
    emoji: "🧠",
    gradient: "from-blue-900 via-blue-700 to-yellow-500",
    title: "Psychology",
    subtitle: "Understand behaviour, mind and mental well-being.",
    desc: "Compare online BA and MA Psychology programs by syllabus, practicals and the career routes they actually support.",
    stats: [
      { v: "3 Yrs (UG) / 2 Yrs (PG)", l: "Duration" },
      { v: "12th / Graduate", l: "Eligibility" },
      { v: "₹60K – ₹1.8L", l: "Typical fee*" },
      { v: "Online + practicals", l: "Mode" },
    ],
    specs: ["Counselling Basics", "Developmental Psychology", "Social Psychology", "Research Methods", "Organisational Behaviour", "Abnormal Psychology"],
    overview:
      "Psychology has regulated career routes. Check what an online degree can and cannot lead to before you enrol.",
    points: [
      "UGC-DEB approval for the current academic session",
      "Level offered: BA or MA Psychology",
      "Practicals, case studies and internship support",
      "Research methods and statistics coverage",
      "Whether the degree meets requirements for licensed practice",
      "Fit with HR, counselling or research routes",
    ],
    fee: "Check practical, internship and exam charges together with the program fee.",
    ...common,
    careerTitle: "Know which careers this degree supports",
    career: [
      { t: "Support roles", d: "HR, learning, school support and community roles often value a psychology degree." },
      { t: "Counselling", d: "Counselling work usually needs extra training. Check the requirements before you plan around it." },
      { t: "Licensed practice", d: "Clinical practice follows regulated qualifications. An online degree may not meet them, so verify early." },
    ],
    steps: steps("Confirm 12th for BA or graduation and marks for MA.", "Practicals, syllabus, fees and career fit."),
    faq: [
      { q: "Can I become a clinical psychologist with an online degree?", a: "Clinical practice follows regulated requirements. Check the current rules and whether the program meets them before enrolling." },
      { q: "Do I need Science for Psychology?", a: "Usually not for BA. Some MA programs prefer a related graduation, so check eligibility." },
      { q: "Is Online Psychology valid?", a: "Validity depends on UGC-DEB entitlement for the university, program and session. Verify before applying." },
    ],
  },
  english: {
    label: "English",
    short: "English",
    emoji: "📚",
    gradient: "from-blue-950 via-blue-700 to-yellow-400",
    title: "English",
    subtitle: "Literature, language and communication at BA and MA level.",
    desc: "Compare online BA and MA English programs by syllabus, literature coverage, writing practice and teaching or content career fit.",
    stats: [
      { v: "3 Yrs (UG) / 2 Yrs (PG)", l: "Duration" },
      { v: "12th / Graduate", l: "Eligibility" },
      { v: "₹50K – ₹1.5L", l: "Typical fee*" },
      { v: "100% Online", l: "Mode" },
    ],
    specs: ["British Literature", "Indian Writing in English", "Linguistics", "Literary Theory", "Creative Writing", "Communication"],
    overview:
      "English programs vary in focus between literature, linguistics and communication. Pick by the skills you want, not only the title.",
    points: [
      "UGC-DEB approval for the current academic session",
      "Level offered: BA or MA English",
      "Balance of literature, language and writing",
      "Assignments, essays and dissertation load",
      "Study material and live-class support",
      "Fit with teaching, content or exam routes",
    ],
    fee: "Add yearly or semester fee, exam fee, registration and project charges for the full total.",
    ...common,
    careerTitle: "Turn English into writing, teaching and communication roles",
    career: [
      { t: "Write and edit", d: "Content, editing, copywriting and publishing roles reward strong writing samples." },
      { t: "Teach", d: "English is a common teaching subject. Check the extra qualifications each route needs." },
      { t: "Communicate", d: "Corporate communication, PR and media roles value language skills." },
    ],
    steps: steps("Confirm 12th for BA or graduation and marks for MA.", "Syllabus focus, fees and support."),
    faq: [
      { q: "Can I do MA English after any graduation?", a: "Some universities accept any graduation, others prefer English or related subjects. Confirm the rule." },
      { q: "Will it help me become a teacher?", a: "It is a common subject for teaching routes, but those routes have their own eligibility rules. Check them." },
      { q: "Is Online English valid?", a: "Validity depends on UGC-DEB entitlement for the university, program and session. Verify before applying." },
    ],
  },
};

const KEYS = Object.keys(programsData);

/* ---------- LOGIC ---------- */
// Suggest an arts program from qualification + interest
function recommend(edu, goal) {
  if (!edu || !goal) return null;
  if (goal === "psychology") return "psychology";
  if (goal === "english") return "english";
  return edu === "12th" ? "online-ba" : "online-ma";
}

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

function Choice({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(([val, text]) => (
        <button
          key={val}
          type="button"
          onClick={() => onChange(val)}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
            value === val
              ? "border-yellow-400 bg-yellow-400 text-blue-950"
              : "border-white/30 bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

/* ---------- PAGE ---------- */
export default function ArtsPage() {
  const [active, setActive] = useState("online-ba");
  const [fading, setFading] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [edu, setEdu] = useState("");
  const [goal, setGoal] = useState("");
  const tabRefs = useRef({});

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (programsData[hash]) setActive(hash);
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

  const p = programsData[active];
  const suggestion = recommend(edu, goal);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className={`relative overflow-hidden bg-linear-to-br ${p.gradient} transition-all duration-500`}>
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-blue-950/30 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-12 sm:pt-16 lg:px-8">
          <div className={`mx-auto max-w-3xl text-center text-white transition-all duration-200 ${fading ? "translate-y-2 opacity-0" : "opacity-100"}`}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
              <span className="text-lg">{p.emoji}</span> Arts programs
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight drop-shadow sm:text-5xl lg:text-6xl">{p.title}</h1>
            <p className="mt-4 text-lg font-medium text-yellow-200">{p.subtitle}</p>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-blue-50 sm:text-base">{p.desc}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#matcher" className="rounded-xl bg-yellow-400 px-6 py-3 text-sm font-bold text-blue-950 shadow-lg shadow-yellow-500/30 transition hover:bg-yellow-300">
                Get my shortlist
              </a>
              <a href="#compare" className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
                Compare all programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY TABS */}
      <div className="sticky top-0 z-30 -mt-10 px-4">
        <div role="tablist" aria-label="Arts programs" className="mx-auto grid max-w-3xl grid-cols-4 gap-1.5 rounded-2xl border border-blue-100 bg-white/95 p-1.5 shadow-xl backdrop-blur">
          {KEYS.map((key, i) => {
            const d = programsData[key];
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
                <span className="hidden sm:inline">{d.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <main className={`transition-opacity duration-200 ${fading ? "opacity-0" : "opacity-100"}`}>
        {/* QUICK FACTS */}
        <section className="mx-auto max-w-6xl px-4 pt-10 lg:px-8">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {p.stats.map((s) => (
              <div key={s.l} className="rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-sm">
                <div className="text-lg font-extrabold text-blue-700 sm:text-xl">{s.v}</div>
                <div className="mt-1 text-xs font-medium text-slate-500">{s.l}</div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-slate-400">*Indicative range. Confirm exact fees, scholarships and eligibility with the university.</p>
        </section>

        {/* OVERVIEW */}
        <section id="overview" className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
          <SectionHead title={`What to compare before choosing ${p.label}`} sub={p.overview} />
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="rounded-3xl bg-blue-950 p-6 text-white sm:p-8 lg:col-span-3">
              <h3 className="text-lg font-bold text-yellow-300">Your checklist</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-blue-100">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-blue-950">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="mb-3 text-xs font-semibold text-blue-200">Popular subjects</p>
                <div className="flex flex-wrap gap-2">
                  {p.specs.map((s) => (
                    <span key={s} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">{s}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4 lg:col-span-2">
              {[
                ["💰", "Total payable fee", p.fee],
                ["🧾", "EMI suitability", p.emi],
                ["↩️", "Refund clarity", p.refund],
              ].map(([ic, t, d]) => (
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

        {/* MATCHER */}
        <section id="matcher" className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="rounded-3xl bg-linear-to-br from-blue-700 to-blue-900 p-6 text-white shadow-xl sm:p-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Not sure which arts program fits you?</h2>
            <p className="mt-2 text-sm text-blue-100">Answer two quick questions and we will point you to a program.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold text-yellow-200">Your qualification</p>
                <Choice value={edu} onChange={setEdu} options={[["12th", "12th pass"], ["graduate", "Graduate"]]} />
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold text-yellow-200">What interests you most?</p>
                <Choice
                  value={goal}
                  onChange={setGoal}
                  options={[["general", "Broad arts degree"], ["psychology", "Psychology"], ["english", "English"]]}
                />
              </div>
            </div>
            {suggestion && (
              <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-yellow-400 p-5 text-blue-950 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-semibold">Best match for you</p>
                  <p className="text-xl font-extrabold">{programsData[suggestion].emoji} {programsData[suggestion].label}</p>
                </div>
                <button type="button" onClick={() => toTop(suggestion)} className="rounded-xl bg-blue-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-800">
                  View this program
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CAREER */}
        <section className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
          <SectionHead title="Career scope" sub={p.careerTitle} />
          <div className="grid gap-4 md:grid-cols-3">
            {p.career.map((c, i) => (
              <div key={c.t} className={`rounded-2xl p-6 ${i === 1 ? "bg-yellow-400 text-blue-950" : "border border-blue-100 bg-white"}`}>
                <h3 className="text-lg font-bold">{c.t}</h3>
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
              {p.steps.map((s, i) => (
                <li key={s.t} className="relative">
                  {i < p.steps.length - 1 && <span className="absolute left-12 top-5 hidden h-0.5 w-[calc(100%-2rem)] bg-blue-200 md:block" />}
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
          <SectionHead title="Compare all four programs" sub="Tap a row to open that program." />
          <div className="overflow-x-auto rounded-2xl border border-blue-100 bg-white shadow-sm">
            <table className="w-full min-w-160 text-left text-sm">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="px-4 py-3">Program</th>
                  {programsData["online-ba"].stats.map((s) => <th key={s.l} className="px-4 py-3">{s.l}</th>)}
                </tr>
              </thead>
              <tbody>
                {KEYS.map((k) => (
                  <tr key={k} onClick={() => toTop(k)} className={`cursor-pointer border-t border-blue-50 transition hover:bg-yellow-50 ${k === active ? "bg-yellow-50" : ""}`}>
                    <td className="px-4 py-3 font-bold text-blue-900">{programsData[k].emoji} {programsData[k].label}</td>
                    {programsData[k].stats.map((s) => <td key={s.l} className="px-4 py-3 text-slate-700">{s.v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-4 pb-14 lg:px-8">
          <SectionHead title={`${p.label} questions`} />
          <div className="space-y-3">
            {p.faq.map((f, i) => {
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