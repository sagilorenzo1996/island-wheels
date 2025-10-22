'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation for each card
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function CarCard({ car }) {
  return (
    <motion.div
      className="glassmorphism rounded-lg shadow-xl overflow-hidden flex flex-col"
      variants={cardVariants}
      whileHover={{ scale: 1.03, boxShadow: "0px 0px 15px rgba(244, 107, 22, 0.5)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={`/cars/${car.slug}`}>
        <img src={car.image1} alt={`${car.make} ${car.model}`} className="w-full h-56 object-cover hover:opacity-90 transition-opacity" />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-iw-text-primary">{car.make} {car.model}</h3>
        
        {/* Price and Disclaimer */}
        <p className="text-iw-accent-orange font-semibold text-lg mt-1">{car.price_display}</p>
        
        {/* --- NEW PRICE IN MILLIONS --- */}
        {car.price_million && (
          <p className="text-iw-text-secondary font-semibold text-sm">
            {car.price_million}
          </p>
        )}
        
        <p className="text-xs text-iw-text-secondary italic mt-1">
          *Price subject to gov. taxes & policy changes.
        </p>
        
        <div className="grid grid-cols-2 gap-2 text-sm text-iw-text-secondary mt-4">
          <span><strong>Year:</strong> {car.year}</span>
          {/* <span><strong>Mileage:</strong> {car.mileage.toLocaleString()} km</span> */}
          <span>
            <strong>Mileage:</strong> 
            {typeof car.mileage === 'number' ? car.mileage.toLocaleString() : car.mileage}
          </span>
          <span><strong>Body:</strong> {car.body_type}</span>
          <span><strong>Source:</strong> {car.source}</span>
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