import Image from "next/image";
import { Calendar, Clock, MapPin, User } from "lucide-react";

export default function StudyVisaRussiaWebinar() {
  const event = {
    title: "Study Visa for Russia: Study & Earn Full-Time",
    date: "Saturday, June 8, 2025",
    time: "5:00 PM IST",
    location: "Live Zoom Webinar",
    bannerImage: "/images/events/study-russia-banner.jpg",
    registrationLink: "#registration-form",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      {/* HERO */}
      <div className="rounded-xl overflow-hidden shadow-md mb-8">
        <Image
          src={event.bannerImage}
          alt={event.title}
          width={1000}
          height={1000}
          className="w-full h-72 object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold text-blue-900 mb-4">{event.title}</h1>

      {/* INFO STRIP */}
      <div className="flex flex-wrap items-center gap-6 text-blue-700 mb-8">
        <div className="flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-blue-400" />
          {event.date}
        </div>
        <div className="flex items-center">
          <Clock className="w-5 h-5 mr-2 text-blue-400" />
          {event.time}
        </div>
        <div className="flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-blue-400" />
          {event.location}
        </div>
      </div>

      {/* REGISTRATION FORM */}
      <div id="registration-form" className="bg-blue-50 p-6 rounded-xl shadow-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">🎓 Reserve Your Spot Now</h2>
        <form className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="p-3 rounded-lg border" required />
          <input type="email" placeholder="Email Address" className="p-3 rounded-lg border" required />
          <input type="tel" placeholder="Mobile Number" className="p-3 rounded-lg border" required />
          <select className="p-3 rounded-lg border" required>
            <option value="">Select Your City</option>
            <option>Mumbai</option>
            <option>Hyderabad</option>
            <option>Delhi</option>
            <option>Other</option>
          </select>
          <textarea
            placeholder="Any questions or expectations?"
            className="md:col-span-2 p-3 rounded-lg border"
            rows={3}
          />
          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            ✅ Register for Free Webinar
          </button>
        </form>
      </div>

      {/* WHAT YOU’LL LEARN */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">📘 What You’ll Learn</h2>
        <ul className="space-y-2 list-disc pl-5">
          <li>Complete process to apply for a Russian student visa</li>
          <li>Top universities and in-demand courses</li>
          <li>How to legally work full-time as a student</li>
          <li>Cost of living, scholarships, and part-time jobs</li>
          <li>Post-study work and PR pathways</li>
        </ul>
      </div>

      {/* AGENDA TIMELINE */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">🗓 Webinar Agenda</h2>
        <ol className="border-l-4 border-blue-500 pl-6 space-y-4">
          <li>
            <p className="font-semibold">5:00 PM – Welcome & Speaker Intro</p>
          </li>
          <li>
            <p className="font-semibold">5:15 PM – Study Visa Process Explained</p>
          </li>
          <li>
            <p className="font-semibold">5:40 PM – Jobs You Can Do Full-Time</p>
          </li>
          <li>
            <p className="font-semibold">6:00 PM – Live Q&A + Free Consultation Invite</p>
          </li>
        </ol>
      </div>

      {/* SPEAKER */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">🎤 Meet Your Speaker</h2>
        <div className="flex items-center space-x-4">
          <User className="w-10 h-10 text-blue-500" />
          <div>
            <p className="font-semibold">Anjali Rao</p>
            <p className="text-sm text-gray-600">Senior Education Consultant, Skyland Immigration</p>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-gray-100 p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold">Can I work full-time as a student in Russia?</summary>
            <p className="mt-2 text-gray-700">Yes, Russia allows international students to work legally without restrictions during academic sessions.</p>
          </details>
          <details className="bg-gray-100 p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold">Do I need to know Russian language?</summary>
            <p className="mt-2 text-gray-700">While not mandatory, basic Russian is helpful. Many universities offer English-taught programs.</p>
          </details>
          <details className="bg-gray-100 p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold">What’s the average cost of studying?</summary>
            <p className="mt-2 text-gray-700">Annual tuition ranges from ₹1.5L–₹4L depending on the course and university.</p>
          </details>
        </div>
      </div>

      {/* CTA BANNER */}
      <div className="bg-blue-100 border-l-4 border-blue-500 p-6 rounded-xl text-blue-900 text-center">
        <h3 className="text-xl font-bold mb-2">Spots are Limited. Secure Yours Now! 🎯</h3>
        <a
          href="#registration-form"
          className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold"
        >
          ✅ Register Now - It&apos;s Free!
        </a>
      </div>
    </div>
  );
}
