import React from 'react';
import { motion } from 'framer-motion';

// --- Data for the Resources Page ---

const resourceSections = [
  {
    title: 'Government E-Learning Portals',
    description: 'Access high-quality, free educational content from official Indian government sources.',
    items: [
      {
        name: 'SWAYAM',
        info: 'Offers free online courses from top Indian universities on a wide range of subjects.',
        link: 'https://swayam.gov.in/',
      },
      {
        name: 'National Digital Library of India (NDLI)',
        info: 'A massive virtual repository of learning resources, including books, articles, and videos.',
        link: 'https://ndl.iitkgp.ac.in/',
      },
      {
        name: 'e-PG Pathshala',
        info: 'High-quality, curriculum-based e-content for postgraduate-level courses.',
        link: 'https://epgp.inflibnet.ac.in/',
      },
    ],
  },
  {
    title: 'Essential Skill Development',
    description: 'Improve the soft and hard skills that are crucial for success in any career field.',
    items: [
      {
        name: 'TCS iON Digital Learning Hub',
        info: 'Offers a variety of free courses on career skills, communication, and IT literacy.',
        link: 'https://learning.tcsionhub.in/hub/national-qualifier-test/',
      },
      {
        name: 'Coursera for Campus (Free Courses)',
        info: 'Many top universities offer free versions of their courses for skill development.',
        link: 'https://www.coursera.org/',
      },
      {
        name: 'Google Skillshop',
        info: 'Master Google\'s tools with free online training. Perfect for digital marketing aspirants.',
        link: 'https://skillshop.withgoogle.com/',
      },
    ],
  },
  {
    title: 'Scholarship Portals',
    description: 'Find and apply for financial aid from government and private organizations.',
    items: [
      {
        name: 'National Scholarship Portal (NSP)',
        info: 'A one-stop platform for applying to various scholarship schemes by the central and state governments.',
        link: 'https://scholarships.gov.in/',
      },
      {
        name: 'West Bengal Oasis Scholarship Portal',
        info: 'The official portal for scholarships for SC, ST, and OBC students in West Bengal.',
        link: 'https://oasis.gov.in/',
      },
       {
        name: 'Swami Vivekananda Merit Cum Means Scholarship',
        info: 'A popular scholarship for meritorious and economically backward students of West Bengal.',
        link: 'https://www.bing.com/ck/a?!&&p=7a3bf170668863ba69ac3a1793a60d555f9a960d451b1ce7920063625d14fdb5JmltdHM9MTc1NzgwODAwMA&ptn=3&ver=2&hsh=4&fclid=19c94fd0-76fe-6ea0-21b5-5b4677656fde&psq=svmcm+scholarship+2025&u=a1aHR0cHM6Ly9zdm1jbS53Yi5nb3YuaW4v',
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};


export default function Resources() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-2">Resource Hub</h1>
      <p className="text-center text-lg text-black/80 mb-12">Your gateway to free learning materials, skill courses, and scholarships.</p>

      <div className="space-y-10">
        {resourceSections.map((section) => (
          <section key={section.title}>
            <h2 className="text-3xl font-semibold text-green-600 mb-2">{section.title}</h2>
            <p className="text-black/70 mb-6">{section.description}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-6 rounded-lg border border-transparent hover:border-white/20 hover:bg-black/20 transition-all block"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-black/80 mt-2">{item.info}</p>
                </motion.a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}