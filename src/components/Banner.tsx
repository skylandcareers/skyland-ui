'use client';

import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between gap-4 whitespace-nowrap">
        <motion.p 
          className="flex-1 text-lg font-semibold truncate text-center text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            rotate: [0, -2, 2, -2, 0],
          }}
          transition={{ 
            opacity: { duration: 0.5 },
            y: { duration: 0.5 },
            rotate: {
              repeat: Infinity,
              repeatDelay: 5,
              duration: 0.5,
            }
          }}
        >
          {title}
        </motion.p>

        {cta && (
          <motion.a
            href={cta.url}
            className="flex items-center gap-2 text-sm font-semibold bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-4 py-2 shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: ["0px 0px 0px rgba(0,0,0,0.2)", "0px 4px 16px rgba(0,0,0,0.2)"],
            }}
            transition={{
              boxShadow: {
                repeatType: "reverse",
                repeat: Infinity,
                duration: 1,
              }
            }}
          >
            {cta.text}
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.a>
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
