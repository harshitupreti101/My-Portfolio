import React from 'react'

const Email = () => {
  return (
    <div className='p-20'>
        <h2 className='text-2xl md:text-3xl lg:text-6xl font-bold '>Get in <span className='bg-gradient-to-r from-[#5FD5E9] to-blue-800  bg-clip-text text-transparent'>Touch</span></h2>
        <p className='text-2xl  mt-4'>Open for job opportunities, <br/>open-source collaboration <br/> and freelance requests.</p>
        <a href='mailto:harshitupreti101@gmail.com'>
          <button className='text-xl py-3 px-4 shadow-2xl cursor-pointer rounded-2xl mt-4 font-bold bg-gradient-to-r from-[#5FD5E9] to-blue-700 text-white hover:bg-clip-text hover:text-transparent'> Send Email</button>
        </a>
    </div>
  )
}       

export default Email