
const blogPosts = [
  {
    title: "How to Choose the Right Online Degree Program",
    category: "Education",
    date: "September 15, 2026",
    description:
      "Learn the important factors you should consider before selecting an online degree program.",
  },
  {
    title: "Online Degree vs Regular Degree",
    category: "Career",
    date: "September 12, 2026",
    description:
      "Understand the major differences between online and regular degree programs.",
  },
  {
    title: "Best Online Degree Programs for Working Professionals",
    category: "Career",
    date: "September 10, 2026",
    description:
      "Explore how working professionals can continue their education without leaving their jobs.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-blue-700 px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <span className="inline-block rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-blue-950">
            Feeding Universities
          </span>

          <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Our Blog
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Explore useful articles, career advice, university updates and
            online education guides.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-48 items-center justify-center bg-blue-100">
                  <span className="text-5xl">📚</span>
                </div>

                <div className="p-6">
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-blue-800">
                    {post.category}
                  </span>

                  <h2 className="mt-4 text-xl font-bold text-gray-900">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>

                  <p className="mt-5 text-sm font-medium text-blue-600">
                    {post.date}
                  </p>

                  <button className="mt-5 font-semibold text-blue-700 hover:text-blue-900">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
