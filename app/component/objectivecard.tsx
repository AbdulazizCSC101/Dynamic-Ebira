'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ObjectiveCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export default function ObjectiveCard({
  icon: Icon,
  title,
  description,
  delay,
}: ObjectiveCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -8,
      }}
      className='group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 border border-transparent hover:border-[#2E3192]'
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className='inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#2E3192]'
      >
        <Icon size={34} />
      </motion.div>

      <h3 className='mt-6 text-2xl font-bold text-gray-900'>{title}</h3>

      <p className='mt-4 leading-7 text-gray-600'>{description}</p>

      <div className='mt-8 flex justify-end'>
        <ArrowRight className='transition-transform duration-300 group-hover:translate-x-2 text-[#2E3192]' />
      </div>
    </motion.div>
  );
}
