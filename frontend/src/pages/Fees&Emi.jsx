import { useParams } from "react-router-dom";
import CounsellingButton from "../components/CounsellingButton";

const courseData = {
  "online-bca": {
    name: "Online BCA",
    category: "Technology",
    duration: "3 Years",
    eligibility: "12th Pass",
    description:
      "An online Bachelor of Computer Applications program designed for students who want to build a career in software and technology.",
  },

  "online-bcom": {
    name: "Online B.Com",
    category: "Commerce",
    duration: "3 Years",
    eligibility: "12th Pass",
    description:
      "Build a strong foundation in accounting, finance, business and commerce through flexible online learning.",
  },

  "online-ma": {
    name: "Online MA",
    category: "Arts & Humanities",
    duration: "2 Years",
    eligibility: "Graduation",
    description:
      "Develop advanced knowledge in humanities and social sciences with a flexible online master's degree.",
  },
};

const Coursedetails = () => {
  const { slug } = useParams();

  const course = courseData[slug] || courseData["online-bca"];

  return (
    <main>
      <section className="bg-blue-700 py-20 text-white">
        <div className="container-main">
          <span className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-slate-900">
            {course.category}
          </span>

          <h1 className="mt-6 text-4xl font-black sm:text-5xl">
            {course.name}
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-blue-100">
            {course.description}
          </p>
        </div>
      </section>

      <section className="container-main grid gap-8 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-black">About {course.name}</h2>

          <p className="mt-5 leading-8 text-slate-600">
            This program is designed to provide students with academic
            knowledge, practical understanding and career-focused learning.
          </p>

          <h2 className="mt-10 text-2xl font-black">What You Will Learn</h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              "Core subject knowledge",
              "Practical concepts",
              "Industry understanding",
              "Professional skills",
              "Project-based learning",
              "Career preparation",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 p-5 font-semibold"
              >
                ✓ {item}
              </div>
            ))}
          </div>

          <h2 className="mt-10 text-2xl font-black">Career Opportunities</h2>

          <p className="mt-4 leading-7 text-slate-600">
            Depending on your specialization and experience, this degree can
            support multiple career paths across relevant industries.
          </p>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 p-6 shadow-lg">
          <h3 className="text-xl font-black">Course Information</h3>

          <div className="mt-6 space-y-4">
            <div>
              <p className="text-sm text-slate-500">Course</p>
              <p className="font-bold">{course.name}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Duration</p>
              <p className="font-bold">{course.duration}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Eligibility</p>
              <p className="font-bold">{course.eligibility}</p>
            </div>
          </div>

          <CounsellingButton />
        </aside>
      </section>
    </main>
  );
};

export default Coursedetails;