export const portfolio = {
  name: "Adithiya Srinivasan",
  title: "Software Engineer",
  tagline: "Backend systems, cloud infrastructure, and the occasional 3D world.",
  email: "adithiya.srinivasan99@gmail.com",
  phone: "+1 (909) 665-5990",
  location: "San Bernardino, CA",
  linkedin: "https://linkedin.com/in/adithiya-srinivasan",
  github: "https://github.com/AdithiyaS",

  about: `I'm a full-stack engineer with 3+ years of industry experience building backend APIs and microservices at enterprise scale. At Guardian Life, I modernized legacy WCF services into .NET Core REST APIs serving 100K+ users, and architected AWS-native data pipelines that cut manual processing by 40%. Now pursuing research at CSUSB, I'm pushing spatial data into Unreal Engine for archaeological visualization — because software should do more than move JSON around.`,

  skills: {
    "Backend & APIs": ["C#", ".NET Core", "Python", "Node.js", "RESTful APIs", "Microservices", "SOA"],
    "Frontend": ["React", "Angular", "Next.js", "TypeScript", "JavaScript", "HTML/CSS"],
    "Cloud & DevOps": ["AWS (S3, Lambda, SQS, API Gateway)", "Azure", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "CI/CD"],
    "Databases": ["SQL Server", "PostgreSQL", "MySQL", "Oracle", "Dapper ORM"],
    "Testing & Methodology": ["Unit Testing", "Integration Testing", "Agile/Scrum", "SAFe 5.1"],
    "Embedded & 3D": ["FreeRTOS", "Embedded C/C++", "Unreal Engine", "ArcGIS Pro", "CAN/USART"],
  },

  experience: [
    {
      role: "Software Engineer",
      company: "California State University, San Bernardino",
      period: "Sept 2025 — Present",
      location: "San Bernardino, CA",
      highlights: [
        "Building Unreal Engine–ArcGIS Pro integration in C++ and Python to import and visualize large-scale archaeological spatial datasets in real time for archaeological research project.",
        "Implementing 3D modeling pipelines and database systems for immersive, high-fidelity archaeological environments.",
        "Designing automated data processing workflows that reduce manual processing time and improve spatial dataset accuracy.",
      ],
    },
    {
      role: "Graduate Student Assistant",
      company: "California State University, San Bernardino",
      period: "Jun 2024 — May 2025",
      location: "San Bernardino, CA",
      highlights: [
        "Built Oracle-integrated event registration modules in React + Node.js, streamlining workflows for 5,000+ students.",
        "Migrated 500+ inventory records from Excel to normalized SQL, improving accuracy by 25%.",
        "Upgraded RecWell web and mobile platforms with scheduling and automated notifications, driving 20% higher engagement.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Guardian Life",
      period: "Oct 2019 — July 2023",
      location: "Chennai, India",
      highlights: [
        "Modernized legacy WCF services into .NET Core RESTful APIs, cutting response times 20% across systems serving 100K+ users.",
        "Engineered Data Handler microservice on AWS (S3, Lambda, API Gateway), reducing manual backend processing by 40%.",
        "Built modular Angular and React front-end components that improved user satisfaction scores by 15%.",
        "Designed robust API logic with Dapper ORM and unit tests, reducing production defects by 30%.",
        "Integrated SQS and SwaggerHub, cutting deployment cycle time by 25% through streamlined CI/CD.",
        "Delivered Transportation Management System in Angular + .NET Core + SQL Server, boosting workflow efficiency by 30%.",
      ],
    },
  ],

  projects: [
    {
      title: "Workation",
      subtitle: "Travel Package Price Prediction Platform",
      description: "ML platform predicting workation costs with 85% accuracy. Built with XGBoost, Linear Regression, and an OpenAI-powered chatbot for real-time travel budget recommendations.",
      tags: ["Python", "Next.js", "Flask", "OpenAI API", "XGBoost", "Machine Learning"],
      highlight: "85% prediction accuracy",
    },
    {
      title: "Fintastic Division",
      subtitle: "Educational Math Game",
      description: "Cross-platform math puzzle game deployed via WebGL. RESTful API backend, Azure DevOps CI/CD pipeline, cloud-integrated leaderboard.",
      tags: ["C#", "Unity", "React", "Azure", "SQL", "GCP", "WebGL"],
      highlight: "WebGL cross-platform",
    },
    {
      title: "Motor Error Detection",
      subtitle: "Real-Time Embedded System",
      description: "FreeRTOS-based motor monitoring system using IR sensors to detect anomalies and trigger fail-safe mechanisms. Reduced system failures by 40%.",
      tags: ["Embedded C/C++", "FreeRTOS", "IR Sensors", "CAN/USART", "GDB"],
      highlight: "40% fewer failures",
    },
  ],

  education: [
    {
      degree: "Master of Science, Computer Science",
      institution: "California State University, San Bernardino",
      period: "Aug 2023 — May 2025",
      gpa: "3.7 / 4.0",
      courses: ["Analysis of Algorithms", "Distributed Systems", "Machine Learning", "AI", "Database Systems", "Advanced Operating Systems"],
    },
    {
      degree: "Bachelor of Technology",
      institution: "SRM Institute of Science and Technology",
      period: "Jun 2014 — May 2018",
      gpa: "8.91 / 10",
      courses: [],
    },
  ],

  certifications: ["SAFe 5.1 Practitioner (Enterprise Edition)"],
};
