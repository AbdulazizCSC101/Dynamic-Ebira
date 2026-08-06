'use client';

import { motion } from 'framer-motion';

import {
  GraduationCap,
  HeartPulse,
  Droplets,
  Handshake,
  Shield,
  Globe,
} from 'lucide-react';

import ObjectiveCard from './objectivecard';

const objectives = [
  {
    icon: GraduationCap,
    title: 'Education',
    description:
      'Supporting educational initiatives that create opportunities and improve learning within communities.',
  },
  {
    icon: HeartPulse,
    title: 'Health Intervention',
    description:
      'Promoting healthcare initiatives and improving access to quality health services.',
  },
  {
    icon: Droplets,
    title: 'Water Projects',
    description:
      'Supporting boreholes and clean water projects that improve everyday living.',
  },
  {
    icon: Handshake,
    title: 'Community Empowerment',
    description:
      'Empowering individuals and communities through sustainable development programmes.',
  },
  {
    icon: Shield,
    title: 'GBV Advocacy',
    description:
      'Advocating against Gender-Based Violence and promoting a safer, more inclusive society.',
  },
  {
    icon: Globe,
    title: 'Partnerships',
    description:
      'Collaborating with organizations, government agencies and individuals to drive community development.',
  },
];

export default function Objectives() {
  return (
    <section id='objectives' className='py-32 bg-gray-50'>
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
            OUR OBJECTIVES
          </p>

          <h2 className='mt-4 text-5xl font-bold text-gray-900'>
            Driving Sustainable Development
            <br />
            Across Ebira Land
          </h2>

          <p className='mt-6 max-w-2xl mx-auto text-lg text-gray-600 leading-8'>
            Every initiative we undertake is focused on creating lasting impact
            through education, healthcare, empowerment and community
            collaboration.
          </p>
        </motion.div>

        {/* Cards */}

        <div className='mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {objectives.map((objective, index) => (
            <ObjectiveCard
              key={objective.title}
              icon={objective.icon}
              title={objective.title}
              description={objective.description}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
