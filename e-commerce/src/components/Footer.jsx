import React from 'react'

import{FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare,} from 'react-icons/fa'

export default function Footer() {
  return (
    <section className='bg-black text-gray-400 py-10 h-80 flex justify-around items-center'>
      <div className='w-[20%] flex flex-col items-start space-y-5'>
        <h1 className='font-black text-white text-4xl'>FASHION</h1>
        <p>Complete your style with awesome clothes from us.</p>
        <div>
          <div className='flex gap-1'>
            <FaFacebookSquare size={36} className='text-primary'/>
            <FaInstagramSquare size={36} className='text-primary'/>
            <FaTwitterSquare size={36} className='text-primary'/>
            <FaLinkedin size={36} className='text-primary'/>
          </div>
        </div>
      </div>

      <section className='flex justify-between w-[50%]'>
        <div className='w-[20%] flex flex-col items-start space-y-5'>
          <h1 className='font-black text-white text-lg'>Company</h1>
          <p>About</p>
          <p>Contact us</p>
          <p>Support</p>
          <p>Carrers</p>
        </div>
        <div className='w-[20%] flex flex-col items-start space-y-5'>
          <h1 className='font-black text-white text-lg'>Quick Links</h1>
          <p>Check your location</p>
          <p>Orders Tracking</p>
          <p>Size Guide</p>
          <p>FAQS</p>
        </div>
        <div className='w-[20%] flex flex-col items-start space-y-5'>
          <h1 className='font-black text-white text-lg'>Legal</h1>
          <p>Terms & Condition</p>
          <p>Privacy Policies</p>
        </div>
      </section>
    </section>
  )
}
