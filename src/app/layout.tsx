import type { Metadata } from 'next';
import { Montserrat, Ubuntu } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '700'],
});

const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  weight: ['400', '500', '700'], // Added 500 for potential medium weight
});

export const metadata: Metadata = {
  title: "Fabio's Folio",
  description: "Portfolio of Fabio Tales Victorino, DevOps specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${ubuntu.variable}`}>
      <body className="antialiased font-ubuntu flex flex-col min-h-screen"> {/* Changed default font reference */}
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
