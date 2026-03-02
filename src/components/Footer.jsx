import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'; // Ensure this matches your package (usually 'framer-motion')
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react'; 

const Footer = () => {
  return (
    <motion.footer 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='px-6 md:px-16 lg:px-24 xl:px-32 mt-40 border-t border-gray-100 pt-16 text-sm text-gray-500'
    >
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-gray-100'>
        
        {/* Company Info - Spans 2 columns for better layout */}
        <div className='lg:col-span-2'>
            <h2 className='text-2xl font-black text-primary tracking-tight'>SelfCruz</h2>
            <p className='font-bold text-gray-800 mt-2 text-[10px] uppercase tracking-widest'>
                DRIVAGO TECHNOLOGIES PRIVATE LIMITED
            </p>

            <div className='mt-5 space-y-3 text-xs leading-relaxed'>
                <p className='flex items-start gap-2'>
                    <MapPin size={14} className='text-primary shrink-0 mt-0.5' />
                    H.NO-256 Opposite Rosary Convent, Altinho, Panaji, Goa 403001
                </p>
                <p className='flex items-center gap-2'>
                    <Phone size={14} className='text-primary shrink-0' />
                    <a href="tel:+918484958580" className='hover:text-primary transition-colors'>+91 84849 58580</a>
                </p>
                <p className='flex items-center gap-2'>
                    <Mail size={14} className='text-primary shrink-0' />
                    <a href="mailto:support@selfcruz.com" className='hover:text-primary transition-colors'>support@selfcruz.com</a>
                </p>
            </div>
            
            {/* Socials */}
            <div className='flex items-center gap-4 mt-6'>
                {['facebook', 'instagram', 'gmail'].map((social) => (
                    <a key={social} href="#" className='p-2 bg-gray-50 rounded-full hover:bg-primary/10 transition-all'>
                        <img src={assets[`${social}_logo`]} className='w-4 h-4' alt={social} /> 
                    </a>
                ))}
            </div>
        </div>

        {/* Links Columns */}
        {[
          {
            title: "Popular Locations",
            links: [
              { name: "Dabolim Airport (GOI)", path: "/goa-dabolim-airport-car-rental" },
              { name: "Mopa Airport (GOX)", path: "/self-drive-car-rental-at-mopa-airport-goa" },
              { name: "Vasco da Gama", path: "/car-rental-vasco-da-gama" },
              { name: "Madgaon Station", path: "/self-drive-car-rental-at-madgaon-railway-station-goa" },
              
            ]
          },
          {
            title: "Thar Specialist",
            links: [
              { name: "Thar Rental Goa", path: "/thar-on-rent-in-goa" },
              { name: "Dabolim Airport Thar", path: "/cars?search=thar&location=Dabolim Airport(GOI)" },
              { name: "Mopa Airport Thar", path: "/cars?search=thar&location=Mopa Airport (GOX)" },
              { name: "Automatic Thar", path: "/cars?search=thar&transmission=automatic" },
             
            ]
          },
          {
            title: "Quick Hubs",
            links: [
              { name: "Vasco Station", path: "/car-rental-vasco-railway-station" },
              { name: "Madgaon Station", path: "/cars?location=Madgaon Railway Station" },
              { name: "Panjim", path: "/self-drive-car-rentals-at-panjim" },
              { name: "Karmali Station", path: "/cars?location=Karmali Railway Station" },
            ]
          },
          {
            title: "Company",
            links: [
              { name: "Browse Vehicles", path: "/cars" },
              { name: "List Your Vehicle", path: "/host" },
              { name: "Terms of Service", path: "/terms" },
              { name: "Privacy Policy", path: "/privacy" },
            ]
          }
        ].map((col, idx) => (
          <div key={idx}>
            <h3 className='text-gray-900 font-bold mb-4 uppercase text-[11px] tracking-wider'>{col.title}</h3>
            <ul className='flex flex-col gap-2.5 text-[12px]'>
              {col.links.map((link, lIdx) => (
                <li key={lIdx}>
                  <Link to={link.path} className='hover:text-primary hover:translate-x-1 inline-block transition-all'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
      
      {/* Bottom Bar */}
      <div className='flex flex-col md:flex-row items-center justify-between py-8 gap-4 text-[11px]'>
          <p>© {new Date().getFullYear()} SelfCruz. All rights reserved.</p>
          
          <p className='font-semibold text-gray-400 '>
              Made with <span className='text-red-500 animate-pulse'>❤️</span> in Goa
          </p>

          <div className='flex gap-6 uppercase tracking-widest font-bold'>
              <Link to="/privacy" className='hover:text-primary transition-colors'>Privacy</Link>
              <Link to="/terms" className='hover:text-primary transition-colors'>Terms</Link>
          </div>
      </div>
    </motion.footer>
  )
}

export default Footer