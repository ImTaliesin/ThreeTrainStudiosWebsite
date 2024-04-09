import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';

export default function Header() {
	let headeritems = [
		'Coming Soon',
		'About Us',
		'Pay It Forward',
		'Collaborate',
		'Casting Opportunity',
		'Shop',
	];

	return (
		<div className={cn('bg-neutral-950 h-28 flex items-center justify-center')}>
			<div className='flex items-center space-x-4'>
				<div className='flex space-x-1'>
					{headeritems.slice(0, 3).map((item, index) => (
						<Button
							key={index}
							variant='ghost'
							className='text-white rounded-3xl m-1 bg-neutral-950'>
							{item}
						</Button>
					))}
				</div>
				<img
					src='/ttsphoto.png'
					alt='Three Train Studios'
					className='h-52 w-42 object-cover object-bottom rounded-full'
				/>
				<div className='flex space-x-1'>
					{headeritems.slice(3).map((item, index) => (
						<Button
							key={index + 3}
							variant='ghost'
							className='text-white  rounded-3xl m-1 bg-neutral-950'>
							{item}
						</Button>
					))}
				</div>
			</div>
		</div>
	);
}
