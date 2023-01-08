import React from 'react'

function Button(props) {
  return (
        <button className='nav font-bold w-auto h-auto text-md  bg-orange-600  text-center  rounded-md pl-10 pb-2 pt-2 pr-10 text-gray-200 hover:bg-white hover:text-orange-600'>
            {props.children}
        </button>

  )
}

export default Button