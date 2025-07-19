import React from 'react'

const TechStack = () => {
  return (
    <div className='pl-20 py-20'>
      <div className='flex justify-between items-center shadow-2xl py-45 pl-30 rounded-2xl'>
        <div className="w-[50%]">
          <h2 className='text-2xl md:text-3xl lg:text-6xl font-bold bg-gradient-to-r from-[#5FD5E9] to-blue-800  bg-clip-text text-transparent'>Tech Stack</h2>
          <p className='text-2xl  mt-4'>Technologies I use to design, build and deploy <br />amazing web pages</p>
        </div>
        <div id="tech-stack-list" className='overflow-auto w-[50%]'>
          <div className='flex gap-3 cursor-pointer text-xl'>  
            <h3 className='py-20 px-25 shadow-2xl rounded-2xl font-bold bg-gradient-to-r from-[#5FD5E9] to-blue-700  text-white hover:bg-clip-text hover:text-transparent'>React</h3>
            <h3 className='py-20 px-25 shadow-2xl rounded-2xl font-bold bg-gradient-to-r from-[#5FD5E9] to-blue-700  text-white hover:bg-clip-text hover:text-transparent'>Tailwind</h3>
            <h3 className='py-20 px-25 shadow-2xl rounded-2xl font-bold bg-gradient-to-r from-[#5FD5E9] to-blue-700  text-white hover:bg-clip-text hover:text-transparent'>Javascript</h3>
            <h3 className='py-20 px-25 shadow-2xl rounded-2xl font-bold bg-gradient-to-r from-[#5FD5E9] to-blue-700  text-white hover:bg-clip-text hover:text-transparent'>CSS</h3>
            <h3 className='py-20 px-25 shadow-2xl rounded-2xl font-bold bg-gradient-to-r from-[#5FD5E9] to-blue-700  text-white hover:bg-clip-text hover:text-transparent'>Figma</h3>
            <h3 className='py-20 px-25 shadow-2xl rounded-2xl font-bold bg-gradient-to-r from-[#5FD5E9] to-blue-700  text-white hover:bg-clip-text hover:text-transparent'>Git</h3>
            <h3 className='py-20 px-25 shadow-2xl rounded-2xl font-bold bg-gradient-to-r from-[#5FD5E9] to-blue-700  text-white hover:bg-clip-text hover:text-transparent'>GitHub</h3>
            <h3 className='py-20 px-25 shadow-2xl rounded-2xl font-bold bg-gradient-to-r from-[#5FD5E9] to-blue-700  text-white hover:bg-clip-text hover:text-transparent'>HTML</h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TechStack