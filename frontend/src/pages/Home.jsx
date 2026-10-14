import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Users,
  Compass,
  Cpu,
  TrendingUp,
  Palette,
  BadgeCheck,
  PhoneCall,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Sun,
  PlayCircle,
  CalendarClock,
  Home,
  MapPin,
  Building2,
  Zap,
} from "lucide-react";
import CounsellingButton from "../components/CounsellingButton";
import amityPhoto from "../assets/University Photo/optimized/1. Amity University.800.jpg";
import manipalPhoto from "../assets/University Photo/optimized/3. Manipal University Jaipur (MUJ).800.jpg";
import chandigarhPhoto from "../assets/University Photo/optimized/6. Chandigarh University.800.jpg";
import lpuPhoto from "../assets/University Photo/optimized/2. LPU Online.800.jpg";
import jainPhoto from "../assets/University Photo/optimized/7. JAIN University.800.jpg";
import nmimsPhoto from "../assets/University Photo/optimized/5. NMIMS University.800.jpg";

/* ============================= DATA ============================= */
const ROUTES = {
  Management: "/management",
  Technology: "/technology",
  Commerce: "/commerce",
  Arts: "/arts",
};

const concerns = [
  "Choosing a program",
  "Fees & EMI options",
  "Career clarity",
  "Admission process",
  "Compare universities",
];
const trustMarquee = [
  "Zero brokerage",
  "UGC-DEB verified",
  "₹60L+ given back",
  "No agent markups",
  "15,000+ campuses tracked",
  "WES-ready guidance",
  "100+ exams tracked",
  "Free, always",
];

const categories = [
  {
    title: "Management",
    href: "/management",
    tags: ["Online MBA", "Executive MBA", "Online BBA", "DBA"],
    icon: Briefcase,
  },
  {
    title: "Technology",
    href: "/technology",
    tags: [
      "Online MCA",
      "Online BCA",
      "Data Science",
      "AI & ML",
      "Cyber Security",
    ],
    icon: Cpu,
  },
  {
    title: "Commerce",
    href: "/commerce",
    tags: ["Online B.Com", "Online M.Com", "Finance & Accounting"],
    icon: TrendingUp,
  },
  {
    title: "Arts & Humanities",
    href: "/arts",
    tags: ["Online BA", "Online MA", "Psychology", "English"],
    icon: Palette,
  },
  {
    title: "Explore By Goal",
    href: "/explore-by-goal",
    tags: [
      "Working Professionals",
      "Fresh Graduates",
      "Career Switchers",
      "Government Job Aspirants",
    ],
    icon: Compass,
  },
];

const paths = [
  {
    title: "Working Professional",
    copy: "Compare flexible MBA/MCA programs that fit around your job and appraisal cycle.",
    icon: Briefcase,
  },
  {
    title: "Fresh Graduate",
    copy: "Find entry-friendly programs and specializations that open the right first job.",
    icon: GraduationCap,
  },
  {
    title: "After 12th Explorer",
    copy: "Understand BBA, BCA and undergrad options with real, verified eligibility rules.",
    icon: Compass,
  },
  {
    title: "Parent / Mentor",
    copy: "Get a plain-language explainer to guide someone else's degree decision confidently.",
    icon: Users,
  },
  {
    title: "University Partner",
    copy: "Partner with a verified discovery platform trusted for accurate program data.",
    icon: BadgeCheck,
  },
];

const universities = [
  {
    id: "amity-university-online",
    name: "Amity University Online",
    loc: "Noida, Uttar Pradesh",
    tag: "PRIVATE UNIVERSITY",
    courses: 49,
    image: amityPhoto,
  },
  {
    id: "manipal-university-online",
    name: "Manipal University Online",
    loc: "Jaipur, Rajasthan",
    tag: "PRIVATE UNIVERSITY",
    courses: 34,
    image: manipalPhoto,
  },
  {
    id: "chandigarh-university-online",
    name: "Chandigarh University Online",
    loc: "Mohali, Punjab",
    tag: "PRIVATE UNIVERSITY",
    courses: 51,
    image: chandigarhPhoto,
  },
  {
    id: "lovely-professional-university-online",
    name: "Lovely Professional University Online",
    loc: "Phagwara, Punjab",
    tag: "PRIVATE UNIVERSITY",
    courses: 31,
    image: lpuPhoto,
  },
  {
    id: "jain-university-online",
    name: "Jain Online (JGI)",
    loc: "Bengaluru, Karnataka",
    tag: "PRIVATE UNIVERSITY",
    courses: 53,
    image: jainPhoto,
  },
  {
    id: "nmims-online",
    name: "NMIMS Online",
    loc: "Mumbai, Maharashtra",
    tag: "DEEMED UNIVERSITY",
    courses: 20,
    image: nmimsPhoto,
  },
];

const degreeTypes = [
  ["MBA", "Management & Leadership", "186 programs"],
  ["BBA", "Business Administration", "79 programs"],
  ["MCA", "Computer Applications", "57 programs"],
  ["BCA", "Computer Applications", "30 programs"],
  ["MA", "Arts & Humanities", "23 programs"],
  ["BA", "Arts & Humanities", "11 programs"],
  ["M.Com", "Advanced Commerce", "10 programs"],
  ["B.Com", "Commerce & Finance", "13 programs"],
];

const flexibility = [
  {
    icon: Sun,
    title: "Live at your hour",
    copy: "Morning or late-night batches available. Choose the time when you learn best.",
  },
  {
    icon: PlayCircle,
    title: "Recorded lectures",
    copy: "Watch again, pause, rewind, or learn at your own pace.",
  },
  {
    icon: CalendarClock,
    title: "Weekend exam windows",
    copy: "Take your exams during windows that fit around your week.",
  },
  {
    icon: Home,
    title: "Zero commute",
    copy: "Couch, café or commute. Your classroom goes where you go.",
  },
];

const outcomeStats = [
  ["87%", "got a hike within a year of graduating"],
  ["9 in 10", "said their degree opened new doors"],
  ["3 in 4", "got an offer within a year of graduation"],
  ["92%", "referred a friend or family member"],
];

const testimonials = [
  {
    name: "Rahul P.",
    detail: "MBA, Manipal Jaipur",
    quote:
      "Got placed within 3 months of graduating while still working my previous job. The program opened more doors than I expected.",
  },
  {
    name: "Ananya S.",
    detail: "BCA, Amity Online",
    quote:
      "Finished my degree while freelancing and saved my family a meaningful amount. My parents went from skeptical to proud within a year.",
  },
];

const parentFaqs = [
  {
    q: "What if employers don't take it seriously?",
    a: "UGC-DEB approved degrees carry the same legal standing, and the certificate doesn't say 'online'. Eligibility for government jobs depends on each recruiter's notification, so check it for your target exam.",
  },
  {
    q: "Is this just watching recorded videos?",
    a: "Not at all. Expect live lectures with real faculty, proctored exams, structured assignments and discussion forums, on the same syllabus as campus.",
  },
  {
    q: "How do we know a university is genuine?",
    a: "Check one thing first: UGC-DEB approval. Every listing here is checked against official records before it goes live.",
  },
  {
    q: "Will they miss out on the 'college experience'?",
    a: "They gain a different one. Online students tend to build stronger discipline, time management and professional habits.",
  },
];

const steps = [
  {
    title: "Select Program",
    copy: "Tell us your goal: degree, specialization and pace.",
  },
  {
    title: "Compare Universities",
    copy: "See verified fees, eligibility and accreditation side by side.",
  },
  {
    title: "Check Eligibility",
    copy: "Confirm you meet each university's entry requirements.",
  },
  {
    title: "Speak to a Counsellor",
    copy: "Get a free, no-obligation call to sanity-check your shortlist.",
  },
  {
    title: "Apply & Start Learning",
    copy: "Submit your application and begin your program on schedule.",
  },
];

const faqs = [
  {
    q: "Is counselling really free?",
    a: "Yes. Guidance, university comparison and eligibility checks cost nothing. Universities fund the platform, not you.",
  },
  {
    q: "Do you guarantee admission?",
    a: "No platform can guarantee admission. We guarantee accurate, verified information so your application has the best real chance.",
  },
  {
    q: "Are all the university details verified?",
    a: "Every listing is checked against UGC-DEB status and the university's own official disclosures before it goes live.",
  },
];

/* ---------- PROGRAMS THAT FIT (ids match #hash on each category page) ---------- */
const PROGRAMS = {
  "online-mba": { label: "Online MBA", emoji: "🎓", cat: "Management" },
  "executive-mba": { label: "Executive MBA", emoji: "💼", cat: "Management" },
  "online-bba": { label: "Online BBA", emoji: "📘", cat: "Management" },
  dba: { label: "DBA", emoji: "🏅", cat: "Management" },
  "online-mca": { label: "Online MCA", emoji: "💻", cat: "Technology" },
  "online-bca": { label: "Online BCA", emoji: "🖥️", cat: "Technology" },
  "data-science": { label: "Data Science", emoji: "📊", cat: "Technology" },
  "ai-ml": { label: "AI & ML", emoji: "🤖", cat: "Technology" },
  "cyber-security": { label: "Cyber Security", emoji: "🛡️", cat: "Technology" },
  "online-bcom": { label: "Online B.Com", emoji: "📒", cat: "Commerce" },
  "online-mcom": { label: "Online M.Com", emoji: "📈", cat: "Commerce" },
  "finance-accounting": {
    label: "Finance & Accounting",
    emoji: "🧮",
    cat: "Commerce",
  },
  "online-ba": { label: "Online BA", emoji: "🎨", cat: "Arts" },
  "online-ma": { label: "Online MA", emoji: "📜", cat: "Arts" },
  psychology: { label: "Psychology", emoji: "🧠", cat: "Arts" },
  english: { label: "English", emoji: "📚", cat: "Arts" },
};
const ALL = ["12th", "graduate", "postgrad"];
const GRAD = ["graduate", "postgrad"];
const GOALS = [
  ["working-professionals", "Working Professionals", "💼"],
  ["fresh-graduates", "Fresh Graduates", "🎓"],
  ["career-switchers", "Career Switchers", "🔄"],
  ["govt-job-aspirants", "Government Job Aspirants", "🏛️"],
];
// [programId, reason, qualifications allowed]
const PICKS = {
  "working-professionals": [
    ["executive-mba", "Leadership track for 5+ years of experience.", GRAD],
    ["online-mba", "Broad management upgrade with specializations.", GRAD],
    ["data-science", "Add analytics skills to your current role.", GRAD],
    ["finance-accounting", "Practical finance and tool skills.", ALL],
    ["dba", "Doctoral route for senior leaders.", ["postgrad"]],
    ["online-bba", "Get a degree first if you lack one.", ["12th"]],
    ["online-bcom", "Commerce degree alongside your job.", ["12th"]],
  ],
  "fresh-graduates": [
    ["online-mba", "Management base for many first roles.", GRAD],
    ["online-mca", "Software and IT roles, with maths or bridge rules.", GRAD],
    ["cyber-security", "Hands-on security with lab practice.", GRAD],
    ["ai-ml", "AI skills if you have maths and coding basics.", GRAD],
    ["online-mcom", "Deeper finance and commerce.", GRAD],
    ["online-ma", "Subject depth, teaching or research route.", GRAD],
    ["online-bba", "Start business studies after 12th.", ["12th"]],
    ["online-bca", "Start tech studies after 12th.", ["12th"]],
  ],
  "career-switchers": [
    [
      "data-science",
      "Analytics, if you are comfortable with maths and data.",
      GRAD,
    ],
    ["ai-ml", "AI roles, with coding and maths groundwork.", GRAD],
    ["cyber-security", "Security roles with lab-based learning.", GRAD],
    [
      "online-mca",
      "Software careers, with bridge rules for non-IT graduates.",
      GRAD,
    ],
    ["finance-accounting", "Accounts and finance skills.", ALL],
    ["online-mba", "Move across business functions.", GRAD],
    ["psychology", "People-focused fields. Check regulated routes.", ALL],
  ],
  "govt-job-aspirants": [
    ["online-ba", "Common any-stream graduation route.", ["12th"]],
    ["online-bcom", "Useful for accounts or banking-related exams.", ["12th"]],
    ["online-bba", "Management degree after 12th.", ["12th"]],
    ["online-ma", "Subject depth, or a path to teaching routes.", GRAD],
    ["online-mcom", "Commerce master's for finance-linked roles.", GRAD],
    ["english", "Language and communication strength.", ALL],
    [
      "psychology",
      "Subject choice for some optional papers. Check the syllabus.",
      ALL,
    ],
  ],
};

// Filters a goal's picks by qualification (no hooks here, safe at module level)
const picksFor = (goalKey, edu) => {
  const all = PICKS[goalKey] || [];
  return edu ? all.filter((p) => p[2].includes(edu)) : all;
};

/* ============================= UI HELPERS (white + blue + yellow theme) ============================= */
const glass =
  "rounded-2xl border border-[#E1E9FF] bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(44,92,246,0.35)]";
const glassDk =
  "rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl";
const lift =
  "transition duration-300 hover:-translate-y-1 hover:border-[#2C5CF6]/50 hover:shadow-[0_22px_50px_-20px_rgba(44,92,246,0.55)]";
const grad =
  "bg-linear-to-r from-[#2C5CF6] to-[#E9A93A] bg-clip-text text-transparent";
const btnY =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7C948] px-6 py-3.5 text-sm font-semibold text-[#0B1220] shadow-[0_12px_30px_-10px_rgba(233,169,58,0.8)] transition hover:-translate-y-0.5 hover:bg-[#FFD75E]";
const btnB =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-[#2C5CF6] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(44,92,246,0.8)] transition hover:-translate-y-0.5 hover:bg-[#2549CC]";
const btnG =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-[#2C5CF6]/30 bg-white px-6 py-3.5 text-sm font-semibold text-[#2C5CF6] transition hover:border-[#2C5CF6] hover:bg-[#F4F7FF]";
const TONES = {
  white: "bg-white",
  tint: "bg-linear-to-b from-[#F4F7FF] via-[#EEF3FF] to-white",
  blue: "bg-linear-to-br from-[#1B2A64] via-[#2C5CF6] to-[#1B2A64] text-white",
};

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function Section({ id, tone = "white", children }) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 ${TONES[tone]}`}
    >
      {tone === "blue" && (
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#F7C948]/25 blur-[100px]" />
      )}
      <div className="relative mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function Head({ eyebrow, title, sub, dark }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-[11px] font-semibold tracking-[0.2em] ${dark ? "border-white/25 bg-white/10 text-white/80" : "border-[#2C5CF6]/25 bg-[#2C5CF6]/[0.07] text-[#2C5CF6]"}`}
      >
        <Zap className="h-3 w-3 text-[#E9A93A]" />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl ${dark ? "text-white" : "text-[#0B1220]"}`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-4 text-[15px] leading-relaxed ${dark ? "text-white/70" : "text-[#4A5578]"}`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}

function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className={`${glass} divide-y divide-[#E1E9FF] overflow-hidden`}>
      {items.map((f, i) => (
        <div key={f.q} className={open === i ? "bg-[#F4F7FF]/70" : ""}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="text-[14.5px] font-semibold text-[#0B1220]">
              {f.q}
            </span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-[#2C5CF6] transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <p className="px-6 pb-5 text-[13.5px] leading-relaxed text-[#4A5578]">
              {f.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function Pill({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition ${
        active
          ? "border-[#F7C948] bg-[#F7C948] text-[#0B1220] shadow-[0_8px_20px_-8px_rgba(233,169,58,0.9)]"
          : "border-[#D7E0FF] bg-white text-[#4A5578] hover:border-[#2C5CF6] hover:text-[#2C5CF6]"
      }`}
    >
      {children}
    </button>
  );
}

/* ---------- Programs that fit: hooks live INSIDE this component (fixes the invalid hook call) ---------- */
function ProgramsFit() {
  const [goal, setGoal] = useState("working-professionals");
  const [edu, setEdu] = useState("");
  const picks = picksFor(goal, edu);
  const goalLabel = GOALS.find((g) => g[0] === goal)[1];

  return (
    <Section id="picks">
      <Head
        eyebrow="PERSONALISED MATCHES"
        title={
          <>
            Programs that fit{" "}
            <span className={grad}>{goalLabel.toLowerCase()}</span>
          </>
        }
        sub="Pick your goal and qualification. We show only what you can actually apply for."
      />
      <Reveal>
        <div className="mb-3 flex flex-wrap justify-center gap-2">
          {GOALS.map(([key, label, emoji]) => (
            <Pill key={key} active={goal === key} onClick={() => setGoal(key)}>
              {emoji} {label}
            </Pill>
          ))}
        </div>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-[#8C96B8]">
            Qualification
          </span>
          {[
            ["12th", "12th pass"],
            ["graduate", "Graduate"],
            ["postgrad", "Postgraduate"],
          ].map(([v, t]) => (
            <Pill
              key={v}
              active={edu === v}
              onClick={() => setEdu(edu === v ? "" : v)}
            >
              {t}
            </Pill>
          ))}
        </div>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {picks.map(([id, why]) => {
          const pr = PROGRAMS[id];
          return (
            <a
              key={`${goal}-${id}`}
              href={`${ROUTES[pr.cat]}#${id}`}
              className={`${glass} ${lift} group p-5`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{pr.emoji}</span>
                <span className="rounded-full bg-[#F7C948]/25 px-2.5 py-0.5 text-[11px] font-bold text-[#8A6100]">
                  {pr.cat}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-[#0B1220]">
                {pr.label}
              </h3>
              <p className="mt-1 text-[13px] text-[#6B7594]">{why}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[#2C5CF6]">
                View program{" "}
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </span>
            </a>
          );
        })}
      </div>
      {picks.length === 0 && (
        <p className="mt-6 text-center text-sm text-[#8A6100]">
          No match for that qualification here. Try another one or talk to a
          counsellor.
        </p>
      )}
    </Section>
  );
}

/* ============================= PAGE ============================= */
export default function DegreeCounsellingHome() {
  const [audience, setAudience] = useState("Student");
  const [concern, setConcern] = useState("Choosing a program");

  return (
    <div className="overflow-x-hidden bg-white font-body text-[#0B1220]">
      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -top-32 -right-24 h-136 w-136 rounded-full bg-[#2C5CF6]/15 blur-[110px]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 9, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-52 -left-28 h-96 w-96 rounded-full bg-[#F7C948]/30 blur-[110px]"
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 11, repeat: Infinity }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(44,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(44,92,246,0.08) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
              maskImage:
                "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#2C5CF6]/25 bg-[#F4F7FF] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#2C5CF6]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#E9A93A]" /> TRUSTED BY
            25,000+ FAMILIES
          </motion.div>

          <div className="grid gap-10 sm:gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-xl font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[3.65rem]"
              >
                Don't just earn
                <br />
                a degree.
                <br />
                <span className="relative mt-1 inline-block text-[#F7C948]">
                  Build your future.
                  <svg
                    viewBox="0 0 320 12"
                    fill="none"
                    className="absolute -bottom-2 left-0 w-full"
                  >
                    <path
                      d="M3 8C83 2 210 2 317 7"
                      stroke="#F7C948"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </motion.h1>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-[#4A5578]">
                No agents. No markups. Compare UGC-DEB certified online MBA, MCA
                and other degree programs, including fees, eligibility, EMI
                options and career scope. Then get a free admission counselling
                call.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="/universities" className={btnB}>
                  Find My Best University <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/compare" className={btnG}>
                  Compare Universities
                </a>
              </div>
            </div>

            {/* Concern selector card */}
            <div className="relative">
              <motion.div
                className="absolute -top-5 -left-4 z-10 hidden items-center gap-2 rounded-full border border-[#E1E9FF] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#2C5CF6] shadow-xl sm:flex"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <ShieldCheck className="h-3.5 w-3.5 text-[#E9A93A]" /> UGC-DEB
                verified
              </motion.div>
              <div className="absolute -inset-1 rounded-[30px] bg-linear-to-br from-[#2C5CF6]/40 to-[#F7C948]/50 blur-xl" />
              <div className={`${glass} relative bg-white! p-7`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#2C5CF6]">
                  What's your main concern?
                </p>
                <p className="mt-1.5 text-[13px] text-[#6B7594]">
                  We'll match you with the right expert.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {concerns.map((c) => (
                    <Pill
                      key={c}
                      active={concern === c}
                      onClick={() => setConcern(c)}
                    >
                      {c}
                    </Pill>
                  ))}
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-[#8C96B8]">
                  I'm a
                </p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {["Student", "Parent"].map((a) => (
                    <button
                      key={a}
                      onClick={() => setAudience(a)}
                      className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${audience === a ? "bg-[#2C5CF6] text-white shadow-[0_10px_24px_-10px_rgba(44,92,246,0.9)]" : "border border-[#D7E0FF] text-[#4A5578] hover:border-[#2C5CF6]"}`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
                <Link to="/counselling" className={`${btnY} mt-6 w-full`}>
                  Book My Free Session
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust marquee */}
        <div className="relative overflow-hidden bg-[#0B1220] py-3.5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(44,92,246,0.25),transparent_55%)]" />
          <motion.div
            className="relative flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...trustMarquee, ...trustMarquee].map((t, i) => (
              <div
                key={`${t}-${i}`}
                className="mx-6 flex items-center gap-3 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.14em] text-white/70 sm:text-[12px]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#F7C948] shadow-[0_0_10px_#F7C948]" />
                {t}
                <span className="text-[#2C5CF6]">✦</span>
              </div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#0B1220] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#0B1220] to-transparent" />
        </div>
      </section>
      
      {/* ===================== PROGRAMS THAT FIT (fixed) ===================== */}
      <ProgramsFit />

      {/* ===================== PROGRAM DISCOVERY SEARCH ===================== */}
      <Section tone="tint">
        <div className="relative w-full max-w-none overflow-hidden rounded-4xl px-4 sm:px-8 lg:px-12 ">
          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#447DFD]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#F7C948]/15 blur-3xl" />

          <div className="relative z-10 w-full max-w-none">
            {/* Heading */}
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DCE5FF] bg-white px-4 py-2 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#F7C948]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2C5CF6] sm:text-xs">
                    Your Future. Your Choice.
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#101B3B] sm:text-5xl lg:text-6xl">
                  One decision.
                  <br className="sm:hidden" />{" "}
                  <span className="relative inline-block text-[#2C5CF6]">
                    Endless possibilities.
                    <svg
                      viewBox="0 0 320 12"
                      fill="none"
                      className="absolute -bottom-2 left-0 w-full"
                    >
                      <path
                        d="M3 8C85 2 215 2 317 7"
                        stroke="#F7C948"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>

                <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#66718F] sm:text-base">
                  Your ambitions deserve the right direction. Discover a degree
                  that matches your interests, your lifestyle, and the future
                  you're working towards.
                </p>
              </div>
            </Reveal>

            {/* Category cards: 3 top + 2 bottom */}
            <Reveal className="mt-12 w-full">
              <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
                {categories.slice(0, 5).map((c, index) => {
                  const styles = [
                    {
                      bg: "bg-[#2C5CF6]",
                      text: "text-white",
                      muted: "text-blue-100/75",
                      icon: "bg-white/15 text-white",
                      border: "border-[#2C5CF6]",
                      number: "text-white/20",
                      accent: "bg-[#F7C948]",
                    },
                    {
                      bg: "bg-white",
                      text: "text-[#101B3B]",
                      muted: "text-[#77819D]",
                      icon: "bg-[#EDF2FF] text-[#2C5CF6]",
                      border: "border-[#E2E9FC]",
                      number: "text-[#E8EDFA]",
                      accent: "bg-[#F7C948]",
                    },
                    {
                      bg: "bg-[#FFF5D6]",
                      text: "text-[#101B3B]",
                      muted: "text-[#81734B]",
                      icon: "bg-white/80 text-[#9B7411]",
                      border: "border-[#F6E4A6]",
                      number: "text-[#F0DFA8]",
                      accent: "bg-[#2C5CF6]",
                    },
                    {
                      bg: "bg-[#101B3B]",
                      text: "text-white",
                      muted: "text-blue-100/65",
                      icon: "bg-white/10 text-[#F7C948]",
                      border: "border-[#101B3B]",
                      number: "text-white/10",
                      accent: "bg-[#F7C948]",
                    },
                    {
                      bg: "bg-[#EAF0FF]",
                      text: "text-[#101B3B]",
                      muted: "text-[#647397]",
                      icon: "bg-white text-[#2C5CF6]",
                      border: "border-[#D6E1FF]",
                      number: "text-[#D9E3FF]",
                      accent: "bg-[#F7C948]",
                    },
                  ];

                  const s = styles[index];

                  return (
                    <a
                      key={c.title}
                      href={c.href}
                      className={`group relative isolate flex min-h-61.25 w-full flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#1B2A64]/10 sm:min-h-65 lg:col-span-2 ${
                        index >= 3 ? "lg:col-span-3 lg:min-h-57.5" : ""
                      } ${s.bg} ${s.border}`}
                    >
                      {/* Decorative number */}
                      <span
                        className={`pointer-events-none absolute -right-2 -top-7 select-none text-[115px] font-black leading-none tracking-tighter ${s.number}`}
                      >
                        0{index + 1}
                      </span>

                      {/* Icon */}
                      <div
                        className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${s.icon} transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
                      >
                        <c.icon className="h-6 w-6" />
                      </div>

                      {/* Card content */}
                      <div className="relative mt-auto pt-8">
                        <div
                          className={`mb-3 h-1 w-8 rounded-full ${s.accent} transition-all duration-300 group-hover:w-14`}
                        />

                        <h3
                          className={`max-w-[85%] text-xl font-bold tracking-tight sm:text-2xl ${s.text}`}
                        >
                          {c.title}
                        </h3>

                        <p className={`mt-2 text-sm ${s.muted}`}>
                          Discover your possibilities
                        </p>

                        <div
                          className={`mt-5 flex items-center gap-2 text-xs font-bold ${s.text}`}
                        >
                          Explore programmes
                          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-current/20 transition-all duration-300 group-hover:translate-x-1 group-hover:border-transparent group-hover:bg-[#F7C948] group-hover:text-[#101B3B]">
                            <svg
                              viewBox="0 0 20 20"
                              fill="none"
                              className="h-4 w-4"
                            >
                              <path
                                d="M4 10h12m-5-5 5 5-5 5"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>

                      {/* Hover glow */}
                      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ========================== CHOOSE YOUR PATH ========================== */}
      <Section tone="blue">
        <Head
          dark
          eyebrow="IDENTIFY YOURSELF"
          title="Choose your path"
          sub="Start with the route that matches your background. Each path leads to programs and universities suited to it."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {paths.map(({ title, copy, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div
                className={`${glassDk} group flex h-full flex-col justify-between p-6 transition duration-300 hover:-translate-y-1 hover:border-[#F7C948]/70 hover:bg-white/15`}
              >
                <div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7C948] shadow-[0_10px_24px_-8px_rgba(247,201,72,0.9)]">
                    <Icon className="h-5 w-5 text-[#0B1220]" />
                  </div>
                  <p className="mt-4 font-display text-[15px] font-semibold text-white">
                    {title}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/70">
                    {copy}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-[#F7C948]">
                  Explore{" "}
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      {/* ========================= RECOGNITION ========================= */}
      <Section>
        <Head
          eyebrow="RECOGNITION"
          title={
            <>
              One degree. <span className={grad}>Zero distinctions.</span>
            </>
          }
          sub="The certificate is identical. The only difference is where you sat."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className={`${glass} p-8`}>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#2C5CF6]/10 px-3 py-1 text-[11px] font-semibold text-[#2C5CF6]">
                <Building2 className="h-3.5 w-3.5" /> ON CAMPUS
              </span>
              <p className="mt-4 font-display text-xl font-semibold">
                UGC Approved
              </p>
              <p className="mt-1 text-[13px] text-[#6B7594]">
                Same syllabus, same examining body, same degree.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-[#F7C948]/70 bg-[#FFF9E8] p-8 shadow-[0_20px_50px_-25px_rgba(233,169,58,0.9)]">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#8A6100]">
                <ShieldCheck className="h-3.5 w-3.5" /> ONLINE
              </span>
              <p className="mt-4 font-display text-xl font-semibold">
                UGC Approved
              </p>
              <p className="mt-1 text-[13px] text-[#6B7594]">
                Offered under UGC-DEB entitlement. Identical seal, same validity
                when the program is approved for that session.
              </p>
            </div>
          </Reveal>
        </div>
        <p className="mt-6 text-center text-[13px] font-medium text-[#8C96B8]">
          No asterisks on your certificate
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            "Eligible for many government jobs. Always check each exam's notification",
            "Pursue M.Tech, MBA or PhD when the degree is recognised for that course",
            "Recognised for jobs and study abroad, subject to verification",
          ].map((t) => (
            <div key={t} className={`${glass} flex items-start gap-2 p-4`}>
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2C5CF6]" />
              <p className="text-[13px] text-[#4A5578]">{t}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#2C5CF6]">
            How do I verify a university? <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </Section>
      {/* ========================= UNIVERSITIES ========================= */}
      <Section id="universities" tone="tint">
        <Head
          eyebrow="START WITH A NAME YOU TRUST"
          title="UGC-DEB verified universities only"
          sub="Each card shows practical decision details. Recognition and eligibility should always be checked against official sources before applying."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {universities.map((u, i) => (
            <Reveal key={u.name} delay={(i % 3) * 0.08}>
              <div className={`${glass} ${lift} overflow-hidden bg-white!`}>
                <div className="relative h-32 overflow-hidden bg-[#EAF1FF]">
                  <img
                    src={u.image}
                    alt={`${u.name} campus`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#FEF6E0] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-[#8A6100]">
                      {u.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-[#8C96B8]">
                      {u.courses} Courses
                    </span>
                  </div>
                  <p className="mt-3 font-display text-[15px] font-semibold">
                    {u.name}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-[12px] text-[#8C96B8]">
                    <MapPin className="h-3 w-3" /> {u.loc}
                  </p>
                  <div className="mt-5 flex gap-2">
                    <Link
                      to="/universities"
                      state={{ universityId: u.id }}
                      className="flex-1 rounded-lg bg-[#2C5CF6] px-3 py-2 text-center text-[13px] font-semibold text-white transition hover:bg-[#2549CC]"
                    >
                      View Profile
                    </Link>
                    <Link
                      to="/compare"
                      state={{ universityId: u.id }}
                      className="flex-1 rounded-lg bg-[#F7C948] px-3 py-2 text-center text-[13px] font-semibold text-[#0B1220] transition hover:bg-[#FFD75E]"
                    >
                      Compare
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/universities"
            className="inline-flex items-center gap-2 rounded-lg border border-[#2C5CF6] px-5 py-3 text-[13px] font-semibold text-[#2C5CF6] transition hover:bg-[#2C5CF6] hover:text-white"
          >
            View all universities <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
      {/* ========================= SHORTLIST CTA ========================= */}
      <section className="bg-white px-6 py-16 lg:px-10">
        <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-4xl bg-linear-to-br from-[#2C5CF6] to-[#1B2A64] px-8 py-16 text-center shadow-[0_40px_90px_-30px_rgba(44,92,246,0.8)] sm:px-14">
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#F7C948]/40 blur-3xl" />
          <h2 className="relative font-display text-3xl font-semibold text-white sm:text-5xl">
            So, where should you actually go?
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-[15px] text-white/75">
            Get your personal college shortlist in 30 seconds, based on your
            interests, budget and goals.
          </p>
          <a href="/universities" className={`${btnY} relative mt-8`}>
            Find My Top Matches <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </section>
      {/* ========================= COST COMPARISON ========================= */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#2C5CF6]">
              COST COMPARISON
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
              Same degree. <span className={grad}>Meaningfully cheaper.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#4A5578]">
              Online programs typically skip hostel, food and travel costs. You
              pay for the degree, not the infrastructure around it.
            </p>
            <ul className="mt-6 space-y-2.5 text-[13.5px] text-[#4A5578]">
              {[
                "EMI options from a few thousand rupees a month",
                "Add certifications from recognised platforms",
                "Graduate with a smaller loan burden",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#E9A93A]" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-5 sm:grid-cols-2">
            <div className={`${glass} p-6`}>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#8C96B8]">
                On-Campus, Annual
              </p>
              <p className="mt-2 font-display text-3xl font-semibold">
                ₹3,00,000+
              </p>
              <ul className="mt-4 space-y-1.5 text-[12.5px] text-[#6B7594]">
                <li>Tuition ₹1.2L</li>
                <li>Hostel ₹80K</li>
                <li>Food ₹50K</li>
                <li>Travel ₹30K</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-[#F7C948] bg-[#FFF9E8] p-6 shadow-[0_24px_60px_-25px_rgba(233,169,58,0.9)]">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#8A6100]">
                Online, Annual
              </p>
              <p className="mt-2 font-display text-3xl font-semibold">
                ₹70,000–1,50,000
              </p>
              <ul className="mt-4 space-y-1.5 text-[12.5px] text-[#6B7594]">
                <li>Tuition fee only</li>
                <li className="font-semibold text-[#8A6100]">
                  40–60% typically saved
                </li>
                <li>EMI available on most programs</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>
      {/* ========================= DEGREE TYPES ========================= */}
      <Section tone="blue">
        <Head
          dark
          eyebrow="EVERY MAJOR DISCIPLINE"
          title="Great careers start with the right domain"
          sub="All UGC-verified, spanning postgraduate and undergraduate routes."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {degreeTypes.map(([code, label, count], i) => (
            <Reveal key={code} delay={(i % 4) * 0.06}>
              <div
                className={`${glassDk} p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#F7C948]/70 hover:bg-white/15`}
              >
                <p className="font-display text-2xl font-semibold text-[#F7C948]">
                  {code}
                </p>
                <p className="mt-1.5 text-[12px] text-white/70">{label}</p>
                <p className="mt-3 text-[11px] font-semibold text-white/50">
                  {count}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      {/* ========================= FLEXIBILITY ========================= */}
      <Section tone="tint">
        <Head
          eyebrow="FLEXIBILITY"
          title="Study when your brain is ready"
          sub="Degrees built around your life, not a fixed timetable."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {flexibility.map(({ icon: Icon, title, copy }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <div className={`${glass} ${lift} h-full p-6`}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-[#2C5CF6] to-[#7C9BFF] shadow-[0_10px_24px_-8px_rgba(44,92,246,0.9)]">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <p className="mt-4 font-display text-[15px] font-semibold">
                  {title}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-[#6B7594]">
                  {copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      {/* ========================= OUTCOMES + TESTIMONIALS ========================= */}
      <Section>
        <Head
          eyebrow="WHAT HAPPENS AFTER GRADUATION"
          title="Based on a survey of 5,000+ graduates"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {outcomeStats.map(([v, l], i) => (
            <Reveal key={l} delay={i * 0.06}>
              <div
                className={`${glass} border-t-4 border-t-[#F7C948]! p-6 text-center`}
              >
                <p className={`font-display text-4xl font-semibold ${grad}`}>
                  {v}
                </p>
                <p className="mt-2 text-[12.5px] leading-snug text-[#4A5578]">
                  {l}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <Reveal key={t.name}>
              <div className={`${glass} p-7`}>
                <p className="text-[14.5px] leading-relaxed text-[#4A5578]">
                  "{t.quote}"
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-[#2C5CF6] to-[#7C9BFF] text-[12px] font-bold text-white">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold">{t.name}</p>
                    <p className="text-[12px] text-[#8C96B8]">{t.detail}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/counselling" className={btnB}>
            Be One Of Them: Book A Free Session
          </Link>
        </div>
      </Section>
      {/* ========================= PARENTS FAQ ========================= */}
      <Section tone="tint">
        <div className="mx-auto max-w-3xl">
          <Head
            eyebrow="FOR PARENTS"
            title="Here's what we'd tell our own family"
            sub={`"Is this real? Are we making a mistake?" Honest answers to the questions parents actually ask.`}
          />
          <Accordion items={parentFaqs} />
          <div className="mt-8 text-center">
            <Link to="/counselling" className={btnG}>
              <PhoneCall className="h-4 w-4" /> Speak With A Parent Counsellor
            </Link>
          </div>
        </div>
      </Section>
      {/* ========================= ADMISSION PROCESS ========================= */}
      <Section tone="blue">
        <Head
          dark
          eyebrow="ADMISSION PROCESS"
          title="A clearer route from confusion to admission"
        />
        <div className="relative grid gap-8 sm:grid-cols-5">
          <div className="absolute left-[10%] right-[10%] top-5 hidden h-0.5 rounded-full bg-linear-to-r from-white/40 to-[#F7C948] sm:block" />
          {steps.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 0.08}
              className="relative flex flex-col items-center text-center"
            >
              <div
                className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${i % 2 === 0 ? "bg-white text-[#2C5CF6] shadow-[0_10px_24px_-8px_rgba(255,255,255,0.6)]" : "bg-[#F7C948] text-[#0B1220] shadow-[0_10px_24px_-8px_rgba(247,201,72,0.9)]"}`}
              >
                {i + 1}
              </div>
              <p className="mt-4 font-display text-[14px] font-semibold text-white">
                {s.title}
              </p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-white/65">
                {s.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>
      {/* ========================= FREE COUNSELLING ========================= */}
      <Section id="counselling">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#2C5CF6]">
              FREE COUNSELLING
            </span>

            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
              Get a shortlist based on{" "}
              <span className={grad}>eligibility, budget and career goal</span>
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-[#4A5578]">
              Share your details once. The counsellor works from your funding
              and timeline, so you only see universities that genuinely fit.
            </p>

            <ul className="mt-6 space-y-2.5 text-[13.5px] text-[#4A5578]">
              {[
                "No pressure, no spam calls",
                "Counsellor only shares verified details",
                "Evaluate options at your own pace",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#E9A93A]" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative flex min-h-100 items-center justify-center">
              <div className="absolute -inset-1 rounded-[26px] bg-linear-to-br from-[#2C5CF6]/30 to-[#F7C948]/40 blur-xl" />

              <div
                className={`${glass} relative w-full bg-[#F4F7FF]! p-8 text-center`}
              >
                <CheckCircle2 className="mx-auto h-10 w-10 text-[#2C5CF6]" />

                <h3 className="mt-5 font-display text-2xl font-semibold text-[#0B1220]">
                  Need help choosing the right university?
                </h3>

                <p className="mx-auto my-5 max-w-md text-sm leading-relaxed text-[#6B7594]">
                  Talk to our counsellors and get guidance based on your
                  eligibility, budget and career goals.
                </p>
                <CounsellingButton />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
      {/* ========================= FAQ ========================= */}
      <Section tone="tint">
        <div className="mx-auto max-w-3xl">
          <Head eyebrow="FAQ" title="Common questions before applying" />
          <Accordion items={faqs} />
        </div>
      </Section>
      {/* ========================= CTA BANNER ========================= */}
      <section className="bg-white px-6 pb-24 pt-8 lg:px-10">
        <Reveal className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 overflow-hidden rounded-4xl bg-linear-to-r from-[#2C5CF6] to-[#1B2A64] px-8 py-14 text-center shadow-[0_40px_90px_-30px_rgba(44,92,246,0.8)] sm:flex-row sm:text-left">
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-[#F7C948]/35 blur-3xl" />
          <div className="relative">
            <h3 className="font-display text-2xl font-semibold text-white sm:text-4xl">
              Ready to take the next step?
            </h3>
            <p className="mt-2 max-w-xl text-[14px] text-white/75">
              One free call with our counsellors. We'll help you find your
              program and guide you through the paperwork.
            </p>
          </div>
          <Link to="/counselling" className={`${btnY} relative shrink-0`}>
            <PhoneCall className="h-4 w-4" /> Book Free Consulting
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
