import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Poppins, Inter } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DE-FRIENDS CLUB',
  description:
    'DE-FRIENDS CLUB is a non-partisan, non-religious, non-governmental organization committed to promoting education, healthcare, empowerment, and sustainable community development across Ebira Land.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${poppins.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
