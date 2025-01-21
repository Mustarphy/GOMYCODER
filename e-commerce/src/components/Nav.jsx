import React from 'react'

export default function Nav() {
  let navTexts = ["CATALOG", "FASHION","FAVOURITE", "LIFESTYLE"]
  return (
    <nav className='mx-10 mt-3 mb-4 flex justify-between items-center'>
        <div className='flex'>
            <img src='brand.png' alt=''/>
            <h1 className='font-black'>FASHION</h1>
        </div>
        <ul className='flex justify-between items-center font-medium'>
            {navTexts.map(text=>(
              <li key={text} className='mx-5'><a href='#'>{text}</a></li>
            ))}
            <li className='mx-5 text-white bg-black rounded p-2'><a href='#'>SIGN UP</a></li>
        </ul>
    </nav>
  )
}

