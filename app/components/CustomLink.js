import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function CustomLink({children,path}) {
    const pathName = usePathname();
  return (
    <div>
      <Link href={path}>{children}</Link>
    </div>
  )
}
