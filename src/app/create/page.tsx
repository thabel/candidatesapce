"use client";
import {Fragment, useState} from "react";
import TopHeader from "@/components/ui/TopHeader";
import CreateCvForm from "@/components/ui/createCvForm";
import CVRender from "@/components/ui/RenderCV";
import Footer from "@/components/ui/Footer";
import {CVData} from "@/lib/utils";
import {Resume} from "@/components/Resume";
import {Provider} from "react-redux";
import {store} from "@/lib/redux/store";

export default function CreateCV() {
    const [data, setData] = useState<CVData>(
        {
        fullName: "John Doe",
        jobTitle: "Senior Software Engineer",
        email: "john@example.com",
        phone: "+123456789",
        location: "San Francisco, CA",
        summary:
            "Experienced software engineer with 5+ years of experience in building scalable web applications. Passionate about clean code, user experience, and solving complex problems.",
        education: [
            {
                school: "Massachusetts Institute of Technology",
                degree: "B.Sc. in Computer Science",
                year: "2016 - 2020",
                achievements: "Graduated with honors. Research focus on machine learning algorithms.",
            },
        ],
        skills: ["React", "Node.js", "Python", "TypeScript", "GraphQL", "AWS"],
        softSkills: ["Team Leadership", "Communication", "Problem Solving", "Adaptability","Critical Thinking"],
        languages: [
            { name: "English", proficiency: "Native" },
            { name: "German", proficiency: "Basic" },
        ],
        experience: [
            {
                company: "Google",
                role: "Senior Software Engineer",
                duration: "2022 - Present",
                description: "Lead developer for web search algorithms.",
                achievements: [
                    "Redesigned core search algorithm improving response time by 40%",
                    "Led a team of 5 engineers to implement new features",
                ],
            },
        ],
        certifications: [
            {
                name: "AWS Certified Solutions Architect",
                issuer: "Amazon Web Services",
                year: "2021",
            },
        ],
    })
   return (
  <Provider store={store}>
    <div className="grid grid-cols-2 gap-8 h-screen mx-10 my-6">
      {/* Scrollable Form */}
      <div className="overflow-y-scroll pr-4">
        <CreateCvForm initialData={data} setData={setData} />
      </div>

      {/* Fixed Resume Preview */}
      <div className="sticky top-6 ">
        <Resume />
      </div>
    </div>
  </Provider>
);

}