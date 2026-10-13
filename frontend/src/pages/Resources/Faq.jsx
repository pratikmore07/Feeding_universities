import { useState } from "react";

const faqs = [
  {
    question: "What is an online degree?",
    answer:
      "An online degree is a degree program delivered through online learning platforms. Students can attend classes, access study material and complete academic activities remotely.",
  },
  {
    question: "Are online degrees valid in India?",
    answer:
      "Online degrees from universities and programs recognized by the appropriate regulatory authorities can be valid. Always verify the current recognition status before taking admission.",
  },
  {
    question: "Can working professionals pursue an online degree?",
    answer:
      "Yes. Online programs are designed to provide flexibility, making them suitable for many working professionals.",
  },
  {
    question: "How can I select the right university?",
    answer:
      "Compare accreditation, recognition, curriculum, fees, learning support, examinations, placement assistance and overall program structure.",
  },
  {
    question: "Can I pay my fees through EMI?",
    answer:
      "Many universities and financing providers offer EMI options. Availability depends on the university and program.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-blue-700 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-blue-950">
            Help Center
          </span>

          <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mt-5 text-lg text-blue-100">
            Find answers to common questions about online education,
            universities and admissions.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>

                <span className="text-2xl font-bold text-blue-700">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="border-t border-gray-100 px-6 pb-6 pt-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
