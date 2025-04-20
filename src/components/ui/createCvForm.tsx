"use client"

import type React from "react"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { User, GraduationCap, Briefcase, Code, Award, Languages, Download } from "lucide-react"
import {cvPdfPage, Quixote} from "@/app/test/Quiosque";
import {pdf} from "@react-pdf/renderer";
import { saveAs } from 'file-saver';



export default function CreateCvForm() {
    const [formData, setFormData] = useState({
        // Form data will be stored here
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log("Form submitted:", formData)
    }
    const downloadPdf = async () => {
        const fileName = 'test.pdf';
        const blob = await pdf(<cvPdfPage />).toBlob();
        saveAs(blob, fileName);
    };


    return (

                <form onSubmit={handleSubmit}>
                    <Accordion type="single" collapsible className="w-full space-y-4">
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
                                        <Input id="fullName" placeholder="John Doe" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="jobTitle">Job Title</Label>
                                        <Input id="jobTitle" placeholder="Software Engineer" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input id="phone" placeholder="+1 (555) 123-4567" />
                                    </div>
                                    <div className="grid gap-2 md:col-span-2">
                                        <Label htmlFor="location">Location</Label>
                                        <Input id="location" placeholder="New York, NY" />
                                    </div>
                                    <div className="grid gap-2 md:col-span-2">
                                        <Label htmlFor="summary">Professional Summary</Label>
                                        <Textarea
                                            id="summary"
                                            placeholder="A brief summary of your professional background and goals..."
                                            className="min-h-[100px]"
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
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="school">Institution</Label>
                                            <Input id="school" placeholder="Harvard University" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="degree">Degree</Label>
                                            <Input id="degree" placeholder="Bachelor of Science" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="fieldOfStudy">Field of Study</Label>
                                            <Input id="fieldOfStudy" placeholder="Computer Science" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="graduationDate">Graduation Date</Label>
                                            <Input id="graduationDate" placeholder="May 2022" />
                                        </div>
                                    </div>
                                    <Button type="button" variant="outline" size="sm" className="w-full md:w-auto">
                                        + Add Another Education
                                    </Button>
                                </div>
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
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="company">Company</Label>
                                            <Input id="company" placeholder="Google" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="position">Position</Label>
                                            <Input id="position" placeholder="Senior Developer" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="startDate">Start Date</Label>
                                            <Input id="startDate" placeholder="January 2020" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="endDate">End Date</Label>
                                            <Input id="endDate" placeholder="Present" />
                                        </div>
                                        <div className="grid gap-2 md:col-span-2">
                                            <Label htmlFor="jobDescription">Description</Label>
                                            <Textarea
                                                id="jobDescription"
                                                placeholder="Describe your responsibilities and achievements..."
                                                className="min-h-[100px]"
                                            />
                                        </div>
                                    </div>
                                    <Button type="button" variant="outline" size="sm" className="w-full md:w-auto">
                                        + Add Another Experience
                                    </Button>
                                </div>
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
                                        <Input id="technicalSkills" placeholder="React, Python, SQL, AWS..." />
                                        <p className="text-sm text-slate-500">Separate skills with commas</p>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="softSkills">Soft Skills</Label>
                                        <Input id="softSkills" placeholder="Leadership, Communication, Problem Solving..." />
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
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="certName">Certification Name</Label>
                                            <Input id="certName" placeholder="AWS Certified Solutions Architect" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="issuer">Issuing Organization</Label>
                                            <Input id="issuer" placeholder="Amazon Web Services" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="issueDate">Issue Date</Label>
                                            <Input id="issueDate" placeholder="June 2021" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="expDate">Expiration Date (if any)</Label>
                                            <Input id="expDate" placeholder="June 2024" />
                                        </div>
                                    </div>
                                    <Button type="button" variant="outline" size="sm" className="w-full md:w-auto">
                                        + Add Another Certification
                                    </Button>
                                </div>
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
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="language">Language</Label>
                                            <Input id="language" placeholder="English" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="proficiency">Proficiency</Label>
                                            <Input id="proficiency" placeholder="Native" />
                                        </div>
                                    </div>
                                    <Button type="button" variant="outline" size="sm" className="w-full md:w-auto">
                                        + Add Another Language
                                    </Button>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="mt-8 flex justify-end gap-4">
                        <Button type="submit" className="gap-2" onClick={downloadPdf}>
                            <Download className="h-4 w-4" />
                            Download CV
                        </Button>
                    </div>
                </form>
    )
}
