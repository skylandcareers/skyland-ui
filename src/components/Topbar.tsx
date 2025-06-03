'use client';

import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

interface TopbarProps {
  phone: string;
  email: string;
  hours: string;
}

export const Topbar: React.FC<TopbarProps> = ({ phone, email, hours }) => {
  return (
    <div className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2">
        {/* Mobile layout (stacked) */}
        <div className="md:hidden space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <a 
              href={`tel:${phone}`} 
              className="hover:underline text-sm truncate"
              aria-label="Call us"
            >
              {phone}
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <a 
              href={`mailto:${email}`} 
              className="hover:underline text-sm truncate"
              aria-label="Email us"
            >
              {email}
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm">{hours}</span>
          </div>
        </div>

        {/* Desktop/tablet layout (inline) */}
        <div className="hidden md:flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <a 
              href={`tel:${phone}`} 
              className="hover:underline text-sm md:text-base"
              aria-label="Call us"
            >
              {phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <a 
              href={`mailto:${email}`} 
              className="hover:underline text-sm md:text-base"
              aria-label="Email us"
            >
              {email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm md:text-base">{hours}</span>
          </div>
        </div>
      </div>
    </div>
  );
};