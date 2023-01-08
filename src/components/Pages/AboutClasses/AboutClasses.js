import React from 'react'
import Counter from './Counter'

function AboutClasses() {
    
  return (
    <div className='bg-zinc-800 pb-9  text-white flex flex-col md:flex-row md:justify-evenly items-center'>

        <div>
            <h1 className='text-gray-400 text-2xl uppercase pt-20'>experience</h1>
            <Counter start="300" end="16560" duration="2"/>
        </div>
        <div className="trainers">
        <h1 className='text-gray-400 text-2xl uppercase pt-20'>our trainers</h1>
            <Counter start="90" end="30560" duration="5"/>
        </div>
        <div className="project">
        <h1 className='text-gray-400 text-2xl  uppercase pt-20'>complete projects</h1>
            <Counter start="100" end="19560" duration="3"/>
        </div>
        <div className="client">
        <h1 className='text-gray-400 text-2xl uppercase pt-20'>our client</h1>
            <Counter start="500" end="26560" duration="3"/>
        </div>
    </div>
  )
}

export default AboutClasses