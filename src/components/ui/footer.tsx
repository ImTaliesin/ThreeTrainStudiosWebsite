import React from 'react';
import { cn } from '@/lib/utils';

export default function Footer() {
	return (
		<footer className={cn('bg-neutral-950 py-8 text-white')}>
			<div className='container mx-auto grid grid-cols-1 gap-3 md:grid-cols-3'>
				<div className='flex flex-col items-center justify-center text-center md:text-left'>
					<h3 className='md:text-xl font-semibold'>
						threetrainstudios@gmail.com
					</h3>
				</div>
				<div className='flex items-center justify-center text-center'>
					<h3 className='md:text-xl font-semibold'>
						Committed to bringing light
						<br className='hidden md:block' /> to those that sit in darkness
					</h3>
				</div>
				<div className='flex flex-col items-center justify-center text-center md:text-left'>
					<h3 className='md:text-lg font-semibold'>Get Involved</h3>
				</div>
			</div>
		</footer>
	);
}
