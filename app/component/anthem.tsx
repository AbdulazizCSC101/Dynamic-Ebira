'use client';

import { motion } from 'framer-motion';

export default function Anthem() {
  return (
    <section id='anthem' className='py-32 bg-white'>
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
            CLUB ANTHEM
          </p>

          <h2 className='mt-4 text-5xl font-bold text-gray-900'>
            Our Strength Lies in Brotherhood
          </h2>

          <p className='mt-6 max-w-2xl mx-auto text-lg text-gray-600 leading-8'>
            The anthem that reflects the unity, purpose and brotherhood of
            DE-FRIENDS CLUB.
          </p>
        </motion.div>

        {/* Anthem Card */}
        <div className='relative mt-16'>
          {/* Breathing blue glow */}
          <motion.div
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='absolute -inset-6 rounded-[2.5rem] bg-[#2E3192]/20 blur-3xl'
          />

          {/* Anthem Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='relative rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-14 shadow-sm'
          >
            <div className='mx-auto max-w-3xl text-center text-lg md:text-xl text-gray-700 leading-9'>
              <p>We are DE-Friends; we are brothers, x2</p>

              <p className='mt-6'>
                Whose sole aim and objective is to unite
                <br />
                for purposeful goal,
              </p>

              <p className='mt-6'>
                The goal to improve ourselves and our community,
              </p>

              <p className='mt-6'>We abhor acrimony and deceit.</p>

              <p className='mt-6'>
                For the lofty aims and goodness of our land,
                <br />
                The reasons for which we unite and strive,
              </p>

              <p className='mt-6'>Guide us and see our aims through O'Lord,</p>

              <p className='mt-6'>As our strength lies in brotherhood.</p>

              <p className='mt-8 font-bold text-[#2E3192] tracking-widest'>
                AMEN.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
