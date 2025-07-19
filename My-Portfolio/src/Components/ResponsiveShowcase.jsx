import React from 'react'
import iphoneFrame1 from '../assets/iphoneFrame1.png'
const ResponsiveShowcase = () => {
  return (
    <div>
        <div className='p-20'>
            <h2 className='text-2xl md:text-3xl lg:text-6xl font-bold bg-gradient-to-r'>Responsive Web Design <br/> At Its <span className='bg-gradient-to-r from-[#5FD5E9] to-blue-800  bg-clip-text text-transparent'>Finest</span></h2>
            <p className='text-2xl  mt-4 font-bold bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 bg-clip-text text-transparent'>Scroll to switch device!</p>
            <div className="flex justify-center items-center pt-15">
                <img className="h-120" src={iphoneFrame1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ResponsiveShowcase