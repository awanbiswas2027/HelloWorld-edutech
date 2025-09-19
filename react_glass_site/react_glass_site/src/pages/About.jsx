import React from 'react';
import { motion } from 'framer-motion'

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="space-y-12">

      {/* Page Title */}
      <motion.div
        className="text-center space-y-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="text-4xl font-bold">About EduTech</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Empowering students to make informed career choices through personalized guidance, expert mentorship, and future-ready insights.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.7, ease: 'easeOut', staggerChildren: 0.2 }}
      >
        <div className="backdrop-glass p-6 rounded-xl shadow-lg">
          <h2 className="font-bold text-xl mb-2">Our Mission</h2>
          <p>
            To provide personalized, accessible, and accurate career guidance for every student, helping them discover their strengths, interests, and ideal educational paths.
          </p>
        </div>
        <div className="backdrop-glass p-6 rounded-xl shadow-lg">
          <h2 className="font-bold text-xl mb-2">Our Vision</h2>
          <p>
            To become the one-stop solution for students seeking clarity and confidence in their academic and career decisions, fostering a generation of empowered and future-ready individuals.
          </p>
        </div>
      </motion.div>

      {/* How EduTech Helps */}
      <motion.section
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-center">How EduTech Helps</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="backdrop-glass p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Personalized Assessments</h3>
            <p className="text-sm opacity-90">
              Tailored quizzes and assessments to uncover interests, skills, and potential career paths.
            </p>
          </div>
          <div className="backdrop-glass p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Expert Mentorship</h3>
            <p className="text-sm opacity-90">
              One-on-one guidance from career experts to navigate academic decisions and career challenges.
            </p>
          </div>
          <div className="backdrop-glass p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Career & Course Recommendations</h3>
            <p className="text-sm opacity-90">
              Get insights into courses, degrees, and skills that align with your goals and emerging industry demands.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Team */}
      <motion.section
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Pranab Das Choudhury',
              role: 'Mathematics & Career Guidance Expert',
              img: 'src/pages/WhatsApp Image 2025-09-01 at 8.03.37 PM.jpeg',
            },
            {
              name: 'Ananya Roy',
              role: 'Education Technology Specialist',
              img: 'src/pages/WhatsApp Image 2025-09-01 at 8.03.36 PM.jpeg',
            },
            {
              name: 'Rohan Mukherjee',
              role: 'UI/UX Designer & Developer',
              img: 'src/pages/WhatsApp Image 2025-09-01 at 8.03.53 PM.jpeg',
            },
          ].map(member => (
            <motion.div
              key={member.name}
              className="backdrop-glass p-6 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="w-24 h-24 mx-auto mb-2 rounded-full overflow-hidden border-2 border-white/20">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-semibold">{member.name}</h4>
              <p className="text-sm opacity-90">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Repeat similar motion wrappers for Other sections */}
      <motion.section
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-center">Our Approach</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="backdrop-glass p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Technology-Driven</h3>
            <p className="text-sm opacity-90">
              Leveraging modern tools and AI-powered analytics to provide data-backed career insights.
            </p>
          </div>
          <div className="backdrop-glass p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Human-Centered</h3>
            <p className="text-sm opacity-90">
              Combining expert mentorship with personalized support to guide students every step of the way.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-center">Impact</h2>
        <p className="text-center opacity-90 max-w-2xl mx-auto">
          Since launching, EduTech has guided hundreds of students to discover their ideal careers, enroll in the right courses, and make confident academic decisions.
        </p>
      </motion.section>

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
      >
        <div className="backdrop-glass p-6 rounded-xl shadow-lg">
          <h3 className="font-semibold">Perks</h3>
          <ul className="list-disc pl-5 mt-2 text-sm opacity-90">
            <li>Choose your Stream using AI according to your likings and personality.</li>
            <li>Job Recommendations using AI.</li>
            <li>Job opportunities regionwise according to availability.</li>
            <li>Interactive chatbot and doubt solver.</li>
            <li>One on One Counselling Session.</li>
          </ul>
        </div>
        <div className="backdrop-glass p-6 rounded-xl shadow-lg">
          <h3 className="font-semibold">Our Goals</h3>
          <ul className="list-disc pl-5 mt-2 text-sm opacity-90">
            <li>Empower students to make informed career decisions</li>
            <li>Provide accessible mentorship & guidance</li>
            <li>Bridge the gap between education and industry opportunities</li>
          </ul>
        </div>
      </motion.div>

    </div>
  )
}
