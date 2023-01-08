import React, { useState } from 'react'
import Button from './Button'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { HashLink as Link } from 'react-router-hash-link'


function Navbar() {

    const [isSidemenuOpen, setisSidemenuOpen] = useState(false)
    const [isclicked, setisClicked] = useState(false)

    const handleShow = () => {
        { (isSidemenuOpen) ? setisSidemenuOpen(false) : setisSidemenuOpen(true) }
        setisClicked(false)
    }

    const handleClicked = () => {
         setisClicked(true)
        setisSidemenuOpen(false)
    }

    return (
        <div className='navbar z-50 fixed bg-gray-800 w-full flex-wrap p-3 md:p-8 flex justify-between'>
            <div className="brand text-3xl md:text-5xl  md:p-4 h-full font-sans font-black text-orange-600 cursor-pointer">GYMSTER</div>
            <div className="hidden lg:flex gap-10" translate=''>
                <ul className='md:flex gap-10 p-7 uppercase font-bold md:mr-32  text-white' >
                    <li ><Link className='hover:text-orange-600 duration-300' to="#home" smooth>Home</Link></li>
                    <li ><Link className='hover:text-orange-600 duration-300' to="#about" smoth duration={500}>About</Link></li>
                    <li ><Link className='hover:text-orange-600 duration-300' to="#classes" smoth duration={500}>Classes</Link></li>
                    <li ><Link className='hover:text-orange-600 duration-300' to="#trainers" smoth duration={500}>Trainers</Link></li>
                    <li ><Link className='hover:text-orange-600 duration-300' to="#contact" smoth duration={500}>Contact</Link></li>
                </ul>
                <div className='w-32 mt-3 h-10  '>
                    <button className="text-xl bg-orange-600 rounded-md w-full h-full font-bold p-2 hover:text-orange-600 hover:bg-white cursor-pointer uppercase text-gray-200">join us</button>
                </div>


            </div>


            <div className="lg:hidden p-1 md:p-4 " >
                {(isSidemenuOpen) ? <CloseIcon
                    sx={{ color: "white", fontSize: 35, cursor: "pointer" }}
                    onClick={() => handleShow()}
                    clickable
                /> :
                    <MenuIcon
                        sx={{ color: "white", fontSize: 35, cursor: "pointer" }}
                        onClick={() => handleShow()}
                        clickable
                    />}
            </div>
            {(isSidemenuOpen) ?

                <div className={(isclicked) ? 'hidden top-20 left-0 h-4/5 w-full duration-300 md:top-40 ' : 'top-20 left-0 h-4/5 w-full duration-300 md:top-40 '} >
                    <ul className=' flex-col h-full flex gap-7 items-center lg:p-7 uppercase font-bold  text-white'>
                        <li ><Link className='hover:text-orange-600 duration-300' to="#home" smooth onClick={() => handleClicked()}>Home</Link></li>
                        <li ><Link className='hover:text-orange-600 duration-300' to="#about" smoth onClick={() => handleClicked()}>About</Link></li>
                        <li ><Link className='hover:text-orange-600 duration-300' to="#classes" smoth onClick={() => handleClicked()}>Classes</Link></li>
                        <li ><Link className='hover:text-orange-600 duration-300' to="#trainers" smoth onClick={() => handleClicked()}>Trainers</Link></li>
                        <li ><Link className='hover:text-orange-600 duration-300' to="#contact" smoth onClick={() => handleClicked()}>Contact</Link></li>

                        <li><Button>Join Us</Button></li>
                    </ul>
                </div>

                : ""}
        </div>
    )
}





export default Navbar