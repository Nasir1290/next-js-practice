"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Button({ children }) {
    const router = useRouter();
    const handleClick = () => {
        router.push("/dashboard");
    };
    return (
        <button className=' bg-green-500 text-white rounded p-2' onClick={handleClick}>
            {children}
        </button>
    )
}
