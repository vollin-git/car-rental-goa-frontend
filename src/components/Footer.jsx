import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
    
    className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            
            className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b'>
                {/* Company Info */}
                <div className='max-w-xs'>
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className='text-2xl font-bold text-primary'
                    >
                        SelfCruz
                    </motion.h2>
                    
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className='font-semibold text-gray-800 mt-2 text-xs'
                    >
                        DRIVAGO TECHNOLOGIES PRIVATE LIMITED
                    </motion.h3>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    className='mt-3 text-xs leading-relaxed'>
                        H.NO-256 Opposite Rosary Convent, Tiswadi C C Altinho, North Goa 403001, Goa
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.45 }}
                    className='mt-3 space-y-1'>
                        <p><a href="tel:+918484958580" className='hover:text-primary transition-colors'>+91 84849 58580</a></p>
                        <p><a href="mailto:support@selfcruz.com" className='hover:text-primary transition-colors'>support@selfcruz.com</a></p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    className='flex items-center gap-3 mt-4'>
                        <a href="https://www.facebook.com/profile.php?id=61586095709762" target="_blank" rel="noopener noreferrer"> 
                            <img src={assets.facebook_logo} className='w-5 h-5 hover:opacity-70 transition-opacity' alt="Facebook" /> 
                        </a>
                        <a href="https://www.instagram.com/selfcruz?igsh=b2JsZHhseXd1ZDlw" target="_blank" rel="noopener noreferrer"> 
                            <img src={assets.instagram_logo} className='w-5 h-5 hover:opacity-70 transition-opacity' alt="Instagram" /> 
                        </a>
                        <a href="mailto:support@selfcruz.com"> 
                            <img src={assets.gmail_logo} className='w-5 h-5 hover:opacity-70 transition-opacity' alt="Email" /> 
                        </a>
                    </motion.div>
                </div>

                {/* Links Grid */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                className='grid grid-cols-2 md:grid-cols-4 gap-8 flex-1'>

                {/* Thar for Rent */}
                 {/* SEO Location Pages */}
                <div>
                    <h2 className='text-base font-medium text-gray-800'> Popular Locations</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 text-xs'>
                        <li><Link to="/goa-dabolim-airport-car-rental" className='hover:text-primary transition-colors'>Goa Dabolim Airport Car Rental</Link></li>
                        <li><Link to="/car-rental-vasco-da-gama" className='hover:text-primary transition-colors'>Car Rental Vasco da Gama</Link></li>
                        <li><Link to="/car-rental-vasco-railway-station" className='hover:text-primary transition-colors'>Car Rental Vasco Railway Station</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-base font-medium text-gray-800'>Thar for Rent in Goa</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 text-xs'>
                        <li><Link to="/cars?search=thar" className='hover:text-primary transition-colors'>Mahindra Thar Self-Drive Goa</Link></li>
                        <li><Link to="/cars?search=thar&location=north" className='hover:text-primary transition-colors'>Thar on Rent in North Goa</Link></li>
                        <li><Link to="/cars?search=thar&location=south" className='hover:text-primary transition-colors'>Thar on Rent in South Goa</Link></li>
                        <li><Link to="/cars?search=thar&location=calangute" className='hover:text-primary transition-colors'>Thar Rental in Calangute</Link></li>
                        <li><Link to="/cars?search=thar&location=mopa" className='hover:text-primary transition-colors'>Thar Rental near MOPA Airport</Link></li>
                        <li><Link to="/cars?search=thar&location=dabolim" className='hover:text-primary transition-colors'>Thar Rental near Dabolim Airport</Link></li>
                        <li><Link to="/cars?search=thar&transmission=automatic" className='hover:text-primary transition-colors'>Automatic Thar for Rent in Goa</Link></li>
                    </ul>
                </div>

                {/* Airport Quick Links */}
                <div>
                    <h2 className='text-base font-medium text-gray-800'>Airport — Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 text-xs'>
                        <li><Link to="/cars?location=dabolim" className='hover:text-primary transition-colors'>Car Rentals at Goa Airport (Dabolim)</Link></li>
                        <li><Link to="/cars?location=dabolim" className='hover:text-primary transition-colors'>Self-Drive Cars near Goa Airport</Link></li>
                        <li><Link to="/cars?search=thar&location=dabolim" className='hover:text-primary transition-colors'>Thar on Rent at Dabolim Airport</Link></li>
                        <li><Link to="/cars?location=mopa" className='hover:text-primary transition-colors'>Car Rentals at MOPA Airport</Link></li>
                        <li><Link to="/cars?location=mopa" className='hover:text-primary transition-colors'>Self-Drive Cars near MOPA Airport</Link></li>
                        <li><Link to="/cars?search=thar&location=mopa" className='hover:text-primary transition-colors'>Thar on Rent at MOPA Airport</Link></li>
                    </ul>
                </div>

                {/* Railway Station Quick Links */}
                <div>
                    <h2 className='text-base font-medium text-gray-800'>Railway Station — Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 text-xs'>
                        <li><Link to="/cars?location=madgaon" className='hover:text-primary transition-colors'>Car Rentals near Madgaon Railway Station</Link></li>
                        <li><Link to="/cars?location=thivim" className='hover:text-primary transition-colors'>Car Rentals near Thivim Railway Station</Link></li>
                        <li><Link to="/cars?location=karmali" className='hover:text-primary transition-colors'>Car Rentals near Karmali Railway Station</Link></li>
                        <li><Link to="/cars" className='hover:text-primary transition-colors'>Self-Drive Cars near Railway Stations</Link></li>
                        <li><Link to="/cars?search=thar&location=madgaon" className='hover:text-primary transition-colors'>Thar on Rent near Madgaon Railway Station</Link></li>
                    </ul>
                </div>   

                {/* Quick Links & Resources */}
                <div>
                    <h2 className='text-base font-medium text-gray-800'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 text-xs'>
                        <li><Link to="/" className='hover:text-primary transition-colors'>Home</Link></li>
                        <li><Link to="/cars" className='hover:text-primary transition-colors'>Browse Vehicles</Link></li>
                        <li><Link to="/host" className='hover:text-primary transition-colors'>List Your Vehicle</Link></li>
                        <li><Link to="/about" className='hover:text-primary transition-colors'>About Us</Link></li>
                        <li><Link to="/terms" className='hover:text-primary transition-colors'>Terms of Service</Link></li>
                        <li><Link to="/privacy" className='hover:text-primary transition-colors'>Privacy Policy</Link></li>
                        <li><a href="mailto:support@selfcruz.com" className='hover:text-primary transition-colors'>Help Center</a></li>
                    </ul>
                </div>

                </motion.div>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} SelfCruz. All rights reserved.</p>
                
                {/* Added Made with Love Section */}
                <p className='text-xs flex items-center gap-1 font-medium text-gray-400'>
                    Made with <span className='text-red-500 animate-pulse text-sm'>❤️</span> in Goa
                </p>

                <ul className='flex items-center gap-4'>
                    <li><Link to="/privacy" className='hover:text-primary transition-colors'>Privacy</Link></li>
                    <li>|</li>
                    <li><Link to="/terms" className='hover:text-primary transition-colors'>Terms</Link></li>
                </ul>
            </motion.div>
        </motion.div>
  )
}

export default Footer