import React from 'react'

export default function BlogItem({title}) {
    return (
        <div>
            <h1 className=' mt-4 p-2 bg-yellow-400 font-bold text-white rounded-md'>{title}</h1>
        </div>
    )
}
