import React from 'react'
import githubIcon from '../assets/githubIcon.png'
import linkedinIcon from '../assets/linkedinIcon.png'
import leetcodeIcon from '../assets/leetcodeIcon.png'
import codeforcesIcon from '../assets/codeforcesIcon.png'
const Navbar = () => {
  return (
    <div className='py-5 lg:py-10 px-5 lg:px-20 flex justify-between items-center'>
        <div className='flex flex-col gap-2 lg:gap-3'>
            <h1 id="navbar-name" className='text-md lg:text-2xl font-black'>Harshit Upreti</h1>
            <div className='flex gap-2 lg:gap-3'>
                <a href="https://github.com/harshitupreti101" target='_blank'><img className="h-3 lg:h-4" src={githubIcon} alt="" /></a>
                <a href="https://www.linkedin.com/in/harshit-upreti-869b31247/" target='_blank'><img className="h-3 lg:h-4" src={linkedinIcon} alt="" /></a>
                <a href="https://codeforces.com/profile/harshitupreti101" target='_blank'><img className="h-3 lg:h-4" src={codeforcesIcon} alt="" /></a>
                <a href="https://leetcode.com/u/Harshit_Upreti/" target='_blank'><img className="h-3 lg:h-4" src={leetcodeIcon} alt="" /></a>
            </div>
        </div>
        <a href="mailto:harshitupreti101@gmail.com">
          <button className='text-sm lg:text-xl font-bold text-white bg-gradient-to-r from-[#5FD5E9] to-blue-700 py-[5px] lg:py-[10px] px-2 lg:px-4 rounded-xl cursor-pointer hover:shadow-xl hover:bg-white hover:bg-clip-text hover:text-transparent'>Contact me</button>
        </a>
    </div>
  )
}

export default Navbar