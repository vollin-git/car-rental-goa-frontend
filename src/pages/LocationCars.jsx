import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Hero from '../components/Hero'
import { 
  CheckCircle, 
  MapPin,
  ChevronRight, 
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
      h1: 'Self Drive Car Rental at Dabolim Airport (GOI)',
      location: 'Dabolim International Airport (GOI)',
      meta: {
      title: "Self Drive Car Rental at Dabolim Airport (GOI)",
      description: "Book self-drive car rental at Dabolim Airport (GOI) with instant booking, transparent pricing and multiple vehicle options across Goa."
          },
        intro: (
            <>
              Looking to rent a self drive car at Goa Airport (Dabolim - GOI)? SelfCruz offers a premium yet affordable selection of vehicles, including the popular <Link to="/thar-on-rent-in-goa" className="text-blue-600 hover:underline font-medium">Mahindra Thar on rent</Link>, perfectly suited for families, couples, and solo travelers. Book your self drive car rental near Dabolim Airport in advance and enjoy smooth pickup from a designated point close to the terminal. We are the top choice for travelers seeking Goa airport self drive cars.
            </>
          ),      
          sections: [
       {
      title: "Self Drive Car Pickup Near Goa Airport (GOI)",
      content: `We provide coordinated car rental near Dabolim Airport so you avoid waiting after your arrival. Our verified local hosts arrange smooth vehicle handover near the airport area.`,
      list: [
        "Self drive cars near Goa Airport",
        "Automatic and manual options",
        // Added a specific link in the list for better SEO variety
        (
          <>SUVs, <Link to="/thar-on-rent-in-goa" className="text-blue-600 hover:underline font-medium">Thar</Link>, Creta, Innova available</>
        ),
        "Daily and multi-day rentals"
      ],
    },
      {
          
  title: "Why Rent a Self Drive Car at Dabolim Airport?",
  content: `Arriving at Goa International Airport (Dabolim) and arranging transport afterward can slow down the start of your trip. Booking a self drive car at the airport allows you to begin your journey immediately with complete flexibility and privacy.`,
  list: [
    "Start Your Trip Immediately: Pick up your car near the airport and head straight to your hotel or destination.",
    "Travel at Your Own Pace: Explore South Goa beaches like Colva and Benaulim or drive to North Goa hotspots without fixed schedules.",
    "Comfort for Families & Groups: Ideal when traveling with luggage or in a group.",
    "Flexible Drop-Off Options: Return the vehicle at the airport before departure for a smooth exit.",
    "Better Control of Your Schedule: Plan day trips, sightseeing, and beach visits without relying on fixed transport timings."
  ]

        
      },

        // INJECTED "HOW IT WORKS"
        getHowItWorksSection('Dabolim Airport'),
      {
      title: 'Why Choose SelfCruz for Goa Airport Car Rental',
      // Added the Vasco link here for contextual geographical linking
      content: (
        <>
          Searching for the best car rental near Dabolim Airport? SelfCruz connects you with verified local car owners providing <Link to="/car-rental-vasco-da-gama" className="text-blue-600 hover:underline font-medium">car rental in Vasco</Link> and airport zones.
        </>
      ),
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
        },
       {
      title: "About Goa Dabolim Airport (GOI)",
      content: (
        <>
          Goa Dabolim Airport (GOI) is one of the two main airports serving Goa and is located near <Link to="/car-rental-vasco-da-gama" className="text-blue-600 hover:underline font-medium">Vasco da Gama</Link> in South Goa. It is operated as a civil enclave within a naval airbase and handles both domestic and international flights.
          <br /><br />
          The airport is well connected to major Indian cities like Mumbai, Delhi, Bangalore, and Hyderabad, along with seasonal international charter flights. Because of its central location, Dabolim Airport provides easy access to both North Goa and South Goa beaches.
          <br /><br />
          Distance from Dabolim Airport:
          <br />
          • Panaji – approx. 30 km
          <br />
          • Calangute/Baga – approx. 45 km
          <br />
          • Colva – approx. 25 km
          <br />
          • Palolem – approx. 60 km
          <br /><br />
        </>
      )
    },
      ],
     faqs: [
  {
    q: "Is self drive car rental available at Goa Dabolim Airport?",
    a: "Yes, it is. After you book, our team coordinates the pickup at a designated spot close to Dabolim Airport. We share clear instructions before your arrival so the handover is smooth and hassle-free."
  },
  {
    q: "How do I pick up the car after landing at Dabolim Airport?",
    a: "Once you land and collect your luggage, you can head to the pre-shared pickup point near the airport. Our executive will guide you over call or WhatsApp. The handover usually takes just a few minutes after document verification."
  },
  {
    q: "What is the price of self drive car rental at Goa Airport?",
    a: "The price depends on the car category, travel dates, and demand. Hatchbacks are the most budget-friendly, while SUVs and premium cars cost more, especially during peak season like December and long weekends."
  },
  {
    q: "Are automatic cars available at Dabolim Airport?",
    a: "Yes. Both automatic and manual transmission cars are available. If you prefer automatic for easy driving in city traffic or coastal roads, you can filter and choose that option while booking."
  },
  {
    q: "Is airport pickup available directly outside the arrival gate?",
    a: "For operational reasons, vehicles are not handed over directly at the arrival gate. Instead, we coordinate pickup at a nearby designated location to ensure a smooth and compliant process."
  },
  {
    q: "What documents are required to rent a self drive car at Goa Airport?",
    a: "You need a valid driving license and a government-issued ID. A refundable security deposit is required based on the car selected. International visitors must carry an International Driving Permit along with their original license."
  },
  {
    q: "Is it better to rent a car from the airport or book later in the city?",
    a: "If you’re staying for more than a day or planning to explore multiple beaches, renting from the airport is usually more convenient and cost-effective than arranging taxis repeatedly."
  },
  {
    q: "Can I drive the rental car anywhere in Goa?",
    a: "Yes, you can explore both North and South Goa freely. Many travelers pick up from the airport and drive directly to popular areas like Calangute, Baga, Panaji, or Palolem."
  },
  {
    q: "What if my flight is delayed?",
    a: "Flight delays happen, and we understand that. Inform us about the delay, and we’ll coordinate your pickup accordingly. Clear communication helps us manage your booking smoothly."
  },
  {
    q: "Is security deposit refundable?",
    a: "Yes, the security deposit is fully refundable after the vehicle is returned in proper condition and post inspection. The refund timeline is shared at the time of booking."
  }
],
       relatedLinks: [
    {title:  'Thar on Rent in Goa',href:'/thar-on-rent-in-goa'},
    { title: 'Mopa Airport Car Rental', href: '/self-drive-car-rental-at-mopa-airport-goa'},
    { title: 'Goa Dabolim Airport Car Rental', href: '/goa-dabolim-airport-car-rental' },
    { title: 'Car Rental in Vasco da Gama', href: '/car-rental-vasco-da-gama' },
    { title: 'Car Rental in Panjim', href: '/self-drive-car-rental-at-panjim' },
    { title: 'Car Rental at Vasco Railway Station',href:'/car-rental-vasco-railway-station'},
    {title:  'Car Rental at Madgao Railway Station', href:'/self-drive-car-rental-at-madgaon-railway-station-goa'}
  ]
    },

    'car-rental-vasco-da-gama': {
      h1: 'Self Drive Car Rental in Vasco da Gama, Goa',
      location: 'Vasco Da Gama',
      meta:{
      title: "Self Drive Car Rental in Vasco da Gama, Goa",
      description: "Book self drive car rental in Vasco da Gama with flexible pickup, transparent pricing and verified vehicles for your Goa trip."
      },
      intro:(
      <>
      Looking for a self drive car rental in Vasco da Gama, Goa? SelfCruz offers affordable and reliable self drive cars in Vasco for tourists, business travelers, and locals. Given its proximity to the coast, many travelers arriving at the nearby <Link to="/goa-dabolim-airport-car-rental" className="text-blue-600 hover:underline font-medium">Goa Dabolim Airport (GOI)</Link> choose Vasco as their primary pickup point. Whether you're visiting Mormugao Port, heading to Bogmalo Beach, or planning an extensive road trip to North or South Goa, renting a car in Vasco gives you complete freedom and flexibility. Book your self drive car rental in Vasco da Gama in advance to ensure your vehicle is ready for a seamless handover the moment you arrive in the city.
    </>
            ),      
        sections: [
         {
          title: "Why Rent a Self Drive Car in Vasco da Gama?",
          content: `Vasco da Gama is one of the most important commercial hubs in South Goa. With limited public transport and high taxi fares, renting a self drive car is often the most practical option.`,
          list: [
            "Freedom to explore Bogmalo, Colva, and South Goa beaches",
            "Cost-effective alternative to daily taxi bookings",
            "Ideal for business travelers visiting Mormugao Port Trust",
            "Flexible travel between Airport, Railway Station and City"
          ]
          },
        {
      title: 'Select the Right Vehicle for Vasco City & Coastal Driving',
      content: (
        <>
          Vasco’s geography is unique—it transitions from wide, multi-lane port roads to the winding, narrow coastal paths leading to hidden South Goa gems. Choosing the right vehicle is essential for comfort. If you are looking for a rugged, head-turning experience to explore the cliffs of Dona Paula or the sands of South Goa, we highly recommend booking a <Link to="/thar-on-rent-in-goa" className="text-blue-600 hover:underline font-medium">Mahindra Thar for rent in Vasco</Link>. Our affordable car rental Vasco fleet is maintained to the highest standards by verified local hosts.
        </>
      ),
      list: [
        'Compact Hatchbacks: Ideal for the busy market lanes and easy parking near Swatantra Path.',
        'Luxury Sedans: The preferred choice for corporate visitors and port officials.',
        (
          <>
            <Link to="/thar-on-rent-in-goa" className="text-blue-600 hover:underline font-medium">Mahindra Thar (4x4/RWD)</Link>: Best for the iconic Goa road trip experience and coastal exploration.
          </>
        ),
        'MUVs (Innova/Ertiga): Perfect for large families landing at the airport with heavy luggage.'
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
        },
        
        {
        title: "About Vasco da Gama, Goa",
        content: `Vasco da Gama is the largest city in South Goa and home to the Mormugao Port, one of India's busiest shipping hubs. The city is located close to Goa Dabolim Airport and Vasco Railway Station, making it a key entry point for travelers.

        Popular nearby attractions include Bogmalo Beach, Baina Beach, and Mormugao Fort. Renting a self drive car in Vasco allows visitors to explore South and North Goa comfortably at their own pace.`
          
        }
      ],

      faqs: [
  {
    q: "Is self drive car rental available in Vasco da Gama?",
    a: "Yes, self drive cars are available across Vasco city with convenient pickup points near the bus stand, railway station, and central areas."
  },
  {
    q: "What is the price of car rental in Vasco Goa?",
    a: "Prices vary depending on the car category and season. Hatchbacks are the most budget-friendly, while SUVs and premium cars cost more during peak tourist months."
  },
  {
    q: "Can I rent a car in Vasco and drop it at Goa Airport?",
    a: "Yes, one-way rentals are available. Many customers pick up in Vasco and drop off at Dabolim Airport for added convenience."
  },
  {
    q: "Are automatic cars available in Vasco?",
    a: "Yes, both automatic and manual transmission vehicles are available. You can select your preference during booking."
  },
  {
    q: "What documents are required to rent a self drive car in Vasco?",
    a: "You need a valid driving license and a government ID proof. A refundable security deposit is required depending on the vehicle."
  },
  {
    q: "Is renting a car in Vasco cheaper than using taxis?",
    a: "For multi-day trips, renting a self drive car is usually more economical than booking taxis repeatedly, especially if you plan to explore different parts of Goa."
  },
  {
    q: "Can I drive from Vasco to North Goa?",
    a: "Yes, Vasco is well connected by NH66. It typically takes about 60–75 minutes to reach popular North Goa beaches."
  }
],
    
      relatedLinks: [
    {title:  'Thar on Rent in Goa',href:'/thar-on-rent-in-goa'},
    { title: 'Mopa Airport Car Rental', href:'/self-drive-car-rental-at-mopa-airport-goa'},
    { title: 'Goa Dabolim Airport Car Rental',href:'/goa-dabolim-airport-car-rental' },
    { title: 'Car Rental in Vasco da Gama',href:'/car-rental-vasco-da-gama' },
    { title: 'Car Rental in Panjim', href:'/self-drive-car-rental-at-panjim' },
    { title: 'Car Rental at Vasco Railway Station',href:'/car-rental-vasco-railway-station'},
    {title:  'Car Rental at Madgao Railway Station',href:'/self-drive-car-rental-at-madgaon-railway-station-goa'}
  ]
    },
    
    'thar-on-rent-in-goa': {
  h1: 'Mahindra Thar on Rent in Goa - Self Drive Automatic & Manual Options',
  location: 'Goa',
  meta: {
    title: "Mahindra Thar on Rent in Goa | Self Drive 4x4",
    description: "Book Mahindra Thar on rent in Goa with automatic and manual options. Airport pickup available across North & South Goa. Instant booking with SelfCruz."
  },

intro: (
      <>
      Get the best Mahindra Thar on rent in Goa with SelfCruz. We offer both automatic and manual 4x4 options for the ultimate self-drive experience. SelfCruz connects you with verified local hosts offering Mahindra Thar self drive rentals across North Goa, South Goa, 
      Panjim, <Link to="/goa-dabolim-airport-car-rental"className="text-blue-600 font-semibold decoration-blue-300 hover:decoration-blue-600 transition-all">Dabolim Airport (GOI)</Link> and 
      <Link to="/self-drive-car-rental-at-mopa-airport-goa"className="text-blue-600 font-semibold decoration-blue-300 hover:decoration-blue-600 transition-all">Mopa Airport (GOX)</Link>.
      Whether you want an automatic Thar for smooth driving or a manual 4x4 for offroading, book your Thar rental in Goa at the best available price and instant confirmation.
      </>
    ),
  sections: [

    {
      title: 'Thar Rental Price in Goa',
      content: `The price for Mahindra Thar on rent in Goa depends on travel dates, rental duration, and vehicle variant. During off-season, prices are lower, while peak months like December and long weekends may have higher demand.`,
      list: [
        'Manual Thar available',
        'Thar automatic on rent in Goa',
        'Convertible Thar (subject to availability)',
        'Daily and multi-day rentals available'
      ]
    },
    
    
    {
      title:"Automatic Thar on Rent in Goa",
      content:"Looking for an automatic Thar on rent in Goa? SelfCruz offers the latest  Mahindra Thar automatic for a smooth and effortless self-drive experience. Perfect for city cruising, beach hopping, and long scenic drives across Goa.",
      list:[
        'Petrol & Diesel Automatic Options Available',
        'Pickup & Drop at Mopa (GOX) & Dabolim (GOI)',
        'Instant Booking & Transparent Pricing',
        'Easy Driving for City & Highway'
      ]
    },

    {
      title: 'Thar on Rent at Goa Airport (Dabolim-GOI)',
      content: `Airport delivery near Dabolim and doorstep delivery in Panjim and Vasco can be arranged based on availability. Many travelers prefer picking up their Thar directly after arrival.`,
    },

    {
      title: 'Thar on Rent in North Goa & South Goa',
     content: (
    <>
      SelfCruz provides Mahindra Thar rental services across North Goa and South Goa with flexible pickup and delivery options. Whether you're visiting <Link to="/self-drive-car-rental-at-panjim" className="text-blue-600 hover:underline font-medium">Panjim</Link> or exploring beaches in Baga, Calangute and Anjuna or planning a peaceful trip to Colva and Palolem, Mahindra Thar gives you the perfect mix of power and comfort for Goa roads.
    </>
  ),
      list: [
    "Delivery Available in Panjim & Vasco",
    "Ideal for Beach & Coastal Drives",
    "Suitable for North & South Goa Travel",
    "Short-Term & Multi-Day Rental Options"
  ]
    },

    {
      title: 'Why Rent a Mahindra Thar in Goa?',
      content: `Mahindra Thar is one of the most demanded SUVs for Goa trips because of its strong road presence, high seating position and open-top experience. It is suitable for coastal roads, highway drives and exploring both North and South Goa comfortably.`,
      list: [
        'High ground clearance for uneven roads',
        'Powerful AC for Goa weather',
        'Comfortable for couples and small groups',
        'Popular choice for Goa road trips'
      ]
    },

    // Inject How It Works (important for consistency)
    getHowItWorksSection('Goa'),

  ],

  faqs: [
    
  {
    q: "What is the price of Thar on rent in Goa?",
    a: "The price of a Thar on rent in Goa usually depends on the season, number of days, and whether you choose a manual or automatic model. During off-season months, prices are more budget-friendly starting at ₹3000/day, while peak months like December or long weekends may be slightly higher due to demand. You can check live pricing directly while selecting your travel dates."
  },
  {
    q: "Is Thar automatic on rent in Goa available?",
    a: "Yes, automatic Thar models are available in Goa, subject to availability. Many travelers prefer automatic for relaxed city and long drives. You can filter by transmission while booking to see available automatic options."
  },
  {
    q: "Is Mahindra Thar on rent in North Goa available?",
    a: "Yes, you can rent a Mahindra Thar in North Goa, including popular areas like Mopa International Airport and Panaji. It’s a great option if you’re planning to explore beaches and nightlife spots comfortably."
  },
  {
    q: "Can I get Thar on rent in South Goa?",
    a: "Absolutely. Thar rentals are available in South Goa as well, including areas like Dabolim Airport ,Vasco and Madgao. South Goa roads are scenic and less crowded, making it a perfect place to enjoy a Thar drive."
  },
  {
    q: "Do you offer Thar Roxx on rent in Goa?",
    a: "Specific variants like Thar Roxx may be available depending on the host’s inventory and your travel dates. Availability can change quickly during peak season, so it’s best to book early."
  },
  {
    q: "Is convertible Thar on rent in Goa available?",
    a: "Convertible or soft-top Thar models may be available depending on availability. Many travelers choose convertible options for the open-air Goa experience, especially during pleasant weather months."
  },
  {
    q: "What documents are required to rent a Thar in Goa?",
    a: "To rent a Thar in Goa, you’ll need a valid driving license and a government-issued ID proof. A refundable security deposit is also required as per the vehicle terms. The exact details are shown during the booking process."
  }

  ],

  relatedLinks: [
    {title:  'Thar on Rent in Goa',href:'/thar-on-rent-in-goa'},
    { title: 'Mopa Airport Car Rental', href: '/self-drive-car-rental-at-mopa-airport-goa'},
    { title: 'Goa Dabolim Airport Car Rental', href: '/goa-dabolim-airport-car-rental' },
    { title: 'Car Rental in Vasco da Gama', href: '/car-rental-vasco-da-gama' },
    { title: 'Car Rental in Panjim', href: '/self-drive-car-rental-at-panjim' },
    { title: 'Car Rental at Vasco Railway Station',href:'/car-rental-vasco-railway-station'},
    {title:  'Car Rental at Madgao Railway Station', href:'/self-drive-car-rental-at-madgaon-railway-station-goa'}
  ]
},
    'self-drive-car-rental-at-mopa-airport-goa': {
  h1: 'Self Drive Car Rental at Mopa International Airport (GOX) ',
  location: 'Mopa Airport (GOX)',
  meta:{
    title:"Self Drive Car Rental at Mopa International Airport (GOX)",
    description:"Book self drive car rental at Mopa Airport (GOX) with easy pickup and zero hidden charges. Drive North Goa your way with SelfCruz."
  },

intro: (
  <>
    Looking for a self drive car rental at Mopa Airport in Goa? SelfCruz connects you with verified local hosts offering convenient pickup near Manohar International Airport (Mopa-GOX). Book a <Link to="/thar-on-rent-in-goa" className="text-blue-600 hover:underline font-medium">Mahindra Thar on rent at Mopa Airport</Link> with SelfCruz and begin your journey with complete flexibility. Whether you're heading to North Goa beaches, luxury villas, or boutique stays, having your own vehicle ensures a smooth and comfortable start to your trip. Pickup is coordinated near the airport area based on availability.
  </>
),
  sections: [
    
    {
      title: 'Self Drive Cars Near Mopa Airport',
      content:( 
        <>
        Mopa Airport mainly serves North Goa. If your flight is landing in Central or South Goa, you might be looking for 
        <Link to="/goa-dabolim-airport-car-rental" className="text-blue-600 hover:underline font-medium"> self drive cars at Dabolim Airport (GOI)</Link> With SelfCruz, you can book self drive cars near Mopa Airport and reach Morjim, Ashwem, Arambol, Baga or Calangute without waiting for public transport.
      </>
      ),
      list: [
        'Budget hatchbacks for short stays',
        'Sedans for comfortable travel',
        'SUV rentals for families',
        'Mahindra Thar self drive options (subject to availability)'
      ]
    },
      
    {
      title: 'Why Rent a Self Drive Car at Mopa Airport?',
      content: `North Goa is spread across beach towns, cliffside viewpoints, nightlife areas, and café hubs. Having your own vehicle gives you the flexibility to move between locations without limitations.

        A self drive car rental at Mopa Airport allows you to:`,
        list :[
        'Drive directly to your hotel after landing ' ,
        ' Explore multiple beaches in one day  ',
        ' Visit hidden coastal roads and sunset points  ',
        ' Plan late evening outings freely ' ,
        ' Travel comfortably with luggage ' 
    ]  
    },
    {
      title: 'Self Drive Cars at Mopa Airport for Every Type of Goa Trip',
      content: `A self drive car rental at Mopa Airport is ideal for:

      • Couples planning beach vacations  
      • Families staying in North Goa resorts  
      • Groups exploring nightlife and cafés  
      • Long-stay travelers and digital nomads  
      • Visitors planning multi-day coastal drives  

      Booking in advance ensures better vehicle availability, especially during peak seasons.`
    },
     
    getHowItWorksSection('Mopa Airport'),
    {
      
      title: 'About Mopa International Airport (GOX)',
      content: `Manohar International Airport, commonly known as Mopa Airport (GOX), is Goa’s newest international airport located in North Goa. It serves as a major entry point for domestic and international travelers heading toward North Goa’s beaches and holiday destinations.Its location makes it highly convenient for travelers staying in Morjim, Ashwem, Arambol, Vagator, Anjuna, Baga, and surrounding coastal areas. Due to its proximity to popular tourist hubs, booking a self drive car rental directly near Mopa Airport allows you to reach your accommodation quickly and comfortably.`
    },

  ],

  faqs: [
   {
      q: "What are the best self-drive car options at Mopa Airport?",
      a: "It depends on your destination. For the winding roads of North Goa (Arambol or Mandrem), a compact hatchback like the Maruti Swift or Baleno is perfect. For those wanting a premium experience, the Mahindra Thar or Hyundai Creta are high-demand choices. At SelfCruz, we ensure all Mopa-bound cars are deep-cleaned and ready for the 35km drive to the beach belt."
    },
    {
      q: "How do I book a self-drive car at Mopa Airport online?",
      a: "The process is 100% digital. Simply select your arrival time at Mopa, choose your preferred vehicle, and upload your documents (DL & Aadhaar). Once confirmed, a dedicated host will meet you at the Mopa Airport Arrivals pickup zone—no need to wait in long queues at rental desks."
    },
    {
      q: "Which companies offer self-drive rentals near the New Goa Airport?",
      a: "SelfCruz provides verified, legally registered 'Rent-A-Cab' vehicles with black-and-yellow number plates, ensuring a safe and hassle-free experience near Manohar International Airport."
    },
    {
      q: "Are there affordable self-drive cars available at Mopa?",
      a: "Absolutely. Budget hatchbacks typically start around ₹1,200/day. Considering the 40-60 minute drive from Mopa to North Goa, a self-drive rental is often the most cost-effective way to get to your hotel and have a vehicle ready for exploring the next day."
    },
    {
      q: "What documents are required for car hire at Mopa Goa?",
      a: "You'll need a valid Indian Driving License and Aadhaar. International travelers need their home license plus an International Driving Permit (IDP) and Passport."
    },
     {
      q:"Can I rent a car without a driver at Mopa Airport?",
      a:"Yes, that is exactly what SelfCruz offers. You get the keys and the freedom to explore Goa on your own schedule. It’s the preferred choice for travelers who value privacy and want to skip the constant negotiations associated with other transport modes."
     },
     {
      q:"Where can I find car rental counters at Mopa Airport?",
      a:"Unlike older airports, Manohar International Airport (Mopa) has a streamlined arrivals area. While there are a few desks for pre-paid services in the arrivals hall, most high-quality self-drive providers like SelfCruz  has verified self drive car rentals operators on the platform .  A representative will conatact you before your flight for providing details, allowing you to bypass the desk queues and head straight to your vehicle in the designated pickup zone"
     },
     {
      q:"Where to find rental car counters at Mopa?",
      a:"If you have pre-booked with SelfCruz, you don't need to search for a physical counter. Our host will coordinate with you via WhatsApp or phone as soon as you land. You will typically meet them at the designated area, where the vehicle inspection and key handover take place"
     }
  ],

  relatedLinks: [
    {title:  'Thar on Rent in Goa',href:'/thar-on-rent-in-goa'},
    { title: 'Mopa Airport Car Rental', href: '/self-drive-car-rental-at-mopa-airport-goa'},
    { title: 'Goa Dabolim Airport Car Rental', href: '/goa-dabolim-airport-car-rental' },
    { title: 'Car Rental in Vasco da Gama', href: '/car-rental-vasco-da-gama' },
    { title: 'Car Rental in Panjim', href: '/self-drive-car-rental-at-panjim' },
    { title: 'Car Rental at Vasco Railway Station',href:'/car-rental-vasco-railway-station'},
    {title:  'Car Rental at Madgao Railway Station', href:'/self-drive-car-rental-at-madgaon-railway-station-goa'}
  ]
},

    'self-drive-car-rental-at-madgaon-railway-station-goa': {
  h1: 'Self Drive Car Rental at Madgaon Railway Station ',
  location: 'Madgaon Railway Station',
  meta:{
    title:"Self Drive Car Rental at Madgaon Railway Station",
    description:"Book self drive car rental at Madgaon Railway Station with easy and flexible vehicle options. Explore South Goa with SelfCruz."
  },
  intro:(
    <>
      Arriving at Madgaon Railway Station in South Goa? Start your trip smoothly with a self drive car rental at Madgaon Railway Station from SelfCruz. Whether you are heading to the pristine beaches of the South, luxury heritage resorts, or planning a drive up to the capital city of <Link to="/car-rental-panjim" className="text-blue-600 hover:underline font-medium">Panjim</Link>, having your own vehicle gives you complete flexibility and comfort from the moment you step off the train. Pickup is coordinated near the station area (MAO) based on availability, ensuring a convenient handover process so you can bypass the taxi queues and start your Goan holiday instantly.
    </>
  ),
  sections: [
    
    {
      title: 'Self Drive Cars Near Madgaon (Margao) Station',
      content: (
        <>
          Madgaon Railway Station is the primary rail hub for the entire state of Goa, serving as the main stop for the Konkan Railway and South Western Railway lines. Because it is located in the heart of South Goa, renting a self drive car from SelfCruz allows you to comfortably reach the white sands of Colva, Benaulim, Varca, Majorda, and Palolem without the hassle of multiple transfers. For those looking to explore the rugged interior or cruise the coastal highways in style, we also offer the iconic <Link to="/thar-on-rent-in-goa" className="text-blue-600 hover:underline font-medium">Mahindra Thar on rent at Madgaon Station</Link>, subject to availability.
        </>
      ),
      list: [
        'Affordable Daily Rentals: Perfect for budget-conscious travelers.',
        'Flexible Return Options: Drop off the car near the station before your return train.',
        'Ideal for South Goa Stays: Most major resorts are within a 20-30 minute drive.',
        'Diverse Fleet: From fuel-efficient hatchbacks to premium SUVs like the Thar and Creta.'
      ]
    },

    {
      title: 'Why Rent a Self Drive Car at Madgaon Railway Station?',
      content: `Madgaon (Margao) is more than just a transit stop; it is a geographic center point. Many travelers arriving here are heading toward heritage villages or secluded resort stays spread across the southern coastline. South Goa's beauty lies in its "slow" pace, but this also means that public transport is infrequent. 

      A self drive car rental allows you to explore freely. You can spend the morning at the Fatorda stadium, have a traditional Goan lunch in the Margao city center, and then drive down to the Cabo de Rama fort for sunset—all in one day. Instead of planning your entire vacation around the availability of expensive local transport, you manage your own schedule, stop at local bakeries whenever you spot one, and enjoy the privacy of your own cabin.`,
      list: [
        'Direct Access: Reach Colva, Benaulim, Varca, and Majorda in under 20 minutes.',
        'Southern Exploration: Easy connectivity to the far south gems like Cavelossim, Agonda, and Palolem.',
        'Beach Hopping: South Goa beaches are spaced 5-10km apart; a car is essential for visiting multiple spots.',
        'Family Comfort: Ideal for those traveling with seniors or children who need a climate-controlled environment.',
        'Digital Nomad Friendly: Perfect for long-stay travelers who need to move between co-working spaces and cafes.'
      ]
    },
      {
      title: 'The Logistics: Arriving at Madgaon and Picking Up Your Car',
      content: `Madgaon Station is a busy junction with multiple exits. When you book with SelfCruz, your local host coordinates the pickup at a designated point just outside the station premises. This is strategically planned to avoid the heavy traffic and 'no-parking' zones directly in front of the main terminal gates. 

      Once you arrive, a quick 5-minute verification of your driving license and ID is completed, and you are handed the keys. This process is designed for travelers arriving on long-distance trains like the Goa Express or Rajdhani, who often carry significant luggage and want to reach their hotels as quickly as possible.`,
    },

    getHowItWorksSection('Madgaon Railway Station'),

    {
      title: 'Navigating from Madgaon: Strategic Routes',
      content: `From Madgaon Station, you are perfectly placed to hit the major arterial roads of Goa. 
      
      **The Southward Route:** Head towards the bypass road to reach the luxury resort belt of Varca and Cavelossim. These roads are wide and flanked by lush paddy fields, making for a very relaxing driving experience.
      
      **The Northward Route:** If you are staying in the North but arriving via Madgaon, the NH66 highway is easily accessible. This well-maintained four-lane highway will take you toward Panaji and beyond. 
      
      **The Heritage Circuit:** Margao city itself is rich in history. Drive through the 'Abade Faria' road to see stunning examples of Portuguese-Goan architecture before heading out to the beaches.`,
    },

    {
      title: 'Essential Driving Tips for Madgaon & South Goa',
      content: `While South Goa is generally less congested than the North, the city of Margao has its own traffic patterns. The area around the station and the 'Old Market' can get busy during peak hours (9 AM - 11 AM and 5 PM - 7 PM). 

      When driving your rental car, be mindful of the one-way systems in the Margao city center. Parking at the railway station is strictly regulated; always use the authorized parking lots if you need to leave the vehicle to receive someone. As you head toward the coastal areas, the roads become narrower and are often shared with two-wheelers and pedestrians—maintain a steady speed and enjoy the view!`,
    },

    {
      title: 'South Goa Itinerary: Starting from Madgaon',
      content: `With your SelfCruz rental, we suggest starting with a drive to the Holy Spirit Church in Margao, followed by a visit to the 'Big Foot' museum in Loutolim. From there, head south to the Talpona or Galgibaga beaches—these are some of the most pristine, untouched stretches of sand in India. The drive from Madgaon to the deep south (Palolem/Agonda) takes about 60 to 90 minutes and is one of the most scenic coastal drives in the country, featuring winding hilly roads and glimpses of the Arabian Sea.`,
    },
    getHowItWorksSection('Madgaon Railway Station'),
  ],

  faqs: [
    {
      q: "What are the self drive car rental options near Madgaon Railway Station?",
      a: "We offer a diverse range of vehicles at Madgaon (MAO). For solo travelers or small families, budget hatchbacks like the Swift or WagonR are popular. For those heading to South Goa luxury resorts, premium SUVs like the Hyundai Creta or the iconic Mahindra Thar are the most sought-after options. All our cars are maintained for long-distance reliability."
    },
    {
      q: "How do I book a self drive car at Madgaon Railway Station online?",
      a: "Booking is seamless through SelfCruz. Simply select Madgaon Station as your pickup, choose your dates, and pick a vehicle from our verified fleet. After a quick digital document upload (DL & Aadhaar), your booking is confirmed. Our host will coordinate the handover near the station exit (Gate 1 or 2) to avoid traffic."
    },
    {
      q: "What documents are needed for self-drive car hire in India?",
      a: "To rent a car at Madgaon, you need a valid Indian Driving License (Original) and an Aadhaar Card. For international travelers, a Passport and an International Driving Permit (IDP) along with your home country's license are mandatory. We complete the verification process digitally before you arrive."
    },
    {
      q: "Are there affordable self drive car hire services at Madgaon Railway Station?",
      a: "Yes, renting a self-drive car is one of the most budget-friendly ways to explore South Goa. Rates start as low as ₹1,200/day for hatchbacks. Compared to point-to-point transfers to Palolem or Varca, a self-drive car offers better value and total freedom with SelfCruz."
    },
    {
      q: "Are there age restrictions for renting a car independently in Goa?",
      a: "To rent a self-drive car in Goa through our platform, the driver must be at least 18 years old and hold a valid driving license for a minimum of one year. This ensures safety and compliance with local insurance policies for rental vehicles in Goa."
    },
    {
      q: "What is the process if my train to Madgaon is delayed?",
      a: "We understand that long-distance trains can be delayed. When you book, we ask for your train number so our hosts can track the status. We typically offer a 2-hour buffer window for train delays, ensuring your car is waiting for you whenever you pull into the platform."
    }
  ],

  relatedLinks: [
    {title:  'Thar on Rent in Goa',href:'/thar-on-rent-in-goa'},
    { title: 'Mopa Airport Car Rental', href:'/self-drive-car-rental-at-mopa-airport-goa'},
    { title: 'Goa Dabolim Airport Car Rental',href:'/goa-dabolim-airport-car-rental' },
    { title: 'Car Rental in Vasco da Gama',href:'/car-rental-vasco-da-gama' },
    { title: 'Car Rental in Panjim', href:'/self-drive-car-rental-at-panjim' },
    { title: 'Car Rental at Vasco Railway Station',href:'/car-rental-vasco-railway-station'},
    {title:  'Car Rental at Madgao Railway Station',href:'/self-drive-car-rental-at-madgaon-railway-station-goa'}
  ]
},
      'self-drive-car-rental-at-panjim': {
        h1: 'Self Drive Car Rental in Panjim ',
        location: 'Panjim',
        meta:{
        title:"Self Drive Car Rental in Panjim, Goa",
        description:"Book self drive car rental in Panjim with flexible pickup and easy access to North & South Goa easily."
        },

intro: (
    <>
      Panjim (Panaji) is the capital of Goa and a central hub connecting North and South Goa. Booking a self drive car rental at Panjim is perfect for travelers already staying in the city or arriving by bus. Whether you want a compact hatchback for narrow city lanes or a rugged <Link to="/thar-on-rent-in-goa" className="text-blue-600 hover:underline font-medium">Mahindra Thar on rent in Panjim</Link>, SelfCruz connects you with verified local hosts. Our platform offers convenient city-based pickup so you can start your Goa trip smoothly with complete freedom and no hidden costs.
    </>
  ),
  sections: [
    {
      title: 'Self Drive Car Rental at Panjim City',
      content: (
        <>
          Panjim is the beating heart of Goa. Being centrally located, it offers the unique advantage of being equidistant to the party hubs of the North and the serene retreats of the South. With SelfCruz, you can book a self drive car in Panjim and reach Miramar Beach, Dona Paula, and the UNESCO World Heritage churches of Old Goa in minutes. If you are landing at the new airport, you might also want to check our <Link to="/self-drive-car-rental-at-mopa-airport-goa" className="text-blue-600 hover:underline font-medium">Mopa Airport car rental</Link> options for a seamless start to your journey.
        </>
      ),
      list: [
        'Hatchbacks: Best for navigating the colorful, narrow streets of Fontainhas.',
        'Sedans: Ideal for business travelers and small families seeking comfort.',
        'SUV Rentals: Powerful engines for highway drives towards South Goa.',
        (
          <>
            <Link to="/thar-on-rent-in-goa" className="text-blue-600 hover:underline font-medium">Thar on rent in Panjim</Link> for those seeking an iconic open-top adventure.
          </>
        )
      ]
    },
   {
      title: 'Car Rental Near Panjim Bus Stand & Key Areas',
      content: `Accessibility is key when you're on vacation. We ensure that our pickup points are strategically located to minimize your travel time. Self drive cars can be arranged near the Kadamba Bus Stand (ideal for those arriving via inter-state buses), Miramar, Dona Paula, and even the riverside Promenade. 

      Once your booking is confirmed on SelfCruz, your local host provides exact GPS coordinates for the vehicle handover. This eliminates the stress of searching for a rental office in a new city.`,
    },
    {
      title: 'Why Choose SelfCruz for Self Drive Cars in Panjim?',
      content: `SelfCruz connects you with trusted local hosts and ensures a smooth booking experience. You get transparent pricing, flexible duration options and complete freedom during your Goa trip.`,
      list: [
        'Drive at your own pace',
        'No surge pricing',
        'Simple verification process',
        'Support during your rental period'
      ]
    },
    {
      title: 'The Heritage Drive: Exploring Panjim in a Self Drive Car',
      content: `Panjim isn't just a transit point; it’s a destination. Having your own vehicle allows you to explore the "Latin Quarter" of Fontainhas at sunrise when the colors of the Portuguese-style houses are most vibrant. From there, you can drive up to the Altinho hill for a panoramic view of the Mandovi River and the Secretariat building.

      With a self drive car, you aren't limited by the high rates of local pilots or the fixed routes of public buses. You can spend an afternoon at the Goa State Museum and then spontaneously head to the offshore casinos or a sunset cruise point without worrying about how to get back to your hotel.`,
    },

    {
      title: 'Strategic Advantages of Renting in Panjim',
      content: `Many travelers choose Panjim as their base because it offers a "real" Goan experience away from the over-commercialized beach belts. By renting a car here, you gain several strategic advantages:`,
      list: [
        'Central Connectivity: Reach Calangute in 30 mins or Colva in 45 mins.',
        'Proximity to Old Goa: A short 15-minute drive takes you to the Basilica of Bom Jesus.',
        'Shopping & Dining: Easy access to the best supermarkets, designer boutiques, and fine-dining restaurants like Mum’s Kitchen and Ritz Classic.',
        'Business Ready: The best choice for corporate travelers attending meetings in the city.'
      ]
    },
    getHowItWorksSection('Panjim'),
    {
      title: 'Driving & Parking Guide for Panjim (Panaji)',
      content: `As the capital city, Panjim has specific driving dynamics. While the roads are well-maintained, parking can be tricky during peak office hours (10 AM - 6 PM). 

      We recommend using the multi-level parking lot near the Patto Plaza if you are visiting the business district. For those exploring the riverside, there is ample paid parking along the Mandovi Promenade. Always look for "Pay Parking" signs to avoid fines. Our self drive cars come with all necessary permits, but remember that the city uses an extensive CCTV network for traffic monitoring—always wear your seatbelt and avoid using mobile phones while driving.`,
    },

    {
      title: "About Panjim (Panaji), Goa – The Heart of the State",
      content: `Panjim, also known as Panaji, is the sophisticated capital city of Goa. Unlike the typical coastal villages, Panjim offers a blend of terraced hills, concrete buildings with balconies, and red-tiled roofs. Located on the southern bank of the Mandovi River, it is the administrative and educational hub of the state.

      Renting a self drive car in Panjim allows you to truly immerse yourself in the Indo-Portuguese history. You can drive to the Church of the Immaculate Conception, built in 1541, and then head over to the bustling Panjim Market to pick up authentic Goan cashews and spices. 

      Because the city serves as the gateway between North and South Goa, it is the most logical place to rent a car if you plan on covering the entire length of the state during your stay. Whether you are heading towards the world-class beaches of the North or the hidden waterfalls of the East, starting from Panjim gives you a head start on the highway.`
    },
    
  ],
 

  faqs: [
   {
      q: "What are the best self drive car rental services available in Panjim?",
      a: "The best services in Panjim offer a mix of city-friendly hatchbacks and premium SUVs. SelfCruz stands out by providing verified 'black-plate' commercial vehicles from trusted local hosts. Whether you're staying in Fontainhas or Patto, we ensure a clean, well-maintained car is delivered to your doorstep or a central landmark."
    },
    {
      q: "Where can I pick up a self-drive car near Panjim bus stand?",
      a: "If you're arriving at the Kadamba (KTC) Bus Stand, we coordinate pickups at convenient spots nearby, such as the Patto Plaza area. This allows you to avoid the bus stand's heavy traffic while ensuring you can load your luggage and start your journey within minutes of arriving in the capital."
    },
    {
      q: "How to rent a self drive car in Panjim without a credit card?",
      a: "Unlike many international rental chains, SelfCruz offers flexible payment options. You can book your self-drive car in Panjim using UPI, Debit Cards, or Net Banking. We typically require a small security deposit which is fully refundable upon the safe return of the vehicle, making the process accessible for everyone."
    },
    {
      q: "Are there any luxury self-drive car options available in Panjim?",
      a: "Yes, Panjim is the perfect place to start a premium Goan experience. We offer luxury options including the Mahindra Thar (Convertible & Hard Top), Hyundai Creta, and top-end automatics. These are ideal for business meetings at the Secretariat or a stylish drive down the Miramar-Dona Paula stretch."
    },
    {
      q: "Are there any self drive electric car rentals in Panjim?",
      a: "Electric vehicles (EVs) are becoming increasingly popular in Goa's capital. While availability is subject to real-time demand, we often have Tigor EVs or Nexon EVs in our fleet. Panjim has several charging stations, including at the KTC Bus Stand and near the EDC House, making it the most EV-friendly city in Goa."
    },
    {
      q: "What documents are needed to rent a self-drive car in Goa?",
      a: "You will need a valid Indian Driving License (Original) and a Government-approved ID like an Aadhaar Card. For foreign nationals, a Passport and an International Driving Permit (IDP) are required. We handle all document verifications digitally through our platform for a paperless experience."
    }
  ],

   relatedLinks: [
     {title:  'Thar on Rent in Goa',href:'/thar-on-rent-in-goa'},
    { title: 'Mopa Airport Car Rental', href: '/self-drive-car-rental-at-mopa-airport-goa'},
    { title: 'Goa Dabolim Airport Car Rental', href: '/goa-dabolim-airport-car-rental' },
    { title: 'Car Rental in Vasco da Gama', href: '/car-rental-vasco-da-gama' },
    { title: 'Car Rental in Panjim', href: '/self-drive-car-rental-at-panjim' },
    { title: 'Car Rental at Vasco Railway Station',href:'/car-rental-vasco-railway-station'},
    {title:  'Car Rental at Madgao Railway Station', href:'/self-drive-car-rental-at-madgaon-railway-station-goa'}
  ]
},
    
    'car-rental-vasco-railway-station': {
      h1: 'Self Drive Car Rental At Vasco Railway Station ,Goa',
      location: 'Vasco Railway Station',
      meta: {
      title: "Self Drive Car Rental at Vasco Railway Station (VSG) | Quick Pickup",
      description: "Book self-drive cars near Vasco Railway Station. Easy pickup and fast booking process."
      },
      intro:(
        <>
      Looking to rent a self drive car at Vasco Railway Station Goa? SelfCruz offers convenient <Link to="/car-rental-vasco-da-gama" className="text-blue-600 hover:underline font-medium">car rental in Vasco</Link> with coordinated pickup near the station exit. Whether you are arriving on the Goa Express, Vasco Da Gama Express, or the Amaravati Express, book your self drive car rental at Vasco Station in advance and drive across Goa at your own pace. By securing your vehicle before you pull into the platform, you ensure a seamless transition from the tracks to the open road without the stress of local taxi negotiations.
    </>
      ),
      sections: [
        {
          title: 'Why Rent Immediately at the Vasco Railway Station?',
          content: `Vasco Station (VSG) is the terminus for many major trains. Renting a self-drive car is cheaper and gives you mobility for your entire trip.`,
          list: [
            'Cost Effective: Save on the expensive transfer to your hotel.',
            'Convenience: Load your luggage once into your rental car.',
            'Freedom: Stop for food or sightseeing on the way to your hotel.'
          ]
        },
        {
      title: 'Car Types Available at Vasco Railway Station Goa',
      content: `We provide a wide range of self drive cars at Vasco Railway Station suitable for every type of traveler.`,
      list: [
      'Budget hatchbacks for solo travellers',
      'Automatic cars for city comfort',
      'SUVs for group trips',
      '7 seater vehicles like Ertiga',
      'Premium cars for business travel'
  ]
},
{
      title: 'Strategic Transit: Moving from the Rails to the Road',
      content: `Vasco Station is unique because it sits at the junction of Goa's industrial heritage and its tourist future. As you drive out of the station area, you are immediately connected to the four-lane highway that bypasses the city congestion. 
      
      Having a self-drive car allows you to take the scenic 'Airport Road' which offers stunning views of the Zuari river and the new bridge. Unlike being in a bus or a taxi where you are just a passenger, driving yourself allows you to stop at the various viewpoints along the bypass, or take a quick detour to the Naval Aviation Museum—the only one of its kind in India—which is located just 10 minutes from the station.`,
    },

        // INJECTED "HOW IT WORKS"
        getHowItWorksSection('Vasco Railway Station'),
       
        {
      title: 'Our Fleet for Railway Passengers: Designed for Comfort',
      content: `Train travel is an adventure, but it can be exhausting. We aim to provide a "refreshing" handover experience. Our fleet at Vasco Station features high-performance air conditioning—a must-have for the Goan humidity—and vehicles with clean, spacious interiors. We prioritize cars with large boot spaces because we know that "packing light" is rarely an option for a week-long Goan holiday.`,
      features: [
        { title: 'Maximum Boot Space', desc: 'Our Sedans and SUVs are selected specifically for their ability to carry multiple large suitcases.' },
        { title: 'Sanitized Interiors', desc: 'Every car undergoes a professional cleaning cycle before it reaches the station pickup point.' },
        { title: 'Fuel Efficiency', desc: 'Modern engines that help you save on fuel while exploring the long coastal stretches of South Goa.' }
      ]
    },

    {
      title: 'Popular Routes from Vasco Station: Your First Drive',
      content: `The moment you turn the key, the entirety of Goa is accessible. Vasco is centrally located on the coast, making it a perfect 'Point Zero' for your trip. 
      
      **Towards Panjim:** A 30 km drive through the bypass road takes you to the capital city in about 45 minutes. It’s a smooth, well-lit drive that is perfect for those arriving on evening trains. 
      
      **Towards the South Coast:** If your hotel is in Majorda, Betalbatim, or Colva, you are only 20 minutes away. This route takes you through the quaint village of Velsao, offering your first glimpse of the iconic Goan coconut groves. 
      
      **The Waterfall Route:** For the adventurous, the drive to Dudhsagar Waterfalls begins here. It is a 60 km journey that takes you through the heart of the Goan hinterland, showcasing a side of the state most tourists never see.`,
    },
        {
          title: 'Train Delay & Pickup Protocols',
          content: `Trains to Goa can often be delayed. We track your PNR status.`,
          tips: [
            'Delay Buffer: We hold your booking for 2 hours post scheduled arrival if delayed.',
            'Meeting Point: Our executive meets you at the designated spot.',
            'Night Arrivals: We operate 24/7, so early morning train arrivals are no problem.'
          ]
        },
        {
      title: 'Exploring the Mormugao Peninsula',
      content: `Before you leave Vasco, take an hour to explore the city itself in your rental car. Drive up to the 'Pilot Point' at the end of the Swatantra Path to see the ships entering the harbor. Visit the 17th-century Mormugao Fort which offers a 360-degree view of the Arabian Sea. With a self-drive car, these hidden historical spots are just a 5-minute drive from the station, whereas they would be completely inaccessible to most rail passengers relying on public transport.`,
        },
        {
         title: 'About Vasco da Gama, Goa',
        content: `Vasco da Gama is one of the major cities in South Goa and home to the Mormugao Port. Located close to Dabolim Airport and popular beaches like Baina, it serves as an ideal starting point for self drive car rental in Goa. From Vasco you can easily reach Panaji, South Goa beaches and even North Goa within an hour drive.`
        },
        
      ],
      
    faqs: [
  {
    q: "Is self drive car rental available at Vasco Railway Station Goa?",
    a: "Yes, it is. Once you book with Selfcruz, our team coordinates the pickup at a convenient spot close to Vasco Railway Station. You won’t have to wander around looking for the car — we guide you step by step before arrival."
  },
  {
    q: "What are the best self drive car rental options near Vasco Railway Station?",
    a: "It depends on your travel plans. If you’re travelling light or as a couple, a hatchback works perfectly. For families or luggage-heavy trips, we recommend a sedan or SUV. If you’re planning beach hopping across North and South Goa, an SUV gives you extra comfort and space."
  },
  {
    q: "Which is the best self drive car rental service at Vasco Railway Station?",
    a: "The best service is one that is transparent, responsive, and provides clean, well-maintained vehicles. We focus on clear pricing, no hidden charges, and quick support in case you need help during your trip."
  },
  {
    q: "How can I book a self drive car at Vasco Railway Station online?",
    a: "Booking is simple. Select Vasco Railway Station as your pickup location, choose your dates and time, pick your preferred car, pay, and confirm the booking. You’ll receive all pickup details before your arrival from our verified patners."
  },
  {
    q: "What documents are required to rent a self drive car in Vasco?",
    a: "You’ll need a valid driving license and a government ID proof. A refundable security deposit is also required. If you’re visiting from outside India, you must carry an International Driving Permit along with your original license."
  },
  {
    q: "Are affordable self drive car rentals available at Vasco Railway Station?",
    a: "Yes. We offer budget-friendly hatchbacks for travelers who want to keep costs low. Prices may vary depending on the season and demand, especially during peak months like December."
  },
  {
    q: "How do I pick up the rental car after arriving by train?",
    a: "Once your booking is confirmed, our executive contacts you before your arrival and shares the exact meeting point near the station. The car handover takes just a few minutes after document verification and a quick vehicle check."
  },
  {
    q: "Is it cheaper to rent a self drive car than using taxis in Goa?",
    a: "For multi-day trips, renting a self drive car is usually more economical than taking multiple taxis. It also gives you complete freedom to explore beaches, restaurants, and hidden spots without depending on driver availability."
  },
  {
    q: "What if my train gets delayed?",
    a: "Train delays are common, and we understand that. Inform us about the delay and we’ll coordinate accordingly. We try to provide a reasonable buffer so your booking isn’t affected."
  },
  {
    q: "Can I take the car from Vasco to North Goa?",
    a: "Absolutely. Many travelers pick up their car at Vasco Railway Station and drive straight to North Goa. The roads are good, and it typically takes about an hour to reach popular beaches like Baga or Calangute."
  }
],
      relatedLinks: [
        {title:  'Thar on Rent in Goa',href:'/thar-on-rent-in-goa'},
        { title: 'Mopa Airport Car Rental', href:'/self-drive-car-rental-at-mopa-airport-goa'},
        { title: 'Goa Dabolim Airport Car Rental',href:'/goa-dabolim-airport-car-rental' },
        { title: 'Car Rental in Vasco da Gama',href:'/car-rental-vasco-da-gama' },
        { title: 'Car Rental in Panjim', href:'/self-drive-car-rental-at-panjim' },
        { title: 'Car Rental at Vasco Railway Station',href:'/car-rental-vasco-railway-station'},
        {title:  'Car Rental at Madgao Railway Station',href:'/self-drive-car-rental-at-madgaon-railway-station-goa'}
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
    const baseUrl = "https://www.selfcruz.com";
    // This ensures we don't get // if slug already has a /
    const cleanSlug = slug.startsWith('/') ? slug : `/${slug}`;
    const canonicalUrl = `${baseUrl}${cleanSlug}`

  {/* Helper for dynamic schema.org */}
  const isThar = slug.includes('thar');
  const geoCoords = {
    'goa-dabolim-airport-car-rental': { lat: 15.3801, lon: 73.8333, code: "GOI" },
    'self-drive-car-rental-at-mopa-airport-goa': { lat: 15.7444, lon: 73.8524, code: "GOX" },
    'self-drive-car-rental-at-madgaon-railway-station-goa': { lat: 15.2750, lon: 73.9579, code: "MAO" },
    'car-rental-vasco-railway-station': { lat: 15.3959, lon: 73.8157, code: "VSG" },
    'self-drive-car-rental-at-panjim': { lat: 15.4909, lon: 73.8278, code: "PANJIM" },
    'car-rental-vasco-da-gama': { lat: 15.3959, lon: 73.8157, code: "VASCO" },
    'thar-on-rent-in-goa': { lat: 15.4989, lon: 73.8278, code: "GOA" }
  };
 const currentGeo = geoCoords[slug] || geoCoords['goa-dabolim-airport-car-rental'];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. BRAND ENTITY 
      {
        "@type": "AutoRental",
        "@id": `${baseUrl}/#organization`,
        "name": "SelfCruz",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.svg`, 
        "telephone": "+91 84849 58580", // 
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "H.NO-256 Opposite Rosary Convent, Altinho, Panaji, Goa 403001", 
          "addressLocality": "Panaji",
          "addressRegion": "Goa",
          "postalCode": "403001",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.facebook.com/selfcruz",
          "https://www.instagram.com/selfcruz"
        ]
      },

      // 2. BREADCRUMBS
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
          { "@type": "ListItem", "position": 2, "name": "All Cars", "item": `${baseUrl}/cars` },
          { "@type": "ListItem", "position": 3, "name": locationData.location, "item": canonicalUrl }
        ]
      },

      // 3. MAIN CONTENT (Thar Product vs Airport Service)
      isThar ? {
        "@type": ["Product", "Car"],
        "name": locationData.h1,
        "description": locationData.meta.description,
        "model": "Thar",
        "brand": { "@type": "Brand", "name": "Mahindra" },
        "fuelType": "Diesel",
        "vehicleTransmission": "Manual / Automatic",
        "bodyType": "SUV",
        "numberOfDoors": 3,
        "seatingCapacity": 4,
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "lowPrice": "2500",
          "highPrice": "6000",
          "priceCurrency": "INR",
          "offeredBy": { "@id": `${baseUrl}/#organization` }
        },
       /* "aggregateRating": {
         "@type": "AggregateRating",
          "ratingValue": "4.8", // Hardcoded value based on your actual reviews
          "reviewCount": "120"
        }
          */  
      }: {
        "@type": "AutoRental",
        "name": locationData.h1,
        "description": locationData.meta.description,
        "areaServed": {
          "@type": "City",
          "name": locationData.location
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": currentGeo.lat,
          "longitude": currentGeo.lon
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": locationData.location.split(' ')[0],
          "addressRegion": "Goa",
          "addressCountry": "IN"
        },
        "priceRange": "INR 1200 - 8000",
        "provider": { "@id": `${baseUrl}/#organization` } // Links this airport page to your Panjim HQ
      },

      // 4. FAQ SECTION
      {
        "@type": "FAQPage",
        "mainEntity": locationData.faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    ]
  };

  return (
    <div>
      <div>
    <Hero 
      prefilledLocation={locationData.location} 
      hideText={true} // <--- MAKE SURE THIS IS HERE
    />
  </div>

      <title>{locationData.meta.title}</title>
      <meta name="description" content={locationData.meta.description} />
      <link rel="canonical" href={canonicalUrl} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={locationData.meta.title} />
      <meta property="og:description" content={locationData.meta.description} />
      <meta property="og:image" content={`${baseUrl}/assets/og-thar-goa.jpg`} /> 

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={locationData.meta.title} />
      <meta name="twitter:description" content={locationData.meta.description} />
      <meta name="twitter:image" content={`${baseUrl}/assets/og-thar-goa.jpg`} />
        <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
    />

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
   <div className='text-lg md:text-xl text-gray-800 leading-relaxed'>
     {locationData.intro}
   </div>
</div>

          <div className='space-y-16'>
            {locationData.sections.map((section, index) => (
              <section key={index} className="relative">
                <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2'>
                  {section.title.includes('How SelfCruz Works') ? <Shield className="text-green-600" /> : <Car className="text-blue-600" />}
                  {section.title}
                </h2>
                
               <div className='text-gray-700 leading-relaxed mb-8 text-lg [&-a]:text-blue-600 [&-a]:font-semibold [&-a]:underline hover:[&-a]:text-blue-800'>
  {section.content}
</div>
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
            <h2 className="text-3xl font-bold mb-4">Book Your Self Drive Car at {locationData.location} Today</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Reserve your self drive car at {locationData.location} in minutes. Transparent pricing, flexible pickup and verified vehicles — all with SelfCruz.</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-md"
            >
              Check Availability
            </button>
          </div>

          {/* FAQs */}
<section className='mt-16 border-t pt-12'>
  <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
    Frequently Asked Questions
  </h2>

  <div className='space-y-4 max-w-4xl mx-auto'>
    {locationData.faqs.map((faq, index) => (
      <details
        key={index}
        className='group bg-white border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-blue-300'
      >
        <summary className='flex justify-between items-center p-5 cursor-pointer group-open:bg-gray-50'>
          
          {/* Proper H3 for SEO */}
          <h3 className="text-lg font-semibold text-gray-900">
            {faq.q}
          </h3>

          <span className="transition-transform group-open:rotate-180 text-blue-500 ml-4 flex-shrink-0">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </summary>

        <div className='p-5 pt-2 text-gray-700 leading-relaxed bg-gray-50 border-t border-gray-100'>
          <p>{faq.a}</p>
        </div>
      </details>
    ))}
  </div>
</section>

       {/* Footer Links */}
<div className='mt-20 pt-12 border-t border-gray-200'>
  <h3 className='text-xs font-bold mb-6 text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2'>
    <MapPin size={14} className="text-gray-400" />
    Explore More Car Rental Locations
  </h3>
  
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8'>
    {locationData.relatedLinks.map((link, i) => {
      const isThar = link.title.toLowerCase().includes('thar');
      
      return (
        <Link 
          key={i} 
          to={link.href} 
          className="group flex items-center justify-between text-base transition-all duration-200"
        >
          <span className={`
            underline underline-offset-4 decoration-blue-200 group-hover:decoration-blue-600
            ${isThar ? 'text-blue-700 font-bold' : 'text-blue-600 hover:text-blue-800 font-medium'}
          `}>
            {link.title}
          </span>
          
          {/* Lucide Chevron for a clean, app-like feel */}
          <ChevronRight 
            size={16} 
            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400" 
          />
        </Link>
      );
    })}
  </div>
</div>

        </div>
      </motion.div>
    </div>
  )
}


export default LocationCars