import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const FooterItem = ({ href, children }: any) => (
  <li className="mb-2 md:mb-0">
    <Link href={href} className={cn(' hover: mx-1')}>
      {children}
    </Link>
  </li>
)

export default function Footer() {
  return (
    <footer className="h- bottom-0  flex min-w-[100dvw] bg-stone-900 text-white">
      <div className="flex-1">
        <div className="text-center md:my-6 md:flex md:items-center md:justify-evenly md:text-left">
          <p className=" my-2 font-semibold md:my-0 md:mb-0">
            threetrainstudios@gmail.com
          </p>
          <p className=" my-2 font-bold md:my-0 md:pb-0 md:pl-4">
            Committed to bringing light to those that sit in darkness
          </p>
          <p className="pb-4 font-bold md:pb-0">Get Involved</p>
        </div>
      </div>
    </footer>
  )
}
