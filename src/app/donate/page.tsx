import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
export default function Donate() {
	return (
		<div
			className={cn(
				'bg-gradient-to-b from-sky-400 to-sky-200 min-h-screen flex items-center justify-center relative overflow-hidden'
			)}>
			<div className='bg-white p-8 rounded-lg shadow-lg w-96'>

				<h2 className='text-2xl font-bold mb-4 text-center'>Why Help?</h2>

				<div className='mb-6'>
					<h3 className='text-lg font-semibold mb-2 '>
						Help Us Create More Free Content:
					</h3>
					<p className='text-gray-700'>
					Each fund helps pay all of hard working creators to keep all of our
						content free.
					</p>
				</div>

				<div className='mb-6'>
					<h3 className='text-lg font-semibold mb-2'>
						Special Features On The Show
					</h3>
					<p className='text-gray-700'>
						Your fund can go towards having an appearance on the show, your name
						in the credits, and more!
					</p>
				</div>
				
				<div className='flex justify-end'>
					<Button className='bg-sky-500 text-white rounded hover:bg-sky-600 '>
						Donate
					</Button>
				</div>
        
			</div>
		</div>
	);
}
