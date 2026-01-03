import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import GridViewIcon from '@mui/icons-material/GridView';


function ListFilter() {
  return (
    <div className='h-[62px] p-3 rounded-md w-full  flex items-center justify-between bg-white border border-gray-200'>
      <p>12,911 items in <span className='font-bold'>Mobile accessory</span></p>
      <div className='flex justify-between gap-3'>
        <div className='flex items-center gap-2'>
          <input type="checkbox" className='font-bold'/>
          <p>Verified Only</p>
        </div>
        <div>
            <select name="featured" id="" className='h-[40px] ring-1 rounded-md py-1 px-2'>
                <option value="Featured">Featured</option>
            </select>
        </div>
        <div className='flex items-center ring-1 rounded-md p-2'>
           <MenuIcon />
           
           <GridViewIcon />
        </div>
      </div>
    </div>
  )
}

export default ListFilter
