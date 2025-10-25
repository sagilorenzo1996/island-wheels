import { FaWhatsapp, FaPhone, FaEnvelope, FaCheckCircle, FaInfoCircle  } from 'react-icons/fa';
import CarGallery from './CarGallery'; // <-- Import the new client component
import { fetchAndParseCars } from '../../../lib/data'; // Adjust path as necessary

// --- Data Fetching (Server-side) ---
async function getCars() {
  const cars = await fetchAndParseCars();
  return cars;
}

// --- Static Page Generation (Server-side) ---
export async function generateStaticParams() {
  const cars = await getCars();
  return cars
    .filter((car) => car.slug && typeof car.slug === 'string') // Filter out cars with undefined or non-string slugs
    .map((car) => ({
      slug: car.slug,
    }));
}

async function getCar(slug) {
  const cars = await getCars();
  return cars.find((car) => car.slug === slug);
}

// --- The Page Component (Server-side) ---
export default async function CarDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const car = await getCar(slug);

  if (!car) {
    return <p className="container-main text-center">Car not found.</p>;
  }
  
  const carName = `${car.year} ${car.make} ${car.model}`;
  const mailtoLink = `mailto:info.islandwheels@gmail.com?subject=Inquiry%20for%20${encodeURIComponent(carName)}&body=I'm%20interested%in%20the%20${encodeURIComponent(carName)}%20(Model:%20${car.vin}).%0D%0APlease%20provide%20more%20details.`;

  return (
    <div className="bg-iw-secondary">
      <div className="container mx-auto px-4 py-12">
        
        <h1 className="text-4xl font-bold text-iw-text-primary mb-2">{carName}</h1>
        
        <p className="text-2xl text-iw-accent-orange font-semibold">{car.price_display}</p>
        
        {car.price_million && (
          <p className="text-iw-text-secondary font-semibold text-lg">
            {car.price_million}
          </p>
        )}
        
        <p className="text-sm text-iw-text-secondary italic mt-1 mb-6">
          *Price subject to government import taxes and policy changes.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Gallery & Details */}
          <div className="lg:col-span-2">
            
            {/* --- GALLERY CLIENT COMPONENT --- */}
            {/* We pass the server-fetched data (car.gallery) to the Client Component */}
            <CarGallery 
              image1={car.image1}
              image2={car.image2}
              image3={car.image3}
              image4={car.image4}
              image5={car.image5}
              image6={car.image6}
            />

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
                {/* <div className="p-2"><strong className="text-iw-text-primary">Mileage:</strong> {car.mileage.toLocaleString()} km</div> */}
                <div className="p-2"><strong className="text-iw-text-primary">Mileage:</strong> {car.mileage.toLocaleString()}</div>
                <div className="p-2"><strong className="text-iw-text-primary">Engine:</strong> {car.engine}</div>
                <div className="p-2"><strong className="text-iw-text-primary">Body Type:</strong> {car.body_type}</div>
                <div className="p-2"><strong className="text-iw-text-primary">Source:</strong> {car.source}</div>
                <div className="p-2"><strong className="text-iw-text-primary">Model:</strong> {car.vin}</div>
              </div>
            </div>
            {(car.pros1 || car.pros2 || car.pros3 || car.cons1 || car.cons2 || car.cons3) && (
              <div className="mt-8 glassmorphism p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-iw-accent-orange mb-6">The Island Wheels Verdict</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Pros List */}
                  {(car.pros1 || car.pros2 || car.pros3) && (
                    <div>
                      <h4 className="flex items-center gap-2 text-xl font-semibold text-iw-text-primary mb-3">
                        <FaCheckCircle className="text-green-500" />
                        What We Love
                      </h4>
                      <ul className="space-y-2 list-inside">
                        {car.pros1 && (
                          <li className="text-iw-text-secondary flex gap-2">
                            <span className="text-iw-accent-orange mt-1.5">-</span>
                            <span>{car.pros1}</span>
                          </li>
                        )}
                        {car.pros2 && (
                          <li className="text-iw-text-secondary flex gap-2">
                            <span className="text-iw-accent-orange mt-1.5">-</span>
                            <span>{car.pros2}</span>
                          </li>
                        )}
                        {car.pros3 && (
                          <li className="text-iw-text-secondary flex gap-2">
                            <span className="text-iw-accent-orange mt-1.5">-</span>
                            <span>{car.pros3}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Cons List */}
                  {(car.cons1 || car.cons2 || car.cons3) && (
                    <div>
                      <h4 className="flex items-center gap-2 text-xl font-semibold text-iw-text-primary mb-3">
                        <FaInfoCircle className="text-yellow-500" />
                        Good to Know
                      </h4>
                      <ul className="space-y-2 list-inside">
                        {car.cons1 && (
                          <li className="text-iw-text-secondary flex gap-2">
                            <span className="text-iw-accent-orange mt-1.5">-</span>
                            <span>{car.cons1}</span>
                          </li>
                        )}
                        {car.cons2 && (
                          <li className="text-iw-text-secondary flex gap-2">
                            <span className="text-iw-accent-orange mt-1.5">-</span>
                            <span>{car.cons2}</span>
                          </li>
                        )}
                        {car.cons3 && (
                          <li className="text-iw-text-secondary flex gap-2">
                            <span className="text-iw-accent-orange mt-1.5">-</span>
                            <span>{car.cons3}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                </div>
              </div>
            )}
          </div>

          {/* Right Column: Inquiry Form & CTAs */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 glassmorphism p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-iw-accent-orange text-center mb-6">Interested in this car?</h3>
              
              <div className="space-y-3">
                <a 
                  href="https://wa.me/94711008070"
                  target="_blank" 
                  className="cta-button-whatsapp w-full"
                >
                  <FaWhatsapp size={20} />
                  <span>Chat on WhatsApp</span>
                </a>
                <a 
                  href="tel:+94711008070"
                  className="cta-button-outline w-full"
                >
                  <FaPhone size={18} />
                  <span>Call Us Directly</span>
                </a>
                <a 
                  href={mailtoLink}
                  className="cta-button-orange w-full"
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