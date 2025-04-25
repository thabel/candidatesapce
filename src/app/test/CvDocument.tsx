import {
    CertificationIcon,
    EducationIcon,
    EmailIcon,
    ExperienceIcon,
    MapMarkerIcon,
    PhoneIcon,
    ProfileIcon,
    CodeIcon, GlobeIcon, HeartIcon
} from "@/components/ui/Icons"
import { CVData } from "@/lib/utils"
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"


// Create styles - no external fonts or images to ensure reliability
const styles = StyleSheet.create({
    page: {
        padding: 0,
        paddingTop: 60, // 👈 Add top padding here
        fontSize: 10,
        color: "#2d3748",
        backgroundColor: "white",
        lineHeight: 1.4,
        fontFamily: "Helvetica",
        flexDirection: "column",
    },
    header: {
        backgroundColor: "#1a365d",
        paddingVertical: 24,
        paddingHorizontal: 32,
        color: "white",
        borderBottomWidth: 2,
        borderBottomColor: "#2b6cb0",
        flexDirection: "column",
        gap: 15,
        marginTop: -60,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    headerSubtitle: {
        fontSize: 13,
        color: "#cbd5e0",
    },
    contactInfo: {
        flexDirection: "column",
        gap: 10,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: "#2b6cb055",
    },
    contactItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    contactText: {
        fontSize: 9,
        color: "#ebf8ff",
    },
    content: {
        paddingHorizontal: 32,
        paddingVertical: 24,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: 28,
    },
    section: {
        flexDirection: "column",
        gap: 10,
    },
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#e2e8f0",
        paddingBottom: 4,
        gap: 8,
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#1a365d",
        textTransform: "uppercase",
    },
    paragraph: {
        fontSize: 10,
        color: "#4a5568",
        textAlign: "justify",
    },
    experienceItem: {
        flexDirection: "column",
        gap: 6,
    },
    experienceHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    experienceTitle: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#2d3748",
    },
    experienceCompany: {
        fontSize: 10,
        color: "#718096",
    },
    experienceDuration: {
        fontSize: 9,
        color: "#718096",
        alignSelf: "flex-start",
    },
    achievementsList: {
        paddingLeft: 8,
        flexDirection: "column",
        gap: 4,
    },
    achievementItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 4,
    },
    bullet: {
        fontSize: 10,
        color: "#4a5568",
    },
    achievementText: {
        fontSize: 10,
        color: "#4a5568",
        flex: 1,
    },
    educationItem: {
        flexDirection: "column",
        gap: 4,
    },
    educationHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    educationDegree: {
        fontSize: 11,
        fontWeight: "bold",
        color: "#2d3748",
    },
    educationYear: {
        fontSize: 9,
        color: "#718096",
    },
    educationSchool: {
        fontSize: 10,
        color: "#718096",
    },
    skillsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 6,
    },
    skillItem: {
        backgroundColor: "#f7fafc",
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 4,
        fontSize: 9,
        color: "#2d3748",
        borderWidth: 1,
        borderColor: "#e2e8f0",
    },
    softSkillItem: {
        backgroundColor: "#fdf2f8", // Light pink background
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 4,
        fontSize: 9,
        color: "#2d3748",
        borderWidth: 1,
        borderColor: "#fbcfe8", // Pink border
    },
    languageContainer: {
        flexDirection: "column",
        gap: 8,
    },
    languageItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    languageName: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#2d3748",
    },
    languageProficiency: {
        fontSize: 9,
        color: "#2d3748",
        backgroundColor: "#e6fffa", // Light teal background
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#b2f5ea", // Teal border
    },
    certificationItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 6,
    },
    certificationName: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#2d3748",
    },
    certificationIssuer: {
        fontSize: 9,
        color: "#718096",
    },
    certificationYear: {
        fontSize: 9,
        color: "#718096",
    },
    footer: {
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
        textAlign: "center",
    },
    footerText: {
        fontSize: 8,
        color: "#a0aec0",
    },
    pageNumber: {
        position: "absolute",
        bottom: 30,
        right: 40,
        fontSize: 8,
        color: "#a0aec0",
    },
    // Add a new style for the header on subsequent pages
    headerSubsequent: {
        backgroundColor: "#1a365d",
        paddingVertical: 24,
        paddingHorizontal: 32,
        color: "white",
        borderBottomWidth: 2,
        borderBottomColor: "#2b6cb0",
        flexDirection: "column",
        gap: 10,
        marginTop: 20, // Add margin for subsequent pages
    },
})

// Define CV data type

const CVDocument = ({ data }: { data: CVData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header - first page */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{data.fullName}</Text>
                <Text style={styles.headerSubtitle}>{data.jobTitle}</Text>

                <View style={styles.contactInfo}>
                    <View style={styles.contactItem}>
                        <EmailIcon />
                        <Text style={styles.contactText}>{data.email}</Text>
                    </View>
                    <View style={styles.contactItem}>
                        <PhoneIcon />
                        <Text style={styles.contactText}>{data.phone}</Text>
                    </View>
                    <View style={styles.contactItem}>
                        <MapMarkerIcon />
                        <Text style={styles.contactText}>{data.location}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.content}>
                {/* Professional Summary */}
                <View wrap={false} style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <ProfileIcon />
                        <Text style={styles.sectionTitle}>Profile</Text>
                    </View>
                    <Text style={styles.paragraph}>{data.summary}</Text>
                </View>

                {/* Professional Experience */}
                <View wrap={false} style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <ExperienceIcon />
                        <Text style={styles.sectionTitle}>Experience</Text>
                    </View>
                    {data.experience.map((exp, index) => (
                        <View key={`exp-${index}`} style={styles.experienceItem} break={index !== 0}>
                            <View style={styles.experienceHeader}>
                                <View>
                                    <Text style={styles.experienceTitle}>{exp.role}</Text>
                                    <Text style={styles.experienceCompany}>{exp.company}</Text>
                                </View>
                                <Text style={styles.experienceDuration}>{exp.duration}</Text>
                            </View>

                            {exp.achievements?.length > 0 && (
                                <View style={styles.achievementsList}>
                                    {exp.achievements.map((achievement, i) => (
                                        <View key={`achievement-${i}`} style={styles.achievementItem}>
                                            <Text style={styles.bullet}>•</Text>
                                            <Text style={styles.achievementText}>{achievement}</Text>
                                        </View>
                                    ))}
                                </View>
                            )}
                        </View>
                    ))}
                </View>

                {/* Education */}
                <View wrap={false} style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <EducationIcon />
                        <Text style={styles.sectionTitle}>Education</Text>
                    </View>
                    {data.education.map((edu, index) => (
                        <View key={`edu-${index}`} style={styles.educationItem} break={index !== 0}>
                            <View style={styles.educationHeader}>
                                <Text style={styles.educationDegree}>{edu.degree}</Text>
                                <Text style={styles.educationYear}>{edu.year}</Text>
                            </View>
                            <Text style={styles.educationSchool}>{edu.school}</Text>
                            {edu.achievements && <Text style={styles.paragraph}>{edu.achievements}</Text>}
                        </View>
                    ))}
                </View>

                {/* Skills */}
                <View wrap={false} style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <CodeIcon />
                        <Text style={styles.sectionTitle}>Technical Skills</Text>
                    </View>
                    <View style={styles.skillsContainer}>
                        {data.skills.map((skill, index) => (
                            <Text key={`skill-${index}`} style={styles.skillItem}>
                                {skill}
                            </Text>
                        ))}
                    </View>
                </View>

                {/* Soft Skills */}
                <View wrap={false} style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <HeartIcon />
                        <Text style={styles.sectionTitle}>Soft Skills</Text>
                    </View>
                    <View style={styles.skillsContainer}>
                        {data.softSkills.map((skill, index) => (
                            <Text key={`soft-skill-${index}`} style={styles.softSkillItem}>
                                {skill}
                            </Text>
                        ))}
                    </View>
                </View>

                {/* Languages */}
                <View wrap={false} style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <GlobeIcon />
                        <Text style={styles.sectionTitle}>Languages</Text>
                    </View>
                    <View style={styles.languageContainer}>
                        {data.languages.map((language, index) => (
                            <View key={`lang-${index}`} style={styles.languageItem}>
                                <Text style={styles.languageName}>{language.name}</Text>
                                <Text style={styles.languageProficiency}>{language.proficiency}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Certifications */}
                <View wrap={false} style={[styles.section, { width: "100%" }]}>
                    <View style={styles.sectionHeader}>
                        <CertificationIcon />
                        <Text style={styles.sectionTitle}>Certifications</Text>
                    </View>

                    {data.certifications.map((cert, index) => (
                        <View key={`cert-${index}`} style={styles.certificationItem} break={index !== 0}>
                            <View>
                                <Text style={styles.certificationName}>{cert.name}</Text>
                                <Text style={styles.certificationIssuer}>{cert.issuer}</Text>
                            </View>
                            <Text style={styles.certificationYear}>{cert.year}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </Page>
    </Document>
)

export default CVDocument
