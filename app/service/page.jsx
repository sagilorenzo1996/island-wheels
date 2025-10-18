'use client'
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link for CTAs
import { FiPhoneCall, FiSearch } from 'react-icons/fi'; // Import icons

export default function ServicePage() {
  
  // Updated steps based on your new information
  const steps = [
    {
      step: 1,
      title: "Inquiry & Consultation",
      description: "Contact us via phone or social media with your desired vehicle. We'll provide a transparent maximum price. If we source your vehicle for a more convenient price, that saving is passed directly on to you.",
      cta: {
        href: '/contact',
        label: 'Inquire Now',
        icon: FiPhoneCall,
        style: 'cta-button-orange' // This class now handles the icon layout
      }
    },
    {
      step: 2,
      title: "Agreement & Sourcing",
      description: "We'll meet in person or over the phone to discuss your requirements extensively. Once the model is confirmed, an advance is paid. Our partners abroad will then provide detailed images and prices from auctions and dealerships.",
    },
    {
      step: 3,
      title: "Purchase & Shipping (LC)",
      description: "Once the right vehicle is sourced and you give the green light, it's bought and ready to be shipped. A Letter of Credit (LC) is then opened via our partner banks for the total cost, including shipping and insurance.",
    },
    {
      step: 4,
      title: "Updates & Documentation",
      description: "You're never in the dark. We provide continuous updates as your vehicle makes its journey. During this time, our team meticulously prepares all necessary documentation to pay clearance taxes.",
    },
    {
      step: 5,
      title: "Clearance & Registration",
      description: "As soon as your vehicle arrives in Sri Lanka, our expert team manages the entire customs clearance process and submits all paperwork for RMV registration.",
    },
    {
      step: 6,
      title: "Your Vehicle, Delivered",
      description: "After everything is complete, we deliver your fully registered and detailed vehicle directly to your doorstep or arrange a convenient pickup. The keys are yours!",
      cta: {
        href: '/cars',
        label: 'Browse Current Stock',
        icon: FiSearch,
        style: 'cta-button-outline' // This class now handles the icon layout
      }
    }
  ];

  return (
    <motion.div 
      className="bg-iw-secondary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-main">
        <h1 className="text-center mb-4 text-glow">How to Import</h1>
        <p className="text-lg text-center text-iw-text-secondary max-w-3xl mx-auto mb-12">
          Our 'On-Demand' import service is designed to be a transparent, full-service, and hassle-free experience. We handle every step, from the auction in Japan to your driveway in Sri Lanka.
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((item, index) => (
            <motion.div 
              key={item.step} 
              className="flex flex-col md:flex-row items-start gap-6 p-6 glassmorphism rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-iw-accent-orange text-iw-primary flex items-center justify-center rounded-full shadow-lg shadow-iw-accent-orange/30">
                <span className="text-3xl font-bold">{item.step}</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-iw-accent-orange mb-2">{item.title}</h3>
                <p className="text-iw-text-secondary leading-relaxed">{item.description}</p>
                
                {/* --- RENDER CTA IF IT EXISTS --- */}
                {item.cta && (
                  <div className="mt-6">
                    <Link
                      href={item.cta.href}
                      className={item.cta.style} // <-- Simplified className
                    >
                      <item.cta.icon size={18} />
                      <span>{item.cta.label}</span>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}