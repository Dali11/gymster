import React from 'react';
import carousel1 from '../img/carousel-1.jpg'
import carousel2 from '../img/carousel-2.jpg'
import carousel3 from '../img/blog-2.jpg'
import carousel4 from '../img/blog-3.jpg'
import './Carousel.css'
import { Navigation, Pagination, Scrollbar, A11y , Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';



const image = [carousel1, carousel2,carousel3,carousel4]

const data = [
  { image: image[0], header: "best gym center", title: "build your body strong with gymster", id: 1 },
  { image: image[1], header: "best gym center", title: "grow your strength with our trainers", id: 2 },
  { image: image[2], header: "best gym center", title: "build your body strong with gymster", id: 3 },
  { image: image[3], header: "best gym center", title: "let's pump up all our energy to top", id: 4 }
]



const Carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loopFillGroupWithBlank={true}
      loop={true}
      autoplay={true}
    >

      <div className="slider w-full">
        {
          data.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <div className="card top-0 relative w-full">
                  <div className="block p-5 bg-zinc-900 opacity-50 absolute w-full h-full"></div>
                  <img className='w-full h-full' src={data.image} alt={data.image} />

                  <div className="content-card absolute text-center bottom-6 md:top-56 right-5">
                    <h3 className='text-white md:text-xl font-bold uppercase'>{data.header}</h3>
                    <h1 className='text-white text-2xl mt-6 md:text-6xl md:w-2/3 font-black md:ml-64 md:mt-4 uppercase'>{data.title}</h1>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }

      </div>


    </Swiper>
  );
}

export default Carousel