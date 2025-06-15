'use client';

import { useEffect } from 'react';

// Define a more specific structure for dataLayer events
interface DataLayerEvent {
  event: string;
  [key: string]: unknown; // Allows flexible key-value pairs without using `any`
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

const GTM_ID = 'GTM-T5WH5JQ';

const GTM = () => {
  useEffect(() => {
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer.push({
      event: 'gtm.js',
      'gtm.start': new Date().getTime(),
    });
  }, []);

  return null;
};

export default GTM;
