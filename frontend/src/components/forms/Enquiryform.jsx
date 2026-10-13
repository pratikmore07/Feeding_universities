import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitLead } from "../../services/leadService";
import {
  getLeadTrackingData,
  trackLeadSubmission,
} from "../../services/analytics";

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

const fieldLabels = {
  name: "Full name",
  mobileNumber: "Mobile number",
  email: "Email address",
  city: "City",
  state: "State",
  interestedProgram: "Interested program",
  preferredUniversity: "Preferred university",
  budget: "Budget",
  message: "Message",
  courseInterestedIn: "Interested program",
  universityPreference: "Preferred university",
  cityState: "City / State",
  qualification: "Qualification",
};

/* ---------- Style tokens (design only) ---------- */
const labelClass = "mb-1.5 block text-sm font-semibold text-slate-700";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-slate-800 " +
  "placeholder-slate-400 shadow-sm outline-none transition duration-200 " +
  "hover:border-indigo-300 hover:bg-white " +
  "focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/15";

const selectClass =
  inputClass + " cursor-pointer appearance-none bg-white pr-10";

const SectionTitle = ({ children }) => (
  <div className="flex items-center gap-3 sm:col-span-2">
    <span className="h-5 w-1.5 rounded-full bg-linear-to-b from-indigo-500 to-amber-400" />
    <h3 className="text-sm font-bold tracking-wide text-slate-800">
      {children}
    </h3>
    <span className="h-px flex-1 bg-linear-to-r from-slate-200 to-transparent" />
  </div>
);

const SelectArrow = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="pointer-events-none absolute bottom-3.5 right-4 h-5 w-5 text-slate-400"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const EnquiryForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (event) => {
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
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");
    setFieldErrors({});

    try {
      const trackingData = getLeadTrackingData("Admission Enquiry");
      const response = await submitLead({
        ...formData,
        ...trackingData,
        ctaAction: "Form Submit",
        ctaLabel: "Submit Enquiry",
      });

      if (response.success) {
        trackLeadSubmission({
          formName: trackingData.formName,
          eventId: response.eventId || trackingData.eventId,
          leadId: response.leadId,
        });
        navigate("/thank-you", { state: { formName: trackingData.formName } });
      } else {
        setError("Unable to submit your enquiry. Please try again.");
      }
    } catch (requestError) {
      console.error("Lead submission error:", requestError);
      const validationErrors = requestError.response?.data?.errors;

      setError(
        requestError.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
      setFieldErrors(
        validationErrors && typeof validationErrors === "object"
          ? validationErrors
          : {},
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      {/* soft glow behind the card */}
      <div
        aria-hidden="true"
        className="absolute -inset-1 rounded-3xl bg-linear-to-br from-indigo-500 via-violet-500 to-amber-400 opacity-30 blur-xl"
      />

      <form
        onSubmit={handleSubmit}
        className="relative overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-900/5"
      >
        {/* Header band */}
        <div className="relative bg-linear-to-br from-indigo-700 via-indigo-600 to-violet-600 px-6 py-8 text-white sm:px-10">
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-12 right-24 h-28 w-28 rounded-full bg-amber-300/20"
          />
          <h2 className="relative text-2xl font-extrabold sm:text-3xl">
            Admission Enquiry
          </h2>
          <p className="relative mt-2 max-w-md text-sm text-indigo-100">
            Share your details and our counsellor will get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-5 px-6 py-8 sm:grid-cols-2 sm:px-10">
          <SectionTitle>Personal details</SectionTitle>

          <div className="sm:col-span-2">
            <label htmlFor="name" className={labelClass}>
              Full Name *
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="mobileNumber" className={labelClass}>
              Mobile Number *
            </label>

            <input
              id="mobileNumber"
              type="tel"
              name="mobileNumber"
              placeholder="Enter your mobile number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email Address *
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="city" className={labelClass}>
              City *
            </label>
            <input
              id="city"
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="state" className={labelClass}>
              State *
            </label>
            <input
              id="state"
              type="text"
              name="state"
              placeholder="Enter your state"
              value={formData.state}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div className="pt-2 sm:col-span-2">
            <SectionTitle>Program details</SectionTitle>
          </div>

          <div className="relative">
            <label htmlFor="interestedProgram" className={labelClass}>
              Interested Program *
            </label>

            <select
              id="interestedProgram"
              name="interestedProgram"
              value={formData.interestedProgram}
              onChange={handleChange}
              required
              className={selectClass}
            >
              <option value="">Select a course</option>
              <option value="Online MBA">Online MBA</option>
              <option value="Executive MBA">Executive MBA</option>
              <option value="Online BBA">Online BBA</option>
              <option value="DBA">DBA</option>
              <option value="Online MCA">Online MCA</option>
              <option value="Online BCA">Online BCA</option>
              <option value="Data Science">Data Science</option>
              <option value="AI & ML">AI & ML</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Online B.Com">Online B.Com</option>
              <option value="Online M.Com">Online M.Com</option>
              <option value="Finance & Accounting">Finance & Accounting</option>
              <option value="Online BA">Online BA</option>
              <option value="Online MA">Online MA</option>
              <option value="Psychology">Psychology</option>
              <option value="English">English</option>
            </select>
            <SelectArrow />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="preferredUniversity" className={labelClass}>
              Preferred University *
            </label>

            <input
              id="preferredUniversity"
              type="text"
              name="preferredUniversity"
              placeholder="Example: Pune University"
              value={formData.preferredUniversity}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="budget" className={labelClass}>
              Budget
            </label>
            <input
              id="budget"
              type="number"
              name="budget"
              min="0"
              step="any"
              placeholder="Enter your budget (INR)"
              value={formData.budget}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell us anything else we should know"
              value={formData.message}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="pt-2 sm:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full overflow-hidden rounded-xl bg-linear-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-size-[200%_100%] px-5 py-3.5 text-base font-bold text-white shadow-lg shadow-indigo-500/30 transition-all duration-500 hover:bg-right hover:shadow-xl hover:shadow-indigo-500/40 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/40 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800 sm:col-span-2"
            >
              <span className="font-semibold">{error}</span>
              {Object.entries(fieldErrors).length > 0 && (
                <ul className="mt-2 list-inside list-disc space-y-1">
                  {Object.entries(fieldErrors).map(([field, message]) => (
                    <li key={field}>
                      <span className="font-semibold">
                        {fieldLabels[field] || field}:
                      </span>{" "}
                      {message}
                    </li>
                  ))}
                </ul>
              )}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
