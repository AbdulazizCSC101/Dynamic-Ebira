'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  FileText,
  ShieldCheck,
  ArrowUpRight,
  Eye,
} from 'lucide-react';
import Image from 'next/image';

const constitutionUrl = '/documents/DFCN Constitutions 2021 final.pdf';

export default function Constitution() {
  return (
    <section
      id='constitution'
      className='relative overflow-hidden bg-gray-50 py-24 md:py-32'
    >
      {/* Background decoration */}
      <div className='pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#2E3192]/5 blur-3xl' />
      <div className='pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#4047C9]/10 blur-3xl' />

      <div className='relative mx-auto max-w-7xl px-6'>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='mx-auto max-w-3xl text-center'
        >
          <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2E3192]/10 text-[#2E3192]'>
            <ShieldCheck size={32} />
          </div>

          <p className='mt-6 text-sm font-bold uppercase tracking-[0.3em] text-[#2E3192]'>
            Our Guiding Principles
          </p>

          <h2 className='mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl'>
            The Club Constitution
          </h2>

          <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg'>
            Explore the official constitution of Dynamic Ebira Friends Club in
            Nigeria, outlining our identity, membership, leadership,
            responsibilities and guiding principles.
          </p>
        </motion.div>

        {/* Main card */}
        <div className='mx-auto mt-16 max-w-5xl perspective-distant'>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{
              y: -8,
              rotateX: 1,
              rotateY: -1,
              transition: { duration: 0.25 },
            }}
            style={{ transformStyle: 'preserve-3d' }}
            className='grid overflow-hidden rounded-4xl border border-gray-200 bg-white shadow-xl shadow-[#2E3192]/10 md:grid-cols-2'
          >
            {/* Information panel */}
            <div className='flex flex-col justify-center p-8 sm:p-10 md:p-12'>
              <div className='flex w-fit items-center gap-2 rounded-full bg-[#2E3192]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#2E3192]'>
                <span className='h-2 w-2 rounded-full bg-[#2E3192]' />
                Official Club Document
              </div>

              <h3 className='mt-7 text-3xl font-bold leading-tight text-gray-900 md:text-4xl'>
                DE-FRIENDS
                <span className='mt-1 block text-[#2E3192]'>Constitution</span>
              </h3>

              <p className='mt-4 text-lg font-medium text-gray-500'>
                2011 (As Amended)
              </p>

              <p className='mt-6 leading-8 text-gray-600'>
                Learn about the rules, aims, membership requirements and
                organizational structure that guide our club and its commitment
                to community development.
              </p>

              {/* Document details */}
              <div className='mt-7 flex flex-wrap gap-3'>
                <div className='flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700'>
                  <FileText size={18} className='text-[#2E3192]' />
                  PDF document
                </div>

                <div className='flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700'>
                  <BookOpen size={18} className='text-[#2E3192]' />
                  55 pages
                </div>
              </div>

              {/* Read-only website action */}
              <a
                href='#constitution-reader'
                className='group mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#2E3192] px-7 py-4 font-semibold text-white shadow-lg shadow-[#2E3192]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#242775] hover:shadow-xl sm:w-fit'
              >
                <BookOpen size={20} />
                Read Constitution
                <ArrowUpRight
                  size={18}
                  className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
                />
              </a>

              <p className='mt-5 flex items-center gap-2 text-sm text-gray-500'>
                <Eye size={17} className='shrink-0 text-[#2E3192]' />
                Read the document online
              </p>
            </div>

            {/* Decorative document cover */}
            <div className='relative flex min-h-100 items-center justify-center overflow-hidden bg-linear-to-br from-[#252978] via-[#2E3192] to-[#4850D7] p-8 sm:p-12 md:min-h-130'>
              <div className='absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/15' />
              <div className='absolute -bottom-28 -left-20 h-80 w-80 rounded-full border border-white/15' />
              <div className='absolute right-10 top-16 h-36 w-36 rounded-full bg-white/10 blur-3xl' />

              {/* Cover artwork */}
              <motion.div
                whileHover={{
                  rotate: 0,
                  y: -6,
                  transition: { duration: 0.3 },
                }}
                initial={{ rotate: -4 }}
                className='relative w-full max-w-72.5 bg-white p-5 shadow-2xl shadow-black/25 sm:p-7'
              >
                <div className='border border-gray-200 p-5 sm:p-7'>
                  <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#2E3192] text-[#2E3192]'>
                    <Image
                      src='/logo new.png'
                      alt='DE-FRIENDS Club Logo'
                      width={74}
                      height={74}
                      className='h-full w-full object-contain p-1'
                    />
                  </div>

                  <p className='mt-6 text-center text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500'>
                    Dynamic Ebira Friends Club
                  </p>

                  <div className='mx-auto mt-5 h-1 w-12 rounded-full bg-[#2E3192]' />

                  <h4 className='mt-6 text-center text-xl font-extrabold uppercase leading-snug tracking-wide text-[#2E3192]'>
                    Constitution
                  </h4>

                  <p className='mt-3 text-center text-xs font-medium text-gray-600'>
                    2011 (As Amended)
                  </p>

                  <div className='mt-8 space-y-2'>
                    <div className='h-1.5 rounded-full bg-gray-200' />
                    <div className='h-1.5 rounded-full bg-gray-200' />
                    <div className='mx-auto h-1.5 w-4/5 rounded-full bg-gray-200' />
                  </div>

                  <p className='mt-8 text-center text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400'>
                    Our Strength Is in Brotherhood
                  </p>
                </div>

                <div className='absolute -bottom-2 left-2 right-2 -z-10 h-full bg-gray-200' />
                <div className='absolute -bottom-4 left-4 right-4 -z-20 h-full bg-gray-300' />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='absolute bottom-7 right-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/15 p-3 shadow-lg backdrop-blur-xl sm:bottom-10 sm:right-8'
              >
                <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#2E3192]'>
                  <FileText size={21} />
                </div>

                <div>
                  <p className='text-sm font-bold text-white'>
                    Club Constitution
                  </p>
                  <p className='text-xs text-white/75'>Official document</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Online PDF reader */}
        <motion.div
          id='constitution-reader'
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className='mx-auto mt-20 max-w-5xl scroll-mt-24'
        >
          <div className='mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
            <div>
              <p className='text-sm font-bold uppercase tracking-[0.2em] text-[#2E3192]'>
                Document Viewer
              </p>
              <h3 className='mt-2 text-2xl font-bold text-gray-900 md:text-3xl'>
                Read the Constitution Online
              </h3>
              <p className='mt-2 text-sm leading-6 text-gray-500'>
                Scroll through the document using the viewer below.
              </p>
            </div>
          </div>

          <div className='overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-200/60'>
            <div className='flex items-center gap-3 border-b border-gray-200 bg-gray-50 px-5 py-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#2E3192]/10 text-[#2E3192]'>
                <FileText size={22} />
              </div>

              <div>
                <p className='font-semibold text-gray-900'>
                  DE-FRIENDS Club Constitution
                </p>
                <p className='text-xs text-gray-500'>2011 (As Amended)</p>
              </div>
            </div>

            <iframe
              src={`${constitutionUrl}#toolbar=0&navpanes=0`}
              title='DE-FRIENDS Club Constitution'
              className='h-162.5 w-full bg-gray-100 sm:h-200'
            />
          </div>

          <p className='mt-4 text-center text-xs leading-6 text-gray-500'>
            If the document does not display in your browser, try opening the
            website on a device with PDF viewing support.
          </p>
        </motion.div>

        {/* Closing message */}
        <p className='mt-12 text-center text-sm font-medium tracking-wide text-gray-500'>
          Our strength lies in brotherhood.
        </p>
      </div>
    </section>
  );
}
