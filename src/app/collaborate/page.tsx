import React from 'react';
import { cn } from '@/lib/utils';

export default function About() {
	return (
		<div
			className={cn(
				'flex items-center justify-center relative overflow-hidden'
			)}>
			<div className='container mx-auto px-4'>
				<div className='max-w-xl mx-auto bg-neutral-950/70 rounded-lg shadow-lg p-8 text-stone-50'>
					<h1 className='text-stone-50 text-2xl font-bold mb-6 text-center'>
						Want to feature your content on our show?
					</h1>
					<div className='space-y-2'>
						<p className='text-neutral-100 text-lg text-center  leading-relaxed'>
							Email us at threetrainstudios@gmail.com to connect
						</p>
						<h1 className='pt-8  text-stone-50 text-2xl font-bold mb-6 text-center'>
							Want to become a part of the team?{' '}
						</h1>
						<p className='text-neutral-100 text-lg text-center  leading-relaxed'>
							Reach out to us at threetrainstudios@gmail.com
						</p>
						<p className='text-neutral-100 t text-lg font-semibold text-right'>
							~Three Train Studios Team
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
