import React from 'react'
import Image from 'next/image'
import backgroundimage from '/public/CastleColor3.jpg'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import kolglowing from '/public/KOLGlowing-Wordmark.png'

export default function Hero() {
  return (
    <div className="max-w-dvw max-h-[80vh] flex flex-col items-center justify-between overflow-x-hidden bg-cover bg-center">
      <Image
        alt="Mountains"
        src={backgroundimage}
        placeholder="blur"
        quality={100}
        fill
        blurDataURL="/public/Episode 1 Coming Soon_v2.jpg"
        className="h-[70dvh] overflow-hidden object-cover brightness-95"
      />
      <div className="mx-6 mt-16 flex w-auto items-center justify-center">
        <Image
          alt="Kolglowing"
          src={kolglowing}
          className="z-20 max-h-[160px] w-auto object-contain"
        />
      </div>
      <div className="z-20 mt-8 flex max-w-lg items-center justify-center">
        <Card className="bg-stone-950/65 p-6 text-center text-KOLYellow">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-KOLYellow">
              Three Trains wants to provide free content for everyone to enjoy.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold text-balance">
              Our debut project, &quot;Kingdom of Light&quot; offers a safe
              haven for young viewers and adults - a blend of education and
              entertainment, wrapped in captivating animation. With your
              support, we aim to illuminate paths during life&apos;s darkest
              moments, guiding people toward their inner light.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
