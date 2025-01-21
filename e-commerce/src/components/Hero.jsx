import React from 'react'

export default function Hero() {
  return (
    <section className='mx-10 px-4 rounded-lg bg-[#F4F6F5] '>
        <main className='flex items-center'>
        <div className='w-1/2'>
            <h1 className='font-black text-7xl pb-2 inline-block bg-white'>LET'S</h1>
            <h1 className='font-black text-7xl pb-2'>EXPLORE </h1>
            <h1 className='font-black text-7xl pb-2 inline-block p-3 bg-primary'>UNIQUE </h1>
            <h1 className='font-black text-7xl pb-2'>CLOTHES. </h1>
            <p className='text-2xl my-5'>Live for Influential and Innovative fashion!</p>
            <button className='bg-black text-white p-5 rounded-md mt-3'>Shop Now</button>
        </div>
        <div>
            <img src='hero.png' alt='' className='w-100'/>
        </div>
        </main>
    </section>
  )
}
