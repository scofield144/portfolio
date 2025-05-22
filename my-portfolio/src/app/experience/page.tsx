import ExperienceCard from "@/components/sections/ExperienceCard";

;

export default function Experience() {

    const experiences = [
        {id : 1,
        company: "watchtower - Bethel",
        role: "IT Specialist, Programmer, and Project Manager",
        period: "October 2023 - Present",
        responsibilities: [
            "Microsoft 365 Solutions: Lead deployment/optimization of SharePoint, Power Automate, and Microsoft 365 tools, automating workflows and enhancing cross-departmental collaboration.",
            "Moodle Platform: Oversee full-cycle production of educational courses (content development, platform customization, user training) for seamless learning delivery.",
            "Project Management: Align IT projects with organizational goals via cross-functional collaboration, ensuring timely delivery and resource efficiency.",
            "Technical Support: Troubleshoot systems and maintain reliability/security for staff."
        ]
    },
    {
      id: 2,
      company: "Fazenda 27, Lda",
      role: "IT Technician",
      period: "Mar 2019 – Sep 2019",
      responsibilities: [
        "Data Center Operations: Managed infrastructure maintenance, troubleshooting, and optimization for seamless performance.",
        "Surveillance Systems: Installed, configured, and maintained CCTV camera networks to ensure robust site security.",
        "VoIP Technologies: Deployed and supported voice-over-IP systems to enhance internal communication efficiency."
      ]
    },
    {
      id: 3,
      company: "SCO",
      role: "Freelance Web Developer, UI/UX Designer & Project Advisor",
      period: "Oct 2023 – Present",
      responsibilities: [
        "Web Development: Design and develop responsive, user-friendly websites, ensuring optimal performance and modern functionality.",
        "UI/UX Design: Create intuitive and visually appealing interfaces, focusing on user experience and accessibility.",
        "Project Advisory: Guide clients through project planning, execution, and delivery, ensuring alignment with business goals and timelines."
      ]
    }
    ];
    return (
        <div className="min-h-screen py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-6 md:px-8">
                <div className='text-center mb-12'>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">Professional Experience</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        My professional journey spanning various roles in IT, development, and project manager
                    </p>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                </div>
                <div className="space-y-8">
                    {experiences.map((exp)=>(
                        <ExperienceCard key={exp.id} experience={exp} />
                    ))}
                </div>
            </div>
        </div>
    )
}
