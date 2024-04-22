import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
export default function Donate() {
	return (
		<div
			className={cn(
				'flex items-center justify-center relative overflow-hidden'
			)}>
			<div className='container mx-auto px-4'>
				<div className='max-w-lg mx-auto bg-neutral-950/70 rounded-lg shadow-lg p-8 text-white'>
					<h2 className='text-2xl font-bold mb-4 text-center'>Why Help?</h2>

					<div className='mb-6'>
						<h3 className='text-lg font-semibold mb-2 '>
							Help Us Create More Free Content:
						</h3>
						<p className=''>
							Each fund helps pay all of hard working creators to keep all of
							our content free.
						</p>
					</div>

					<div className='mb-6'>
						<h3 className='text-lg font-semibold mb-2'>
							Special Features On The Show
						</h3>
						<p className=''>
							Your fund can go towards having an appearance on the show, your
							name in the credits, and more!
						</p>
					</div>

					<div className='flex justify-end'>
						<Button className='bg-sky-500 text-white rounded hover:bg-sky-600 '>
							Donate
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
