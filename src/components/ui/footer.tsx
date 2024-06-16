import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-stone-900 py-4 text-white">
      <div className="container mx-auto px-4 text-center">
        
        <p className="mb-2 font-bold">
          Committed to bringing light to those that sit in darkness
        </p>
        <ul className="flex justify-center">
          <li className="mx-2">
            <Link
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl text-white hover:text-gray-300" />
            </Link>
          </li>
          <li className="mx-2">
            <Link
              href="https://www.youtube.com/channel/yourchannelid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-2xl text-white hover:text-gray-300" />
            </Link>
          </li>
        </ul>
        <p className="mt-2 font-semibold">threetrainstudios@gmail.com</p>
      </div>
    </footer>
  );
}