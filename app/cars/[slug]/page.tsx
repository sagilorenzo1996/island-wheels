import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

// ... (getCars, generateStaticParams, getCar functions are unchanged) ...
async function getCars() {
  const fs = require('fs');
  const path = require('path');
  
  const filePath = path.join(process.cwd(), 'public', 'inventory.json');
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading inventory.json:", err);
    return [];
  }
}

export async function generateStaticParams() {
  const cars = await getCars();
  return cars.map((car) => ({
    slug: car.slug,
  }));
}

async function getCar(slug) {
  const cars = await getCars();
  return cars.find((car) => car.slug === slug);
}


export default async function CarDetailPage({ params }) {
  const car = await getCar(params.slug);

  if (!car) {
    return <p className="container-main text-center">Car not found.</p>;
  }
  
  const carName = `${car.year} ${car.make} ${car.model}`;
  const mailtoLink = `mailto:info.islandwheels@gmail.com?subject=Inquiry%20for%20${encodeURIComponent(carName)}&body=I'm%20interested%in%20the%20${encodeURIComponent(carName)}%20(VIN:%20${car.vin}).%0D%0APlease%20provide%20more%20details.`;


  return (
    <div className="bg-iw-secondary">
      <div className="container mx-auto px-4 py-12">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-iw-text-primary mb-2">{carName}</h1>
        
        {/* Price and Disclaimer */}
        <p className="text-2xl text-iw-accent-orange font-semibold">{car.price_display}</p>
        <p className="text-sm text-iw-text-secondary italic mt-1 mb-6">
          *Price subject to government import taxes and policy changes.
        </p>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Gallery & Details */}
          <div className="lg:col-span-2">
            {/* Gallery */}
            <div className="w-full bg-black rounded-lg overflow-hidden mb-6 border border-iw-accent-orange/20">
              <img src={car.gallery[0]} alt="Main" className="w-full h-auto object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {car.gallery.slice(1).map((img, index) => (
                <img key={index} src={img} alt={`View ${index + 1}`} className="w-full h-32 object-cover rounded-md cursor-pointer border border-iw-accent-orange/10" />
              ))}
            </div>

            {/* Description */}
            <div className="mt-8 glassmorphism p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-iw-accent-orange mb-4">Vehicle Description</h3>
              <p className="text-iw-text-secondary leading-relaxed">{car.description}</p>
            </div>

            {/* Specifications */}
            <div className="mt-8 glassmorphism p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-iw-accent-orange mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-iw-accent-orange/20 pt-4">
                <div className="p-2"><strong className="text-iw-text-primary">Make:</strong> {car.make}</div>
                <div className="p-2"><strong className="text-iw-text-primary">Model:</strong> {car.model}</div>
                <div className="p-2"><strong className="text-iw-text-primary">Year:</strong> {car.year}</div>
                <div className="p-2"><strong className="text-iw-text-primary">Mileage:</strong> {car.mileage.toLocaleString()} km</div>
                <div className="p-2"><strong className="text-iw-text-primary">Engine:</strong> {car.engine}</div>
                <div className="p-2"><strong className="text-iw-text-primary">Body Type:</strong> {car.body_type}</div>
                <div className="p-2"><strong className="text-iw-text-primary">Source:</strong> {car.source}</div>
                <div className="p-2"><strong className="text-iw-text-primary">VIN:</strong> {car.vin}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form & CTAs */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 glassmorphism p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-iw-accent-orange text-center mb-6">Interested in this car?</h3>
              
              {/* CTAs */}
              <div className="space-y-3">
                <a 
                  href="https://wa.me/94771234567" // <-- REPLACE
                  target="_blank" 
                  className="cta-button-whatsapp w-full" // <-- Simplified
                >
                  <FaWhatsapp size={20} />
                  <span>Chat on WhatsApp</span>
                </a>
                <a 
                  href="tel:+94771234567" // <-- REPLACE
                  className="cta-button-outline w-full" // <-- Simplified
                >
                  <FaPhone size={18} />
                  <span>Call Us Direct</span>
                </a>
                <a 
                  href={mailtoLink}
                  className="cta-button-orange w-full" // <-- Simplified
                >
                  <FaEnvelope size={18} />
                  <span>Email Us for Info</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}