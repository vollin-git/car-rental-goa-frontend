import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Hero from '../components/Hero'
import { 
  CheckCircle, 
  MapPin, 
  Shield, 
  Info, 
  Car, 
  Fuel, 
  AlertTriangle 
} from 'lucide-react'

const LocationCars = () => {
  const currentPath = useLocation().pathname
  const slug = currentPath.substring(1)

  // --- EXPERT SEO CONTENT CONFIGURATION ---
  const locationConfig = {
    'goa-dabolim-airport-car-rental': {
      h1: 'Car Rental at Goa Dabolim Airport',
      location: 'Dabolim International Airport (GOI)',
      intro: `Landing in Goa and looking for the ultimate freedom? SelfCruz provides the best car rental in Goa Dabolim Airport, ensuring your vacation starts the moment you exit the terminal. We eliminate the hassle waiting for shuttle buses. Whether you are a solo backpacker needing a compact car or a large family requiring a 7-seater, our fleet of self drive cars in Dabolim is ready for immediate handover.`,
      sections: [
        {
          title: 'Affordable Self Drive Cars at Dabolim Airport',
          content: `Travelers often worry about high airport surcharges. At SelfCruz, we offer affordable car rental at Dabolim Airport with transparent, flat-rate pricing. Our diverse fleet caters to every budget. From fuel-efficient hatchbacks like the Maruti Swift to premium sedans and rugged SUVs like the Thar or Creta, we have it all. If you are searching for "cheap car rental Goa airport," our economy range offers the lowest cost-per-kilometer value in the state.`,
          list: [
            'Economy: Alto, Kwid (Best for couples on a budget)',
            'Comfort: Baleno, i20 (Great for small families)',
            'SUV: Creta, Thar, Innova (Ideal for groups and rough roads)',
            'Luxury: Automatic transmission options available'
          ]
        },
        {
          title: 'Seamless Airport Pickup & Drop Process',
          content: `We have streamlined the process for goa airport self drive cars. Unlike off-site rental agencies that require a shuttle ride, we arrange delivery as close to the arrival gate as permitted.`,
          steps: [
            { step: '1', text: 'Book online before you fly to lock in the best rates.' },
            { step: '2', text: 'Share your flight details so we can track delays.' },
            { step: '3', text: 'Contact with our Host after arrival' },
            { step: '4', text: 'Meet our executive at the airport pickup zone.' }
          ]
        },
        {
          title: 'Why Choose SelfCruz for Goa Airport Car Rental',
          content: `Reliability is our hallmark. We offer 24/7 roadside assistance and well-maintained vehicles. For tourists asking "is it safe to rent a car at Goa airport?", SelfCruz provides fully insured vehicles with All India Permits.`,
          features: [
             { title: 'No Hidden Charges', desc: 'Pricing includes taxes and insurance' },
             { title: 'Hygiene Promise', desc: 'Interiors sanitized before every trip' },
             { title: '24/7 Support', desc: 'Instant help if you face a breakdown' }
          ]
        },
        {
          title: 'Essential Driving Tips for Goa Tourists',
          content: `Driving in Goa is a pleasure, but it comes with rules. Dabolim is connected to the North and South via highways, but coastal roads can be narrow.`,
          tips: [
            'Speed Limit: Stick to 40-60 km/h on internal roads. Cameras are active.',
            'Documents: Always carry your digital license and our rental agreement.',
            'Alcohol: Do not drink and drive. Police checks are frequent near tourist hubs.',
            'Fuel Policy: Cars are provided with a minimal fuel level; return with the same.'
          ]
        },
        {
          title: 'Popular Routes from Dabolim Airport',
          content: `Dabolim acts as the central hub for Goa.`,
          list: [
            'Dabolim → Calangute/Baga (North Goa): 40km | ~60 mins via NH66',
            'Dabolim → Palolem/Agonda (South Goa): 60km | ~90 mins via scenic coastal road',
            'Dabolim → Panjim (Capital): 28km | ~40 mins via Atal Setu Bridge'
          ]
        }
      ],
      faqs: [
        { q: 'What is the best car rental in Goa Dabolim Airport?', a: 'SelfCruz is top-rated for vehicle condition and customer support. We prioritize safety and transparency over quick profits.' },
        { q: 'Can I rent a car at Dabolim Airport without a credit card?', a: 'Yes, we accept debit cards and UPI for payments. A small refundable security deposit may be applicable.' },
        { q: 'Do you offer automatic cars for self drive at the airport?', a: 'Absolutely. We have automatic hatchbacks and SUVs perfect for relaxed driving in traffic.' },
        { q: 'What happens if my flight is delayed late at night?', a: 'Our team monitors flight statuses. For late-night arrivals (11 PM - 6 AM), a small night delivery charge may apply.' },
        { q: 'Are fuel costs included in the rental?', a: 'No, fuel is borne by the user. We follow a "pickup-to-drop" fuel policy (return the car with the same fuel level).' }
      ],
      relatedLinks: [
        { title: 'Car Rental in Vasco da Gama', href: '/car-rental-vasco-da-gama' },
        { title: 'Car Rental at Vasco Railway Station', href: '/car-rental-vasco-railway-station' }
      ]
    },

    'car-rental-vasco-da-gama': {
      h1: 'Car Rental in Vasco da Gama',
      location: 'Vasco Da Gama',
      intro: `Discover the historic port city of Vasco da Gama on your own terms. SelfCruz offers the most reliable self drive cars in Vasco, perfect for business travelers visiting the port or tourists exploring nearby hidden gems like Bogmalo and Hollant Beach. Why depend on erratic public transport when you can have an affordable car rental Vasco delivered right to your hotel or guest house?`,
      sections: [
        {
          title: 'Select the Right Vehicle for Vasco City Driving',
          content: `Vasco has a mix of wide avenues and busy market streets. Choosing the right car enhances your experience. We are the leaders in "best car rental in Vasco Goa" because of our versatile fleet.`,
          list: [
            'Compact Hatchbacks (Celerio, Swift): Easiest to park near the Vasco Market or Railway area.',
            'Sedans (Dzire, Etios): Perfect for business meetings at the Mormugao Port Trust (MPT).',
            'SUVs (Thar, Scorpio): Ideal if you plan to drive from Vasco to waterfalls or distant beaches.'
          ]
        },
        {
          title: 'Affordable Car Rental Vasco: Pricing & Plans',
          content: `We offer flexible packages tailored to your needs. Whether you need a car for a few hours to run errands or for a week-long vacation, our self drive cars in Vasco come with unlimited kilometer options on select models.`,
          features: [
             { title: 'Hourly Rentals', desc: 'Pay only for the time you use' },
             { title: 'Long Term', desc: 'Special discounts for 7+ day bookings' },
             { title: 'Zero Maintenance', desc: 'We handle all service costs' }
          ]
        },
        {
          title: 'Driving & Parking in Vasco da Gama',
          content: `Vasco is less congested than Panjim but has specific regulations.`,
          tips: [
            'Parking: Use designated pay-parking zones near the Municipal Market.',
            'One-Ways: Be aware of one-way streets near the Swatantra Path.',
            'Traffic: Peak hours (9 AM - 11 AM) can be busy near the Port entrance.'
          ]
        },
        {
          title: 'Popular Routes from Vasco da Gama',
          content: `Vasco is your gateway to both the airport and the beach.`,
          list: [
            'Vasco → Bogmalo Beach: 5km | ~10 mins (Great for sunset)',
            'Vasco → Japanese Garden: 3km | ~10 mins (Scenic view of the harbor)',
            'Vasco → Old Goa Churches: 25km | ~40 mins'
          ]
        }
      ],
      faqs: [
        { q: 'Where can I pick up self drive cars in Vasco?', a: 'We offer pickup points near the KTC Bus Stand, Railway Station, and city center hotels.' },
        { q: 'Is it hard to find parking in Vasco?', a: 'Parking is generally available, but we recommend using paid parking lots for safety near the market areas.' },
        { q: 'Can I book a car in Vasco and drop it at Goa Airport?', a: 'Yes, we specialize in one-way rentals. You can pick up in Vasco city and drop off at Dabolim Airport.' },
        { q: 'What documents are required for locals?', a: 'Locals need a valid driving license and Aadhar card. No distinct rules for locals vs tourists.' },
        { q: 'Do you provide car accessories?', a: 'Phone mounts and charging cables are included in most premium vehicles.' }
      ],
      relatedLinks: [
        { title: 'Goa Dabolim Airport Car Rental', href: '/goa-dabolim-airport-car-rental' },
        { title: 'Car Rental at Vasco Railway Station', href: '/car-rental-vasco-railway-station' }
      ]
    },

    'car-rental-vasco-railway-station': {
      h1: 'Car Rental Near Vasco Railway Station',
      location: 'Vasco Railway Station',
      intro: `Arriving in Goa by train? Make your journey seamless with a self drive car Vasco Railway Station pickup. SelfCruz ensures that a sanitized, fully-fueled car is waiting for you as you step off the platform. Avoid the chaos of auto-rickshaw bargaining and start your holiday immediately. We are the premier choice for car hire near Vasco Station for passengers on the Goa Express and Vasco Da Gama Express.`,
      sections: [
        {
          title: 'Why Rent Immediately at the Station?',
          content: `Vasco Station (VSG) is the terminus for many major trains. It is located about 30km from Panjim and 45 mins from major beaches. Taking a taxi can cost upwards of ₹1500. Renting a self-drive car is not only cheaper but gives you mobility for your entire trip.`,
          list: [
            'Cost Effective: Save on the expensive transfer to your hotel.',
            'Convenience: Load your luggage once into your rental car.',
            'Freedom: Stop for food or sightseeing on the way to your hotel.'
          ]
        },
        {
          title: 'Our Fleet for Railway Passengers',
          content: `We understand train travel often involves heavy luggage. Our fleet at the station is curated for comfort.`,
          features: [
             { title: 'Boot Space', desc: 'Sedans & SUVs with large luggage capacity' },
             { title: 'Family Cars', desc: '7-seaters like Ertiga available' },
             { title: 'AC Guaranteed', desc: 'Powerful AC for the humid Goa weather' }
          ]
        },
        {
          title: 'Train Delay & Pickup Protocols',
          content: `Trains to Goa can often be delayed. We track your PNR status.`,
          tips: [
            'Delay Buffer: We hold your booking for 2 hours post scheduled arrival if delayed.',
            'Meeting Point: Our executive meets you at the main exit with a placard.',
            'Night Arrivals: We operate 24/7, so early morning train arrivals are no problem.'
          ]
        },
        {
          title: 'Popular Routes from Vasco Station',
          content: `Start your adventure directly from the railhead.`,
          list: [
            'Station → Colva/Benaulim (South Goa Hub): 25km | ~40 mins',
            'Station → Panjim/Miramar: 30km | ~45 mins',
            'Station → Dudhsagar Waterfalls: 60km | ~1.5 hours'
          ]
        }
      ],
      faqs: [
        { q: 'How do I find my car at Vasco Railway Station?', a: 'Our executive will contact you 30 minutes before arrival and meet you at the main exit parking area.' },
        { q: 'Is there a cancellation fee if my train is cancelled?', a: 'We offer free cancellation up to 24 hours before booking. For train cancellations, proof may be required for a full refund.' },
        { q: 'Can I get a self drive car Vasco Railway Station with a carrier?', a: 'Yes, select SUVs like the Innova come with roof carriers for extra luggage. Request this in advance.' },
        { q: 'Is the road from Vasco Station to North Goa good?', a: 'Yes, the NH66 highway is excellent. It takes about 1 hour to reach Baga/Calangute from the station.' },
        { q: 'Do I need an International Driving Permit (IDP)?', a: 'International tourists need a valid IDP along with their original license. Indian tourists just need a valid DL.' }
      ],
      relatedLinks: [
        { title: 'Goa Dabolim Airport Car Rental', href: '/goa-dabolim-airport-car-rental' },
        { title: 'Car Rental in Vasco da Gama', href: '/car-rental-vasco-da-gama' }
      ]
    }
  }

  const locationData = locationConfig[slug]

  if (!locationData) {
    return (
      <div className='flex flex-col items-center justify-center py-32'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>Location not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Return to Home</Link>
      </div>
    )
  }

  return (
    <div>
      <Hero prefilledLocation={locationData.location} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='px-6 md:px-16 lg:px-24 xl:px-32 py-12 bg-white'
      >
        <div className='max-w-5xl mx-auto'>
          
          {/* SEO Header */}
          <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight'>
            {locationData.h1}
          </h1>

          {/* Intro */}
          <div className='bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-12'>
             <p className='text-lg md:text-xl text-gray-800 leading-relaxed'>
               {locationData.intro}
             </p>
          </div>

          <div className='space-y-16'>
            {locationData.sections.map((section, index) => (
              <section key={index} className="relative">
                <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2'>
                  {/* Decorative Icon based on section index to add visual flair */}
                  {index === 0 && <Car className="text-blue-600" />}
                  {index === 1 && <Info className="text-blue-600" />}
                  {index === 2 && <Shield className="text-blue-600" />}
                  {index === 3 && <MapPin className="text-blue-600" />}
                  {section.title}
                </h2>
                
                <p className='text-gray-700 leading-relaxed mb-6 text-lg'>
                  {section.content}
                </p>

                {/* Render Features Grid */}
                {section.features && (
                  <div className='grid md:grid-cols-3 gap-6 mb-6'>
                    {section.features.map((feature, fIndex) => (
                      <div key={fIndex} className='p-5 bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md transition-all'>
                        <div className="flex items-center gap-2 mb-2 text-blue-700">
                           <CheckCircle className="w-5 h-5" />
                           <strong className='text-gray-900'>{feature.title}</strong>
                        </div>
                        <div className='text-sm text-gray-600'>{feature.desc}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Render Steps (Process) */}
                {section.steps && (
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
                    {section.steps.map((item, sIndex) => (
                      <div key={sIndex} className='flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg'>
                        <div className='w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-3'>
                          {item.step}
                        </div>
                        <p className='text-sm font-medium text-gray-800'>{item.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Render Tips Box (High value for SEO) */}
                {section.tips && (
                  <div className='bg-yellow-50 border border-yellow-200 rounded-xl p-6'>
                    <div className='flex items-center gap-2 mb-4 text-yellow-800 font-semibold'>
                      <AlertTriangle className="w-5 h-5" />
                      <span>Important Info</span>
                    </div>
                    <ul className='space-y-3'>
                      {section.tips.map((tip, tIndex) => (
                        <li key={tIndex} className='flex items-start gap-3 text-gray-800 text-sm md:text-base'>
                          <span className="mt-1.5 w-1.5 h-1.5 bg-yellow-600 rounded-full flex-shrink-0"></span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Render Standard Lists */}
                {section.list && (
                  <ul className='grid md:grid-cols-2 gap-3 mb-4'>
                    {section.list.map((item, lIndex) => (
                      <li key={lIndex} className='flex items-start gap-3 text-gray-700 p-2 bg-gray-50 rounded'>
                        <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* CTA Section */}
          <div className="my-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Book your self drive car now at {locationData.location} and get the best rates with zero hidden fees.</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Check Availability
            </button>
          </div>

          {/* FAQs */}
          <section className='mt-16 border-t pt-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>Frequently Asked Questions</h2>
            <div className='space-y-4 max-w-4xl mx-auto'>
              {locationData.faqs.map((faq, index) => (
                <details key={index} className='group bg-white border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-blue-300'>
                  <summary className='flex justify-between items-center p-5 cursor-pointer font-semibold text-gray-900 group-open:bg-gray-50'>
                    <span className="text-lg">{faq.q}</span>
                    <span className="transition-transform group-open:rotate-180 text-blue-500">
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className='p-5 pt-2 text-gray-700 leading-relaxed bg-gray-50 border-t border-gray-100'>
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Footer Links */}
          <div className='mt-16 pt-8 border-t border-gray-200'>
            <h3 className='text-lg font-semibold mb-4 text-gray-500 uppercase tracking-wider text-sm'>Nearby Locations</h3>
            <div className='flex flex-wrap gap-4'>
              {locationData.relatedLinks.map((link, i) => (
                <Link 
                  key={i} 
                  to={link.href} 
                  className='text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-200 hover:decoration-blue-600 underline-offset-4 transition-colors'
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default LocationCars