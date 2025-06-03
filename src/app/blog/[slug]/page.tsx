import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

// Define posts data
const posts = [
  {
    slug: "canada-visa-tips",
    title: "Top 5 Tips for a Successful Canada Visa Application",
    excerpt: "Ensure your Canada visa process goes smoothly with these expert-backed tips...",
    content: `
      <h2>Start Your Application Early</h2>
      <p>Visa processing times can vary significantly depending on the season and application volume. Starting your application at least 3-6 months before your intended travel date gives you ample time to gather documents and address any issues.</p>
      
      <h2>Double-Check Every Detail</h2>
      <p>Incorrect or inconsistent information is one of the most common reasons for visa rejections. Pay special attention to:</p>
      <ul>
        <li>Name spellings (must match your passport exactly)</li>
        <li>Dates of travel and birth</li>
        <li>Employment and education history</li>
      </ul>

      <h2>Financial Documentation is Key</h2>
      <p>Canadian immigration officers want to see that you have sufficient funds for your stay. Include:</p>
      <ul>
        <li>Bank statements for the last 6 months</li>
        <li>Proof of income (pay stubs, tax returns)</li>
        <li>Sponsorship letters if applicable</li>
      </ul>

      <h2>Craft a Compelling Letter of Purpose</h2>
      <p>This letter should clearly explain:</p>
      <ul>
        <li>Your purpose for visiting Canada</li>
        <li>Ties to your home country (job, family, property)</li>
        <li>Planned itinerary and accommodations</li>
      </ul>

      <h2>Consider Professional Guidance</h2>
      <p>Immigration consultants like Skyland Immigration can help you:</p>
      <ul>
        <li>Identify the right visa category</li>
        <li>Prepare a complete application package</li>
        <li>Avoid common pitfalls</li>
      </ul>
      <p>For personalized assistance with your Canadian visa application, <a href="/contact" className="text-blue-600 hover:underline">contact our experts</a> today.</p>
    `,
    image: "/blog/canada-visa.jpg",
    date: "2025-06-01",
    readTime: "5 min read",
    tags: ["Canada", "Tips", "Visa"],
    author: {
      name: "Rajiv Sharma",
      role: "Senior Immigration Consultant",
      avatar: "/team/rajiv.jpg",
    },
  },
];

// Utility functions
function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

function calculateReadTime(content: string) {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Define the props type explicitly
type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: PageProps) {
  // Await the params
  const { slug } = await params;

  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const relatedPosts = posts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back button and social/share */}
      <div className="flex justify-between items-center mb-8">
        <Link
          href="/blog"
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Back to Blog
        </Link>
        <div className="flex gap-4">
          <button
            className="text-gray-500 hover:text-blue-600 transition-colors"
            aria-label="Share this post"
          >
            <FaShareAlt />
          </button>
          <button
            className="text-gray-500 hover:text-blue-600 transition-colors"
            aria-label="Save this post"
          >
            <FaRegBookmark />
          </button>
        </div>
      </div>

      {/* Article header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span>{formatDate(post.date)}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <IoTimeOutline />
            {post.readTime || `${calculateReadTime(post.content)} min read`}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
          {post.title}
        </h1>
        {post.author && (
          <div className="flex items-center gap-3 mt-6">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-medium text-gray-900">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.author.role}</p>
            </div>
          </div>
        )}
      </header>

      {/* Cover image */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-10">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={630}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Article content */}
      <article className="prose prose-lg sm:prose-xl prose-blue max-w-none mb-16">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-12">
        {post.tags.map((tag) => (
          <Link
            key={tag}
            href={`/blog/tag/${tag.toLowerCase()}`}
            className="text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-full transition-colors"
          >
            #{tag}
          </Link>
        ))}
      </div>

      {/* Author bio */}
      {post.author && (
        <div className="bg-gray-50 rounded-xl p-6 mb-16">
          <div className="flex flex-col sm:flex-row gap-6">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={100}
              height={100}
              className="rounded-full w-20 h-20 sm:w-24 sm:h-24 object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                About {post.author.name}
              </h3>
              <p className="text-gray-600 mb-3">{post.author.role}</p>
              <p className="text-gray-700">
                With over 10 years of experience in Canadian immigration,{" "}
                {post.author.name.split(" ")[0]} has helped hundreds of clients
                successfully navigate the visa application process.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Continue Reading
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="px-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span>{formatDate(post.date)}</span>
                      <span>•</span>
                      <span>
                        {post.readTime ||
                          `${calculateReadTime(post.content)} min read`}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Stay Updated</h2>
          <p className="text-blue-100 mb-6">
            Subscribe to our newsletter for the latest immigration news and tips
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}