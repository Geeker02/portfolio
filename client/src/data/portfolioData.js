export const portfolioData = {
  candidate: {
    name: 'Jaydeep Jogdand',
    role: 'Software Engineer',
    specialization: 'Core Java & Spring Boot Developer',
    headline: 'Building Robust Distributed Systems, High-Performance REST APIs & Reactive Web Apps',
    email: 'jaydeepjogdand@gmail.com',
    phone: '8459697079',
    formattedPhone: '+91 8459697079',
    linkedin: 'https://linkedin.com/in/jaydeep-jogdand',
    github: 'https://github.com/Geeker02',
    leetcode: 'https://leetcode.com/u/Geeker02',
    location: 'Pune, Maharashtra, India',
    summary:
      'Software Engineer with hands-on experience in Core Java, Spring Boot, and object-oriented application development. Strong grasp of OOP, SOLID principles, and design patterns, with experience writing unit and integration tests (JUnit/TDD) and delivering RESTful APIs in Agile environments. Self-driven engineer who writes clean, testable code, collaborates effectively across cross-functional teams, and is committed to continuous learning and growth.'
  },

  metrics: [
    { label: 'DSA Problems Solved', value: '400+', icon: 'code' },
    { label: 'Engineering Experience', value: 'Sep 2024 – Present', icon: 'briefcase' },
    { label: 'B.E. Academic CGPA', value: '9.04', icon: 'award' },
    { label: 'HackerRank Rating', value: '5-Star Gold', icon: 'star' }
  ],

  skillCategories: [
    {
      category: 'Languages',
      description: 'Core programming foundations & multi-paradigm languages',
      skills: [
        { name: 'Core Java', level: 'Advanced', highlight: true },
        { name: 'C#', level: 'Proficient', highlight: true },
        { name: 'C', level: 'Intermediate' },
        { name: 'C++', level: 'Intermediate' },
        { name: 'Python', level: 'Intermediate' }
      ]
    },
    {
      category: 'Backend & Enterprise',
      description: 'Scalable service architectures and RESTful microservices',
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
      category: 'Core Concepts & Engineering',
      description: 'Clean code methodologies, system design & architectural patterns',
      skills: [
        { name: 'Object-Oriented Programming (OOP)', level: 'Advanced', highlight: true },
        { name: 'SOLID Principles', level: 'Advanced', highlight: true },
        { name: 'Design Patterns', level: 'Advanced', highlight: true },
        { name: 'Data Structures & Algorithms', level: 'Advanced', highlight: true },
        { name: 'Microservices Architecture', level: 'Proficient' }
      ]
    },
    {
      category: 'Web & Frontend',
      description: 'Modern reactive user interfaces and state management',
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
      description: 'Relational data modeling, indexing, and NoSQL stores',
      skills: [
        { name: 'MySQL 8.0', level: 'Advanced', highlight: true },
        { name: 'MongoDB', level: 'Proficient' },
        { name: 'Redis', level: 'Intermediate' }
      ]
    },
    {
      category: 'Testing & Quality',
      description: 'Automated test suites, regressions & API contracts',
      skills: [
        { name: 'JUnit (TDD)', level: 'Advanced', highlight: true },
        { name: 'Postman (API Testing)', level: 'Advanced' }
      ]
    },
    {
      category: 'Tools & DevOps',
      description: 'Version control, automated pipelines & cloud services',
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
      summary: 'Engineering enterprise CAD workflow automation and cloud-connected full-stack services.',
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
      tagline: 'WhatsApp Clone with WebSocket STOMP pipelines, Spring Security & JWT stateless auth',
      featured: true,
      category: 'Distributed Real-Time System',
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
        'A full-featured real-time chat application offering instant 1-on-1 messaging, group chats, status stories, and media uploads. Engineered with enterprise security, dual-tier WebSockets, and low-latency state synchronization.',
      highlights: [
        'Developed a full-stack real-time messaging application featuring secure user authentication, instant messaging, status updates, and group management.',
        'Built low-latency, real-time messaging pipelines using WebSockets (STOMP protocol and SockJS) enabling live message delivery.',
        'Implemented secure, stateless authentication and authorization using Spring Security, JSON Web Tokens (JWT), and BCrypt password hashing.',
        'Designed a responsive UI using React and Redux for centralized state management, integrating Cloudinary API for high-performance cloud image hosting.',
        'Optimized database performance and schema management using Spring Data JPA, Hibernate, and MySQL 8.0.'
      ],
      architecture: [
        { layer: 'Frontend Layer', details: 'React.js SPA + Redux Store + STOMP Client over SockJS' },
        { layer: 'Security Layer', details: 'Spring Security Filter Chain + JWT Verification + BCrypt Hasher' },
        { layer: 'Messaging Layer', details: 'Spring WebSocket Broker (/topic, /queue) + STOMP Protocol' },
        { layer: 'Persistence Layer', details: 'Spring Data JPA + Hibernate ORM + MySQL 8.0 with indexing' },
        { layer: 'Media Storage', details: 'Cloudinary CDN for encrypted multimedia payloads' }
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
      title: 'Data Structures & Algorithms Mastery',
      description:
        'Solved 400+ algorithmic challenges across Arrays, Binary Trees, Graphs, Dynamic Programming, and Two-Pointers, developing sharp analytical intuition for computational complexity.',
      profileUrl: 'https://leetcode.com/u/Geeker02',
      highlightStats: '400+ Solved'
    },
    {
      id: 'hackerrank',
      platform: 'HackerRank',
      badge: '5-Star Gold Badge',
      title: 'Problem Solving Certification',
      description:
        'Attained 5-Star Gold ranking in Problem Solving on HackerRank, validating strong competencies in algorithmic problem breakdown, data structures, and edge-case testing.',
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
      badge: 'First Class with Distinction',
      details: 'Focused on Advanced Algorithms, Software Engineering, Database Systems, Object-Oriented Architecture, and Distributed Systems.'
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Government Polytechnic, Pune',
      period: 'Aug 2018 – Jul 2021',
      grade: 'Percentage: 88.87%',
      badge: 'First Class with Distinction',
      details: 'Built strong foundations in Computer Architecture, Data Structures, C/C++, Java, and Relational Databases.'
    },
    {
      degree: 'High School (SSC)',
      institution: 'Z.P. High School, Takalsing',
      period: 'Jun 2017 – Mar 2018',
      grade: 'Percentage: 94.00%',
      badge: 'Academic Excellence',
      details: 'Demonstrated academic dedication with top honors in Mathematics and Science.'
    }
  ]
};
