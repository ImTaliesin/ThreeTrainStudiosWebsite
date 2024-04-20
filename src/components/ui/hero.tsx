import React from 'react';
import { cn } from '@/lib/utils';

export default function Hero() {
  return (
    <div
      className={cn(
        'bg-gradient-to-b from-sky-400 to-sky-200 min-h-[90dvh] flex flex-col items-center justify-center relative overflow-hidden'
      )}
    >
      {/* Floating clouds */}
      <div className='absolute top-0 left-0 right-0 bottom-0 pointer-events-none'>
        <div className='absolute top-8 left-8 w-48 h-24 bg-white rounded-full opacity-60 animate-drift'></div>
        <div className='absolute top-24 right-16 w-64 h-32 bg-white rounded-full opacity-70 animate-drift animation-delay-1000'></div>
        <div className='absolute bottom-12 left-32 w-56 h-28 bg-white rounded-full opacity-80 animate-drift animation-delay-2000'></div>
      </div>

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