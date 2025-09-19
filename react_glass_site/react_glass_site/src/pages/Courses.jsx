import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const courses = [
  { id: 'ba-humanities', title: 'B.A. (Humanities)', desc: 'Open up careers in teaching, civil services, creative fields, journalism, and social work.' },
  { id: 'bsc-science', title: 'B.Sc. (Science)', desc: 'Pathways into research, lab jobs, healthcare, data analytics, and higher studies.' },
  { id: 'bcom-commerce', title: 'B.Com (Commerce)', desc: 'Great for finance, accounting, auditing, taxation, business management, and entrepreneurship.' },
  { id: 'btech-engineering', title: 'B.Tech (Engineering)', desc: 'Technical careers in software development, hardware, AI, robotics, civil, and mechanical fields.' },
  { id: 'bba-business', title: 'BBA (Business Administration)', desc: 'Prepare for managerial roles, startups, business analytics, and corporate jobs.' },
  { id: 'bca-computer', title: 'BCA (Computer Applications)', desc: 'Ideal for software development, programming, web & app development, and IT careers.' },
  { id: 'ba-psychology', title: 'BA (Psychology)', desc: 'Opportunities in counseling, human resources, research, and behavioral sciences.' },
  { id: 'bed-education', title: 'B.Ed. (Education)', desc: 'Become a certified teacher or work in educational administration and training.' },
  { id: 'law-llb', title: 'Law (LLB)', desc: 'Pursue careers in legal practice, corporate law, public service, or judiciary.' },
  { id: 'mbbs-bds', title: 'MBBS / BDS', desc: 'Medical and dental careers, hospital administration, research, or public health.' },
  { id: 'design-bdes', title: 'Design (B.Des / Fashion / UI/UX)', desc: 'Work in creative industries, product design, fashion, UI/UX, and digital media.' },
  { id: 'hotel-tourism', title: 'Hotel & Tourism', desc: 'Careers in hospitality, tourism management, event planning, and international services.' },
];

export default function Courses() {
  const [currentUser, setCurrentUser] = useState(null);
  const [savedCourses, setSavedCourses] = useState([]);

  useEffect(() => {
    const user = sessionStorage.getItem('currentUser');
    if (user) {
      const parsedUser = JSON.parse(user);
      setCurrentUser(parsedUser);

      // Get saved courses for this user
      const userDashboardKey = `dashboard_courses_${parsedUser.email}`;
      const saved = localStorage.getItem(userDashboardKey);
      if (saved) {
        setSavedCourses(JSON.parse(saved));
      }
    }
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-12">

      {/* Get Course Recommendation Button */}
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <Link 
          to="/courses/quiz" 
          className="px-6 py-3 bg-green-800 rounded-lg hover:bg-black/30 transition-colors font-semibold text-white"
        >
          Get Your Course Recommendation
        </Link>

        <motion.div
          className="backdrop-glass p-6 rounded-2xl shadow-lg text-center max-w-3xl mx-auto mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-black/80 text-lg">
            Take our quiz to get personalized course recommendations based on your interests, skills, and career goals.
          </p>
        </motion.div>
      </motion.div>

      {/* Saved Course Recommendations */}
      {savedCourses.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-center mb-4">Your Recommended Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedCourses.map(courseId => {
              const course = courses.find(c => c.id === courseId);
              return course ? (
                <motion.div
                  key={course.id}
                  className="backdrop-glass p-6 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform"
                  variants={cardVariants}
                  transition={{ duration: 0.7 }}
                >
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <p className="text-sm opacity-90 mt-2">{course.desc}</p>
                </motion.div>
              ) : null;
            })}
          </div>
        </div>
      )}

      {/* Courses Grid */}
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {courses.map(course => (
          <motion.div
            key={course.id}
            className="backdrop-glass p-6 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform"
            variants={cardVariants}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-semibold text-lg">{course.title}</h3>
            <p className="text-sm opacity-90 mt-2">{course.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
