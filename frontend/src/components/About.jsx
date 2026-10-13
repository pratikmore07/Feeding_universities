import { Link } from "react-router-dom";
import CounsellingButton from "./CounsellingButton";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Search,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Verification First",
      description:
        "We encourage students to check recognition, eligibility, fees and program details before making an admission decision.",
    },
    {
      icon: HeartHandshake,
      title: "Student First",
      description:
        "Our guidance is designed around the student's education background, career goals, budget and learning preferences.",
    },
    {
      icon: Search,
      title: "Compare Before You Apply",
      description:
        "We make it easier to compare universities, programs, specializations, fees, EMI options and learner support.",
    },
    {
      icon: Target,
      title: "Career Focused",
      description:
        "We help learners understand possible career directions and choose programs that match their long-term goals.",
    },
  ];

  const audiences = [
    {
      icon: GraduationCap,
      title: "Students",
      text: "Explore online degrees and understand your options before applying.",
    },
    {
      icon: Users,
      title: "Working Professionals",
      text: "Find flexible programs that can fit alongside your career.",
    },
    {
      icon: BookOpen,
      title: "Fresh Graduates",
      text: "Compare postgraduate and career-oriented programs for your next step.",
    },
    {
      icon: HeartHandshake,
      title: "Parents & Mentors",
      text: "Get clearer information about recognition, fees, eligibility and career scope.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Understand Your Goal",
      text: "Tell us about your education, career objective and preferred program.",
    },
    {
      number: "02",
      title: "Explore Programs",
      text: "Discover suitable degrees, specializations and learning options.",
    },
    {
      number: "03",
      title: "Compare Universities",
      text: "Compare important factors such as eligibility, fees, recognition and support.",
    },
    {
      number: "04",
      title: "Make an Informed Decision",
      text: "Get guidance before applying and verify final details through official sources.",
    },
  ];

  const stats = [
    {
      value: "50+",
      label: "Universities & Programs",
    },
    {
      value: "20+",
      label: "Program Options",
    },
    {
      value: "1:1",
      label: "Student Guidance",
    },
    {
      value: "100%",
      label: "Verification Focus",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F1B3D]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-indigo-900">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="container-main relative mx-auto px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                About Feeding Universities
              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Helping You Choose the
                <span className="block text-cyan-300">Right Online Degree</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
                Feeding Universities is an online education discovery and
                counselling platform designed to help students, graduates and
                working professionals understand, compare and shortlist online
                degree programs with greater clarity.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/universities"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-[#0F1B3D] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-yellow-400/30"
                >
                  Explore Universities
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <CounsellingButton />
              </div>
            </div>

            {/* Hero Card */}
            <div className="relative">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-7">
                <div className="rounded-2xl bg-white p-6 shadow-xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-blue-600">
                        OUR APPROACH
                      </p>

                      <h2 className="mt-2 text-2xl font-extrabold text-[#0F1B3D]">
                        Clarity Before Admission
                      </h2>
                    </div>

                    <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                      <ShieldCheck size={28} />
                    </div>
                  </div>

                  <div className="mt-7 space-y-4">
                    {[
                      "Understand your career goal",
                      "Explore suitable online programs",
                      "Compare universities",
                      "Check eligibility and recognition",
                      "Understand fees and EMI options",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"
                      >
                        <CheckCircle2
                          size={20}
                          className="shrink-0 text-emerald-500"
                        />

                        <span className="text-sm font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/10 p-5 text-white">
                    <p className="text-3xl font-extrabold">01</p>
                    <p className="mt-1 text-sm text-blue-100">
                      Student-first approach
                    </p>
                  </div>

                  <div className="rounded-2xl bg-yellow-400 p-5 text-[#0F1B3D]">
                    <p className="text-3xl font-extrabold">360°</p>
                    <p className="mt-1 text-sm font-medium">
                      Education guidance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container-main mx-auto grid grid-cols-2 divide-x divide-slate-200 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-7 text-center sm:px-6">
              <p className="text-2xl font-extrabold text-blue-800 sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="container-main mx-auto px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Who We Are
              </span>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0F1B3D] sm:text-4xl">
                Making online education
                <span className="text-blue-700"> easier to understand.</span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Choosing an online degree can be confusing. Students often have
                questions about universities, recognition, eligibility, fees,
                specializations, examinations, career opportunities and EMI
                options.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Feeding Universities brings these decision points together in
                one place so learners can explore their options and approach
                admission decisions with more information and confidence.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Our goal is not simply to show a list of universities. We want
                to help students understand the differences between programs and
                identify options that fit their educational background, budget
                and career direction.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <Award size={24} />
                </div>

                <div>
                  <p className="font-bold text-[#0F1B3D]">
                    Information-led guidance
                  </p>
                  <p className="text-sm text-slate-500">
                    Verify important details before you apply.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative">
              <div className="rounded-3xl bg-linear-to-br from-blue-800 to-indigo-900 p-8 text-white shadow-2xl sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-blue-950">
                  <Target size={28} />
                </div>

                <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Our Mission
                </p>

                <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                  Make better education decisions simpler.
                </h3>

                <p className="mt-5 leading-8 text-blue-100">
                  We aim to create a simpler journey from “Which degree should I
                  choose?” to “Which university and program should I explore?”
                </p>

                <div className="mt-8 grid gap-3">
                  {[
                    "Discover suitable programs",
                    "Compare important decision factors",
                    "Understand admission requirements",
                    "Get guidance before applying",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3"
                    >
                      <CheckCircle2
                        size={19}
                        className="shrink-0 text-cyan-300"
                      />

                      <span className="text-sm text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-main mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What We Stand For
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0F1B3D] sm:text-4xl">
              Guidance built around the student
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Our platform is designed around practical questions students need
              answered before choosing an online degree.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#0F1B3D]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="bg-blue-50/60 py-20 lg:py-24">
        <div className="container-main mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Who We Help
              </span>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0F1B3D] sm:text-4xl">
                Different learners.
                <span className="block text-blue-700">
                  One clearer journey.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Whether you are starting your career, changing direction or
                continuing your education while working, our platform helps you
                explore options based on your situation.
              </p>

                    <CounsellingButton label="Talk to a counsellor" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                        <Icon size={23} />
                      </div>

                      <h3 className="font-bold text-[#0F1B3D]">{item.title}</h3>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-main mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              How We Help
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0F1B3D] sm:text-4xl">
              From confusion to a clearer shortlist
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A simple process for understanding your options before making an
              admission decision.
            </p>
          </div>

          <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-blue-100">
                      {step.number}
                    </span>

                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#0F1B3D]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.text}
                  </p>
                </div>

                {index !== steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-blue-700 text-white lg:flex">
                    <ArrowRight size={13} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="container-main mx-auto px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Why Feeding Universities
              </span>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                More than a university directory.
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Choosing an online degree involves more than looking at a
                university name. Program structure, eligibility, fees,
                specializations, recognition and career direction all matter.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Program and university discovery",
                  "Recognition and eligibility guidance",
                  "Fee and EMI comparison support",
                  "Career-oriented program exploration",
                  "Personalized counselling conversations",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-cyan-300" />

                    <span className="text-sm text-slate-200 sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950">
                <GraduationCap size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Education decisions deserve clarity.
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                Our goal is to give learners useful information and guidance so
                they can ask better questions, compare relevant options and
                verify important details before applying.
              </p>

              <div className="mt-7 rounded-2xl bg-white/10 p-5">
                <p className="text-sm leading-7 text-slate-200">
                  <span className="font-bold text-yellow-300">Important:</span>{" "}
                  University recognition, fees, eligibility, admission rules and
                  program availability can change. Students should always verify
                  final details through the university and relevant official
                  sources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-blue-700 via-blue-800 to-indigo-800 py-16">
        <div className="container-main mx-auto px-4 text-center sm:px-6">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              Start Your Journey
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
              Not sure which online degree is right for you?
            </h2>

            <p className="mt-4 leading-7 text-blue-100">
              Explore universities, compare programs or speak with our
              counselling team to understand your options.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/universities"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-7 py-3.5 font-bold text-[#0F1B3D] transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl"
              >
                Explore Universities
                <ArrowRight size={18} />
              </Link>

              <CounsellingButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
