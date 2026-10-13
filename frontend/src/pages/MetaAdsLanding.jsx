import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Check,
  ChevronDown,
  GraduationCap,
  IndianRupee,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { submitMetaLead } from "../services/leadService";
import {
  getLeadTrackingData,
  trackLeadSubmission,
} from "../services/analytics";
import logo from "../assets/images/Logo_FeedingUniversity.png";

const programs = [
  "Online MBA",
  "Executive MBA",
  "Online BBA",
  "Online MCA",
  "Online BCA",
  "Online B.Com",
  "Online M.Com",
  "Online BA",
  "Online MA",
  "Data Science",
  "AI & ML",
  "Cyber Security",
  "Not sure yet",
];

const universities = [
  "Amity University Online",
  "Manipal University Online",
  "Chandigarh University Online",
  "Lovely Professional University Online",
  "Jain University Online",
  "NMIMS Online",
  "DY Patil University Online",
  "Sharda University Online",
  "Uttaranchal University Online",
  "UPES Online",
  "Not sure yet",
];

const initialFormData = {
  name: "",
  mobileNumber: "",
  email: "",
  city: "",
  state: "",
  interestedProgram: "",
  preferredUniversity: "",
  budget: "",
  message: "",
};

const inputClassName =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-indigo-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10";

const labelClassName = "mb-1.5 block text-xs font-semibold text-slate-700";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Check recognition",
    description:
      "Know what to verify for your chosen university, program and academic session.",
  },
  {
    icon: IndianRupee,
    title: "Understand the costs",
    description:
      "Compare published fees and ask about payment or EMI options before applying.",
  },
  {
    icon: BookOpenCheck,
    title: "Compare what matters",
    description:
      "Explore eligibility, specializations, learning format and admission steps.",
  },
];

const faqs = [
  {
    question: "Is the counselling free?",
    answer:
      "Yes. You can get help comparing programs and understanding the admission process without paying a counselling fee.",
  },
  {
    question: "Will you help me choose a university?",
    answer:
      "A counsellor can help you compare options based on your program, eligibility, budget and preferences. The final choice is always yours.",
  },
  {
    question: "Are all online degrees automatically valid?",
    answer:
      "Recognition depends on the university, program and academic session. Check the current UGC-DEB entitlement and confirm details with the university before applying.",
  },
];

function Field({ id, label, error, children, className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>

      {children}

      {error && (
        <p className="mt-1 text-xs text-rose-700">
          {error}
        </p>
      )}
    </div>
  );
}

function MetaAdsLeadForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setFieldErrors((previous) => {
      if (!previous[name]) {
        return previous;
      }

      const next = { ...previous };
      delete next[name];
      return next;
    });

    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setError("");
    setFieldErrors({});

    const trackingData = getLeadTrackingData("Meta Ads Landing Page");
    const utmCampaign = trackingData.utmCampaign || "";

    const leadData = {
      // User form data
      name: formData.name,
      mobileNumber: formData.mobileNumber,
      email: formData.email,
      city: formData.city,
      state: formData.state,
      interestedProgram: formData.interestedProgram,
      preferredUniversity: formData.preferredUniversity,
      budget: formData.budget,
      message: formData.message,

      // Backend aliases for compatibility
      phone: formData.mobileNumber,
      course: formData.interestedProgram,
      courseInterestedIn: formData.interestedProgram,
      programInterest: formData.interestedProgram,
      university: formData.preferredUniversity,
      universityPreference: formData.preferredUniversity,

      // Meta Sheet metadata
      leadCategory: "Meta Ads Lead",
      sheetTab: "Meta",
      formName: trackingData.formName,
      ctaAction: "Lead Form Submit",
      ctaLabel: "Get free guidance",

      // Website/page details
      // No brochure is downloaded from this form
      brochureLink: "",

      ...trackingData,

      // Extra campaign aliases if backend stores them
      source: "Meta",
      campaign: utmCampaign,
      adSet: trackingData.utmTerm || "",
      adCreative: trackingData.utmContent || "",
    };

    try {
      // Important: submit leadData, not leadPayload.
      const response = await submitMetaLead(leadData);

      if (response.success) {
        trackLeadSubmission({
          formName: trackingData.formName,
          eventId: response.eventId || trackingData.eventId,
          leadId: response.leadId,
        });

        navigate("/thank-you", { state: { formName: trackingData.formName } });
      } else {
        setError("We couldn't submit your request. Please try again.");
      }
    } catch (requestError) {
      console.error("Meta ads lead submission error:", requestError);

      const validationErrors = requestError.response?.data?.errors;

      setError(
        requestError.response?.data?.message ||
          "We couldn't submit your request. Please check your connection and try again."
      );

      if (validationErrors && typeof validationErrors === "object") {
        setFieldErrors(validationErrors);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      id="lead-form"
      className="scroll-mt-6 rounded-3xl bg-white p-5 shadow-[0_28px_80px_-30px_rgba(15,23,42,0.55)] ring-1 ring-white/70 sm:p-7"
    >
      <>
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">
              Free, no-pressure guidance
            </p>

            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#0F1B3D]">
              Find your next step
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Tell us a little about your plans. A counsellor can help you
              compare suitable options.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid gap-3.5 sm:grid-cols-2">
              <Field
                id="meta-name"
                label="Full name *"
                error={fieldErrors.name}
              >
                <input
                  id="meta-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={200}
                  className={inputClassName}
                />
              </Field>

              <Field
                id="meta-phone"
                label="Mobile number *"
                error={fieldErrors.mobileNumber}
              >
                <input
                  id="meta-phone"
                  name="mobileNumber"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Your phone number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  maxLength={20}
                  pattern="[0-9+\-\s()]{7,20}"
                  className={inputClassName}
                />
              </Field>

              <Field
                id="meta-email"
                label="Email address *"
                error={fieldErrors.email}
              >
                <input
                  id="meta-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={254}
                  className={inputClassName}
                />
              </Field>

              <Field
                id="meta-program"
                label="Program you're exploring *"
                error={
                  fieldErrors.interestedProgram ||
                  fieldErrors.courseInterestedIn
                }
              >
                <select
                  id="meta-program"
                  name="interestedProgram"
                  value={formData.interestedProgram}
                  onChange={handleChange}
                  required
                  className={inputClassName}
                >
                  <option value="">Select a program</option>

                  {programs.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                id="meta-city"
                label="City *"
                error={fieldErrors.city}
              >
                <input
                  id="meta-city"
                  name="city"
                  autoComplete="address-level2"
                  placeholder="Your city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className={inputClassName}
                />
              </Field>

              <Field
                id="meta-state"
                label="State *"
                error={fieldErrors.state}
              >
                <input
                  id="meta-state"
                  name="state"
                  autoComplete="address-level1"
                  placeholder="Your state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className={inputClassName}
                />
              </Field>

              <Field
                id="meta-university"
                label="Preferred university *"
                error={
                  fieldErrors.preferredUniversity ||
                  fieldErrors.universityPreference
                }
                className="sm:col-span-2"
              >
                <select
                  id="meta-university"
                  name="preferredUniversity"
                  value={formData.preferredUniversity}
                  onChange={handleChange}
                  required
                  className={inputClassName}
                >
                  <option value="">Choose a university</option>

                  {universities.map((university) => (
                    <option key={university} value={university}>
                      {university}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3.5 font-extrabold text-slate-950 shadow-lg shadow-amber-400/20 transition hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-300/40 disabled:cursor-wait disabled:opacity-60"
            >
              {loading ? "Sending your request..." : "Get free guidance"}
              {!loading && <ArrowRight size={18} />}
            </button>

            <p className="text-center text-xs leading-5 text-slate-500">
              By submitting, you agree that our team may contact you about
              your enquiry. Your details are used to respond to this request.
            </p>
          </form>
      </>
    </div>
  );
}

export default function MetaAdsLanding() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;

    const landingDescription =
      "Compare online degree programs, universities, fees and eligibility with free, no-pressure guidance from Feeding Universities.";

    document.title = "Free Online Degree Guidance | Feeding Universities";
    description?.setAttribute("content", landingDescription);

    return () => {
      document.title = previousTitle;

      if (description && previousDescription !== undefined) {
        description.setAttribute("content", previousDescription);
      }
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      <div className="bg-slate-950 text-white">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/"
            aria-label="Feeding Universities home"
            className="inline-flex items-center rounded-lg bg-white px-3 py-2"
          >
            <img
              src={logo}
              alt="Feeding Universities"
              className="h-9 w-auto"
            />
          </Link>

          <Link
            to="/counselling"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-white transition hover:border-amber-300 hover:text-amber-300"
          >
            Talk to a counsellor
            <ArrowDown size={15} />
          </Link>
        </header>

        <section className="relative isolate">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.34),transparent_48%),linear-gradient(135deg,#020617_0%,#111943_55%,#312e81_100%)]"
          />

          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-300/25 bg-white/10 px-3.5 py-2 text-xs font-bold text-indigo-100 backdrop-blur">
                <Sparkles size={15} className="text-amber-300" />
                Your next degree, made easier to compare
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Find an online degree that{" "}
                <span className="text-amber-300">fits your next move.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-indigo-100 sm:text-lg sm:leading-8">
                Compare programs, universities, fees and eligibility—with free
                guidance to help you make an informed choice.
              </p>

              <ul className="mt-7 space-y-3">
                {[
                  "Compare options around your goals and budget",
                  "Understand eligibility and admission requirements",
                  "Know what to verify before you apply",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm font-medium text-white sm:text-base"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                      <Check size={13} strokeWidth={3} />
                    </span>

                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs font-semibold text-indigo-100">
                  <BadgeCheck size={17} className="text-amber-300" />
                  Recognition-first guidance
                </span>

                <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs font-semibold text-indigo-100">
                  <GraduationCap size={17} className="text-amber-300" />
                  No-pressure support
                </span>
              </div>

              <p className="mt-7 max-w-xl text-xs leading-5 text-indigo-200/80">
                Program availability, fees and recognition vary by university
                and academic session. Confirm current details with the
                university before applying.
              </p>
            </div>

            <MetaAdsLeadForm />
          </div>
        </section>
      </div>

      <section className="border-b border-slate-100 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-indigo-600">
              Make a confident choice
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Clear answers before you apply
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-600">
              Get help comparing the details that matter—not just the
              university name.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    index === 1
                      ? "bg-amber-100 text-amber-800"
                      : "bg-indigo-50 text-indigo-700"
                  }`}
                >
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-slate-900">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-indigo-600">
              Simple process
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              From question to shortlist
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Start with what you want to study. We’ll help you understand
              possible next steps so you can decide at your own pace.
            </p>

            <a
              href="#lead-form"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white shadow-lg shadow-indigo-700/15 hover:bg-indigo-800"
            >
              Start with free guidance
              <ArrowRight size={18} />
            </a>
          </div>

          <ol className="space-y-3">
            {[
              [
                "01",
                "Share what you're looking for",
                "Tell us your preferred program, location and priorities.",
              ],
              [
                "02",
                "Compare relevant options",
                "Review eligibility, fees, learning format and university details.",
              ],
              [
                "03",
                "Choose your next step",
                "Verify current requirements with the university before you apply.",
              ],
            ].map(([number, title, description]) => (
              <li
                key={number}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-black text-indigo-700">
                  {number}
                </span>

                <div>
                  <h3 className="font-extrabold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-indigo-600">
              Good to know
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-8 divide-y divide-slate-200">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900 marker:hidden">
                  {question}

                  <ChevronDown
                    size={18}
                    className="shrink-0 text-indigo-600 transition group-open:rotate-180"
                  />
                </summary>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-950 px-5 py-12 text-center text-white sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold text-amber-300">
            Your next step can start with a conversation
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Ready to compare your options?
          </h2>

          <p className="mt-3 text-indigo-100">
            Share your details and get free, no-pressure guidance.
          </p>

          <a
            href="#lead-form"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 font-extrabold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-300"
          >
            Get free guidance
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Link to="/" aria-label="Feeding Universities home">
            <img
              src={logo}
              alt="Feeding Universities"
              className="h-8 w-auto"
            />
          </Link>

          <p>
            Information is for guidance only. Verify current program and
            recognition details with the university.
          </p>

          <Link
            to="/counselling"
            className="inline-flex items-center gap-1 font-semibold text-indigo-700 hover:text-indigo-900"
          >
            Contact us
            <ArrowRight size={15} />
          </Link>
        </div>
      </footer>
    </main>
  );
}