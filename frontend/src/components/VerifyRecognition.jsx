import { useState } from "react";
import { motion } from "motion/react";
import CounsellingButton from "./CounsellingButton";

const verificationSteps = [
  {
    number: "01",
    title: "Select Your University",
    text: "Choose the university offering the online or distance learning program you are interested in.",
  },
  {
    number: "02",
    title: "Check Recognition",
    text: "Verify whether the university and the specific mode of delivery are recognised for the relevant academic session.",
  },
  {
    number: "03",
    title: "Verify Your Program",
    text: "Check the exact degree or program name, duration, credits and other academic details.",
  },
  {
    number: "04",
    title: "Make an Informed Decision",
    text: "Review the information carefully before completing your admission or making any payment.",
  },
];

const checklist = [
  "University recognition status",
  "Online or distance learning entitlement",
  "Exact program and academic session",
  "Program duration and credits",
  "Mode of examination",
  "Degree or certificate details",
];

const VerifyRecognition = () => {
  const [university, setUniversity] = useState("");
  const [program, setProgram] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!university.trim() || !program.trim()) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFF]">
      <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
        <motion.div
          className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl"
          animate={{
            x: [0, 35, 0],
            y: [0, 25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="pointer-events-none absolute -bottom-40 -right-40 h-105 w-105 rounded-full bg-yellow-200/40 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="relative z-10 mx-auto max-w-7xl"
          initial="hidden"
          animate="visible"
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm"
              >
                <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-blue-600">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                </span>
                Recognition Verification
              </motion.div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-[#1B2A64] sm:text-5xl lg:text-6xl">
                Verify Your
                <span className="block text-blue-600">
                  University Recognition
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Before enrolling in an online or distance learning program, make
                sure you understand the university's recognition, entitlement
                and program details for the relevant academic session.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <motion.a
                  href="#verify"
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="rounded-xl bg-blue-600 px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700"
                >
                  Start Verification
                </motion.a>

                <motion.div
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  Talk to a Counsellor
                  <CounsellingButton label="Talk to a Counsellor" />
                </motion.div>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    ✓
                  </span>
                  University details
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                    ✓
                  </span>
                  Program details
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    ✓
                  </span>
                  Academic session
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 45, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="relative"
              id="verify"
            >
              <motion.div
                className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-yellow-200/50 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative rounded-4xl border border-blue-100 bg-white p-5 shadow-[0_25px_70px_rgba(30,64,175,0.13)] sm:p-7">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
                      Verification
                    </p>

                    <h2 className="mt-1 text-2xl font-extrabold text-[#1B2A64]">
                      Check Your Program
                    </h2>
                  </div>

                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-7 w-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3 4 6v5c0 5.2 3.4 8.8 8 10 4.6-1.2 8-4.8 8-10V6l-8-3Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.5 12 2.2 2.2 4.8-5"
                      />
                    </svg>
                  </motion.div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="university"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      University Name
                    </label>

                    <input
                      id="university"
                      type="text"
                      value={university}
                      onChange={(e) => {
                        setUniversity(e.target.value);
                        setSubmitted(false);
                      }}
                      placeholder="Enter university name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="program"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Program / Degree
                    </label>

                    <input
                      id="program"
                      type="text"
                      value={program}
                      onChange={(e) => {
                        setProgram(e.target.value);
                        setSubmitted(false);
                      }}
                      placeholder="Example: Online MBA"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700"
                  >
                    Verify Recognition
                    <span>→</span>
                  </motion.button>
                </form>

                {submitted && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 12,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    className="mt-5 rounded-xl border border-yellow-200 bg-yellow-50 p-4"
                  >
                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-bold text-slate-900">
                        !
                      </div>

                      <div>
                        <p className="text-sm font-bold text-slate-900">
                          Verification request received
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-600">
                          This form is ready to connect with your verification
                          API. For official recognition information, always
                          verify the university and program against the
                          applicable regulatory source.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="mt-5 flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-xs leading-5 text-slate-600">
                  <span className="font-bold text-blue-600">i</span>
                  Always verify the exact university, program and academic
                  session before admission.
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-blue-100 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600">
              Simple Process
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#1B2A64] sm:text-4xl">
              How Recognition Verification Works
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              Follow these steps to understand what you should check before
              choosing an online or distance learning program.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {verificationSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -7,
                }}
                className="group relative rounded-2xl border border-blue-100 bg-[#F8FAFF] p-6 transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(30,64,175,0.1)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-blue-100 transition-colors duration-300 group-hover:text-blue-200">
                    {step.number}
                  </span>

                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                </div>

                <h3 className="mt-6 text-lg font-extrabold text-[#1B2A64]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
              }}
            >
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600">
                Before You Apply
              </span>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#1B2A64] sm:text-4xl">
                What should you
                <span className="block text-blue-600">verify?</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Recognition and eligibility can depend on the university,
                program, mode of learning and academic session. Check the
                details relevant to your intended admission.
              </p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                }}
                className="mt-7"
              >
                <CounsellingButton label=" Get Admission Guidance →" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
              }}
              className="rounded-4xl border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(30,64,175,0.08)] sm:p-8"
            >
              <div className="space-y-4">
                {checklist.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="flex items-center gap-4 rounded-xl bg-[#F8FAFF] px-4 py-3.5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      ✓
                    </span>

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-6xl overflow-hidden rounded-4xl bg-[#1B2A64] px-6 py-12 text-center sm:px-10"
        >
          <motion.div
            className="mx-auto mb-5 h-2 w-16 rounded-full bg-yellow-400"
            animate={{
              width: [64, 90, 64],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Need Help Choosing a Recognised Program?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
            Our counselling team can help you understand universities, programs,
            eligibility and admission requirements.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <motion.div
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <CounsellingButton label="Book Free Counselling" />
            </motion.div>

            <motion.a
              href="tel:+919140309999"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Call +91 91403 09999
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};
export default VerifyRecognition;
