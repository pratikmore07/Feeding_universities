import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

/*    CONFIGURATION */
const MAX_COMPARE = 3;
const COUNSELLING_PATH = "/counselling";

/* STYLES */
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Instrument+Sans:wght@400;500;600;700&display=swap');

.compare-root {
  font-family: 'Instrument Sans', system-ui, sans-serif;
}

.compare-root h1,
.compare-root h2,
.compare-root h3,
.compare-display {
  font-family: 'Bricolage Grotesque', system-ui, sans-serif;
  letter-spacing: -0.02em;
}

@keyframes compare-fade-up {
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes compare-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(255, 198, 41, 0.24);
  }

  50% {
    box-shadow: 0 0 0 8px rgba(255, 198, 41, 0);
  }
}

.compare-fade-up {
  animation: compare-fade-up 0.55s ease-out both;
}

.compare-pulse {
  animation: compare-pulse 2.8s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .compare-root *,
  .compare-fade-up,
  .compare-pulse {
    animation: none !important;
    transition: none !important;
  }
}
`;

const wrapCls = "mx-auto w-full max-w-[1240px] px-4 sm:px-6";
const yellowButtonCls =
  "inline-flex items-center justify-center rounded-xl border border-[#E2B200] bg-[#FFC629] px-5 py-3 text-sm font-bold text-[#0B2A6F] shadow-[inset_0_-2px_0_rgba(138,97,0,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFD34F] hover:shadow-[0_12px_26px_-14px_rgba(138,97,0,0.65)] focus:outline-none focus:ring-4 focus:ring-[#FFC629]/30";
const secondaryButtonCls =
  "inline-flex items-center justify-center rounded-xl border border-[#D9E3F7] bg-white px-5 py-3 text-sm font-semibold text-[#0B2A6F] transition duration-300 hover:-translate-y-0.5 hover:border-[#1F4FD8] hover:bg-[#EAF1FF] hover:shadow-[0_12px_26px_-14px_rgba(11,42,111,0.5)] focus:outline-none focus:ring-4 focus:ring-[#1F4FD8]/20";
/*    UNIVERSITY DATA */

const UNIVERSITY_SEED = [
  [
    "amity-university-online",
    "Amity University Online",
    "Noida, Uttar Pradesh",
    "Uttar Pradesh",
    "Private University",
    "May be available",
    "A+",
    "Above Rs. 2 lakh",
    [
      "Business Analytics",
      "Data Science",
      "Digital Marketing",
      "Finance",
      "Human Resources",
      "IT Management",
    ],
  ],
  [
    "manipal-university-online",
    "Manipal University Online",
    "Jaipur, Rajasthan",
    "Rajasthan",
    "Private University",
    "May be available",
    "A+",
    "Rs. 1–2 lakh",
    [
      "Marketing Management",
      "Finance Management",
      "Human Resource Management",
      "Business Analytics",
      "Systems Management",
    ],
  ],
  [
    "chandigarh-university-online",
    "Chandigarh University Online",
    "Mohali, Punjab",
    "Punjab",
    "Private University",
    "May be available",
    "A+",
    "Rs. 1–2 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Information Technology",
    ],
  ],
  [
    "lovely-professional-university-online",
    "Lovely Professional University Online",
    "Phagwara, Punjab",
    "Punjab",
    "Private University",
    "May be available",
    "A++",
    "Rs. 1–2 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Business Analytics",
      "International Business",
    ],
  ],
  [
    "jain-university-online",
    "Jain University Online",
    "Bengaluru, Karnataka",
    "Karnataka",
    "Deemed-to-be University",
    "May be available",
    "A++",
    "Above Rs. 2 lakh",
    [
      "Marketing",
      "Finance",
      "Business Analytics",
      "Human Resources",
      "Information Technology",
    ],
  ],
  [
    "nmims-online",
    "NMIMS Online",
    "Mumbai, Maharashtra",
    "Maharashtra",
    "Deemed-to-be University",
    "May be available",
    "A+",
    "Above Rs. 2 lakh",
    [
      "Marketing",
      "Finance",
      "Operations",
      "Human Resources",
      "Business Analytics",
    ],
  ],
  [
    "dy-patil-university-online",
    "DY Patil University Online",
    "Pune, Maharashtra",
    "Maharashtra",
    "Private University",
    "Check options",
    "A+",
    "Above Rs. 2 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Business Analytics",
    ],
  ],
  [
    "sharda-university-online",
    "Sharda University Online",
    "Greater Noida, Uttar Pradesh",
    "Uttar Pradesh",
    "Private University",
    "May be available",
    "A+",
    "Rs. 1–2 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Information Technology",
    ],
  ],
  [
    "uttaranchal-university-online",
    "Uttaranchal University Online",
    "Dehradun, Uttarakhand",
    "Uttarakhand",
    "Private University",
    "May be available",
    "A+",
    "Rs. 1–2 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Business Analytics",
      "Operations",
    ],
  ],
  [
    "upes-online",
    "UPES Online",
    "Dehradun, Uttarakhand",
    "Uttarakhand",
    "Private University",
    "May be available",
    "A",
    "Above Rs. 2 lakh",
    [
      "Marketing",
      "Finance",
      "Business Analytics",
      "Operations",
      "Information Technology",
    ],
  ],
  [
    "kurukshetra-university-online",
    "Kurukshetra University Online",
    "Kurukshetra, Haryana",
    "Haryana",
    "State University",
    "Check options",
    "A+",
    "Under Rs. 1 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Business Analytics",
    ],
  ],
  [
    "vivekananda-global-university-online",
    "Vivekananda Global University Online",
    "Jaipur, Rajasthan",
    "Rajasthan",
    "Private University",
    "May be available",
    "A+",
    "Rs. 1–2 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Business Analytics",
      "Operations",
    ],
  ],
  [
    "manav-rachna-online",
    "Manav Rachna Online",
    "Faridabad, Haryana",
    "Haryana",
    "Deemed-to-be University",
    "May be available",
    "A+",
    "Rs. 1–2 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Business Analytics",
    ],
  ],
  [
    "sikkim-manipal-university-online",
    "Sikkim Manipal University Online",
    "Gangtok, Sikkim",
    "Sikkim",
    "Private University",
    "May be available",
    "A+",
    "Rs. 1–2 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Business Analytics",
    ],
  ],
  [
    "parul-university-online",
    "Parul University Online",
    "Vadodara, Gujarat",
    "Gujarat",
    "Private University",
    "Check options",
    "A+",
    "Rs. 1–2 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Business Analytics",
      "Operations",
    ],
  ],
  [
    "mangalayatan-university-online",
    "Mangalayatan University Online",
    "Aligarh, Uttar Pradesh",
    "Uttar Pradesh",
    "Private University",
    "May be available",
    "A+",
    "Under Rs. 1 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Business Analytics",
    ],
  ],
  [
    "gla-university-online",
    "GLA University Online",
    "Mathura, Uttar Pradesh",
    "Uttar Pradesh",
    "Private University",
    "May be available",
    "A+",
    "Rs. 1–2 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Information Technology",
    ],
  ],
  [
    "galgotias-university-online",
    "Galgotias University Online",
    "Greater Noida, Uttar Pradesh",
    "Uttar Pradesh",
    "Private University",
    "May be available",
    "A+",
    "Rs. 1–2 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Business Analytics",
      "Operations",
    ],
  ],
  [
    "andhra-university-online",
    "Andhra University Online",
    "Visakhapatnam, Andhra Pradesh",
    "Andhra Pradesh",
    "State University",
    "Check options",
    "A",
    "Under Rs. 1 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Business Analytics",
    ],
  ],
  [
    "aligarh-muslim-university-online",
    "Aligarh Muslim University Online",
    "Aligarh, Uttar Pradesh",
    "Uttar Pradesh",
    "Central University",
    "May be available",
    "A+",
    "Under Rs. 1 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Business Analytics",
    ],
  ],
  [
    "jamia-hamdard-online",
    "Jamia Hamdard Online",
    "New Delhi",
    "Delhi",
    "Deemed-to-be University",
    "May be available",
    "A+",
    "Rs. 1–2 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Business Analytics",
    ],
  ],
  [
    "guru-nanak-dev-university-online",
    "Guru Nanak Dev University Online",
    "Amritsar, Punjab",
    "Punjab",
    "State University",
    "May be available",
    "A+",
    "Under Rs. 1 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Business Analytics",
    ],
  ],
  [
    "bharathidasan-university-online",
    "Bharathidasan University Online",
    "Tiruchirappalli, Tamil Nadu",
    "Tamil Nadu",
    "State University",
    "Check options",
    "A+",
    "Under Rs. 1 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Business Analytics",
    ],
  ],
  [
    "dr-mgr-educational-and-research-institute-online",
    "Dr. M.G.R. Educational and Research Institute Online",
    "Chennai, Tamil Nadu",
    "Tamil Nadu",
    "Deemed-to-be University",
    "May be available",
    "A+",
    "Rs. 1–2 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Information Technology",
    ],
  ],
  [
    "vit-university",
    "Vellore Institute of Technology (VIT)",
    "Vellore, Tamil Nadu",
    "Tamil Nadu",
    "Deemed-to-be University",
    "May be available",
    "A++",
    "Above Rs. 2 lakh",
    [
      "Marketing",
      "Finance",
      "Business Analytics",
      "Operations",
      "Information Technology",
    ],
  ],
  [
    "srm-university",
    "SRM University",
    "Chennai, Tamil Nadu",
    "Tamil Nadu",
    "Deemed-to-be University",
    "May be available",
    "A++",
    "Above Rs. 2 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Business Analytics",
      "Operations",
    ],
  ],
  [
    "amrita-vishwa-vidyapeetham",
    "Amrita Vishwa Vidyapeetham",
    "Coimbatore, Tamil Nadu",
    "Tamil Nadu",
    "Deemed-to-be University",
    "May be available",
    "A++",
    "Above Rs. 2 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Business Analytics",
      "Operations",
    ],
  ],
  [
    "ignou",
    "IGNOU",
    "New Delhi",
    "Delhi",
    "Central University",
    "May be available",
    "A++",
    "Under Rs. 1 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Information Technology",
    ],
  ],
  [
    "bharati-vidyapeeth",
    "Bharati Vidyapeeth",
    "Pune, Maharashtra",
    "Maharashtra",
    "Deemed-to-be University",
    "May be available",
    "A+",
    "Rs. 1–2 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Business Analytics",
      "Operations",
    ],
  ],
  [
    "vignans-foundation",
    "Vignan's Foundation for Science, Technology and Research",
    "Guntur, Andhra Pradesh",
    "Andhra Pradesh",
    "Deemed-to-be University",
    "May be available",
    "A+",
    "Rs. 1–2 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Business Analytics",
    ],
  ],
  [
    "mizoram-university",
    "Mizoram University",
    "Aizawl, Mizoram",
    "Mizoram",
    "Central University",
    "Check options",
    "A",
    "Under Rs. 1 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Business Analytics",
    ],
  ],
  [
    "guru-ghasidas-university",
    "Guru Ghasidas Vishwavidyalaya (GGU)",
    "Bilaspur, Chhattisgarh",
    "Chhattisgarh",
    "Central University",
    "Check options",
    "A",
    "Under Rs. 1 lakh",
    [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Business Analytics",
    ],
  ],
];

const UNIVERSITIES = UNIVERSITY_SEED.map(
  ([
    id,
    name,
    city,
    state,
    type,
    emi,
    naac,
    feeBand,
    specializations,
  ]) => ({
    id,
    name,
    city,
    state,
    type,
    programs: ["MBA", "MCA"],
    emi,
    naac,
    feeBand,
    fee: "Verify current intake fee",
    duration: "2 years / 4 semesters",
    mode: "Online / flexible learning",
    eligibility:
      "Graduation degree from a recognised institution. Confirm current marks and equivalence rules with the university.",
    specializations,
    career:
      "Academic guidance, learning resources, applied projects and career-preparation support may be available. Confirm the current scope with the university.",
  })
);

/* =========================================================
   HELPERS
========================================================= */

function getInitials(name) {
  return name
    .replace(/\./g, "")
    .split(/\s+/)
    .filter(
      (word) =>
        !["of", "and", "the", "for"].includes(
          word.toLowerCase()
        )
    )
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function getUniversityById(id) {
  return UNIVERSITIES.find(
    (university) => university.id === id
  );
}

function getIdsFromSearch(search) {
  const params = new URLSearchParams(search);
  const value = params.get("universities");

  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((id) => id.trim())
    .filter((id) => Boolean(getUniversityById(id)))
    .slice(0, MAX_COMPARE);
}

/* =========================================================
   ICONS
========================================================= */

function SearchIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

/* =========================================================
   UI COMPONENTS
========================================================= */

function UniversityLogo({ university, className = "" }) {
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF1FF] text-sm font-extrabold text-[#1F4FD8] ring-1 ring-[#D9E3F7] ${className}`}
    >
      {getInitials(university.name)}
    </div>
  );
}

function UniversitySelectCard({
  slotNumber,
  value,
  universities,
  selectedIds,
  onChange,
  onClear,
}) {
  const selectedUniversity = getUniversityById(value);

  const availableUniversities = universities.filter(
    (university) =>
      university.id === value ||
      !selectedIds.includes(university.id)
  );

  return (
    <div
      className={`relative rounded-3xl border p-5 transition duration-300 ${
        selectedUniversity
          ? "border-[#1F4FD8]/40 bg-linear-to-br from-[#EAF1FF] to-white shadow-[0_18px_40px_-20px_rgba(11,42,111,0.65)]"
          : "border-dashed border-[#D9E3F7] bg-[#F8FAFF]"
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-[#1F4FD8]">
            University {slotNumber}
          </p>

          <h3 className="mt-1 text-lg font-bold text-[#0B2A6F]">
            {selectedUniversity
              ? "Selected university"
              : "Choose a university"}
          </h3>
        </div>

        {selectedUniversity && (
          <button
            type="button"
            onClick={onClear}
            aria-label={`Clear university ${slotNumber}`}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl text-slate-500 shadow-sm ring-1 ring-[#D9E3F7] transition hover:bg-red-50 hover:text-red-600"
          >
            ×
          </button>
        )}
      </div>

      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none rounded-2xl border border-[#D9E3F7] bg-white px-4 py-3 pr-10 text-sm font-semibold text-[#0B2A6F] outline-none transition focus:border-[#1F4FD8] focus:ring-4 focus:ring-[#1F4FD8]/15"
        >
          <option value="">Select university</option>

          {availableUniversities.map((university) => (
            <option
              key={university.id}
              value={university.id}
            >
              {university.name} — {university.city}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#1F4FD8]">
          ▼
        </span>
      </div>

      {selectedUniversity ? (
        <div className="mt-5 flex items-start gap-3">
          <UniversityLogo university={selectedUniversity} />

          <div className="min-w-0">
            <p className="font-bold leading-snug text-[#0B2A6F]">
              {selectedUniversity.name}
            </p>

            <p className="mt-1 text-xs text-[#5B6784]">
              {selectedUniversity.city}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {selectedUniversity.programs.map((program) => (
                <span
                  key={program}
                  className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-[#1F4FD8] ring-1 ring-[#D9E3F7]"
                >
                  {program}
                </span>
              ))}

              <span className="rounded-full bg-[#FFF5D1] px-2.5 py-1 text-[11px] font-bold text-[#8A6100]">
                NAAC {selectedUniversity.naac}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 flex min-h-21.5 items-center justify-center rounded-2xl border border-dashed border-[#D9E3F7] bg-white/70 text-center">
          <p className="text-sm text-[#8A96B2]">
            Select a university to compare
          </p>
        </div>
      )}
    </div>
  );
}

function ComparisonValue({ value, highlight = false }) {
  return (
    <div
      className={`rounded-xl p-3 text-sm leading-relaxed ${
        highlight
          ? "bg-[#FFF9E5] font-semibold text-[#0B2A6F]"
          : "text-slate-700"
      }`}
    >
      {value}
    </div>
  );
}

function ComparisonTable({ universities, onRemove }) {
  const rows = [
    {
      label: "University type",
      getValue: (university) => university.type,
    },
    {
      label: "Location",
      getValue: (university) => university.city,
    },
    {
      label: "Available programs",
      getValue: (university) =>
        university.programs.join(", "),
    },
    {
      label: "NAAC grade",
      getValue: (university) => university.naac,
      highlight: true,
    },
    {
      label: "Fee range",
      getValue: (university) => university.feeBand,
    },
    {
      label: "Fee status",
      getValue: (university) => university.fee,
    },
    {
      label: "EMI",
      getValue: (university) => university.emi,
      highlight: true,
    },
    {
      label: "Duration",
      getValue: (university) => university.duration,
    },
    {
      label: "Learning mode",
      getValue: (university) => university.mode,
    },
    {
      label: "Eligibility",
      getValue: (university) => university.eligibility,
    },
    {
      label: "Specializations",
      getValue: (university) => (
        <div className="flex flex-wrap gap-1.5">
          {university.specializations.map(
            (specialization) => (
              <span
                key={specialization}
                className="rounded-full bg-[#EAF1FF] px-2 py-1 text-[11px] font-semibold text-[#1F4FD8]"
              >
                {specialization}
              </span>
            )
          )}
        </div>
      ),
    },
    {
      label: "Career support",
      getValue: (university) => university.career,
    },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-[#D9E3F7] bg-white shadow-[0_18px_45px_-25px_rgba(11,42,111,0.45)]">
      <div className="overflow-x-auto">
        <table className="min-w-230 w-full border-collapse">
          <thead>
            <tr className="bg-[#0B2A6F] text-white">
              <th className="sticky left-0 z-10 min-w-47.5 bg-[#0B2A6F] px-5 py-5 text-left text-sm font-bold">
                Compare criteria
              </th>

              {universities.map((university) => (
                <th
                  key={university.id}
                  className="min-w-58.75 border-l border-white/15 px-5 py-5 text-left align-top"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <UniversityLogo
                        university={university}
                        className="bg-white text-[#1F4FD8]"
                      />

                      <div>
                        <p className="text-sm font-bold leading-snug">
                          {university.name}
                        </p>

                        <p className="mt-1 text-xs text-blue-100">
                          {university.city}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemove(university.id)}
                      aria-label={`Remove ${university.name}`}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-lg text-white transition hover:bg-white hover:text-[#0B2A6F]"
                    >
                      ×
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={row.label}
                className={
                  rowIndex % 2 === 0
                    ? "bg-white"
                    : "bg-[#F8FAFF]"
                }
              >
                <th className="sticky left-0 z-1 border-t border-[#E7EDF8] bg-inherit px-5 py-5 text-left text-sm font-bold text-[#0B2A6F]">
                  {row.label}
                </th>

                {universities.map((university) => (
                  <td
                    key={`${university.id}-${row.label}`}
                    className="border-l border-t border-[#E7EDF8] px-4 py-3 align-top"
                  >
                    <ComparisonValue
                      value={row.getValue(university)}
                      highlight={row.highlight}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ComparePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const incomingUniversityId =
    location.state?.universityId ||
    location.state?.university?.id ||
    "";

  const [selectedIds, setSelectedIds] = useState([]);
  const [showSelector, setShowSelector] = useState(true);

  useEffect(() => {
    const idsFromUrl = getIdsFromSearch(location.search);

    const ids = incomingUniversityId
      ? [incomingUniversityId, ...idsFromUrl]
      : idsFromUrl;

    const validUniqueIds = Array.from(new Set(ids))
      .filter((id) => Boolean(getUniversityById(id)))
      .slice(0, MAX_COMPARE);

    setSelectedIds(validUniqueIds);
  }, [incomingUniversityId, location.search]);

  const selectedUniversities = useMemo(
    () =>
      selectedIds
        .map((id) => getUniversityById(id))
        .filter(Boolean),
    [selectedIds]
  );

  function updateUrl(ids) {
    const cleanIds = Array.from(new Set(ids))
      .filter((id) => Boolean(getUniversityById(id)))
      .slice(0, MAX_COMPARE);

    const params = new URLSearchParams();

    if (cleanIds.length > 0) {
      params.set("universities", cleanIds.join(","));
    }

    const queryString = params.toString();

    navigate(
      queryString ? `/compare?${queryString}` : "/compare",
      {
        replace: true,
      }
    );
  }

  function selectUniversityForSlot(slotIndex, universityId) {
    setSelectedIds((currentIds) => {
      const nextIds = [...currentIds];

      if (!universityId) {
        nextIds.splice(slotIndex, 1);
      } else {
        const existingIndex = nextIds.indexOf(universityId);

        if (existingIndex !== -1 && existingIndex !== slotIndex) {
          return currentIds;
        }

        nextIds[slotIndex] = universityId;
      }

      const cleanIds = nextIds
        .filter(Boolean)
        .slice(0, MAX_COMPARE);

      updateUrl(cleanIds);

      return cleanIds;
    });
  }

  function clearUniversitySlot(slotIndex) {
    setSelectedIds((currentIds) => {
      const nextIds = currentIds.filter(
        (_, index) => index !== slotIndex
      );

      updateUrl(nextIds);

      return nextIds;
    });
  }

  function removeUniversity(universityId) {
    setSelectedIds((currentIds) => {
      const nextIds = currentIds.filter(
        (id) => id !== universityId
      );

      updateUrl(nextIds);

      return nextIds;
    });
  }

  function clearAll() {
    setSelectedIds([]);
    updateUrl([]);
  }

  function selectPopularUniversities() {
    const popularIds = [
      "amity-university-online",
      "manipal-university-online",
      "nmims-online",
    ];

    setSelectedIds(popularIds);
    updateUrl(popularIds);
  }

  return (
    <div className="compare-root min-h-screen bg-white text-[#0F1B3D]">
      <style>{STYLES}</style>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#D9E3F7] bg-[#EAF1FF]">
        <div
          className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-[#FFC629]/40 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="absolute left-10 top-24 h-40 w-40 rounded-full bg-[#1F4FD8]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className={`${wrapCls} relative py-14 md:py-20`}>
          <div className="compare-fade-up max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E3F7] bg-white px-3 py-1.5 text-sm font-semibold text-[#0B2A6F] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#FFC629]" />
                Smart comparison
              </span>
            </div>

            <h1 className="compare-display text-4xl font-extrabold leading-[1.05] text-[#0B2A6F] md:text-5xl lg:text-6xl">
              Compare online universities with confidence
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5B6784]">
              Select up to three universities and compare programs, fees,
              eligibility, learning mode, recognition indicators and career
              support in one clear view.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0B2A6F] shadow-sm ring-1 ring-[#D9E3F7]">
                {selectedUniversities.length}/{MAX_COMPARE} selected
              </span>

              <span className="rounded-full bg-[#FFF5D1] px-4 py-2 text-sm font-bold text-[#8A6100]">
                32 universities available
              </span>
            </div>
          </div>
        </div>
      </section>

      <main className={`${wrapCls} py-10 md:py-14`}>
        {/* SELECTOR HEADER */}
        <section className="compare-fade-up">
          <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold text-[#1F4FD8]">
                Step 1
              </p>

              <h2 className="compare-display mt-1 text-2xl font-bold text-[#0B2A6F] sm:text-3xl">
                Choose your universities
              </h2>

              <p className="mt-2 text-sm text-[#5B6784]">
                Select up to three universities using the dropdown cards.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedUniversities.length > 0 && (
                <button
                  type="button"
                  onClick={clearAll}
                  className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                >
                  Clear all
                </button>
              )}

              <button
                type="button"
                onClick={() =>
                  setShowSelector((current) => !current)
                }
                className={secondaryButtonCls}
              >
                {showSelector
                  ? "Hide selector"
                  : "Change universities"}
              </button>
            </div>
          </div>

          {showSelector && (
            <div className="rounded-3xl border border-[#D9E3F7] bg-white p-5 shadow-[0_18px_40px_-24px_rgba(11,42,111,0.45)] md:p-6">
              <div className="grid gap-5 lg:grid-cols-3">
                {Array.from({ length: MAX_COMPARE }).map(
                  (_, index) => (
                    <UniversitySelectCard
                      key={`selector-card-${index}`}
                      slotNumber={index + 1}
                      value={selectedIds[index] || ""}
                      universities={UNIVERSITIES}
                      selectedIds={selectedIds.filter(Boolean)}
                      onChange={(universityId) =>
                        selectUniversityForSlot(
                          index,
                          universityId
                        )
                      }
                      onClear={() =>
                        clearUniversitySlot(index)
                      }
                    />
                  )
                )}
              </div>

              <div className="mt-6 flex flex-col justify-between gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center">
                <p className="text-sm font-medium text-[#5B6784]">
                  {selectedUniversities.length === 0
                    ? "Select universities to begin."
                    : selectedUniversities.length === 1
                    ? "Select one more university for a useful comparison."
                    : `${selectedUniversities.length} universities ready to compare.`}
                </p>

                {selectedUniversities.length === 0 && (
                  <button
                    type="button"
                    onClick={selectPopularUniversities}
                    className={yellowButtonCls}
                  >
                    Add popular universities
                  </button>
                )}
              </div>
            </div>
          )}

          {!showSelector && (
            <div className="flex justify-center rounded-3xl border border-dashed border-[#D9E3F7] bg-[#F8FAFF] p-6">
              <button
                type="button"
                onClick={() => setShowSelector(true)}
                className={secondaryButtonCls}
              >
                + Add or change universities
              </button>
            </div>
          )}
        </section>

        {/* COMPARISON TABLE */}
        <section className="mt-14">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold text-[#1F4FD8]">
                Step 2
              </p>

              <h2 className="compare-display mt-1 text-2xl font-bold text-[#0B2A6F] sm:text-3xl">
                Your university comparison
              </h2>

              <p className="mt-2 text-sm text-[#5B6784]">
                Review the important differences before creating your shortlist.
              </p>
            </div>

            {selectedUniversities.length > 0 && (
              <Link
                to={COUNSELLING_PATH}
                className={yellowButtonCls}
              >
                Get expert guidance
              </Link>
            )}
          </div>

          {selectedUniversities.length === 0 ? (
            <div className="compare-pulse rounded-3xl border border-[#D9E3F7] bg-linear-to-br from-[#EAF1FF] to-white px-6 py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-[#FFC629] text-3xl font-bold text-[#0B2A6F] shadow-lg">
                ⇄
              </div>

              <h3 className="compare-display mt-5 text-2xl font-bold text-[#0B2A6F]">
                Start your comparison
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#5B6784]">
                Select two or three universities above to see their differences
                side by side.
              </p>

              <button
                type="button"
                onClick={() => setShowSelector(true)}
                className={`${yellowButtonCls} mt-6`}
              >
                Choose universities
              </button>
            </div>
          ) : (
            <ComparisonTable
              universities={selectedUniversities}
              onRemove={removeUniversity}
            />
          )}
        </section>

        {/* SUPPORT CARDS */}
        <section className="mt-14 grid gap-5 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#D9E3F7] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF1FF] text-xl text-[#1F4FD8]">
              ✓
            </div>

            <h3 className="mt-4 text-lg font-bold text-[#0B2A6F]">
              Compare recognition
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#5B6784]">
              Check the current entitlement and recognition details for the
              exact program and academic session.
            </p>
          </div>

          <div className="rounded-2xl border border-[#D9E3F7] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF5D1] text-xl text-[#8A6100]">
              ₹
            </div>

            <h3 className="mt-4 text-lg font-bold text-[#0B2A6F]">
              Compare total cost
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#5B6784]">
              Ask about tuition, examination fees, EMI interest, scholarships
              and refund conditions before payment.
            </p>
          </div>

          <div className="rounded-2xl border border-[#D9E3F7] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF1FF] text-xl text-[#1F4FD8]">
              ★
            </div>

            <h3 className="mt-4 text-lg font-bold text-[#0B2A6F]">
              Choose your fit
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#5B6784]">
              Consider schedule flexibility, specialization, projects, learner
              support and your long-term career goals.
            </p>
          </div>
        </section>

        {/* NOTICE */}
        <section className="mt-10 rounded-2xl border border-yellow-200 bg-yellow-50 p-5 text-sm leading-relaxed text-slate-700">
          <strong className="text-[#8A6100]">
            Important:
          </strong>{" "}
          The information shown on this comparison page is for shortlisting
          purposes. Fees, recognition, eligibility, specializations, EMI,
          examinations and career services may change. Verify the latest
          information directly with the university before applying.
        </section>
      </main>
    </div>
  );
}