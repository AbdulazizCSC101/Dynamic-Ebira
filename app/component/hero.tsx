'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-linear-to-br from-[#2E3192] via-[#3746b8] to-[#1b1d59] text-white min-h-screen flex items-center'>
      {/* Decorative Circles */}
      <motion.div
        className='absolute -top-24 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl'
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center'>
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className='uppercase tracking-[0.35em] text-blue-200 font-semibold'>
              Welcome To
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className='text-6xl lg:text-7xl font-extrabold mt-5 leading-tight'
            >
              DE-FRIENDS CLUB
            </motion.h1>

            <h2 className='text-3xl mt-6 font-semibold'>
              Uniting for Human Development
            </h2>

            <p className='mt-8 text-lg leading-8 text-blue-100 max-w-xl'>
              We are committed to empowering communities, promoting education,
              supporting healthcare, advocating against gender-based violence,
              and creating sustainable development across Ebira Land.
            </p>

            <div className='flex flex-wrap gap-5 mt-10'>
              <motion.a
                href='#constitution'
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white text-[#2E3192] px-8 py-4 rounded-full font-semibold'
              >
                Learn More
              </motion.a>

              <motion.a
                href='#contact'
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className='border-2 border-white px-8 py-4 rounded-full'
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className='flex justify-center'
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className='bg-white/10 backdrop-blur-lg rounded-full p-10 shadow-2xl'>
            <Image
              src='/logo new.png'
              alt='DE-FRIENDS CLUB'
              width={380}
              height={380}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
