'use client'
import { motion } from 'framer-motion';
import Image from 'next/image'; // <-- Import Image
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

// Updated component to accept an 'imgSrc' prop
function TeamMemberCard({ name, title, imgSrc, onAnimate }) {
  return (
    <motion.div
      className="glassmorphism p-6 rounded-lg text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={onAnimate}
      transition={{ duration: 0.5 }}
    >
      {/* --- UPDATED IMAGE LOADER --- */}
      <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-2 border-iw-accent-orange/50">
        <Image
          src={imgSrc}
          alt={`Profile photo of ${name}`}
          width={128}  // Corresponds to w-32
          height={128} // Corresponds to h-32
          className="object-cover w-full h-full"
        />
      </div>
      
      <h4 className="text-xl font-bold text-iw-text-primary mb-1">{name}</h4>
      <p className="text-iw-accent-orange mb-4">{title}</p>
      
      {/* Placeholder Contact Icons */}
      <div className="flex justify-center space-x-4 text-iw-text-secondary">
        <a href="mailto:placeholder@islandwheels.com" className="hover:text-iw-accent-orange transition-colors" aria-label="Email">
          <FaEnvelope size={20} />
        </a>
        <a href="tel:+94770000000" className="hover:text-iw-accent-orange transition-colors" aria-label="Phone">
          <FaPhone size={20} />
        </a>
        <a href="#" className="hover:text-iw-accent-orange transition-colors" aria-label="LinkedIn">
          <FaLinkedin size={20} />
        </a>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <motion.div 
      className="bg-iw-secondary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-main">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center mb-12 text-glow">About Island Wheels</h1>
          
          <motion.div 
            className="space-y-8 text-lg text-iw-text-secondary leading-relaxed glassmorphism p-8 md:p-12 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* ... (Our Story, Mission, What Makes Us Different sections are unchanged) ... */}
            <h3 className="text-3xl font-semibold text-iw-accent-orange">Our Story</h3>
            <p>
              Island Wheels was founded by car enthusiasts, for car enthusiasts. We were tired of the limited local market and the complexities of importing vehicles ourselves. We saw an opportunity to build a transparent, trustworthy bridge between the world's best car markets—Japan and the UK—and discerning buyers in Sri Lanka.
            </p>

            <h3 className="text-3xl font-semibold text-iw-accent-orange">Our Mission</h3>
            <p>
              Our mission is simple: to be Sri Lanka's most trusted source for premium imported vehicles. We achieve this through an unwavering commitment to quality, transparency, and a full-service, hassle-free customer experience. We don't just sell cars; we build relationships and deliver on promises.
            </p>

            <h3 className="text-3xl font-semibold text-iw-accent-orange">What Makes Us Different?</h3>
            
            <ul className="list-disc list-inside space-y-4 marker:text-iw-accent-orange">
              <li>
                <strong>Unmatched Expertise:</strong> Our team lives and breathes cars. We understand the nuances of the Japanese auction system and the quality of the UK market. We know what to look for and, more importantly, what to avoid.
              </li>
              <li>
                <strong>Rigorous Inspection Process:</strong> We don't rely on photos alone. We have dedicated partners on the ground in Japan and the UK who perform detailed, multi-point inspections before we ever place a bid.
              </li>
              <li>
                <strong>Total Transparency:</strong> You get what you see. We provide original auction sheets, full inspection reports, and a clear, itemized breakdown of all costs. No hidden fees, no surprises.
              </li>
              <li>
                <strong>End-to-End Service:</strong> From your first inquiry to the moment we hand you the keys, we manage everything. Sourcing, bidding, shipping, customs, compliance, and registration—we handle it all.
              </li>
            </ul>
          </motion.div>

          {/* --- UPDATED TEAM SECTION --- */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TeamMemberCard 
                name="Sajee Lorenzo" 
                title="Founder / Lead Importer"
                imgSrc="/team/sajee.png" // <-- Added image path
                onAnimate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
              />
              <TeamMemberCard 
                name="Kasun Kalhara" 
                title="Operations Manager"
                imgSrc="/team/kasun.png" // <-- Added image path
                onAnimate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}
              />
              <TeamMemberCard 
                name="Hasitha Athukorala" 
                title="Logistics & Compliance"
                imgSrc="/team/hasitha.png" // <-- Added image path
                onAnimate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}
              />
              <TeamMemberCard 
              name="Kaushan Dissanayake" 
              title="UK Operations"
              imgSrc="/team/hasitha.png" // <-- Added image path
              onAnimate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}
            />
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}