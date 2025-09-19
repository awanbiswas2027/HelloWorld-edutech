import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pathwayData } from './pathwayData.jsx';
import { FaBookmark, FaSpinner } from 'react-icons/fa';

// Reusable component for a career card
const CareerCard = ({ career, isSaved, toggleSavePath }) => (
  <motion.div
    key={career.id}
    className="bg-white/10 p-6 rounded-xl border border-white/20 flex flex-col relative"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <h3 className="text-2xl font-bold text-green-300">{career.title}</h3>
    <p className="text-white/80 mt-2 flex-grow">{career.description}</p>
    <div className="mt-4 flex items-center justify-between">
      <Link to={`/careers/${career.id}`} className="font-semibold text-blue-300 hover:underline">
        Explore Path
      </Link>
      <button
        onClick={() => toggleSavePath(career.id)}
        className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors ${isSaved ? 'bg-green-500 text-white' : 'bg-white/20 hover:bg-white/30'}`}
      >
        {isSaved ? 'Saved' : 'Save'}
      </button>
    </div>
  </motion.div>
);

export default function PersonalizedPath({ currentUser }) {
  const [quizResults, setQuizResults] = useState([]);
  const [savedPaths, setSavedPaths] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      if (currentUser) {
        // Fetch quiz results
        const resultsKey = `dashboard_${currentUser.email}`;
        const storedResults = localStorage.getItem(resultsKey);
        if (storedResults) {
          try {
            setQuizResults(JSON.parse(storedResults));
          } catch (error) {
            console.error("Failed to parse quiz results from localStorage", error);
            setQuizResults([]);
          }
        }

        // Fetch saved paths
        const savedPathsKey = `savedpaths_${currentUser.email}`;
        const storedSavedPaths = localStorage.getItem(savedPathsKey);
        if (storedSavedPaths) {
          try {
            setSavedPaths(JSON.parse(storedSavedPaths));
          } catch (error) {
            console.error("Failed to parse saved paths from localStorage", error);
            setSavedPaths([]);
          }
        }
      }
      setLoading(false);
    };

    fetchData();
  }, [currentUser]);

  const toggleSavePath = (careerId) => {
    if (!currentUser) {
      console.error("No current user found. Cannot save paths.");
      return;
    }

    let updatedSavedPaths;
    if (savedPaths.includes(careerId)) {
      updatedSavedPaths = savedPaths.filter(id => id !== careerId);
    } else {
      updatedSavedPaths = [...savedPaths, careerId];
    }
    setSavedPaths(updatedSavedPaths);
    const savedPathsKey = `savedpaths_${currentUser.email}`;
    localStorage.setItem(savedPathsKey, JSON.stringify(updatedSavedPaths));
  };

  // Filter saved paths from pathwayData
  const filteredSavedPaths = pathwayData.filter(path => savedPaths.includes(path.id));

  // --- Render logic ---

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48 text-green-300">
        <FaSpinner className="animate-spin text-4xl mr-4" />
        <span className="text-xl">Loading your career paths...</span>
      </div>
    );
  }

  if (quizResults.length === 0 && filteredSavedPaths.length === 0) {
    return (
      <div className="backdrop-glass p-8 rounded-xl text-center mb-12">
        <h2 className="text-3xl font-bold text-green-300">Discover Your Personalized Path</h2>
        <p className="mt-2 text-lg text-white/80 max-w-2xl mx-auto">
          You haven't taken the Discovery Quiz or saved any paths yet. Take the quiz to get started!
        </p>
        <div className="mt-6">
          <Link
            to="/quiz"
            className="bg-green-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-green-300 transition-all duration-300 inline-block"
          >
            Take the Quiz
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-12">
      {/* Recommended Paths Section */}
      {quizResults.length > 0 && (
        <>
          <h2 className="text-3xl font-bold text-center mb-6">Your Recommended Career Paths</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizResults.map(career => (
              <CareerCard
                key={career.id}
                career={career}
                isSaved={savedPaths.includes(career.id)}
                toggleSavePath={toggleSavePath}
              />
            ))}
          </div>
        </>
      )}

      {/* Saved Paths Section */}
      {filteredSavedPaths.length > 0 && (
        <>
          <h2 className={`text-3xl font-bold text-center mt-12 mb-6 ${quizResults.length > 0 ? 'border-t pt-8 border-gray-700' : ''}`}>
            <FaBookmark className="inline-block mr-2 text-green-300" />
            Your Saved Career Paths
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSavedPaths.map(career => (
              <CareerCard
                key={career.id}
                career={career}
                isSaved={true}
                toggleSavePath={toggleSavePath}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}