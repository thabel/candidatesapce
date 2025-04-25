import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const cvData:CVData = {
  fullName: "KUADJOVI Thabel",
  jobTitle: "AI & Cybersecurity Engineering Student",
  email: "thabelkodjo@gmail.com",
  phone: "+212 643683602",
  location: "Morocco",
  summary:
      "Final-year engineering student specializing in Artificial Intelligence, Big Data, and Cybersecurity. Experienced in developing intelligent systems, machine learning pipelines, and cloud-based applications. Passionate about logical reasoning, security of cloud infrastructures, and building impactful tech for underserved languages.",
  education: [
    {
      school: "HESTIM Engineering School, Morocco",
      degree: "Engineering in Big Data and Artificial Intelligence",
      year: "2020 - 2025",
      achievements:
          "Final-year project on Bayesian inference over virtual brain models using probabilistic programming. Studied CSR, secure systems, and ML/DL models.",
    },
    {
      school: "HESTIM Engineering School, Morocco",
      degree: "Master’s in Cybersecurity",
      year: "2023 - 2025",
      achievements:
          "Focused on cloud security, ISO/IEC 27001, and secure software design. Pursued practical coursework in system protection and information governance.",
    },
  ],
  skills: [
    "Python",
    "Java",
    "JavaScript",
    "React.js",
    "Flask",
    "Linux System Administration",
    "MySQL",
    "MongoDB",
    "Machine Learning",
    "Cybersecurity",
    "Cloud Computing (AWS)",
    "Data Visualization",
    "Big Data",
    "API Design",
  ],
  softSkills: [
    "Team Leadership",
    "Communication",
    "Problem Solving",
    "Adaptability",
    "Time Management",
    "Conflict Resolution",
    "Mentoring",
    "Critical Thinking",
  ],
  languages: [
    { name: "English", proficiency: "Native" },
    { name: "French", proficiency: "Basic" },
  ],
  experience: [
    {
      company: "RHOBS SAS (Internship)",
      role: "Data Analyst Intern",
      duration: "March 2025 - Present",
      description:
          "Developed an interactive HR BI dashboard for tracking indicators over time. Integrated modules for payroll and cloud management.",
      achievements: [
        "Built AWS-integrated data dashboard with full backend support",
        "Tracked HR indicators using advanced filters and visualizations",
        "Implemented secure authentication for internal use",
      ],
    },
    {
      company: "Vinea Company (Academic Project)",
      role: "Dashboard Developer",
      duration: "2024",
      description:
          "Created a business dashboard to manage new suppliers, products, and sales using modern front-end and back-end tools.",
      achievements: [
        "Designed intuitive UI with real-time updates",
        "Integrated analytics and metrics display for business users",
      ],
    },
    {
      company: "Justine Works (Independent Project)",
      role: "Machine Learning Developer",
      duration: "2024 - Present",
      description:
          "Optimized matrix multiplication kernels for LLaMA models on ARM and Intel CPUs. Explored integration of llamafile with enhanced performance tuning.",
      achievements: [
        "Enhanced model speed through kernel optimization",
        "Benchmarked performance across multiple CPU architectures",
      ],
    },
  ],
  certifications: [
    {
      name: "ISO/IEC 27001:2022 (Self-study)",
      issuer: "Internal Study",
      year: "2024",
    },
    {
      name: "Python for Data Science",
      issuer: "Coursera (or similar)",
      year: "2023",
    },
  ],
};
export {cvData};

export interface CVData {
  fullName: string
  jobTitle: string
  email: string
  phone: string
  location: string
  summary: string
  education: {
    school: string
    degree: string
    year: string
    achievements?: string
  }[]
  skills: string[]
  softSkills: string[]
  languages: {
    name: string
    proficiency: string
  }[]
  experience: {
    company: string
    role: string
    duration: string
    description: string
    achievements?: string[]
  }[]
  certifications?: {
    name: string
    issuer: string
    year: string
  }[]
}