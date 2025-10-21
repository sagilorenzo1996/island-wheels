import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata = {
  title: 'Island Wheels - Premium Car Imports Sri Lanka',
  description: 'Your direct source for premium imported vehicles from Japan and the UK.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-iw-primary text-iw-text-primary`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}