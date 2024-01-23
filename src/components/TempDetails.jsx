import React from 'react'
import { UilTemperatureHalf , UilTear , UilWind , UilSun , UilSunset , UilArrowUp , UilArrowDown } from '@iconscout/react-unicons'
function TempDetails() {
  return (
    <div>
     <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
      
     <p>Cloud</p>
     </div>
     <div className='flex flex-row justify-between items-center text-white py-3'>
      <img className='w-20 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZgjqrxa2Lk_w2K49jfMgm0vc4t8d3uvQixFzkjDeeN08yO5LGFkezXoFg6uU6KtH00o&usqp=CAU" alt="" />
      <p className='text-5xl'>34°</p>
      <div className='flex flex-col space-y-2'>
        <div className="flex font-light text-sm items-center  justify-center  ">
          <UilTemperatureHalf size={18} className='mr-1'/>
          Real Fill:
          <span className='font-medium ml-1'>32°</span>
        </div>
        <div className="flex font-light text-sm items-center  justify-center  ">
          <UilTear size={18} className='mr-1'/>
          Humidity:
          <span className='font-medium ml-1'>32%</span>
        </div>
        <div className="flex font-light text-sm items-center  justify-center  ">
          <UilWind size={18} className='mr-1'/>
         Wind:
          <span className='font-medium ml-1'>32 Km/h</span>
        </div>
      </div>
     </div>
     <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm  py-3">
      <UilSun/><p className='font-light'>Rise <span className='font-medium ml-1'>6:12 AM</span></p>
      <p className='font-light'>|</p>
      <UilSunset/><p className='font-light'>Set <span className='font-medium ml-1'>6:12 PM</span></p>
      <p className='font-light'>|</p>
      <UilArrowUp/><p className='font-light'>High <span className='font-medium ml-1'>40°</span></p>
      <p className='font-light'>|</p>
      <UilArrowDown/><p className='font-light'>Low <span className='font-medium ml-1'>40°</span></p>
   
     </div>
    </div>
  )
}

export default TempDetails
