import React from 'react'
import mobile from '../assets/01ad73c0a2d288ce5bd52ddfac2945120df5102b.png'

function ListView() {
  return (
    <div className='flex h-[230px] w-full border  border-gray-300 rounded-md bg-white'>
      <div className='w-[20%] h-full '>
        <img src={mobile} className='w-[95%] h-[90%] mt-3' alt="" />
      </div>
      <div className='w-[75%] h-full border pt-3 pl-4'>
        <p>Canon Cmera EOS 2000, Black 10x zoom</p>
        <span className='flex gap-4 items-center'><p className='font-bold text-xl'>$998.00</p> <p className='line-through text-gray-500'>$1128.00</p>
        </span>
        <div className='flex gap-8'>
           <span className='flex items-center text-xl'> <p className=' text-yellow-500 pr-1'>★ ★ ★ ★</p> <p className='text-gray-500'>★</p>
           </span>
           <ul className='list-disc flex gap-8'>
            <li>154 Orders</li>
            <li>Free Shipping</li>
           </ul>
        </div>
      </div>
      <div className='w-[5%] h-full border'></div>
        
    </div>
  )
}

export default ListView
