import React from 'react'
import { motion } from 'framer-motion'
import './styles.css'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
<div className="absolute inset-0 pointer-events-none animate-gradientMove"></div>

{/* Logo floating subtly */}
<div className="logo-float"></div>

      {/* Animated Background */}
      <div
        className="absolute inset-0 pointer-events-none animate-gradientMove"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12), transparent 30%), 
            radial-gradient(circle at 70% 70%, rgba(255,255,255,0.06), transparent 40%)
          `,
          backgroundSize: '200% 200%',
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative grid md:grid-cols-2 gap-6 items-center p-6 md:p-14">
        {/* Left content */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to <span className="text-primary">EduTech</span>
          </h1>
          <p className="text-lg opacity-90 max-w-lg">
            Your one-stop personalized career guidance platform. We help students
            discover their ideal path by aligning interests, skills, and goals
            with the right courses and future opportunities.
          </p>
          <div className="flex gap-3">
            <a
              href="/courses"
              className="px-4 py-2 rounded-lg backdrop-glass inline-block hover:scale-105 transition-transform"
            >
              Explore Courses
            </a>
            <a
              href="/contact"
              className="px-4 py-2 rounded-lg bg-white/10 inline-block hover:scale-105 transition-transform"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Right content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="p-6"
        >
          <div className="backdrop-glass p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold text-xl mb-3">Quick Overview</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm opacity-90">
              <li>Discover courses that match your interests & strengths.</li>
              <li>Get personalized career recommendations.</li>
              <li>Explore future opportunities with clarity & confidence.</li>
              <li>Access easy guidance anytime, anywhere.</li>
              <li>Make smarter decisions for a successful future.</li>
              <li>Join one-to-one interactive sessions to achieve your goals.</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative p-6 md:p-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="backdrop-glass p-8 rounded-2xl shadow-lg max-w-4xl mx-auto text-center space-y-4"
        >
          <h2 className="text-3xl font-bold">Why Choose EduTech?</h2>
          <p className="text-lg opacity-90">
            Choosing the right career can be overwhelming. EduTech makes it
            simple by giving you clarity, confidence, and guidance at every
            step. We combine technology with mentorship to bring you the best
            opportunities.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-4 rounded-lg bg-white/10">
              <h4 className="font-semibold text-lg">Personalized Guidance</h4>
              <p className="text-sm opacity-90">
                Our platform adapts to your strengths, interests, and goals to
                provide tailored recommendations.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white/10">
              <h4 className="font-semibold text-lg">Expert Mentorship</h4>
              <p className="text-sm opacity-90">
                Connect with career experts who guide you through challenges and
                help you achieve your ambitions.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white/10">
              <h4 className="font-semibold text-lg">Future-Ready Skills</h4>
              <p className="text-sm opacity-90">
                Stay updated with career insights, trending courses, and
                industry demands to remain ahead.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* YouTube Video Section */}
      <section className="relative p-6 md:p-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Watch Our Introduction</h2>
          <p className="text-lg opacity-90 mb-6">
            Learn more about how EduTech helps students like you choose the
            right career path. Watch our quick overview video below:
          </p>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-64 md:h-96"
              src="https://www.youtube.com/embed/Q45zMjr-Lo0?si=5BEIu2dcCYTzux5r"
              title="EduTech Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </section>
    </div>
  )
}