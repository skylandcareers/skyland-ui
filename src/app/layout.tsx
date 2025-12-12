import type { Metadata } from 'next';
import './globals.css';
import GTM from '@/components/GTM';


export const metadata: Metadata = {
  title: 'Skyland Immigration and Careers',
  description: 'Your trusted partner for global mobility solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <GTM /> 
      <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5WH5JQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
