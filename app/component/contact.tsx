'use client';

import { motion } from 'framer-motion';
import { Mail, Globe, Flame, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id='contact'
      className='relative overflow-hidden bg-linear-to-br from-[#2E3192] to-[#4047C9] py-32'
    >
      {/* Background Glow */}
      <div className='absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl' />
      <div className='absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl' />

      <div className='relative mx-auto max-w-7xl px-6'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='text-center'
        >
          <p className='uppercase text-3xl tracking-[0.35em] text-white/70 font-semibold'>
            GET INVOLVED
          </p>

          <h2 className='mt-5 text-5xl font-bold text-white'>
            Ready to Make an Impact?
          </h2>

          <p className='mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80'>
            Join us in promoting education, healthcare, empowerment, and
            sustainable community development across Ebira Land. Together, we
            can build stronger communities for future generations.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className='mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row'
        >
          <a
            href='mailto:defriendsclub@gmail.com'
            className='rounded-full bg-white px-8 py-4 font-semibold text-[#2E3192] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'
          >
            Become a Partner
          </a>

          <a
            href='mailto:defriendsclub@gmail.com'
            className='rounded-full border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#2E3192]'
          >
            Email Us
          </a>
        </motion.div>

        {/* Contact Cards */}
        <div className='mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -8 }}
            className='rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl'
          >
            <Mail className='mb-5 text-white' size={34} />

            <h3 className='text-xl font-semibold text-white'>Email</h3>

            <div className='mt-4 min-w-0 space-y-2 text-white/80'>
              <a
                href='mailto:defriends_club@yahoo.com'
                className='block break-all text-sm sm:text-base hover:text-white'
              >
                defriends_club@yahoo.com
              </a>

              <a
                href='mailto:defriendsclub@gmail.com'
                className='block break-all text-sm sm:text-base hover:text-white'
              >
                defriendsclub@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -8 }}
            className='rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl'
          >
            <Phone className='mb-5 text-white' size={34} />

            <h3 className='text-xl font-semibold text-white'>Phone</h3>

            <a
              href='tel:08036417178'
              className='mt-4 block text-xl text-white/80 transition-colors hover:text-white'
            >
              08036417178
            </a>
          </motion.div>
          {/* Website */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            whileHover={{ y: -8 }}
            className='rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl'
          >
            <Globe className='mb-5 text-white' size={34} />

            <h3 className='text-xl font-semibold text-white'>Website</h3>

            <p className='mt-4 text-white/80'>Coming Soon</p>
          </motion.div>
          {/* Twitter */}
          <motion.a
            href='https://x.com/dynamicebirafriends'
            target='_blank'
            rel='noopener noreferrer'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ y: -8 }}
            className='rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl'
          >
            <div className='mb-5 text-3xl text-white'>𝕏</div>

            <h3 className='text-xl font-semibold text-white'>Twitter</h3>

            <p className='mt-4 text-white/80'>@dynamicebirafriends</p>
          </motion.a>
          {/* Facebook */}
          <motion.a
            href='https://facebook.com/defriendsclub'
            target='_blank'
            rel='noopener noreferrer'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75 }}
            whileHover={{ y: -8 }}
            className='rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl'
          >
            <Flame className='mb-5 text-white' size={34} />

            <h3 className='text-xl font-semibold text-white'>Facebook</h3>

            <p className='mt-4 text-white/80'>@defriendsclub</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
