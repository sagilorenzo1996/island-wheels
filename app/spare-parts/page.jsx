'use client'
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPercent, FaRegIdCard, FaShippingFast } from 'react-icons/fa';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import Link from 'next/link';

export default function SparePartsPage() {
  return (
    <motion.div
      className="bg-iw-secondary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="container-main text-center">
        <h1 className="text-glow mb-4">Genuine Spare Parts</h1>
        <p className="text-xl text-iw-text-secondary max-w-3xl mx-auto">
          We source high-quality, genuine (OEM) and aftermarket spare parts directly from Japan and the UK for all makes and models.
        </p>
      </div>

      {/* Discount Offer Section */}
      <div className="bg-iw-primary">
        <motion.div
          className="container-main max-w-4xl mx-auto text-center glassmorphism p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <FaPercent className="text-iw-accent-orange text-5xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-iw-accent-orange mb-4">Loyalty Discount!</h2>
          <p className="text-lg text-iw-text-primary">
            Did you import your vehicle through Island Wheels?
          </p>
          <p className="text-2xl font-bold text-white mt-2">
            Enjoy <span className="text-glow">10% OFF</span> all your spare part orders.
          </p>
        </motion.div>
      </div>

      {/* How to Order Section */}
      <div className="container-main max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">How to Order Parts</h2>
        <div className="space-y-8">
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <FaRegIdCard className="text-iw-accent-orange text-6xl flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">1. Send Us Your Details</h3>
              <p className="text-iw-text-secondary text-lg">
                To ensure we find the *exact* part for your car, we need two key pieces of information:
                <br />
                - Your Vehicle's <strong>Make & Model</strong> (e.g., Toyota Land Cruiser)
                <br />
                - Your Vehicle's <strong>Full Chassis Number (VIN)</strong>
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <FaShippingFast className="text-iw-accent-orange text-6xl flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">2. Sourcing & Import</h3>
              <p className="text-iw-text-secondary text-lg">
                Once we've identified your part, we'll provide a quote. Please note that all parts are sourced on-demand from our partners abroad.
                <br />
                <strong>This process involves import time,</strong> which we will confirm with you before you order.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spare Parts List Section */}
      <div className="container-main max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Spare Parts Range</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sparePartsData.map((category, index) => (
            <motion.div
              key={index}
              className="glassmorphism p-6 rounded-lg shadow-lg flex flex-col"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="text-3xl mr-3">{category.icon}</span>
                {category.category}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-iw-text-secondary flex-grow">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section - UPDATED */}
      <div className="bg-iw-primary">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Order?</h2>
          <p className="text-lg text-iw-text-secondary mb-8 max-w-2xl mx-auto">Send us your chassis number and the parts you need via WhatsApp for the fastest service.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/94711008070"
              target="_blank"
              className="cta-button-whatsapp w-full md:w-auto"
            >
              <FaWhatsapp size={20} />
              <span>Inquire on WhatsApp</span>
            </Link>
            <Link
              href="tel:+94711008070"
              className="cta-button-outline w-full md:w-auto"
            >
              <FiPhoneCall size={20} />
              <span>Call Us</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const sparePartsData = [
  {
    category: 'Engine & Drivetrain',
    icon: '⚙️',
    items: [
      'Engine oil filters',
      'Air filters',
      'Fuel filters',
      'Spark plugs / glow plugs',
      'Timing belts / chains',
      'Water pumps',
      'Radiators',
      'Alternators',
      'Starter motors',
      'Clutch kits / components',
      'Drive shafts / CV joints',
      'Transmission filters / fluid',
      'Engine mounts',
      'Oxygen sensors',
    ],
  },
  {
    category: 'Braking System',
    icon: '🚗',
    items: [
      'Brake pads',
      'Brake discs / rotors',
      'Brake calipers',
      'Brake fluid',
      'Brake lines / hoses',
      'ABS sensors',
      'Wheel cylinders',
      'Master cylinders',
    ],
  },
  {
    category: 'Electrical & Lighting',
    icon: '💡',
    items: [
      'Batteries',
      'Headlight bulbs',
      'Tail light bulbs',
      'Indicator bulbs',
      'Fuses',
      'Relays',
      'Wiper motors',
      'Window regulators',
      'Sensors (crankshaft, camshaft, temperature, pressure)',
      'Ignition coils',
    ],
  },
  {
    category: 'Suspension & Steering',
    icon: '🛠️',
    items: [
      'Shock absorbers / struts',
      'Coil springs',
      'Control arms',
      'Ball joints',
      'Tie rod ends',
      'Power steering pumps',
      'Steering racks / gearboxes',
      'Wheel bearings',
      'Bushings',
    ],
  },
  {
    category: 'Body & Interior',
    icon: '🧽',
    items: [
      'Wiper blades',
      'Side mirrors / mirror glass',
      'Door handles',
      'Window switches',
      'Interior trim pieces',
      'Headlight assemblies',
      'Tail light assemblies',
      'Bumper covers',
      'Fenders',
      'Hoods',
      'Trunk lids',
      'Grilles',
      'Door panels',
      'Seats',
      'Exhaust pipe/muffler',
      'Exhaust manifold',
      'Catalytic converter',
      'Tailpipe',
      'Resonator',
    ],
  },
];