import React from 'react'

export default function Catalog() {
let prods = [
    {imgUrl:"prod1.png", title:"Hodies & Sweetshirt"},
    {imgUrl:"prod2.png", title:"Coats & Parkas"},
    {imgUrl:"prod3.png", title:"Hodies & Sweetshirt"},
]

  return (
    <div className='mx-10'><h1 className='font-black text-4xl my-16'> NEW ARRIVALS</h1>
    <div className='flex justify-between'>
        {
            prods.map((prod, index)=>(
                <Card key={index} image={prod.imgUrl} title={prod.title}/>
            ))
        }

    </div>
    </div>
  )
}


export function Card({image, title}) {
  return (
    <div className='max-w-[30%]'>
        <img src={image} alt=''/>
        <div className='flex mt-10 justify-between'>
            <div className=''>
                <h3 className='font-medium'>{title}</h3>
                <p className='text-[#7F7F7F7F]'> Explore now</p>
            </div>
            <div className='text-2xl'>
                →
                </div>
        </div>
    </div>
  )
}
