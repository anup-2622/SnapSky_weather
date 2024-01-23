import React from 'react'

function TopButton() {
    const cities = [
        {
            id:1,
            city :'London'
        },
        {
            id:2,
            city :'Delhi'
        },
        {
            id:3,
            city :'Tokoyo'
        },
        {
            id:4,
            city :'Berlin'
        },
        {
            id:5,
            city :'New York',
        }
    ]
  return (
    <div className='flex  items-center justify-around my-6'>
        {cities.map((c_name)=>(
            <button key={c_name.id} className='text-white  text-lg font-medium'>{c_name.city}</button>
        ))}
    </div>
  )
}

export default TopButton
