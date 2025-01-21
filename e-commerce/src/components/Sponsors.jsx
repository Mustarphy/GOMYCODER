import React from 'react'

export default function Sponsors() {
    const imgUrl = [
        "img1.png",
        "img2.png",
        "img3.png",
        "img4.png",
        "img5.png",
        "img6.png",
    ]
  return (
    <div className='bg border border-red-600 border-spacing-3 my-6'>
       <div className='flex justify-between items-center'>
       {imgUrl.map((Image)=>(
        <img key={Image} src={Image} alt={Image} />
       )
       )}
       </div> 
    </div>
  )
}
