// src/data/pathwayData.jsx
import React from 'react';

// This file contains all the data for the interactive career pathway visualizer.
// The data is now an array of objects to be easily mapped and filtered.

export const pathwayData = [
  {
    id: 'tech',
    title: 'Technology & Engineering',
    description: 'A field for builders and problem-solvers who want to create the technology of the future.',
    timeline: [
      {
        stage: 'Foundation',
        title: 'Senior Secondary (Class 11-12)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18" />,
        milestones: [
          { name: 'Science Stream (PCM)', detail: 'Physics, Chemistry, and Mathematics are essential.', moreInfo: 'Focus on building a strong foundation in calculus, algorithms, and physics principles as these are critical for engineering entrance exams and first-year curriculum.' },
        ],
      },
      {
        stage: 'Education',
        title: 'Undergraduate Degree',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5V4M4 15h5v5H4M15 4h5v5h-5M15 15h5v5h-5z" />,
        milestones: [
          { name: 'B.Tech in CSE/IT', detail: 'A 4-year professional engineering degree.', moreInfo: 'This is the most direct path. Participate in hackathons, coding clubs, and internships to build a strong portfolio alongside your academic work.' },
          { name: 'BCA or B.Sc. in CS', detail: 'A 3-year science or computer applications degree.', moreInfo: 'A great alternative. Consider pursuing an MCA or a specialized Master\'s degree after this to be competitive for top-tier roles.' },
        ],
      },
      {
        stage: 'Entry-Level',
        title: 'First Job (0-3 Years)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2" />,
        milestones: [
          { name: 'Junior Software Developer', detail: 'Write and debug code in a team.', moreInfo: 'In this role, focus on learning the company\'s codebase, understanding team workflows (like Git and Agile), and delivering clean, efficient code.' },
          { name: 'Software Tester / QA', detail: 'Find and report bugs in software.', moreInfo: 'Develop a keen eye for detail and learn about automation testing tools like Selenium or Cypress to advance in this specialization.' },
        ],
      },
      {
        stage: 'Advanced Roles',
        title: 'Senior Positions (5+ Years)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />,
        milestones: [
          { name: 'Software Architect', detail: 'Design high-level structure of systems.', moreInfo: 'This role requires deep technical knowledge and excellent communication skills to design scalable and robust software blueprints for the entire team to follow.' },
          { name: 'Project Manager', detail: 'Lead development teams and projects.', moreInfo: 'Focus on developing leadership, communication, and planning skills. Certifications like PMP or Agile/Scrum Master can be highly beneficial.' },
        ],
      },
    ],
  },
  {
    id: 'medical',
    title: 'Healthcare & Medical',
    description: 'A noble field dedicated to diagnosing, treating, and preventing illness to improve human health.',
    timeline: [
       {
        stage: 'Foundation',
        title: 'Senior Secondary (Class 11-12)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18" />,
        milestones: [
          { name: 'Science Stream (PCB)', detail: 'Physics, Chemistry, and Biology are mandatory.', moreInfo: 'Strong command over Biology, especially human anatomy and physiology, is crucial. Consistently practice for the NEET entrance exam.' },
        ],
      },
      {
        stage: 'Education',
        title: 'Professional Degree',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5V4M4 15h5v5H4M15 4h5v5h-5M15 15h5v5h-5z" />,
        milestones: [
          { name: 'MBBS (Bachelor of Medicine, Bachelor of Surgery)', detail: 'A 5.5-year undergraduate medical degree.', moreInfo: 'Admission is highly competitive through the NEET exam. The course involves rigorous study and practical training in hospitals.' },
          { name: 'BDS (Bachelor of Dental Surgery)', detail: 'A 5-year undergraduate degree for dentistry.', moreInfo: 'Another competitive field focusing on oral health. Also requires qualifying the NEET exam.' },
        ],
      },
      {
        stage: 'Entry-Level',
        title: 'Residency / First Role (0-3 Years)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2" />,
        milestones: [
          { name: 'Junior Resident Doctor', detail: 'Work in hospitals under supervision.', moreInfo: 'This is a critical learning phase where you apply theoretical knowledge to real patients. It involves long hours and high pressure.' },
          { name: 'Medical Officer in Govt. Hospitals', detail: 'Serve in public health centers.', moreInfo: 'Many doctors start their careers in government service, which provides invaluable experience in handling a wide variety of cases.' },
        ],
      },
      {
        stage: 'Advanced Roles',
        title: 'Specialization (5+ Years)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />,
        milestones: [
          { name: 'Specialist Doctor (e.g., Cardiologist)', detail: 'Pursue MD/MS after MBBS.', moreInfo: 'After MBBS, you must clear another competitive exam (NEET-PG) to pursue a specialization, which takes another 3 years of study.' },
          { name: 'Hospital Administrator', detail: 'Manage hospital operations.', moreInfo: 'Doctors with an interest in management can pursue an MHA (Master of Hospital Administration) to move into administrative and leadership roles.' },
        ],
      },
    ],
  },
  {
    id: 'commerce',
    title: 'Commerce & Finance',
    description: 'The backbone of the economy, this field deals with business, finance, accounting, and investments.',
    timeline: [
        {
            stage: 'Foundation',
            title: 'Senior Secondary (Class 11-12)',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18" />,
            milestones: [
                { name: 'Commerce Stream', detail: 'With Accountancy, Business Studies, and Economics.', moreInfo: 'Focus on understanding core concepts of accounting and economic theory. Having Mathematics as a subject opens up more career options.' },
            ],
        },
        {
            stage: 'Education',
            title: 'Undergraduate Degree',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5V4M4 15h5v5H4M15 4h5v5h-5M15 15h5v5h-5z" />,
            milestones: [
                { name: 'B.Com (Bachelor of Commerce)', detail: 'The foundational degree for this field.', moreInfo: 'A versatile degree. You can specialize in areas like Accounting, Finance, or Taxation. Pair it with professional courses for better prospects.' },
                { name: 'BBA (Bachelor of Business Administration)', detail: 'Focuses on management and business operations.', moreInfo: 'Ideal for those aiming for management roles. It provides a strong base for an MBA program later on.' },
            ],
        },
        {
            stage: 'Entry-Level',
            title: 'First Job (0-3 Years)',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2" />,
            milestones: [
                { name: 'Accountant / Audit Assistant', detail: 'Work under a CA or in a company\'s finance department.', moreInfo: 'This role involves managing financial records, preparing tax returns, and assisting in audits. Strong attention to detail is key.' },
                { name: 'Bank PO (Probationary Officer)', detail: 'A management-level entry role in banks.', moreInfo: 'Requires clearing competitive exams like IBPS PO. It\'s a secure and respected career path with good growth.' },
            ],
        },
        {
            stage: 'Advanced Roles',
            title: 'Professional Certification (3+ Years)',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />,
            milestones: [
                { name: 'Chartered Accountant (CA)', detail: 'A prestigious and challenging finance professional.', moreInfo: 'Requires clearing a series of difficult exams from the ICAI. CAs are in high demand for auditing, taxation, and financial advisory roles.' },
                { name: 'MBA in Finance', detail: 'Opens doors to high-level corporate finance roles.', moreInfo: 'Pursuing an MBA from a top institute can lead to roles in investment banking, financial analysis, and corporate strategy.' },
            ],
        },
    ],
  },
  {
    id: 'civil-services',
    title: 'Civil Services & Govt.',
    description: 'A prestigious path for those who want to serve the nation and contribute to public policy and administration.',
    timeline: [
      {
        stage: 'Foundation',
        title: 'Senior Secondary (Class 11-12)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18" />,
        milestones: [
          { name: 'Any Stream', detail: 'Arts, Science, or Commerce are all eligible.', moreInfo: 'While any stream is fine, a background in Arts with subjects like History, Political Science, and Economics provides a strong foundation for the General Studies papers.' },
        ],
      },
      {
        stage: 'Education',
        title: 'Undergraduate Degree',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5V4M4 15h5v5H4M15 4h5v5h-5M15 15h5v5h-5z" />,
        milestones: [
          { name: 'Bachelor\'s Degree (Any Field)', detail: 'A degree from a recognized university is the only requirement.', moreInfo: 'During your degree, focus on developing strong writing skills, general awareness (read newspapers daily), and choosing an optional subject for the Mains exam.' },
        ],
      },
      {
        stage: 'Entry-Level',
        title: 'First Role (Post-Exam)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2" />,
        milestones: [
          { name: 'IAS / IPS / IFS Officer Trainee', detail: 'After clearing the UPSC Civil Services Exam.', moreInfo: 'Successful candidates undergo rigorous training at LBSNAA, Mussoorie, before being posted to their respective cadres and services.' },
          { name: 'State Civil Services (e.g., WBCS)', detail: 'Officer roles within the state government.', moreInfo: 'Similar to UPSC but at the state level. Preparation often overlaps, making it a viable alternative or parallel goal.' },
        ],
      },
      {
        stage: 'Advanced Roles',
        title: 'Senior Positions (10+ Years)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />,
        milestones: [
          { name: 'District Magistrate / Collector', detail: 'The highest administrative post in a district.', moreInfo: 'An IAS officer typically reaches this position after several years of service, holding immense responsibility for district administration.' },
          { name: 'Secretary to Government', detail: 'Key policy-making roles in state or central ministries.', moreInfo: 'Senior civil servants are instrumental in shaping the policies that govern the nation, working at the highest levels of government.' },
        ],
      },
    ],
  },
  {
    id: 'creative',
    title: 'Creative Arts & Media',
    description: 'For storytellers, artists, and communicators who want to express ideas through various media.',
    timeline: [
      {
        stage: 'Foundation',
        title: 'Senior Secondary (Class 11-12)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18" />,
        milestones: [
          { name: 'Any Stream', detail: 'Arts/Humanities is often preferred.', moreInfo: 'Focus on building a portfolio of your creative work. Participate in school magazines, art competitions, or drama clubs to hone your skills.' },
        ],
      },
      {
        stage: 'Education',
        title: 'Undergraduate Degree',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5V4M4 15h5v5H4M15 4h5v5h-5M15 15h5v5h-5z" />,
        milestones: [
          { name: 'B.A. in Fine Arts / Design', detail: 'For aspiring designers and artists.', moreInfo: 'Specializations can include graphic design, animation, or fashion. Your portfolio is often more important than your marks.' },
          { name: 'B.A. in Journalism & Mass Comm.', detail: 'For writers, journalists, and filmmakers.', moreInfo: 'This degree provides a broad understanding of media theory and practical skills in writing, editing, and production.' },
        ],
      },
      {
        stage: 'Entry-Level',
        title: 'First Job (0-3 Years)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2" />,
        milestones: [
          { name: 'Graphic Designer', detail: 'Create visual content for brands.', moreInfo: 'Start by freelancing or joining a design agency. Proficiency in tools like Adobe Photoshop, Illustrator, and Figma is essential.' },
          { name: 'Content Writer / Jr. Journalist', detail: 'Write for websites, magazines, or news outlets.', moreInfo: 'Build a strong writing portfolio. Internships are crucial for making connections and getting your first byline.' },
        ],
      },
      {
        stage: 'Advanced Roles',
        title: 'Senior Positions (5+ Years)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />,
        milestones: [
          { name: 'Art Director', detail: 'Lead creative teams and campaigns.', moreInfo: 'This role requires a blend of creative vision and leadership skills to guide the visual style of projects.' },
          { name: 'Senior Editor / Producer', detail: 'Manage content strategy and production.', moreInfo: 'In media houses or production companies, senior roles involve shaping the editorial direction and managing large-scale projects.' },
        ],
      },
    ],
  },
  {
    id: 'law',
    title: 'Law & Justice',
    description: 'A challenging and respected profession focused on upholding justice and interpreting the law.',
    timeline: [
      {
        stage: 'Foundation',
        title: 'Senior Secondary (Class 11-12)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18" />,
        milestones: [
          { name: 'Any Stream', detail: 'No specific stream is required.', moreInfo: 'Develop strong reading, writing, and logical reasoning skills. Participating in debates and Model UN can be very beneficial.' },
        ],
      },
      {
        stage: 'Education',
        title: 'Professional Degree',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5V4M4 15h5v5H4M15 4h5v5h-5M15 15h5v5h-5z" />,
        milestones: [
          { name: '5-Year Integrated LL.B.', detail: 'e.g., B.A. LL.B., B.Com LL.B. after Class 12.', moreInfo: 'Admission is through entrance exams like CLAT. This is the most common path for aspiring lawyers.' },
          { name: '3-Year LL.B.', detail: 'After completing any undergraduate degree.', moreInfo: 'An option for those who decide to pursue law after their graduation in another field.' },
        ],
      },
      {
        stage: 'Entry-Level',
        title: 'First Role (0-3 Years)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2" />,
        milestones: [
          { name: 'Junior Advocate', detail: 'Work under a senior lawyer or in a law firm.', moreInfo: 'The initial years involve a lot of research, drafting legal documents, and observing court proceedings. It is a crucial learning period.' },
          { name: 'Legal Associate in a Company', detail: 'Work in the legal department of a corporation.', moreInfo: 'This role focuses on corporate law, contracts, and ensuring the company complies with regulations.' },
        ],
      },
      {
        stage: 'Advanced Roles',
        title: 'Senior Positions (10+ Years)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />,
        milestones: [
          { name: 'Senior Advocate / Partner in a Firm', detail: 'Lead cases and manage teams.', moreInfo: 'With experience, lawyers become experts in their chosen field (e.g., criminal, corporate) and can argue significant cases or become partners in their firms.' },
          { name: 'Judge', detail: 'Appointed after clearing judiciary exams or through elevation.', moreInfo: 'A highly respected position. Requires extensive legal experience and passing rigorous judicial service examinations.' },
        ],
      },
    ],
  },
  {
    id: 'teaching',
    title: 'Teaching & Academia',
    description: 'A rewarding career for those passionate about sharing knowledge and shaping the next generation.',
    timeline: [
      {
        stage: 'Foundation',
        title: 'Senior Secondary (Class 11-12)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18" />,
        milestones: [
          { name: 'Choose Your Subject', detail: 'Focus on the subject you are passionate about teaching.', moreInfo: 'Maintain a strong academic record in the subject you wish to teach in the future. This is crucial for higher education admissions.' },
        ],
      },
      {
        stage: 'Education',
        title: 'Essential Degrees',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5V4M4 15h5v5H4M15 4h5v5h-5M15 15h5v5h-5z" />,
        milestones: [
          { name: 'Bachelor\'s Degree + B.Ed', detail: 'For school-level teaching.', moreInfo: 'A Bachelor of Education (B.Ed) is a mandatory professional degree for teaching in most schools in India.' },
          { name: 'Master\'s Degree + NET/SET', detail: 'For college/university-level teaching.', moreInfo: 'To become a professor, you must have a Master\'s degree and qualify the National Eligibility Test (NET) or State Eligibility Test (SET).' },
        ],
      },
      {
        stage: 'Entry-Level',
        title: 'First Job (0-3 Years)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2" />,
        milestones: [
          { name: 'Primary/Secondary School Teacher', detail: 'Teach specific subjects to school students.', moreInfo: 'Requires passing the Teacher Eligibility Test (TET) for government schools. Private schools have their own selection criteria.' },
          { name: 'Assistant Professor (Ad-hoc/Guest)', detail: 'Begin teaching in a college.', moreInfo: 'Many start their academic careers as guest lecturers or on an ad-hoc basis while pursuing their Ph.D.' },
        ],
      },
      {
        stage: 'Advanced Roles',
        title: 'Senior Positions (10+ Years)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />,
        milestones: [
          { name: 'School Principal', detail: 'Lead and manage an entire school.', moreInfo: 'This is a leadership role that requires significant teaching and administrative experience.' },
          { name: 'Professor / Head of Department', detail: 'Requires a Ph.D. and extensive research.', moreInfo: 'A tenured professor role in a university involves teaching, research, and guiding Ph.D. students. It is the pinnacle of an academic career.' },
        ],
      },
    ],
  },
  {
    id: 'management',
    title: 'Management & MBA',
    description: 'Lead businesses and organizations by making strategic decisions in marketing, finance, HR, and operations.',
    timeline: [
      {
        stage: 'Foundation',
        title: 'Senior Secondary (Class 11-12)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18" />,
        milestones: [
          { name: 'Any Stream', detail: 'No specific stream is required for an MBA.', moreInfo: 'While any stream is eligible, a background in Commerce or Mathematics can be helpful for the quantitative sections of entrance exams like CAT.' },
        ],
      },
      {
        stage: 'Education',
        title: 'Undergraduate Degree',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5V4M4 15h5v5H4M15 4h5v5h-5M15 15h5v5h-5z" />,
        milestones: [
          { name: 'BBA (Bachelor of Business Administration)', detail: 'Provides a direct foundation in business.', moreInfo: 'This degree covers a wide range of business topics and is an excellent preparatory course for an MBA.' },
          { name: 'Any Bachelor\'s Degree', detail: 'Engineering, Arts, Science are all common.', moreInfo: 'Diversity is valued in MBA programs. Focus on maintaining a good academic record and developing extracurricular skills during your graduation.' },
        ],
      },
      {
        stage: 'Entry-Level',
        title: 'First Job (Post-MBA)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2" />,
        milestones: [
          { name: 'Management Trainee', detail: 'A rotational role in a large corporation.', moreInfo: 'Top companies hire from MBA campuses for leadership programs where you get exposure to different business functions.' },
          { name: 'Business Analyst', detail: 'Analyze business processes and suggest improvements.', moreInfo: 'This role involves using data to solve business problems and is a common entry point for MBA graduates.' },
        ],
      },
      {
        stage: 'Advanced Roles',
        title: 'Senior Positions (8+ Years)',
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />,
        milestones: [
          { name: 'Marketing / Finance / HR Manager', detail: 'Lead a specific department.', moreInfo: 'After gaining experience, you will specialize and lead teams in functions like marketing, finance, or human resources.' },
          { name: 'CEO / Business Leader', detail: 'The highest level of corporate leadership.', moreInfo: 'The ultimate goal for many MBA graduates is to lead an entire organization, making critical strategic decisions.' },
        ],
      },
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture & Planning',
    description: 'Design buildings and spaces, blending creativity, technical skill, and a deep understanding of human needs.',
    timeline: [
        {
            stage: 'Foundation',
            title: 'Senior Secondary (Class 11-12)',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18" />,
            milestones: [
                { name: 'Science Stream (PCM)', detail: 'Physics, Chemistry, and Maths are required.', moreInfo: 'A strong aptitude for drawing and visualization is crucial. Prepare for entrance exams like NATA or JEE Main (Paper 2).' },
            ],
        },
        {
            stage: 'Education',
            title: 'Professional Degree',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5V4M4 15h5v5H4M15 4h5v5h-5M15 15h5v5h-5z" />,
            milestones: [
                { name: 'B.Arch (Bachelor of Architecture)', detail: 'A 5-year professional degree program.', moreInfo: 'This is the mandatory degree to become a licensed architect. The curriculum includes design studios, technical drawing, and history of architecture.' },
            ],
        },
        {
            stage: 'Entry-Level',
            title: 'First Job (0-3 Years)',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2" />,
            milestones: [
                { name: 'Junior Architect', detail: 'Work in an architectural firm.', moreInfo: 'Initial roles involve drafting plans using software like AutoCAD, creating 3D models, and assisting senior architects on projects.' },
                { name: 'Urban Planning Assistant', detail: 'Work with government bodies on city planning.', moreInfo: 'For those interested in large-scale design, working in urban planning departments is a great start.' },
            ],
        },
        {
            stage: 'Advanced Roles',
            title: 'Senior Positions (10+ Years)',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />,
            milestones: [
                { name: 'Principal Architect / Firm Owner', detail: 'Lead your own projects and firm.', moreInfo: 'Many architects aspire to start their own practice, giving them creative control over their projects.' },
                { name: 'Urban Planner', detail: 'Design and manage the development of cities.', moreInfo: 'A specialization that involves shaping entire cities and communities, requiring a Master\'s in Urban Planning.' },
            ],
        },
    ],
  },
  {
    id: 'journalism',
    title: 'Journalism & Mass Comm.',
    description: 'The art of storytelling, reporting news, and communicating with a mass audience through various media.',
    timeline: [
        {
            stage: 'Foundation',
            title: 'Senior Secondary (Class 11-12)',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18" />,
            milestones: [
                { name: 'Arts / Humanities Stream', detail: 'Subjects like English and Political Science are helpful.', moreInfo: 'Develop a habit of reading and writing extensively. Stay updated with current affairs by reading newspapers and watching news channels.' },
            ],
        },
        {
            stage: 'Education',
            title: 'Undergraduate Degree',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5V4M4 15h5v5H4M15 4h5v5h-5M15 15h5v5h-5z" />,
            milestones: [
                { name: 'B.A. (Journalism & Mass Communication)', detail: 'The most direct degree for this field.', moreInfo: 'This degree provides both theoretical knowledge and practical skills in reporting, editing, and media production.' },
                { name: 'B.A. in English / Literature', detail: 'A strong alternative for aspiring writers.', moreInfo: 'Many successful journalists have a background in literature, which hones their writing and analytical skills.' },
            ],
        },
        {
            stage: 'Entry-Level',
            title: 'First Job (0-3 Years)',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2" />,
            milestones: [
                { name: 'Reporter / Correspondent', detail: 'Gather information and report news stories.', moreInfo: 'This is the classic entry-level role. It often starts with covering local events and requires persistence and strong ethics.' },
                { name: 'Copy Editor / Sub-Editor', detail: 'Review and edit articles for clarity and accuracy.', moreInfo: 'This role is crucial in any media house. It requires a strong command of language and attention to detail.' },
            ],
        },
        {
            stage: 'Advanced Roles',
            title: 'Senior Positions (8+ Years)',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />,
            milestones: [
                { name: 'Editor-in-Chief', detail: 'Lead the editorial direction of a publication.', moreInfo: 'The highest editorial position, responsible for the overall content and quality of the newspaper, magazine, or website.' },
                { name: 'Broadcast Anchor / Producer', detail: 'Become the face of a news channel or lead a production.', moreInfo: 'Senior roles in television require excellent on-camera presence, in-depth knowledge, and production management skills.' },
            ],
        },
    ],
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Tourism',
    description: 'A dynamic industry focused on providing excellent service in hotels, travel, and event management.',
    timeline: [
        {
            stage: 'Foundation',
            title: 'Senior Secondary (Class 11-12)',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18" />,
            milestones: [
                { name: 'Any Stream', detail: 'No specific stream is required.', moreInfo: 'Focus on developing strong communication skills and a customer-service-oriented personality. Learning a foreign language can be a major advantage.' },
            ],
        },
        {
            stage: 'Education',
            title: 'Professional Degree',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5V4M4 15h5v5H4M15 4h5v5h-5M15 15h5v5h-5z" />,
            milestones: [
                { name: 'BHM (Bachelor of Hotel Management)', detail: 'A comprehensive degree for the hotel industry.', moreInfo: 'This course provides training in all major hotel departments: front office, food and beverage, housekeeping, and kitchen.' },
                { name: 'BBA in Tourism & Travel', detail: 'Focuses on the travel agency and tourism side.', moreInfo: 'Ideal for those interested in becoming tour operators, travel agents, or working in the tourism industry.' },
            ],
        },
        {
            stage: 'Entry-Level',
            title: 'First Job (0-3 Years)',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2" />,
            milestones: [
                { name: 'Front Office Associate', detail: 'The first point of contact for guests in a hotel.', moreInfo: 'This role requires excellent communication skills and a welcoming personality. You will handle check-ins, check-outs, and guest inquiries.' },
                { name: 'Travel Consultant', detail: 'Assist clients in planning and booking travel.', moreInfo: 'Work in a travel agency to create itineraries, book flights and hotels, and provide travel advice.' },
            ],
        },
        {
            stage: 'Advanced Roles',
            title: 'Senior Positions (8+ Years)',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />,
            milestones: [
                { name: 'General Manager (Hotel)', detail: 'Oversee the entire operation of a hotel.', moreInfo: 'The top position in a hotel, responsible for profitability, guest satisfaction, and staff management.' },
                { name: 'Event Manager', detail: 'Plan and execute large-scale events like conferences.', moreInfo: 'A specialized role that requires exceptional organizational skills to manage budgets, vendors, and logistics for major events.' },
            ],
        },
    ],
  },
];