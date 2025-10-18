'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CarGallery({ gallery }) {
  // Use state to keep track of the selected image
  const [selectedImage, setSelectedImage] = useState(gallery[0]);

  // The rest of the images are thumbnails
  const thumbnails = gallery.slice(0, 5); // Ensure we only ever show 5

  return (
    <div>
      {/* Main Image Container with Fixed Height */}
      <div 
        className="w-full bg-black rounded-lg overflow-hidden mb-4 border border-iw-accent-orange/20 flex items-center justify-center"
        style={{ minHeight: '400px' }} // <-- Set a minimum height here
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedImage} // This makes the animation re-run when the src changes
            src={selectedImage}
            alt="Main car view"
            className="w-full h-full object-contain" // <-- Use object-contain to fit the image within the fixed height
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>
      </div>
      
      {/* Thumbnail Grid (shows 5) */}
      <div className="grid grid-cols-5 gap-2">
        {thumbnails.map((img, index) => (
          <div
            key={index}
            className={`rounded-md overflow-hidden cursor-pointer border-2 ${
              selectedImage === img
                ? 'border-iw-accent-orange'
                : 'border-transparent hover:border-iw-accent-orange/50'
            }`}
            onClick={() => setSelectedImage(img)}
          >
            <img 
              src={img} 
              alt={`View ${index + 1}`} 
              className="w-full h-20 md:h-28 object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}