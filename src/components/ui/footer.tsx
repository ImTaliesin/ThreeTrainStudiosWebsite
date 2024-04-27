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
    <footer className="bg-stone-900 bottom-0 pt-4 text-white h- min-w-[100dvw] flex">
      <div className="container mx-auto md:px-8">
        <ul className="flex flex-wrap justify-center font-semibold">
          <FooterItem href="/coming-soon">Coming Soon</FooterItem>
          <span className="mx-1 ">|</span>
          <FooterItem href="/about">About Us</FooterItem>
          <span className="mx-1 ">|</span>
          <FooterItem href="/donate">Donate</FooterItem>
          <span className="mx-1 md:visible ">|</span>
          <FooterItem href="/collaborate">Collaborate</FooterItem>
          <span className="mx-1 ">|</span>
          <FooterItem href="/casting">Casting Opportunity</FooterItem>
          <span className="mx-1 ">|</span>
          <FooterItem href="/shop">Shop</FooterItem>
        </ul>
        <div className="mt-4 text-center md:flex md:items-center md:justify-evenly md:text-left">
          <p className=" mb-2 font-semibold md:mb-0">
            threetrainstudios@gmail.com
          </p>
          <p className=" mb-2 font-bold md:pb-0 md:pl-4">
            Committed to bringing light to those that sit in darkness
          </p>
          <p className="pb-3 font-bold">Get Involved</p>
        </div>
      </div>
    </footer>
  )
}
