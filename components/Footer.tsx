import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#81ad73] w-full p-4 flex flex-col md:flex-row md:justify-between items-center'>
      <p className='text-center mb-2 md:mb-0'>© MotherEarth India Foundation 2025. All Rights are Reserved</p>
      <div className='flex space-x-2'>
        <a href="https://www.instagram.com/motherearthindia1986?igsh=azJ5ZmF5OHhtZmx1" aria-label="Instagram"><Instagram /></a>
        <a href="#" aria-label="Facebook"><Facebook /></a>
        <a href="#" aria-label="Twitter"><Twitter /></a>
        <a href="https://www.youtube.com/@prabakaranpg7263" aria-label="Youtube"><Youtube /></a>
      </div>
    </div>
  );
};

export default Footer;