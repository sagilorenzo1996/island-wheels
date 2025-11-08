'use client'
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPercent, FaRegIdCard, FaShippingFast } from 'react-icons/fa';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import Link from 'next/link';

export default function AccessoriesPage() {
  return (
    <motion.div
      className="bg-iw-secondary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="container-main text-center">
        <h1 className="text-glow mb-4">Vehicle Accessories</h1>
        <p className="text-xl text-iw-text-secondary max-w-3xl mx-auto">
          Upgrade your ride. We source premium accessories, from body kits and alloy wheels to interior upgrades, directly from Japan and the UK.
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
            Enjoy <span className="text-glow">5% OFF</span> all your accessory orders.
          </p>
        </motion.div>
      </div>

      {/* How to Order Section */}
      <div className="container-main max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">How to Order Accessories</h2>
        <div className="space-y-8">
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <FaRegIdCard className="text-iw-accent-orange text-6xl flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">1. Send Us Your Details</h3>
              <p className="text-iw-text-secondary text-lg">
                To ensure 100% compatibility, we require your vehicle's details.
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
                We will find the exact accessory you're looking for and provide a quote. Please note that all accessories are sourced on-demand.
                <br />
                <strong>This process involves import time,</strong> which we will confirm with you before you order.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accessories List Section */}
      <div className="container-main max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Accessory Range</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessoriesData.map((category, index) => (
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
          <p className="text-lg text-iw-text-secondary mb-8 max-w-2xl mx-auto">Send us your chassis number and the accessories you want via WhatsApp for the fastest service.</p>
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

const accessoriesData = [
  {
    category: 'Interior Accessories',
    icon: '🚗',
    items: [
      'Seat covers (leather, fabric, waterproof)',
      'Floor mats (rubber, carpet, all-weather)',
      'Steering wheel covers',
      'Sunshades / windshield shades',
      'Dashboard covers',
      'Car organizers (seat-back, trunk, glovebox)',
      'Mobile phone holders / mounts',
      'Car air fresheners',
      'Interior LED lights / ambient lighting kits',
      'Car cushions / neck pillows',
      'Armrest consoles',
      'Car dustbins',
      'USB chargers / multi-port adapters',
      'Cup holders / cup cooler-warmers',
      'Key holders / key organizers',
    ],
  },
  {
    category: 'Electronics & Tech',
    icon: '🔊',
    items: [
      'Car audio systems (speakers, subwoofers, amplifiers)',
      'Touchscreen infotainment systems',
      'Car reverse cameras',
      'Parking sensors',
      'GPS navigation systems',
      'Dash cameras',
      'Tire pressure monitoring systems (TPMS)',
      'Car alarms / anti-theft systems',
      'Remote starters',
      'Car mobile chargers / wireless chargers',
      'HUD (Head-Up Display)',
      'Bluetooth adapters',
      'Car DVRs (Driving Video Recorders)',
    ],
  },
  {
    category: 'Cleaning & Maintenance',
    icon: '🧼',
    items: [
      'Car shampoo / wax / polish',
      'Microfiber cloths',
      'Vacuum cleaners (portable, cordless)',
      'Dashboard cleaners',
      'Tire cleaners and shine sprays',
      'Scratch removers',
      'Pressure washers',
      'Glass cleaners',
      'Wax applicators',
      'Engine degreasers',
      'Air freshening sprays',
      'Cleaning brushes / detailing kits',
    ],
  },
  {
    category: 'Lighting & Electrical',
    icon: '💡',
    items: [
      'Headlights (LED / HID / Halogen)',
      'Fog lights',
      'Tail lights / brake lights',
      'Interior dome lights',
      'Underglow LED strips',
      'Indicator lights',
      'License plate lights',
      'DRLs (Daytime Running Lights)',
      'Headlight restoration kits',
      'Light controllers',
    ],
  },
  {
    category: 'Exterior Accessories',
    icon: '🧳',
    items: [
      'Car body covers',
      'Roof racks / luggage carriers',
      'Spoilers / diffusers',
      'Side skirts',
      'Chrome trims',
      'Mud flaps',
      'Door edge guards',
      'Window visors / rain guards',
      'Number plate frames',
      'Car badges / emblems',
      'Magnetic sunshades',
      'Bumper protectors',
      'Mirror covers',
    ],
  },
  {
    category: 'Performance & Functional Accessories',
    icon: '⚙️',
    items: [
      'Air filters / performance filters',
      'Exhaust tips / mufflers',
      'Engine oil coolers',
      'Brake caliper covers',
      'Suspension kits',
      'Car jacks / tool kits',
      'Tow hooks',
      'Jump starters',
      'Portable tire inflators',
      'Battery chargers',
    ],
  },
  {
    category: 'Safety & Security',
    icon: '🔒',
    items: [
      'Seat belt pads',
      'Child car seats',
      'Fire extinguishers',
      'First aid kits',
      'Car escape tools (window breaker & seatbelt cutter)',
      'Blind spot mirrors',
      'Rearview mirror wide-angle attachments',
      'Anti-theft steering locks / wheel locks',
      'GPS trackers',
    ],
  },
  {
    category: 'Utility & Convenience',
    icon: '🛠',
    items: [
      'Roof tents / camping kits',
      'Portable refrigerators',
      'Car vacuum cleaners',
      'Car heaters / mini fans',
      'Tire repair kits',
      'Trunk organizers',
      'Portable power stations',
      'Car jump starter kits',
      'Umbrella holders',
    ],
  },
];