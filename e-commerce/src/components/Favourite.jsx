import React from 'react'
import { Card } from './Catalog'

export default function Favourite() {
  return (
    <div className='container mx-auto w-screen'>
    <h1 className='font-black my-20 text-2xl'>Young's Favourite</h1>
    <div className='flex justify-between'>
       <Card image={'fav1.png'} title={'Trending on instagram'} size={40}/>
       <Card image={'fav2.png'} title={'All Under $40'}size={40}/>
    </div>
    </div>
  )
}
