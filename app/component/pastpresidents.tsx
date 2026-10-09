'use client';

import { motion } from 'framer-motion';

const pastPresidents = [
  {
    period: '2007 - 2010',
    name: 'Alh Adams Otaru Ibrahim',
  },
  {
    period: '2011 - 2012',
    name: 'Mr Victor Eneji',
  },
  {
    period: '2013 - 2014',
    name: 'Hon Yekini Okino',
  },
  {
    period: 'January 2015 - June 2015',
    name: 'Alh Mohammed Jamil isah',
  },
  {
    period: 'July 2015 - December 2015',
    name: "Hon. Moh'd Kabir Ajanah",
  },
  {
    period: '2016 - 2018',
    name: 'Eneji Abdulrahman',
  },
  {
    period: '2019 - 2021',
    name: 'Hon Yekini Okino',
  },
  {
    period: '2021 - 2023',
    name: 'Dr Tijjani Ajayi Ahmed',
  },
  {
    period: '2024 - 2026',
    name: 'Eneji Abdulrahman',
  },
];

export default function PastPresidents() {
  return (
    <section id='past-presidents' className='py-32 bg-white'>
      <div className='max-w-5xl mx-auto px-6'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <p className='text-[#2E3192] text-3xl uppercase tracking-[0.35em] font-semibold'>
            CHRONICLE OF PAST PRESIDENTS
          </p>

          <h2 className='mt-4 text-5xl font-bold text-gray-900'>
            Our Leadership Through the Years
          </h2>

          <p className='mt-6 max-w-2xl mx-auto text-lg text-gray-600 leading-8'>
            Honouring the leaders who have served DE-FRIENDS CLUB and helped
            shape its journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className='relative mt-20'>
          {/* Vertical Line */}
          <div className='absolute left-4 top-0 h-full w-px bg-gray-200 md:left-1/2 md:-translate-x-1/2' />

          <div className='space-y-12'>
            {pastPresidents.map((president, index) => (
              <motion.div
                key={`${president.name}-${president.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className='relative'
              >
                {/* Timeline Dot */}
                <div className='absolute left-4 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-[#2E3192] ring-8 ring-white md:left-1/2' />

                {/* Mobile */}
                <div className='ml-10 rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm md:hidden'>
                  <p className='text-sm font-semibold uppercase tracking-[0.15em] text-[#2E3192]'>
                    {president.period}
                  </p>

                  <h3 className='mt-3 text-2xl font-bold text-gray-900'>
                    {president.name}
                  </h3>
                </div>

                {/* Desktop */}
                <div
                  className={`hidden md:flex ${
                    index % 2 === 0
                      ? 'justify-start pr-[52%]'
                      : 'justify-end pl-[52%]'
                  }`}
                >
                  <div className='w-full rounded-3xl border border-gray-200 bg-gray-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
                    <p className='text-sm font-semibold uppercase tracking-[0.15em] text-[#2E3192]'>
                      {president.period}
                    </p>

                    <h3 className='mt-3 text-2xl font-bold text-gray-900'>
                      {president.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
