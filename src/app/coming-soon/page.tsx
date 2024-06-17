import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import episode1 from '@public/Episode1.jpg'

export default function About() {
  return (
    <div className={cn('relative overflow-hidden')}>
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-3xl rounded-lg bg-stone-950/70 p-6 text-stone-50 shadow-lg">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="relative h-56 w-80 overflow-hidden rounded-lg md:h-[260px] md:w-[360px]">
                <Image
                  src={episode1}
                  alt="Episode 1 photo"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="">
              <p className="text-lg leading-relaxed md:mt-2">
                Three Trains wants to provide free content for everyone to
                enjoy.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                We are currently working on Episode 1 of "Kingdom of Light".
                Stay tuned for more information.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                Join us on our journey and stay tuned for updates on our social
                media platforms to see sneak peeks, behind the scenes, and more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
