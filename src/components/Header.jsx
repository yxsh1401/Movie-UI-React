import React, { useState } from 'react'
import HeaderItem from './HeaderItem';
import rectangle from './../assets/images/left panel/Logo Alternative.png'
import profile from './../assets/images/profile_side/images (24) 1.png'
import { HiHome, HiMagnifyingGlass, HiPlayCircle } from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";    
import { HiPlus } from "react-icons/hi";
function Header() {
    const [toggle,setToggle] = useState(false)

    const menu = [
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        // {
        //     name:'WATCHLIST',
        //     icon:HiPlus
        // },
        // {
        //     name:'ORIGINALS',
        //     icon:HiStar
        // },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        // {
        //     name:'SERIES',
        //     icon:HiTv
        // },
    ]
  return (
    <div className='flex justify-between p-5 bg-sky-950'>
        <div className='flex gap-8 items-center'>   
        <img src={rectangle} alt="logo" className='w-[100px] m-5 rounded-xl'/>
        <div className='hidden md:flex gap-8'>
        {menu.map((item, index)=>(
            <HeaderItem key={index} name={item.name} Icon={item.icon}/>
        ))}
        </div>
        <div className='flex md:hidden gap-8'>
        {menu.map((item,index)=>index<3&&(
            <HeaderItem key={index} name={''} Icon={item.icon}/>
        ))}
        </div>

        <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical}/>
            {toggle?<div className='absolute mt-3 bg-[#121212] p-3 border-gray-500 border-[1px] px-5 py-4'>
                {menu.map((item,index)=>index>2&&(
                <HeaderItem key={index} name={item.name} Icon={item.icon}/>
                ))}
            </div>:null}
        </div>


        </div>
        <img src={profile} alt="profile" className='w-[40px] h-[40px] m-8 rounded-full' />
          
    </div>
      
  )
}

export default Header
