import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Topbar } from '@/components/Topbar';
import  Banner from '@/components/Banner';
import Footer from '@/components/Footer';


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
        <Topbar phone="+91-9032420020" email="info@skylandimmigration.com" hours="Mon-Fri 9:00-17:00" />
        <Banner 
          title="Welcome to Skyland Immigration" 
          cta={{ text: "Get Started", url: "/contact" }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
