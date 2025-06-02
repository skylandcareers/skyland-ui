'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  publishedDate: string;
  slug: string;
  readTime?: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Top 5 Countries for Work Visas in 2025',
    excerpt: 'Discover which countries are leading for work visa opportunities and how to apply successfully.',
    imageUrl: '/images/article-1.jpg',
    publishedDate: 'May 28, 2025',
    slug: 'top-5-countries-work-visas-2025',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Canada PR: Step-by-Step Guide',
    excerpt: 'A comprehensive breakdown of the Canadian PR process and how we help you every step of the way.',
    imageUrl: '/images/article-2.jpg',
    publishedDate: 'May 18, 2025',
    slug: 'canada-pr-guide-2025',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Visa Interview Tips You Need to Know',
    excerpt: 'Ace your visa interviews with these expert tips and real-world examples.',
    imageUrl: '/images/article-3.jpg',
    publishedDate: 'May 10, 2025',
    slug: 'visa-interview-tips-2025',
    readTime: '4 min read'
  },
];

const FeaturedArticles = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Latest <span className="text-yellow-500">Immigration Insights</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with expert advice and the latest trends in global immigration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{article.publishedDate}</span>
                  {article.readTime && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {article.readTime}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700 transition-colors"
                  aria-label={`Read more about ${article.title}`}
                >
                  Read more
                  <FaArrowRight className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12 lg:mt-16"
        >
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
          >
            Explore All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArticles;