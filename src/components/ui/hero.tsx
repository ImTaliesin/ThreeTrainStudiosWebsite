import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import backgroundimage from '/public/Episode 1 Coming Soon_v2.jpg'

export default function Hero() {
  return (
    <div className={cn('z-40 max-h-[80dvh]')}>
      {/* Desktop view */}
      <div className="hidden lg:block">
        <Image
          alt="Mountains"
          src={backgroundimage}
          placeholder="blur"
          quality={100}
          fill
          style={{ objectPosition: 'center' }}
          className="object-cover object-top"
          blurDataURL="/public/Episode 1 Coming Soon_v2.jpg"
        />
        <div className="container relative mx-auto px-6">
          <div className="fixed top-18z-10 w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-teal-400/70 px-12 py-8 text-center text-white shadow-lg">
            {/* Content for the desktop view */}
            <h2>Help Crowdfund the Show</h2>
            <p>Support our project and be a part of the journey!</p>
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className="lg:hidden">
        <div className="relative  justify-center align-middle ">
          <Image
            alt="Mountains"
            src={backgroundimage}
            placeholder="blur"
            quality={100}
            className="h-[20vh] w-[80vw] object-cover sm:object-top object-center"
            blurDataURL="/public/Episode 1 Coming Soon_v2.jpg"
          />
          <div className="container mx-auto px-6">
            <div className="relative z-10 mx-auto mt-12 max-w-[280px] rounded-lg bg-teal-400/70 px-6 py-8 text-center text-white shadow-lg">
              {/* Content for the mobile view */}
              <h2>Help Crowdfund the Show</h2>
              <p>Support our project and be a part of the journey!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}