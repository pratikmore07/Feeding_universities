import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { Download, GraduationCap, X } from "lucide-react";
import { submitBrochureLead } from "../../services/leadService";
import {
  getLeadTrackingData,
  trackLeadSubmission,
} from "../../services/analytics";

const BROCHURE_FILE_URL = "/brochure.pdf";
const inputClassName =
  "w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2 text-sm text-slate-800 shadow-sm outline-none transition duration-200 placeholder:text-slate-400 hover:border-indigo-300 hover:bg-white focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/15";
const labelClassName = "mb-1.5 block text-xs font-semibold text-slate-700";

const BrochureForm = ({
  selectedUniversity,
  universityOptions = [],
  onClose,
}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(() => ({
    name: "",
    phone: "",
    email: "",
    university: selectedUniversity.id,
    course: "",
    budget: "",
    message: "",
  }));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const availableUniversities = universityOptions.some(
    (university) => university.id === selectedUniversity.id,
  )
    ? universityOptions
    : [...universityOptions, selectedUniversity];
  const chosenUniversity =
    availableUniversities.find(
      (university) => university.id === formData.university,
    ) || selectedUniversity;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const downloadBrochure = () => {
    const link = document.createElement("a");

    link.href = chosenUniversity.brochure || BROCHURE_FILE_URL;
    link.download =
      chosenUniversity.brochure?.split("/").pop() || "brochure.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    const trackingData = getLeadTrackingData("Brochure Download Form");

    const brochurePayload = {
      name: formData.name,
      mobileNumber: formData.phone,
      email: formData.email,
      universityPreference: chosenUniversity.name,
      courseInterestedIn: formData.course,
      budget: formData.budget,
      message: formData.message,

      leadCategory: "Brochure Download",
      sheetTab: "Brochure Leads",
      formName: "Brochure Download Form",
      brochureName:
        chosenUniversity.brochure?.split("/").pop() || "brochure.pdf",
      brochureLink: chosenUniversity.brochure || BROCHURE_FILE_URL,

      ...trackingData,
    };

    try {
      const response = await submitBrochureLead(brochurePayload);

      if (response.success) {
        trackLeadSubmission({
          formName: trackingData.formName,
          eventId: response.eventId || trackingData.eventId,
          leadId: response.leadId,
        });
        downloadBrochure();
        navigate("/thank-you", { state: { formName: trackingData.formName } });
      } else {
        setError("Unable to submit your brochure request. Please try again.");
      }
    } catch (requestError) {
      console.error("Brochure lead submission error:", requestError);

      const backendErrors = requestError.response?.data?.errors;

      if (backendErrors) {
        setError(Object.values(backendErrors).join(", "));
      } else {
        setError(
          requestError.response?.data?.message ||
            "Something went wrong. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-slate-950/55 px-4 py-2 backdrop-blur-sm"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="brochure-form-title"
        className="my-auto max-h-[calc(100dvh-1rem)] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/70 bg-white shadow-2xl shadow-slate-950/30"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative overflow-hidden bg-linear-to-br from-indigo-800 via-indigo-700 to-violet-700 px-4 py-3 text-white sm:px-6">
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-12 h-36 w-36 rounded-full bg-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-14 right-28 h-28 w-28 rounded-full bg-amber-300/20"
          />
          <div className="relative flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-300 text-indigo-950">
                <GraduationCap size={23} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-100">
                  Free university brochure
                </p>
                <h2
                  id="brochure-form-title"
                  className="mt-1 text-xl font-extrabold tracking-tight sm:text-2xl"
                >
                  Get your brochure
                </h2>
                <p className="mt-1 text-sm text-indigo-100">
                  Add your details to download it instantly.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close brochure form"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-3 sm:p-4">
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 sm:gap-x-4">
            <div>
              <label htmlFor="brochure-name" className={labelClassName}>
                Full name *
              </label>
              <input
                id="brochure-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClassName}
              />
            </div>

            <div>
              <label htmlFor="brochure-phone" className={labelClassName}>
                Mobile number *
              </label>
              <input
                id="brochure-phone"
                type="tel"
                name="phone"
                placeholder="Enter your mobile number"
                value={formData.phone}
                onChange={handleChange}
                required
                className={inputClassName}
              />
            </div>

            <div>
              <label htmlFor="brochure-email" className={labelClassName}>
                Email address *
              </label>
              <input
                id="brochure-email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClassName}
              />
            </div>

            <div>
              <label htmlFor="brochure-course" className={labelClassName}>
                Interested program *
              </label>
              <select
                id="brochure-course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className={`${inputClassName} cursor-pointer`}
              >
                <option value="">Select a program</option>
                <option value="Online MBA">Online MBA</option>
                <option value="Online MCA">Online MCA</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="brochure-budget" className={labelClassName}>
                Budget <span className="font-normal text-slate-400">(optional)</span>
              </label>
              <input
                id="brochure-budget"
                type="text"
                name="budget"
                placeholder="Your budget"
                value={formData.budget}
                onChange={handleChange}
                className={inputClassName}
              />
            </div>

            <div>
              <label htmlFor="brochure-university" className={labelClassName}>
                Select university *
              </label>
              <select
                id="brochure-university"
                name="university"
                value={formData.university}
                onChange={handleChange}
                required
                className={`${inputClassName} cursor-pointer`}
              >
                <option value="">Choose a university</option>
                <optgroup label="Top 10 universities">
                  {universityOptions.map((university) => (
                    <option key={university.id} value={university.id}>
                      {university.name}
                    </option>
                  ))}
                </optgroup>
                {!universityOptions.some(
                  (university) => university.id === selectedUniversity.id,
                ) && (
                  <optgroup label="Selected university">
                    <option value={selectedUniversity.id}>
                      {selectedUniversity.name}
                    </option>
                  </optgroup>
                )}
              </select>
            </div>

            <div className="col-span-2">
              <label htmlFor="brochure-message" className={labelClassName}>
                Message <span className="font-normal text-slate-400">(optional)</span>
              </label>
              <input
                id="brochure-message"
                type="text"
                name="message"
                placeholder="Anything else we should know?"
                value={formData.message}
                onChange={handleChange}
                className={inputClassName}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-blue-700 px-5 py-2.5 font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-600/25 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 disabled:cursor-wait disabled:opacity-60"
          >
            <Download size={18} />
            {loading ? "Submitting..." : "Get my brochure"}
          </button>

          {error && (
            <p className="mt-3 text-sm font-medium text-red-700">{error}</p>
          )}
        </form>
      </section>
    </div>,
    document.body,
  );
};

export default BrochureForm;