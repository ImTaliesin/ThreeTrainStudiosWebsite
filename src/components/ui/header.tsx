'use client';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
	const headerItems = [
		{ label: 'Coming Soon', href: '/coming-soon' },
		{ label: 'About Us', href: '/about' },
		{ label: 'Pay It Forward', href: '/pay-it-forward' },
		{ label: 'Collaborate', href: '/collaborate' },
		{ label: 'Casting Opportunity', href: '/casting' },
		{ label: 'Shop', href: '/shop' },
	];

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const isActive = (href: string) => {
		return pathname === href;
	};

	return (
		<div
			className={cn(
				'bg-neutral-950 h-28 w-screen flex fixed items-center justify-center px-4 z-50'
			)}>
			<div className='container mx-auto flex items-center justify-between'>
				<div className='hidden lg:flex flex-1 justify-end space-x-1'>
					{headerItems.slice(0, 3).map((item, index) => (
						<Link
							key={index}
							href={item.href}>
							<Button
								variant='ghost'
								className={cn(
									'text-white text-md rounded-3xl mx-1 bg-neutral-950 px-2 py-1',
									isActive(item.href) && 'bg-white text-neutral-950'
								)}>
								{item.label}
							</Button>
						</Link>
					))}
				</div>
				<div className='absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none'>
					<Image
						src='/ttsphoto.png'
						alt='Three Train Studios'
						width={150}
						height={100}
						className='object-cover object-bottom rounded-full'
					/>
				</div>
				<div className='hidden lg:flex flex-1 justify-start space-x-1'>
					{headerItems.slice(3).map((item, index) => (
						<Link
							key={index + 3}
							href={item.href}>
							<Button
								variant='ghost'
								className={cn(
									'text-white text-sm rounded-3xl mx-1 bg-neutral-950 px-2 py-1',
									isActive(item.href) && 'bg-white text-neutral-950'
								)}>
								{item.label}
							</Button>
						</Link>
					))}
				</div>
				<div className='lg:hidden ml-auto'>
					<Button
						variant='ghost'
						className='text-white rounded-3xl bg-neutral-950'
						onClick={toggleMenu}>
						{isMenuOpen ? 'Close' : 'Menu'}
					</Button>
				</div>
			</div>
			{isMenuOpen && (
				<div className='fixed top-28 left-0 right-0 bottom-0 bg-neutral-950/95 flex items-center justify-center z-40'>
					<div className='flex flex-col space-y-8 text-center'>
						{headerItems.map((item, index) => (
							<Link
								key={index}
								href={item.href}>
								<Button
									variant='ghost'
									className={cn(
										'text-neutral-100 text-2xl rounded-full',
										isActive(item.href) && 'bg-white text-neutral-950'
									)}
									onClick={toggleMenu}>
									{item.label}
								</Button>
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
