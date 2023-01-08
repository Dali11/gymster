import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import DraftsIcon from '@mui/icons-material/Drafts';
import ScrollToTop from 'react-scroll-to-top';

function Footer() {

  return (
    <div className="w-full md:relative" id='contact'>
      <ScrollToTop smooth top="20" />
      <div className='md:mt-32 bg-zinc-800 pt-5 flex flex-col md:flex-row  md:justify-evenly'>
        <div className="get-intouch pb-4">
          <h1 className='text-2xl text-white font-bold uppercase pb-3'>get in touch</h1>
          <ul className='text-zinc-400 md:text-lg'>
            <li><RoomIcon sx={{ color: "orange" }} />123 Street, Mangochi, Malawi</li>
            <li><DraftsIcon sx={{ color: "orange" }} />dalikamphani@gmail.com</li>
            <li><PhoneIcon sx={{ color: "orange" }} />+265883597334</li>
          </ul>
          <div className="links text-white font-black pt-3">
            <span className='mr-4'><FacebookIcon sx={{ backgroundColor: "orange", color: "white", borderRadius: "10px" }} /></span>
            <span className='mr-4'><TwitterIcon sx={{ backgroundColor: "orange", color: "white", borderRadius: "10px" }} /></span>
            <span className='mr-4'><InstagramIcon sx={{ backgroundColor: "orange", color: "white", borderRadius: "10px" }} /></span>
            <span><LinkedInIcon sx={{ backgroundColor: "orange", color: "white", borderRadius: "10px" }} /></span>
          </div>
        </div>

        <div className="quick-link pb-4">
          <h1 className='text-2xl text-white font-bold uppercase pb-4'>quick links</h1>
          <ul className='text-zinc-400 md:text-lg capitalize'>
            <li><ArrowRightAltIcon sx={{ color: "orange" }} />Home</li>
            <li><ArrowRightAltIcon sx={{ color: "orange" }} />About Us</li>
            <li><ArrowRightAltIcon sx={{ color: "orange" }} />Class schedule</li>
            <li><ArrowRightAltIcon sx={{ color: "orange" }} />our trainers</li>
            <li><ArrowRightAltIcon sx={{ color: "orange" }} />latest blog</li>
            <li><ArrowRightAltIcon sx={{ color: "orange" }} />contact us</li>
          </ul>
        </div>
        <div className="popula-links pb-4">
          <h1 className='text-2xl text-white md:mr-80 font-bold uppercase pb-3'>popular links</h1>
          <ul className='text-zinc-400 md:text-lg capitalize'>
            <li><ArrowRightAltIcon sx={{ color: "orange" }} />Home</li>
            <li><ArrowRightAltIcon sx={{ color: "orange" }} />About Us</li>
            <li><ArrowRightAltIcon sx={{ color: "orange" }} />Class schedule</li>
            <li><ArrowRightAltIcon sx={{ color: "orange" }} />our trainers</li>
            <li><ArrowRightAltIcon sx={{ color: "orange" }} />latest blog</li>
            <li><ArrowRightAltIcon sx={{ color: "orange" }} />contact us</li>
          </ul>
        </div>
        <div className="newsletter md:text-center md:w-80 bg-orange-600 p-1 md:p-3 md:absolute md:h-full md:top-0 right-20">
          <h1 className='text-2xl text-white font-bold uppercase pb-4'>newsletter</h1>
          <h3 className='uppercase pb-2 text-zinc-200 font-bold'>subscribe to our newsletter</h3>
          <h5 className='text-zinc-300'>Amet justo diam dolor rebum lorem sit stet sea justo kasd</h5>
          <div className="pt-3 flex ">
            <input type="text text-lg" placeholder='Your Email' className='p-2 rounded-l-md' />
            <button className='text-white uppercase font-bold border rounded-r-md bg-zinc-900 p-2 hover:bg-orange-600'>sign up</button>
          </div>

          <div className="not-important md:block hidden">
            <h1 className='font-bold mt-28 text-gray-500'>Designed by DALI</h1>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 p-6 text-white flex justify-center">
        <p className='flex'><span className='font-bold uppercase mr-1'><span>&copy;</span> gymster.</span><span className='capitalize'>all rights reserved</span></p>

      </div>
    </div>


  )
}

export default Footer