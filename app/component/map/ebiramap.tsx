'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function EbiraMap() {
  return (
    <div className='relative w-full max-w-2xl mx-auto'>
      {/* Background Glow */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='h-130 w-130 rounded-full bg-blue-500/20 blur-3xl'></div>
      </div>

      {/* Glass Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
        className='relative rounded-4xl border border-white/30 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(46,49,146,0.18)] p-3'
      >
        <Image
          src='/EbiraMap.svg'
          alt='Map of Ebira Land'
          width={800}
          height={800}
          className='w-full h-auto'
        />
        {/* ---------- OKEHI ---------- */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
            duration: 0.4,
          }}
          className='absolute top-[36%] left-[39%] flex items-center gap-2'
        >
          <span className='text-sm font-medium text-white drop-shadow-md'>
            Okehi
          </span>
        </motion.div>
        {/* ---------- ADAVI ---------- */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.7,
            duration: 0.4,
          }}
          className='absolute top-[38%] right-[38%] flex items-center gap-2'
        >
          <span className='text-sm font-medium text-white drop-shadow-md'>
            Adavi
          </span>
        </motion.div>
        {/* ---------- OGORI ---------- */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.9,
            duration: 0.4,
          }}
          className='absolute top-[47%] left-[37%] flex items-center gap-2'
        >
          <span className='text-sm font-medium text-white drop-shadow-md'>
            Ogori
          </span>
        </motion.div>
        {/* ---------- AJAOKUTA ---------- */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 1.1,
            duration: 0.4,
          }}
          className='absolute top-[47%] right-[38%] flex items-center gap-2'
        >
          <span className='text-sm font-medium text-white drop-shadow-md'>
            Ajaokuta
          </span>
        </motion.div>

        {/* ---------- OKENE ---------- */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 1.3,
            duration: 0.4,
          }}
          className='absolute bottom-[40%] left-[52%] flex items-center gap-2'
        >
          <span className='text-sm font-medium text-white drop-shadow-md'>
            Okene
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
