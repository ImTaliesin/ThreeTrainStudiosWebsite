import React from 'react'
import Image from 'next/image'
import backgroundimage from '/public/CastleColor3.jpg'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from '@/lib/utils'

export default function Hero() {
  return (
    <div className="relative">
      {/* Desktop view */}
      <div className="hidden lg:block">
        <AspectRatio ratio={16 / 9}>
          <Image
            alt="Mountains"
            src={backgroundimage}
            placeholder="blur"
            quality={100}
            fill
            className="object-cover"
            blurDataURL="/public/Episode 1 Coming Soon_v2.jpg"
          />
        </AspectRatio>
        <div className="absolute top-1/2 left-1/2 z-10 w-96 max-w-sm -translate-x-1/2 -translate-y-1/2">
          <Card className="bg-sky-400/70 shadow-lg">
            <CardHeader>
              <CardTitle>Help Crowdfund the Show</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white">Support our project and be a part of the journey!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden">
        <div className={cn("bg-sky-400 py-8")}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
              <Image
                alt="Mountains"
                src={backgroundimage}
                placeholder="blur"
                quality={100}
                width={320}
                height={180}
                className="mb-6 rounded-lg shadow-lg"
                blurDataURL="/public/Episode 1 Coming Soon_v2.jpg"
              />
              <Card className="w-full max-w-sm bg-white/70 shadow-lg">
                <CardHeader>
                  <CardTitle>Help Crowdfund the Show</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Support our project and be a part of the journey!</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}