import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BrochureForm from "../components/forms/BrochureForm";
import { getUniversityBrochures } from "../data/universityBrochures";

const universityPhotoAssets = import.meta.glob(
  "../assets/University Photo/optimized/*.800.jpg",
  { eager: true, import: "default", query: "?url" },
);
const UNIVERSITY_PHOTO_FILES = {
  "amity-university-online": "1. Amity University.jpg",
  "manipal-university-online": "3. Manipal University Jaipur (MUJ).jpeg",
  "chandigarh-university-online": "6. Chandigarh University.jpeg",
  "lovely-professional-university-online": "2. LPU Online.jpg",
  "jain-university-online": "7. JAIN University.jpeg",
  "nmims-online": "5. NMIMS University.jpeg",
  "dy-patil-university-online": "8. DY Patil University.jpg",
  "sharda-university-online": "15 Sharda University.jpeg",
  "uttaranchal-university-online": "17 Uttaranchal University.jpeg",
  "upes-online": "14 UPES.jpeg",
  "kurukshetra-university-online": "26 Kurukshetra University.jpg",
  "vivekananda-global-university-online":
    "31 Vivekananda Global University.jpg",
  "sikkim-manipal-university-online": "9 Sikkim Manipal University.jpeg",
  "parul-university-online": "30 Parul University.jpg",
  "gla-university-online": "18 GLA University.jpeg",
  "galgotias-university-online": "32 Galgotias University.jpeg",
  "andhra-university-online": "23 Andhra University .jpg",
  "jamia-hamdard-online": "27 Jamia Hamdard.jpg",
  "bharathidasan-university-online": "21 Bharathidasan University.jpeg",
  "vit-university": "10 Vellore Institute of Technology (VIT).jpeg",
  "srm-university": "11. SRM University.jpeg",
  "amrita-vishwa-vidyapeetham": "12. Amrita Vishwa Vidyapeetham.jpeg",
  ignou: "13 IGNOU.jpg",
  "bharati-vidyapeeth": "16 Bharati Vidyapeeth.jpg",
  "vignans-foundation":
    "19 Vignan's Foundation for Science, Technology and Research.jpeg",
  "mizoram-university": "22 Mizoram University.jpeg",
  "guru-ghasidas-university": "24 Guru Ghasidas Vishwavidyalaya (GGU).jpg",
};

function getUniversityPhoto(id) {
  const filename = UNIVERSITY_PHOTO_FILES[id];
  if (!filename) {
    return undefined;
  }

  const baseName = filename.replace(/\.(jpe?g)$/i, "");
  return universityPhotoAssets[
    `../assets/University Photo/optimized/${baseName}.800.jpg`
  ];
}

function getUniversityPhotoSrcSet(id) {
  const image = getUniversityPhoto(id);
  return image ? `${image} 800w` : undefined;
}

const COUNSELLING_PATH = "/counselling";

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Instrument+Sans:wght@400;500;600;700&display=swap');

.fu-root {
  font-family: 'Instrument Sans', system-ui, sans-serif;
}

.fu-root h1,
.fu-root h2,
.fu-root h3,
.fu-display {
  font-family: 'Bricolage Grotesque', system-ui, sans-serif;
  letter-spacing: -0.02em;
}

@keyframes fu-fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fu-float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-6px);
  }
}

.fu-animate-up {
  animation: fu-fade-up 0.65s ease-out both;
}

.fu-float {
  animation: fu-float 4s ease-in-out infinite;
}

.fu-delay-1 {
  animation-delay: 100ms;
}

.fu-delay-2 {
  animation-delay: 200ms;
}

.fu-delay-3 {
  animation-delay: 300ms;
}

@media (prefers-reduced-motion: reduce) {
  .fu-root *,
  .fu-animate-up,
  .fu-float {
    animation: none !important;
    transition: none !important;
  }
}
`;

const labelCls = "mb-1.5 block text-xs font-bold text-[#0B2A6F]";

const controlCls =
  "w-full rounded-xl border border-[#D9E3F7] bg-white px-3.5 py-2.5 text-sm text-[#0F1B3D] outline-none transition placeholder:text-[#8A96B2] focus:border-[#1F4FD8] focus:ring-4 focus:ring-[#1F4FD8]/15";

const wrapCls = "mx-auto w-full max-w-[1240px] px-4 sm:px-6";

const primaryButtonCls =
  "inline-flex items-center justify-center rounded-xl bg-[#1F4FD8] px-5 py-3 text-sm font-semibold text-white shadow-[inset_0_-2px_0_rgba(11,42,111,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0B2A6F] hover:shadow-[0_14px_30px_-15px_rgba(11,42,111,0.65)] focus:outline-none focus:ring-4 focus:ring-[#1F4FD8]/20";

const secondaryButtonCls =
  "inline-flex items-center justify-center rounded-xl border border-[#D9E3F7] bg-white px-5 py-3 text-sm font-semibold text-[#0B2A6F] shadow-[inset_0_0_0_1px_rgba(31,79,216,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-[#1F4FD8] hover:bg-[#EAF1FF] hover:shadow-[0_12px_26px_-14px_rgba(11,42,111,0.5)] focus:outline-none focus:ring-4 focus:ring-[#1F4FD8]/20";

const compareButtonCls =
  "inline-flex items-center justify-center rounded-xl border border-[#E2B200] bg-[#FFC629] px-4 py-2.5 text-sm font-bold text-[#0B2A6F] shadow-[inset_0_-2px_0_rgba(138,97,0,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFD34F] hover:shadow-[0_12px_26px_-14px_rgba(138,97,0,0.65)] focus:outline-none focus:ring-4 focus:ring-[#FFC629]/30";

/* =========================================================
   UNIVERSITY DIRECTORY DATA
========================================================= */

const UNIVERSITIES = [
  {
    id: "amity-university-online",
    name: "Amity University Online",
    city: "Noida, Uttar Pradesh",
    state: "Uttar Pradesh",
    type: "Private University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "above2",
  },
  {
    id: "manipal-university-online",
    name: "Manipal University Online",
    city: "Jaipur, Rajasthan",
    state: "Rajasthan",
    type: "Private University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "1to2",
  },
  {
    id: "chandigarh-university-online",
    name: "Chandigarh University Online",
    city: "Mohali, Punjab",
    state: "Punjab",
    type: "Private University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "1to2",
  },
  {
    id: "lovely-professional-university-online",
    name: "Lovely Professional University Online",
    city: "Phagwara, Punjab",
    state: "Punjab",
    type: "Private University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A++",
    feeBand: "1to2",
  },
  {
    id: "jain-university-online",
    name: "Jain University Online",
    city: "Bengaluru, Karnataka",
    state: "Karnataka",
    type: "Deemed-to-be University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A++",
    feeBand: "above2",
  },
  {
    id: "nmims-online",
    name: "NMIMS Online",
    city: "Mumbai, Maharashtra",
    state: "Maharashtra",
    type: "Deemed-to-be University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "above2",
  },
  {
    id: "dy-patil-university-online",
    name: "DY Patil University Online",
    city: "Pune, Maharashtra",
    state: "Maharashtra",
    type: "Private University",
    programs: ["MBA", "MCA"],
    emi: "Check options",
    naac: "A+",
    feeBand: "above2",
  },
  {
    id: "sharda-university-online",
    name: "Sharda University Online",
    city: "Greater Noida, Uttar Pradesh",
    state: "Uttar Pradesh",
    type: "Private University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "1to2",
  },
  {
    id: "uttaranchal-university-online",
    name: "Uttaranchal University Online",
    city: "Dehradun, Uttarakhand",
    state: "Uttarakhand",
    type: "Private University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "1to2",
  },
  {
    id: "upes-online",
    name: "UPES Online",
    city: "Dehradun, Uttarakhand",
    state: "Uttarakhand",
    type: "Private University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A",
    feeBand: "above2",
  },
  {
    id: "kurukshetra-university-online",
    name: "Kurukshetra University Online",
    city: "Kurukshetra, Haryana",
    state: "Haryana",
    type: "State University",
    programs: ["MBA", "MCA"],
    emi: "Check options",
    naac: "A+",
    feeBand: "under1",
  },
  {
    id: "vivekananda-global-university-online",
    name: "Vivekananda Global University Online",
    city: "Jaipur, Rajasthan",
    state: "Rajasthan",
    type: "Private University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "1to2",
  },
  {
    id: "manav-rachna-online",
    name: "Manav Rachna Online",
    city: "Faridabad, Haryana",
    state: "Haryana",
    type: "Deemed-to-be University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "1to2",
  },
  {
    id: "sikkim-manipal-university-online",
    name: "Sikkim Manipal University Online",
    city: "Gangtok, Sikkim",
    state: "Sikkim",
    type: "Private University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "1to2",
  },
  {
    id: "parul-university-online",
    name: "Parul University Online",
    city: "Vadodara, Gujarat",
    state: "Gujarat",
    type: "Private University",
    programs: ["MBA", "MCA"],
    emi: "Check options",
    naac: "A+",
    feeBand: "1to2",
  },
  {
    id: "mangalayatan-university-online",
    name: "Mangalayatan University Online",
    city: "Aligarh, Uttar Pradesh",
    state: "Uttar Pradesh",
    type: "Private University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "under1",
  },
  {
    id: "gla-university-online",
    name: "GLA University Online",
    city: "Mathura, Uttar Pradesh",
    state: "Uttar Pradesh",
    type: "Private University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "1to2",
  },
  {
    id: "galgotias-university-online",
    name: "Galgotias University Online",
    city: "Greater Noida, Uttar Pradesh",
    state: "Uttar Pradesh",
    type: "Private University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "1to2",
  },
  {
    id: "andhra-university-online",
    name: "Andhra University Online",
    city: "Visakhapatnam, Andhra Pradesh",
    state: "Andhra Pradesh",
    type: "State University",
    programs: ["MBA", "MCA"],
    emi: "Check options",
    naac: "A",
    feeBand: "under1",
  },
  {
    id: "aligarh-muslim-university-online",
    name: "Aligarh Muslim University Online",
    city: "Aligarh, Uttar Pradesh",
    state: "Uttar Pradesh",
    type: "Central University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "under1",
  },
  {
    id: "jamia-hamdard-online",
    name: "Jamia Hamdard Online",
    city: "New Delhi",
    state: "Delhi",
    type: "Deemed-to-be University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "1to2",
  },
  {
    id: "guru-nanak-dev-university-online",
    name: "Guru Nanak Dev University Online",
    city: "Amritsar, Punjab",
    state: "Punjab",
    type: "State University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "under1",
  },
  {
    id: "bharathidasan-university-online",
    name: "Bharathidasan University Online",
    city: "Tiruchirappalli, Tamil Nadu",
    state: "Tamil Nadu",
    type: "State University",
    programs: ["MBA", "MCA"],
    emi: "Check options",
    naac: "A+",
    feeBand: "under1",
  },
  {
    id: "dr-mgr-educational-and-research-institute-online",
    name: "Dr. M.G.R. Educational and Research Institute Online",
    city: "Chennai, Tamil Nadu",
    state: "Tamil Nadu",
    type: "Deemed-to-be University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "1to2",
  },
  {
    id: "vit-university",
    name: "Vellore Institute of Technology (VIT)",
    city: "Vellore, Tamil Nadu",
    state: "Tamil Nadu",
    type: "Deemed-to-be University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A++",
    feeBand: "above2",
  },
  {
    id: "srm-university",
    name: "SRM University",
    city: "Chennai, Tamil Nadu",
    state: "Tamil Nadu",
    type: "Deemed-to-be University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A++",
    feeBand: "above2",
  },
  {
    id: "amrita-vishwa-vidyapeetham",
    name: "Amrita Vishwa Vidyapeetham",
    city: "Coimbatore, Tamil Nadu",
    state: "Tamil Nadu",
    type: "Deemed-to-be University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A++",
    feeBand: "above2",
  },
  {
    id: "ignou",
    name: "IGNOU",
    city: "New Delhi",
    state: "Delhi",
    type: "Central University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A++",
    feeBand: "under1",
  },
  {
    id: "bharati-vidyapeeth",
    name: "Bharati Vidyapeeth",
    city: "Pune, Maharashtra",
    state: "Maharashtra",
    type: "Deemed-to-be University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "1to2",
  },
  {
    id: "vignans-foundation",
    name: "Vignan's Foundation for Science, Technology and Research",
    city: "Guntur, Andhra Pradesh",
    state: "Andhra Pradesh",
    type: "Deemed-to-be University",
    programs: ["MBA", "MCA"],
    emi: "May be available",
    naac: "A+",
    feeBand: "1to2",
  },
  {
    id: "mizoram-university",
    name: "Mizoram University",
    city: "Aizawl, Mizoram",
    state: "Mizoram",
    type: "Central University",
    programs: ["MBA", "MCA"],
    emi: "Check options",
    naac: "A",
    feeBand: "under1",
  },
  {
    id: "guru-ghasidas-university",
    name: "Guru Ghasidas Vishwavidyalaya (GGU)",
    city: "Bilaspur, Chhattisgarh",
    state: "Chhattisgarh",
    type: "Central University",
    programs: ["MBA", "MCA"],
    emi: "Check options",
    naac: "A",
    feeBand: "under1",
  },
].map((university) => ({
  ...university,
  image: getUniversityPhoto(university.id),
  imageSrcSet: getUniversityPhotoSrcSet(university.id),
}));

/* =========================================================
   DETAILS DATA
========================================================= */

const DEFAULT_FAQ = [
  {
    q: "What is the duration of the program?",
    a: "The program is generally completed in two years across four semesters. The exact academic calendar and maximum completion period should be confirmed with the university.",
  },
  {
    q: "Who is eligible to apply?",
    a: "Applicants usually need a completed graduation degree from a recognised institution. Marks, equivalence, entrance requirements and work-experience rules can vary by university and program.",
  },
  {
    q: "Can working professionals pursue this program?",
    a: "Yes. Online learning is designed to provide flexibility for working professionals, but learners should check live-class timings, examination schedules and project deadlines before enrolling.",
  },
  {
    q: "Are classes live or recorded?",
    a: "Many online programs provide a combination of live sessions, recordings, digital learning material and faculty interaction. The exact availability should be confirmed for the current intake.",
  },
  {
    q: "Are examinations conducted online?",
    a: "Online universities may use remote-proctored or other digital assessment methods. Examination rules, identity verification and attendance requirements can change by program.",
  },
  {
    q: "Are specializations available?",
    a: "Specializations may include marketing, finance, human resources, business analytics, operations, information technology and international business. Availability can vary by intake.",
  },
  {
    q: "Is EMI or instalment payment available?",
    a: "EMI or instalment options may be available through the university or financing partners. Confirm the total payable amount, interest, processing charges and refund terms before paying.",
  },
  {
    q: "Does the university guarantee placement?",
    a: "No online degree should be treated as a guaranteed placement. Career services may provide resume support, interview preparation, mentorship and job opportunities, while outcomes depend on the learner and market.",
  },
  {
    q: "Is the degree valid for further studies?",
    a: "Eligibility for further studies depends on the institution, regulator, program and academic session. Verify the current entitlement and admission requirements before using the degree for another qualification.",
  },
  {
    q: "How can I download the brochure?",
    a: "Use the Download Brochure button on this page. The button uses a university-specific brochure file, which can be replaced with the final brochure link later.",
  },
];

const DEFAULT_SEMESTERS = [
  {
    label: "Semester 1",
    subjects: [
      "Managerial Economics",
      "Accounting for Managers",
      "Marketing Management",
      "Professional Communication",
      "Statistics for Management",
    ],
  },
  {
    label: "Semester 2",
    subjects: [
      "Financial Management",
      "Human Resource Management",
      "Business Research Methods",
      "Legal Aspects of Business",
      "Operations Management",
    ],
  },
  {
    label: "Semester 3",
    subjects: [
      "Strategic Management",
      "Business Analytics",
      "Minor Project",
      "Professional Ethics",
      "Specialization Electives",
    ],
  },
  {
    label: "Semester 4",
    subjects: [
      "Digital Business",
      "Management in Action",
      "Major Project",
      "Entrepreneurship",
      "Specialization Electives",
    ],
  },
];

const DEFAULT_SPECIALIZATIONS = [
  "Marketing",
  "Finance",
  "Human Resource Management",
  "Business Analytics",
  "Operations",
  "Information Technology",
  "International Business",
];

const DETAIL_OVERRIDES = {
  "amity-university-online": {
    tagline:
      "A flexible online MBA and MCA learning experience for graduates and working professionals.",
    structure: "99 credits stated in the supplied brochure",
    specializations: [
      "Business Analytics",
      "Data Science",
      "Digital Marketing Management",
      "Entrepreneurship & Leadership",
      "Finance and Accounting",
      "Human Resource Management",
      "IT Management",
      "International Business",
      "International Finance",
      "Marketing and Sales",
      "Production and Operations",
      "Healthcare Management",
    ],
    semesters: [
      {
        label: "Semester 1",
        subjects: [
          "Managerial Economics",
          "Statistics for Management",
          "Professional Communication",
          "Accounting for Managers",
          "Marketing Management",
        ],
      },
      {
        label: "Semester 2",
        subjects: [
          "Legal Aspects of Business",
          "Business Research Methods",
          "Financial Management",
          "Human Resource Management",
          "Conflict Resolution",
        ],
      },
      {
        label: "Semester 3",
        subjects: [
          "Strategic Management",
          "Professional Ethics",
          "Minor Project",
          "Specialization Electives",
        ],
      },
      {
        label: "Semester 4",
        subjects: [
          "Digital Marketing",
          "Management in Action",
          "Major Project",
          "Specialization Electives",
        ],
      },
    ],
  },
  "manipal-university-online": {
    tagline:
      "Flexible online postgraduate and undergraduate programs for distance learners.",
    specializations: [
      "Marketing Management",
      "Finance Management",
      "Human Resource Management",
      "Business Analytics",
      "Systems Management",
      "International Business",
    ],
  },
  "chandigarh-university-online": {
    tagline:
      "Online management and technology degrees for distance and working learners.",
    specializations: [
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations",
      "Information Technology",
    ],
  },
  "lovely-professional-university-online": {
    tagline: "A wide catalog of online undergraduate and postgraduate degrees.",
    specializations: [
      "Marketing",
      "Finance",
      "Human Resources",
      "Business Analytics",
      "International Business",
    ],
  },
  "jain-university-online": {
    tagline:
      "Online degrees with an emphasis on business and technology tracks.",
    specializations: [
      "Marketing",
      "Finance",
      "Business Analytics",
      "Human Resources",
      "Information Technology",
    ],
  },
  "nmims-online": {
    tagline:
      "Online management programs designed for learners seeking flexible postgraduate study.",
    specializations: [
      "Marketing",
      "Finance",
      "Operations",
      "Human Resources",
      "Business Analytics",
    ],
  },
};

function getDetailData(id) {
  const base =
    UNIVERSITIES.find((university) => university.id === id) || UNIVERSITIES[0];

  const override = DETAIL_OVERRIDES[id] || {};

  return {
    ...base,
    tagline:
      override.tagline ||
      `Online ${base.programs.join(
        " and ",
      )} programs designed for graduates and working professionals.`,
    heroNote:
      "Independent program guide. Verify recognition, fees, eligibility and current admission details with the university before applying.",
    badges: [
      {
        label: "UGC-DEB",
        note: "Verify current entitlement for the program and academic session.",
      },
      {
        label: base.naac ? `NAAC ${base.naac}` : "Recognition",
        note: "Verify the current recognition status on the official university website.",
      },
    ],
    snapshot: {
      programs: `Online ${base.programs.join(", ")}`,
      fees: "Verify current intake fee",
      mode: "Online / flexible learning",
      recognition: "Verify before applying",
    },
    overview: {
      duration: "2 years across 4 semesters",
      structure:
        override.structure || "Credit-based structure as per university norms",
      eligibility:
        "Completed graduation degree from a recognised institution. Confirm marks, equivalence and other requirements with the university.",
      feeNote:
        "Confirm tuition, examination charges, scholarships, financing, EMI terms, refund policy and total payable amount before making payment.",
      body: "The program combines management and technology foundations with applied learning, specialization electives and project work. The exact curriculum and subject order may differ by university, program and academic session.",
      format:
        "Learners may receive access to live or recorded classes, digital learning material, faculty interaction, academic support and online assessments. Services can vary by cohort.",
    },
    specializations: override.specializations || DEFAULT_SPECIALIZATIONS,
    semesters: override.semesters || DEFAULT_SEMESTERS,
    recognitionChecklist: [
      "Current UGC-DEB entitlement for the specific program",
      "Current specialization availability",
      "Total payable fee and refund policy",
      "Live-class schedule and recording access",
      "Examination and project requirements",
      "Career-service scope for online learners",
    ],
    steps: [
      "Confirm current recognition and entitlement for the program and academic session.",
      "Check graduation eligibility and document requirements.",
      "Compare the current fee, specialization and payment schedule.",
      "Submit the application through the official university channel.",
      "Keep the application, payment receipt and admission confirmation.",
    ],
    careerSupport: [
      "Live and recorded learning resources for schedule flexibility",
      "Faculty interaction and academic guidance",
      "Projects that connect concepts with practical business situations",
      "Resume, interview and mentorship support may be available",
      "Career services and hiring support can vary by university and cohort",
    ],
    whoShouldApply: [
      "Graduates seeking a flexible postgraduate qualification",
      "Working professionals who cannot pause employment for a campus program",
      "Career switchers building foundations in management or technology",
      "Learners who can manage independent study and online assessments",
    ],
    faq: DEFAULT_FAQ,
    lastReviewed: "29 September 2026",
  };
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

function PinIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

function ShieldIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5l-8-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/* =========================================================
   SHARED COMPONENTS
========================================================= */

function CounsellingButton({
  label = "Book Free Counselling",
  className = secondaryButtonCls,
}) {
  return (
    <a href={COUNSELLING_PATH} className={className}>
      {label}
    </a>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-6 max-w-2xl">
      {eyebrow && (
        <p className="mb-1 text-sm font-semibold text-blue-600">{eyebrow}</p>
      )}

      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>

      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function SnapshotCard({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-200 py-4 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 text-left text-slate-900"
      >
        <span className="font-medium">{q}</span>

        <span
          className={`flex h-7 w-7 flex-none items-center justify-center rounded-full bg-yellow-100 text-blue-700 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {isOpen && (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
          {a}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   CAMPUS ART
========================================================= */

const PALETTES = [
  ["#0B2A6F", "#1F4FD8", "#9DB9F8"],
  ["#12358F", "#2F63E8", "#B4CBFA"],
  ["#0A2260", "#1A44B8", "#86A6F2"],
  ["#163C9C", "#3B72F0", "#C6D8FB"],
];

function initialsOf(name) {
  return name
    .replace(/\./g, "")
    .split(/\s+/)
    .filter((word) => !["of", "and", "the"].includes(word.toLowerCase()))
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function CampusArt({ index, name }) {
  const [top, bottom, tint] = PALETTES[index % PALETTES.length];

  const sunX = 55 + ((index * 47) % 210);
  const cloudX = ((sunX + 130) % 260) + 30;
  const gradientId = `sky-gradient-${index}`;

  return (
    <svg
      viewBox="0 0 320 200"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-label={`${name} campus illustration`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={top} />
          <stop offset="1" stopColor={bottom} />
        </linearGradient>
      </defs>

      <rect width="320" height="200" fill={`url(#${gradientId})`} />

      <circle cx={sunX} cy="50" r="34" fill="#FFC629" opacity="0.18" />

      <circle cx={sunX} cy="50" r="20" fill="#FFC629" />

      <ellipse cx={cloudX} cy="38" rx="30" ry="8" fill="#fff" opacity="0.2" />

      <ellipse
        cx={cloudX + 22}
        cy="46"
        rx="20"
        ry="6"
        fill="#fff"
        opacity="0.14"
      />

      <rect y="160" width="320" height="40" fill="#EAF1FF" />
      <rect y="160" width="320" height="3" fill={tint} />

      <rect
        x="34"
        y="118"
        width="62"
        height="42"
        rx="2"
        fill="#fff"
        opacity="0.92"
      />

      <rect
        x="224"
        y="118"
        width="62"
        height="42"
        rx="2"
        fill="#fff"
        opacity="0.92"
      />

      {[48, 68].map((x) => (
        <g key={x}>
          <rect
            x={x}
            y="130"
            width="10"
            height="14"
            rx="1"
            fill={bottom}
            opacity="0.55"
          />

          <rect
            x={x + 190}
            y="130"
            width="10"
            height="14"
            rx="1"
            fill={bottom}
            opacity="0.55"
          />
        </g>
      ))}

      <polygon points="88,96 160,60 232,96" fill="#FFC629" />
      <rect x="88" y="94" width="144" height="5" fill="#fff" />
      <rect x="96" y="99" width="128" height="61" fill="#fff" />

      {[0, 1, 2, 3, 4].map((item) => (
        <rect
          key={item}
          x={106 + item * 22}
          y="104"
          width="9"
          height="52"
          rx="1"
          fill={bottom}
          opacity="0.3"
        />
      ))}

      <rect x="153" y="126" width="14" height="34" rx="2" fill={top} />

      <circle cx="160" cy="82" r="6" fill={top} opacity="0.85" />

      <rect x="88" y="156" width="144" height="4" fill="#D9E3F7" />

      <rect x="82" y="160" width="156" height="4" fill="#C6D3EE" />

      {[14, 306].map((x) => (
        <g key={x}>
          <rect
            x={x - 2}
            y="140"
            width="4"
            height="22"
            fill={top}
            opacity="0.7"
          />

          <circle cx={x} cy="132" r="14" fill={tint} />
          <circle cx={x} cy="132" r="14" fill={bottom} opacity="0.35" />
        </g>
      ))}

      <text
        x="16"
        y="34"
        fontSize="22"
        fontWeight="800"
        fill="#fff"
        opacity="0.28"
        fontFamily="'Bricolage Grotesque', system-ui, sans-serif"
      >
        {initialsOf(name)}
      </text>
    </svg>
  );
}

function CampusImage({ university, index }) {
  const [failed, setFailed] = useState(false);

  if (university.image && !failed) {
    return (
      <img
        src={university.image}
        srcSet={university.imageSrcSet}
        sizes="(min-width: 1280px) 360px, (min-width: 640px) 50vw, 100vw"
        alt={university.name}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
      />
    );
  }

  return <CampusArt index={index} name={university.name} />;
}

/* =========================================================
   UNIVERSITY CARD
========================================================= */

function UniversityCard({ university, index, onOpen }) {
  const navigate = useNavigate();
  const emiAvailable = university.emi === "May be available";

  function openCompare(event) {
    event.stopPropagation();

    navigate("/compare", {
      state: {
        universityId: university.id,
        university,
      },
    });
  }

  return (
    <article
      onClick={() => onOpen(university.id)}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#D9E3F7] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#1F4FD8]/40 hover:shadow-[0_18px_40px_-18px_rgba(11,42,111,0.35)]"
    >
      <div className="relative aspect-16/10 w-full overflow-hidden bg-[#EAF1FF]">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          <CampusImage university={university} index={index} />
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#0B2A6F] shadow-sm">
          {university.type}
        </span>

        <span
          className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFC629]"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          <span
            className="fu-display flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D9E3F7] bg-[#EAF1FF] font-bold text-[#1F4FD8]"
            aria-hidden="true"
          >
            {initialsOf(university.name)}
          </span>

          <span className="min-w-0">
            <span className="fu-display block text-lg font-bold leading-snug text-[#0B2A6F]">
              {university.name}
            </span>

            <span className="mt-1 flex items-center gap-1 text-sm text-[#5B6784]">
              <PinIcon className="h-3.5 w-3.5 text-[#1F4FD8]" />
              {university.city}
            </span>
          </span>
        </div>

        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold text-[#5B6784]">
            Available programs
          </p>

          <div className="flex flex-wrap gap-2">
            {university.programs.map((program) => (
              <span
                key={program}
                className="rounded-full border border-[#D9E3F7] bg-[#EAF1FF] px-3 py-1 text-sm font-semibold text-[#1F4FD8]"
              >
                Online {program}
              </span>
            ))}
          </div>
        </div>

        <dl className="mt-4 text-sm">
          <div className="flex justify-between border-b border-[#D9E3F7] py-2">
            <dt className="font-medium text-[#5B6784]">Fee range</dt>

            <dd className="font-semibold text-[#0F1B3D]">
              Verify with counsellor
            </dd>
          </div>

          <div className="flex items-center justify-between py-2">
            <dt className="font-medium text-[#5B6784]">EMI</dt>

            <dd>
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  emiAvailable
                    ? "bg-[#FFF5D1] text-[#8A6100]"
                    : "bg-[#EAF1FF] text-[#1F4FD8]"
                }`}
              >
                {university.emi}
              </span>
            </dd>
          </div>
        </dl>

        <p className="mb-5 mt-3 flex gap-2 text-xs leading-relaxed text-[#5B6784]">
          <ShieldIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#1F4FD8]" />

          <span>
            Recognition details should be verified on official university and
            UGC-DEB sources before applying.
          </span>
        </p>

        <div className="mt-auto grid grid-cols-[1.4fr_1fr] gap-2">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onOpen(university.id);
            }}
            className={primaryButtonCls}
          >
            View Profile
          </button>

          <button
            type="button"
            onClick={openCompare}
            className={compareButtonCls}
          >
            Compare
          </button>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   DETAIL PAGE
========================================================= */

const NAV_LINKS = [
  { id: "overview", label: "Overview" },
  { id: "programs", label: "Programs" },
  { id: "recognition", label: "Recognition" },
  { id: "fees", label: "Fees" },
  { id: "eligibility", label: "Eligibility" },
  { id: "career", label: "Career Support" },
  { id: "faq", label: "FAQ" },
];

function RelatedUniversityCard({ university, onSelect }) {
  const navigate = useNavigate();

  function compareUniversity() {
    navigate("/compare", {
      state: {
        universityId: university.id,
        university,
      },
    });
  }

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_18px_40px_-18px_rgba(11,42,111,0.35)]">
      <div>
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
          {initialsOf(university.name)}
        </div>

        <h3 className="font-semibold text-slate-900">{university.name}</h3>

        <p className="mt-1 text-sm text-slate-500">
          {university.city} · {university.type}
        </p>

        <p className="mt-3 text-sm text-slate-600">
          Available programs:{" "}
          <span className="font-medium text-slate-800">
            Online {university.programs.join(", ")}
          </span>
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Fee: Verify with counsellor
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => onSelect(university.id)}
          className={primaryButtonCls}
        >
          View Profile
        </button>

        <button
          type="button"
          onClick={compareUniversity}
          className={compareButtonCls}
        >
          Compare
        </button>
      </div>
    </div>
  );
}

function UniversityDetailPage({ activeId, onBack, onSelectUniversity }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeSemester, setActiveSemester] = useState(0);
  const [selectedBrochure, setSelectedBrochure] = useState(null);

  const university = getDetailData(activeId);
  const brochures = getUniversityBrochures(university.id);

  const relatedUniversities = UNIVERSITIES.filter(
    (item) => item.id !== activeId,
  ).slice(0, 3);

  function handleSelectUniversity(id) {
    onSelectUniversity(id);
    setOpenFaqIndex(0);
    setActiveSemester(0);

    window.scrollTo?.({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-linear-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="fu-animate-up">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onBack}
                  className={secondaryButtonCls}
                >
                  ← Back to directory
                </button>

                <Pill>{university.type}</Pill>
              </div>

              <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                {university.name}{" "}
                <span className="text-blue-600">MBA 2026 Guide</span>
              </h1>

              <p className="mt-2 text-sm font-medium text-slate-500">
                {university.city}
              </p>

              <p className="mt-4 max-w-xl text-slate-600">
                {university.tagline}
              </p>

              <p className="mt-2 max-w-xl text-sm text-slate-500">
                {university.heroNote}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {university.badges.map((badge) => (
                  <span
                    key={badge.label}
                    title={badge.note}
                    className="rounded-full border border-yellow-300 bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-800"
                  >
                    {badge.label}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <CounsellingButton label="Book Free Counselling" />

                <a href="#programs" className={secondaryButtonCls}>
                  View Programs
                </a>

                {brochures.length > 0 && (
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedBrochure({
                        ...university,
                        brochures,
                      })
                    }
                    className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
                  >
                    Download Brochure
                  </button>
                )}
              </div>
            </div>

            <div className="fu-float aspect-4/3 overflow-hidden rounded-2xl border border-slate-200 bg-blue-100 shadow-sm">
              <CampusImage
                university={university}
                index={Math.max(
                  0,
                  UNIVERSITIES.findIndex((item) => item.id === university.id),
                )}
              />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="fu-animate-up fu-delay-1">
              <SnapshotCard
                label="Programs available"
                value={university.snapshot.programs}
              />
            </div>

            <div className="fu-animate-up fu-delay-1">
              <SnapshotCard label="Fees" value={university.snapshot.fees} />
            </div>

            <div className="fu-animate-up fu-delay-2">
              <SnapshotCard
                label="Learning mode"
                value={university.snapshot.mode}
              />
            </div>

            <div className="fu-animate-up fu-delay-3">
              <SnapshotCard
                label="Recognition"
                value={university.snapshot.recognition}
              />
            </div>
          </div>
        </div>
        {selectedBrochure && (
          <BrochureForm
            selectedUniversity={selectedBrochure}
            universityOptions={UNIVERSITIES.slice(0, 10).map((item) => ({
              id: item.id,
              name: item.name,
              brochures: getUniversityBrochures(item.id),
            }))}
            onClose={() => setSelectedBrochure(null)}
          />
        )}
      </section>

      {/* STICKY SECTION NAVIGATION */}
      <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 text-sm font-semibold text-slate-500 sm:px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="whitespace-nowrap border-b-2 border-transparent px-3 py-4 transition duration-200 hover:border-[#FFC629] hover:bg-[#FFF9E5] hover:text-[#1F4FD8]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-6xl space-y-16 px-6 py-14">
        {/* OVERVIEW */}
        <section id="overview" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Program guide"
            title="Overview"
            subtitle="Understand the learning format, structure and important checks before applying."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              <p className="text-slate-600">{university.overview.body}</p>

              <p className="text-slate-600">{university.overview.format}</p>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-xs font-semibold uppercase text-blue-600">
                  Duration
                </p>

                <p className="mt-1 text-sm text-slate-700">
                  {university.overview.duration}
                </p>
              </div>

              <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-xs font-semibold uppercase text-blue-600">
                  Structure
                </p>

                <p className="mt-1 text-sm text-slate-700">
                  {university.overview.structure}
                </p>
              </div>

              <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-4">
                <p className="text-xs font-semibold uppercase text-yellow-700">
                  Important fee check
                </p>

                <p className="mt-1 text-sm text-slate-700">
                  {university.overview.feeNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section id="programs" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Programs and specializations"
            title="Compare the curriculum and career fit"
            subtitle="Specializations and subjects may change by academic session or intake."
          />

          <div className="flex flex-wrap gap-2">
            {university.specializations.map((specialization) => (
              <span
                key={specialization}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {specialization}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Semester-wise curriculum overview
            </h3>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2">
              <div
                role="tablist"
                aria-label="Semester curriculum"
                className="grid grid-cols-2 gap-2 sm:grid-cols-4"
              >
                {university.semesters.map((semester, index) => (
                  <button
                    key={semester.label}
                    type="button"
                    role="tab"
                    aria-selected={activeSemester === index}
                    onClick={() => setActiveSemester(index)}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition duration-300 ${
                      activeSemester === index
                        ? "bg-[#1F4FD8] text-white shadow-[0_10px_22px_-14px_rgba(11,42,111,0.8)]"
                        : "bg-white text-slate-600 hover:bg-[#FFF9E5] hover:text-[#0B2A6F]"
                    }`}
                  >
                    {semester.label}
                  </button>
                ))}
              </div>
            </div>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {university.semesters[activeSemester].subjects.map(
                (subject, index) => (
                  <li
                    key={subject}
                    className="fu-animate-up flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                    style={{
                      animationDelay: `${index * 70}ms`,
                    }}
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#FFF5D1] text-xs font-bold text-[#8A6100]">
                      {index + 1}
                    </span>

                    <span>{subject}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </section>

        {/* RECOGNITION */}
        <section id="recognition" className="scroll-mt-28">
          <SectionHeading
            title="Recognition and verification"
            subtitle="Always verify current recognition and entitlement before applying."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <ul className="space-y-3">
              {university.recognitionChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                    ✓
                  </span>

                  {item}
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-4 text-sm font-semibold text-slate-900">
                Verification and admission pathway
              </h3>

              <ol className="space-y-3">
                {university.steps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm text-slate-700">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-blue-950">
                      {index + 1}
                    </span>

                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* FEES */}
        <section id="fees" className="scroll-mt-28">
          <SectionHeading
            title="Fees and EMI"
            subtitle="Confirm the complete cost before making a payment."
          />

          <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 text-sm leading-relaxed text-slate-700">
            {university.overview.feeNote}

            <p className="mt-3">
              EMI may be available. Ask about interest, processing charges,
              instalment dates, refund rules and the final total payable amount.
            </p>
          </div>
        </section>

        {/* ELIGIBILITY */}
        <section id="eligibility" className="scroll-mt-28">
          <SectionHeading
            title="Eligibility"
            subtitle="Eligibility rules should be confirmed for the exact program and intake."
          />

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 text-sm leading-relaxed text-slate-700">
            {university.overview.eligibility}
          </div>
        </section>

        {/* CAREER */}
        <section id="career" className="scroll-mt-28">
          <SectionHeading
            title="Career Support"
            subtitle="Career support can help with preparation, but outcomes are not guaranteed."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-slate-900">
                Learning experience
              </h3>

              <ul className="space-y-3">
                {university.careerSupport.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-slate-900">
                Who should consider it?
              </h3>

              <ul className="space-y-3">
                {university.whoShouldApply.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                An online degree does not guarantee a promotion or placement.
                Its value depends on prior experience, chosen specialization,
                practical skills and how effectively the learner applies the
                curriculum.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-28">
          <SectionHeading
            title="Frequently asked questions"
            subtitle="Open a question to see more information."
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm sm:p-6">
            {university.faq.map((item, index) => (
              <FaqItem
                key={item.q}
                q={item.q}
                a={item.a}
                isOpen={openFaqIndex === index}
                onToggle={() =>
                  setOpenFaqIndex(openFaqIndex === index ? -1 : index)
                }
              />
            ))}
          </div>

          <p className="mt-4 text-xs leading-relaxed text-slate-400">
            Last reviewed: {university.lastReviewed}. Recognition, fees,
            eligibility, specializations and admission details may change.
            Verify all details with the university before applying.
          </p>
        </section>

        {/* GUIDANCE CTA */}
        <section id="apply" className="scroll-mt-28">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-br from-blue-600 to-blue-700 text-white shadow-[0_20px_50px_-25px_rgba(11,42,111,0.7)]">
            <div className="flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Get free program guidance
                </h2>

                <p className="mt-3 text-sm leading-6 text-blue-100">
                  Tell us your background and we will help you shortlist
                  suitable universities based on eligibility, budget and career
                  goals.
                </p>
              </div>

              <div className="shrink-0">
                <CounsellingButton
                  label="Get My Shortlist"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B2A6F] transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFF9E5] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30"
                />
              </div>
            </div>
          </div>
        </section>

        {/* RELATED UNIVERSITIES */}
        <section id="related">
          <SectionHeading
            title="Related universities"
            subtitle="Explore other universities and compare their programs."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedUniversities.map((relatedUniversity) => (
              <RelatedUniversityCard
                key={relatedUniversity.id}
                university={relatedUniversity}
                onSelect={handleSelectUniversity}
              />
            ))}
          </div>

          <p className="mt-6 text-xs leading-relaxed text-slate-400">
            Recognition, fees, eligibility and admission details may change.
            Verify details with official university and UGC-DEB sources before
            applying.
          </p>
        </section>
      </main>
    </div>
  );
}

/* =========================================================
   MAIN UNIVERSITIES PAGE
========================================================= */

const STATES = [
  "Andhra Pradesh",
  "Chhattisgarh",
  "Delhi",
  "Gujarat",
  "Haryana",
  "Karnataka",
  "Maharashtra",
  "Mizoram",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Uttar Pradesh",
  "Uttarakhand",
];

const FEE_OPTIONS = [
  { value: "any", label: "Any fee" },
  { value: "under1", label: "Under Rs. 1 lakh" },
  { value: "1to2", label: "Rs. 1–2 lakh" },
  { value: "above2", label: "Above Rs. 2 lakh" },
];

const NAAC_OPTIONS = ["All", "A++", "A+", "A"];

export default function UniversitiesPage() {
  const location = useLocation();
  const initialUniversityId = location.state?.universityId || null;
  const [view, setView] = useState(
    initialUniversityId ? "detail" : "directory",
  );
  const [selectedId, setSelectedId] = useState(initialUniversityId);

  const [query, setQuery] = useState("");
  const [program, setProgram] = useState("All");
  const [state, setState] = useState("All");
  const [fee, setFee] = useState("any");
  const [naac, setNaac] = useState("All");
  const [emiOnly, setEmiOnly] = useState(false);

  const filteredUniversities = useMemo(() => {
    const search = query.trim().toLowerCase();

    return UNIVERSITIES.filter((university) => {
      const searchableText =
        `${university.name} ${university.city} ${university.state}`.toLowerCase();

      if (search && !searchableText.includes(search)) {
        return false;
      }

      if (program !== "All" && !university.programs.includes(program)) {
        return false;
      }

      if (state !== "All" && university.state !== state) {
        return false;
      }

      if (fee !== "any" && university.feeBand !== fee) {
        return false;
      }

      if (naac !== "All" && university.naac !== naac) {
        return false;
      }

      if (emiOnly && university.emi !== "May be available") {
        return false;
      }

      return true;
    });
  }, [query, program, state, fee, naac, emiOnly]);

  function resetFilters() {
    setQuery("");
    setProgram("All");
    setState("All");
    setFee("any");
    setNaac("All");
    setEmiOnly(false);
  }

  function openDetail(id) {
    setSelectedId(id);
    setView("detail");

    window.scrollTo?.({
      top: 0,
      behavior: "smooth",
    });
  }

  function backToDirectory() {
    setView("directory");
    setSelectedId(null);

    window.scrollTo?.({
      top: 0,
      behavior: "smooth",
    });
  }

  if (view === "detail" && selectedId) {
    return (
      <div className="fu-root min-h-screen bg-white text-[#0F1B3D]">
        <style>{STYLES}</style>

        <UniversityDetailPage
          activeId={selectedId}
          onBack={backToDirectory}
          onSelectUniversity={openDetail}
        />
      </div>
    );
  }

  return (
    <div className="fu-root min-h-screen bg-white text-[#0F1B3D]">
      <style>{STYLES}</style>

      <main>
        {/* INTRO */}
        <section className="relative overflow-hidden border-b border-[#D9E3F7] bg-[#EAF1FF]">
          <div
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#FFC629]/40 blur-2xl"
            aria-hidden="true"
          />

          <div
            className="absolute right-40 top-20 h-40 w-40 rounded-full bg-[#1F4FD8]/15 blur-xl"
            aria-hidden="true"
          />

          <div className={`${wrapCls} relative py-14 pb-20 md:py-20 md:pb-24`}>
            <div className="fu-animate-up max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E3F7] bg-white px-3 py-1.5 text-sm font-semibold text-[#0B2A6F] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#FFC629]" />
                University directory
              </span>

              <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] text-[#0B2A6F] md:text-5xl lg:text-6xl">
                Search Online MBA and MCA universities
              </h1>

              <p className="mt-4 max-w-xl text-lg text-[#5B6784]">
                Filter by program, location, NAAC grade, fee range and EMI
                availability.
              </p>
            </div>
          </div>
        </section>

        {/* FILTERS */}
        <section className={`${wrapCls} relative z-10 -mt-10`}>
          <div className="rounded-3xl border border-[#D9E3F7] bg-white p-5 shadow-[0_18px_40px_-18px_rgba(11,42,111,0.35)] md:p-6">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-12">
              <div className="col-span-2 lg:col-span-4">
                <label htmlFor="search" className={labelCls}>
                  Search university
                </label>

                <div className="relative">
                  <SearchIcon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6784]" />

                  <input
                    id="search"
                    type="search"
                    className={`${controlCls} pl-10`}
                    placeholder="Search by name or city"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>
              </div>

              <div className="lg:col-span-2">
                <label htmlFor="program" className={labelCls}>
                  Program
                </label>

                <select
                  id="program"
                  className={controlCls}
                  value={program}
                  onChange={(event) => setProgram(event.target.value)}
                >
                  <option value="All">All</option>
                  <option value="MBA">MBA</option>
                  <option value="MCA">MCA</option>
                </select>
              </div>

              <div className="lg:col-span-2">
                <label htmlFor="state" className={labelCls}>
                  Location
                </label>

                <select
                  id="state"
                  className={controlCls}
                  value={state}
                  onChange={(event) => setState(event.target.value)}
                >
                  <option value="All">All</option>

                  {STATES.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lg:col-span-2">
                <label htmlFor="fee" className={labelCls}>
                  Fee range
                </label>

                <select
                  id="fee"
                  className={controlCls}
                  value={fee}
                  onChange={(event) => setFee(event.target.value)}
                >
                  {FEE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lg:col-span-2">
                <label htmlFor="naac" className={labelCls}>
                  NAAC grade
                </label>

                <select
                  id="naac"
                  className={controlCls}
                  value={naac}
                  onChange={(event) => setNaac(event.target.value)}
                >
                  {NAAC_OPTIONS.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
              <label className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-700">
                <input
                  type="checkbox"
                  checked={emiOnly}
                  onChange={(event) => setEmiOnly(event.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                Show universities with possible EMI
              </label>

              <button
                type="button"
                onClick={resetFilters}
                className="text-sm font-semibold text-blue-700 transition hover:text-blue-900"
              >
                Reset filters
              </button>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className={`${wrapCls} py-12`}>
          <p
            className="fu-display mb-6 text-xl font-bold text-[#0B2A6F]"
            aria-live="polite"
          >
            <span className="mr-2 inline-block rounded-lg bg-[#FFC629] px-2.5 py-0.5">
              {filteredUniversities.length}
            </span>

            {filteredUniversities.length === 1
              ? "university found"
              : "universities found"}
          </p>

          {filteredUniversities.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredUniversities.map((university, index) => (
                <div
                  key={university.id}
                  className="fu-animate-up"
                  style={{
                    animationDelay: `${index * 55}ms`,
                  }}
                >
                  <UniversityCard
                    university={university}
                    index={index}
                    onOpen={openDetail}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-[#D9E3F7] bg-[#EAF1FF]/50 px-4 py-14 text-center">
              <h2 className="text-2xl font-bold text-[#0B2A6F]">
                No universities match these filters
              </h2>

              <p className="mx-auto mt-2 max-w-md text-[#5B6784]">
                Try removing a filter, or ask a counsellor to shortlist options
                for your background.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <button
                  type="button"
                  onClick={resetFilters}
                  className={primaryButtonCls}
                >
                  Clear all filters
                </button>

                <CounsellingButton label="Book Free Counselling" />
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
