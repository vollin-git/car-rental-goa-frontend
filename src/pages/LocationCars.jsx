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
  AlertTriangle,
  Search,
  MousePointerClick,
  CalendarCheck,
  Key
} from 'lucide-react'

const LocationCars = () => {
  const currentPath = useLocation().pathname
  const slug = currentPath.substring(1)

  // --- HELPER FOR "HOW IT WORKS" SECTION (DRY PRINCIPLE) ---
  const getHowItWorksSection = (locationName) => ({
    title: 'How SelfCruz Works ',
    content: `SelfCruz is a car rental discovery marketplace designed for travelers visiting Goa. We help you find self-drive cars from trusted local rental partners across Goa. We do not own or operate vehicles directly. Instead, we connect customers with verified local car rental hosts across Goa, including ${locationName} and nearby transit hubs so you get better prices, more choice, and local support wherever you’re picking up your car.`,
    steps: [
      { step: '1', title: 'Search by Location', text: 'Enter your pickup location and travel dates to view cars available from trusted local hosts in that area.', icon: <Search className="w-5 h-5 text-white" /> },
      { step: '2', title: 'Compare & Choose', text: 'Browse multiple self-drive car options, compare pricing, vehicle type, transmission, and host ratings before selecting the best fit.', icon: <MousePointerClick className="w-5 h-5 text-white" /> },
      { step: '3', title: 'Secure Booking', text: 'Once you confirm, your booking request is shared with the selected host. You receive clear pickup instructions and contact details.', icon: <CalendarCheck className="w-5 h-5 text-white" /> },
      { step: '4', title: 'Pickup & Drive', text: 'Meet the host at the agreed pickup point, complete a quick verification, and start your journey.', icon: <Key className="w-5 h-5 text-white" /> },
      { step: '5', title: 'Support', text: 'SelfCruz provides platform-level assistance and escalation support to ensure a smooth rental experience.', icon: <Shield className="w-5 h-5 text-white" /> }
    ],
  })

  // --- EXPERT SEO CONTENT CONFIGURATION ---
  const locationConfig = {
    'goa-dabolim-airport-car-rental': {
      h1: 'Car Rental at Goa Dabolim Airport',
      location: 'Dabolim International Airport (GOI)',
      intro: `Looking for a car rental in Goa Dabolim Airport? SelfCruz offers a premium yet affordable selection of vehicles perfectly suited for families, couples, and solo travelers. Whether you need an affordable car rental at Dabolim Airport for a budget trip or a luxury SUV, we ensure a seamless handover after your arrival. We are the top choice for travelers seeking goa airport self drive cars.`,      
      sections: [
        {
          title: 'Affordable Self Drive Cars at Dabolim Airport',
          content: `At SelfCruz, we offer affordable car rental at Dabolim Airport with transparent, flat-rate pricing. Our diverse fleet caters to every budget, from fuel-efficient hatchbacks like the Maruti Swift to premium SUVs like the Thar.`,
          list: [
            'Economy: Alto, Kwid (Best for couples on a budget)',
            'Comfort: Baleno, i20 (Great for small families)',
            'SUV: Creta, Thar, Innova (Ideal for groups)'
          ]
        },
        // INJECTED "HOW IT WORKS"
        getHowItWorksSection('Dabolim Airport'),
        {
          title: 'Why Choose SelfCruz for Goa Airport Car Rental',
          content: `Reliability is a key when landing in a new city. 24/7 assistance and well-maintained vehicles by our rental partners. For tourists asking "is it safe to rent a car at Goa airport?", SelfCruz provides fully insured vehicles from verified rental partners.`,
          features: [
             { title: 'Instant Pickup', desc: 'Car delivered to you at mentioned pickup point' },
             { title: 'No Hidden Costs', desc: 'What you see is what you pay' },
             { title: '24/7 Support', desc: 'Instant help if you face a breakdown' }
          ]
        },
        {
          title: 'Popular Routes from Dabolim Airport',
          content: `Dabolim is centrally located, making it the perfect starting point.`,
          list: [
            'Dabolim to Calangute/Baga: ~45 km (1 hour drive)',
            'Dabolim to Palolem (South Goa): ~60 km (1.5 hours)',
            'Dabolim to Panaji: ~30 km (40 mins)'
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
        }
      ],
      faqs: [
        { q: 'What is the best car rental in Goa Dabolim Airport?', a: 'SelfCruz is top-rated for transparency. As a marketplace, we aggregate the best hosts to ensure high service quality.' },
        { q: 'Can I rent a car at Dabolim Airport without a credit card?', a: 'Yes, we accept debit cards and UPI for payments. A small refundable security deposit may be applicable.' },
        { q: 'Do you offer automatic cars for self drive at the airport?', a: 'Absolutely. We have automatic hatchbacks and SUVs perfect for relaxed driving in traffic.' },
        { q: 'What happens if my flight is delayed late at night?', a: 'Our team monitors flight statuses. For late-night arrivals, we coordinate with the host to ensure delivery.' },
        { q: 'Are fuel costs included in the rental?', a: 'No, fuel is borne by the user. We follow a "pickup-to-drop" fuel policy.' }
      ],
      relatedLinks: [
        { title: 'Car Rental in Vasco da Gama', href: '/car-rental-vasco-da-gama' },
        { title: 'Car Rental at Vasco Railway Station', href: '/car-rental-vasco-railway-station' }
      ]
    },

    'car-rental-vasco-da-gama': {
      h1: 'Car Rental in Vasco da Gama',
      location: 'Vasco Da Gama',
      intro: `Discover the historic port city of Vasco da Gama on your own terms. SelfCruz offers the most reliable self drive cars in Vasco, perfect for business travelers visiting the port or tourists exploring nearby hidden gems like Bogmalo Beach.`,
      sections: [
        {
          title: 'Select the Right Vehicle for Vasco City Driving',
          content: `Vasco has a mix of wide avenues and busy market streets. Choosing the right car enhances your experience.Our affordable car rental Vasco fleet includes compact cars perfect for narrow city streets and sturdy SUVs for longer trips out of town`,
          list: [
            'Compact Hatchbacks: Easiest to park near the Vasco Market.',
            'Sedans: Perfect for business meetings at the Mormugao Port Trust.',
            'SUVs: Ideal if you plan to drive from Vasco to distant beaches.'
          ]
        },
        // INJECTED "HOW IT WORKS"
        getHowItWorksSection('Vasco da Gama'),
        {
          title: 'Affordable Car Rental Vasco: Pricing & Plans',
          content: `We offer flexible packages tailored to your needs. Whether you need a car for a few hours to run errands or for a week-long vacation, our self drive cars in Vasco come with transparent pricing.`,
          features: [
             { title: 'Daily Rentals', desc: ' 9am to 9am one rental cycle' },
             { title: 'Special discounts', desc: 'Special discounts for you during festive season' },
             { title: 'Zero Maintenance', desc: 'Our verified rental partners handle all service costs' }
          ]
        },
        {
          title: 'Popular Routes from Vasco da Gama',
          content: `Vasco is strategically placed between the airport and the harbor.`,
          list: [
            'Vasco to Bogmalo Beach: ~5 km (15 mins)',
            'Vasco to Colva Beach: ~25 km (45 mins)',
            'Vasco to Old Goa Churches: ~28 km (45 mins)'
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
        }
      ],

      faqs: [
        { q: 'Where can I pick up self drive cars in Vasco?', a: 'We offer pickup points near the KTC Bus Stand, Railway Station, and city center .' },
        { q: 'Is it hard to find parking in Vasco?', a: 'Parking is generally available, but we recommend using paid parking lots for safety near the market areas.' },
        { q: 'Can I book a car in Vasco and drop it at Goa Airport?', a: 'Yes, we specialize in one-way rentals. You can pick up in Vasco city and drop off at Dabolim Airport.' },
        { q: 'What documents are required?', a: 'A valid driving license and an original ID proof (Aadhar/Voter ID).' },
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
      intro: `Arriving in Goa by train? Choose a self drive car Vasco Railway Station pickup and drive off the moment you step out of the platform. SelfCruz offers the most convenient car hire near Vasco Station, serving travelers arriving on the Goa Express, Vasco Da Gama Express, and other major trains.`,
      sections: [
        {
          title: 'Why Rent Immediately at the Station?',
          content: `Vasco Station (VSG) is the terminus for many major trains. Renting a self-drive car is cheaper and gives you mobility for your entire trip.`,
          list: [
            'Cost Effective: Save on the expensive transfer to your hotel.',
            'Convenience: Load your luggage once into your rental car.',
            'Freedom: Stop for food or sightseeing on the way to your hotel.'
          ]
        },
        // INJECTED "HOW IT WORKS"
        getHowItWorksSection('Vasco Railway Station'),
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
          title: 'Popular Routes from Vasco Station',
          content: `Start your journey directly from the railhead.`,
          list: [
            'Station to Panjim: ~30 km (45 mins)',
            'Station to South Goa (Majorda/Betalbatim): ~20 km (30 mins)',
            'Station to Dudhsagar Waterfalls: ~60 km (1.5 hours)'
          ]
        },
        {
          title: 'Train Delay & Pickup Protocols',
          content: `Trains to Goa can often be delayed. We track your PNR status.`,
          tips: [
            'Delay Buffer: We hold your booking for 2 hours post scheduled arrival if delayed.',
            'Meeting Point: Our executive meets you at the designated spot.',
            'Night Arrivals: We operate 24/7, so early morning train arrivals are no problem.'
          ]
        }   
      ],
      faqs: [
        { q: 'How do I find my car at Vasco Railway Station?', a: 'Our executive will contact you 30 minutes before arrival and meet you at the designated spot.' },
        { q: 'Is there a cancellation fee if my train is cancelled?', a: 'We offer free cancellation up to 24 hours before booking. For train cancellations, proof may be required for a full refund.' },
        { q: 'Can I get a self drive car Vasco Railway Station with a carrier?', a: 'Yes, select SUVs like the Innova come with roof carriers for extra luggage. Request this in advance.' },
        { q: 'Is the road from Vasco Station to North Goa good?', a: 'Yes, the NH66 highway is excellent. It takes about 1 hour to reach Baga/Calangute from the station.' },
        { q: 'Do I need an International Driving Permit (IDP)?', a: 'International tourists need a valid IDP along with their original license.' }
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
          
          <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight'>
            {locationData.h1}
          </h1>

          <div className='bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-12'>
             <p className='text-lg md:text-xl text-gray-800 leading-relaxed'>
               {locationData.intro}
             </p>
          </div>

          <div className='space-y-16'>
            {locationData.sections.map((section, index) => (
              <section key={index} className="relative">
                <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2'>
                  {section.title.includes('How SelfCruz Works') ? <Shield className="text-green-600" /> : <Car className="text-blue-600" />}
                  {section.title}
                </h2>
                
                <p className='text-gray-700 leading-relaxed mb-8 text-lg'>
                  {section.content}
                </p>

                {/* --- RENDER STEPS (Modified for How It Works) --- */}
                {section.steps && (
                  <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8'>
                    {section.steps.map((item, sIndex) => (
                      <div key={sIndex} className='flex flex-col items-center text-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all'>
                        <div className='w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-3 shadow-sm'>
                          {item.icon ? item.icon : item.step}
                        </div>
                        {item.title && <h4 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h4>}
                        <p className='text-xs text-gray-600 leading-snug'>{item.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* --- RENDER DISCLAIMER / TRUST BOX (New) --- */}
                {section.disclaimer && (
                  <div className='bg-green-50 border border-green-200 rounded-xl p-6 mt-6'>
                    <div className="mb-3">
                      <h4 className='font-bold text-green-800 mb-1'>{section.disclaimer.title}</h4>
                      <p className='text-green-900 text-sm leading-relaxed'>{section.disclaimer.text}</p>
                    </div>
                    <div className='flex gap-3 items-start bg-white/60 p-3 rounded-lg border border-green-100'>
                      <span className='text-lg'>📌</span>
                      <p className='text-xs text-gray-600 italic font-medium leading-relaxed'>
                        {section.disclaimer.note}
                      </p>
                    </div>
                  </div>
                )}

                {/* --- RENDER FEATURES GRID --- */}
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

                {/* --- RENDER TIPS BOX --- */}
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

                {/* --- RENDER STANDARD LISTS --- */}
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
          <div className="my-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Book your self drive car now at {locationData.location} and get the best rates with zero hidden fees.</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-md"
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