import { useState } from "react";
import { ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { submitCounsellingLead } from "../services/counsellingLeadService";
import {
  getLeadTrackingData,
  trackLeadSubmission,
} from "../services/analytics";

const initialFormData = {
  name: "",
  mobileNumber: "",
  email: "",
  city: "",
  state: "",
  highestQualification: "",
  interestedProgram: "",
  preferredUniversity: "",
  budget: "",
  preferredCallTime: "",
  message: "",
};

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

const inputClassName =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

function FormField({ id, label, error, children, className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-slate-700">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-rose-700">{error}</p>}
    </div>
  );
}

export default function Counselling() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [fieldErrors, setFieldErrors] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setFieldErrors((previous) => {
      if (!previous[name]) return previous;
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

    const trackingData = getLeadTrackingData("Counselling Page Form");
    const leadData = {
      ...formData,
      ...trackingData,
      leadCategory: "Counselling Lead",
      sheetTab: "COUNSELLING LEADS",
      ctaAction: "Counselling Form Submit",
      ctaLabel: "Get Counselling",
    };

    try {
      const response = await submitCounsellingLead(leadData);
      trackLeadSubmission({
        formName: trackingData.formName,
        eventId: response.eventId || trackingData.eventId,
        leadId: response.leadId,
      });
      navigate("/thank-you", {
        state: { formName: trackingData.formName },
      });
    } catch (requestError) {
      console.error("Counselling lead submission error:", requestError);
      const validationErrors = requestError.response?.data?.errors;
      setError(
        requestError.response?.data?.message ||
          "We couldn't submit your request. Please check your connection and try again.",
      );
      if (validationErrors && typeof validationErrors === "object") {
        setFieldErrors(validationErrors);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-indigo-900">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="container-main relative mx-auto grid gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14 lg:py-20">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              <GraduationCap size={18} />
              Free education counselling
            </div>
            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-tight sm:text-5xl">
              Find the right degree for your next move.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-blue-100">
              Share what you are looking for. Our team can help you compare
              programs, universities, fees and admission options.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-blue-50">
              {[
                "Compare programs around your goals and budget",
                "Understand eligibility and admission requirements",
                "Choose when you would prefer a call",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-300"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            id="counselling-form"
            className="scroll-mt-6 rounded-3xl bg-white p-5 shadow-2xl ring-1 ring-white/70 sm:p-8"
          >
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                Free, no-pressure guidance
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">
                Request a counselling call
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Add your details and a counsellor will get in touch at your
                preferred time.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField id="counselling-name" label="Full name *" error={fieldErrors.name}>
                  <input
                    id="counselling-name"
                    name="name"
                    autoComplete="name"
                    maxLength={200}
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClassName}
                  />
                </FormField>
                <FormField
                  id="counselling-mobile"
                  label="Mobile *"
                  error={fieldErrors.mobileNumber}
                >
                  <input
                    id="counselling-mobile"
                    name="mobileNumber"
                    type="tel"
                    autoComplete="tel"
                    maxLength={20}
                    pattern="[0-9+\-\s()]{7,20}"
                    required
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className={inputClassName}
                  />
                </FormField>
                <FormField id="counselling-email" label="Email *" error={fieldErrors.email}>
                  <input
                    id="counselling-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClassName}
                  />
                </FormField>
                <FormField id="counselling-city" label="City *" error={fieldErrors.city}>
                  <input
                    id="counselling-city"
                    name="city"
                    autoComplete="address-level2"
                    maxLength={100}
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Your city"
                    className={inputClassName}
                  />
                </FormField>
                <FormField id="counselling-state" label="State *" error={fieldErrors.state}>
                  <input
                    id="counselling-state"
                    name="state"
                    autoComplete="address-level1"
                    maxLength={100}
                    required
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Your state"
                    className={inputClassName}
                  />
                </FormField>
                <FormField
                  id="counselling-qualification"
                  label="Highest qualification *"
                  error={fieldErrors.highestQualification}
                >
                  <select
                    id="counselling-qualification"
                    name="highestQualification"
                    required
                    value={formData.highestQualification}
                    onChange={handleChange}
                    className={inputClassName}
                  >
                    <option value="">Select qualification</option>
                    {[
                      "Class 10",
                      "Class 12",
                      "Diploma",
                      "Bachelor's degree",
                      "Master's degree",
                      "Doctorate",
                      "Other",
                    ].map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </FormField>
                <FormField
                  id="counselling-program"
                  label="Interested program *"
                  error={fieldErrors.interestedProgram}
                >
                  <select
                    id="counselling-program"
                    name="interestedProgram"
                    required
                    value={formData.interestedProgram}
                    onChange={handleChange}
                    className={inputClassName}
                  >
                    <option value="">Select a program</option>
                    {programs.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </FormField>
                <FormField
                  id="counselling-university"
                  label="Preferred university"
                  error={fieldErrors.preferredUniversity}
                >
                  <select
                    id="counselling-university"
                    name="preferredUniversity"
                    value={formData.preferredUniversity}
                    onChange={handleChange}
                    className={inputClassName}
                  >
                    <option value="">Choose a university (optional)</option>
                    {universities.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </FormField>
                <FormField id="counselling-budget" label="Budget" error={fieldErrors.budget}>
                  <select
                    id="counselling-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputClassName}
                  >
                    <option value="">Choose a budget (optional)</option>
                    <option value="Below ₹50,000">Below ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                    <option value="₹1,00,001 - ₹2,00,000">₹1,00,001 - ₹2,00,000</option>
                    <option value="Above ₹2,00,000">Above ₹2,00,000</option>
                    <option value="Need guidance">Need guidance</option>
                  </select>
                </FormField>
                <FormField
                  id="counselling-call-time"
                  label="Preferred call time"
                  error={fieldErrors.preferredCallTime}
                >
                  <select
                    id="counselling-call-time"
                    name="preferredCallTime"
                    value={formData.preferredCallTime}
                    onChange={handleChange}
                    className={inputClassName}
                  >
                    <option value="">Choose a time (optional)</option>
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                    <option value="Any time">Any time</option>
                  </select>
                </FormField>
                <FormField
                  id="counselling-message"
                  label="Message"
                  error={fieldErrors.message}
                  className="sm:col-span-2"
                >
                  <textarea
                    id="counselling-message"
                    name="message"
                    rows={3}
                    maxLength={3000}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Anything else we should know? (optional)"
                    className={inputClassName}
                  />
                </FormField>
              </div>

              {error && (
                <p role="alert" className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3.5 font-extrabold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800 disabled:cursor-wait disabled:opacity-60"
              >
                {loading ? "Sending your request..." : "Get Counselling"}
                {!loading && <ArrowRight size={18} />}
              </button>
              <p className="text-center text-xs leading-5 text-slate-500">
                By submitting, you agree that our team may contact you about
                this enquiry. Your details are used to respond to your request.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
