import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { careerData } from '../data/careerData';

// Helper component for styling the job opportunity cards
function JobCard({ job }) {
  return (
    <div className="bg-white/5 p-4 rounded-lg border border-transparent hover:border-white/20 transition-colors">
      <h4 className="font-bold text-lg text-green-300">{job.role}</h4>
      <p className="text-sm text-white/70 mt-1">{job.description}</p>
    </div>
  );
}

export default function CareerDetail() {
  // useParams() grabs the dynamic part of the URL, e.g., "software-engineer"
  const { careerId } = useParams();
  const data = careerData[careerId];

  // If the URL doesn't match any key in our data, show a "not found" message
  if (!data) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold">Career Path Not Found</h1>
        <p className="mt-4">Sorry, we don't have detailed information for this career yet.</p>
        <Link to="/careers" className="mt-6 inline-block bg-blue-400 text-gray-900 font-bold py-2 px-6 rounded-full">
          Back to Careers
        </Link>
      </div>
    );
  }

  // If data is found, display it
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-12">
      {/* Header Section */}
      <div className="text-center border-b border-white/20 pb-8">
        <h1 className="text-5xl font-bold text-green-300">{data.title}</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-black/80">{data.summary}</p>
      </div>

      {/* Recommended Courses Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Your Learning Roadmap</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.recommendedCourses.map((course) => (
            <div key={course.name} className="bg-white/10 p-4 rounded-lg">
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${course.level === 'Degree' ? 'bg-purple-500' : 'bg-blue-500'}`}>{course.level}</span>
              <p className="mt-2 font-semibold">{course.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Opportunities Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Job Opportunities</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Entry Level Jobs */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white/90">For Freshers</h3>
            <div className="space-y-4">
              {data.jobOpportunities.entryLevel.map((job) => (
                <JobCard key={job.role} job={job} />
              ))}
            </div>
          </div>
          {/* Experienced Jobs */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white/90">For Experienced Professionals</h3>
            <div className="space-y-4">
              {data.jobOpportunities.forEfficientPerson.map((job) => (
                <JobCard key={job.role} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}