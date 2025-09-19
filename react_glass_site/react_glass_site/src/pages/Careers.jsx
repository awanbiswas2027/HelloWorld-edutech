import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pathwayData } from './pathwayData.jsx';
import PersonalizedPath from './PersonalizedPath.jsx';
import { FaGraduationCap, FaBriefcase, FaUserTie } from 'react-icons/fa';
import CareerCard from './CareerCard'; // You will need to create this component in the next step

// Get the keys from the data to create our selection buttons
const careerFields = Object.keys(pathwayData);

export default function Careers() {
  const [currentUser, setCurrentUser] = useState(null);
  const [quizResults, setQuizResults] = useState([]);
  const [selectedField, setSelectedField] = useState(careerFields[0]);
  const [expandedMilestone, setExpandedMilestone] = useState(null);

  // Check for a logged-in user and their quiz result when the component loads
  useEffect(() => {
    const user = sessionStorage.getItem('currentUser');
    if (user) {
      const parsedUser = JSON.parse(user);
      setCurrentUser(parsedUser);

      // Fetch quiz results based on the logged-in user
      if (parsedUser.email) {
        const resultsKey = `dashboard_${parsedUser.email}`;
        const storedResults = localStorage.getItem(resultsKey);
        if (storedResults) {
          try {
            const results = JSON.parse(storedResults);
            // Assuming quiz results are an array of objects like { id: 'IT', title: 'Information Technology' }
            setQuizResults(results); 
            // Automatically select the first recommended career field to display
            if (results.length > 0) {
              setSelectedField(results[0].id);
            }
          } catch (error) {
            console.error("Failed to parse quiz results from localStorage", error);
            setQuizResults([]);
          }
        }
      }
    }
  }, []);

  const selectedPathway = pathwayData[selectedField];

  const handleMilestoneClick = (stageTitle, milestoneName) => {
    const milestoneId = `${stageTitle}-${milestoneName}`;
    setExpandedMilestone(expandedMilestone === milestoneId ? null : milestoneId);
  };

  const handleFieldSelect = (field) => {
    setSelectedField(field);
    setExpandedMilestone(null);
  };

  // Helper function to get the correct icon for the timeline
  const getStageIcon = (stage) => {
    switch (stage.toLowerCase()) {
      case 'education':
        return <FaGraduationCap className="text-gray-900" />;
      case 'professional experience':
        return <FaBriefcase className="text-gray-900" />;
      case 'career progression':
        return <FaUserTie className="text-gray-900" />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* --- Main Call to Action Section --- */}
      {currentUser ? (
        <PersonalizedPath currentUser={currentUser} />
      ) : (
        <div className="backdrop-glass p-8 rounded-xl text-center mb-12">
          <h2 className="text-3xl font-bold text-green-300">Unlock Your Personalized Career Hub</h2>
          <p className="mt-2 text-lg text-black/80 max-w-2xl mx-auto">
            Sign up and take our Discovery Quiz to get a personalized list of career recommendations and track your path forward.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Link to="/login" className="bg-green-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-green-300 transition-all">
              Sign Up Now
            </Link>
          </div>
        </div>
      )}

      {/* --- Recommended Career Section (Conditionally Rendered) --- */}
      {currentUser && quizResults.length > 0 && (
        <div className="backdrop-glass p-8 rounded-2xl mb-8">
          <h2 className="text-3xl font-bold text-green-300 text-center mb-6">
            Your Recommended Careers
          </h2>
          <div className="flex justify-center flex-wrap gap-6">
            {quizResults.map((career) => (
              <CareerCard 
                key={career.id}
                title={career.title}
                description={career.description}
                onExplore={() => handleFieldSelect(career.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* --- The Quiz Button (Visible to Everyone) --- */}
      <div className="text-center my-8">
        <Link to="/quiz" className="bg-green-500 text-black font-bold py-3 px-8 rounded-full hover:bg-green-400 transition-all duration-300">
          Take the Discovery Quiz Again!
        </Link>
      </div>

      {/* --- The Career Pathway Visualizer (Visible to Everyone) --- */}
      <div>
        <h1 className="text-4xl font-bold text-center mb-2">Explore Career Pathways</h1>
        <p className="text-center text-lg text-black/80 mb-10">
          Select a field and click on any milestone to learn more.
        </p>
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {careerFields.map((field) => (
            <button
              key={field}
              onClick={() => handleFieldSelect(field)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedField === field ? 'bg-green-400 text-gray-900' : 'bg-white/10 hover:bg-black/20 text-black'
              }`}
            >
              {pathwayData[field].title}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedField}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="backdrop-glass p-8 rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-green-600">{selectedPathway.title}</h2>
            <p className="text-black/80 mt-1 mb-8">{selectedPathway.description}</p>
            <div className="relative border-l-2 border-black/30 pl-6 space-y-2">
              {selectedPathway.timeline.map((item, index) => (
                <motion.div key={index} className="relative" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.2 }}>
                  <div className="absolute -left-[38px] top-1 h-6 w-6 rounded-full bg-gray-900 border-4 border-green-400 flex items-center justify-center">
                    {getStageIcon(item.stage)}
                  </div>
                  <p className="text-sm font-semibold text-green-500 uppercase">{item.stage}</p>
                  <h3 className="text-2xl font-bold mt-1">{item.title}</h3>
                  <div className="mt-4 space-y-2">
                    {item.milestones.map((milestone, msIndex) => {
                      const milestoneId = `${item.title}-${milestone.name}`;
                      const isExpanded = expandedMilestone === milestoneId;
                      return (
                        <div key={msIndex}>
                          <button onClick={() => handleMilestoneClick(item.title, milestone.name)} className="w-full bg-white/5 p-3 rounded-lg text-left transition-colors hover:bg-black/20 flex justify-between items-center">
                            <div>
                              <p className="font-semibold text-black">{milestone.name}</p>
                              <p className="text-black/70">{milestone.detail}</p>
                            </div>
                            <motion.div animate={{ rotate: isExpanded ? 90 : 0 }}>
                              <svg className="h-5 w-5 text-black/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="bg-black/20 p-4 rounded-b-lg -mt-1 overflow-hidden">
                                <p className="text-black/90">{milestone.moreInfo}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}