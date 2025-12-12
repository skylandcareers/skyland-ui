"use client";
import { m as motion } from 'framer-motion';
import Image from 'next/image';

export default function ReferralPage() {
  const countries = [
    { name: 'Canada', path: '/canada.png' },
    { name: 'Australia', path: '/australia.png' },
    { name: 'UK', path: '/uk.png' },
    { name: 'USA', path: '/usa.png' },
  ];

  const vouchers = [
    { code: 'SKYFRIEND10', value: '10% Off', desc: 'On any visa consultation' },
    { code: 'SKYREF20', value: '₹2000 Off', desc: 'When your referral applies' },
  ];

  return (
    <div className="min-h-screen bg-white px-4 md:px-6 py-12 max-w-5xl mx-auto text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <div className="inline-block px-4 py-1 mb-3 rounded-full bg-blue-100 text-blue-700 font-semibold tracking-wide text-sm">
          🎉 Limited Time Reward Program
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 leading-tight">
          Refer a Friend. Change a Life. Get Rewarded.
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          🌍 Help a friend kickstart their immigration dream — and earn real rewards with every successful referral.
        </p>
      </motion.div>

      {/* Static Content (Replaces Form) */}
      <motion.div
        className="bg-white border border-gray-200 p-6 md:p-8 rounded-xl shadow-xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <p className="text-lg text-gray-700 mb-4">
          Our referral program is currently being updated. Please check back soon!
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
        >
          Contact Us for Details
        </a>
      </motion.div>

      {/* Immigration Destinations */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-center mb-8">🌐 Top Immigration Destinations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
          {countries.map((c, i) => (
            <motion.div
              key={c.name}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <Image
                src={c.path}
                alt={`${c.name} flag`}
                width={80}
                height={80}
                className="object-contain mb-3 rounded-full shadow"
              />
              <div className="font-semibold text-sm text-gray-700">{c.name}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Voucher Rewards */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-center mb-8">🎫 Your Voucher Rewards</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {vouchers.map((v, i) => (
            <motion.div
              key={v.code}
              className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow hover:shadow-md transition"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 * i }}
            >
              <div className="text-lg font-bold text-blue-800 mb-1">{v.code}</div>
              <div className="text-2xl font-semibold text-blue-700">{v.value}</div>
              <p className="text-sm text-gray-600 mt-1">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
