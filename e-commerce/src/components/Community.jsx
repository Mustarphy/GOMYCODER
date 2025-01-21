import React from 'react'

export default function Community() {
  return (
    <div className='flex bg-primary text-white flex-col items-center h-96 justify-center mt-20'>
        <section className='flex space-y-5 items-center flex-col w-[45%] text-center'>
            <h1 className='font-black text-4xl'> JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
            <p className='font-medium text-xl'>Type your email down below and be young wild generation</p>

            <div className='flex gap-5 rounded-md p-2 px-3 bg-white'>
                <input type="text" placeholder='Enter your email' className='text-sm text-gray-400 focus:outline-none'/>
                <button className='bg-black rounded-md py-2 px-6'>SEND</button>
            </div>
        </section>
    </div>
  )
}
