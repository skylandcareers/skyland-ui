"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from 'next/image';

const dummyPosts = [
    {
      id: 1,
      title: "Top 5 Tips for a Successful Canada Visa Application",
      slug: "canada-visa-tips",
      excerpt: "Ensure your Canada visa process goes smoothly with these expert-backed tips...",
      image: "/blog/canada-visa.jpg",
      date: "2025-06-01",
      tags: ["Canada", "Tips"],
    },
    {
      id: 2,
      title: "Australia Student Visa Requirements in 2025",
      slug: "australia-student-visa-2025",
      excerpt: "Everything you need to know about applying for an Australian student visa this year...",
      image: "/blog/australia-student.jpg",
      date: "2025-05-20",
      tags: ["Australia", "Students"],
    },
    {
      id: 3,
      title: "How to Prepare for Your Immigration Interview",
      slug: "immigration-interview-prep",
      excerpt: "Ace your immigration interview with confidence by following this simple guide...",
      image: "/blog/interview-prep.jpg",
      date: "2025-05-15",
      tags: ["Interview", "Preparation"],
    },
    {
      id: 4,
      title: "New Zealand Immigration: What Changed in 2025?",
      slug: "new-zealand-immigration-2025",
      excerpt: "A breakdown of the latest immigration updates in New Zealand and how it impacts applicants...",
      image: "/blog/newzealand-immigration.jpg",
      date: "2025-05-10",
      tags: ["New Zealand", "Policy"],
    },
    {
      id: 5,
      title: "How to Choose the Right Country for Study Abroad",
      slug: "choose-country-study-abroad",
      excerpt: "From tuition to PR pathways — here's how to evaluate study destinations based on your goals...",
      image: "/blog/study-abroad-choice.jpg",
      date: "2025-05-01",
      tags: ["Study Abroad", "Comparison"],
    },
    {
      id: 6,
      title: "Work Permit vs PR: What's the Difference?",
      slug: "work-permit-vs-pr",
      excerpt: "Confused between a work permit and permanent residency? Here's what you need to know...",
      image: "/blog/work-vs-pr.jpg",
      date: "2025-04-25",
      tags: ["Work Permit", "PR", "Basics"],
    },
    {
      id: 7,
      title: "Post-Arrival Checklist for New Immigrants",
      slug: "new-immigrants-checklist",
      excerpt: "Settling into a new country? Use this checklist to handle banking, healthcare, and housing with ease...",
      image: "/blog/arrival-checklist.jpg",
      date: "2025-04-18",
      tags: ["Checklist", "Settling In"],
    },
    {
      id: 8,
      title: "Visa Rejections: 7 Common Mistakes to Avoid",
      slug: "visa-rejection-mistakes",
      excerpt: "Avoid these pitfalls to improve your chances of visa approval for any destination...",
      image: "/blog/visa-rejection.jpg",
      date: "2025-04-10",
      tags: ["Rejections", "Tips", "Mistakes"],
    },
    {
      id: 9,
      title: "How Skyland Helped a Family Migrate to Canada",
      slug: "skyland-success-family-canada",
      excerpt: "A real-life success story: from consultation to landing in Toronto, here's how we made it happen...",
      image: "/blog/success-story-family.jpg",
      date: "2025-04-02",
      tags: ["Success Story", "Canada"],
    },
  ];

// Native date formatter
const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(dateString));
};

export default function BlogPage() {
  const featuredPost = dummyPosts[0];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-2">
        <Link href="/" className="hover:underline text-blue-600">Home</Link> / <span>Blog</span>
      </nav>

      {/* Page Title */}
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">Skyland Blog</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Immigration advice, success stories, and the latest visa updates from around the world.
        </p>
      </section>

      {/* Search Bar */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search blog posts..."
          className="w-full max-w-xl px-5 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Featured Post */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-blue-50 rounded-3xl overflow-hidden shadow-lg p-8 flex flex-col md:flex-row gap-6"
      >
        <Image
          src={featuredPost.image}
          alt={featuredPost.title}
          width={512}
          height={384}
          className="w-full md:w-1/2 h-64 object-cover rounded-2xl"
        />
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-3 text-sm text-blue-700 font-semibold">
            <span>🌟 Featured</span>
            <span>•</span>
            <span>{formatDate(featuredPost.date)}</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{featuredPost.title}</h2>
          <p className="text-gray-600">{featuredPost.excerpt}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {featuredPost.tags?.map((tag) => (
              <span key={tag} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
          >
            Read more →
          </Link>
        </div>
      </motion.section>

      {/* Recent Posts */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyPosts.slice(1).map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: post.id * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block bg-white border rounded-2xl overflow-hidden shadow hover:shadow-md transition"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={512}
                  height={384}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 space-y-2">
                  <div className="flex items-center text-xs text-gray-500 gap-2">
                    <span>📅</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                  <p className="text-sm text-gray-500">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {post.tags?.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
