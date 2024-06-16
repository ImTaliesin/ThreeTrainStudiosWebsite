import React from 'react';
import Image from 'next/image';
import backgroundimage from '/public/CastleColor3.jpg';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import kolglowing from '/public/KOLGlowing-Wordmark.png';

export default function Hero() {
  return (
    <div className="bg-cover bg-center max-w-dvw flex flex-col items-center justify-between overflow-x-hidden">
      <Image
        alt="Mountains"
        src={backgroundimage}
        placeholder="blur"
        quality={100}
        fill
        blurDataURL="/public/Episode 1 Coming Soon_v2.jpg"
        className="overflow-hidden object-cover brightness-95 h-[70dvh]"
      />
      <div className="flex items-center justify-center mt-16 mx-6">
        <Image
          alt="Kolglowing"
          src={kolglowing}
          
          className="object-contain z-20 max-h-[160px] w-"
        />
      </div>
      <div className="text-stone-900 flex items-center justify-center mt-32 z-20 max-w-lg">
        <Card className="bg-yellow-300/80 p-6 text-center">
          <CardHeader>
            <CardTitle className='text-2xl font-bold '>Three Trains wants to provide free content for everyone to enjoy.</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-md font-semibold">Our debut project, 'Kingdom of Light' offers a safe haven for young viewers and adults - a blend of education and entertainement, wrapped in captivating animation. With your support, we aim to illuminate paths during life's darkest moments, guiding people toward their inner light.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}