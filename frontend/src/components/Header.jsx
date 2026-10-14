import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import CounsellingButton from "../components/CounsellingButton";
import logo from "../assets/images/Logo_FeedingUniversity.png";

import linkedin from "../assets/icons/linkedin.png";
import instagram from "../assets/icons/insta.png";
import facebook from "../assets/icons/facebook.png";
import whatsapp from "../assets/icons/wapp.png";
import call from "../assets/icons/call.png";

const programCategories = [
  { name: "Arts", path: "/arts" },
  { name: "Commerce", path: "/commerce" },
  { name: "Explore By Goal", path: "/explore-by-goal" },
  { name: "Management", path: "/management" },
  { name: "Technology", path: "/technology" },
];

const companyLinks = [
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const resourceLinks = [
  { name: "Blog", path: "/blog" },
  { name: "FAQs", path: "/faq" },
  { name: "Admission Guide", path: "/admissions-guide" },
  { name: "Admission Process", path: "/admission-process" },
  { name: "UGC-DEB Verification Guide", path: "/ugc-deb-verification-guide" },
  { name: "Online Degree Validity", path: "/online-degree-validity" },
  { name: "Career Outcomes", path: "/career-outcomes" },
  { name: "Career Scope", path: "/career-scope" },
  { name: "Salary Guide", path: "/salary-guide" },
  { name: "EMI & Scholarship Guide", path: "/emi-scholarship-guide" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 80) {
        setShowHeader(true);
        setScrolled(currentY > 10);
        lastScrollY.current = currentY;
        return;
      }

      setScrolled(true);

      if (currentY > lastScrollY.current + 4) {
        setShowHeader(false);

        setMobileOpen(false);
        setProgramsOpen(false);
        setResourcesOpen(false);
        setCompanyOpen(false);

        setMobileProgramsOpen(false);
        setMobileResourcesOpen(false);
        setMobileCompanyOpen(false);
      } else if (currentY < lastScrollY.current - 4) {
        setShowHeader(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeAllDesktopMenus = () => {
    setProgramsOpen(false);
    setResourcesOpen(false);
    setCompanyOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileProgramsOpen(false);
    setMobileResourcesOpen(false);
    setMobileCompanyOpen(false);
  };

  return (
    <>
      <div className="bg-linear-to-r from-blue-900 via-blue-800 to-indigo-800 text-white">
        <div className="container-main flex min-h-10 items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="hidden items-center gap-5 sm:flex">
            <Link
              to="/verify-recognition"
              className="flex items-center gap-2 font-medium tracking-wide transition-colors hover:text-cyan-300"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
              Verify Recognition
            </Link>

            <span className="h-4 w-px bg-white/20" />

            <Link
              to="/admissions-guide"
              className="transition-colors hover:text-cyan-300"
            >
              Admission Guide
            </Link>

            <Link
              to="/contact"
              className="transition-colors hover:text-cyan-300"
            >
              Need Help?
            </Link>
          </div>

          <div className="ml-auto flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+919140309999"
              className="group flex items-center gap-1.5 font-medium transition-colors hover:text-cyan-300"
            >
              <img
                src={call}
                alt="Call"
                className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span>+91 91403 09999</span>
            </a>

            <span className="hidden h-4 w-px bg-white/20 sm:block" />

            <a
              href="https://wa.me/919140309999?text=Hello%20Feeding%20Universities%2C%20I%20want%20to%20know%20more%20about%20online%20degree%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-1.5 sm:flex"
            >
              <img
                src={whatsapp}
                alt="WhatsApp"
                className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
              />

              <span className="text-emerald-300 transition-colors group-hover:text-emerald-200">
                WhatsApp
              </span>
            </a>

            <span className="hidden h-4 w-px bg-white/20 md:block" />

            <div className="hidden items-center gap-2.5 md:flex">
              <a
                href="https://www.linkedin.com/company/feeding-universities/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="h-6 w-6 object-contain transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                />
              </a>

              <a
                href="https://www.instagram.com/feedinguniversities?stkn=Nnl4anFxeDloMGZk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className="h-6 w-6 object-contain transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                />
              </a>

              <a
                href="https://www.facebook.com/share/1Dn7Vqsvwo/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className="h-6 w-6 object-contain transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
          showHeader ? "translate-y-0" : "translate-y-[-130%]"
        } ${
          scrolled
            ? "border-b border-blue-100/60 bg-white/70 shadow-[0_8px_30px_rgba(30,64,175,0.12)] backdrop-blur-xl"
            : "border-b border-slate-200 bg-white"
        }`}
        onMouseLeave={closeAllDesktopMenus}
      >
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-blue-500 via-cyan-400 to-indigo-500 opacity-70" />

        <div className="container-main flex h-20 items-center justify-between">
          <Link to="/" className="group flex shrink-0 items-center gap-2">
            <img
              src={logo}
              alt="Feeding Universities Logo"
              className="block h-auto max-h-20 w-auto max-w-45 object-contain transition-transform duration-200 group-hover:scale-[1.02] sm:max-w-50"
            />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            <NavLink
              to="/universities"
              className={({ isActive }) =>
                `group relative py-1 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-blue-700"
                    : "text-slate-700 hover:text-blue-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Universities
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-linear-to-r from-blue-600 to-cyan-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => {
                setProgramsOpen(true);
                setResourcesOpen(false);
                setCompanyOpen(false);
              }}
            >
              <button
                type="button"
                className={`flex items-center gap-1 py-1 text-sm font-semibold transition-colors duration-200 ${
                  programsOpen
                    ? "text-blue-700"
                    : "text-slate-700 hover:text-blue-700"
                }`}
              >
                Programs
                <span
                  className={`text-xs transition-transform duration-300 ${
                    programsOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <div
                className={`absolute left-1/2 top-full z-50 w-96 -translate-x-1/2 pt-4 transition-all duration-250 ease-out ${
                  programsOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
              >
                <div className="rounded-2xl border border-blue-100/60 bg-white/95 p-4 shadow-[0_20px_60px_rgba(30,64,175,0.15)] backdrop-blur-xl">
                  <ul className="space-y-1">
                    {programCategories.map((cat) => (
                      <li key={cat.name}>
                        <Link
                          to={cat.path}
                          onClick={() => setProgramsOpen(false)}
                          className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                        >
                          {cat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <NavLink
              to="/compare"
              className={({ isActive }) =>
                `group relative py-1 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-blue-700"
                    : "text-slate-700 hover:text-blue-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Compare
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-linear-to-r from-blue-600 to-cyan-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>

            <NavLink
              to="/fees-and-emi"
              className={({ isActive }) =>
                `group relative py-1 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-blue-700"
                    : "text-slate-700 hover:text-blue-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Fees &amp; EMI
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-linear-to-r from-blue-600 to-cyan-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => {
                setCompanyOpen(true);
                setResourcesOpen(false);
                setProgramsOpen(false);
              }}
            >
              <button
                type="button"
                className={`flex items-center gap-1 py-1 text-sm font-semibold transition-colors duration-200 ${
                  companyOpen
                    ? "text-blue-700"
                    : "text-slate-700 hover:text-blue-700"
                }`}
              >
                Company
                <span
                  className={`text-xs transition-transform duration-300 ${
                    companyOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <div
                className={`absolute left-0 top-full z-50 w-64 pt-4 transition-all duration-250 ease-out ${
                  companyOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
              >
                <div className="rounded-2xl border border-blue-100/60 bg-white/95 p-4 shadow-[0_20px_60px_rgba(30,64,175,0.15)] backdrop-blur-xl">
                  <ul className="space-y-1">
                    {companyLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          onClick={() => setCompanyOpen(false)}
                          className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => {
                setResourcesOpen(true);
                setProgramsOpen(false);
                setCompanyOpen(false);
              }}
            >
              <button
                type="button"
                className={`flex items-center gap-1 py-1 text-sm font-semibold transition-colors duration-200 ${
                  resourcesOpen
                    ? "text-blue-700"
                    : "text-slate-700 hover:text-blue-700"
                }`}
              >
                Resources
                <span
                  className={`text-xs transition-transform duration-300 ${
                    resourcesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <div
                className={`absolute left-0 top-full z-50 w-72 pt-4 transition-all duration-250 ease-out ${
                  resourcesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
              >
                <div className="rounded-2xl border border-blue-100/60 bg-white/95 p-4 shadow-[0_20px_60px_rgba(30,64,175,0.15)] backdrop-blur-xl">
                  <ul className="space-y-1">
                    {resourceLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          onClick={() => setResourcesOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <CounsellingButton />
          </nav>

          <button
            type="button"
            onClick={() => {
              if (mobileOpen) {
                closeMobileMenu();
              } else {
                setMobileOpen(true);
              }
            }}
            className="rounded-lg border border-slate-200 p-2 transition-transform duration-200 active:scale-90 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className="text-xl">{mobileOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl transition-all duration-400 ease-out lg:hidden ${
            mobileOpen
              ? "max-h-[90vh] overflow-y-auto opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="container-main flex flex-col py-3">
            <NavLink
              to="/universities"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `group relative flex items-center px-3 py-3.5 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-blue-700"
                    : "text-slate-700 hover:text-blue-700"
                }`
              }
            >
              Universities
            </NavLink>

            <div>
              <button
                type="button"
                onClick={() => {
                  setMobileProgramsOpen(!mobileProgramsOpen);
                  setMobileResourcesOpen(false);
                  setMobileCompanyOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-sm font-semibold transition-colors duration-200 ${
                  mobileProgramsOpen
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                Programs
                <span
                  className={`text-xs transition-transform duration-300 ${
                    mobileProgramsOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileProgramsOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-3 mt-1 rounded-xl border border-blue-100/60 bg-blue-50/40 p-2">
                  {programCategories.map((cat) => (
                    <Link
                      key={cat.path}
                      to={cat.path}
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-white hover:text-blue-700"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink
              to="/compare"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `px-3 py-3.5 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-blue-700"
                    : "text-slate-700 hover:text-blue-700"
                }`
              }
            >
              Compare
            </NavLink>

            <NavLink
              to="fees-and-emi"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `px-3 py-3.5 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-blue-700"
                    : "text-slate-700 hover:text-blue-700"
                }`
              }
            >
              Fees &amp; EMI
            </NavLink>

            <div>
              <button
                type="button"
                onClick={() => {
                  setMobileCompanyOpen(!mobileCompanyOpen);
                  setMobileProgramsOpen(false);
                  setMobileResourcesOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-sm font-semibold transition-colors duration-200 ${
                  mobileCompanyOpen
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                Company
                <span
                  className={`text-xs transition-transform duration-300 ${
                    mobileCompanyOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileCompanyOpen
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-3 mt-1 rounded-xl border border-blue-100/60 bg-blue-50/40 p-2">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-white hover:text-blue-700"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => {
                  setMobileResourcesOpen(!mobileResourcesOpen);
                  setMobileProgramsOpen(false);
                  setMobileCompanyOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-sm font-semibold transition-colors duration-200 ${
                  mobileResourcesOpen
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                Resources
                <span
                  className={`text-xs transition-transform duration-300 ${
                    mobileResourcesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileResourcesOpen
                    ? "max-h-150 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-3 mt-1 rounded-xl border border-blue-100/60 bg-blue-50/40 p-2">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-white hover:text-blue-700"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/counselling"
              onClick={closeMobileMenu}
              className="mt-4 rounded-lg bg-yellow-400 px-5 py-3 text-center text-sm font-bold text-slate-900 shadow-md shadow-yellow-400/30 transition-transform duration-200 hover:bg-yellow-300 active:scale-95"
            >
              Book Free Counselling
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
