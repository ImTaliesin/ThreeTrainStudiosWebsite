import React from 'react';
import { cn } from '@/lib/utils';

export default function Hero() {
	return (
		<div
			className={cn(
				'bg-neutral-300 min-h-dvh flex flex-col items-center justify-center'
			)}>
			<div className='w-[400px] bg-red-800 text-white text-center py-8 px-12 mb-8'>
				<h2 className='text-4xl font-bold mb-4'>Kingdom of Light</h2>
				<p className='text-2xl font-semibold'>Coming Soon</p>
			</div>
			<div className='w-[400px]  bg-red-800 text-white text-center py-8 px-12'>
				<h3 className='text-2xl font-bold mb-4'>Voice Actors</h3>
				<p className='text-2xl font-semibold'>WANTED</p>
			</div>
		</div>
	);
}
