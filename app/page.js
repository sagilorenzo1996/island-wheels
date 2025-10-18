'use client'
import Link from 'next/link';
import Image from 'next/image'; // We need this for the brand logos
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaQuoteLeft } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

// --- (Featured Cars, Social Links, Customer Reviews, Brand Logos arrays are unchanged) ---
const featuredCars = [
  {
    "id": 1,
    "slug": "2022-toyota-land-cruiser-zx",
    "make": "Toyota",
    "model": "Land Cruiser ZX",
    "year": 2022,
    "price_display": "LKR 18,500,000 Upwards",
    "mileage": 15000,
    "source": "Japan Import",
    "image": "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    "id": 2,
    "slug": "2021-land-rover-defender-110",
    "make": "Land Rover",
    "model": "Defender 110",
    "year": 2021,
    "price_display": "LKR 15,000,000 Upwards",
    "mileage": 22000,
    "source": "UK Import",
    "image": "https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const socialLinks = [
  { href: 'https://facebook.com/your-handle', icon: FaFacebook, label: 'Facebook' },
  { href: 'https://instagram.com/your-handle', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://tiktok.com/@your-handle', icon: FaTiktok, label: 'TikTok' },
  { href: 'https://wa.me/94771234567', icon: FaWhatsapp, label: 'WhatsApp' },
];

const customerReviews = [
  {
    name: 'R. Perera',
    location: 'Colombo 07',
    review: 'Island Wheels handled everything perfectly. My Land Cruiser arrived in pristine condition. Highly recommend their professional service!'
  },
  {
    name: 'S. Silva',
    location: 'Kandy',
    review: 'The on-demand sourcing was amazing. They found the exact GTR spec I wanted from Japan. A dream come true!'
  },
  {
    name: 'A. Fernando',
    location: 'Galle',
    review: 'Professional, transparent, and completely hassle-free. This is the only way I will import cars from now on. Thank you to the team!'
  }
];

const brandLogos = [
  { src: '/brands/toyota.jpg', alt: 'Toyota Logo' },
  { src: '/brands/honda.jpg', alt: 'Honda Logo' },
  { src: '/brands/ford.jpg', alt: 'Ford Logo' },
  { src: '/brands/bmw.jpg', alt: 'BMW Logo' },
  { src: '/brands/mercedes.jpg', alt: 'Mercedes-Benz Logo' },
];

// --- (FeaturedCarCard and ReviewCard components are unchanged) ---
function FeaturedCarCard({ car }) {
  return (
    <motion.div 
      className="glassmorphism rounded-lg shadow-xl overflow-hidden flex flex-col"
      whileHover={{ scale: 1.03, boxShadow: "0px 0px 15px rgba(244, 107, 22, 0.5)" }} // Orange shadow
    >
      <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-iw-text-primary">{car.make} {car.model}</h3>
        <p className="text-iw-accent-orange font-semibold mt-1">{car.price_display}</p>
        <p className="text-xs text-iw-text-secondary italic mt-1">
          *Price subject to gov. taxes & policy changes.
        </p>
        <div className="grid grid-cols-2 gap-2 text-sm text-iw-text-secondary mt-4">
          <span>{car.year}</span>
          <span>{car.mileage.toLocaleString()} km</span>
          <span>{car.source}</span>
        </div>
        <div className="mt-auto pt-4">
          <Link href={`/cars/${car.slug}`} className="cta-button-orange w-full">
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function ReviewCard({ review }) {
  return (
    <motion.div
      className="glassmorphism rounded-lg p-6 flex flex-col h-full"
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      whileHover={{ scale: 1.03, boxShadow: "0px 0px 15px rgba(244, 107, 22, 0.5)" }}
    >
      <FaQuoteLeft className="text-iw-accent-orange text-3xl mb-4" />
      <p className="text-iw-text-secondary mb-6 flex-grow italic">
        "{review.review}"
      </p>
      <div className="mt-auto">
        <h4 className="text-iw-text-primary font-bold text-lg">{review.name}</h4>
        <p className="text-iw-text-secondary text-sm">{review.location}</p>
      </div>
    </motion.div>
  );
}

function BrandLogoCard({ logo }) {
  return (
    <motion.div
      className="bg-white rounded-lg p-4 h-32 flex justify-center items-center shadow-lg"
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)" }}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={150} // Aspect ratio width
        height={80} // Aspect ratio height
        className="object-contain w-full h-full"
      />
    </motion.div>
  );
}


// Animation container for staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};


export default function Home() {
  return (
    <div>

      {/* --- FIXED BACKGROUND --- */}
      <div 
        className="fixed inset-0 z-[-10] bg-cover bg-center bg-no-repeat opacity-30"
        style={{ 
          backgroundImage: 'url(/hero-background.jpg)' 
        }}
      />
      
      {/* 1. Hero Section - UPDATED */}
      <section className="relative h-[60vh] min-h-[400px] md:h-[80vh] md:min-h-[500px] bg-iw-primary/70 text-white flex items-center justify-center">
        
        <motion.div 
          className="relative z-10 text-center p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Premium <span className="text-glow text-iw-accent-orange">Imports:</span> Vehicles & Parts
          </h1>
          <p className="text-xl md:text-2xl text-iw-text-secondary mb-8">
            Your direct source for vehicles, spare parts, and accessories from Japan & the UK.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/cars" className="cta-button-orange">
              View Inventory
            </Link>
            <Link href="/service" className="cta-button-outline">
              On-Demand Sourcing
            </Link>
          </div>

          <div className="mt-12">
            <a
              href="tel:+94711008070"
              className="inline-flex items-center gap-3 text-xl text-iw-text-primary hover:text-iw-accent-orange transition-colors duration-300 font-semibold"
              aria-label="Call us"
            >
              <FiPhoneCall size={22} />
              <span>Call Us: +94 71 100 8070</span>
            </a>
          </div>

          <div className="flex justify-center space-x-6 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-iw-text-secondary hover:text-iw-accent-orange transition-transform duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={28} />
              </a>
            ))}
          </div>
          
        </motion.div>
      </section>

      {/* 2. Featured Cars Section */}
      <section className="container-main bg-iw-primary relative">
        <h2 className="text-3xl font-bold text-center text-iw-text-primary mb-8">
          Featured Vehicles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featuredCars.map((car) => (
            <FeaturedCarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      {/* 3. Services Summary Section - UPDATED */}
      <section className="bg-iw-secondary relative">
        <div className="container-main grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-semibold text-iw-accent-orange mb-2">1. Consult & Advise</h3>
            <p className="text-iw-text-secondary">Whether it's a specific vehicle or a rare part, tell us your vision. We provide expert advice on availability, pricing, and the import process.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-iw-accent-orange mb-2">2. Source & Inspect</h3>
            <p className="text-iw-text-secondary">Our partners source from exclusive vehicle auctions and verified parts suppliers in Japan & the UK. We inspect everything for quality.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-iw-accent-orange mb-2">3. Deliver & Handle</h3>
            <p className="text-iw-text-secondary">We handle all shipping, logistics, customs, and registration. You get your vehicle or parts delivered to your door, hassle-free.</p>
          </div>
        </div>
      </section>

      {/* 4. Customer Review Section */}
      <section className="container-main bg-iw-primary relative">
        <h2 className="text-3xl font-bold text-center text-iw-text-primary mb-12 text-glow">
          What Our Clients Say
        </h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Animation triggers when you scroll to it
          viewport={{ once: true, amount: 0.5 }} // Ensures animation runs once
        >
          {customerReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </motion.div>
      </section>
      
      {/* 5. Trust Signals Section (with Logos) - UPDATED */}
      <section className="container-main text-center border-t border-iw-accent-orange/10 bg-iw-primary relative">
        <h2 className="text-2xl font-bold text-iw-text-primary mb-6">Your Trusted Partner in Premium Imports</h2>
        <p className="text-lg text-iw-text-secondary max-w-3xl mx-auto mb-12">
          We are not just importers; we are car enthusiasts dedicated to transparency and quality. We specialize in sourcing premium vehicles *and* genuine spare parts from the world's most reputable brands.
        </p>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {brandLogos.map((logo, index) => (
            <BrandLogoCard key={index} logo={logo} />
          ))}
        </motion.div>

      </section>
    </div>
  );
}