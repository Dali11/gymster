import React from 'react'
import blog1 from "../../img/blog-1.jpg"
import blog2 from "../../img/blog-2.jpg"
import blog3 from "../../img/blog-3.jpg"


function Blog() {

   const image = [blog1,blog2,blog3]
    
    const cards = [
        {team:image[0], name:"smith james", title:"trainer", num:"01", month:"january", year:"2023", id:1},
        {team:image[1], name:"jane doe", title:"trainer", num:"02", month:"march", year:"2023", id:2},
        {team:image[2], name:"pheo phokaz", title:"trainer", num:"03", month:"january", year:"2023", id:3}
    ]

  return (
    <div className='pt-32' id="blog">
        <div className="text-center">
            <h3 className='text-xl text-orange-600 uppercase pb-10'>the team</h3>
            <h1 className='uppercase text-6xl text-black font-black pb-12'>latest blog post</h1>
        </div>

        <div>
            

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20   p-10" >
                {cards && cards.map((card, i) => {
                    return (
                        <div className="card-1 shadow-xl md:h-80  relative" >
                        <img className='w-full h-auto' src={card.team} alt={card.image} />
                        <div className="text-white text-lg bg-zinc-800 uppercase text-center absolute overflow-hidden z-10 bottom-0 md:bottom-0 w-full p-3 lg:p-4 ">
                            <div>
                                <div className="text-white absolute pr-5 border-r-2">
                                   <h3>{card.num}</h3>
                                   <h1 className='text-white font-bold'>{card.month}</h1>
                                   <h2 className='text-sm'>{card.year}</h2>
                                </div>
                              <h1 className='text-white md:text-2xl pl-24 md:pl-16 font-bold'>{card.name}</h1>
                              <h3 className='text-white md:text-xl pl-24 md:pl-16'>{card.title}</h3>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Blog