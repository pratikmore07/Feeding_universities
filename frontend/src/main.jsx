import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import ScrollToTop from "./components/ScrollToTop";
import Analytics from "./components/Analytics";
import Seo from "./components/Seo";
import {
  About,
  AdmissionsGuide,
  AdmissionsProcess,
  App,
  Arts,
  Blog,
  CareerOutcomes,
  CareerScope,
  Counselling,
  Compare,
  Commerce,
  Contact,
  EmiScholarshipGuide,
  ExploreByGoal,
  Faq,
  FeesAndEmi,
  Home,
  Management,
  MetaAdsLanding,
  Notfound,
  OnlineDegreeValidity,
  SalaryGuide,
  Technology,
  Thankyou,
  Universities,
  UgcDebVerificationGuide,
  VerifyRecognition,
} from "./routePages";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Analytics />
      <Seo />
      <ScrollToTop />
      <Suspense
        fallback={
          <div
            role="status"
            className="flex min-h-[50vh] items-center justify-center text-sm font-medium text-slate-600"
          >
            Loading page…
          </div>
        }
      >
        <Routes>
          <Route path="/metaads" element={<MetaAdsLanding />} />
          <Route path="/" element={<App />}>
            {/* Main Pages */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="counselling" element={<Counselling />} />
            <Route path="thank-you" element={<Thankyou />} />
            <Route path="universities" element={<Universities />} />
            <Route path="admission-process" element={<AdmissionsProcess />} />
            <Route path="compare" element={<Compare />} />
            <Route path="fees-and-emi" element={<FeesAndEmi />} />
            <Route path="/verify-recognition" element={<VerifyRecognition />} />

            {/* Programs */}
            <Route path="arts" element={<Arts />} />
            <Route path="commerce" element={<Commerce />} />
            <Route path="explore-by-goal" element={<ExploreByGoal />} />
            <Route path="management" element={<Management />} />
            <Route path="technology" element={<Technology />} />

            {/* Resource */}
            <Route path="faq" element={<Faq />} />
            <Route path="blog" element={<Blog />} />
            <Route path="admissions-guide" element={<AdmissionsGuide />} />
            <Route
              path="ugc-deb-verification-guide"
              element={<UgcDebVerificationGuide />}
            />
            <Route
              path="online-degree-validity"
              element={<OnlineDegreeValidity />}
            />
            <Route path="career-outcomes" element={<CareerOutcomes />} />
            <Route path="career-scope" element={<CareerScope />} />
            <Route path="salary-guide" element={<SalaryGuide />} />
            <Route
              path="emi-scholarship-guide"
              element={<EmiScholarshipGuide />}
            />
            <Route
              path="verify-recognition"
              element={<div className="p-10 text-center">Verify Recognition</div>}
            />

            {/* 404 */}
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
