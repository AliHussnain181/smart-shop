import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {

  const [animationComplete, setAnimationComplete] = useState(false);

  const onAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <motion.div
      animate={
        animationComplete
          ? { rotate: 0, scale: 1, opacity: 1 }
          : { rotate: 360, scale: [1, 1.2, 1.2, 0], opacity: [1, 1, 0] }
      }
      transition={{ duration: 1.0 }}
      onAnimationComplete={onAnimationComplete}

      className="bg-gray-100 min-h-screen"
    >
      <nav className="bg-white py-4 px-8 shadow-md flex justify-between items-center">
        <div className="flex items-center">
          <FaPhoneAlt className="text-gray-500 mr-2 hidden md:block" />
          <span className="text-gray-500 hidden md:block">Call us: 1-800-123-4567</span>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto py-12 px-8 md:flex md:justify-between">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <p className="text-gray-500 mb-2"><FaLocationArrow className="inline-block mr-2" />123 Main Street</p>
          <p className="text-gray-500 mb-2"><FaLocationArrow className="inline-block mr-2" />Anytown, PAK 12345</p>
          <p className="text-gray-500 mb-2"><FaEnvelope className="inline-block mr-2" />project@electronics.com</p>
          <p className="text-gray-500"><FaPhoneAlt className="inline-block mr-2" />1-800-123-4567</p>
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <p className="mb-8">We are a leading electronics retailer that specializes in providing our customers with the latest and greatest technology at affordable prices. Our team of experts is dedicated to helping you find the perfect electronic device for your needs and budget.</p>
          <h2 className="text-lg font-bold mb-4">Our Mission</h2>
          <p className="mb-2">At Electronic Shop, our mission is to provide our customers with the best possible shopping experience. We believe that everyone deserves access to the latest and greatest technology, and we strive to make that a reality for our customers.</p>
          <p className="mb-2">We are committed to providing exceptional customer service, and our team of experts is always available to answer your questions and help you find the perfect electronic device for your needs and budget.</p>
          <p>Thank you for choosing Electronic Shop for all of your electronic needs. We look forward to serving you!</p>
          <div className='mt-5'>
            <Link to="/" className=" font-Roboto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:opacity-75 text-white py-2 px-4 rounded transition-all duration-500">Shop Now</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
