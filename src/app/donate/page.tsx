import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
export default function Donate() {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden',
      )}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-lg rounded-lg bg-neutral-950/70 p-8 text-stone-50 shadow-lg">
          <h2 className="mb-4 text-center text-3xl font-bold">Why Help?</h2>
          <div className="mb-6">
            <h3 className="mb-2 text-xl font-semibold ">
              Help Us Create More Free Content:
            </h3>
            <p className="text-lg">
              Each fund helps pay all of hard working creators to keep all of
              our content free.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="mb-2 text-xl font-semibold">
              Special Features On The Show
            </h3>
            <p className="text-lg">
              Your fund can go towards having an appearance on the show, your
              name in the credits, and more!
            </p>
          </div>
          <h3 className="text-xl leading-relaxed">
            Three Trains wants to provide free content for everyone to enjoy.
            Help us continue bringing impactful content to those who need it.
          </h3>
          <div className="flex justify-end mt-2">
            <Button className="rounded bg-red-950/80 text-stone-50 hover:bg-red-950/80 ">
              Donate
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
