'use client';

import { Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-[#1F2563] text-white'>
      <div className='mx-auto max-w-7xl px-6 py-12'>
        {/* Top */}
        <div className='flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-8 md:flex-row'>
          {/* Logo & Name */}
          <div>
            <h2 className='text-2xl font-bold'>DE-FRIENDS CLUB</h2>

            <p className='mt-2 text-sm text-white/70'>
              Building Stronger Communities Together
            </p>
          </div>

          {/* Navigation */}
          <nav className='flex flex-wrap justify-center gap-8 text-sm'>
            <a href='#' className='transition hover:text-blue-300'>
              Home
            </a>

            <a href='#about' className='transition hover:text-blue-300'>
              About
            </a>

            <a href='#objectives' className='transition hover:text-blue-300'>
              Objectives
            </a>

            <a href='#contact' className='transition hover:text-blue-300'>
              Get Involved
            </a>
          </nav>
        </div>

        {/* Bottom */}

        <div className='mt-8 flex flex-col items-center justify-between gap-6 text-sm text-white/60 md:flex-row'>
          <p>
            © {new Date().getFullYear()} DE-FRIENDS CLUB. All Rights Reserved.
          </p>

          <div className='flex items-center gap-6'>
            <a
              href='mailto:defriendsclub@gmail.com'
              className='transition text-lg hover:text-white'
            >
              Email
            </a>

            <a
              href='https://facebook.com/defriendsclub'
              target='_blank'
              rel='noopener noreferrer'
              className='transition hover:text-white'
            >
              <Flame size={30} />
            </a>

            <a
              href='https://x.com/dynamicebirafriends'
              target='_blank'
              rel='noopener noreferrer'
              className='transition text-lg hover:text-white'
            >
              𝕏
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
