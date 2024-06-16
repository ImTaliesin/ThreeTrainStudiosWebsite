import '@styles/globals.css';
import { Forum } from 'next/font/google';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { cn } from '@/lib/utils';

const fontForum = Forum({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-forum',
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn('font-forum antialiased flex flex-col min-h-screen', fontForum.variable)}>
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center relative overflow-auto bg-gradient-to-r from-sky-300 via-sky-200/80 to-sky-300/90 p-4">
          <div className="flex flex-col items-center justify-center w-full pt-28 pb-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
