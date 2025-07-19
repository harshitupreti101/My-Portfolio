import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import ProjectsList from './Components/ProjectsList'
import TechStack from './Components/TechStack'
import ResponsiveShowcase from './Components/ResponsiveShowcase'
 
const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ProjectsList/>
      <TechStack/>
      <ResponsiveShowcase/>
    </>
  )
}

export default App