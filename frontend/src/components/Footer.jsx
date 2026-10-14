import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 pt-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block text-2xl font-bold tracking-tight text-white"
            >
              Feeding Universities
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              Discover online degree programs, explore universities & find 
              learning opportunities that match your academic and career goals.
            </p>

            <div className="mt-6">
              <Link
                to="/universities#programs"
                className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                Explore Programs
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/universities#programs"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  All Programs
                </Link>
              </li>

              <li>
                <Link
                  to="/universities"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Universities
                </Link>
              </li>

              <li>
                <Link
                  to="/universities#programs"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Programs */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Programs
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/management#online-mba"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Online MBA
                </Link>
              </li>

              <li>
                <Link
                  to="/technology#online-mca"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Online MCA
                </Link>
              </li>

              <li>
                <Link
                  to="/technology#online-bca"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Online BCA
                </Link>
              </li>

              <li>
                <Link
                  to="/commerce#online-bcom"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Online B.Com
                </Link>
              </li>

              <li>
                <Link
                  to="/arts#online-ba"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Online BA
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Technology
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/technology#data-science"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Data Science
                </Link>
              </li>

              <li>
                <Link
                  to="/technology#ai-ml"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  AI & ML
                </Link>
              </li>

              <li>
                <Link
                  to="/technology#cyber-security"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Cyber Security
                </Link>
              </li>

              <li>
                <Link
                  to="/explore-by-goal#working-professionals"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Working Professionals
                </Link>
              </li>

              <li>
                <Link
                  to="/explore-by-goal#career-switchers"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Career Switchers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-10 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            {/* Copyright */}
            <p className="text-slate-500">
              © {new Date().getFullYear()} Feeding Universities. All rights
              reserved.
            </p>

            {/* Built By */}
            <p className="text-slate-500">
              Built with <span className="text-red-400">♥</span> by{" "}
              <span className="font-semibold text-white transition hover:text-[#F7C948]">
                Pratiiii
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
