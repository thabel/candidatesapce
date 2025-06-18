"use client"
import { CVData } from "@/lib/utils"
import {
    User,
    Mail,
    Phone,
    MapPin,
    GraduationCap,
    Briefcase,
    Code,
    Calendar,
    Building,
    ExternalLink,
    Heart,
    Globe,
} from "lucide-react"

export default function CVRender({data}:{data:CVData}) {


    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto ">
            {/* Header */}
            <div
                className="text-white px-8 py-6"
                style={{
                    background: "linear-gradient(to right, #64748b, #1e293b)", // slate-500 to slate-800
                    color: "white",
                    padding: "1.5rem 2rem", // Tailwind's py-6 px-8
                }}
            >
                <h1 className="text-3xl font-bold tracking-tight">{data.fullName}</h1>
                <p className="text-lg text-slate-200 mt-1">{data.jobTitle}</p>

                <div className="grid grid-cols-1 2xl:grid-cols-3 gap-3 mt-4 text-sm">
                    <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-slate-300" />
                        <span>{data.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-slate-300" />
                        <span>{data.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-slate-300" />
                        <span>{data.location}</span>
                    </div>
                </div>
            </div>

            <div className="p-8 space-y-8">
                {/* Summary Section */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <User className="h-5 w-5 text-slate-700" />
                        <h2 className="text-xl font-bold text-slate-800">Professional Summary</h2>
                    </div>
                    <div className="pl-7">
                        <p className="text-slate-600 leading-relaxed">{data.summary}</p>
                    </div>
                </section>

                {/* Experience Section */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <Briefcase className="h-5 w-5 text-slate-700" />
                        <h2 className="text-xl font-bold text-slate-800">Professional Experience</h2>
                    </div>

                    <div className="space-y-6 pl-7">
                        {data.experience?.map((exp, index) => (
                            <div key={index} className="relative">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-slate-600">
                                            <Building className="h-4 w-4" />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-slate-500 text-sm mt-1 md:mt-0">
                                        <Calendar className="h-3 w-3" />
                                        <span>{exp.duration}</span>
                                    </div>
                                </div>
                                <p className="text-slate-600 mb-2">{exp.description}</p>
                                {exp.achievements && (
                                    <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                )}
                                {index < data.experience.length - 1 && <div className="border-b border-slate-200 mt-4"></div>}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <GraduationCap className="h-5 w-5 text-slate-700" />
                        <h2 className="text-xl font-bold text-slate-800">Education</h2>
                    </div>

                    <div className="space-y-4 pl-7">
                        {data.education?.map((edu, index) => (
                            <div key={index} className="relative">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                                    <h3 className="text-lg font-semibold text-slate-800">{edu.degree}</h3>
                                    <div className="flex items-center gap-1 text-slate-500 text-sm">
                                        <Calendar className="h-3 w-3" />
                                        <span>{edu.year}</span>
                                    </div>
                                </div>
                                <p className="text-slate-600">{edu.school}</p>
                                {edu.achievements && <p className="text-sm text-slate-500 mt-1">{edu.achievements}</p>}
                                {index < data.education.length - 1 && <div className="border-b border-slate-200 mt-3"></div>}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <Code className="h-5 w-5 text-slate-700" />
                        <h2 className="text-xl font-bold text-slate-800">Technical Skills</h2>
                    </div>

                    <div className="pl-7">
                        <div className="flex flex-wrap gap-2">
                            {data.skills?.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md text-sm font-medium hover:bg-slate-200 transition-colors"
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Soft Skills Section */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <Heart className="h-5 w-5 text-slate-700" />
                        <h2 className="text-xl font-bold text-slate-800">Soft Skills</h2>
                    </div>

                    <div className="pl-7">
                        <div className="flex flex-wrap gap-2">
                            {data.softSkills?.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 bg-pink-50 text-slate-700 rounded-md text-sm font-medium hover:bg-pink-100 transition-colors"
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Languages Section */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <Globe className="h-5 w-5 text-slate-700" />
                        <h2 className="text-xl font-bold text-slate-800">Languages</h2>
                    </div>

                    <div className="pl-7">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {data.languages?.map((language, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <span className="font-medium text-slate-700">{language.name}</span>
                                    <span className="text-sm bg-slate-100 px-2 py-1 rounded text-slate-600">{language.proficiency}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Certifications Section */}
                {data.certifications && (
                    <section>
                        <div className="flex items-center gap-2 mb-4">
                            <ExternalLink className="h-5 w-5 text-slate-700" />
                            <h2 className="text-xl font-bold text-slate-800">Certifications</h2>
                        </div>

                        <div className="pl-7 space-y-3">
                            {data.certifications?.map((cert, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-slate-800">{cert.name}</p>
                                        <p className="text-sm text-slate-500">{cert.issuer}</p>
                                    </div>
                                    <span className="text-sm text-slate-500">{cert.year}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            <div className="bg-slate-50 px-8 py-4 text-center text-sm text-slate-500 border-t border-slate-200">
                <p>References available upon request</p>
            </div>
        </div>
    )
}
