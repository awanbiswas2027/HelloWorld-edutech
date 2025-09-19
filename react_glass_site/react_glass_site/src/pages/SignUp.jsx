import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Expanded Options for our new dropdowns ---
const statusOptions = ['Student', 'Job Professional'];
const educationLevels = ['Schooling', 'Degree'];
const schoolingLevels = ['Class 10 or below', 'Class 11', 'Class 12'];
const degreeLevels = ['Undergraduate', 'Postgraduate', 'Diploma'];

// --- NEW Detailed Degree Options ---
const undergraduateDegrees = ['B.Tech in CSE/IT', 'B.Sc. in Physics', 'B.Sc. in Chemistry', 'B.A. in English', 'B.A. in History', 'B.Com (General)', 'BBA', 'BCA'];
const postgraduateDegrees = ['M.Tech', 'M.Sc.', 'M.A.', 'M.Com', 'MBA', 'MCA'];
const diplomaCourses = ['Diploma in Engineering', 'Diploma in Hotel Management', 'Diploma in Digital Marketing'];

// --- NEW Expanded Job Profiles ---
const jobProfiles = ['Software Developer', 'Teacher / Professor', 'Banker', 'Marketing Professional', 'Sales Executive', 'Human Resources', 'Operations Manager', 'Graphic Designer', 'Accountant', 'Civil Servant', 'Doctor', 'Driver', 'Other'];


export default function Login() {
  const [isLoginView, setIsLoginView] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', age: '', gender: 'Prefer not to say',
    status: '', educationLevel: '', schoolingLevel: '', degreeLevel: '', 
    // New field for the specific degree/diploma
    specificDegree: '', 
    jobProfile: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // When a high-level dropdown changes, reset the ones below it
    setFormData(prev => {
      const updatedData = { ...prev, [name]: value };
      if (name === 'status') {
        updatedData.educationLevel = '';
        updatedData.schoolingLevel = '';
        updatedData.degreeLevel = '';
        updatedData.specificDegree = '';
        updatedData.jobProfile = '';
      }
      if (name === 'educationLevel') {
        updatedData.schoolingLevel = '';
        updatedData.degreeLevel = '';
        updatedData.specificDegree = '';
      }
      if (name === 'degreeLevel') {
        updatedData.specificDegree = '';
      }
      return updatedData;
    });
  };

  const getFullStatus = () => {
    const { status, educationLevel, schoolingLevel, degreeLevel, specificDegree, jobProfile } = formData;
    if (status === 'Student') {
      if (educationLevel === 'Schooling') return `Student (Schooling - ${schoolingLevel})`;
      if (educationLevel === 'Degree') return `Student (Degree - ${degreeLevel}: ${specificDegree})`;
      return 'Student';
    }
    if (status === 'Job Professional') return `Job Professional (${jobProfile})`;
    return 'Not Specified';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!isLoginView) { // --- SIGN UP LOGIC ---
      if (!formData.name || !formData.email || !formData.password || !formData.age || !formData.status) {
        setError('Please fill out all required fields.');
        return;
      }
      if (localStorage.getItem(formData.email)) {
        setError('An account with this email already exists. Please log in.');
        return;
      }
      
      const fullStatus = getFullStatus();
      const userToSave = { ...formData, status: fullStatus };
      
      localStorage.setItem(formData.email, JSON.stringify(userToSave));
      sessionStorage.setItem('currentUser', JSON.stringify(userToSave));
      navigate('/dashboard');
    } else { // --- LOGIN LOGIC ---
      if (!formData.email || !formData.password) {
        setError('Please enter both email and password.');
        return;
      }
      const savedUser = localStorage.getItem(formData.email);
      if (savedUser) {
        const user = JSON.parse(savedUser);
        if (user.password === formData.password) {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          navigate('/dashboard');
        } else { setError('Incorrect password. Please try again.'); }
      } else { setError('No account found with this email. Please sign up.'); }
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-6">{isLoginView ? 'Welcome Back!' : 'Create Your Account'}</h1>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLoginView && (
            <>
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-white/10 rounded-lg placeholder-white/50" />
              <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="w-full p-3 bg-white/10 rounded-lg placeholder-white/50" />
              <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-3 bg-white/10 rounded-lg"><option value="Prefer not to say">Gender</option><option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option></select>
              <select name="status" value={formData.status} onChange={handleChange} className="w-full p-3 bg-white/10 rounded-lg"><option value="">Are you a Student or a Professional?</option>{statusOptions.map(o => <option key={o} value={o}>{o}</option>)}</select>

              {/* --- Conditional Fields for STUDENTS --- */}
              {formData.status === 'Student' && (
                <select name="educationLevel" value={formData.educationLevel} onChange={handleChange} className="w-full p-3 bg-white/10 rounded-lg"><option value="">Select Education Level</option>{educationLevels.map(o => <option key={o} value={o}>{o}</option>)}</select>
              )}
              {formData.educationLevel === 'Schooling' && (
                <select name="schoolingLevel" value={formData.schoolingLevel} onChange={handleChange} className="w-full p-3 bg-white/10 rounded-lg"><option value="">Select Schooling Level</option>{schoolingLevels.map(o => <option key={o} value={o}>{o}</option>)}</select>
              )}
              {formData.educationLevel === 'Degree' && (
                 <select name="degreeLevel" value={formData.degreeLevel} onChange={handleChange} className="w-full p-3 bg-white/10 rounded-lg"><option value="">Select Degree Level</option>{degreeLevels.map(o => <option key={o} value={o}>{o}</option>)}</select>
              )}
              
              {/* --- NEW Dynamic Degree Dropdowns --- */}
              {formData.degreeLevel === 'Undergraduate' && (
                 <select name="specificDegree" value={formData.specificDegree} onChange={handleChange} className="w-full p-3 bg-white/10 rounded-lg"><option value="">Select Your Degree</option>{undergraduateDegrees.map(o => <option key={o} value={o}>{o}</option>)}</select>
              )}
              {formData.degreeLevel === 'Postgraduate' && (
                 <select name="specificDegree" value={formData.specificDegree} onChange={handleChange} className="w-full p-3 bg-white/10 rounded-lg"><option value="">Select Your Degree</option>{postgraduateDegrees.map(o => <option key={o} value={o}>{o}</option>)}</select>
              )}
               {formData.degreeLevel === 'Diploma' && (
                 <select name="specificDegree" value={formData.specificDegree} onChange={handleChange} className="w-full p-3 bg-white/10 rounded-lg"><option value="">Select Your Diploma Course</option>{diplomaCourses.map(o => <option key={o} value={o}>{o}</option>)}</select>
              )}

              {/* --- Conditional Fields for JOB PROFESSIONALS --- */}
              {formData.status === 'Job Professional' && (
                 <select name="jobProfile" value={formData.jobProfile} onChange={handleChange} className="w-full p-3 bg-white/10 rounded-lg"><option value="">Select Job Profile</option>{jobProfiles.map(o => <option key={o} value={o}>{o}</option>)}</select>
              )}
            </>
          )}

          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-3 bg-white/10 rounded-lg placeholder-white/50" />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-3 bg-white/10 rounded-lg placeholder-white/50" />
          
          {error && <p className="text-red-300 text-center">{error}</p>}
          <button type="submit" className="w-full bg-green-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-green-300 transition-all">{isLoginView ? 'Login' : 'Sign Up'}</button>
        </form>
        <p className="text-center mt-6">
          {isLoginView ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => { setIsLoginView(!isLoginView); setError(''); }} className="font-bold text-green-300 hover:underline">{isLoginView ? 'Sign Up' : 'Login'}</button>
        </p>
      </div>
    </div>
  );
}