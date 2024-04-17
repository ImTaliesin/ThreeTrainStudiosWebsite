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
				className={cn(
					'min-w-[dvh] font-sans antialiased',
					fontSans.variable
				)}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
