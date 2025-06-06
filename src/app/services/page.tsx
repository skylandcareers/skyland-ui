'use client';

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { motion as m } from 'framer-motion';
import { FaGlobe, FaGraduationCap, FaLanguage } from "react-icons/fa6"
import { MdSupportAgent, MdVerified, MdTimer, MdCheckCircle, MdArrowRight } from "react-icons/md"
import LeadForm from '@/components/LeadForm'

const features = [
  {
    icon: <MdVerified className="w-12 h-12 text-primary" />,
    title: "Licensed Experts",
    description: "Our team consists of licensed immigration consultants and certified language trainers"
  },
  {
    icon: <MdSupportAgent className="w-12 h-12 text-primary" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your queries and concerns"
  },
  {
    icon: <MdTimer className="w-12 h-12 text-primary" />,
    title: "Fast Processing",
    description: "Efficient handling of applications with quick turnaround times"
  }
]

const services = [
  {
    icon: <FaGlobe className="w-16 h-16 text-primary mb-4" />,
    title: "Immigration Services",
    description: "Expert guidance for visa applications and immigration processes across countries.",
    stats: {
      successRate: "98%",
      countries: "15+",
      processingTime: "2-4 weeks",
      support: "24/7"
    },
    categories: [
      { name: "Visit Visa", href: "/visit-visa", count: "15+ Countries" },
      { name: "Work Visa", href: "/work-visa", count: "10+ Programs" },
      { name: "Study Visa", href: "/study-visa", count: "100+ Universities" },
      { name: "PR Visa", href: "/pr-visa", count: "5+ Countries" },
    ]
  },
  {
    icon: <FaLanguage className="w-16 h-16 text-primary mb-4" />,
    title: "Language Coaching",
    description: "Professional language training programs to help you succeed globally.",
    stats: {
      successRate: "95%",
      languages: "5+",
      batchSize: "Small",
      support: "Personal"
    },
    categories: [
      { name: "IELTS Preparation", href: "/coaching/ielts", count: "Band 7+ Guaranteed" },
      { name: "PTE Training", href: "/coaching/pte", count: "Score 65+ Assured" },
      { name: "TOEFL Coaching", href: "/coaching/toefl", count: "100+ Score Target" },
      { name: "Business English", href: "/coaching/business-english", count: "Corporate Programs" },
    ]
  },
  {
    icon: <FaGraduationCap className="w-16 h-16 text-primary mb-4" />,
    title: "Educational Consulting",
    description: "Comprehensive guidance for international education and career development.",
    stats: {
      universities: "500+",
      courses: "1000+",
      successRate: "96%",
      support: "End-to-End"
    },
    categories: [
      { name: "Course Selection", href: "/coaching", count: "1000+ Courses" },
      { name: "University Admissions", href: "/coaching", count: "500+ Partners" },
      { name: "Career Counseling", href: "/careers", count: "Expert Guidance" },
      { name: "Document Preparation", href: "/documents-required", count: "End-to-End Support" },
    ]
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Student at University of Toronto",
    content: "Skylandjune made my dream of studying in Canada a reality. Their guidance throughout the visa process was invaluable.",
    image: "/testimonials/sarah.jpg"
  },
  {
    name: "Raj Patel",
    role: "Software Engineer in Germany",
    content: "The language coaching helped me ace my interviews. Now I'm working at my dream job in Berlin!",
    image: "/testimonials/raj.jpg"
  },
  {
    name: "Maria Garcia",
    role: "PR Holder, Australia",
    content: "From application to approval, Skylandjune's team was there every step of the way. Highly recommended!",
    image: "/testimonials/maria.jpg"
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
            <m.div 
              className="space-y-4 md:space-y-7 text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                Your Gateway to{' '}
                <span className="text-yellow-400">Global Success</span>{' '}
                Starts Here
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                Expert guidance for immigration, language training, and educational consulting. 
                98% success rate with personalized support throughout your journey.
              </p>
              <div className="space-y-4 bg-blue-500/30 p-5 rounded-xl">
                <div className="flex items-center gap-3">
                  <MdCheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50">Licensed immigration consultants</span>
                </div>
                <div className="flex items-center gap-3">
                  <MdCheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50">Certified language trainers</span>
                </div>
                <div className="flex items-center gap-3">
                  <MdCheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50">End-to-end application support</span>
                </div>
              </div>
              <div className="flex items-center gap-5 pt-3">
                <Button asChild className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Get Started
                    <MdArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="text-blue-500 border-blue-500 hover:bg-white/10">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </m.div>
            
            <m.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 p-4 md:p-6 rounded-xl backdrop-blur-sm"
            >
              <LeadForm />
            </m.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-8 md:py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: <MdTimer className="w-6 h-6" />, label: "Success Rate", value: "98%" },
              { icon: <FaGlobe className="w-6 h-6" />, label: "Countries", value: "15+" },
              { icon: <FaGraduationCap className="w-6 h-6" />, label: "Universities", value: "500+" },
              { icon: <FaLanguage className="w-6 h-6" />, label: "Languages", value: "5+" }
            ].map((stat, index) => (
              <m.div
                key={index}
                className="bg-white rounded-lg p-5 shadow hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-blue-600 mb-3">{stat.icon}</div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <m.div 
                key={index} 
                className="text-center p-6 rounded-xl bg-background shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4 text-blue-500">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions to help you achieve your global aspirations through expert guidance and support.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center text-blue-500">{service.icon}</div>
                  <h2 className="text-2xl font-semibold mb-3 text-center">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 text-center">{service.description}</p>
                  
                  {/* Service Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(service.stats).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <p className="text-sm text-gray-600">{key}</p>
                        <p className="font-semibold text-blue-600">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {service.categories.map((category, catIndex) => (
                      <div key={catIndex}>
                        <Button asChild variant="outline" className="w-full justify-between">
                          <Link href={category.href}>
                            <span>{category.name}</span>
                            <span className="text-sm text-muted-foreground">{category.count}</span>
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Success stories from people who trusted us with their global aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20" />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </Card>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 opacity-10 bg-[url('/images/cta-bg.svg')] bg-no-repeat bg-cover pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8">
            Let our experienced consultants help you choose the right path, whether it&apos;s study, work, or permanent residency abroad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8 py-6 text-lg bg-yellow-400 text-black">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-yellow-400 bg-white text-yellow-400"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </m.div>
      </div>
    </section>
    </div>
  )
}