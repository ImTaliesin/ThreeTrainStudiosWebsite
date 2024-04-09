import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

export default function Home() {
	return (
		<main>
			<Header />
			<div className='container mx-auto p-4'>
				<h1 className='text-3xl font-bold'>Hello, world!</h1>
				<p className='mt-4'>
					This is a simple starter template for a Next.js app with Tailwind CSS
					and TypeScript.
				</p>
			</div>
			<Footer />
		</main>
	);
}
