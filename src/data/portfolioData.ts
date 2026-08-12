export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
  current?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Generative AI' | 'Machine Learning' | 'Data Analytics' | 'Full Stack';
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  skills: string;
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  affiliation?: string;
  period: string;
  rectifiedNotice?: string;
  cgpa?: string;
  details: string[];
}

export const PERSONAL_INFO = {
  name: "Jyotiraditya Khatua",
  role: "Generative AI Engineer",
  tagline: "Building autonomous AI Agents, RAG pipelines, and intelligent LLM workflows.",
  email: "jyotiraditya20122004@gmail.com",
  phone: "+91 9625188029",
  location: "Hoshiyarpur, Sector 51, Noida, Uttar Pradesh, India",
  github: "https://github.com/Jyotir2004",
  linkedin: "https://linkedin.com/in/Jyotiraditya-Khatua",
  status: "Open for Generative AI & AI/ML Engineer Roles",
  rectifiedPassout: "2022 – 2026", // Rectified pass out batch
  passoutYear: "2026",
  bio: "Generative AI Engineer specializing in Python backend development, LLMs, RAG, AI Agents, and Machine Learning. Experienced in building and deploying production-grade intelligent AI applications using FastAPI, LangChain, LangGraph, OpenAI/Gemini APIs, Vector Databases, and PyTorch."
};

export const RECTIFIED_PASSOUT_NOTICE = {
  status: "RECTIFIED & UPDATED",
  originalIssue: "Previous document noted 2026-27 pass out date",
  correctedBatch: "2022 – 2026 (Graduation Year: 2026)",
  degree: "Bachelor of Technology in Computer Science & Engineering (Specialization in AI & ML)",
  institution: "Mahatma Gandhi Mission's College of Engineering & Technology, Noida",
  university: "Dr. A. P. J. Abdul Kalam Technical University (AKTU)"
};

export const EDUCATION_LIST: Education[] = [
  {
    degree: "Bachelor of Technology (CSE Specialization in AI & ML)",
    institution: "Mahatma Gandhi Mission's College of Engineering & Technology, Noida",
    affiliation: "Affiliated with Dr. A. P. J. Abdul Kalam Technical University (AKTU)",
    period: "2022 – 2026",
    rectifiedNotice: "Rectified Pass-Out Batch: 2022–2026 (Passing Year: 2026)",
    cgpa: "7.5 / 10",
    details: [
      "Specialized curriculum in Artificial Intelligence, Machine Learning, Deep Learning, Data Structures & Algorithms.",
      "Hands-on research and practical implementation in LangChain, RAG architectures, and multi-agent systems.",
      "Maintainer of AI projects with hands-on computer vision and natural language processing pipelines."
    ]
  },
  {
    degree: "Secondary Senior School (Class XII)",
    institution: "Adarsh Public School",
    period: "2022 – 2023",
    details: [
      "Focused on Mathematics, Physics, Chemistry, and Computer Science fundamentals.",
      "Built early interest in software logic and computational problem solving."
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "mobcoder",
    role: "AI/ML Engineer Trainee",
    company: "Mobcoder",
    location: "Noida, UP",
    period: "Mar 2026 – Present",
    type: "Full-Time Trainee",
    current: true,
    description: [
      "Engineered AI-powered backend applications utilizing Python, FastAPI, Large Language Models (LLMs), RAG, and autonomous AI Agents.",
      "Architected intelligent multi-agent workflows and LangChain/LangGraph pipelines integrated with OpenAI & Gemini APIs.",
      "Optimized vector search indexing using ChromaDB and FAISS for semantic document retrieval and contextual query answering."
    ],
    skills: ["Python", "FastAPI", "LangChain", "LangGraph", "OpenAI API", "Gemini API", "Vector Databases", "RAG", "AI Agents"]
  },
  {
    id: "appwars",
    role: "Data Science Intern",
    company: "Appwars Technologies",
    location: "Online",
    period: "Sep 2025 – Present",
    type: "Internship",
    current: true,
    description: [
      "Applied Python, SQL, Machine Learning, NLP, and Generative AI techniques to construct predictive models and business analytics engine.",
      "Designed dynamic analytical dashboards and Streamlit applications for hands-on LLM exploration and real-time visualization.",
      "Performed data cleansing, feature engineering, and statistical modeling on complex datasets."
    ],
    skills: ["Python", "SQL", "Machine Learning", "NLP", "Generative AI", "Streamlit", "Data Visualization", "Power BI"]
  },
  {
    id: "tanvika",
    role: "Data Analytics & Visualizations Intern",
    company: "Tanvika Software",
    location: "On-Site (Noida)",
    period: "Jun 2025 – Aug 2025",
    type: "Internship",
    current: false,
    description: [
      "Analyzed large-scale tabular datasets using Excel and Python; crafted interactive executive dashboards with Matplotlib, Seaborn, and Power BI.",
      "Architected relational data models and collaborated across engineering teams to deliver high-impact data-driven metrics."
    ],
    skills: ["Excel", "Python", "Power BI", "Matplotlib", "Seaborn", "Data Modeling", "ETL Pipelines"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "medsync",
    title: "MedSync — AI Healthcare Assistant",
    subtitle: "Autonomous Patient Triage, Medical RAG & Agentic Scheduling",
    category: "Generative AI",
    featured: true,
    image: "/medsync.png",
    description: "Production-oriented AI Healthcare Assistant designed for clinical triage, medical knowledge querying using Retrieval-Augmented Generation (RAG), and multi-step automated appointment booking via AI Agents.",
    highlights: [
      "Built with FastAPI backend and LangChain/OpenAI LLM orchestration.",
      "Integrated FAISS/ChromaDB vector store for instant semantic medical document search.",
      "Implemented autonomous agentic tool-calling for doctor schedule lookups and slot reservations."
    ],
    techStack: ["Python", "FastAPI", "OpenAI API", "RAG", "AI Agents", "ChromaDB", "LangChain"],
    githubUrl: "https://github.com/Jyotir2004",
    demoUrl: "https://github.com/Jyotir2004"
  },
  {
    id: "travel-planner",
    title: "Multi-Agent AI Travel Planner",
    subtitle: "LangGraph-Powered Multi-Agent Itinerary Orchestration",
    category: "Generative AI",
    featured: true,
    image: "/travel_planner.png",
    description: "Sophisticated multi-agent system built on LangGraph where specialized AI agents (Destination Researcher, Flight/Hotel Specialist, Activity Guide, Budget Manager) collaborate asynchronously to craft customized travel itineraries.",
    highlights: [
      "State-graph workflow architecture using LangGraph and Python.",
      "Dynamic weather, activity, and budget constraint balancing across sub-agents.",
      "Seamless prompt orchestration with persistent state memory."
    ],
    techStack: ["Python", "LangGraph", "LangChain", "OpenAI API", "FastAPI", "Tavily API"],
    githubUrl: "https://github.com/Jyotir2004",
    demoUrl: "https://github.com/Jyotir2004"
  },
  {
    id: "sentiment-analyzer",
    title: "AI Sentiment Analysis Suite",
    subtitle: "Real-time Text & Dataset Classification Platform",
    category: "Machine Learning",
    featured: true,
    description: "Interactive Streamlit application offering single-text sentiment detection, bulk CSV dataset batch analysis, and historical trend tracking built with custom NLP models.",
    highlights: [
      "Supports real-time text input inference and file upload processing.",
      "Provides sentiment score breakdown (Positive, Neutral, Negative) with dynamic plotting.",
      "Integrated history tracking database for past prediction audit trail."
    ],
    techStack: ["Python", "Streamlit", "Scikit-learn", "NLP", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/Jyotir2004"
  },
  {
    id: "library-system",
    title: "Full-Stack Library Management System",
    subtitle: "Automated Book Tracking, User Roles & Transaction Logging",
    category: "Full Stack",
    featured: false,
    description: "Enterprise resource tracking platform built with Python, MySQL, and Streamlit to efficiently manage book inventories, active member borrowing limits, fine calculations, and audit logs.",
    highlights: [
      "Relational schema design in MySQL with normalized foreign keys and indexes.",
      "Interactive Streamlit admin dashboard for real-time stock monitoring.",
      "Automated transaction validation and overdue notification logic."
    ],
    techStack: ["Python", "MySQL", "Streamlit", "SQL", "Data Modeling"],
    githubUrl: "https://github.com/Jyotir2004"
  },
  {
    id: "face-detection-attendance",
    title: "Face Recognition Attendance System",
    subtitle: "Deep Neural Network (CNN) Automated Attendance Logger",
    category: "Machine Learning",
    featured: false,
    description: "Computer vision solution utilizing OpenCV and Deep Convolutional Neural Networks (CNN) to detect student faces in real-time, matching features against registered student databases.",
    highlights: [
      "Real-time video feed face detection using OpenCV cascade & CNN embeddings.",
      "Automated attendance spreadsheet and log updating with timestamp verification.",
      "Minimizes manual errors and proxy attendance with anti-spoofing techniques."
    ],
    techStack: ["Python", "OpenCV", "CNN", "PyTorch", "Deep Learning"],
    githubUrl: "https://github.com/Jyotir2004"
  },
  {
    id: "ecommerce-dashboard",
    title: "Interactive E-Commerce Sales Insights",
    subtitle: "Power BI & Excel Executive Analytics Dashboard",
    category: "Data Analytics",
    featured: false,
    description: "Business intelligence dashboard analyzing multi-channel e-commerce sales, regional performance metrics, customer order behavior, and dynamic revenue forecasts.",
    highlights: [
      "Features drill-through navigation, dynamic tooltips, and real-time metric cards.",
      "Data transformation and ETL using Power Query and Python.",
      "Delivered strategic sales recommendations based on category breakdown."
    ],
    techStack: ["Power BI", "Excel", "DAX", "Power Query", "Python"],
    githubUrl: "https://github.com/Jyotir2004"
  },
  {
    id: "iris-knn-classifier",
    title: "Iris Flower KNN Classification Engine",
    subtitle: "Machine Learning Model with EDA & Boundary Plotting",
    category: "Machine Learning",
    featured: false,
    description: "End-to-end classification model evaluating Iris species using K-Nearest Neighbors (KNN), complete with feature scaling, cross-validation, and confusion matrix analysis.",
    highlights: [
      "Comprehensive exploratory data analysis (EDA) with Seaborn pairplots.",
      "Hyperparameter tuning for optimal k-neighbors decision boundaries.",
      "Evaluated model precision, recall, and F1-score performance metrics."
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/Jyotir2004"
  }
];

export const SKILLS = [
  {
    category: "Generative AI & Agentic AI",
    items: [
      { name: "Large Language Models (LLMs)", level: 95, highlight: true },
      { name: "Retrieval-Augmented Generation (RAG)", level: 95, highlight: true },
      { name: "Autonomous AI Agents", level: 90, highlight: true },
      { name: "Prompt Engineering & Tool Calling", level: 92, highlight: false },
      { name: "OpenAI / Gemini / GROQ APIs", level: 92, highlight: true }
    ]
  },
  {
    category: "AI Frameworks & Orchestration",
    items: [
      { name: "LangChain", level: 90, highlight: true },
      { name: "LangGraph", level: 88, highlight: true },
      { name: "LangFlow", level: 85, highlight: false },
      { name: "Vector Databases (FAISS, ChromaDB)", level: 90, highlight: true }
    ]
  },
  {
    category: "Machine Learning & Deep Learning",
    items: [
      { name: "Python", level: 95, highlight: true },
      { name: "Scikit-learn", level: 88, highlight: true },
      { name: "PyTorch & TensorFlow", level: 82, highlight: false },
      { name: "OpenCV & Computer Vision", level: 85, highlight: false },
      { name: "Natural Language Processing (NLP)", level: 88, highlight: true }
    ]
  },
  {
    category: "Backend & Web Development",
    items: [
      { name: "FastAPI", level: 92, highlight: true },
      { name: "REST APIs Architecture", level: 90, highlight: false },
      { name: "Streamlit Applications", level: 92, highlight: true },
      { name: "MySQL & SQL Querying", level: 88, highlight: false },
      { name: "Next.js / React (Modern UI)", level: 85, highlight: true }
    ]
  },
  {
    category: "Data Analytics & Tools",
    items: [
      { name: "Pandas & NumPy", level: 92, highlight: false },
      { name: "Power BI & Dashboarding", level: 88, highlight: false },
      { name: "Matplotlib & Seaborn", level: 86, highlight: false },
      { name: "Git & GitHub", level: 90, highlight: false },
      { name: "Cursor AI & Trae AI", level: 92, highlight: true }
    ]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "ibm-ai-agent",
    title: "Build an AI Agent — IBM SkillsBuild",
    issuer: "IBM SkillsBuild",
    skills: "Specialized in Agentic AI, Autonomous Systems & Multi-Agent Design",
    icon: "Bot"
  },
  {
    id: "ibm-ml-python",
    title: "Machine Learning with Python",
    issuer: "IBM Developer Skills Network",
    skills: "Certified in ML Algorithms, Predictive Modeling, Regression & Classification",
    icon: "Brain"
  },
  {
    id: "ibm-data-viz",
    title: "Data Analysis & Data Visualization with Python",
    issuer: "IBM Developer Skills Network",
    skills: "Statistical Modeling, ETL Data Wrangling & Interactive Storytelling",
    icon: "BarChart3"
  },
  {
    id: "intellipaat-python",
    title: "Python for Data Science",
    issuer: "Intellipaat",
    skills: "Professional excellence in Python programming, NumPy, Pandas & Data Manipulation",
    icon: "Code2"
  }
];

export const FAQ_AI_KNOWLEDGE = [
  {
    question: "What is your passing year / pass out batch?",
    answer: "My B.Tech (CSE - AI & ML) passing batch is 2022 – 2026 (Graduation Year: 2026). (Note: This has been rectified in my portfolio to correct any earlier document entry of 2026-27)."
  },
  {
    question: "What is your core technical expertise?",
    answer: "I specialize in Generative AI, RAG (Retrieval-Augmented Generation), Autonomous AI Agents using LangChain & LangGraph, Python backend APIs with FastAPI, Vector Databases (FAISS/ChromaDB), and Machine Learning."
  },
  {
    question: "Where are you currently working?",
    answer: "I am working as an AI/ML Engineer Trainee at Mobcoder (Noida), building AI backend applications, RAG pipelines, and intelligent AI workflows."
  },
  {
    question: "What major projects have you built?",
    answer: "Key projects include MedSync (AI Healthcare Assistant with RAG & Agentic scheduling), Multi-Agent AI Travel Planner (LangGraph state workflows), AI Sentiment Analysis Suite, and real-time Face Detection Attendance System."
  }
];
