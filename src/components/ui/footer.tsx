import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const FooterItem = ({ href, children }: any) => (
	<li className='mb-2 md:mb-0'>
		<Link
			href={href}
			className={cn('text-gray-500 hover:text-gray-700 mx-1')}>
			{children}
		</Link>
	</li>
);

export default function Footer() {
	return (
		<footer className='bg-gray-100 py-8'>
			<div className='container mx-auto px-8'>
				<ul className='flex flex-wrap justify-center'>
					<FooterItem href='/coming-soon'>Coming Soon</FooterItem>
					<span className='mx-1 text-gray-500'>|</span>
					<FooterItem href='/about'>About Us</FooterItem>
					<span className='mx-1 text-gray-500'>|</span>
					<FooterItem href='/pay-it-forward'>Pay It Forward</FooterItem>
					<span className='md:visible mx-1 text-gray-500'>|</span>
					<FooterItem href='/collaborate'>Collaborate</FooterItem>
					<span className='mx-1 text-gray-500'>|</span>
					<FooterItem href='/casting'>Casting Opportunity</FooterItem>
					<span className='mx-1 text-gray-500'>|</span>
					<FooterItem href='/shop'>Shop</FooterItem>
				</ul>
				<div className='mt-8 text-center md:text-left'>
					<p className='text-gray-500'>threetrainstudios@gmail.com</p>
					<p className='mt-2 text-gray-500'>
						Committed to bringing light to those that sit in darkness
					</p>
					<p className='mt-4 text-gray-700 font-bold'>Get Involved</p>
				</div>
			</div>
		</footer>
	);
}
