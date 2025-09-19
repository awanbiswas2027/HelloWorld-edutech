import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCareerSuggestion } from '../utils/careerMatcher';
import { Link } from 'react-router-dom';

// --- Data for the new 12 Quiz Questions ---
const quizQuestions = [
  // Section 1: Academic Interests
  { id: 'q1', question: 'Which school subject did you enjoy the most?', options: [ { label: 'Mathematics or Statistics', value: 'subject_maths' }, { label: 'Physics or Chemistry', value: 'subject_science' }, { label: 'History or Political Science', value: 'subject_social' }, { label: 'Art, Music, or Literature', value: 'subject_art' }, { label: 'Computer Science', value: 'subject_compsci' }, { label: 'Business or Economics', value: 'subject_business' } ] },
  { id: 'q2', question: 'When you study, you prefer...', options: [ { label: 'Memorizing facts and figures', value: 'skill_memory' }, { label: 'Solving logical problems step-by-step', value: 'problem_logical' }, { label: 'Understanding abstract theories', value: 'skill_abstract' }, { label: 'Doing practical, hands-on experiments', value: 'work_practical' } ] },
  
  // Section 2: Problem-Solving Style
  { id: 'q3', question: 'You are faced with a complex problem. What is your first instinct?', options: [ { label: 'Break it down into smaller, logical steps', value: 'problem_logical' }, { label: 'Brainstorm creative, out-of-the-box solutions', value: 'problem_creative' }, { label: 'Consult with others to get their perspective', value: 'skill_collaborative' }, { label: 'Analyze data and facts to find a solution', value: 'skill_analytical' } ] },
  { id: 'q4', question: 'In a group project, what role do you naturally take?', options: [ { label: 'The planner and organizer', value: 'work_organized' }, { label: 'The idea generator', value: 'work_innovative' }, { label: 'The one who ensures everyone gets along', value: 'work_people' }, { label: 'The person who focuses on completing the specific tasks', value: 'work_taskoriented' } ] },

  // Section 3: Work Environment & Preferences
  { id: 'q5', question: 'What kind of work environment do you prefer?', options: [ { label: 'A fast-paced, dynamic environment', value: 'work_dynamic' }, { label: 'A stable, predictable environment', value: 'work_stable' }, { label: 'A collaborative, team-based setting', value: 'work_collaborative' }, { label: 'An independent environment where you work alone', value: 'work_independent' } ] },
  { id: 'q6', question: 'Which statement best describes your ideal workday?', options: [ { label: 'It involves continuous learning and new challenges.', value: 'skill_learner' }, { label: 'It has clear goals and a structured routine.', value: 'skill_structured' }, { label: 'It allows for creativity and self-expression.', value: 'skill_creative' }, { label: 'It focuses on helping or serving others.', value: 'work_people' } ] },
  { id: 'q7', question: 'Which of these tasks would you find most fulfilling?', options: [ { label: 'Building something from scratch, like a website or a machine.', value: 'work_technical' }, { label: 'Mentoring or teaching someone a new skill.', value: 'work_people' }, { label: 'Analyzing a large dataset to find patterns.', value: 'skill_analytical' }, { label: 'Writing a compelling story or report.', value: 'skill_writing' } ] },

  // Section 4: Personal Values & Goals
  { id: 'q8', question: 'What do you value most in a job?', options: [ { label: 'High salary and financial security', value: 'value_money' }, { label: 'Making a positive impact on society', value: 'value_impact' }, { label: 'Personal growth and skill development', value: 'value_growth' }, { label: 'Work-life balance and flexibility', value: 'value_balance' } ] },
  { id: 'q9', question: 'What kind of legacy do you want to leave behind?', options: [ { label: 'To be known for a great innovation or discovery', value: 'value_innovation' }, { label: 'To have helped and inspired many people', value: 'value_impact' }, { label: 'To have created something beautiful or influential', value: 'value_creative' }, { label: 'To have built a successful and lasting organization', value: 'value_leadership' } ] },

  // Section 5: Skills & Strengths
  { id: 'q10', question: 'How do you prefer to communicate your ideas?', options: [ { label: 'Through clear, logical presentations', value: 'skill_communication' }, { label: 'By writing detailed documents or reports', value: 'skill_writing' }, { label: 'In a one-on-one conversation', value: 'skill_people' }, { label: 'By showing a working prototype or demo', value: 'skill_technical' } ] },
  { id: 'q11', question: 'Which of these activities do you enjoy most?', options: [ { label: 'Learning a new software program', value: 'skill_technical' }, { label: 'Reading about historical events', value: 'subject_social' }, { label: 'Working on a new marketing campaign', value: 'subject_business' }, { label: 'Drawing or painting', value: 'subject_art' } ] },
  { id: 'q12', question: 'You are asked to lead a project. Your first thought is:', options: [ { label: '“I am excited to guide the team to success!”', value: 'value_leadership' }, { label: '“I need to make a detailed plan first.”', value: 'work_structured' }, { label: '“I hope I can meet everyone’s expectations.”', value: 'value_balance' }, { label: '“This is a great chance to solve a new problem.”', value: 'problem_logical' } ] },
];

export default function AptitudeQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [suggestions, setSuggestions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = sessionStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
    
    // Auto-advance to next question if it exists
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const getQuizResults = () => {
    setIsLoading(true);
    setTimeout(() => {
      const results = getCareerSuggestion(answers);
      setSuggestions(results);
      setIsLoading(false);

      // --- NEW: Save quiz results to dashboard
      const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      if (currentUser) {
        const dashboardKey = `dashboard_${currentUser.email}`;
        const existingData = JSON.parse(localStorage.getItem(dashboardKey)) || { careers: [], courses: [] };
        const newCareerResult = {
          timestamp: new Date().toISOString(),
          results: results,
        };
        existingData.careers.push(newCareerResult);
        localStorage.setItem(dashboardKey, JSON.stringify(existingData));
      }
      // --- END OF NEW CODE ---
    }, 1500); // Simulate a network delay
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setSuggestions(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-green-400">Career Aptitude Quiz</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">Answer these 12 questions to get personalized career recommendations.</p>
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mb-4 mx-auto"></div>
            <p className="text-xl font-semibold">Calculating your perfect path...</p>
          </motion.div>
        ) : suggestions === null ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            {/* Question Counter */}
            <p className="text-right text-sm opacity-70 mb-2">Question {currentQuestion + 1} of {quizQuestions.length}</p>

            {/* Current Question Block */}
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20">
              <h2 className="text-2xl font-bold mb-6 text-green-300">
                {quizQuestions[currentQuestion].question}
              </h2>
              <div className="space-y-4">
                {quizQuestions[currentQuestion].options.map((option) => (
                  <motion.button
                    key={option.value}
                    onClick={() => handleAnswer(quizQuestions[currentQuestion].id, option.value)}
                    className="w-full text-left p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105"
                    style={{
                      borderColor: answers[quizQuestions[currentQuestion].id] === option.value ? 'rgba(52, 211, 153, 0.8)' : 'rgba(255,255,255,0.2)',
                      background: answers[quizQuestions[currentQuestion].id] === option.value ? 'rgba(52, 211, 153, 0.2)' : 'rgba(255,255,255,0.05)'
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <p className="font-semibold">{option.label}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                disabled={currentQuestion === 0}
                className="bg-gray-700 text-white/80 font-bold py-2 px-6 rounded-full hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Previous
              </button>
              {currentQuestion < quizQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  disabled={!answers[quizQuestions[currentQuestion].id]}
                  className="bg-blue-400 text-gray-900 font-bold py-2 px-8 rounded-full hover:bg-blue-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={getQuizResults}
                  disabled={!answers[quizQuestions[currentQuestion].id] || isLoading}
                  className="bg-green-400 text-gray-900 font-bold py-2 px-8 rounded-full hover:bg-green-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Get Results
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-6 text-green-400">Your Top Career Matches</h2>
            <div className="space-y-6">
              {suggestions.map((career) => (
                <Link to={`/careers/${career.id}`} key={career.id} className="bg-white/10 p-6 rounded-xl border border-transparent hover:border-white/20 flex flex-col hover:bg-white/20 transition-all">
                  <h3 className="text-2xl font-bold text-green-500">{career.title}</h3>
                  <p className="text-black/80 mt-2 flex-grow">{career.description}</p>
                  <div className="mt-4">
                    <p className="font-semibold">Suggested Degrees:</p>
                    <ul className="list-disc list-inside text-black/90">
                      {career.degrees.map(degree => <li key={degree}>{degree}</li>)}
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8 space-x-4">
               {currentUser && (
                 <Link to="/dashboard" className="bg-green-400 text-gray-900 font-bold py-2 px-8 rounded-full hover:bg-green-300 transition-all">
                   View on My Dashboard
                 </Link>
               )}
               <button onClick={resetQuiz} className="bg-blue-400 text-gray-900 font-bold py-2 px-8 rounded-full hover:bg-blue-300 transition-all">
                 Take the Quiz Again
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}