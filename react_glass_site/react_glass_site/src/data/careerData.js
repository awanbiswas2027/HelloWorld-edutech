// This file acts as a mini-database for detailed career information.

export const careerData = {
  'software-engineer': {
    title: 'Software Engineer',
    summary: 'Software Engineers design, develop, and maintain the software that powers our world, from mobile apps to large-scale systems. It is a field that rewards logical thinking and continuous learning.',
    
    recommendedCourses: [
      { name: 'B.Tech in Computer Science / IT', level: 'Degree' },
      { name: 'B.Sc. in Computer Science', level: 'Degree' },
      { name: 'Bachelor of Computer Applications (BCA)', level: 'Degree' },
      { name: 'Online Specialization in Full-Stack Development', level: 'Certificate' },
      { name: 'Certification in Cloud Computing (AWS, Azure)', level: 'Certificate' },
    ],
    
    essentialSkills: [
      'Programming Languages (Python, Java, JavaScript)',
      'Data Structures and Algorithms',
      'Version Control (Git)',
      'Problem-Solving',
      'Team Collaboration',
    ],
    
    jobOpportunities: {
      entryLevel: [
        { role: 'Junior Developer', description: 'Writes and debugs code under the supervision of senior engineers.' },
        { role: 'Software Tester', description: 'Focuses on finding and reporting bugs and issues in software.' },
        { role: 'Trainee Engineer', description: 'A starting role focused on learning and contributing to small tasks.' },
      ],
      forEfficientPerson: [
        { role: 'Senior Software Architect', description: 'Designs the high-level structure of software systems.' },
        { role: 'DevOps Specialist', description: 'Manages the software development lifecycle, including deployment and operations.' },
        { role: 'Machine Learning Engineer', description: 'Specializes in creating artificial intelligence models and algorithms.' },
      ],
    },
  },

  'digital-marketer': {
    title: 'Digital Marketer',
    summary: 'Digital Marketers use online channels like social media, search engines, and email to promote products, services, or brands. It is a dynamic field that blends creativity with data analysis.',
    
    recommendedCourses: [
      { name: 'BBA in Marketing', level: 'Degree' },
      { name: 'B.A. in Journalism & Mass Communication', level: 'Degree' },
      { name: 'Google Digital Marketing & E-commerce Certificate', level: 'Certificate' },
      { name: 'HubSpot Content Marketing Certification', level: 'Certificate' },
    ],
    
    essentialSkills: [
      'Search Engine Optimization (SEO)',
      'Social Media Management',
      'Content Creation (Writing, Basic Design)',
      'Data Analysis',
      'Communication',
    ],
    
    jobOpportunities: {
      entryLevel: [
        { role: 'Social Media Executive', description: 'Manages and creates content for a brand’s social media profiles.' },
        { role: 'SEO Analyst', description: 'Works on improving a website’s ranking on search engines like Google.' },
        { role: 'Content Writer', description: 'Creates articles, blog posts, and other written materials for online channels.' },
      ],
      forEfficientPerson: [
        { role: 'Digital Marketing Manager', description: 'Leads the overall online marketing strategy and team.' },
        { role: 'Brand Strategist', description: 'Develops the long-term vision and market positioning of a brand.' },
        { role: 'E-commerce Specialist', description: 'Focuses on driving sales and growth for online stores.' },
      ],
    },
  },
  
  // Note: Add more careers here, making sure the key (e.g., 'chartered-accountant')
  // matches the ID generated from the quiz results.
};