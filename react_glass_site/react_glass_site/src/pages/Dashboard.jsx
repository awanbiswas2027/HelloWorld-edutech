import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profilePlaceholder from './assets/profile-placeholder.png'; // Make sure you have a default image in a folder named 'assets'

export default function Dashboard() {
  const [currentUser, setCurrentUser] = useState(null);
  const [savedCareers, setSavedCareers] = useState([]);
  const [savedCourses, setSavedCourses] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState(null); // New state for profile photo

  useEffect(() => {
    const user = sessionStorage.getItem("currentUser");
    if (user) {
      const parsedUser = JSON.parse(user);
      setCurrentUser(parsedUser);

      const key = `dashboard_${parsedUser.email}`;
      const data = JSON.parse(localStorage.getItem(key)) || { careers: [], courses: [] };
      setSavedCareers(data.careers || []);
      setSavedCourses(data.courses || []);

      // Load profile photo from local storage if it exists
      const savedPhoto = localStorage.getItem(`profilePhoto_${parsedUser.email}`);
      if (savedPhoto) {
        setProfilePhoto(savedPhoto);
      }
    }
  }, []);

  // Handler for when a new file is selected
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
        localStorage.setItem(`profilePhoto_${currentUser.email}`, reader.result); // Save the photo to local storage
      };
      reader.readAsDataURL(file);
    }
  };

  if (!currentUser) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">Loading...</h2>
        <p className="mt-2">
          Please{" "}
          <Link to="/login" className="text-green-300 underline">
            log in
          </Link>{" "}
          to see your dashboard.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      {/* My Profile Section */}
      <div className="bg-blue-50 p-6 rounded-xl border border-black/20">
        <h2 className="text-3xl font-bold text-green-600 border-b border-black/20 pb-2 mb-4">My Profile</h2>
        
        {/* Profile Info and Photo Container */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Profile Details Section */}
          <div className="mt-4 space-y-3 text-lg w-full md:w-auto">
            <p><strong>Name:</strong> {currentUser.name}</p>
            <p><strong>Email:</strong> {currentUser.email}</p>
            <p><strong>Age:</strong> {currentUser.age}</p>
            <p><strong>Gender:</strong> {currentUser.gender}</p>
            <p><strong>Status:</strong> {currentUser.status}</p>

            {/* New conditional fields based on user status */}
            {currentUser.status === 'Student' && (
              <>
                {currentUser.educationLevel && (
                  <p><strong>Education Level:</strong> {currentUser.educationLevel}</p>
                )}
                {currentUser.schoolingLevel && (
                  <p><strong>Schooling Level:</strong> {currentUser.schoolingLevel}</p>
                )}
                {currentUser.degreeLevel && (
                  <p><strong>Degree Level:</strong> {currentUser.degreeLevel}</p>
                )}
                {currentUser.specificDegree && (
                  <p><strong>Specific Degree/Course:</strong> {currentUser.specificDegree}</p>
                )}
              </>
            )}

            {currentUser.status === 'Job Professional' && (
              <>
                {currentUser.jobProfile && (
                  <p><strong>Job Profile:</strong> {currentUser.jobProfile}</p>
                )}
              </>
            )}
          </div>

          {/* Profile Photo Section - Added hover effects */}
          <div className="
            mb-10 relative w-32 h-32 rounded-full overflow-hidden border-4 border-black/50 
            mt-4 md:mt-0 md:ml-10
            transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-green-400
          ">
            <img 
              src={profilePhoto || profilePlaceholder} 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
            <input 
              type="file" 
              onChange={handlePhotoChange} 
              className="absolute inset-0 opacity-0 cursor-pointer" 
              accept="image/*"
            />
          </div>
        </div>
      </div>

      {/* Saved Careers & Courses */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Saved Careers */}
        <div>
          <h2 className="text-2xl font-bold mb-4">My Saved Career Paths</h2>
          {savedCareers.length > 0 ? (
            <div className="space-y-4">
              {savedCareers.map((career, idx) => (
                <div key={idx} className="bg-white/10 p-5 rounded-lg border border-transparent hover:border-white/20 transition-all">
                  <p className="text-sm text-black/70 mb-2">Saved: {new Date(career.timestamp).toLocaleString()}</p>
                  {career.results.map((c, index) => (
                    <div key={index} className="mb-3">
                      <h3 className="text-xl font-semibold text-green-700">{c.title}</h3>
                      <p className="text-black/80">{c.description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center bg-white/10 p-6 rounded-lg">
              <p className="text-xl">No career results yet!</p>
              <Link
                to="/quiz"
                className="mt-4 bg-green-400 text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-green-300 transition-all inline-block"
              >
                Take the Career Quiz
              </Link>
            </div>
          )}
        </div>

        {/* Saved Courses */}
        <div>
          <h2 className="text-2xl font-bold mb-4">My Saved Courses</h2>
          {savedCourses.length > 0 ? (
            <div className="space-y-4">
              {savedCourses.map((courseSet, idx) => (
                <div key={idx} className="bg-white/10 p-5 rounded-lg border border-transparent hover:border-white/20 transition-all">
                  <p className="text-sm text-black/70 mb-2">Saved: {new Date(courseSet.timestamp).toLocaleString()}</p>
                  <ul className="list-disc list-inside">
                    {courseSet.results.map((courseTitle, index) => (
                      <li key={index} className="text-green-700 font-semibold text-lg">{courseTitle}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center bg-white/10 p-6 rounded-lg">
              <p className="text-xl">No course results yet!</p>
              <Link
                to="/courses/quiz"
                className="mt-4 bg-green-400 text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-green-300 transition-all inline-block"
              >
                Take the Course Quiz
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}