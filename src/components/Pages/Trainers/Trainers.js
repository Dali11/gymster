import React, { useState } from 'react'
import team1 from "../../img/team-1.jpg"
import team2 from "../../img/team-2.jpg"
import team3 from "../../img/team-3.jpg"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


function Trainers() {
    const [open, setopen] = useState(-1)

   const image = [team1,team2,team3]
    
    const cards = [
        {team:image[0], name:"wisco gangani", title:"trainer", id:1},
        {team:image[1], name:"joe doe", title:"trainer", id:2},
        {team:image[2], name:"pheo phokaz", title:"trainer", id:3}
    ]

    const hanndleOpen = (i) => {
        setopen(i)
    }

    const handleClose = (e) => {
        setopen(false)
    }
  return (
    <div className='pt-24 md:pt-32' id="trainers">
        <div className=" text-center">
            <h3 className='text-xl text-orange-600 uppercase'>the team</h3>
            <h1 className='uppercase text-black text-5xl font-black  md:pb-20'>expert trainers</h1>
        </div>

        <div  >
            

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20   p-10" >
                {cards && cards.map((card, i) => {
                    return (
                        <div className="card-1 shadow-xl  relative" onMouseEnter={() => hanndleOpen(i)} onMouseLeave={handleClose}>
                        <img className='w-full h-auto' src={card.team} alt={card.image} />
                        <div className="text-white text-lg bg-zinc-800 uppercase text-center absolute overflow-hidden z-10 bottom-0 md:bottom-0 w-full p-4 opacity-80">
                            <h1 className='text-white text-2xl font-bold'>{card.name}</h1>
                            <h3 className='text-white text-xl'>{card.title}</h3>
                        </div>
                        {(open === i) ? 
                            <div className="inner-card absolute bg-zinc-800 w-full h-full opacity-90 top-0 text-white flex justify-center gap-5 items-center">
                                <a href="https://www.facebook.com/GymCenterC"> <FacebookIcon sx={{fontSize: 40, cursor:"pointer"}}/></a>
                                <TwitterIcon sx={{fontSize: 40, cursor:"pointer"}}/>
                                <InstagramIcon sx={{fontSize: 40, cursor:"pointer"}}/>
                            </div>
                            : ""
                        }
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Trainers