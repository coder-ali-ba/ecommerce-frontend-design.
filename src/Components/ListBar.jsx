import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function ListBar() {
  return (
    
      <div className='w-full bg-gray-200 hidden md:block '>
        <div className=' h-[64px] w-full flex items-center justify-center'>
          <ul className='list-none  flex w-[90%] gap-4 text-gray-500 items-center '>
            <li>Home<NavigateNextIcon/></li>
            <li>Clothings<NavigateNextIcon/> </li>
            <li>Men's Wear<NavigateNextIcon/></li>
            <li>Winter clothings</li>           
          </ul>
        </div>   
    </div>
  )
}

export default ListBar
