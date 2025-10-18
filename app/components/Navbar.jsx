'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
// Import the new icons
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/cars', label: 'Cars' },
    { href: '/service', label: 'How to Import' },
    { href: '/about', label: 'About Us' },
    { href: '/faq', label: 'FAQs' },
    { href: '/contact', label: 'Contact' },
  ];

  // Social links data
  const socialLinks = [
    { href: 'https://facebook.com/your-handle', icon: FaFacebook },
    { href: 'https://instagram.com/your-handle', icon: FaInstagram },
    { href: 'https://tiktok.com/@your-handle', icon: FaTiktok },
    { href: 'https://wa.me/94771234567', icon: FaWhatsapp },
  ];

  return (
    <nav className="sticky top-0 z-50 glassmorphism shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Island Wheels Logo"
              width={180}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
          
          {/* Desktop Nav & Socials Wrapper */}
          <div className="hidden md:flex items-center">
            {/* Page Links */}
            <div className="flex space-x-6 items-center">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-iw-text-secondary hover:text-iw-accent-orange transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-iw-accent-orange/20">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-iw-text-secondary hover:text-iw-accent-orange transition-colors"
                  aria-label={`Follow us on ${social.href}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-iw-text-secondary hover:text-iw-accent-orange focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden glassmorphism border-t border-iw-accent-orange/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <div className="flex flex-col px-4 py-4">
            {/* Mobile Page Links */}
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-iw-text-secondary hover:text-iw-accent-orange text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <hr className="border-iw-accent-orange/20 my-4" />

            {/* Mobile Social Links */}
            <div className="flex items-center space-x-5 pt-2">
              {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-iw-text-secondary hover:text-iw-accent-orange transition-colors"
                    aria-label={`Follow us on ${social.href}`}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}