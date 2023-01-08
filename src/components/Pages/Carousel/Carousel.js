import React from 'react'
import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import testimonial1 from '../../img/testimonial-1.jpg'
import testimonial2 from '../../img/testimonial-2.jpg'
import testimonial3 from '../../img/testimonial.jpg'


function Carousel() {
  return (
    <CCarousel indicators white interval={2000}>

        <CCarouselItem className='text-white d:block'>
        <h5 className='text-white font-bold text-2xl'> <span className='text-5xl text-orange-600 font-black'>"</span>Dolores sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet amet tempor amet sit kasd sea lorem dolor kasd elitr duo vero amet amet stet</h5>
        
        <div className="img pt-10 flex gap-7">
            <img className='w-20 h-20 rounded-full' src={testimonial1} alt="" />
            <p>
            <span className='text-white text-lg uppercase font-bold'>jane doe</span> <br />
            <span className='text-white text-lg uppercase'>professional</span>
            </p>
        </div>

        </CCarouselItem>

        <CCarouselItem className='text-white d:block'>
        <h5 className='text-white font-bold text-2xl'> <span className='text-5xl text-orange-600 font-black'>"</span>Dolores sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet amet tempor amet sit kasd sea lorem dolor kasd elitr duo vero amet amet stet</h5>
        
        <div className="img pt-10 flex gap-7">
            <img className='w-20 h-20 rounded-full' src={testimonial2} alt="" />
            <p>
            <span className='text-white text-lg uppercase font-bold'>james harrow</span> <br />
            <span className='text-white text-lg uppercase'>professional</span>
            </p>
        </div>

        </CCarouselItem>


        <CCarouselItem className='text-white d:block'>
        <h5 className='text-white font-bold text-2xl'> <span className='text-5xl text-orange-600 font-black'>"</span>Dolores sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet amet tempor amet sit kasd sea lorem dolor kasd elitr duo vero amet amet stet</h5>
        
        <div className="img pt-10 flex gap-7">
            <img className='w-20 h-20 rounded-full' src={testimonial3} alt="" />
            <p>
            <span className='text-white text-lg uppercase font-bold'>vannesa jasper</span> <br />
            <span className='text-white text-lg uppercase'>professional</span>
            </p>
        </div>

        </CCarouselItem>


</CCarousel>
  )
}

export default Carousel