'use client';

import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface BannerProps {
  title: string;
  cta?: {
    text: string;
    url: string;
  };
  dismissible?: boolean;
  durationMs?: number; // fade out duration
}

const Banner: React.FC<BannerProps> = ({
  title,
  cta,
  dismissible = true,
  durationMs = 300,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(true);

  // Fade in on mount
  useEffect(() => {
    const timeout = setTimeout(() => setIsFading(false), durationMs);
    return () => clearTimeout(timeout);
  }, [durationMs]);

  const handleDismiss = () => {
    setIsFading(true);
    setTimeout(() => setIsVisible(false), durationMs);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Site notification banner"
      className={`bg-yellow-50 border-b border-yellow-300 text-yellow-900 transition-opacity duration-${durationMs} ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4 whitespace-nowrap">
        <p className="flex-1 text-sm font-semibold truncate">{title}</p>

        {cta && (
          <a
            href={cta.url}
            className="flex items-center text-sm font-semibold bg-yellow-200 hover:bg-yellow-300 text-yellow-900 rounded-md px-3 py-1 transition-transform duration-200 hover:scale-105 whitespace-nowrap"
          >
            {cta.text}
            <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        )}

        {dismissible && (
          <button
            onClick={handleDismiss}
            aria-label="Dismiss notification"
            className="p-1 rounded-full hover:bg-yellow-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
