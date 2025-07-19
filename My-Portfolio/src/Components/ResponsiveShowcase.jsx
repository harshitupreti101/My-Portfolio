import React from 'react'
import iphoneFrame1 from '../assets/iphoneFrame1.png'
const ResponsiveShowcase = () => {
  return (
    <div className='mt-10'>
        <div className='p-10 lg:p-20 flex flex-col justify-between lg:block'>
            <h2 className='text-2xl md:text-3xl lg:text-6xl font-bold '>Responsive Web Design <br/> At Its <span className='bg-gradient-to-r from-[#5FD5E9] to-blue-800  bg-clip-text text-transparent'>Finest</span></h2>
            <p className=' text-md lg:text-2xl  mt-4 font-bold bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 bg-clip-text text-transparent'>Scroll to switch device!</p>
            <div className="flex justify-center items-center pt-15">
                <img className="h-[70vh] aspect-[4/5]" src={iphoneFrame1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ResponsiveShowcase