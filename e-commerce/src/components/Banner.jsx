import React from 'react'

export default function Banner() {
  return (
    <div className='flex my-16 h-10/12 bg-primary items-center'>
        <div className='w-1/2'>
            <img src='banner.png' alt='' className='w-10/12 object-contain'/>
        </div>
        <div className='w-1/2 px-4 mb-4'>
            <h1 className='font-black mb-3 text-7xl bg-white inline-block'>PAYDAY</h1>
            <h1 className='font-black text-7xl'>SALE NOW</h1>
            <p className='w-1/2 my-8'>Spend minimal $100 get 30% off voucher code for your next purchase</p>
            <p className='font-black'>1 June - 10 June 2021</p>
            <p>*Terms & Conditions apply</p>
            <button className='text-white bg-black p-2 rounded-md my-5'>SHOP NOW</button>
        </div>
    </div>
  )
}
