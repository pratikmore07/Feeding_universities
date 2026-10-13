"use client";

import { useState, useEffect, useRef } from "react";

/* ---------- CONTACT (from feedinguniversities.com) ---------- */
const PHONE = "+919140309999";
const WHATSAPP =
  "https://wa.me/919140309999?text=Hello%20Feeding%20Universities%2C%20I%20want%20free%20counselling%20for%20online%20technology%20degree%20admission.";

/* ---------- HELPERS FOR SHARED DATA ---------- */
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
  "online-mca": {
    label: "Online MCA",
    short: "MCA",
    emoji: "💻",
    gradient: "from-blue-700 via-blue-600 to-yellow-400",
    title: "Online MCA",
    subtitle: "Master of Computer Applications for software and IT careers.",
    desc: "Compare Online MCA universities by approval, specializations, math or bridge-course rules, fee flexibility and career support.",
    stats: [
      { v: "2 Yrs", l: "Duration" },
      { v: "Graduate", l: "Eligibility" },
      { v: "₹1.2L – ₹2.4L", l: "Typical fee*" },
      { v: "100% Online", l: "Mode" },
    ],
    specs: ["Software Development", "Cloud Computing", "Agentic AI", "Data Science", "Cyber Security", "Full Stack"],
    overview:
      "MCA eligibility is stricter than MBA. Many universities ask for maths at 10+2 or graduation level, or a bridge course, so check this first.",
    points: [
      "UGC-DEB approval for the current academic session",
      "Mathematics or bridge-course requirement for non-IT graduates",
      "Specialization options such as cloud, AI and data science",
      "Labs, projects and practical assessment model",
      "Live classes, recordings and exam pattern",
      "Career support scope (assistance, not guaranteed placement)",
    ],
    fee: "Add semester fee, exam fee, registration and one-time charges. Scholarships can change the final payable amount.",
    ...common,
    careerTitle: "Turn the MCA into a software or IT role",
    career: [
      { t: "Build software", d: "Developer, backend, full-stack and application engineer roles." },
      { t: "Specialize early", d: "Cloud, AI and data tracks help you aim at a specific job family." },
      { t: "Switch into IT", d: "Non-IT graduates can move into tech after completing bridge work." },
    ],
    steps: steps("Confirm graduation, maths and bridge-course rules.", "Specializations, projects, fees and support."),
    faq: [
      { q: "Can a non-IT graduate do Online MCA?", a: "Often yes, but many universities need maths at 12th or graduation, or a bridge course. Confirm with the university." },
      { q: "Is Online MCA valid for jobs?", a: "Validity depends on UGC-DEB entitlement for the university, program and session. Always verify before applying." },
      { q: "Should I pick MCA or a Data Science degree?", a: "MCA is broader software training. Pick Data Science if your goal is analytics or ML roles specifically." },
    ],
  },
  "online-bca": {
    label: "Online BCA",
    short: "BCA",
    emoji: "🖥️",
    gradient: "from-blue-600 via-blue-500 to-yellow-300",
    title: "Online BCA",
    subtitle: "Undergraduate computer applications degree after 12th.",
    desc: "Build programming, database and web foundations with an online BCA, and keep MCA or specialized tech master's open for later.",
    stats: [
      { v: "3 Yrs", l: "Duration" },
      { v: "12th pass", l: "Eligibility" },
      { v: "₹90K – ₹1.8L", l: "Typical fee*" },
      { v: "100% Online", l: "Mode" },
    ],
    specs: ["Programming", "Web Development", "Databases", "Cloud Basics", "Data Analytics", "Mobile Apps"],
    overview:
      "Online BCA suits students who want a tech degree while working or preparing for other goals. Check maths requirements and minimum marks.",
    points: [
      "Programming, data structures and database foundations",
      "Web and app development projects",
      "Pathway to MCA or specialized master's",
      "Flexible duration and lower fees than on-campus",
      "Recognition and session validity must be verified",
      "Learning support for students new to coding",
    ],
    fee: "Compare total fee including exam fees, registration and one-time charges across all three years.",
    ...common,
    careerTitle: "Use the BCA to start in tech",
    career: [
      { t: "Get a first tech job", d: "Junior developer, QA, support and web roles are common starting points." },
      { t: "Plan the next degree", d: "A recognized BCA is a base for MCA and specialized master's programs." },
      { t: "Show proof of skill", d: "Projects, GitHub work and certifications matter as much as the degree." },
    ],
    steps: steps("Confirm 12th-pass status, subjects and minimum marks.", "Fees, specializations and learning support."),
    faq: [
      { q: "Can I do Online BCA after 12th?", a: "Yes. Online BCA is designed for 12th-pass students. Some universities ask for maths or a minimum percentage." },
      { q: "Can I do MCA after Online BCA?", a: "Generally yes. A recognized BCA is accepted for MCA, subject to each university's eligibility rules." },
      { q: "Do I need coding knowledge first?", a: "No. Programs start from basics, but practice on your own will speed things up." },
    ],
  },
  "data-science": {
    label: "Data Science",
    short: "Data",
    emoji: "📊",
    gradient: "from-blue-800 via-blue-600 to-yellow-400",
    title: "Data Science",
    subtitle: "Turn data into decisions with analytics and modeling skills.",
    desc: "Compare online Data Science degrees such as M.Sc Data Science or MCA and MBA with data tracks by eligibility, tools taught and project work.",
    stats: [
      { v: "2 Yrs (PG)", l: "Duration" },
      { v: "Math / stats", l: "Eligibility" },
      { v: "₹1.5L – ₹3L", l: "Typical fee*" },
      { v: "Online + projects", l: "Mode" },
    ],
    specs: ["Python", "SQL", "Statistics", "Machine Learning", "Power BI / Tableau", "Big Data"],
    overview:
      "Data Science programs expect maths, statistics or programming background. Check this eligibility before comparing fees.",
    points: [
      "Math, statistics or programming eligibility checks",
      "Tools taught: Python, SQL, BI and ML libraries",
      "Real datasets, capstone and portfolio projects",
      "Degree type: M.Sc, MCA track or MBA Analytics",
      "Recognition and session validity must be verified",
      "Career support scope for analytics roles",
    ],
    fee: "Check tool licenses, lab access, exam and project charges together with the program fee.",
    ...common,
    careerTitle: "Aim at data roles with a portfolio",
    career: [
      { t: "Analyze", d: "Data analyst and business analyst roles across finance, retail and tech." },
      { t: "Model", d: "Junior data scientist roles after strong Python, stats and ML projects." },
      { t: "Prove it", d: "A portfolio of real projects counts heavily with recruiters." },
    ],
    steps: steps("Confirm graduation with math, stats or programming background.", "Tools taught, projects and fees."),
    faq: [
      { q: "Do I need maths for Data Science?", a: "Most programs want maths or statistics at some level. Some offer bridge modules if your background is light." },
      { q: "Data Science vs MCA?", a: "Data Science focuses on analytics and models. MCA is broader software training." },
      { q: "Will I get a job right after?", a: "Career support is assistance, not a guarantee. Projects and skills decide outcomes." },
    ],
  },
  "ai-ml": {
    label: "AI & ML",
    short: "AI/ML",
    emoji: "🤖",
    gradient: "from-blue-900 via-blue-700 to-yellow-500",
    title: "AI & ML",
    subtitle: "Artificial Intelligence and Machine Learning programs.",
    desc: "Compare online AI & ML options, from MCA with AI specializations to dedicated AI programs, by curriculum depth and hands-on work.",
    stats: [
      { v: "1 – 2 Yrs", l: "Duration" },
      { v: "Graduate + math", l: "Eligibility" },
      { v: "₹1.5L – ₹3.5L", l: "Typical fee*" },
      { v: "Online + labs", l: "Mode" },
    ],
    specs: ["Machine Learning", "Deep Learning", "NLP", "Generative AI", "Computer Vision", "MLOps"],
    overview:
      "AI & ML changes fast. Look for current syllabus, hands-on projects and faculty support rather than buzzwords in the brochure.",
    points: [
      "Syllabus updated for GenAI and modern tooling",
      "Math and programming prerequisites",
      "Hands-on labs, model projects and deployment practice",
      "Degree type and recognition for the session",
      "Mentor or industry-expert sessions",
      "Career support scope for AI roles",
    ],
    fee: "Check compute, cloud credits, certification and project charges along with the program fee.",
    ...common,
    careerTitle: "Build real AI skills, not just a title",
    career: [
      { t: "Engineer ML", d: "ML engineer and AI developer roles need solid Python and model deployment." },
      { t: "Apply GenAI", d: "Use LLM and automation skills inside your current domain." },
      { t: "Stay current", d: "Keep learning after the degree. The field moves every few months." },
    ],
    steps: steps("Confirm graduation, math and programming background.", "Syllabus freshness, labs and fees."),
    faq: [
      { q: "Can I switch to AI from a non-tech field?", a: "Possible, but plan for programming and maths groundwork first. Some programs include bridge modules." },
      { q: "Is AI & ML degree better than a certificate?", a: "A recognized degree adds formal value. Certificates alone may not meet job or higher-study rules." },
      { q: "Is the degree recognized?", a: "It depends on UGC-DEB entitlement for that program and session. Verify before applying." },
    ],
  },
  "cyber-security": {
    label: "Cyber Security",
    short: "Cyber",
    emoji: "🛡️",
    gradient: "from-blue-950 via-blue-700 to-yellow-400",
    title: "Cyber Security",
    subtitle: "Protect systems, networks and data from modern threats.",
    desc: "Compare online Cyber Security programs by lab access, tools covered, certification alignment and recognition.",
    stats: [
      { v: "1 – 2 Yrs", l: "Duration" },
      { v: "Graduate / IT", l: "Eligibility" },
      { v: "₹1.2L – ₹3L", l: "Typical fee*" },
      { v: "Online + labs", l: "Mode" },
    ],
    specs: ["Network Security", "Ethical Hacking", "Cloud Security", "Digital Forensics", "SOC Basics", "Cryptography"],
    overview:
      "Security is learned by doing. Favour programs with virtual labs and real scenarios over theory-only syllabi.",
    points: [
      "Virtual labs for attack and defence practice",
      "Coverage of networks, cloud, forensics and cryptography",
      "Alignment with industry certifications",
      "Networking and OS prerequisites",
      "Recognition and session validity must be verified",
      "Career support scope for security roles",
    ],
    fee: "Check lab access, certification exam vouchers and extra charges along with the program fee.",
    ...common,
    careerTitle: "Start in security with hands-on proof",
    career: [
      { t: "Defend", d: "SOC analyst and security analyst roles are common entry points." },
      { t: "Test", d: "Ethical hacking and vulnerability testing paths need lab-based practice." },
      { t: "Certify", d: "Add recognised certifications next to your degree to stand out." },
    ],
    steps: steps("Confirm graduation and any IT or networking prerequisites.", "Labs, tools, certifications and fees."),
    faq: [
      { q: "Do I need IT background?", a: "It helps. Many programs expect basic networking and OS knowledge, and some add bridge content." },
      { q: "Is ethical hacking legal to study?", a: "Yes, when practiced in authorized labs and with permission. Reputable programs teach this clearly." },
      { q: "Is Cyber Security degree valid?", a: "It depends on UGC-DEB entitlement for the university, program and session. Verify first." },
    ],
  },
};

const KEYS = Object.keys(programsData);

/* ---------- LOGIC ---------- */
// Suggest a tech program from qualification + interest
function recommend(edu, goal) {
  if (!edu || !goal) return null;
  if (edu === "12th") return "online-bca";
  return { software: "online-mca", data: "data-science", ai: "ai-ml", security: "cyber-security" }[goal];
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
export default function TechnologyPage() {
  const [active, setActive] = useState("online-mca");
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
              <span className="text-lg">{p.emoji}</span> Technology programs
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
        <div role="tablist" aria-label="Technology programs" className="mx-auto grid max-w-4xl grid-cols-5 gap-1.5 rounded-2xl border border-blue-100 bg-white/95 p-1.5 shadow-xl backdrop-blur">
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
                className={`flex flex-col items-center gap-0.5 rounded-xl px-1 py-2.5 text-[11px] font-bold transition sm:flex-row sm:justify-center sm:gap-2 sm:px-2 sm:text-sm ${
                  on ? "bg-blue-700 text-white shadow-md ring-2 ring-yellow-400" : "text-slate-600 hover:bg-blue-300"
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
                <p className="mb-3 text-xs font-semibold text-blue-200">Skills and specializations</p>
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
            <h2 className="text-2xl font-extrabold sm:text-3xl">Not sure which tech program fits you?</h2>
            <p className="mt-2 text-sm text-blue-100">Answer two quick questions and we will point you to a program.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold text-yellow-200">Your qualification</p>
                <Choice value={edu} onChange={setEdu} options={[["12th", "12th pass"], ["graduate", "Graduate"]]} />
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold text-yellow-200">What do you want to work on?</p>
                <Choice
                  value={goal}
                  onChange={setGoal}
                  options={[["software", "Software & apps"], ["data", "Data & analytics"], ["ai", "AI & ML"], ["security", "Cyber security"]]}
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
          <p className="mt-4 text-xs text-slate-500">Career support is assistance, not a placement guarantee. Verify current services with the university.</p>
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
          <SectionHead title="Compare all five programs" sub="Tap a row to open that program." />
          <div className="overflow-x-auto rounded-2xl border border-blue-100 bg-white shadow-sm">
            <table className="w-full min-w-160 text-left text-sm">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="px-4 py-3">Program</th>
                  {programsData["online-mca"].stats.map((s) => <th key={s.l} className="px-4 py-3">{s.l}</th>)}
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