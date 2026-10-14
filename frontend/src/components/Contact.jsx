import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import EnquiryForm from "./forms/Enquiryform";

const Contact = () => {

  return (
    <div className="min-h-screen bg-white text-[#0F1B3D]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-indigo-900">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="container-main relative mx-auto px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

            <div className="min-w-0">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                Free Education Counselling
              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Let's Find the
                <span className="block text-cyan-300">
                  Right Degree for You
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
                Tell us about your education, career goal and preferred
                program. Our counselling team can help you explore suitable
                online degree options and universities.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-white">
                  <CheckCircle2 size={18} className="text-cyan-300" />
                  Free counselling
                </div>

                <div className="flex items-center gap-2 text-sm text-white">
                  <CheckCircle2 size={18} className="text-cyan-300" />
                  No pressure
                </div>

                <div className="flex items-center gap-2 text-sm text-white">
                  <CheckCircle2 size={18} className="text-cyan-300" />
                  Compare before applying
                </div>
              </div>
            </div>

            {/* Hero Info Card */}
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-blue-950">
                <GraduationCap size={28} />
              </div>

              <h2 className="mt-6 text-2xl font-extrabold text-white">
                What can we help you with?
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "Choose the right online degree",
                  "Compare universities and programs",
                  "Understand eligibility",
                  "Explore fees and EMI options",
                  "Understand career scope",
                  "Check recognition before applying",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-cyan-300"
                    />

                    <span className="text-sm text-blue-50">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT DETAILS ================= */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container-main mx-auto grid grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">

          <a
            href="tel:+919140309999"
            className="group flex min-w-0 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
              <Phone size={21} />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Call Us
              </p>
              <p className="mt-1 font-bold text-[#0F1B3D]">
                +91 91403 09999
              </p>
            </div>
          </a>

          <a
            href="mailto:counselling@feedinguniversities.com"
            className="group flex min-w-0 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
              <Mail size={21} />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Email Us
              </p>
              <p className="mt-1 truncate font-bold text-[#0F1B3D]">
                counselling@feedinguniversities.com
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/919140309999"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-w-0 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
              <MessageCircle size={21} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                WhatsApp
              </p>
              <p className="mt-1 font-bold text-[#0F1B3D]">
                Chat With Us
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600">
              <Clock3 size={21} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Support
              </p>
              <p className="mt-1 font-bold text-[#0F1B3D]">
                Admission Guidance
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= MAIN FORM ================= */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container-main mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            {/* LEFT CONTENT */}
            <div className="lg:sticky lg:top-28">

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Get Free Guidance
              </span>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0F1B3D] sm:text-4xl">
                Tell us what
                <span className="text-blue-700"> you're looking for.</span>
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Fill in your details and share what you want to study. We'll
                use this information to understand your requirements and guide
                you toward relevant options.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <ShieldCheck size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#0F1B3D]">
                      Verify before you apply
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Recognition, eligibility and current program details
                      should be checked before admission.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600">
                    <GraduationCap size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#0F1B3D]">
                      Personalised guidance
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Share your qualification and career direction so the
                      conversation can be more relevant.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#0F1B3D]">
                      Compare before deciding
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Explore university, fee, EMI, eligibility and program
                      differences before making your shortlist.
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-7 flex items-center gap-3">
                <MapPin size={19} className="text-blue-600" />
                <span className="text-sm text-slate-500">
                  Online counselling available for learners across India
                </span>
              </div>
            </div>

            {/* FORM */}
             <EnquiryForm />
          </div>
        </div>
      </section>

      {/* ================= WHATSAPP CTA ================= */}
      <section className="bg-white py-16">
        <div className="container-main mx-auto px-4 sm:px-6">
          <div className="overflow-hidden rounded-3xl bg-linear-to-r from-emerald-600 to-green-600 p-7 shadow-xl sm:p-10">
            <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                  <MessageCircle size={29} />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-emerald-100">
                    Need a quick answer?
                  </p>

                  <h2 className="mt-1 text-2xl font-extrabold text-white">
                    Chat with us on WhatsApp
                  </h2>

                  <p className="mt-2 text-sm text-emerald-50">
                    Ask about programs, universities, eligibility or fees.
                  </p>
                </div>
              </div> 

              <a
                href="https://wa.me/919140309999?text=Hello%20Feeding%20Universities%2C%20I%20need%20help%20choosing%20an%20online%20degree."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-emerald-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Start WhatsApp Chat
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-slate-950 py-16 text-center text-white">
        <div className="container-main mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Still deciding which university to choose?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Start by comparing universities and programs based on eligibility,
            fees, recognition, specializations and your career goals.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/compare"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-7 py-3.5 font-bold text-slate-950 transition-all hover:-translate-y-1 hover:bg-yellow-300"
            >
              Compare Universities
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/universities"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-3.5 font-semibold text-white transition-all hover:bg-white hover:text-slate-950"
            >
              Check Universities
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;