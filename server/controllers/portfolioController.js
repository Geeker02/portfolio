import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { sendContactEmail } from '../services/mailService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Comprehensive candidate dataset matching SRS and verified Resume
const portfolioData = {
  candidate: {
    name: 'Jaydeep Jogdand',
    title: 'Software Engineer | Core Java & Spring Boot Developer',
    email: 'jaydeepjogdand@gmail.com',
    phone: '8459697079',
    formattedPhone: '+91 8459697079',
    linkedin: 'https://linkedin.com/in/jaydeep-jogdand-951b84232',
    github: 'https://github.com/Geeker02',
    leetcode: 'https://leetcode.com/u/Geeker02',
    location: 'Pune, Maharashtra, India',
    summary:
      'Software Engineer with hands-on experience in Core Java, Spring Boot, and object-oriented application development. Strong grasp of OOP, SOLID principles, and design patterns, with experience writing unit and integration tests (JUnit/TDD) and delivering RESTful APIs in Agile environments. Self-driven engineer who writes clean, testable code, collaborates effectively across cross-functional teams, and is committed to continuous learning and growth.'
  },
  skills: {
    languages: ['Core Java', 'C#', 'C', 'C++', 'Python'],
    coreConcepts: [
      'Object-Oriented Programming (OOP)',
      'SOLID Principles',
      'Design Patterns',
      'Data Structures & Algorithms',
      'Microservices Architecture'
    ],
    backend: [
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      '.NET',
      'RESTful Web Services',
      'API-first Development'
    ],
    web: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Tailwind CSS', 'Material-UI'],
    databases: ['MySQL 8.0', 'MongoDB', 'Redis'],
    testing: ['JUnit', 'Postman (API testing)'],
    devops: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'AWS (Lambda, S3, API Gateway)']
  },
  experience: [
    {
      company: 'CCTech',
      role: 'Full Stack Developer',
      period: 'Sep 2024 – Present',
      location: 'Pune, India',
      techStack: ['Java', 'Spring Boot', 'C#', '.NET', 'React.js', 'AWS', 'MySQL', 'AutoCAD API', 'Inventor API'],
      responsibilities: [
        'Automated engineering design workflows by building custom C# automation plugins for AutoCAD and Autodesk Inventor.',
        'Engineered Spring Boot RESTful services to perform dimensional calculations and air permeability validations.',
        'Built responsive React frontend visualization components enabling engineering teams to inspect duct runs and layout metrics in real time.',
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
      title: 'ChatsApp – Full-Stack Real-Time Messaging Application',
      category: 'Full-Stack Distributed Application',
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
      highlights: [
        'Developed a full-stack real-time messaging application (WhatsApp Clone) featuring secure user authentication, instant messaging, status updates, and group management.',
        'Built low-latency, real-time messaging pipelines using WebSockets (STOMP protocol and SockJS) enabling live message delivery.',
        'Implemented secure, stateless authentication and authorization using Spring Security, JSON Web Tokens (JWT), and BCrypt password hashing.',
        'Designed a responsive UI using React and Redux for centralized state management, integrating the Cloudinary API for high-performance cloud image hosting.',
        'Optimized database performance and schema management using Spring Data JPA, Hibernate, and MySQL 8.0.'
      ],
      github: 'https://github.com/Geeker02',
      demo: '#'
    }
  ],
  achievements: [
    {
      platform: 'LeetCode',
      title: '400+ DSA Problems Solved',
      description: 'Extensive problem-solving across Arrays, Trees, Dynamic Programming, and Graph algorithms.',
      badge: '400+ Solved'
    },
    {
      platform: 'HackerRank',
      title: '5-Star in Problem Solving',
      description: 'Gold-level badge demonstrating mastery in algorithms, data structures, and edge-case handling.',
      badge: '5-Star Gold'
    }
  ],
  education: [
    {
      degree: 'B.E. in Computer Engineering',
      institution: "PCET's Nutan Maharashtra Institute of Engineering and Technology, Pune",
      period: 'Dec 2021 – May 2024',
      grade: 'CGPA: 9.04'
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Government Polytechnic, Pune',
      period: 'Aug 2018 – Jul 2021',
      grade: 'Percentage: 88.87%'
    },
    {
      degree: 'High School',
      institution: 'Z.P. High School, Takalsing',
      period: 'Jun 2017 – Mar 2018',
      grade: 'Percentage: 94%'
    }
  ]
};

// GET /api/v1/health (Keep-alive ping and heartbeat)
export const getHealth = (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime())
  });
};

// GET /api/v1/portfolio (Structured metadata)
export const getPortfolio = (req, res) => {
  res.status(200).json({
    success: true,
    data: portfolioData
  });
};

// POST /api/v1/contact (Message validation and dispatch)
export const submitContact = async (req, res) => {
  try {
    const { rawName, email, rawSubject, rawMessage } = req.sanitizedBody;

    const result = await sendContactEmail({
      name: rawName,
      email,
      subject: rawSubject,
      message: rawMessage
    });

    return res.status(200).json({
      success: true,
      message: 'Message successfully dispatched.',
      mode: result.mode
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to dispatch message. Please try again or reach out directly via email.'
    });
  }
};

// GET /api/v1/resume (Streams resume PDF)
export const getResume = (req, res) => {
  let resumePath = path.resolve(__dirname, '../public/Jaydeep_Jogdand_Software_Developer.pdf');

  if (!fs.existsSync(resumePath)) {
    resumePath = path.resolve(__dirname, '../public/Jaydeep_Jogdand_Resume.pdf');
  }

  if (!fs.existsSync(resumePath)) {
    return res.status(404).json({
      success: false,
      message: 'Resume file not found on server.'
    });
  }

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename="Jaydeep_Jogdand_Software_Developer.pdf"');

  const fileStream = fs.createReadStream(resumePath);
  fileStream.pipe(res);
};
