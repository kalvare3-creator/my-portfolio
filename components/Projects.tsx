"use client";

export default function Projects() {
  const projects = [
{
  id: "makeup-skincare",
  title: "Makeup & Skincare App",
  categories: ["UX / UI Design"],
  description:
    "A mobile app concept designed in Figma to create a seamless and intuitive experience for discovering makeup and skincare products.",
  embed:
    "https://embed.figma.com/proto/U3BAN6sRP2gaQh7utc42yj/Makeup-Skincare-App?node-id=6087-76&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6087%3A76&embed-host=share",
  link:
    "https://www.figma.com/proto/U3BAN6sRP2gaQh7utc42yj/Makeup-Skincare-App",
  type: "figma",
},
    {
      id: 239584143,
      title: " Brand Identity",
      categories: ["Graphic Design"],
      description:
        "A complete rebranding project for a singer, focused on developing a cohesive visual identity and modern artistic direction.",
      embed:
        "https://www.behance.net/embed/project/239584143?ilo0=1",
      behance:
        "https://www.behance.net/gallery/239584143",
    },
    {
      id: 248559251,
      title: "React 2026",
      categories: ["UX / UI Design", "Graphic Design","User Research"],
      description:
        "A road safety campaign focused on creating an accessible and engaging digital experience through user research, interface design, and visual communication..",
      embed:
        "https://www.behance.net/embed/project/248559251?ilo0=1",
      behance:
        "https://www.behance.net/gallery/248559251/React-2026",
    },
    {
  id: 246000501,
  title: "Coat Evolution",
  categories: ["UX / UI Design"],
  description:
    "An interactive storytelling project exploring the evolution of a coat through visual design, user experience, and interactive elements.",
  embed:
    "https://www.behance.net/embed/project/246000501?ilo0=1",
  behance:
    "https://www.behance.net/gallery/246000501",
},
{
  id: 236877883,
  title: "Exhibition Poster Design",
  categories: ["Graphic Design"],
  description:
    "An exhibition poster design project exploring typography, composition, and visual storytelling.",
  embed:
    "https://www.behance.net/embed/project/236877883?ilo0=1",
  behance:
    "https://www.behance.net/gallery/236877883",
},
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#fff7f8] px-8 py-24"
    >
      <div className="mx-auto max-w-7xl">

       
        <div className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#d95c6b]">
            Explore my work
          </p>

          <h1 className="font-serif text-6xl font-semibold text-[#111111] md:text-7xl">
            Projects
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            A collection of projects across UX/UI design, graphic design,
            technology, and software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-3xl border border-[#f0cdd2] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              
              <div className="overflow-hidden bg-white">
                <iframe
                  src={project.embed}
                  className="h-[420px] w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

             
              <div className="p-7">

             
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full bg-[#fde8eb] px-4 py-2 text-sm font-medium text-[#d95c6b]"
                    >
                      {category}
                    </span>
                  ))}
                </div>

             
                <h2 className="mt-5 font-serif text-3xl font-semibold text-[#111111]">
                  {project.title}
                </h2>

            
                <p className="mt-3 leading-7 text-gray-600">
                  {project.description}
                </p>

               
               <a
  href={project.type === "figma" ? project.link : project.behance}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex font-medium text-[#d95c6b] transition hover:translate-x-1"
>
  {project.type === "figma"
    ? "View Prototype →"
    : "View on Behance →"}
</a>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}