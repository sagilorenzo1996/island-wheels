'use client'; 
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CarCard from '../components/CarCard';

// Animation container for staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Main Page Component
export default function CarsPage() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState({
    make: '',
    body_type: '',
    year: '',
    price: '',
  });

  // Fetch car data from the JSON file
  useEffect(() => {
    fetch('/inventory.json')
      .then(res => res.json())
      .then(data => {
        setCars(data);
        setFilteredCars(data);
      });
  }, []);

  // Handle filter changes
  useEffect(() => {
    let result = cars;

    if (filters.make) {
      result = result.filter(car => car.make === filters.make);
    }
    if (filters.body_type) {
      result = result.filter(car => car.body_type === filters.body_type);
    }

    setFilteredCars(result);
  }, [filters, cars]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Get unique values for filters
  const makes = [...new Set(cars.map(car => car.make))];
  const bodyTypes = [...new Set(cars.map(car => car.body_type))];

  return (
    <div className="container-main">
      <motion.h1 
        className="text-center mb-10 text-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Inventory
      </motion.h1>
      
      {/* Filters Section */}
      <div className="glassmorphism p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <select name="make" onChange={handleFilterChange} className="form-select w-full rounded-md bg-iw-secondary text-iw-text-primary border-iw-accent-orange/20">
          <option value="">All Makes</option>
          {makes.map(make => <option key={make} value={make}>{make}</option>)}
        </select>

        <select name="body_type" onChange={handleFilterChange} className="form-select w-full rounded-md bg-iw-secondary text-iw-text-primary border-iw-accent-orange/20">
          <option value="">All Body Types</option>
          {bodyTypes.map(type => <option key={type} value={type}>{type}</option>)}
        </select>
        
        <input type="text" placeholder="Min Year" name="year" className="form-input w-full rounded-md bg-iw-secondary text-iw-text-primary border-iw-accent-orange/20" />
        <input type="text" placeholder="Max Price" name="price" className="form-input w-full rounded-md bg-iw-secondary text-iw-text-primary border-iw-accent-orange/20" />
      </div>

      {/* Car Grid */}
      {filteredCars.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </motion.div>
      ) : (
        <p className="text-center text-lg text-iw-text-secondary">No vehicles match your criteria. Please broaden your search.</p>
      )}
    </div>
  );
}