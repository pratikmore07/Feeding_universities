import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Notfound() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F8FAFF] text-[#0B1220]">
      <section className="relative flex min-h-screen items-center justify-center px-6 py-20">
        {/* Background decorations */}
        <motion.div
          className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#2C5CF6]/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#F7C948]/20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating dots */}
        <motion.div
          className="absolute left-[12%] top-[25%] h-4 w-4 rounded-full bg-[#F7C948]"
          animate={{
            y: [0, -25, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[15%] top-[20%] h-3 w-3 rounded-full bg-[#2C5CF6]"
          animate={{
            y: [0, 20, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[20%] left-[20%] h-5 w-5 rounded-full border-4 border-[#2C5CF6]/30"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          {/* Small badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#2C5CF6]/15 bg-white px-5 py-2.5 shadow-sm"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="h-2.5 w-2.5 rounded-full bg-[#F7C948]"
            />

            <span className="text-sm font-bold text-[#1B2A64]">
              Oops! Page Not Found
            </span>
          </motion.div>

          {/* 404 */}
          <div className="relative mx-auto mb-8 select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              className="relative"
            >
              <motion.h1
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[120px] font-black leading-none tracking-[-0.08em] text-[#1B2A64] sm:text-[180px] md:text-[240px]"
              >
                4
                <span className="relative inline-block text-[#2C5CF6]">
                  0
                  <motion.span
                    animate={{
                      rotate: [0, 8, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-[#F7C948] sm:border-12 md:border-15"
                  />
                </span>
                4
              </motion.h1>

              {/* Shadow */}
              <motion.div
                animate={{
                  scaleX: [1, 0.75, 1],
                  opacity: [0.18, 0.08, 0.18],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto mt-2 h-5 w-[55%] rounded-[50%] bg-[#1B2A64]/20 blur-xl"
              />
            </motion.div>
          </div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
          >
            <h2 className="text-3xl font-black tracking-tight text-[#0B1220] sm:text-4xl md:text-5xl">
              Page Not Found
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Looks like this page took a little detour. Don't worry, your
              journey with{" "}
              <span className="font-bold text-[#2C5CF6]">
                Feeding Universities
              </span>{" "}
              can continue from here.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link to="/">
              <motion.div
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
                className="flex min-w-45 items-center justify-center gap-2 rounded-xl bg-[#2C5CF6] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#2C5CF6]/20"
              >
                <span>←</span>
                Back to Home
              </motion.div>
            </Link>

            <Link to="/universities">
              <motion.div
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
                className="flex min-w-45 items-center justify-center gap-2 rounded-xl border-2 border-[#1B2A64]/10 bg-white px-7 py-4 text-sm font-bold text-[#1B2A64] shadow-sm"
              >
                Explore Universities
                <span>→</span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Bottom cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
            className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3"
          >
            {[
              {
                number: "01",
                title: "Explore",
                text: "Find your university",
              },
              {
                number: "02",
                title: "Compare",
                text: "Check your options",
              },
              {
                number: "03",
                title: "Start",
                text: "Begin your journey",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.75 + index * 0.12,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="group rounded-2xl border border-[#1B2A64]/8 bg-white p-5 text-left shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#2C5CF6]/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-widest text-[#2C5CF6]">
                    {item.number}
                  </span>

                  <motion.span
                    whileHover={{ rotate: 45 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFE9A8] text-[#1B2A64]"
                  >
                    ↗
                  </motion.span>
                </div>

                <h3 className="mt-4 text-lg font-black text-[#1B2A64]">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            <p className="text-sm font-semibold text-slate-400">
              Your education journey starts with{" "}
              <span className="font-black text-[#1B2A64]">
                Feeding Universities
              </span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Notfound;
