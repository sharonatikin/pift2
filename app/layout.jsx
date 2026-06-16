import '../styles/globals.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export const metadata = {
  title: 'PIFT - Pinnacle Institute of Fashion & Technology',
  description: 'Premium specialized educational paths across architecture, textile innovation, and knitwear design fields.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0A0A0A] text-white antialiased min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
