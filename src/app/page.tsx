import React from 'react';
import Image from 'next/image';
import backgroundimage from '/public/CastleColor3.jpg';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function Hero() {
  return (
    <div>
      {/* Desktop view */}
      <div className="z-50 hidden lg:block">
        <div className="relative w-dvw h-[80dvh]">
          <Image
            alt="Mountains"
            src={backgroundimage}
            placeholder="blur"
            quality={100}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            blurDataURL="/public/Episode 1 Coming Soon_v2.jpg"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center mb-8">
            <Card className="bg-sky-400/70 w-96 max-w-sm p-6">
              <CardHeader>
                <CardTitle>Help Crowdfund the Show</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white">Support our project and be a part of the journey!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden bg-sky-400 py-8">
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
  );
}