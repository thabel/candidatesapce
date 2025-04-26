"use client"

import { useState, useEffect } from "react"
import type React from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { User, GraduationCap, Briefcase, Code, Award, Languages, Download, Trash2 } from "lucide-react"
import { pdf } from "@react-pdf/renderer"
import { saveAs } from "file-saver"
import CVDocument from "@/app/test/CvDocument"
import type { CVData } from "@/lib/utils"

interface CreateCvFormProps {
    initialData?: CVData
    setData?: React.Dispatch<React.SetStateAction<CVData>>
}

export default function CreateCvForm({ initialData, setData }: CreateCvFormProps) {
    // Initialize state with either provided data or default values
    const defaultData: CVData = {
        fullName: "",
        jobTitle: "",
        email: "",
        phone: "",
        location: "",
        summary: "",
        education: [
            {
                school: "",
                degree: "",
                year: "",
                achievements: "",
            },
        ],
        skills: [],
        softSkills: [],
        languages: [
            {
                name: "",
                proficiency: "",
            },
        ],
        experience: [
            {
                company: "",
                role: "",
                duration: "",
                description: "",
                achievements: [],
            },
        ],
        certifications: [
            {
                name: "",
                issuer: "",
                year: "",
            },
        ],
    }

    const [formData, setFormData] = useState<CVData>(initialData || defaultData)

    // Update parent component state whenever form data changes
    useEffect(() => {
        if (setData) {
            setData(formData)
        }
    }, [formData, setData])

    // Handle input changes for simple fields
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        const newFormData = {
            ...formData,
            [id]: value,
        }
        setFormData(newFormData)
    }

    // Handle changes for nested array items
    const handleArrayItemChange = (section: keyof CVData, index: number, field: string, value: string | string[]) => {
        const newFormData = { ...formData }
        const sectionData = [...(newFormData[section] as any[])]
        sectionData[index] = {
            ...sectionData[index],
            [field]: value,
        }
        newFormData[section] = sectionData
        setFormData(newFormData)
    }

    // Add new item to array sections
    const addArrayItem = (section: keyof CVData) => {
        const newFormData = { ...formData }
        let newItem: any = {}

        // Create appropriate empty item based on section
        switch (section) {
            case "education":
                newItem = { school: "", degree: "", year: "", achievements: "" }
                break
            case "experience":
                newItem = { company: "", role: "", duration: "", description: "", achievements: [] }
                break
            case "certifications":
                newItem = { name: "", issuer: "", year: "" }
                break
            case "languages":
                newItem = { name: "", proficiency: "" }
                break
            default:
                newItem = {}
        }

        newFormData[section] = [...(formData[section] as any[]), newItem]
        setFormData(newFormData)
    }

    // Remove item from array sections
    const removeArrayItem = (section: keyof CVData, index: number) => {
        const newFormData = { ...formData }
        const sectionData = [...(newFormData[section] as any[])]
        sectionData.splice(index, 1)
        newFormData[section] = sectionData
        setFormData(newFormData)
    }

    // Handle comma-separated skills input
    const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>, skillType: "skills" | "softSkills") => {
        const skillsArray = e.target.value
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean)

        const newFormData = {
            ...formData,
            [skillType]: skillsArray,
        }
        setFormData(newFormData)
    }

    // Handle experience achievements (comma-separated)
    const handleAchievementsChange = (index: number, value: string) => {
        const achievementsArray = value
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        handleArrayItemChange("experience", index, "achievements", achievementsArray)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    const downloadPdf = async () => {
        const fileName = `${formData.fullName.replace(/\s+/g, "_") || "cv"}_CV.pdf`
        const blob = await pdf(<CVDocument data={formData} />).toBlob()
        saveAs(blob, fileName)
    }

    return (
        <form onSubmit={handleSubmit} className="overflow-y-auto max-h-screen pb-8 pr-4">
            <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="personal">
                {/* Personal Information Section */}
                <AccordionItem value="personal" className="border rounded-lg shadow-sm">
                    <AccordionTrigger className="px-4 py-3 hover:bg-slate-50 rounded-t-lg data-[state=open]:rounded-b-none">
                        <div className="flex items-center gap-2">
                            <User className="h-5 w-5 text-slate-600" />
                            <span className="font-semibold">Personal Information</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id="fullName" placeholder="John Doe" value={formData.fullName} onChange={handleInputChange} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="jobTitle">Job Title</Label>
                                <Input
                                    id="jobTitle"
                                    placeholder="Software Engineer"
                                    value={formData.jobTitle}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input id="phone" placeholder="+1 (555) 123-4567" value={formData.phone} onChange={handleInputChange} />
                            </div>
                            <div className="grid gap-2 md:col-span-2">
                                <Label htmlFor="location">Location</Label>
                                <Input
                                    id="location"
                                    placeholder="New York, NY"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="grid gap-2 md:col-span-2">
                                <Label htmlFor="summary">Professional Summary</Label>
                                <Textarea
                                    id="summary"
                                    placeholder="A brief summary of your professional background and goals..."
                                    className="min-h-[100px]"
                                    value={formData.summary}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Education Section */}
                <AccordionItem value="education" className="border rounded-lg shadow-sm">
                    <AccordionTrigger className="px-4 py-3 hover:bg-slate-50 rounded-t-lg data-[state=open]:rounded-b-none">
                        <div className="flex items-center gap-2">
                            <GraduationCap className="h-5 w-5 text-slate-600" />
                            <span className="font-semibold">Education</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-2">
                        {formData.education.map((edu, index) => (
                            <div key={`edu-${index}`} className="grid gap-4 mb-6 relative">
                                {index > 0 && (
                                    <div className="absolute -top-2 -right-2">
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 rounded-full bg-red-50 hover:bg-red-100 text-red-500"
                                            onClick={() => removeArrayItem("education", index)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor={`school-${index}`}>Institution</Label>
                                        <Input
                                            id={`school-${index}`}
                                            placeholder="Harvard University"
                                            value={edu.school}
                                            onChange={(e) => handleArrayItemChange("education", index, "school", e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor={`degree-${index}`}>Degree</Label>
                                        <Input
                                            id={`degree-${index}`}
                                            placeholder="Bachelor of Science"
                                            value={edu.degree}
                                            onChange={(e) => handleArrayItemChange("education", index, "degree", e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor={`year-${index}`}>Year</Label>
                                        <Input
                                            id={`year-${index}`}
                                            placeholder="2018 - 2022"
                                            value={edu.year}
                                            onChange={(e) => handleArrayItemChange("education", index, "year", e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor={`achievements-${index}`}>Achievements</Label>
                                        <Input
                                            id={`achievements-${index}`}
                                            placeholder="Graduated with honors"
                                            value={edu.achievements}
                                            onChange={(e) => handleArrayItemChange("education", index, "achievements", e.target.value)}
                                        />
                                    </div>
                                </div>
                                {index < formData.education.length - 1 && <hr className="my-4" />}
                            </div>
                        ))}
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="w-full md:w-auto"
                            onClick={() => addArrayItem("education")}
                        >
                            + Add Another Education
                        </Button>
                    </AccordionContent>
                </AccordionItem>

                {/* Work Experience Section */}
                <AccordionItem value="experience" className="border rounded-lg shadow-sm">
                    <AccordionTrigger className="px-4 py-3 hover:bg-slate-50 rounded-t-lg data-[state=open]:rounded-b-none">
                        <div className="flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-slate-600" />
                            <span className="font-semibold">Work Experience</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-2">
                        {formData.experience.map((exp, index) => (
                            <div key={`exp-${index}`} className="grid gap-4 mb-6 relative">
                                {index > 0 && (
                                    <div className="absolute -top-2 -right-2">
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 rounded-full bg-red-50 hover:bg-red-100 text-red-500"
                                            onClick={() => removeArrayItem("experience", index)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor={`company-${index}`}>Company</Label>
                                        <Input
                                            id={`company-${index}`}
                                            placeholder="Google"
                                            value={exp.company}
                                            onChange={(e) => handleArrayItemChange("experience", index, "company", e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor={`role-${index}`}>Position</Label>
                                        <Input
                                            id={`role-${index}`}
                                            placeholder="Senior Developer"
                                            value={exp.role}
                                            onChange={(e) => handleArrayItemChange("experience", index, "role", e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor={`duration-${index}`}>Duration</Label>
                                        <Input
                                            id={`duration-${index}`}
                                            placeholder="2020 - Present"
                                            value={exp.duration}
                                            onChange={(e) => handleArrayItemChange("experience", index, "duration", e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor={`description-${index}`}>Description</Label>
                                        <Input
                                            id={`description-${index}`}
                                            placeholder="Brief job description"
                                            value={exp.description}
                                            onChange={(e) => handleArrayItemChange("experience", index, "description", e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-2 md:col-span-2">
                                        <Label htmlFor={`achievements-exp-${index}`}>Achievements (comma separated)</Label>
                                        <Textarea
                                            id={`achievements-exp-${index}`}
                                            placeholder="Increased sales by 20%, Reduced costs by 15%, Led team of 5 developers"
                                            className="min-h-[100px]"
                                            value={exp.achievements?.join(", ")}
                                            onChange={(e) => handleAchievementsChange(index, e.target.value)}
                                        />
                                    </div>
                                </div>
                                {index < formData.experience.length - 1 && <hr className="my-4" />}
                            </div>
                        ))}
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="w-full md:w-auto"
                            onClick={() => addArrayItem("experience")}
                        >
                            + Add Another Experience
                        </Button>
                    </AccordionContent>
                </AccordionItem>

                {/* Skills Section */}
                <AccordionItem value="skills" className="border rounded-lg shadow-sm">
                    <AccordionTrigger className="px-4 py-3 hover:bg-slate-50 rounded-t-lg data-[state=open]:rounded-b-none">
                        <div className="flex items-center gap-2">
                            <Code className="h-5 w-5 text-slate-600" />
                            <span className="font-semibold">Skills</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-2">
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="technicalSkills">Technical Skills</Label>
                                <Input
                                    id="technicalSkills"
                                    placeholder="React, Python, SQL, AWS..."
                                    value={formData.skills.join(", ")}
                                    onChange={(e) => handleSkillsChange(e, "skills")}
                                />
                                <p className="text-sm text-slate-500">Separate skills with commas</p>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="softSkills">Soft Skills</Label>
                                <Input
                                    id="softSkillsInput"
                                    placeholder="Leadership, Communication, Problem Solving..."
                                    value={formData.softSkills.join(", ")}
                                    onChange={(e) => handleSkillsChange(e, "softSkills")}
                                />
                                <p className="text-sm text-slate-500">Separate skills with commas</p>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Certifications Section */}
                <AccordionItem value="certifications" className="border rounded-lg shadow-sm">
                    <AccordionTrigger className="px-4 py-3 hover:bg-slate-50 rounded-t-lg data-[state=open]:rounded-b-none">
                        <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-slate-600" />
                            <span className="font-semibold">Certifications</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-2">
                        {formData.certifications.map((cert, index) => (
                            <div key={`cert-${index}`} className="grid gap-4 mb-6 relative">
                                {index > 0 && (
                                    <div className="absolute -top-2 -right-2">
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 rounded-full bg-red-50 hover:bg-red-100 text-red-500"
                                            onClick={() => removeArrayItem("certifications", index)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor={`certName-${index}`}>Certification Name</Label>
                                        <Input
                                            id={`certName-${index}`}
                                            placeholder="AWS Certified Solutions Architect"
                                            value={cert.name}
                                            onChange={(e) => handleArrayItemChange("certifications", index, "name", e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor={`issuer-${index}`}>Issuing Organization</Label>
                                        <Input
                                            id={`issuer-${index}`}
                                            placeholder="Amazon Web Services"
                                            value={cert.issuer}
                                            onChange={(e) => handleArrayItemChange("certifications", index, "issuer", e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor={`year-cert-${index}`}>Year</Label>
                                        <Input
                                            id={`year-cert-${index}`}
                                            placeholder="2021"
                                            value={cert.year}
                                            onChange={(e) => handleArrayItemChange("certifications", index, "year", e.target.value)}
                                        />
                                    </div>
                                </div>
                                {index < formData.certifications.length - 1 && <hr className="my-4" />}
                            </div>
                        ))}
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="w-full md:w-auto"
                            onClick={() => addArrayItem("certifications")}
                        >
                            + Add Another Certification
                        </Button>
                    </AccordionContent>
                </AccordionItem>

                {/* Languages Section */}
                <AccordionItem value="languages" className="border rounded-lg shadow-sm">
                    <AccordionTrigger className="px-4 py-3 hover:bg-slate-50 rounded-t-lg data-[state=open]:rounded-b-none">
                        <div className="flex items-center gap-2">
                            <Languages className="h-5 w-5 text-slate-600" />
                            <span className="font-semibold">Languages</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-2">
                        {formData.languages.map((lang, index) => (
                            <div key={`lang-${index}`} className="grid gap-4 mb-6 relative">
                                {index > 0 && (
                                    <div className="absolute -top-2 -right-2">
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 rounded-full bg-red-50 hover:bg-red-100 text-red-500"
                                            onClick={() => removeArrayItem("languages", index)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor={`language-${index}`}>Language</Label>
                                        <Input
                                            id={`language-${index}`}
                                            placeholder="English"
                                            value={lang.name}
                                            onChange={(e) => handleArrayItemChange("languages", index, "name", e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor={`proficiency-${index}`}>Proficiency</Label>
                                        <Input
                                            id={`proficiency-${index}`}
                                            placeholder="Native"
                                            value={lang.proficiency}
                                            onChange={(e) => handleArrayItemChange("languages", index, "proficiency", e.target.value)}
                                        />
                                    </div>
                                </div>
                                {index < formData.languages.length - 1 && <hr className="my-4" />}
                            </div>
                        ))}
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="w-full md:w-auto"
                            onClick={() => addArrayItem("languages")}
                        >
                            + Add Another Language
                        </Button>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <div className="mt-8 flex justify-end gap-4">
                <Button type="button" variant="outline">
                    Save Draft
                </Button>
                <Button type="button" className="gap-2" onClick={downloadPdf}>
                    <Download className="h-4 w-4" />
                    Download CV
                </Button>
            </div>
        </form>
    )
}
