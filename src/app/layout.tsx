import '@styles/globals.css';
import { Inter as FontSans } from 'next/font/google';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export default function RootLayout({ children }: any) {
	return (
		<html
			lang='en'
			suppressHydrationWarning>
			<head />
			<body
				className={cn('min-w-[dvh] font-sans antialiased', fontSans.variable)}>
				<Header />

				<main className='items-center justify-center relative overflow-hidden flex pt-24 bg-gradient-to-r from-amber-300/90 via-yellow-100 to-amber-300 min-h-[90dvh]'>
					{children}
				</main>

				<Footer />
			</body>
		</html>
	);
}
