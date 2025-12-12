import Link from "next/link";
import {
  BookOpen,
  CheckSquare,
  FileText,
  DownloadCloud,
  Link as LinkIcon,
} from "lucide-react";

const resourceSections = [
  {
    id: 1,
    title: "Guides & Tutorials",
    description: "Step-by-step immigration guides for different countries.",
    href: "/resources/guides",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Checklists",
    description: "Downloadable visa checklists to help you stay organized.",
    href: "/resources/checklists",
    icon: CheckSquare,
  },
  {
    id: 3,
    title: "Templates & Samples",
    description: "SOPs, Cover Letters, Reference Letter templates & more.",
    href: "/resources/templates",
    icon: FileText,
  },
  {
    id: 4,
    title: "Download Center",
    description: "PDFs, forms, brochures, and official immigration documents.",
    href: "/resources/downloads",
    icon: DownloadCloud,
  },
  {
    id: 5,
    title: "Government Links",
    description: "Verified immigration portals, embassy websites, and more.",
    href: "/resources/official-links",
    icon: LinkIcon,
  },
];

export default function ResourcesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight drop-shadow-sm">
          Immigration Resources
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
          Your go-to hub for trusted immigration materials, guides, and downloads.
        </p>
      </section>

      {/* Grid of Resource Sections */}
      <section className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {resourceSections.map(({ id, title, description, href, icon: Icon }) => (
          <Link
            key={id}
            href={href}
            aria-label={`Go to ${title}`}
            className="group block bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-[1.03]"
          >
            <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 group-hover:from-cyan-400 group-hover:to-blue-500 transition-colors duration-300 shadow-md">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
              {title}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">{description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
