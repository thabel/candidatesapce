export const PX_PER_PT = 4 / 3;

// Reference: https://www.prepressure.com/library/paper-size/letter
// Letter size is commonly used in US & Canada, while A4 is the standard for rest of world.
export const LETTER_WIDTH_PT = 612;
const LETTER_HEIGHT_PT = 792;
export const LETTER_WIDTH_PX = LETTER_WIDTH_PT * PX_PER_PT;
export const LETTER_HEIGHT_PX = LETTER_HEIGHT_PT * PX_PER_PT;

// Reference: https://www.prepressure.com/library/paper-size/din-a4
export const A4_WIDTH_PT = 595;
const A4_HEIGHT_PT = 842;
export const A4_WIDTH_PX = A4_WIDTH_PT * PX_PER_PT;
export const A4_HEIGHT_PX = A4_HEIGHT_PT * PX_PER_PT;

export const DEBUG_RESUME_PDF_FLAG: true | undefined = undefined; // use undefined to disable to deal with a weird error message
export const DEFAULT_FONT_COLOR = "#171717"; // text-neutral-800


export  const fakeResume = {
    profile: {
        fullName: "Thabel Kodjo",
        title: "Full Stack Developer",
        email: "thabelkodjo@gmail.com",
        phone: "+212 643683602",
        location: "Casablanca, Morocco",
        linkedin: "https://linkedin.com/in/thabel",
        github: "https://github.com/thabel",
        summary: "Passionate software engineer with expertise in building modern web applications.",
    },
    workExperiences: [
        {
            jobTitle: "Full Stack Developer",
            company: "E-Commerce Solutions Ltd.",
            location: "Casablanca",
            startDate: "2023-01",
            endDate: "2025-06",
            descriptions: [
                "Developed scalable web applications using React and Spring Boot.",
                "Integrated third-party APIs for payment and logistics.",
                "Led a team of 3 junior developers."
            ]
        },
        {
            jobTitle: "Software Engineer Intern",
            company: "TechCorp",
            location: "Rabat",
            startDate: "2022-06",
            endDate: "2022-12",
            descriptions: [
                "Worked on internal tools with JavaFX and FXML.",
                "Implemented CI/CD pipelines with GitHub Actions."
            ]
        }
    ],
    educations: [
        {
            school: "Université Internationale de Casablanca",
            degree: "Double Degree in Computer Science and Cybersecurity",
            startDate: "2020-09",
            endDate: "2024-06",
            descriptions: [
                "Specialized in AI, data science, and DevSecOps practices.",
                "Completed projects in master data management and chatbot development."
            ]
        }
    ],
    projects: [
        {
            name: "Chatbot RAG with Streamlit",
            descriptions: ["Developed an intelligent chatbot using Retrieval Augmented Generation (RAG) with a Streamlit interface."],
            technologies: ["Python", "Streamlit", "MongoDB", "LangChain"],
            link: "https://github.com/thabel/chatbot-rag",
            date: "2024-10",
            endDate: "2025-02"
        },
        {
            name: "HR Analytics Pipeline",
            descriptions: ["Built an analytics pipeline for HR data using MongoDB Aggregations."],
            technologies: ["MongoDB", "Python", "Pandas"],
            link: "https://github.com/thabel/hr-analytics-pipeline",
            startDate: "2025-03",
            endDate: "2025-06"
        }
    ],
    skills: {
        descriptions: [
            "Strong problem-solving and analytical skills.",
            "Agile certified and experienced in Scrum and Kanban.",
            "Proficient in modern frontend and backend frameworks."
        ],
        featuredSkills: [
            { skill: "React", rating: 5 },
            { skill: "Spring Boot", rating: 4 },
            { skill: "MongoDB", rating: 4 },
            { skill: "Python", rating: 5 },
            { skill: "Docker", rating: 4 }
        ]
    },
    custom: {
        descriptions: [
            "Open-source contributor.",
            "Organized local tech meetups."
        ]
    }
};
