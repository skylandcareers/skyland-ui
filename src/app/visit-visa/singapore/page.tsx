'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Phone, 
  Mail,
  Clock,
  ChevronDown,
  ChevronUp,
  Calendar,
  DollarSign,
  Plane,
  Building2,
  MapPin,
  AlertCircle,
  FileText,
  Globe,
  Users,
  ArrowRight,
  ShoppingBag,
  Utensils,
  Bus,
  Smartphone,
  Languages,
  Shield
} from 'lucide-react';
import LeadForm from '@/components/LeadForm';

const SingaporeVisitVisaPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedVisaType, setSelectedVisaType] = useState('tourist');

  const visaTypes = [
    {
      id: 'tourist',
      title: "Tourist Visa",
      description: "For leisure travel, sightseeing, and visiting friends/family",
      duration: "Up to 30 days",
      fee: "SGD 30",
      processingTime: "3-5 working days",
      requirements: [
        "Valid passport with 6 months validity",
        "Completed Form 14A",
        "Recent passport-size photograph",
        "Proof of sufficient funds",
        "Return flight tickets",
        "Hotel reservations"
      ]
    },
    {
      id: 'business',
      title: "Business Visa",
      description: "For business meetings, conferences, and negotiations",
      duration: "Up to 90 days",
      fee: "SGD 30",
      processingTime: "3-5 working days",
      requirements: [
        "Valid passport with 6 months validity",
        "Completed Form 14A",
        "Business invitation letter",
        "Company registration documents",
        "Bank statements",
        "Travel insurance"
      ]
    },
    {
      id: 'medical',
      title: "Medical Visa",
      description: "For medical treatment and health procedures",
      duration: "Up to 60 days",
      fee: "SGD 30",
      processingTime: "3-5 working days",
      requirements: [
        "Valid passport with 6 months validity",
        "Completed Form 14A",
        "Medical appointment letter",
        "Hospital confirmation",
        "Cost estimation letter",
        "Financial proof"
      ]
    }
  ];

  const requirements = {
    general: [
      "Valid passport with at least 6 months validity",
      "Completed Singapore visa application Form 14A",
      "Recent passport-size photograph (35mm x 45mm)",
      "Proof of sufficient funds (bank statements)",
      "Return flight tickets",
      "Hotel reservations or local contact information",
      "Travel insurance (recommended)",
      "Employment proof and leave approval"
    ],
    financial: [
      "Bank statements for the last 3 months",
      "Minimum balance requirement of SGD 1,000",
      "Fixed deposits or investments (if any)",
      "Income tax returns",
      "Salary slips for the last 3 months"
    ],
    documents: [
      "Original passport",
      "Passport-size photographs",
      "Completed visa application form",
      "Travel itinerary",
      "Accommodation proof",
      "Employment letter",
      "Bank statements",
      "Income proof"
    ]
  };

  const processingSteps = [
    {
      title: "Document Collection",
      description: "Gather all required documents including passport, photos, and supporting materials",
      duration: "1-2 days",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Application Review",
      description: "Our experts review your application and documents for completeness",
      duration: "1 day",
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      title: "Submission",
      description: "Application is submitted to Singapore immigration authorities",
      duration: "1 day",
      icon: <ArrowRight className="w-6 h-6" />
    },
    {
      title: "Processing",
      description: "Application is processed by immigration authorities",
      duration: "3-5 days",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Visa Issuance",
      description: "Visa is issued and passport is returned",
      duration: "1 day",
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  const singaporeGuide = {
    culture: {
      title: "Cultural Etiquette",
      icon: <Languages className="w-6 h-6" />,
      points: [
        "Remove shoes before entering homes",
        "No eating/drinking on public transport",
        "Respect elderly people",
        "No littering (heavy fines)",
        "Queue for services",
        "Tipping is not expected"
      ]
    },
    safety: {
      title: "Safety Tips",
      icon: <Shield className="w-6 h-6" />,
      points: [
        "Singapore is one of the safest countries",
        "Follow local laws strictly",
        "Keep belongings secure in public",
        "Be aware of scams targeting tourists",
        "Emergency number: 999 (Police), 995 (Ambulance)",
        "Stay hydrated in humid weather"
      ]
    },
    technology: {
      title: "Tech & Connectivity",
      icon: <Smartphone className="w-6 h-6" />,
      points: [
        "Free public WiFi available (Wireless@SG)",
        "Get a local SIM card for convenience",
        "Download Grab app for transport",
        "Use Singapore Maps app",
        "Digital payments widely accepted",
        "Download SGSecure app for emergencies"
      ]
    }
  };

  const shoppingDining = {
    shopping: {
      title: "Shopping Districts",
      icon: <ShoppingBag className="w-6 h-6" />,
      places: [
        {
          name: "Orchard Road",
          description: "Premium shopping malls and brands",
          bestFor: "Luxury shopping, Fashion"
        },
        {
          name: "Bugis Street",
          description: "Budget shopping paradise",
          bestFor: "Souvenirs, Local fashion"
        },
        {
          name: "Marina Bay",
          description: "High-end retail and entertainment",
          bestFor: "Designer brands, Electronics"
        },
        {
          name: "Mustafa Centre",
          description: "24-hour shopping complex",
          bestFor: "Electronics, Groceries, Everything"
        }
      ]
    },
    dining: {
      title: "Must-Try Food",
      icon: <Utensils className="w-6 h-6" />,
      dishes: [
        {
          name: "Chili Crab",
          where: "East Coast Seafood Centre",
          price: "SGD 40-60"
        },
        {
          name: "Hainanese Chicken Rice",
          where: "Maxwell Food Centre",
          price: "SGD 4-6"
        },
        {
          name: "Laksa",
          where: "Katong Area",
          price: "SGD 5-8"
        },
        {
          name: "Satay",
          where: "Lau Pa Sat",
          price: "SGD 0.60-1 per stick"
        }
      ]
    }
  };

  const transportGuide = {
    title: "Transportation Guide",
    icon: <Bus className="w-6 h-6" />,
    options: [
      {
        mode: "MRT (Metro)",
        tips: [
          "Get an EZ-Link card",
          "Operating hours: 5:30 AM - 12:00 AM",
          "Download MRT map app",
          "Avoid peak hours if possible"
        ]
      },
      {
        mode: "Bus",
        tips: [
          "Use bus app for timings",
          "Flag down at designated stops",
          "Tap card when boarding and alighting",
          "Night buses available (NightRider)"
        ]
      },
      {
        mode: "Taxi/Grab",
        tips: [
          "Use Grab app for convenience",
          "Metered taxis readily available",
          "Surcharge applies for certain areas",
          "Book in advance during peak hours"
        ]
      }
    ]
  };

  const faqs = [
    {
      question: "How long does it take to process a Singapore visa?",
      answer: "Standard processing time is 3-5 working days. However, it's recommended to apply at least 2 weeks before your planned travel date."
    },
    {
      question: "What is the visa fee?",
      answer: "The Singapore visa fee is SGD 30 for all categories. Additional service charges may apply if applying through authorized agents."
    },
    {
      question: "How long can I stay in Singapore with a tourist visa?",
      answer: "A tourist visa typically allows stays of up to 30 days. The exact duration will be specified on your visa."
    },
    {
      question: "Can I extend my stay in Singapore?",
      answer: "Yes, you can apply for an extension at the Immigration & Checkpoints Authority (ICA) before your visa expires. Extension approval is at the discretion of immigration authorities."
    },
    {
      question: "Do I need travel insurance?",
      answer: "While travel insurance is not mandatory, it's highly recommended to cover medical emergencies and trip cancellations."
    },
    {
      question: "What documents are required for a Singapore visa?",
      answer: "Required documents include valid passport, completed Form 14A, recent photos, proof of funds, travel itinerary, and accommodation details."
    },
    {
      question: "Can I apply for a Singapore visa online?",
      answer: "Yes, Singapore offers e-visa services through authorized agents and the official SAVE portal."
    },
    {
      question: "How many entries does a Singapore visa allow?",
      answer: "Visas can be single-entry or multiple-entry, depending on the type and purpose of visit."
    },
    {
      question: "Is there a minimum bank balance requirement?",
      answer: "While there's no official minimum, it's recommended to show sufficient funds (typically SGD 1,000 per week of stay)."
    },
    {
      question: "Can I work on a tourist visa in Singapore?",
      answer: "No, working on a tourist visa is strictly prohibited and can result in serious penalties."
    },
    {
      question: "What's the best time to visit Singapore?",
      answer: "February to April offers the best weather, while July to September features many cultural festivals."
    },
    {
      question: "How much money should I budget per day?",
      answer: "Budget travelers should plan for SGD 100-150 per day, while mid-range travelers might need SGD 200-300."
    },
    {
      question: "Is Singapore expensive to visit?",
      answer: "Singapore can be expensive, but budget options exist for accommodation, food, and transportation."
    },
    {
      question: "What power adapters do I need?",
      answer: "Singapore uses Type G sockets (230V, 50Hz). British-style three-pin plugs are standard."
    },
    {
      question: "Is tap water safe to drink?",
      answer: "Yes, Singapore's tap water meets WHO standards and is safe for drinking."
    },
    {
      question: "How do I get from Changi Airport to the city?",
      answer: "Options include MRT (fastest), airport shuttle, taxi, or private transfer."
    },
    {
      question: "What's the best way to get around Singapore?",
      answer: "The MRT (subway) system is efficient and covers most tourist areas. Buses and taxis are also readily available."
    },
    {
      question: "How do I pay for public transport?",
      answer: "Get an EZ-Link card or Singapore Tourist Pass for convenient travel on MRT and buses."
    },
    {
      question: "Are taxis expensive in Singapore?",
      answer: "Taxis are moderately priced, with surcharges during peak hours and for certain locations."
    },
    {
      question: "Is Grab available in Singapore?",
      answer: "Yes, Grab is widely used and often more convenient than traditional taxis."
    },
    {
      question: "Which areas are best for tourists to stay?",
      answer: "Popular areas include Orchard Road, Marina Bay, Clarke Quay, and Bugis."
    },
    {
      question: "What's the average hotel cost in Singapore?",
      answer: "Budget hotels start from SGD 80, mid-range from SGD 150, and luxury hotels from SGD 300 per night."
    },
    {
      question: "Are hostels safe in Singapore?",
      answer: "Yes, Singapore hostels are generally very safe and well-maintained."
    },
    {
      question: "Can I find last-minute accommodation?",
      answer: "Yes, but booking in advance is recommended, especially during peak seasons."
    },
    {
      question: "Are Airbnb rentals legal in Singapore?",
      answer: "Short-term rentals under 3 months are generally not allowed in public housing."
    },
    {
      question: "What are must-try Singaporean dishes?",
      answer: "Try Chili Crab, Hainanese Chicken Rice, Laksa, and Satay."
    },
    {
      question: "Are hawker centers safe to eat at?",
      answer: "Yes, hawker centers are clean, regulated, and offer authentic local food."
    },
    {
      question: "What's the average cost of a meal?",
      answer: "Hawker centers: SGD 4-8, Mid-range restaurants: SGD 15-30, High-end: SGD 50+"
    },
    {
      question: "Are vegetarian options available?",
      answer: "Yes, many restaurants and hawker centers offer vegetarian options."
    },
    {
      question: "Is it customary to tip in Singapore?",
      answer: "Tipping is not expected as service charge is usually included."
    },
    {
      question: "Where are the best shopping areas?",
      answer: "Orchard Road, Marina Bay, Bugis Street, and Mustafa Centre are popular shopping destinations."
    },
    {
      question: "What are shopping hours in Singapore?",
      answer: "Most malls open 10am-10pm daily. Some places like Mustafa Centre are open 24/7."
    },
    {
      question: "Can I claim tax refunds on shopping?",
      answer: "Yes, tourists can claim GST refund for purchases above SGD 100 at participating stores."
    },
    {
      question: "What are popular Singapore souvenirs?",
      answer: "Popular items include Kaya jam, local snacks, orchid perfumes, and Tiger Balm."
    },
    {
      question: "Are prices negotiable in Singapore?",
      answer: "Prices are fixed in malls but negotiable in markets like Bugis Street."
    },
    {
      question: "What's the weather like in Singapore?",
      answer: "Tropical climate with temperatures between 23-31°C year-round and high humidity."
    },
    {
      question: "When is the monsoon season?",
      answer: "Northeast monsoon (November-January) brings more rainfall."
    },
    {
      question: "What clothes should I pack?",
      answer: "Light, breathable clothing. Bring an umbrella and light jacket for air-conditioned places."
    },
    {
      question: "Is Singapore always hot?",
      answer: "Yes, Singapore maintains warm temperatures year-round due to its location near the equator."
    },
    {
      question: "How do people deal with the humidity?",
      answer: "Stay hydrated, use air-conditioned spaces, and plan outdoor activities for early morning or evening."
    },
    {
      question: "What are important cultural customs?",
      answer: "Remove shoes before entering homes, no eating on public transport, respect elders."
    },
    {
      question: "What should I avoid doing in Singapore?",
      answer: "Don't litter, chew gum, smoke in public places, or jaywalk."
    },
    {
      question: "What's the dress code for attractions?",
      answer: "Smart casual is acceptable. Some religious sites require modest dress."
    },
    {
      question: "Is Singapore LGBT-friendly?",
      answer: "Singapore is generally conservative but safe for LGBT travelers."
    },
    {
      question: "What languages are spoken?",
      answer: "English is widely spoken, along with Mandarin, Malay, and Tamil."
    },
    {
      question: "Is Singapore safe for tourists?",
      answer: "Singapore is one of the safest countries in the world with low crime rates."
    },
    {
      question: "What emergency numbers should I know?",
      answer: "Police: 999, Ambulance/Fire: 995, Non-emergency ambulance: 1777"
    },
    {
      question: "Are hospitals good in Singapore?",
      answer: "Singapore has world-class healthcare facilities but they can be expensive."
    },
    {
      question: "What vaccinations do I need?",
      answer: "Standard vaccinations are recommended. Check with your doctor before travel."
    },
    {
      question: "What are common scams to avoid?",
      answer: "Be wary of unauthorized money changers and too-good-to-be-true shopping deals."
    },
    {
      question: "Can I bring medications to Singapore?",
      answer: "Yes, but some require prior approval. Bring prescriptions and keep medicines in original packaging."
    },
    {
      question: "What items are prohibited?",
      answer: "Chewing gum, tobacco products, weapons, and certain medications are prohibited."
    },
    {
      question: "Can I drink alcohol in public?",
      answer: "Public drinking is prohibited from 10:30 PM to 7 AM."
    },
    {
      question: "What's the legal drinking age?",
      answer: "The legal drinking age is 18 years old."
    },
    {
      question: "Are there dress codes for nightclubs?",
      answer: "Most clubs enforce smart casual dress codes. No slippers or singlets."
    }
  ];

  const travelTips = [
    {
      title: "Best Time to Visit",
      icon: <Calendar className="w-6 h-6" />,
      tips: [
        "February to April (driest season)",
        "July to September (festival season)",
        "November to January (year-end events)"
      ]
    },
    {
      title: "Transportation",
      icon: <Plane className="w-6 h-6" />,
      tips: [
        "MRT is the most convenient way to travel",
        "EZ-Link card for public transport",
        "Grab or taxi for direct routes",
        "Walking is safe and convenient"
      ]
    },
    {
      title: "Accommodation",
      icon: <Building2 className="w-6 h-6" />,
      tips: [
        "Book in advance during peak seasons",
        "Stay near MRT stations",
        "Popular areas: Orchard, Marina Bay, Bugis",
        "Consider serviced apartments for longer stays"
      ]
    }
  ];

  const mustVisitPlaces = [
    {
      name: "Marina Bay Sands",
      description: "Iconic hotel with infinity pool and observation deck",
      type: "Landmark",
      bestTime: "Evening for light show"
    },
    {
      name: "Gardens by the Bay",
      description: "Futuristic nature park with Supertree Grove",
      type: "Nature",
      bestTime: "Late afternoon and evening"
    },
    {
      name: "Sentosa Island",
      description: "Resort island with beaches and attractions",
      type: "Entertainment",
      bestTime: "Weekdays to avoid crowds"
    },
    {
      name: "Orchard Road",
      description: "Premier shopping district",
      type: "Shopping",
      bestTime: "Any time"
    }
  ];

  const importantInfo = {
    currency: {
      name: "Singapore Dollar (SGD)",
      exchangeRate: "Approximately 1 USD = 1.35 SGD",
      tips: [
        "Exchange at licensed money changers",
        "Credit cards widely accepted",
        "Keep small denominations for local markets"
      ]
    },
    weather: {
      climate: "Tropical",
      temperature: "23-31°C year-round",
      tips: [
        "Carry umbrella for sudden showers",
        "Light, breathable clothing recommended",
        "Indoor venues are well air-conditioned"
      ]
    },
    customs: {
      restricted: [
        "Chewing gum",
        "Tobacco products",
        "Drugs and weapons",
        "Certain medications"
      ],
      tips: [
        "Declare items above SGD 10,000",
        "Check restricted medication list",
        "Keep prescriptions handy"
      ]
    }
  };

  const contactInfo = {
    phone: "+91-9032420000",
    email: "info@skylandimmigration.com",
    hours: "Mon-Fri: 9:00 AM - 5:30 PM GMT"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl font-bold">
                Singapore Visit Visa Services
              </h1>
              <p className="text-xl text-blue-100">
                Your gateway to Singapore with expert visa assistance and 98% success rate.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                  <span>Fast & reliable processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                  <span>End-to-end application support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                  <span>Expert guidance & documentation</span>
                </li>
              </ul>
              <div className="flex gap-4 mt-8">
                <button 
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  onClick={() => {
                    const element = document.getElementById('visa-types');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Visa Types
                </button>
                <button 
                  className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                  onClick={() => {
                    const element = document.getElementById('contact-form');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm" id="contact-form">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Calendar className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900">Processing Time</h3>
              <p className="text-gray-600">3-5 working days</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900">Visa Fee</h3>
              <p className="text-gray-600">SGD 30</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Globe className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900">Validity</h3>
              <p className="text-gray-600">Up to 90 days</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900">Success Rate</h3>
              <p className="text-gray-600">98%</p>
            </div>
          </div>
        </section>

        {/* Visa Types */}
        <section id="visa-types" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Visa Types</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visaTypes.map((type) => (
              <div 
                key={type.id}
                className={`bg-white rounded-xl p-6 shadow-lg cursor-pointer transition-all ${
                  selectedVisaType === type.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedVisaType(type.id)}
              >
                <h3 className="text-xl font-bold text-blue-600 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="space-y-3 text-sm">
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>Duration: {type.duration}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                    <span>Fee: {type.fee}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>Processing: {type.processingTime}</span>
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-2">
                    {type.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Visa Requirements</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4">General Requirements</h3>
              <ul className="space-y-3">
                {requirements.general.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Financial Requirements</h3>
              <ul className="space-y-3">
                {requirements.financial.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Required Documents</h3>
              <ul className="space-y-3">
                {requirements.documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FileText className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-600">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Travel Tips</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travelTips.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-blue-600 mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-gray-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Must Visit Places */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Must-Visit Places</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mustVisitPlaces.map((place, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{place.name}</h3>
                    <p className="text-gray-600 mt-1">{place.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {place.type}
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {place.bestTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Important Information</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Currency</h3>
              <p className="text-gray-900 font-medium mb-2">{importantInfo.currency.name}</p>
              <p className="text-gray-600 mb-4">{importantInfo.currency.exchangeRate}</p>
              <ul className="space-y-2">
                {importantInfo.currency.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Weather</h3>
              <p className="text-gray-900 font-medium mb-2">{importantInfo.weather.climate}</p>
              <p className="text-gray-600 mb-4">{importantInfo.weather.temperature}</p>
              <ul className="space-y-2">
                {importantInfo.weather.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Customs & Restrictions</h3>
              <h4 className="text-gray-900 font-medium mb-2">Restricted Items:</h4>
              <ul className="space-y-2 mb-4">
                {importantInfo.customs.restricted.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <h4 className="text-gray-900 font-medium mb-2">Important Tips:</h4>
              <ul className="space-y-2">
                {importantInfo.customs.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* New Processing Steps Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Visa Processing Steps</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-200 transform -translate-y-1/2"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
              {processingSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                    <p className="text-blue-600 font-medium text-sm">{step.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Singapore Guide Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Singapore Travel Guide</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(singaporeGuide).map((guide, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-blue-600 mb-4">
                  {guide.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{guide.title}</h3>
                <ul className="space-y-3">
                  {guide.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Shopping & Dining Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Shopping & Dining Guide</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                {shoppingDining.shopping.icon}
                <h3 className="text-xl font-bold text-gray-900">{shoppingDining.shopping.title}</h3>
              </div>
              <div className="space-y-4">
                {shoppingDining.shopping.places.map((place, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <h4 className="font-semibold text-gray-900">{place.name}</h4>
                    <p className="text-gray-600 text-sm">{place.description}</p>
                    <p className="text-blue-600 text-sm mt-1">Best for: {place.bestFor}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                {shoppingDining.dining.icon}
                <h3 className="text-xl font-bold text-gray-900">{shoppingDining.dining.title}</h3>
              </div>
              <div className="space-y-4">
                {shoppingDining.dining.dishes.map((dish, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <h4 className="font-semibold text-gray-900">{dish.name}</h4>
                    <p className="text-gray-600 text-sm">Where: {dish.where}</p>
                    <p className="text-blue-600 text-sm">Price: {dish.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Transportation Guide Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Transportation Guide</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transportGuide.options.map((option, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{option.mode}</h3>
                <ul className="space-y-3">
                  {option.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-gray-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Us</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingaporeVisitVisaPage;
