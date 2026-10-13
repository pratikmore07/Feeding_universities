import { ArrowRight, Check, Clock3, GraduationCap, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <main className="flex min-h-[calc(100vh-120px)] items-center justify-center bg-slate-50 px-4 py-16 sm:px-6">
      <section
        aria-labelledby="thank-you-title"
        className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white px-6 py-10 text-center shadow-xl shadow-slate-200/60 sm:px-12 sm:py-14"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
          <Check aria-hidden="true" className="h-8 w-8" strokeWidth={3} />
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
          Request received
        </p>
        <h1
          id="thank-you-title"
          className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
        >
          Thank you for getting in touch
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-600">
          Your details have been submitted successfully. A university
          counsellor will contact you soon to help with your next steps.
        </p>

        <div className="mx-auto mt-8 grid max-w-lg gap-3 text-left sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
            <Clock3
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
            />
            <p className="text-sm leading-6 text-slate-600">
              Keep your phone nearby for a call from our counselling team.
            </p>
          </div>
          <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
            <GraduationCap
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
            />
            <p className="text-sm leading-6 text-slate-600">
              Explore verified universities while you wait.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-700/20"
          >
            Back to home <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <Link
            to="/universities"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-700/10"
          >
            View universities
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <a
          href="tel:+919140309999"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-700"
        >
          <Phone aria-hidden="true" className="h-4 w-4" />
          Need help now? Call +91 91403 09999
        </a>
      </section>
    </main>
  );
};

export default Thankyou;
