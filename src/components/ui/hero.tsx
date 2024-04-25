import React from 'react';
import { cn } from '@/lib/utils';

export default function Hero() {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center relative overflow-hidden max-h-[80dvh]'
      )}
    >
      <div className='w-[350px] bg-red-800 text-white text-center py-8 px-12 mb-8 relative z-10 rounded-lg shadow-lg'>
        <h2 className='text-4xl font-bold mb-4'>Kingdom of Light</h2>
        <p className='text-2xl font-semibold'>Coming Soon</p>
      </div>
      <div className='w-[350px] bg-red-800 text-white text-center py-8 px-12 relative z-10 rounded-lg shadow-lg'>
        <h3 className='text-2xl font-bold mb-4'>Voice Actors</h3>
        <p className='text-2xl font-semibold'>WANTED</p>
      </div>
    </div>
  );
}