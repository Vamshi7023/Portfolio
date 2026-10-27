export const personalInfo = {
  name: "TK Vamshi Krishna",
  role: "Software Engineer & Full-Stack Developer",
  headline: "Building Scalable Backend Services, RESTful APIs & Engaging Web Experiences",
  tagline: "M.Tech CSE @ VIT | Software Engineer Intern @ Danfoss | Ex-Web Developer @ ItJobXS",
  summary:
    "Graduate from VIT with experience in full-stack and backend engineering at Danfoss. Built production-grade Node.js services, REST APIs, and CI/CD pipelines at scale. Strong problem-solving skills with 500+ DSA problems solved on LeetCode.",
  about:
    "I am a passionate software engineer with a strong foundation in computer science and full-stack development. I enjoy architecting robust backend microservices, streamlining CI/CD pipelines, and crafting clean, responsive user interfaces. With hands-on industry experience at Danfoss and ItJobXS, combined with 500+ solved algorithmic challenges, I thrive on turning complex problems into elegant, maintainable software.",
  email: "tirumalagirivamshikrishna@gmail.com",
  phone: "+91 7660098895",
  location: "Bengaluru, Karnataka, India",
  website: "https://portfolio-vamshi-krishna.vercel.app",
  resumePath: "/resume.pdf",
  socials: {
    github: "https://github.com/Vamshi7023",
    linkedin: "https://www.linkedin.com/in/tkvamshi/",
    leetcode: "https://codolio.com/profile/TK_Vamshi_Krishna/",
    email: "mailto:tirumalagirivamshikrishna@gmail.com",
    phone: "tel://+917660098895"
  },
  stats: [
    { label: "DSA Problems Solved", value: "500+", detail: "LeetCode & Codeforces" },
    { label: "VIT CGPA", value: "8.70", detail: "M.Tech Integrated CSE" },
    { label: "Pull Requests Managed", value: "30+", detail: "Azure DevOps & Git" },
    { label: "Languages Localized", value: "14", detail: "Danfoss Backend Pipeline" }
  ]
};

export const experiences = [
  {
    company: "Danfoss",
    role: "Software Engineer Intern",
    location: "Chennai, India",
    period: "Oct 2025 - Aug 2026",
    badge: "Current / Enterprise",
    type: "Internship",
    points: [
      "REST API Integration & Data Flow: Implemented RESTful APIs using HTTP/HTTPS and JSON-based request/response handling, endpoint design, request validation, status-code handling, and asynchronous communication to ensure consistent, reliable data flow.",
      "Backend Data Processing: Built a Node.js backend service to process and transform content across 14 different languages, with UI-level validation to ensure consistent ID and selector mapping across all 14 languages.",
      "Data Transformation Pipeline: Designed reusable normalization utilities and automated Node.js workflows for complex schema transformations, expanding localization coverage by 80% and maintaining synchronized backend configuration.",
      "CI/CD Pipeline Configuration: Implemented YAML-based CI/CD pipelines in Azure DevOps to automate application builds, test execution, and software deployment workflows.",
      "Modular JavaScript Architecture: Developed reusable JavaScript modules and integrated JSON-based data sources to improve code reusability, execution efficiency, and long-term maintainability.",
      "Pull Request & Version Control: Raised and managed 30+ PRs in Azure DevOps, resolved Git merge conflicts during feature integration and repository migration, maintaining code stability across branches."
    ],
    techStack: [ "Node.js", "Express Js","JavaScript", "REST API", "Axios", "Azure DevOps", "Git", "YAML", "JSON"]
  },
  {
    company: "ItJobXS",
    role: "Web Developer",
    location: "Remote",
    period: "July 2024 - Nov 2024",
    badge: "Web Platform",
    website: "https://www.itjobxs.com",
    logo: "/images/itjobxs_logo.jpeg",
    type: "Web Development",
    points: [
      "Responsive Web Page Design: Collaborated with a team of four to develop a responsive ItJobXS page on AWS, improving user engagement by 30% for 10,000 active users.",
      "User Verification & Security: Implemented verification mechanisms, reducing fake accounts by 85% and processing 5,000+ verifications daily on AWS with enhanced security measures.",
      "Bot Mitigation via Recaptcha: Integrated Google Recaptcha v3, reducing bot traffic by 70% and handling 15,000+ authentication requests daily via AWS Lambda.",
      "Scalable Deployment: Leveraged HTML, CSS, JavaScript, PHP, MySQL, AWS EC2, and RDS for scalable development and seamless deployment."
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "AWS EC2", "AWS RDS", "AWS Lambda", "Bootstrap"]
  }
];

export const educationList = [
  {
    institution: "Vellore Institute of Technology (VIT)",
    degree: "M.Tech Integrated Computer Science & Engineering (Core)",
    period: "2021 - 2026",
    location: "Andhra Pradesh, India",
    grade: "CGPA: 8.70 / 10.0",
    image: "/images/VIT_AP.png",
    description:
      "Core focus on Data Structures & Algorithms, Distributed Systems, Object-Oriented Programming, Database Management Systems, Computer Networks, and Cloud Computing."
  },
  {
    institution: "Narayana PU College",
    degree: "Higher Secondary (PCMC - Physics, Chemistry, Math, Computer Science)",
    period: "Completed",
    location: "Karnataka, India",
    grade: "Pre-University Certification",
    description: "Strong academic grounding in higher mathematics, logical reasoning, and introductory computer programming."
  },
  {
    institution: "Narayana School",
    degree: "Secondary Education (Classes 8 - 10)",
    period: "Completed",
    location: "India",
    grade: "High Distinction",
    description: "Secondary education with active participation in science exhibitions, mathematics olympiads, and school leadership."
  },
  {
    institution: "Kendriya Vidyalaya",
    degree: "Primary & Middle School (Classes 1 - 7)",
    period: "Completed",
    location: "India",
    grade: "Foundational Education",
    description: "Holistic development, extracurricular debates, and early foundation in science and mathematics."
  }
];

export const skillsData = {
  categories: [
    { id: "all", name: "All Skills" },
    { id: "languages", name: "Languages" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend & Cloud" },
    { id: "database", name: "Databases & Storage" },
    { id: "devops", name: "DevOps & Tools" },
    { id: "concepts", name: "Core CS Concepts" }
  ],
  skills: [
    // Languages
    { name: "Java", category: "languages", icon: "☕" },
    { name: "JavaScript (ES6+)", category: "languages", icon: "⚡" },
    { name: "Python", category: "languages", icon: "🐍" },
    { name: "TypeScript", category: "languages", icon: "📘" },
    { name: "C / C++", category: "languages", icon: "⚙️" },
    { name: "PHP", category: "languages", icon: "🐘" },
    { name: "HTML5 & CSS3", category: "languages", icon: "🎨" },
    { name: "YAML", category: "languages", icon: "📄" },

    // Frontend
    { name: "React.js", category: "frontend", icon: "⚛️" },
    { name: "Vite", category: "frontend", icon: "🚀" },
    { name: "Responsive UI/UX", category: "frontend", icon: "📱" },
    { name: "Vanilla CSS & Flexbox/Grid", category: "frontend", icon: "📐" },
    { name: "Bootstrap", category: "frontend", icon: "🅱️" },

    // Backend
    { name: "Node.js", category: "backend", icon: "🟢" },
    { name: "Express.js", category: "backend", icon: "🚂" },
    { name: "RESTful API Design", category: "backend", icon: "🔗" },
    { name: "Microservices", category: "backend", icon: "🧩" },
    { name: "AWS (EC2, RDS, Lambda)", category: "backend", icon: "☁️" },
    { name: "Axios", category: "backend", icon: "📡" },
    { name: "Nodemailer", category: "backend", icon: "✉️" },

    // Databases
    { name: "MongoDB", category: "database", icon: "🍃" },
    { name: "MySQL / SQL", category: "database", icon: "🐬" },
    { name: "Redis", category: "database", icon: "🔴" },
    { name: "AWS RDS", category: "database", icon: "🗄️" },

    // DevOps & Tools
    { name: "Git & GitHub", category: "devops", icon: "🐙" },
    { name: "Azure DevOps (CI/CD)", category: "devops", icon: "🔷" },
    { name: "Docker", category: "devops", icon: "🐳" },
    { name: "Postman", category: "devops", icon: "📮" },
    { name: "k6 Load Testing", category: "devops", icon: "⏱️" },
    { name: "VS Code", category: "devops", icon: "💻" },
    { name: "Figma", category: "devops", icon: "🎨" },

    // Concepts
    { name: "Data Structures & Algorithms", category: "concepts", icon: "🧠" },
    { name: "Object-Oriented Programming (OOP)", category: "concepts", icon: "🧱" },
    { name: "Database Management Systems (DBMS)", category: "concepts", icon: "📊" },
    { name: "Computer Networks", category: "concepts", icon: "🌐" },
    { name: "Operating Systems", category: "concepts", icon: "🖥️" },
    { name: "SDLC & Agile Workflows", category: "concepts", icon: "🔄" }
  ]
};

export const projects = [
  {
    id: "browsecart",
    title: "BrowseCart",
    category: "Full Stack",
    tagline: "Hyperlocal Shop Discovery & Commerce Engine",
    description:
      "A local shop discovery platform featuring geolocation-based filtering within a 2 km radius. Built scalable REST APIs for user authentication and shop listings, integrated Redis for caching, and conducted rigorous API performance testing using k6.",
    image: "/images/Portfolio2.png",
    tags: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "Redis", "k6", "Postman"],
    highlights: [
      "Geolocation-based filtering within 2 km radius",
      "Microservices-style API architecture with Redis caching",
      "k6 performance & load testing with Postman collections"
    ],
    github: "https://github.com/Vamshi7023",
    featured: true
  },
  {
    id: "car-rental",
    title: "Car Rental System",
    category: "Full Stack",
    tagline: "Modern Vehicle Fleet Booking Platform",
    description:
      "A complete vehicle booking platform featuring an ultra-fast search bar and categorized fleet listings. Optimized performance with lazy loading and refined APIs, reducing initial load time by 1.5s and data fetch time by 35%.",
    image: "/images/CarRental.png",
    tags: ["React.js", "Vite", "MongoDB", "Node.js", "Express.js", "Figma", "Git"],
    highlights: [
      "Reduced load time by 1.5s & data fetch time by 35%",
      "Seamless MongoDB booking management & status tracking",
      "Figma UI design system with dynamic vehicle search"
    ],
    github: "https://github.com/Vamshi7023/HomYZ-RealIstate",
    featured: true
  },
  {
    id: "tripsaga",
    title: "TripSaga",
    category: "Full Stack",
    tagline: "End-to-End Travel Reservation System",
    description:
      "Full-stack travel booking application featuring secure authentication and role-based access control with JWT. Developed comprehensive REST APIs for tour package management and deployed backend on Render and frontend on Vercel.",
    image: "/images/project-1.jpg",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Postman", "Render", "Vercel"],
    highlights: [
      "Role-based access control (Admin & Traveler) with JWT",
      "Automated package booking and payment status workflows",
      "Fully documented Postman APIs for team integration"
    ],
    github: "https://github.com/Vamshi7023",
    featured: true
  },
  {
    id: "mailflow",
    title: "MailFlow",
    category: "Backend & API",
    tagline: "Event-Driven Telegram Email Automation System",
    description:
      "An end-to-end email automation engine integrating Telegram Bot API with Node.js and Nodemailer to trigger and manage automated email workflows directly through conversational chat commands.",
    image: "/images/project-2.jpg",
    tags: ["Node.js", "Nodemailer", "Telegram Bot API", "dotenv", "Vercel"],
    highlights: [
      "Telegram command interface for real-time email dispatch",
      "Dynamic template rendering with configurable delivery intervals",
      "Secure dotenv credential management deployed on Vercel"
    ],
    github: "https://github.com/Vamshi7023",
    featured: true
  },
  {
    id: "homyz",
    title: "HomYZ Real Estate",
    category: "React App",
    tagline: "Interactive Property Exploration Portal",
    description:
      "A modern, responsive real estate web application built with React and Vite. Enables intuitive property discovery, price filtering, high-resolution imagery, and seamless client inquiry routing.",
    image: "/images/HomeYZ.png",
    tags: ["React.js", "Vite", "Vanilla CSS", "REST API", "Vercel"],
    highlights: [
      "High-performance Vite React application architecture",
      "Dynamic price and property type filtering",
      "Fully responsive modern card layout"
    ],
    github: "https://github.com/Vamshi7023/HomYZ-RealIstate",
    featured: false
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    category: "Frontend",
    tagline: "Real-Time Atmospheric Forecast Platform",
    description:
      "An interactive weather dashboard delivering real-time atmospheric metrics, 5-day forecasts, wind speed, UV index, and automatic user geolocation detection with sleek UI state changes.",
    image: "/images/Weather.png",
    tags: ["JavaScript", "HTML5", "CSS3", "Weather API", "Vercel"],
    highlights: [
      "Real-time OpenWeather API live integration",
      "Automatic geolocation coordinate detection",
      "Dynamic animated weather condition backgrounds"
    ],
    github: "https://github.com/Vamshi7023/Weather-App",
    featured: false
  },
  {
    id: "vit-ap-website",
    title: "VIT-AP Web Portal",
    category: "Full Stack",
    tagline: "Institutional Campus Information Platform",
    description:
      "Redesigned academic portal for VIT-AP featuring student services, faculty directories, academic calendars, and department course information backed by relational MySQL tables.",
    image: "/images/VIT_AP.png",
    tags: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    highlights: [
      "Relational MySQL database for departments and faculty data",
      "Clean academic navigation structure",
      "Cross-device mobile-first responsiveness"
    ],
    github: "https://github.com/Vamshi7023/College-Website",
    featured: false
  },
  {
    id: "atrt-detection",
    title: "ATRT Tumor Detection (CNN VGG19)",
    category: "AI & Deep Learning",
    tagline: "Deep Neural Network for Brain Tumor Classification",
    description:
      "Deep Learning computer vision pipeline leveraging Transfer Learning with the VGG19 Convolutional Neural Network architecture to classify and detect Atypical Teratoid Rhabdoid Tumors from brain MRI scans.",
    image: "/images/ATRT.png",
    tags: ["Python", "Deep Learning", "CNN", "VGG19", "Medical AI"],
    highlights: [
      "Trained on high-resolution MRI scan datasets with data augmentation",
      "Fine-tuned VGG19 layers for high classification precision",
      "Published research domain in medical image computing"
    ],
    github: "https://github.com/Vamshi7023/Atypical_Teratoid_Rhabdoid_Tumors_Using_Advance_CNN_VGG19",
    featured: false
  },
  {
    id: "vision-buddy",
    title: "Vision Buddy (Smart Blind Spectacles)",
    category: "IoT & Hardware",
    tagline: "Assistive Haptic Eyewear for the Visually Impaired",
    description:
      "IoT assistive eyewear device engineered with Arduino microcontrollers, ultrasonic proximity sensors, and buzzer/vibration haptics to alert visually impaired users of upcoming obstacles in real time.",
    image: "/images/Ardino.jpeg",
    tags: ["Arduino", "C++", "IoT Sensors", "Haptics", "Hardware"],
    highlights: [
      "Real-time ultrasonic range sensing with sub-second feedback",
      "Ergonomic, lightweight wearable form factor",
      "Low-power embedded C++ firmware optimization"
    ],
    github: "https://github.com/Vamshi7023/Vission-Buddy",
    featured: false
  }
];

export const certifications = [
  {
    id: "oracle-cloud",
    title: "Oracle Cloud Infrastructure (OCI)",
    issuer: "Oracle",
    date: "March 2024",
    image: "/Oracle.jpg",
    badge: "Cloud Certified",
    description:
      "Certified in Oracle Cloud Infrastructure fundamentals, compute instances, virtual cloud networks (VCN), security, and storage architecture."
  },
  {
    id: "tcs-ai-softskills",
    title: "Soft Skills & Overview of Artificial Intelligence",
    issuer: "Tata Consultancy Services (TCS iON)",
    date: "December 2023",
    image: "/TCS.jpg",
    badge: "AI & Professional",
    description:
      "Mastery of corporate workplace communication, leadership dynamics, problem solving, and modern AI paradigms."
  },
  {
    id: "icccnt-2024",
    title: "ICCCNT 2024 IEEE Conference",
    issuer: "IEEE / ICCCNT",
    date: "2024",
    image: "/ICCCNT_2024_page.jpg",
    badge: "IEEE Publication",
    description:
      "Participant and contributor at the 15th International Conference on Computing, Communication and Networking Technologies."
  },
  {
    id: "nvidia-dli",
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA Deep Learning Institute",
    date: "Certified",
    image: "/Nvidia.jpg",
    badge: "Deep Learning",
    description:
      "Hands-on competency in neural networks, computer vision, transfer learning, and GPU-accelerated computing pipelines."
  },
  {
    id: "nasa-space-apps",
    title: "NASA Space Apps Challenge",
    issuer: "NASA",
    date: "Global Hackathon",
    image: "/NASA.jpg",
    badge: "Innovation Award",
    description:
      "Engineered technology solutions utilizing NASA open satellite and earth observational data sets under rapid hackathon constraints."
  },
  {
    id: "great-learning",
    title: "Web Development & Frontend Foundations",
    issuer: "Great Learning Academy",
    date: "Certified",
    image: "/greatLerning.jpg",
    badge: "Web Development",
    description:
      "Comprehensive certification covering modern web architecture, JavaScript ES6, semantic DOM manipulation, and responsive UX."
  },
  {
    id: "arduino-embedded",
    title: "Embedded Systems & IoT Engineering",
    issuer: "Robotics & Hardware Labs",
    date: "Certified",
    image: "/Arduino.jpg",
    badge: "IoT & Hardware",
    description:
      "Microcontroller architecture, circuit design, sensor interfacing, and hardware-software integration."
  },
  {
    id: "python-data",
    title: "Data Analytics & Python Programming",
    issuer: "Data Science Institute",
    date: "Certified",
    image: "/data.png",
    badge: "Data Science",
    description:
      "Data wrangling, analytical modeling, statistical pipelines, and algorithmic problem solving with Python."
  }
];
