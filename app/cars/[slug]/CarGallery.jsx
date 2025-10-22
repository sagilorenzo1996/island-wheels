'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CarGallery({ image1, image2, image3, image4, image5, image6 }) {
  const gallery = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ].filter(Boolean);

  console.log('CarGallery received images:', gallery);
  // Use state to keep track of the selected image
  const [selectedImage, setSelectedImage] = useState(gallery.length > 0 ? gallery[0] : null);

  // The rest of the images are thumbnails
  const thumbnails = gallery;

  // Auto-scroll effect
  useEffect(() => {
    if (gallery && gallery.length > 1) {
      const interval = setInterval(() => {
        setSelectedImage((prevImage) => {
          const currentIndex = gallery.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % gallery.length;
          const newImage = gallery[nextIndex];
          console.log('Selected image changed to:', newImage);
          return newImage;
        });
      }, 7000); // Change image every 5 seconds

      return () => clearInterval(interval); // Clean up the interval on component unmount
    }
  }, [gallery, selectedImage]); // Re-run effect if gallery or selectedImage changes

  return (
    <div>
      {/* Main Image Container with Fixed Height */}
      <div 
        className="w-full bg-black rounded-lg overflow-hidden mb-4 border border-iw-accent-orange/20 flex items-center justify-center"
        style={{ minHeight: '400px' }} // <-- Set a minimum height here
      >
        <AnimatePresence mode="wait">
          {selectedImage && (
            <motion.img
              key={selectedImage} // This makes the animation re-run when the src changes
              src={selectedImage.startsWith('/') ? selectedImage : `/${selectedImage}`}
              alt="Main car view"
              className="w-full h-full object-contain" // <-- Use object-contain to fit the image within the fixed height
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </div>
      
      {/* Thumbnail Grid */}
      <div className="flex flex-nowrap gap-2 overflow-x-auto pb-2">
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
              src={img.startsWith('/') ? img : `/${img}`} 
              alt={`View ${index + 1}`} 
              className="w-full h-20 md:h-28 object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}