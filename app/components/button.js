import React from 'react'

export default function Button({children}) {
    const handleClick = () => {

    };
  return (
    <button className=' bg-green-500 text-white rounded p-2' onClick={handleClick}> 
      {children}
    </button>
  )
}
