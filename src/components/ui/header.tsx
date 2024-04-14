'use client';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const headeritems = [
    'Coming Soon',
    'About Us',
    'Pay It Forward',
    'Collaborate',
    'Casting Opportunity',
    'Shop',
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={cn(
        'bg-neutral-950 h-28 w-screen flex fixed items-center justify-center px-4 z-50'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden lg:flex flex-1 justify-end space-x-1">
          {headeritems.slice(0, 3).map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="text-white text-sm rounded-3xl mx-1 bg-neutral-950 px-2 py-1"
            >
              {item}
            </Button>
          ))}
        </div>
        <Image
          src="/ttsphoto.png"
          alt="Three Train Studios"
          width={150}
          height={100}
          className="mx-auto object-cover object-bottom rounded-full"
        />
        <div className="hidden lg:flex flex-1 justify-start space-x-1">
          {headeritems.slice(3).map((item, index) => (
            <Button
              key={index + 3}
              variant="ghost"
              className="text-white text-sm rounded-3xl mx-1 bg-neutral-950 px-2 py-1"
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="lg:hidden">
          <Button
            variant="ghost"
            className="text-white rounded-3xl mr-4 bg-neutral-950"
            onClick={toggleMenu}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed top-28 left-0 right-0 bottom-0 bg-neutral-950/80 flex items-center justify-center z-40">
          <div className="flex flex-col space-y-8">
            {headeritems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="text-neutral-100 text-2xl text-center rounded-full"
                onClick={toggleMenu}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}