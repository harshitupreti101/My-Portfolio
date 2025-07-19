import React, { useState,useRef } from 'react'
import iphoneFrame from '../assets/iphoneFrame.png'
import githubIcon from '../assets/githubIcon.png'
import githubIconHover from '../assets/githubIconHover.png'
import useinView from './useinView'
const HeroSection = () => {
    const [isHover, setIsHover] = useState(false);
    const aboutRef = useRef(null);
    const showAbout = useinView(aboutRef);

    return (
        <div className='flex '>
            {/* ------------------------------left hero section ----------------------------- */}
            <div className='h-full w-[85%]'>
                <div ref={aboutRef} className={`ml-20 text-2xl md:text-3xl lg:text-6xl transition-all duration-700 ease-in-out 
                                                 ${showAbout ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-x-20'}`}>
                    <h4 className='text-lg md:text-1xl lg:text-2xl mt-15 font-bold bg-gradient-to-r from-[#5FD5E9] via-blue-700 to-blue-950 bg-clip-text text-transparent'>Let's build something amazing</h4>
                    <h1 className='mt-2 font-bold'>Unlimited Possibilities </h1>
                    <h1 className='mt-4 font-bold'>You imagine it?</h1>
                    <h3 className="mt-4 font-bold bg-gradient-to-r from-[#5FD5E9] via-blue-700 to-blue-950 bg-clip-text text-transparent">I'll build it.</h3>
                </div>
                <div ref={aboutRef} className={` flex flex-col justify-center items-center transition-all duration-700 ease-in-out 
                                                 ${showAbout ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} `}>
                    <div className='my-30 mx-20 p-12 shadow-2xl rounded-2xl'>
                        <h4 className='text-xl font-bold mb-10'>About me</h4>
                        <p className='text-lg mt-6 text-gray-600'>Hi, my name is Harshit Upreti, I'm a Web Developer <span className='text-gray-700 font-bold'>specialized in the Frontend stack.</span> <span className="cursor-pointer bg-gradient-to-r from-[#5FD5E9] via-blue-500 to-blue-700 bg-clip-text text-transparent font-bold">Learn more about my tech stack!</span> </p>
                        <p className='text-lg mt-6 text-gray-600'>I'm 21 years old, currently living in India. I love to do everything related in the process of building a web application, from designing, to developing and finally deploying projects</p>
                        <p className='text-lg mt-6 text-gray-600'>If you would like to contact me, <span className="cursor-pointer bg-gradient-to-r from-[#5FD5E9] via-blue-500 to-blue-700 bg-clip-text text-transparent font-bold">send me an email!</span></p>
                    </div>
                </div>
            </div>
            {/* ----------------------------right hero section----------------------------- */}
            <div className='h-full flex flex-col items-end w-[50%]'>
                <div ref={aboutRef} className={`mr-0 md:mr-0 lg:mr-20 flex flex-col h-full items-center transition-all duration-700 ease-in-out  
                                ${showAbout ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-20'}`}>
                    <div useRef={aboutRef} className={`mt-30 md:mt-20 lg:mt-0 h-150 md:h-160 lg:h-180 pt-8 w-[100%]`}>
                        <img className="h-full" src={iphoneFrame} alt="" />
                    </div>
                    <div className='flex flex-col items-center gap-3 w-[80%]'>
                        <div className='gap-3 flex justify-center w-[80%] font-extrabold py-2 bg-gradient-to-r from-[#5FD5E9] to-blue-600 outline-none rounded-2xl text-white cursor-pointer hover:bg-none hover:bg-white hover:text-blue-500 hover:shadow-xl'>
                            <h4>Try it out!</h4>
                            <i className="ri-arrow-right-up-line text-lg"></i>
                        </div>
                        <div className='group gap-3 flex justify-center items-center w-[80%] font-extrabold py-2 bg-black outline-none rounded-2xl text-white cursor-pointer hover:bg-none hover:bg-white hover:text-black hover:shadow-xl'
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}>
                            <img className="group-hover:h-[22px] h-8" src={isHover ? githubIcon : githubIconHover} alt="" />
                            <h5>GitHub Repo</h5>
                            <i className="ri-arrow-right-up-line text-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection