"use client";

export default function Experience() {
  const experiences = [
    {
      role: "PM Director — UI/UX Track",
      company: "Latinos in Computing at UMD",
      date: "June 2026 – Present",
      location: "College Park, MD",
      description:
        "Lead the UI/UX Track by planning weekly workshops, developing design-focused curriculum, and connecting students with industry professionals.",
      skills: ["UI/UX", "Leadership", "Workshop Planning"],
    },

    {
      role: "Computing Instructor & Ambassador",
      company: "Computing Catalyst — University of Maryland",
      date: "June 2026 – August 2026",
      location: "College Park, MD",
      description:
        "Designed and delivered project-based programming curriculum covering JavaScript, cybersecurity, AI, and 3D game development while mentoring 40+ students.",
      skills: [
        "JavaScript",
        "AI",
        "Cybersecurity",
        "3D Development",
      ],
    },

    {
      role: "Sprinternship Intern",
      company: "Computing Catalyst at UMD × BecauseICan",
      date: "January 2026",
      location: "College Park, MD",
      description:
        "Helped older adults navigate AI safely by creating an educational video and designing a Figma website focused on AI safety and awareness.",
      skills: ["Figma", "AI", "UX/UI", "Education"],
    },

    {
      role: "IT Intern",
      company: "Sinclair Broadcast Group",
      date: "July 2025 – August 2025",
      location: "Arlington, VA",
      description:
        "Supported enterprise IT operations by configuring Windows 11 workstations, troubleshooting technical issues, and managing workstation deployment and IT assets.",
      skills: [
        "Windows 11",
        "IT Support",
        "Networking",
        "Systems",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-white px-8 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#d95c6b]">
            My journey
          </p>

          <h2 className="font-serif text-5xl font-semibold text-[#111111] md:text-6xl">
            Experience
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Experiences that have shaped my skills across technology,
            design, education, and leadership.
          </p>
        </div>

       
        <div className="relative">

        
          <div className="absolute left-[11px] top-2 hidden h-full w-px bg-[#f0cdd2] md:block" />

          <div className="space-y-12">

            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative grid gap-8 md:grid-cols-[40px_1fr]"
              >

            
                <div className="relative hidden md:block">
                  <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-[#d95c6b] shadow-sm" />
                </div>

          
                <div className="rounded-3xl border border-[#f0cdd2] bg-[#fff7f8] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8">

            
                  <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">

                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-[#111111] md:text-3xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-lg font-medium text-[#d95c6b]">
                        {experience.company}
                      </p>
                    </div>

                    <div className="text-sm text-gray-500 md:text-right">
                      <p className="font-medium text-gray-700">
                        {experience.date}
                      </p>

                      <p className="mt-1">
                        {experience.location}
                      </p>
                    </div>

                  </div>

               
                  <p className="mt-6 max-w-3xl text-base leading-7 text-gray-600">
                    {experience.description}
                  </p>

                
                  <div className="mt-6 flex flex-wrap gap-2">

                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#d95c6b] shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}