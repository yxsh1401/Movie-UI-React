import React from 'react'
//images import
import disney from "../assets/images/disney.png";
import marvel from "../assets/images/marvel.png";
import nationalG from "../assets/images/nationalG.png";
import starwar from "../assets/images/starwar.png";
import pixar from "../assets/images/pixar.png";
// //video import
import disneyV from '../assets/Videos/disney.mp4'
import marvelV from '../assets/Videos/marvel.mp4'
import nationalGV from '../assets/Videos/national-geographic.mp4'
import starwarV from '../assets/Videos/star-wars.mp4'
import pixarV from '../assets/Videos/pixar.mp4'


function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:marvel,
            video:marvelV
        },
        {
            id:3,
            image:nationalG,
            video:nationalGV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:pixar,
            video:pixarV
        }
    ]

  return (
    <div className='flex gap-5 p-2 px-5 md:px-16'>
      {productionHouseList.map((item)=>(
        <div key={item.id} className='border-2 border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out shadow-xl shadow-gray-800'>
            <video src={item.video} autoPlay loop playsInline className='absolute rounded-md z-0 opacity-0 hover:opacity-60'/>
            <img src={item.image} className='w-full z-[1]' />
            
        </div>
      ))}
    </div>
  )
}

export default ProductionHouse
