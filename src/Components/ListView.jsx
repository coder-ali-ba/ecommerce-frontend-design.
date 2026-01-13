import React from 'react'
import mobile from '../assets/01ad73c0a2d288ce5bd52ddfac2945120df5102b.png'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

function ListView() {
  return (
    <>
    <Link to="/itemdetails" className="w-full md:h-[200px]  mb-2 mx-auto bg-white border border-gray-300 rounded-md p-1 flex gap-3 items-center shadow-sm">
      
      {/* Image */}
      <img
        src={mobile}
        alt="product"
        className="w-24 h-24 md:w-32 md:h-32 md:mt-3 object-cover rounded-lg"
      />

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-sm font-semibold leading-tight">
          Canon Camera EOS 2000, Black 10x zoom
        </h2>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-red-500 font-bold">$998.00</span>
          <span className="text-gray-400 line-through text-xs">$1128.00</span>         
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-xs mt-1">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-gray-500">7.5</span>
          <span className="text-gray-400">· 154 orders</span>
        </div>
        <p className='hidden md:flex'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus dolorem et, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus dolorem  deserunt aut sequi ad.</p>

        {/* Shipping */}
        <p className="flex md:hidden text-green-600 text-xs mt-1">Free Shipping</p>
        <Link className='hidden md:flex text-blue-500 mt-2'>View details</Link>
      </div>

      {/* Wishlist */}
      <button className="h-full text-gray-400 hover:text-red-500 hidden md:flex items-start">
        <Heart size={18} />
      </button>
    </Link>


    <Link to="/itemdetails" className="w-full md:h-[200px]  mb-2 mx-auto bg-white border border-gray-300 rounded-md p-1 flex gap-3 items-center shadow-sm">
      
      {/* Image */}
      <img
        src={mobile}
        alt="product"
        className="w-24 h-24 md:w-32 md:h-32 md:mt-3 object-cover rounded-lg"
      />

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-sm font-semibold leading-tight">
          Canon Camera EOS 2000, Black 10x zoom
        </h2>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-red-500 font-bold">$998.00</span>
          <span className="text-gray-400 line-through text-xs">$1128.00</span>         
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-xs mt-1">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-gray-500">7.5</span>
          <span className="text-gray-400">· 154 orders</span>
        </div>
        <p className='hidden md:flex'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus dolorem et, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus dolorem  deserunt aut sequi ad.</p>

        {/* Shipping */}
        <p className="flex md:hidden text-green-600 text-xs mt-1">Free Shipping</p>
        <Link className='hidden md:flex text-blue-500 mt-2'>View details</Link>
      </div>

      {/* Wishlist */}
      <button className="h-full text-gray-400 hover:text-red-500 hidden md:flex items-start">
        <Heart size={18} />
      </button>
    </Link>


    <Link to="/itemdetails" className="w-full md:h-[200px]  mb-2 mx-auto bg-white border border-gray-300 rounded-md p-1 flex gap-3 items-center shadow-sm">
      
      {/* Image */}
      <img
        src={mobile}
        alt="product"
        className="w-24 h-24 md:w-32 md:h-32 md:mt-3 object-cover rounded-lg"
      />

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-sm font-semibold leading-tight">
          Canon Camera EOS 2000, Black 10x zoom
        </h2>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-red-500 font-bold">$998.00</span>
          <span className="text-gray-400 line-through text-xs">$1128.00</span>         
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-xs mt-1">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-gray-500">7.5</span>
          <span className="text-gray-400">· 154 orders</span>
        </div>
        <p className='hidden md:flex'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus dolorem et, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus dolorem  deserunt aut sequi ad.</p>

        {/* Shipping */}
        <p className="flex md:hidden text-green-600 text-xs mt-1">Free Shipping</p>
        <Link className='hidden md:flex text-blue-500 mt-2'>View details</Link>
      </div>

      {/* Wishlist */}
      <button className="h-full text-gray-400 hover:text-red-500 hidden md:flex items-start">
        <Heart size={18} />
      </button>
    </Link>


    <Link to="/itemdetails" className="w-full md:h-[200px]  mb-2 mx-auto bg-white border border-gray-300 rounded-md p-1 flex gap-3 items-center shadow-sm">
      
      {/* Image */}
      <img
        src={mobile}
        alt="product"
        className="w-24 h-24 md:w-32 md:h-32 md:mt-3 object-cover rounded-lg"
      />

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-sm font-semibold leading-tight">
          Canon Camera EOS 2000, Black 10x zoom
        </h2>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-red-500 font-bold">$998.00</span>
          <span className="text-gray-400 line-through text-xs">$1128.00</span>         
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-xs mt-1">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-gray-500">7.5</span>
          <span className="text-gray-400">· 154 orders</span>
        </div>
        <p className='hidden md:flex'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus dolorem et, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus dolorem  deserunt aut sequi ad.</p>

        {/* Shipping */}
        <p className="flex md:hidden text-green-600 text-xs mt-1">Free Shipping</p>
        <Link className='hidden md:flex text-blue-500 mt-2'>View details</Link>
      </div>

      {/* Wishlist */}
      <button className="h-full text-gray-400 hover:text-red-500 hidden md:flex items-start">
        <Heart size={18} />
      </button>
    </Link>


    <Link to="/itemdetails" className="w-full md:h-[200px]  mb-2 mx-auto bg-white border border-gray-300 rounded-md p-1 flex gap-3 items-center shadow-sm">
      
      {/* Image */}
      <img
        src={mobile}
        alt="product"
        className="w-24 h-24 md:w-32 md:h-32 md:mt-3 object-cover rounded-lg"
      />

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-sm font-semibold leading-tight">
          Canon Camera EOS 2000, Black 10x zoom
        </h2>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-red-500 font-bold">$998.00</span>
          <span className="text-gray-400 line-through text-xs">$1128.00</span>         
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-xs mt-1">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-gray-500">7.5</span>
          <span className="text-gray-400">· 154 orders</span>
        </div>
        <p className='hidden md:flex'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus dolorem et, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus dolorem  deserunt aut sequi ad.</p>

        {/* Shipping */}
        <p className="flex md:hidden text-green-600 text-xs mt-1">Free Shipping</p>
        <Link className='hidden md:flex text-blue-500 mt-2'>View details</Link>
      </div>

      {/* Wishlist */}
      <button className="h-full text-gray-400 hover:text-red-500 hidden md:flex items-start">
        <Heart size={18} />
      </button>
    </Link>


    <Link to="/itemdetails" className="w-full md:h-[200px]  mb-2 mx-auto bg-white border border-gray-300 rounded-md p-1 flex gap-3 items-center shadow-sm">
      
      {/* Image */}
      <img
        src={mobile}
        alt="product"
        className="w-24 h-24 md:w-32 md:h-32 md:mt-3 object-cover rounded-lg"
      />

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-sm font-semibold leading-tight">
          Canon Camera EOS 2000, Black 10x zoom
        </h2>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-red-500 font-bold">$998.00</span>
          <span className="text-gray-400 line-through text-xs">$1128.00</span>         
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-xs mt-1">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-gray-500">7.5</span>
          <span className="text-gray-400">· 154 orders</span>
        </div>
        <p className='hidden md:flex'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus dolorem et, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus dolorem  deserunt aut sequi ad.</p>

        {/* Shipping */}
        <p className="flex md:hidden text-green-600 text-xs mt-1">Free Shipping</p>
        <Link className='hidden md:flex text-blue-500 mt-2'>View details</Link>
      </div>

      {/* Wishlist */}
      <button className="h-full text-gray-400 hover:text-red-500 hidden md:flex items-start">
        <Heart size={18} />
      </button>
    </Link>

    

    
 </>
  )
}

export default ListView
