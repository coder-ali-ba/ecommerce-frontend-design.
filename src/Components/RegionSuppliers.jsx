import React from 'react'
import UAE from '../assets/5b7e05677ed6e6d0ff7b7df11d34540f89efa0eb.png'
import Aus from '../assets/40b3887a79dd259e5237ee572632324634be943a.png'
import US from '../assets/41045fb1972e45d68802086bd84cb513e501f747.png'
import RUS from '../assets/68db557e1de5cb1fee9e6089b52ad036ebe980b9.png'
import ITL from '../assets/b8478718292fe0d58fea5b0a42c117e22f308f6e.png'
import DEN from '../assets/4bdeee2e40758d1d058d5256db7f52ea7665f723.png'
import Fran from '../assets/46fb1676ec598cc24c50c037a822568c77e6eb7d.png'
import CHI from '../assets/ecfaf4eaff3006f5d8cc40c56c9e21eb9661484c.png'
import GB from '../assets/6b09898b0abefaab438bf2b6aab101ac843c25bd.png'


function RegionSuppliers() {
  return (
    <>
          <h1 className='ml-18 hidden md:block font-bold text-xl'>RegionSuppliers</h1>
    <div className='h-[138px]  mt-6 w-full hidden md:flex items-center justify-center'>

        <div className='w-full lg:w-[90%] mr-3  h-full flex flex-col gap-4 '>
            <div className='flex justify-between'>
              <div className='flex gap-2 items-center h-[36px]'>
                <img src={UAE} className='w-[28px] h-[20px]' />
                <div>
                    <p className='text-md leading-tight'>Arab Emirates</p>
                    <p className='text-sm text-gray-500 leading-tight'>Shopname.ae</p>
                </div>
              </div>
              <div className='flex gap-2 items-center h-[36px]'>
                <img src={Aus} className='w-[28px] h-[20px]' />
                <div>
                    <p className='text-md leading-tight'>Australia</p>
                    <p className='text-sm text-gray-500 leading-tight'>Shopname.ae</p>
                </div>
              </div>
              <div className='flex gap-2 items-center h-[36px]'>
                <img src={US} className='w-[28px] h-[20px]' />
                <div>
                    <p className='text-md leading-tight'>United States</p>
                    <p className='text-sm text-gray-500 leading-tight'>Shopname.ae</p>
                </div>
              </div>
              <div className='flex gap-2 items-center h-[36px]'>
                <img src={RUS} className='w-[28px] h-[20px]' />
                <div>
                    <p className='text-md leading-tight'>Russia</p>
                    <p className='text-sm text-gray-500 leading-tight'>Shopname.ae</p>
                </div>
              </div>
              <div className='flex gap-2 items-center h-[36px]'>
                <img src={ITL} className='w-[28px] h-[20px]' />
                <div>
                    <p className='text-md leading-tight'>Italy</p>
                    <p className='text-sm text-gray-500 leading-tight'>Shopname.ae</p>
                </div>
              </div>
            </div>

            <div className='flex justify-between'>
              <div className='flex gap-2 items-center h-[36px]'>
                <img src={Fran} className='w-[28px] h-[20px]' />
                <div>
                    <p className='text-md leading-tight'>France</p>
                    <p className='text-sm text-gray-500 leading-tight'>Shopname.ae</p>
                </div>
              </div>
              <div className='flex gap-2 items-center h-[36px]'>
                <img src={DEN} className='w-[28px] h-[20px]' />
                <div>
                    <p className='text-md leading-tight'>Denmark</p>
                    <p className='text-sm text-gray-500 leading-tight'>Shopname.ae</p>
                </div>
              </div>
              <div className='flex gap-2 items-center h-[36px]'>
                <img src={UAE} className='w-[28px] h-[20px]' />
                <div>
                    <p className='text-md leading-tight'>Arab Emirates</p>
                    <p className='text-sm text-gray-500 leading-tight'>Shopname.ae</p>
                </div>
              </div>
              <div className='flex gap-2 items-center h-[36px]'>
                <img src={CHI} className='w-[28px] h-[20px]' />
                <div>
                    <p className='text-md leading-tight'>China</p>
                    <p className='text-sm text-gray-500 leading-tight'>Shopname.ae</p>
                </div>
              </div>
              <div className='flex gap-2 items-center h-[36px]'>
                <img src={GB} className='w-[28px] h-[20px]' />
                <div>
                    <p className='text-md leading-tight'>Great Britain</p>
                    <p className='text-sm text-gray-500 leading-tight'>Shopname.ae</p>
                </div>
              </div>
            </div>
        </div>
        


    </div>
    </>
  )
}

export default RegionSuppliers
