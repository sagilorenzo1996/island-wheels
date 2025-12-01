'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield, FiZap, FiInfo } from 'react-icons/fi';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const features = [
  {
    title: "Safe and Intelligent",
    description: "Mode 2 portable EV charger fitted with 13A moulded UK plug and 10A (2.4kW) maximum charge rate. Charges to maximum output as per UK EV standards and regulations.",
    icon: FiZap
  },
  {
    title: "Premium Features",
    description: "LCD Charging Status Display shows charging rate, total charge delivered and fault warnings. Universally compatible with all Type 2 electric and hybrid vehicles.",
    icon: FiCheckCircle
  },
  {
    title: "Full Protection",
    description: "Built-in safety protection for PEN fault, over/under voltage, thermal overload, and RCD. IP66 weatherproof rated when connected to a vehicle.",
    icon: FiShield
  }
];

const specs = [
  "Safe and intelligent Mode 2 EV charging cable with 10m cable",
  "Suitable for Type 2 electric or plug-in hybrid vehicles",
  "IP66 weatherproof rated when end cap is applied",
  "LCD charging status display showing charge details",
  "Built-in safety voltage and overload protection",
  "Recommended to connect to sockets approved for EV charging (BS1363/EV)"
];

const galleryImages = [
  '/ev_charger/824838b.webp',
  '/ev_charger/824838c.webp',
  '/ev_charger/824838d.webp',
  '/ev_charger/824838e.webp'
];

export default function EvChargerPage() {
  const [variant, setVariant] = useState('5m');

  const prices = {
    '5m': '80,000',
    '10m': '90,000'
  };

  return (
    <div className="min-h-screen bg-iw-primary text-iw-text-primary pt-24 pb-12">

      {/* Hero Section */}
      <section className="container-main mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Masterplug Mode 2 <span className="text-iw-accent-orange">EV Charge Cable</span>
            </h1>
            <p className="text-xl text-iw-text-secondary mb-6">
              {variant} UK 13A Plug to Type 2 (824838)
            </p>

            <div className="mb-8">
              <p className="text-3xl font-bold text-white mb-4">
                Rs. {prices[variant]}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setVariant('5m')}
                  className={`px-6 py-2 rounded-full border transition-all ${variant === '5m' ? 'bg-iw-accent-orange border-iw-accent-orange text-white' : 'border-gray-500 text-gray-300 hover:border-iw-accent-orange'}`}
                >
                  5m Cable
                </button>
                <button
                  onClick={() => setVariant('10m')}
                  className={`px-6 py-2 rounded-full border transition-all ${variant === '10m' ? 'bg-iw-accent-orange border-iw-accent-orange text-white' : 'border-gray-500 text-gray-300 hover:border-iw-accent-orange'}`}
                >
                  10m Cable
                </button>
              </div>
            </div>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Charge your electric vehicle safely and efficiently at home with the Masterplug Mode 2 EV Charging Cable. Designed for reliability and ease of use, it's the perfect portable solution for Type 2 vehicles.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/94711008070?text=Hi, I'm interested in the Masterplug EV Charger (${variant})`}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-orange flex items-center gap-2"
              >
                <FaWhatsapp size={20} />
                Buy on WhatsApp
              </a>
              <Link href="#features" className="cta-button-outline">
                View Features
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-iw-accent-orange/20"
          >
            <Image
              src="/ev_charger/824838.webp"
              alt="Masterplug EV Charger"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Overview / Specs */}
      <section className="bg-iw-secondary py-16 mb-16">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-10 text-white">Product <span className="text-iw-accent-orange">Overview</span></h2>
            <div className="glassmorphism p-8 rounded-xl">
              <ul className="space-y-4">
                {specs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3 text-iw-text-secondary">
                    <FiCheckCircle className="text-iw-accent-orange mt-1 flex-shrink-0" size={20} />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Cards */}
      <section id="features" className="container-main mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Key <span className="text-iw-accent-orange">Features</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism p-6 rounded-xl border-t-4 border-iw-accent-orange hover:shadow-lg hover:shadow-iw-accent-orange/10 transition-all"
            >
              <feature.icon className="text-4xl text-iw-accent-orange mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-iw-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="container-main mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Product <span className="text-iw-accent-orange">Gallery</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-48 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shop with Confidence */}
      <section className="bg-iw-secondary py-16">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-block p-4 rounded-full bg-iw-accent-orange/10 mb-6">
              <FiInfo className="text-4xl text-iw-accent-orange" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Shop With <span className="text-iw-accent-orange">Confidence</span></h2>
            <p className="text-iw-text-secondary mb-8">
              Masterplug is part of Luceco PLC. Offering a 1-year warranty for peace of mind.
              Luceco also has a dedicated technical support team on hand to assist with any questions.
            </p>
            <Link href="/contact" className="cta-button-orange inline-block">
              Contact Us for Pricing
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
