import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// A more detailed and engaging set of questions
const questions = [
  {
    id: 1,
    text: 'When I face a complex problem, I am most likely to:',
    options: [
      'Break it down into smaller, logical steps.',
      'Brainstorm multiple creative solutions.',
      'Research how others have solved similar problems.',
      'Discuss it with a team to get different perspectives.'
    ]
  },
  {
    id: 2,
    text: 'My ideal work environment involves:',
    options: [
      'Working independently on tasks with clear metrics.',
      'Collaborating closely with a team to build something new.',
      'Interacting with and helping a variety of people.',
      'Conducting in-depth analysis and research.'
    ]
  },
  {
    id: 3,
    text: 'My strongest skills are related to:',
    options: [
      'Numbers, data, and analytical thinking.',
      'Creativity, design, and storytelling.',
      'Communication, empathy, and social interaction.',
      'Organization, management, and leadership.'
    ]
  },
  {
    id: 4,
    text: 'I am most motivated by:',
    options: [
      'The opportunity to build innovative technology.',
      'The chance to make a positive impact on society.',
      'The financial rewards and potential for high earnings.',
      'The pursuit of knowledge and understanding.'
    ]
  },
  {
    id: 5,
    text: 'I prefer to learn about:',
    options: [
      'The latest scientific and technological advancements.',
      'Historical events and cultural phenomena.',
      'Human behavior, psychology, and relationships.',
      'Business strategies and financial markets.'
    ]
  },
  {
    id: 6,
    text: 'My interests outside of academics include:',
    options: [
      'Coding, gaming, or building things.',
      'Art, music, or writing.',
      'Volunteering or mentoring others.',
      'Debate, public speaking, or law.'
    ]
  },
  {
    id: 7,
    text: 'I am comfortable with:',
    options: [
      'Working with complex equations and formulas.',
      'Reading and interpreting large amounts of text.',
      'Using software and technology to solve problems.',
      'Creating visual content or presentations.'
    ]
  }
];

// Mapping keywords to courses
const coursesDirectory = [
  { title: 'B.Tech (Engineering)', keywords: ['technology', 'analytical', 'research', 'numbers', 'coding', 'building'] },
  { title: 'B.Sc (Science)', keywords: ['research', 'scientific', 'numbers', 'analytical', 'technology'] },
  { title: 'B.A (Humanities)', keywords: ['writing', 'creative', 'communication', 'historical', 'social interaction', 'reading'] },
  { title: 'B.Com (Commerce)', keywords: ['business', 'numbers', 'finance', 'management', 'financial markets'] },
  { title: 'BBA (Business Administration)', keywords: ['business', 'management', 'leadership', 'organization', 'finance'] },
  { title: 'BCA (Computer Applications)', keywords: ['technology', 'computers', 'logical', 'coding', 'software'] },
  { title: 'BA (Psychology)', keywords: ['helping people', 'research', 'human behavior', 'social interaction', 'empathy'] },
  { title: 'B.Ed (Education)', keywords: ['helping people', 'teaching', 'communication', 'mentoring'] },
  { title: 'Law (LLB)', keywords: ['analytical', 'logical', 'debate', 'public speaking', 'research'] },
  { title: 'MBBS / BDS', keywords: ['healthcare', 'medical sciences', 'helping people', 'scientific', 'research'] },
];

export default function CourseQuiz() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const user = sessionStorage.getItem('currentUser');
    if (user) setCurrentUser(JSON.parse(user));
  }, []);

  // Modified handleAnswer for auto-next functionality
  const handleAnswer = (qId, value) => {
    // Set the answer for the current question
    setAnswers(prev => ({
      ...prev,
      [qId]: [value] // Changed to an array with a single value for single-select
    }));

    // Check if it's the last question
    if (currentQuestionIndex === questions.length - 1) {
      // Small delay to let the UI update before calculating results
      setTimeout(() => {
        getQuizResults({ ...answers, [qId]: [value] });
      }, 300);
    } else {
      // Move to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const getQuizResults = (finalAnswers) => {
    if (!currentUser) {
      alert('Please login first to take the quiz.');
      return;
    }

    setIsLoading(true);

    const allSelectedOptions = Object.values(finalAnswers).flat();
    const courseScores = coursesDirectory.map(course => {
      const score = course.keywords.filter(keyword =>
        allSelectedOptions.some(option => option.toLowerCase().includes(keyword))
      ).length;
      return { ...course, score };
    });

    courseScores.sort((a, b) => b.score - a.score);
    const topSuggestions = courseScores.slice(0, 3);

    setTimeout(() => {
      setSuggestions(topSuggestions);
      setIsLoading(false);

      const key = `dashboard_${currentUser.email}`;
      const existing = JSON.parse(localStorage.getItem(key)) || { careers: [], courses: [] };
      const updated = { ...existing, courses: [...existing.courses, { results: topSuggestions.map(s => s.title), timestamp: new Date().toISOString() }] };
      localStorage.setItem(key, JSON.stringify(updated));
    }, 800);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setSuggestions([]);
  };

  if (!currentUser) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-bold mb-4">Please Login First</h2>
        <Link to="/login" className="bg-green-400 text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-green-300 transition-all">
          Go to Login
        </Link>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-green-400">Course Recommendation Quiz</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">Answer these questions to get personalized course recommendations.</p>
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
            <p className="text-xl font-semibold">Calculating your perfect courses...</p>
          </motion.div>
        ) : suggestions.length === 0 ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-right text-sm opacity-70 mb-2">Question {currentQuestionIndex + 1} of {questions.length}</p>

            <div className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20">
              <h2 className="text-2xl font-bold mb-6 text-green-300">
                {currentQuestion.text}
              </h2>
              <div className="space-y-4">
                {currentQuestion.options.map((option) => (
                  <motion.button
                    key={option}
                    onClick={() => handleAnswer(currentQuestion.id, option)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                      (answers[currentQuestion.id] || []).includes(option)
                        ? 'border-green-400 bg-green-400/20'
                        : 'border-white/20 bg-white/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <p className="font-semibold">{option}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6">
                <button
                    onClick={resetQuiz}
                    className="bg-gray-700 text-white/80 font-bold py-2 px-6 rounded-full hover:bg-gray-600 transition-all"
                >
                    Start Over
                </button>
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
            <h2 className="text-3xl font-bold text-center mb-6 text-green-400">Recommended Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {suggestions.map(c => (
                <div key={c.title} className="bg-white/10 p-6 rounded-xl border border-white/20 text-center">
                  <h3 className="text-2xl font-semibold text-green-600">{c.title}</h3>
                  <p className="text-sm opacity-70 mt-2">Score: {c.score}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6 space-x-4">
              <Link to="/dashboard" className="bg-green-400 text-gray-900 font-bold py-2 px-8 rounded-full hover:bg-green-300 transition-all">
                Go to My Dashboard
              </Link>
              <button onClick={resetQuiz} className="bg-blue-400 text-gray-900 font-bold py-2 px-8 rounded-full hover:bg-blue-300 transition-all">
                Take Quiz Again
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}