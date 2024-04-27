import React from 'react';
import { cn } from '@/lib/utils';

export default function About() {
  return (
    <div
      className={cn(
        'flex items-center justify-center relative overflow-hidden'
      )}
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-xl mx-auto bg-stone-950/70 rounded-lg shadow-lg p-8 text-stone-50'>
          <h1 className='text-4xl font-bold mb-6 text-center'>About Us</h1>
          <div className='space-y-4'>
            <p className='text-lg leading-relaxed'>
              We believe in creating free content that will inspire our viewers, shed light during trying times, and bring back faith to those seeking it.
            </p>
            <p className='text-lg leading-relaxed'>
              Our team represents a train that will shine wherever it goes, bringing light to those that sit in darkness. Each of us makes up a part of the train to pull the products in the box cars and deliver them to those who need them.
            </p>
            <p className='text-lg font-semibold text-right'>
              ~Three Train Studios Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}