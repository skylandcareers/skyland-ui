import Image from 'next/image';

export default function JobsHero() {
    return (
        <div className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/skyland-immigrate.jpg"
                    alt="Jobs Background"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                    Find Your Dream Job Abroad
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
                    Explore opportunities in Europe, Asia, and beyond. Your international career starts here.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={() => document.getElementById('jobs-section')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        View Openings
                    </button>
                    <a href="/contact" className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full font-bold transition-all">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
}
