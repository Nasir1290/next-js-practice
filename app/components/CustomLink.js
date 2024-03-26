"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function CustomLink({ children, path ,prefetch=true }) {
    const pathName = usePathname();
    const active = pathName === path;
    return (
        <Link className={active ? " text-blue-600" : ""} href={path} prefetch={prefetch} >{children}</Link>
    )
}
