import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import TourIcon from '@mui/icons-material/Tour';

function Filter() {
  return (
    <div className='flex h-[56px] justify-around text-center border-1 border-gray-100 items-center'>
      <div className='w-3/4 text-center'>
        <ul className='flex gap-16 text-center justify-center pr-10'>
          < MenuIcon className='' />
          <li>All Categories</li>
          <li>Hot Offers</li>
          <li>Gift Box</li>
          <li>Projects</li>
          <li>Menu Items</li>
          <select>
            <option value="Help">Help</option>
            <option value="Help">Help</option>
            <option value="Help">Help</option>
            <option value="Help">Help</option>
          </select>
        </ul>
      </div>

      <div className='flex gap-8 w-1/4'>
        <div>

         English, 
         <select>
          <option value="USD">USD</option>
          <option value="PKR">PKR</option>
         </select>
        </div>

        <div>
         Shipto
          <TourIcon />
          <select>
            <option value="UAE">UAE</option>
            <option value="PAK">PAK</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filter
