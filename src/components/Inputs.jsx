import React from 'react'
import { UilSearch ,UilLocationPoint} from '@iconscout/react-unicons'
// import { UilLocationPoint } from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 justify-center items-center space-x-4'>
          <input type='text' className='text-xl font-light p-2 focus:outline-none rounded   capitaliz' placeholder='search for city ......'/>
          <UilSearch size={25} className='text-white cursor-pointer  transition ease-out hover:scale-125'/>
          <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
        </div>
        <div className=' flex flex-row justify-center items-center w-1/4'>
          <button name='metric' className='text-xl text-white font-light'>°C</button>
          <p className='text-xl text-white mx-1'>|</p>
          <button name='imperial' className='text-xl text-white font-light'>°F  </button>
        </div>
    </div>
  )
}

export default Inputs
