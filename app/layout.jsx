// app/layout.jsx
import '../styles/globals.css';
import Header from '../components/common/Header'; // Contains your Navbar
import Footer from '../components/common/Footer';
import { ThemeProvider } from '../components/common/Theme-provider';

export const metadata = {
  title: 'PIFT - Pinnacle Institute of Fashion & Technology',
  description: 'Premium specialized educational paths across architecture, textile innovation, and knitwear design fields.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-pageBg text-textMain antialiased min-h-screen flex flex-col justify-between transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}