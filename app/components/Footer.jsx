import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  // --- UPDATED SOCIAL LINKS ---
  const socialLinks = [
    { href: 'https://www.facebook.com/share/18d4yc7C3p/?mibextid=wwXIfr', icon: FaFacebook },
    { href: 'https://www.instagram.com/islandwheels.lk', icon: FaInstagram },
    { href: 'https://www.tiktok.com/@islandwheelslk', icon: FaTiktok },
    { href: 'https://wa.me/94711008070', icon: FaWhatsapp },
  ];

  return (
    <footer className="bg-iw-primary text-iw-text-secondary border-t border-iw-accent-orange/20">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Island Wheels Logo"
                width={150}
                height={33}
                className="object-contain mb-4"
              />
            </Link>
            <p className="text-sm">Your direct source for premium imported vehicles from Japan & the UK. Based in Sri Lanka.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-iw-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cars" className="hover:text-iw-accent-orange">Cars for Sale</Link></li>
              <li><Link href="/spare-parts" className="hover:text-iw-accent-orange">Spare Parts</Link></li>
              <li><Link href="/accessories" className="hover:text-iw-accent-orange">Accessories</Link></li>
              <li><Link href="/service" className="hover:text-iw-accent-orange">How to Import</Link></li>
              <li><Link href="/about" className="hover:text-iw-accent-orange">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-iw-accent-orange">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-iw-accent-orange">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-iw-text-primary mb-4">Contact Us</h4>
            {/* --- UPDATED CONTACTS --- */}
            <ul className="space-y-2 text-sm">
              <li>Phone: <a href="tel:+94711008070" className="hover:text-iw-accent-orange">+94 71 100 8070</a></li>
              <li>WhatsApp: <a href="https://wa.me/94711008070" target="_blank" className="hover:text-iw-accent-orange">+94 71 100 8070</a></li>
              <li>Email: <a href="mailto:info.islandwheels@gmail.com" className="hover:text-iw-accent-orange">info.islandwheels@gmail.com</a></li>
              <li>Location: 123, Galle Road, Colombo 03, Sri Lanka</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-iw-text-primary mb-4">Follow Us</h4>
            {/* --- UPDATED SOCIAL LINKS --- */}
            <div className="flex space-x-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-iw-text-secondary hover:text-iw-accent-orange transition-colors"
                  aria-label={`Follow us on ${social.href}`}
                >
                  <social.icon size={26} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-iw-accent-orange/20 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Island Wheels. All rights reserved. Website by [Your Name/Company].</p>
        </div>
      </div>
    </footer>
  );
}