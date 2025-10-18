'use client'
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <motion.div 
      className="bg-iw-secondary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-main">
        <h1 className="text-center mb-10 text-glow">Contact Us</h1>
        <p className="text-lg text-center text-iw-text-secondary max-w-3xl mx-auto mb-12">
          We're here to help you find your next vehicle. Reach out via phone, WhatsApp, email, or by visiting our showroom.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Contact Details */}
          <motion.div 
            className="space-y-8 glassmorphism p-8 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-iw-accent-orange">Get in Touch Directly</h3>
            <a 
              href="tel:+94771234567" // <-- REPLACE
              className="flex items-center gap-4 group"
            >
              <FaPhone className="text-iw-accent-orange w-6 h-6" />
              <span className="text-lg text-iw-text-primary group-hover:text-iw-accent-orange transition-colors">+94 77 123 4567</span>
            </a>
            <a 
              href="https://wa.me/94771234567" // <-- REPLACE
              target="_blank" 
              className="flex items-center gap-4 group"
            >
              <FaWhatsapp className="text-iw-accent-orange w-6 h-6" />
              <span className="text-lg text-iw-text-primary group-hover:text-iw-accent-orange transition-colors">Chat on WhatsApp</span>
            </a>
            <a 
              href="mailto:info.islandwheels@gmail.com" 
              className="flex items-center gap-4 group"
            >
              <FaEnvelope className="text-iw-accent-orange w-6 h-6" />
              <span className="text-lg text-iw-text-primary group-hover:text-iw-accent-orange transition-colors">info.islandwheels@gmail.com</span>
            </a>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-iw-accent-orange w-6 h-6 mt-1" />
              <span className="text-lg text-iw-text-primary">
                123, Galle Road, Colombo 03,<br />Sri Lanka
              </span>
            </div>
          </motion.div>

          {/* Right Column: Map */}
          <motion.div 
            className="h-96 md:h-full glassmorphism rounded-lg overflow-hidden p-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.60601618331!2d79.84368153955078!3d6.903780800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sGalle%20Face%20Green!5e0!3m2!1sen!2slk!4v1678888888888"
              width="100%"
              height="100%"
              className="rounded-md filter invert(100%) hue-rotate(180deg) contrast(0.9)" // <-- DARK MODE MAP
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}