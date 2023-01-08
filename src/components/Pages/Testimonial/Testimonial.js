import React from 'react'
import testimonial from "../../img/testimonial.jpg"
import Carousel from '../Carousel/Carousel'

function Testimonial() {
  return (
    <div className='mt-32 bg-zinc-800 flex flex-col justify-center md:flex-row gap-8' id="testimonial">
        <div className="image-part md:w-1/2">
            <img src={testimonial} alt={testimonial} />
        </div>

        <div className="pt-10 md:w-1/2">
            <div className="header bg-zinc-800 text-white">
                <h2 className='uppercase text-orange-600 text-xl font-bold'>testimonial</h2>
                <h1 className='uppercase text-7xl font-black pt-3'>our client say</h1>
            </div>
            <div className="carousel mt-20">
                <Carousel />
            </div>
        </div>
       
    </div>
  )
}

export default Testimonial