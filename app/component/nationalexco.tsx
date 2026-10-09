'use client';

import { motion } from 'framer-motion';

const executives = [
  {
    position: 'National President',
    name: 'Sanni Abdulwahab',
    featured: true,
  },
  {
    position: 'National Vice President',
    name: 'Alh Salihu Abdullahi',
  },
  {
    position: 'National Secretary General',
    name: 'David Bello, Esq.',
  },
  {
    position: 'National Asst Secretary General',
    name: 'Dr. Mustapha Muhammad Jamiu',
  },
  {
    position: 'National Director of Welfare',
    name: 'Hassan Muhammed',
  },
  {
    position: 'National Director of Project',
    name: 'Comrade Jibril Abbas',
  },
  {
    position: 'National Director of Information',
    name: 'Rabiu Ibrahim',
  },
  {
    position: 'National Financial Secretary',
    name: 'Prince Ahmed Attah',
  },
  {
    position: 'National Asst Financial Secretary',
    name: 'AbdulLatif Momoh Achi',
  },
  {
    position: 'National Treasurer',
    name: 'Comr. Abubakar Imran Enesi',
  },
  {
    position: 'National Auditor',
    name: 'Dr. Habib Enesi',
  },
];

export default function NationalExco() {
  return (
    <section id='national-exco' className='py-32 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <p className='text-[#2E3192] text-3xl uppercase tracking-[0.35em] font-semibold'>
            DFCN NATIONAL EXCO
          </p>

          <h2 className='mt-4 text-5xl font-bold text-gray-900'>
            National Executive Council
          </h2>

          <p className='mt-6 max-w-2xl mx-auto text-lg text-gray-600 leading-8'>
            Meet the national leadership responsible for guiding the affairs and
            development of DE-FRIENDS CLUB.
          </p>
        </motion.div>

        {/* President */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mt-16 flex justify-center'
        >
          <div className='w-full max-w-md rounded-3xl bg-[#2E3192] p-8 text-center shadow-lg'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-white/80'>
              {executives[0].position}
            </p>

            <h3 className='mt-3 text-3xl font-bold text-white'>
              {executives[0].name}
            </h3>
          </div>
        </motion.div>

        {/* Other Executives */}
        <div className='mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {executives.slice(1).map((executive, index) => (
            <motion.div
              key={executive.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className='group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
            >
              <p className='text-sm font-semibold uppercase tracking-[0.15em] text-[#2E3192]'>
                {executive.position}
              </p>

              <h3 className='mt-4 text-2xl font-bold text-gray-900'>
                {executive.name}
              </h3>

              <div className='mt-6 h-1 w-12 rounded-full bg-[#2E3192] transition-all duration-300 group-hover:w-20' />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
