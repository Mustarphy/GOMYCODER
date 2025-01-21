import React from 'react'

export default function Voucher() {
  return (
    <section className='flex flex-col items-center md:flex-row w-4/5 justify-between mx-auto my-16'>
        <div className='flex flex-col items-start my-20 space-y-10 w-[30%]'>
            <h1 className='font-black text-4xl'>DOWNLOAD APP & GET THE VOUCHER!</h1>
            <p>Get 30% off for first transaction using Rondovision mobile app for now.</p>
            <div className='flex gap-5'>
                <img src='apple.png' alt=''/>
                <img src='playstore.png' alt='' />
            </div>
        </div>
        <div className='w-1/2'>
            <img src='voucher.png' alt='' />
        </div>
        
    </section>
  )
}
