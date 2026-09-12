export const portfolioData = {
  candidate: {
    name: 'Jaydeep Jogdand',
    role: 'Software Engineer',
    specialization: 'Core Java & Spring Boot Developer',
    headline: 'Software Engineer specializing in Java, Spring Boot & React',
    email: 'jaydeepjogdand@gmail.com',
    phone: '8459697079',
    formattedPhone: '+91 8459697079',
    linkedin: 'https://www.linkedin.com/in/jaydeep-jogdand',
    github: 'https://github.com/Geeker02',
    leetcode: 'https://leetcode.com/u/Geeker02',
    location: 'Pune, Maharashtra, India',
    summary:
      'Software Engineer specializing in Core Java, Spring Boot, and RESTful microservices. Passionate about writing clean, testable code adhering to SOLID principles and OOP design patterns, with experience developing enterprise engineering automation tools and responsive React applications.'
  },

  metrics: [
    { label: 'DSA Problems Solved', value: '400+', icon: 'code' },
    { label: 'Experience', value: 'Sep 2024 – Present', icon: 'briefcase' },
    { label: 'B.E. Academic CGPA', value: '9.04', icon: 'award' },
    { label: 'HackerRank Rating', value: '5-Star Gold', icon: 'star' }
  ],

  skillCategories: [
    {
      category: 'Languages',
      description: 'Core programming languages',
      skills: [
        { name: 'Core Java', level: 'Advanced', highlight: true },
        { name: 'C#', level: 'Proficient', highlight: true },
        { name: 'C', level: 'Intermediate' },
        { name: 'C++', level: 'Intermediate' },
        { name: 'Python', level: 'Intermediate' }
      ]
    },
    {
      category: 'Backend & APIs',
      description: 'Server-side frameworks and web services',
      skills: [
        { name: 'Spring Boot', level: 'Advanced', highlight: true },
        { name: 'Spring MVC', level: 'Advanced', highlight: true },
        { name: 'Spring Data JPA', level: 'Advanced', highlight: true },
        { name: '.NET', level: 'Proficient' },
        { name: 'RESTful Web Services', level: 'Advanced', highlight: true },
        { name: 'API-first Development', level: 'Advanced' }
      ]
    },
    {
      category: 'Software Architecture',
      description: 'Design patterns and clean code principles',
      skills: [
        { name: 'OOP Concepts', level: 'Advanced', highlight: true },
        { name: 'SOLID Principles', level: 'Advanced', highlight: true },
        { name: 'Design Patterns', level: 'Advanced', highlight: true },
        { name: 'Data Structures & Algorithms', level: 'Advanced', highlight: true },
        { name: 'Microservices Architecture', level: 'Proficient' }
      ]
    },
    {
      category: 'Frontend & Web',
      description: 'Interactive and responsive client development',
      skills: [
        { name: 'React.js', level: 'Advanced', highlight: true },
        { name: 'JavaScript (ES6+)', level: 'Advanced', highlight: true },
        { name: 'HTML5 & CSS3', level: 'Advanced' },
        { name: 'Redux Toolkit', level: 'Proficient' },
        { name: 'Tailwind CSS', level: 'Advanced', highlight: true },
        { name: 'Material-UI', level: 'Proficient' }
      ]
    },
    {
      category: 'Databases & Caching',
      description: 'Relational data modeling and storage',
      skills: [
        { name: 'MySQL 8.0', level: 'Advanced', highlight: true },
        { name: 'MongoDB', level: 'Proficient' },
        { name: 'Redis', level: 'Intermediate' }
      ]
    },
    {
      category: 'Testing & QA',
      description: 'Automated testing and API verification',
      skills: [
        { name: 'JUnit (TDD)', level: 'Advanced', highlight: true },
        { name: 'Postman (API Testing)', level: 'Advanced' }
      ]
    },
    {
      category: 'DevOps & Tools',
      description: 'Version control and cloud services',
      skills: [
        { name: 'Git & GitHub', level: 'Advanced', highlight: true },
        { name: 'GitHub Actions (CI/CD)', level: 'Proficient', highlight: true },
        { name: 'AWS (Lambda, S3, API Gateway)', level: 'Proficient' }
      ]
    }
  ],

  experience: [
    {
      id: 'cctech',
      role: 'Full Stack Developer',
      company: 'CCTech',
      period: 'Sep 2024 – Present',
      location: 'Pune, Maharashtra',
      techStack: ['Java', 'Spring Boot', 'C#', '.NET', 'React.js', 'AWS', 'MySQL', 'AutoCAD API', 'Inventor API'],
      summary: 'Building engineering CAD automation plugins, Spring Boot REST services, and responsive web visualization tools.',
      bullets: [
        'Automated engineering design workflows by building custom C# automation plugins for AutoCAD and Autodesk Inventor.',
        'Engineered Spring Boot RESTful services to perform dimensional calculations and air permeability validations.',
        'Built React frontend visualization components enabling engineering teams to inspect duct runs and layout metrics in real time.',
        'Designed and implemented RESTful APIs using Core Java and Spring Boot, applying OOP and SOLID principles and reusable design patterns to build scalable, maintainable backend services.',
        'Wrote unit and integration tests (JUnit) to validate functionality, catch regressions early, and maintain high code quality.',
        'Built modular application components in C# and Java following API-first practices.',
        'Participated in code reviews, technical design discussions, and Agile ceremonies to deliver high-quality, reliable solutions.',
        'Contributed to CI/CD pipelines and AWS-based deployment workflows using GitHub Actions, and collaborated with senior engineers to troubleshoot issues and improve performance.'
      ]
    }
  ],

  projects: [
    {
      id: 'chatsapp',
      title: 'ChatsApp – Full-Stack Real-Time Messaging Application',
      tagline: 'Real-Time Messaging Application built with Spring Boot, WebSockets & React',
      featured: true,
      category: 'Full-Stack Application',
      techStack: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'WebSockets (STOMP/SockJS)',
        'Hibernate',
        'MySQL 8.0',
        'React.js',
        'Redux',
        'Tailwind CSS',
        'Material-UI',
        'Cloudinary',
        'JWT'
      ],
      description:
        'A full-stack real-time messaging application inspired by WhatsApp. Built with a Spring Boot WebSocket backend (STOMP/SockJS) for live message delivery, Spring Security + JWT for stateless authentication, and a responsive React frontend with centralized Redux state management.',
      highlights: [
        'Developed a full-stack real-time messaging application featuring secure user authentication, instant messaging, status updates, and group management.',
        'Built low-latency, real-time messaging pipelines using WebSockets (STOMP protocol and SockJS) enabling live message delivery.',
        'Implemented secure, stateless authentication and authorization using Spring Security, JSON Web Tokens (JWT), and BCrypt password hashing.',
        'Designed a responsive UI using React and Redux for centralized state management, integrating Cloudinary API for high-performance cloud image hosting.',
        'Optimized database performance and schema management using Spring Data JPA, Hibernate, and MySQL 8.0.'
      ],
      architecture: [
        { layer: 'Real-Time Transport', details: 'Spring WebSocket broker using STOMP protocol over SockJS fallback' },
        { layer: 'Security & Auth', details: 'Stateless JWT authentication filter chain with BCrypt password encryption' },
        { layer: 'Frontend & State', details: 'React.js with Redux Toolkit for centralized conversation state' },
        { layer: 'Data Persistence', details: 'Spring Data JPA & Hibernate ORM mapped to MySQL 8.0' },
        { layer: 'Media Storage', details: 'Cloudinary CDN integration for cloud media and image uploads' }
      ],
      github: 'https://github.com/Geeker02',
      demo: null
    }
  ],

  achievements: [
    {
      id: 'leetcode',
      platform: 'LeetCode',
      badge: '400+ Problems Solved',
      title: 'Data Structures & Algorithms',
      description:
        'Solved 400+ algorithmic challenges across Arrays, Binary Trees, Graphs, Dynamic Programming, and Two-Pointers, building strong problem-solving and optimization instincts.',
      profileUrl: 'https://leetcode.com/u/Geeker02',
      highlightStats: '400+ Solved'
    },
    {
      id: 'hackerrank',
      platform: 'HackerRank',
      badge: '5-Star Gold Badge',
      title: 'Problem Solving Certification',
      description:
        'Earned a 5-Star Gold rating in Problem Solving on HackerRank, demonstrating solid understanding of algorithms, data structures, and handling edge cases.',
      profileUrl: 'https://www.hackerrank.com/profile/Geeker02',
      highlightStats: '5-Star Rating'
    }
  ],

  education: [
    {
      degree: 'B.E. in Computer Engineering',
      institution: "PCET's Nutan Maharashtra Institute of Engineering and Technology, Pune",
      period: 'Dec 2021 – May 2024',
      grade: 'CGPA: 9.04 / 10.0',
      badge: 'Distinction',
      details: 'Courses: Algorithms, Database Management Systems, Object-Oriented Programming, Operating Systems, Computer Networks.'
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Government Polytechnic, Pune',
      period: 'Aug 2018 – Jul 2021',
      grade: 'Percentage: 88.87%',
      badge: 'Distinction',
      details: 'Courses: Data Structures, C/C++, Java Programming, Relational Databases, Computer Architecture.'
    },
    {
      degree: 'High School (SSC)',
      institution: 'Z.P. High School, Takalsing',
      period: 'Jun 2017 – Mar 2018',
      grade: 'Percentage: 94.00%',
      badge: 'First Class',
      details: 'Strong foundational academics with high distinction in Mathematics and Science.'
    }
  ]
};
