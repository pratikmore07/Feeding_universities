import { lazy } from "react";

export const App = lazy(() => import("./App"));
export const Home = lazy(() => import("./pages/Home"));
export const MetaAdsLanding = lazy(() => import("./pages/MetaAdsLanding"));
export const Counselling = lazy(() => import("./pages/Counselling"));
export const About = lazy(() => import("./components/About"));
export const Contact = lazy(() => import("./components/Contact"));
export const Notfound = lazy(() => import("./components/Notfound"));
export const Thankyou = lazy(() => import("./components/Thankyou"));
export const VerifyRecognition = lazy(() =>
  import("./components/VerifyRecognition"),
);
export const Universities = lazy(() => import("./pages/Universities"));
export const AdmissionsProcess = lazy(() =>
  import("./pages/Resources/AdmissionsProcess"),
);
export const Compare = lazy(() => import("./pages/Compare"));
export const FeesAndEmi = lazy(() => import("./pages/Fees&Emi"));
export const Arts = lazy(() => import("./pages/Programs/Arts"));
export const Commerce = lazy(() => import("./pages/Programs/Commerce"));
export const ExploreByGoal = lazy(() =>
  import("./pages/Programs/ExploreByGoal"),
);
export const Management = lazy(() => import("./pages/Programs/Management"));
export const Technology = lazy(() => import("./pages/Programs/Technology"));
export const Blog = lazy(() => import("./pages/Resources/Blog"));
export const Faq = lazy(() => import("./pages/Resources/Faq"));
export const AdmissionsGuide = lazy(() =>
  import("./pages/Resources/AdmissionsGuide"),
);
export const UgcDebVerificationGuide = lazy(() =>
  import("./pages/Resources/Ugc&DebVeriGuide"),
);
export const OnlineDegreeValidity = lazy(() =>
  import("./pages/Resources/OnlineDegreeValidity"),
);
export const CareerOutcomes = lazy(() =>
  import("./pages/Resources/CareerOutcomes"),
);
export const CareerScope = lazy(() => import("./pages/Resources/CareerScope"));
export const SalaryGuide = lazy(() => import("./pages/Resources/SalaryGuide"));
export const EmiScholarshipGuide = lazy(() =>
  import("./pages/Resources/Emi&ScholarshipGuide"),
);
