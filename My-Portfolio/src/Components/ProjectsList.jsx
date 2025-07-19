import React,{useState} from 'react'
import ems from '../assets/ems.png'
import ecom from '../assets/ecom.png'
import githubIcon from '../assets/githubIcon.png'
import githubIconHover from '../assets/githubIconHover.png'
const ProjectsList = () => {
    const [isHover1, setIsHover1] = useState(false);
    const [isHover2, setIsHover2] = useState(false);
    return (
        <div className='pl-10 lg:pl-20 pt-20'>
            <div className='text-2xl md:text-3xl lg:text-6xl font-bold'>
                <h1>Some of the things</h1>
                <h1 className=' lg:mt-4 bg-gradient-to-r from-[#5FD5E9] via-blue-700 to-blue-950  bg-clip-text text-transparent'>I've built.</h1>
            </div>
            <div id="projects-list" className='mt-10 lg:mt-20 flex overflow-auto gap-6 pb-30'>
                <div className='flex-shrink-0 w-[60vw]'>
                    <img className="w-[60vw] aspect-[2/1] shadow-2xl cursor-pointer" src={ems} alt="" />
                    <div className='mt-10 flex flex-wrap gap-2'>
                        <span className='py-2 px-5 mr-2 bg-[#C6CFDD]  text-[10px] lg:text-sm rounded-xl'>React</span>
                        <span className='py-2 px-5 mr-2 bg-[#C6CFDD]  text-[10px] lg:text-sm rounded-xl'>CSS</span>
                        <span className='py-2 px-5 mr-2 bg-[#C6CFDD]  text-[10px] lg:text-sm rounded-xl'>Tailwindcss</span>
                        <span className='py-2 px-5 mr-2 bg-[#C6CFDD]  text-[10px] lg:text-sm rounded-xl'>HTML</span>
                    </div>
                    <div className='text-[14px] lg:text-sm flex lg:flex-row flex-col gap-2 md:gap-3 lg:gap-5 mt-10 h-12 font-semibold lg:font-extrabold'>
                        <a href='https://harshitupreti101.github.io/EMS/' target='_blank'>
                            <div className='gap-3 flex justify-center  items-center  py-2 px-5 bg-gradient-to-r from-[#5FD5E9] to-blue-600 outline-none rounded-2xl text-white cursor-pointer hover:bg-none hover:bg-white hover:text-blue-500 hover:shadow-xl'>
                                <h4>Try it out!</h4>
                                <i className="ri-arrow-right-up-line text-lg"></i>
                            </div>
                        </a>
                        <a href='https://github.com/harshitupreti101/EMS' target='_blank'>
                            <div className='group gap-3 flex justify-center items-center  py-2 px-4 bg-black outline-none rounded-2xl text-white cursor-pointer hover:bg-none hover:bg-white hover:text-black hover:shadow-xl'
                                onMouseEnter={() => setIsHover1(true)}
                                onMouseLeave={() => setIsHover1(false)}>
                                <img className="group-hover:h-[22px] h-8" src={isHover1 ? githubIcon : githubIconHover} alt="" />
                                <h5>GitHub Repo</h5>
                                <i className="ri-arrow-right-up-line text-lg"></i>
                            </div>
                        </a>
                    </div>
                </div>

                <div className='flex-shrink-0 w-[60vw]'>
                    <img className="w-[60vw] aspect-[2/1]  shadow-2xl cursor-pointer" src={ecom} alt="" />
                    <div className='mt-10 flex flex-wrap gap-2'>
                        <span className='py-2 px-5 mr-2 bg-[#C6CFDD] text-[10px] lg:text-sm rounded-xl'>React</span>
                        <span className='py-2 px-5 mr-2 bg-[#C6CFDD] text-[10px] lg:text-sm rounded-xl'>CSS</span>
                        <span className='py-2 px-5 mr-2 bg-[#C6CFDD] text-[10px] lg:text-sm rounded-xl'>Tailwindcss</span>
                        <span className='py-2 px-5 mr-2 bg-[#C6CFDD] text-[10px] lg:text-sm rounded-xl'>HTML</span>
                    </div>
                    <div className='text-[14px] lg:text-sm flex lg:flex-row flex-col gap-2 md:gap-3 lg:gap-5 mt-10 h-12 font-semibold lg:font-extrabold'>
                        <a href='https://harshitupreti101.github.io/E-commerce-App/' target='_blank'>
                            <div className='gap-3 flex justify-center items-center py-2 px-5 bg-gradient-to-r from-[#5FD5E9] to-blue-600 outline-none rounded-2xl text-white cursor-pointer hover:bg-none hover:bg-white hover:text-blue-500 hover:shadow-xl'>
                                <h4>Try it out!</h4>
                                <i className="ri-arrow-right-up-line text-lg"></i>
                            </div>
                        </a>
                        <a href='https://github.com/harshitupreti101/E-commerce-App' target='_blank'>
                            <div className='group gap-3 flex justify-center items-center py-2 px-4 bg-black outline-none rounded-2xl text-white cursor-pointer hover:bg-none hover:bg-white hover:text-black hover:shadow-xl'
                                onMouseEnter={() => setIsHover2(true)}
                                onMouseLeave={() => setIsHover2(false)}>
                                <img className="group-hover:h-[22px] h-8" src={isHover2 ? githubIcon : githubIconHover} alt="" />
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

export default ProjectsList