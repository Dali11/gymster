import React from 'react'
import about from '../img/about.jpg'
import AboutCard from './AboutCard'

function About() {
  return (
    <div className='about md:pt-32 flex flex-col md:flex-row gap-5 flex-wrap p-6 w-full' id="about">
        <div className="image-part md:w-2/5">
            <img src={about} alt={about} />
        </div>
        <div className="content-part md:w-2/4">
            <h3 className='text-orange-600 font-black text-2xl pb-5'>ABOUT US</h3>
            <h1 className='font-black text-5xl pb-5'>WELCOME TO GYMSTER</h1>
            <h5 className='text-gray-600 font-bold text-2xl pb-5'>Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no labore lorem sit clita duo justo magna dolore</h5>
            <p className='text-gray-600 pb-12'>Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo at ut. Tempor sit lorem sit magna ipsum duo. Sit eos dolor ut sea rebum, diam sea rebum lorem kasd ut ipsum dolor est ipsum. Et stet amet justo amet clita erat, ipsum sed at ipsum eirmod labore lorem.</p>
            <AboutCard />
        </div>
    </div>
  )
}

export default About