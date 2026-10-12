'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '500' });
const inter = Inter({ subsets: ['latin'] });

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Objectives', href: '#objectives' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50'>
      <nav className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-3'>
          <Image
            width={80}
            height={80}
            src='/logo new.png'
            alt='DE-FRIENDS CLUB Logo'
            className='rounded-full w-20 h-20'
          />

          <div>
            <h1 className='text-lg font-bold text-blue-600'>DE-FRIENDS CLUB</h1>
            <p className='text-xs font-body text-gray-500'>
              Uniting for Human Development
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className='text-gray-700 hover:text-[#2E3192] transition font-medium'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Join Button */}
        <button className='hidden md:block bg-[#2E3192] text-white px-5 py-2 rounded-full hover:bg-blue-800 transition'>
          Join Us
        </button>

        {/* Mobile Menu Button */}
        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white border-t'>
          <ul className='flex flex-col p-6 gap-4'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='text-gray-700 hover:text-[#2E3192]'
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <button className='mt-4 bg-[#2E3192] text-white py-2 rounded-full'>
              Join Us
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}
