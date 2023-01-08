import React from 'react'
import AboutClasses from '../AboutClasses/AboutClasses'
import Days from './Days'

function ClassSchedue() {
    // const [count, setcount] = useState(0)
    // const [end, setend] = useState()
  return (
    <div>
        <div className="text-center">
            <h2 className='text-orange-600 font-bold text-2xl pb-7'>CLASS SCHEDUE</h2>
            <h1 className='text-6xl font-black'>WORKING HOURS</h1>
        </div>

        <div className='pb-52'>
        <Days />
        </div>
        
        <AboutClasses />
    </div>
  )
}

export default ClassSchedue