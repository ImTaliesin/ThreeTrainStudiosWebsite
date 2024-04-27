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
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={cn('font-sans antialiased flex flex-col min-h-screen', fontSans.variable)}>
        <Header />
        <main className='flex-grow flex flex-col items-center justify-center relative overflow-auto bg-gradient-to-r from-yellow-400/90 via-yellow-200 to-yellow-400/90 p-4'>
          <div className='flex flex-col items-center justify-center w-full pt-28 pb-8'>
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}