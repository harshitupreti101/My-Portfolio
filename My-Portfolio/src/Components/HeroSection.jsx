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
        <div className='lg:flex'>
            {/* ------------------------------left hero section ----------------------------- */}
            <div className='h-full lg:w-[85%]'>
                <div ref={aboutRef} className={`pl-10 lg:pl-20 text-2xl md:text-3xl lg:text-6xl transition-all duration-700 ease-in-out 
                                                 ${showAbout ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-x-20'}`}>
                    <h4 className='text-lg md:text-1xl lg:text-2xl mt-15 font-bold bg-gradient-to-r from-[#5FD5E9] via-blue-700 to-blue-950 bg-clip-text text-transparent'>Let's build something amazing</h4>
                    <h1 className='mt-2 font-bold'>Unlimited Possibilities </h1>
                    <h1 className='lg:mt-4 font-bold'>You imagine it?</h1>
                    <h3 className="mt-4 font-bold bg-gradient-to-r from-[#5FD5E9] via-blue-700 to-blue-950 bg-clip-text text-transparent">I'll build it.</h3>
                </div>
                <div ref={aboutRef} className={` flex justify-center items-center transition-all duration-700 ease-in-out 
                                                 ${showAbout ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} `}>
                    <div className='mt-15 lg:my-30 mx-10 lg:mx-20 p-6 lg:p-12 shadow-2xl rounded-2xl'>
                        <h4 className='text-xl font-bold mb-10'>About me</h4>
                        <p className='text-md lg:text-lg mt-6 text-gray-600'>Hi, my name is Harshit Upreti, I'm a Web Developer <span className='text-gray-700 font-bold'>specialized in the Frontend Stack.</span> <span className="cursor-pointer bg-gradient-to-r from-[#5FD5E9] via-blue-500 to-blue-700 bg-clip-text text-transparent font-bold">Learn more about my tech stack!</span> </p>
                        <p className='text-md lg:text-lg mt-6 text-gray-600'>I'm 21 years old, currently living in India. I love to do everything related in the process of building a web application, from designing, to developing and finally deploying projects.</p>
                        <p className='text-md lg:text-lg mt-6 text-gray-600'>If you would like to contact me, <span className="cursor-pointer bg-gradient-to-r from-[#5FD5E9] via-blue-500 to-blue-700 bg-clip-text text-transparent font-bold">send me an email!</span></p>
                    </div>
                </div>
            </div>
            {/* ----------------------------right hero section----------------------------- */}
            <div className='h-full flex flex-col lg:items-end items-center justify-center lg:w-[50%]'>
                <div ref={aboutRef} className={`lg:mr-20 flex flex-col h-full items-center transition-all duration-700 ease-in-out  
                                ${showAbout ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-20'}`}>
                    <div useRef={aboutRef} className={`mt-30 md:mt-20 lg:mt-0 h-150 md:h-160 lg:h-180 pt-8 w-[100%]`}>
                        <img className="h-full" src={iphoneFrame} alt="" />
                    </div>
                    <div className='gap-3 w-[60%]'>
                        <a href='https://harshitupreti101.github.io/ToDo-App-reactjs/' target='bla'>
                            <div className='gap-3 flex justify-center font-semibold lg:font-extrabold py-2 bg-gradient-to-r from-[#5FD5E9] to-blue-600 outline-none rounded-2xl text-white cursor-pointer hover:bg-none hover:bg-white hover:text-blue-500 hover:shadow-xl'>
                                <h4>Try it out!</h4>
                                <i className="ri-arrow-right-up-line text-lg"></i>
                            </div>
                        </a>
                        <a href="https://github.com/harshitupreti101/ToDo-App-reactjs" target='_blank'>
                            <div className='group gap-3 flex justify-center items-center mt-3 font-semibold lg:font-extrabold py-2 bg-black outline-none rounded-2xl text-white cursor-pointer hover:bg-none hover:bg-white hover:text-black hover:shadow-xl'
                                onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}>
                                <img className="group-hover:h-[22px] h-8" src={isHover ? githubIcon : githubIconHover} alt="" />
                                <h5>GitHub Repo</h5>
                                <i className="ri-arrow-right-up-line text-lg"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection