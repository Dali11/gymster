import React, { useState } from 'react'
import "./Classes.css"
import fit from "../img/fit.svg"
import body from "../img/body.png"
import Button from '../Button'
import ClassSchedue from './ClassSchedue/ClassSchedue'



const data = [
    {
        id: 1,
        icon: "icon",
        haeder: "body building",
        butn: "read more",
        content: "Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet lrorem jdnjnd vero Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet"
    },

    {
        id: 1,
        icon: "icon",
        haeder: "weight lefting",
        butn: "read more",
        content: "Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet lrorem jdnjnd vero Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet"
    },
    {
        id: 1,
        icon: "icon",
        haeder: "muscle building",
        butn: "read more",
        content: "Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet lrorem jdnjnd vero Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet"
    }
]



function Classes() {
    const [readMore, setreadMore] = useState(-1)


    const handleReadMore = (i) => {
       (readMore) ? setreadMore(i) : setreadMore(!readMore)

    }


    return (
        <div className='pt-32' id="classes">
            <div className="big bg-zinc-800 w-full p-15">
                <div className="cards flex flex-col  md:flex-row gap-6 md:gap-20">
                    {/* cards go here */}

                    {
                        data.map((data,i) => {
                            return (
                                <div className="card1 shadow text-center">
                                    <span>
                                        <img className='w-20 m-auto' src={fit} alt={fit} />
                                    </span>
                                    <div className="pt-6">
                                        <h1 className='text-orange-600 text-2xl font-black uppercase'>{data.haeder}</h1>
                                        <h3 className='pt-2 pb-4 text-lg'>{(readMore === i) ? data.content : data.content.substring(0, 99)}</h3>
                                        <button onClick={() => handleReadMore(i)}  className='text-orange-600 pb-8 hover:p-1'>{(readMore === i) ? "read less" : "read more"}</button>
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>

                <div className='content relative'>
                    <h1 className='text-3xl font-black pb-4'>30% discout for this summer</h1>
                    <div className='flex justify-center pb-4'>
                        <Button className="w-50"><span>BECOME A MEMBER</span></Button>
                    </div>
                </div>


            </div>

            <div className="classes pt-32 md:pt-40">
                <ClassSchedue />
            </div>
        </div>
    )
}

export default Classes

