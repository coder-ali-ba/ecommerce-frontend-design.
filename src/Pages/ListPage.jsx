import React from 'react'
import Navbar from '../Components/Navbar'
import Category from '../Components/Category'
import TopBar from '../Components/Filter'


function ListPage() {
  return (
    <div className=''>
      <Navbar />
      <Category />
      <TopBar />
      <div className='w-full h-[64px] bg-gray-200'></div>
    </div>
  )
}

export default ListPage
