import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseQuiz from './pages/CourseQuiz';
import Careers from './pages/Careers';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import AptitudeQuiz from './pages/AptitudeQuiz';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CareerDetail from './pages/CareerDetail';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/courses', label: 'Courses' },
  { to: '/careers', label: 'Careers' },
  { to: '/resources', label: 'Resources' },
];

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  // Load current user from session storage
  useEffect(() => {
    const user = sessionStorage.getItem('currentUser');
    if (user) setCurrentUser(JSON.parse(user));
  }, []);

  // Logout handler
  const handleLogout = () => {
    sessionStorage.removeItem('currentUser');
    if (currentUser) localStorage.removeItem(`dashboard_${currentUser.email}`);
    setCurrentUser(null);
    navigate('/');
  };

  // Tawk.to script injection
  useEffect(() => {
    if (!window.Tawk_API) {
      var Tawk_API = window.Tawk_API || {}, Tawk_LoadStart = new Date();
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/68c690bb312e381925a1fea0/1j53qankj"; // your Tawk.to ID
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      document.body.appendChild(s1);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 text-gray-900 relative">
      <div className="container mx-auto p-6">
        {/* Navbar */}
        <nav className="flex items-center justify-between mb-8">
  <div className="flex items-center space-x-4">  {/* Increase space-x */}
    <img
      src="src/pages/logo.png"
      alt="EduTech Logo"
      className="w-24 h-12 object-contain"   // slightly bigger, consistent size
    />
    <span className="text-3xl font-bold whitespace-nowrap">EduTech</span> {/* Prevent wrapping */}
  </div>

          <div className="flex items-center space-x-4">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  "px-3 py-2 rounded-md text-sm font-medium " +
                  (isActive ? 'bg-black/20' : 'hover:bg-black/5')
                }
                end
              >
                {l.label}
              </NavLink>
            ))}

            <div className="pl-5 border-l border-green-400">
              {currentUser ? (
                <div className="flex items-center space-x-4">
                  <NavLink to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-black/200">Dashboard</NavLink>
                  <span className="text-sm font-medium">Hi, {currentUser.name}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500/50 px-3 py-2 rounded-md text-sm font-medium hover:bg-red-500/80 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <NavLink to="/login" className="bg-white/20 px-3 py-2 rounded-md text-sm font-medium hover:bg-white/30">
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="backdrop-glass p-6 rounded-3xl shadow-xl"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/quiz" element={<CourseQuiz />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quiz" element={<AptitudeQuiz />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/careers/:careerId" element={<CareerDetail />} />
          </Routes>
        </motion.div>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm opacity-90">
          © {new Date().getFullYear()} EduTech — Built with ❤️ | 
          <NavLink to="/contact" className="ml-2 underline hover:text-blue-600">Contact Us</NavLink>
        </footer>
      </div>
    </div>
  );
}
