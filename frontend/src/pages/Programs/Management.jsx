import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/* ---------- CONTACT (from feedinguniversities.com) ---------- */
const PHONE = "+919140309999";
const WHATSAPP =
  "https://wa.me/919140309999?text=Hello%20Feeding%20Universities%2C%20I%20want%20free%20counselling%20for%20online%20technology%20degree%20admission.";

/* ---------- DATA ---------- */
const programsData = {
  "online-mba": {
    label: "Online MBA",
    short: "MBA",
    emoji: "🎓",
    gradient: "from-blue-700 via-blue-600 to-yellow-400",
    title: "Online MBA",
    subtitle: "Management degree for graduates and working professionals.",
    desc: "Compare Online MBA universities by approval, specialization, fee flexibility, career support and admission rules.",
    stats: [
      { v: "2 Yrs", l: "Duration" },
      { v: "Graduate", l: "Eligibility" },
      { v: "₹1L – ₹2.5L", l: "Typical fee*" },
      { v: "100% Online", l: "Mode" },
    ],
    specs: ["Marketing", "Finance", "HR", "Operations", "Business Analytics", "IT & Systems", "Digital Marketing"],
    overview:
      "Eligibility and recognition come before fees. A good shortlist starts with what you are allowed to pursue, not only what looks attractive.",
    points: [
      "UGC-DEB approval for the current academic session",
      "Specialization depth, electives and project work",
      "Total fee, EMI availability and refund policy",
      "Live classes, recordings and exam model",
      "Career support scope for online learners",
      "Flexibility for working learners and fresh graduates",
    ],
    fee: "Add semester fee, exam fee, registration and one-time charges to see the real total.",
    emi: "Ask if EMI is university-backed or finance-partner backed, and whether it is no-cost or interest-bearing.",
    refund: "Read the cancellation and refund rule before the first payment.",
    careerTitle: "Match the MBA to a practical career direction",
    career: [
      { t: "Switch function", d: "Move into marketing, finance, HR, operations or analytics with a matching specialization." },
      { t: "Grow faster", d: "Working professionals get applied assignments and a peer network without leaving their job." },
      { t: "Start strong", d: "Fresh graduates should look for foundation support and internship-style projects." },
    ],
    steps: [
      { t: "Verify recognition", d: "Check UGC-DEB entitlement for the session." },
      { t: "Check eligibility", d: "Confirm your graduation and marks criteria." },
      { t: "Compare options", d: "Line up fees, specializations and support." },
      { t: "Apply officially", d: "Use the university's official admission process." },
    ],
    faq: [
      { q: "Can I do Online MBA without graduation?", a: "No. A valid graduation is normally required. If you do not have a degree, compare undergraduate routes first." },
      { q: "Is Online MBA valid?", a: "It depends on current UGC-DEB entitlement for the university, program and session. Always verify before applying." },
      { q: "Should I choose by fee only?", a: "No. Check recognition, eligibility, specialization, learning support and exam model along with fee." },
    ],
  },
  "executive-mba": {
    label: "Executive MBA",
    short: "EMBA",
    emoji: "💼",
    gradient: "from-blue-800 via-blue-600 to-yellow-500",
    title: "Executive MBA",
    subtitle: "For experienced professionals aiming at senior leadership.",
    desc: "Compare Executive MBA programs built for managers, founders and senior contributors with 5+ years of experience.",
    stats: [
      { v: "12 – 18 Mo", l: "Duration" },
      { v: "5+ Yrs exp.", l: "Eligibility" },
      { v: "₹2L – ₹6L", l: "Typical fee*" },
      { v: "Weekend batches", l: "Mode" },
    ],
    specs: ["General Management", "Strategy", "Leadership", "Entrepreneurship", "Operations", "Finance for Leaders"],
    overview:
      "Executive MBA programs are built for working leaders. The focus is strategy, decision-making and leading teams while you stay in your role.",
    points: [
      "Weekend or evening batches for working professionals",
      "Strong focus on leadership and general management",
      "Peer network of experienced managers and founders",
      "Capstone projects tied to real organizations",
      "Flexible attendance and assessment",
      "Recognition and session validity must be verified",
    ],
    fee: "Compare total program fee including exam fees, registration and one-time charges.",
    emi: "Check whether EMI is through the university or a partner, and if it is no-cost or has interest.",
    refund: "Read refund and cancellation rules before paying the first installment.",
    careerTitle: "Use the Executive MBA to step into senior roles",
    career: [
      { t: "Lead bigger", d: "Target senior management, P&L ownership or founder-level responsibility." },
      { t: "Network up", d: "Compare cohort strength and peer profile, not just the brochure." },
      { t: "Learn by doing", d: "Look for live case studies, applied projects and industry exposure." },
    ],
    steps: [
      { t: "Verify recognition", d: "Check entitlement for that program and session." },
      { t: "Check experience", d: "Confirm years of work and graduation rules." },
      { t: "Compare format", d: "Schedule, fees, specialization and cohort." },
      { t: "Apply officially", d: "Use the university's official admission process." },
    ],
    faq: [
      { q: "How much experience is needed?", a: "Most programs expect 5+ years of full-time work, often with some team-leading exposure." },
      { q: "Is Executive MBA recognized?", a: "It depends on UGC-DEB entitlement and recognition for that specific program and session. Verify before applying." },
      { q: "Is it better than a regular MBA?", a: "For experienced professionals it often gives a stronger network and leadership focus. Fresh graduates are usually better served by a regular or online MBA." },
    ],
  },
  "online-bba": {
    label: "Online BBA",
    short: "BBA",
    emoji: "📘",
    gradient: "from-blue-600 via-blue-500 to-yellow-300",
    title: "Online BBA",
    subtitle: "Undergraduate management degree for 12th-pass students.",
    desc: "Build foundations in business, management and analytics. Suited to 12th-pass students, early-career learners and career-switchers.",
    stats: [
      { v: "3 Yrs", l: "Duration" },
      { v: "12th pass", l: "Eligibility" },
      { v: "₹90K – ₹1.8L", l: "Typical fee*" },
      { v: "100% Online", l: "Mode" },
    ],
    specs: ["Marketing", "Finance", "HR", "Business Analytics", "International Business", "Entrepreneurship"],
    overview:
      "Online BBA gives structured business education while you work or prepare for other exams. The focus is on fundamentals and practical exposure.",
    points: [
      "Foundations in accounting, marketing, economics, HR and analytics",
      "Case studies, projects and internship-style work",
      "Clear pathway to MBA or a specialized master's",
      "Lower fees and flexible duration options",
      "Recognition and session validity must be verified",
      "Learning support for students new to management",
    ],
    fee: "Compare total fee including exam fees, registration and one-time charges.",
    emi: "Ask if EMI is offered for undergraduate programs and whether it is no-cost or interest-bearing.",
    refund: "Read refund and cancellation rules before paying the first installment.",
    careerTitle: "Use the BBA to build a strong base",
    career: [
      { t: "Enter business roles", d: "Sales, marketing, operations, HR and admin are common starting points." },
      { t: "Plan the next degree", d: "A recognized BBA is a base for MBA, PGDM or a specialized master's." },
      { t: "Add proof", d: "Internships, certifications and projects improve placement readiness." },
    ],
    steps: [
      { t: "Verify recognition", d: "Check entitlement for that program and session." },
      { t: "Check eligibility", d: "Confirm 12th-pass status and minimum marks." },
      { t: "Compare fit", d: "Fees, specialization and learning support." },
      { t: "Apply officially", d: "Use the university's official admission process." },
    ],
    faq: [
      { q: "Can I do Online BBA after 12th?", a: "Yes. Online BBA is designed for 12th-pass students. Some universities set a minimum percentage." },
      { q: "Is it valid for jobs and higher studies?", a: "Yes, if the university and program are recognized and entitled for online mode by UGC-DEB for that session." },
      { q: "Can I do MBA after Online BBA?", a: "Generally yes. A recognized Online BBA is accepted for MBA and PGDM, subject to each university's rules." },
    ],
  },
  dba: {
    label: "DBA",
    short: "DBA",
    emoji: "🏅",
    gradient: "from-blue-900 via-blue-700 to-yellow-500",
    title: "DBA (Doctor of Business Administration)",
    subtitle: "Applied doctoral program for senior managers.",
    desc: "A doctoral-level program for senior managers, consultants and entrepreneurs. Combine advanced theory with industry research.",
    stats: [
      { v: "3 – 4 Yrs", l: "Duration" },
      { v: "Master's + exp.", l: "Eligibility" },
      { v: "₹3L – ₹8L", l: "Typical fee*" },
      { v: "Research + online", l: "Mode" },
    ],
    specs: ["Strategy", "Leadership", "Finance", "Marketing", "Operations", "Technology Management"],
    overview:
      "DBA programs suit experienced leaders who want deep research with practical business impact. The focus is applied research, not only theory.",
    points: [
      "Doctoral research with industry applications",
      "Thesis with real organizational impact",
      "Ideal for CXOs, partners and senior consultants",
      "Emphasis on publications and thought leadership",
      "Flexible formats for working professionals",
      "Recognition and session validity must be verified",
    ],
    fee: "DBA fees are usually higher than MBA because of the research component. Check research support and extra charges.",
    emi: "Some universities offer EMI for DBA. Check who provides it and how interest works.",
    refund: "Read refund and cancellation rules carefully, especially for doctoral programs.",
    careerTitle: "Use the DBA for thought leadership and senior impact",
    career: [
      { t: "Lead with research", d: "Senior roles that combine strategy with evidence-backed decisions." },
      { t: "Advise", d: "Independent consulting, advisory and board-level contributions." },
      { t: "Be visible", d: "Publications, speaking and industry influence next to your main role." },
    ],
    steps: [
      { t: "Verify recognition", d: "Check entitlement for that program and session." },
      { t: "Check eligibility", d: "Confirm master's degree and experience rules." },
      { t: "Compare research", d: "Research areas, guide support and fees." },
      { t: "Apply officially", d: "Use the university's official admission process." },
    ],
    faq: [
      { q: "Who should do a DBA?", a: "Senior managers, consultants, entrepreneurs and MBA holders who want advanced research with real business impact." },
      { q: "Is DBA a PhD?", a: "Both are doctoral degrees. DBA is more applied and industry-focused; a PhD is usually more theoretical." },
      { q: "Is DBA valid and recognized?", a: "It depends on university recognition and UGC-DEB entitlement for that program and session. Verify before applying." },
    ],
  },
};
const KEYS = Object.keys(programsData);

/* ---------- LOGIC ---------- */
// Suggests a program from education + experience
function recommend(edu, exp) {
  if (!edu || !exp) return null;
  if (edu === "12th") return "online-bba";
  if (edu === "postgrad" && exp === "10+") return "dba";
  if (exp === "5-10" || exp === "10+") return "executive-mba";
  return "online-mba";
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
export default function ManagementPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const hash = location.hash.slice(1);
  const active = programsData[hash] ? hash : "online-mba";
  const [fading, setFading] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [edu, setEdu] = useState("");
  const [exp, setExp] = useState("");
  const tabRefs = useRef({});

  const change = (key) => {
    if (key === active) return;
    setFading(true);
    setTimeout(() => {
      navigate({ hash: key }, { replace: true });
      setOpenFaq(0);
      setFading(false);
    }, 180);
  };

  // arrow-key support for the 4 tabs
  const onKey = (e, i) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = KEYS[(i + (e.key === "ArrowRight" ? 1 : -1) + KEYS.length) % KEYS.length];
    change(next);
    tabRefs.current[next]?.focus();
  };

  const p = programsData[active];
  const suggestion = recommend(edu, exp);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className={`relative overflow-hidden bg-linear-to-br ${p.gradient} transition-all duration-500`}>
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-blue-950/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-12 sm:pt-16 lg:px-8">
          <div className={`mx-auto max-w-3xl text-center text-white transition-all duration-200 ${fading ? "translate-y-2 opacity-0" : "opacity-100"}`}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
              <span className="text-lg">{p.emoji}</span> Management programs
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

      {/* STICKY TABS + STATS */}
      <div className="sticky top-0 z-30 -mt-10 px-4">
        <div role="tablist" aria-label="Programs" className="mx-auto grid max-w-3xl grid-cols-4 gap-1.5 rounded-2xl border border-blue-100 bg-white/95 p-1.5 shadow-xl backdrop-blur">
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
                className={`flex flex-col items-center gap-0.5 rounded-xl px-2 py-2.5 text-xs font-bold transition sm:flex-row sm:justify-center sm:gap-2 sm:text-sm ${
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
          <p className="mt-2 text-center text-xs text-slate-400">*Indicative range. Confirm exact fees with the university.</p>
        </section>

        {/* OVERVIEW */}
        <section id="overview" className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
          <SectionHead title={`What to compare before choosing ${p.label}`} sub={p.overview} />
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="rounded-3xl bg-blue-950 p-6 text-white lg:col-span-3 sm:p-8">
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
                <p className="mb-3 text-xs font-semibold text-blue-200">Popular specializations</p>
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
            <h2 className="text-2xl font-extrabold sm:text-3xl">Not sure which one fits you?</h2>
            <p className="mt-2 text-sm text-blue-100">Answer two quick questions and we will point you to a program.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold text-yellow-200">Your highest qualification</p>
                <Choice value={edu} onChange={setEdu} options={[["12th", "12th pass"], ["graduate", "Graduate"], ["postgrad", "Postgraduate / MBA"]]} />
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold text-yellow-200">Work experience</p>
                <Choice value={exp} onChange={setExp} options={[["0-2", "0 – 2 yrs"], ["5-10", "5 – 10 yrs"], ["10+", "10+ yrs"]]} />
              </div>
            </div>
            {suggestion && (
              <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-yellow-400 p-5 text-blue-950 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-semibold">Best match for you</p>
                  <p className="text-xl font-extrabold">{programsData[suggestion].emoji} {programsData[suggestion].label}</p>
                </div>
                <button
                  type="button"
                  onClick={() => { change(suggestion); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="rounded-xl bg-blue-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-800"
                >
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
                  {programsData["online-mba"].stats.map((s) => <th key={s.l} className="px-4 py-3">{s.l}</th>)}
                </tr>
              </thead>
              <tbody>
                {KEYS.map((k) => (
                  <tr
                    key={k}
                    onClick={() => { change(k); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className={`cursor-pointer border-t border-blue-50 transition hover:bg-yellow-50 ${k === active ? "bg-yellow-50" : ""}`}
                  >
                    <td className="px-4 py-3 font-bold text-blue-900">{programsData[k].emoji} {programsData[k].label}</td>
                    {programsData[k].stats.map((s) => <td key={s.l} className="px-4 py-3 text-slate-700">{s.v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="mx-auto max-w-3xl px-4 pb-16 lg:px-8">
          <SectionHead title={`${p.label} questions`} />
          <div className="space-y-3">
            {p.faq.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className={`overflow-hidden rounded-2xl border bg-white ${open ? "border-yellow-400 shadow-md" : "border-blue-100"}`}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-blue-950"
                  >
                    {f.q}
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white transition-transform ${open ? "rotate-45 bg-yellow-400 text-blue-950" : ""}`}>+</span>
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