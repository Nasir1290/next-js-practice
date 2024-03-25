import React from 'react'

export default function DashBoardLayout({ children }) {
    return (
        <div>
            <div>
                <ul className=' flex gap-5'>
                    <li> Dashboard</li>
                    <li> Nested</li>
                </ul>
            </div>
            {children}
        </div>
    )
}
