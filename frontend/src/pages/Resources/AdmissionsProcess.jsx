import { CheckCircle, ArrowRight, BriefcaseBusiness } from "lucide-react";
import CounsellingButton from "../../components/CounsellingButton";

const pageHelps = [
  "Select the right program based on your background and goal.",
  "Compare universities by recognition, fees, EMI, specialization and support.",
  "Check eligibility, documents and current intake rules.",
  "Apply online only after official details are clear.",
];

export default function AdmissionsProcess() {
  return (
    <section className="bg-[#F8FAFF] px-6 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ================= LEFT SIDE ================= */}
          <div>
            {/* Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#FFF4C7] px-4 py-2">
              <BriefcaseBusiness className="h-4 w-4 text-[#2C5CF6]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1B2A64]">
                Admissions
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] text-[#0B1220] sm:text-5xl lg:text-6xl">
              Online Degree
              <br />
              <span className="text-[#2C5CF6]">Admission Process</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-[#475569] sm:text-lg">
              A simple six-step process for selecting a program, comparing universities, checking eligibility and applying with more confidence.
            </p>

            {/* CTA */}
            <CounsellingButton />
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="rounded-3xl bg-linear-to-br from-[#2C5CF6] to-[#1B2A64] p-5 shadow-xl sm:p-8">
            <div className="mb-7">
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                What this page helps with
              </h2>
            </div>

            <div className="space-y-4">
              {pageHelps.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:bg-white/20"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F7C948] text-[#1B2A64]">
                    <CheckCircle className="h-5 w-5" />
                  </div>

                  <p className="text-sm leading-6 text-white sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Important Note */}
            <div className="mt-7 flex items-start gap-3 border-t border-white/20 pt-6">
              <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#F7C948]" />

              <p className="text-sm font-semibold leading-6 text-[#FFE9A8]">
                Final details should be verified from official university and
                UGC-DEB sources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


