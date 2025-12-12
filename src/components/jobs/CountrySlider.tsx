'use client';

import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const DESTINATIONS = [
    { name: 'Poland', region: 'Europe', image: '🇵🇱' },
    { name: 'Lithuania', region: 'Europe', image: '🇱🇹' },
    { name: 'Romania', region: 'Europe', image: '🇷🇴' },
    { name: 'Croatia', region: 'Europe', image: '🇭🇷' },
    { name: 'Hungary', region: 'Europe', image: '🇭🇺' },
    { name: 'UAE', region: 'Asia', image: '🇦🇪' },
    { name: 'Saudi Arabia', region: 'Asia', image: '🇸🇦' },
    { name: 'Qatar', region: 'Asia', image: '🇶🇦' },
    { name: 'Japan', region: 'Asia', image: '🇯🇵' },
    { name: 'Singapore', region: 'Asia', image: '🇸🇬' },
];

export default function CountrySlider({ onSelectCountry }: { onSelectCountry: (country: string) => void }) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef.current;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="relative group">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 px-4">Popular Destinations</h2>

            {/* Scroll Buttons */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity -ml-4"
            >
                <FaChevronLeft className="text-gray-700" />
            </button>
            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity -mr-4"
            >
                <FaChevronRight className="text-gray-700" />
            </button>

            {/* Slider */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide snap-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {DESTINATIONS.map((dest) => (
                    <button
                        key={dest.name}
                        onClick={() => onSelectCountry(dest.name)}
                        className="flex-shrink-0 w-60 h-40 relative rounded-xl overflow-hidden cursor-pointer group/card snap-start shadow-md hover:shadow-xl transition-all"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center text-6xl opacity-90 group-hover/card:scale-110 transition-transform duration-500">
                            {dest.image}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                            <div className="absolute bottom-4 left-4 text-left">
                                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">{dest.region}</span>
                                <h3 className="text-xl font-bold text-white mt-1 group-hover/card:text-blue-200 transition-colors">{dest.name}</h3>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
