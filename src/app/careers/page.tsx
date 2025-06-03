import Link from "next/link";

const jobOpenings = [
  {
    id: 1,
    title: "Full-Stack Developer",
    location: "Remote",
    type: "Full-time",
    description:
      "Build scalable web applications using React, Node.js, and cloud technologies. Collaborate with cross-functional teams.",
    applyLink: "/careers/full-stack-developer",
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    location: "Mumbai, India",
    type: "Full-time",
    description:
      "Plan and execute digital marketing campaigns, SEO, SEM, and growth strategies to drive user acquisition.",
    applyLink: "/careers/digital-marketing-specialist",
  },
  {
    id: 3,
    title: "Customer Support Executive",
    location: "Remote",
    type: "Part-time",
    description:
      "Provide world-class support to visa applicants, answer queries, and help troubleshoot issues promptly.",
    applyLink: "/careers/customer-support-executive",
  },
  {
    id: 4,
    title: "Product Manager",
    location: "Remote",
    type: "Full-time",
    description:
      "Lead product strategy, define roadmap, and coordinate with engineering and marketing teams to deliver impactful features.",
    applyLink: "/careers/product-manager",
  },
];

export default function CareersPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900">Join Our Team</h1>
        <p className="mt-4 text-gray-600 text-lg">
          We&apos;re looking for passionate individuals to help us build the future of immigration services.
        </p>
      </section>

      {/* Job Listings */}
      <section className="space-y-8">
        {jobOpenings.map(({ id, title, location, type, description, applyLink }) => (
          <div
            key={id}
            className="border rounded-2xl p-6 shadow hover:shadow-lg transition duration-300 bg-white"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
              <div className="mt-2 sm:mt-0 flex gap-4 text-sm text-gray-500">
                <span>{location}</span>
                <span>•</span>
                <span>{type}</span>
              </div>
            </div>
            <p className="mt-4 text-gray-700">{description}</p>
            <Link
              href={applyLink}
              className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
              aria-label={`Apply for ${title}`}
            >
              Apply Now →
            </Link>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <p className="text-gray-700">
          Don&apos;t see a role that fits? Send your resume to{" "}
          <a href="mailto:careers@skylandimmigration.com" className="text-blue-600 hover:underline">
            careers@skylandimmigration.com
          </a>{" "}
          and we&apos;ll keep you in mind!
        </p>
      </section>
    </main>
  );
}
