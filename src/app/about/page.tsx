'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaUsers, FaGlobeAmericas, FaAward, FaHandshake } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';

const AboutUs = () => {
  const stats = [
    { value: '15+', label: 'Years Experience', icon: <FaAward className="text-3xl text-blue-600" /> },
    { value: '10,000+', label: 'Clients Served', icon: <FaUsers className="text-3xl text-blue-600" /> },
    { value: '95%', label: 'Success Rate', icon: <FaHandshake className="text-3xl text-blue-600" /> },
    { value: '25+', label: 'Countries Covered', icon: <FaGlobeAmericas className="text-3xl text-blue-600" /> },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image 
            src="/images/world-map-bg.png" 
            alt="World map background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              Your Trusted Immigration Partner
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Empowering dreams through expert guidance and personalized immigration solutions since 2008
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Our <span className="text-blue-600">Journey</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2008 by SaiTeja Bitragunta, Skyland Immigration began as a small consultancy with a big vision - to make global immigration accessible and stress-free for everyone.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                What started as a one-person operation in Hyderabad has grown into a team of 50+ immigration experts serving clients across 25 countries. Our growth has been fueled by our unwavering commitment to client success and our deep expertise in complex immigration processes.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Today, we&apos;re proud to be one of India&apos;s most trusted immigration consultancies, recognized for our transparency, ethical practices, and exceptional success rates.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/office-team.jpg"
                alt="Our team at Skyland Immigration"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-300 text-gray-900 p-4 rounded-lg shadow-lg">
                <GiWorld className="text-4xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Mission / Core Values */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Our <span className="text-blue-600">Core Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide every decision we make and every client we serve
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FaHandshake className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain complete transparency in our processes and provide honest assessments of your immigration prospects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FaUsers className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Client-Centric Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Your success is our success. We tailor our services to your unique needs and circumstances.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FaAward className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We stay at the forefront of immigration law changes to provide the most accurate and effective guidance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-100 py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
              Ready to Begin Your Immigration Journey?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
              Our team is standing by to help you navigate the path to your new life abroad
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
                Book Free Consultation
              </button>
              <button className="border-2 border-yellow-400 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-200 transition">
                Contact Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
