import { Header } from '@/components/Header';
import { Topbar } from '@/components/Topbar';
import Footer from '@/components/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Topbar phone="+91-6300191853" email="saiteja.b@skylandcareers.com" hours="Mon-Fri 9:00-17:00" />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
