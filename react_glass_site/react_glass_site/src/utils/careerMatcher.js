// A vastly expanded database of career profiles with multi-faceted tags.
const careerProfiles = [
  {
    title: 'Software Engineer / IT Professional',
    description: 'Design, develop, and maintain the software and systems that power our digital world.',
    tags: ['subject_compsci', 'problem_logical', 'env_office', 'value_learning', 'work_independent', 'goal_mastery'],
    degrees: ['B.Tech in CSE/IT', 'BCA', 'B.Sc. in Computer Science'],
    id: 'software-engineer',
  },
  {
    title: 'Data Scientist / Analyst',
    description: 'Analyze complex data to find insights and help organizations make better decisions.',
    tags: ['subject_maths', 'problem_data', 'env_office', 'value_learning', 'work_independent', 'goal_mastery'],
    degrees: ['B.Sc. in Statistics', 'B.Sc. in Economics', 'B.Tech in CS'],
    id: 'data-scientist',
  },
  {
    title: 'Graphic Designer / Animator',
    description: 'Create visual concepts, from brand logos to motion graphics, to captivate and inform audiences.',
    tags: ['subject_art', 'problem_creative', 'env_flexible', 'value_autonomy', 'work_independent', 'goal_creativity'],
    degrees: ['Bachelor of Design (B.Des)', 'B.A. in Fine Arts', 'Diploma in Animation'],
    id: 'graphic-designer',
  },
  {
    title: 'Civil Servant (WBCS, IAS)',
    description: 'Work in government to implement policies, manage public services, and drive social change.',
    tags: ['subject_social', 'problem_people', 'env_structured', 'value_impact', 'work_team', 'goal_stability'],
    degrees: ['Any Graduate Degree (B.A., B.Sc., B.Com) + competitive exams'],
    id: 'civil-servant',
  },
  {
    title: 'Teacher / Professor',
    description: 'Educate and inspire the next generation in a subject you are passionate about.',
    tags: ['subject_any', 'problem_people', 'env_structured', 'value_impact', 'work_team', 'goal_stability'],
    degrees: ['B.A./B.Sc. + B.Ed', 'M.A./M.Sc. for higher levels'],
    id: 'teacher',
  },
  {
    title: 'Marketing & Brand Manager',
    description: 'Promote products or services through creative campaigns, blending strategy and psychology.',
    tags: ['subject_business', 'problem_creative', 'env_dynamic', 'value_impact', 'work_team', 'goal_creativity'],
    degrees: ['BBA (Marketing)', 'B.A. in Journalism', 'B.Com'],
    id: 'marketing-manager',
  },
  {
    title: 'Banker (PO, Clerk)',
    description: 'Manage financial transactions, advise clients, and ensure the smooth functioning of a bank.',
    tags: ['subject_maths', 'problem_data', 'env_structured', 'value_security', 'work_team', 'goal_stability'],
    degrees: ['B.Com', 'B.A. in Economics', 'Any Graduate Degree + IBPS exams'],
    id: 'banker',
  },
  {
    title: 'Journalist / Content Creator',
    description: 'Research, write, and present stories and information across various media platforms.',
    tags: ['subject_art', 'problem_creative', 'env_dynamic', 'value_autonomy', 'work_independent', 'goal_creativity'],
    degrees: ['B.A. in Journalism & Mass Comm.', 'B.A. in English/Bengali'],
    id: 'journalist',
  },
  {
    title: 'Lawyer / Legal Advisor',
    description: 'Advise and represent clients in legal matters, upholding justice and interpreting the law.',
    tags: ['subject_social', 'problem_logical', 'env_structured', 'value_security', 'work_independent', 'goal_mastery'],
    degrees: ['LL.B (Bachelor of Laws) after 12th or after graduation'],
    id: 'lawyer'
  },
  {
    title: 'Architect',
    description: 'Plan and design buildings and other structures, combining art, science, and engineering.',
    tags: ['subject_art', 'problem_creative', 'env_flexible', 'value_autonomy', 'work_team', 'goal_creativity'],
    degrees: ['Bachelor of Architecture (B.Arch)'],
    id: 'architect'
  },
  {
    title: 'Agricultural Scientist',
    description: 'Research ways to improve the efficiency and sustainability of farms and food production.',
    tags: ['subject_science', 'problem_data', 'env_field', 'value_impact', 'work_independent', 'goal_stability'],
    degrees: ['B.Sc. in Agriculture'],
    id: 'agricultural-scientist'
  },
  {
    title: 'Psychologist / Counselor',
    description: 'Help people cope with mental health issues and life challenges through therapy and analysis.',
    tags: ['subject_social', 'problem_people', 'env_calm', 'value_impact', 'work_independent', 'goal_mastery'],
    degrees: ['B.A./B.Sc. in Psychology', 'M.A./M.Sc. in Psychology'],
    id: 'psychologist'
  }
];

// The updated "AI" function that scores based on the new quiz answers
export const getCareerSuggestion = (formData) => {
  const scores = {};
  careerProfiles.forEach(career => { scores[career.title] = 0; });

  // Create a combined array of all the user's choices from the form
  const userTags = Object.values(formData);

  // Award points based on matching tags
  userTags.forEach(tag => {
    // Some questions might not be answered if the quiz is in progress, so we check
    if(tag) {
      careerProfiles.forEach(career => {
        if (career.tags.includes(tag)) {
          // Give more weight to preferred subjects and core values
          if (tag.startsWith('subject_') || tag.startsWith('value_')) {
            scores[career.title] += 2;
          } else {
            scores[career.title] += 1;
          }
        }
      });
    }
  });
  
  // A special tag 'subject_any' for careers like teaching that fit any subject
  if (formData.q1 && formData.q1.startsWith('subject_')) {
    careerProfiles.forEach(career => {
      if (career.tags.includes('subject_any')) {
        scores[career.title] += 1;
      }
    });
  }
  
  // Sort careers by score in descending order
  const sortedCareers = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);

  // Return the top 3 career profiles
  const top3 = sortedCareers.slice(0, 3);
  return careerProfiles.filter(career => top3.includes(career.title));
};