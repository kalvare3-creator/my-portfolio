"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function About() {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "an UX Engineer",
    "an UX Designer",
    "a Front-End Developer",
    "a Software Engineer",
    "a Social Media Manager",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#fff7f8]"
    >

      <div className="absolute right-[8%] top-[22%] grid grid-cols-5 gap-4 opacity-40">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-[#e8a4ae]"
          />
        ))}
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-8 py-24 lg:px-16">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

       
          <div className="relative z-10">

          
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#fde8eb] px-5 py-2 text-sm font-medium text-[#d95c6b]">
              <span>★</span>
              {roles[roleIndex]}
            </div>

            <h1 className="font-serif text-6xl font-semibold leading-[0.95] tracking-tight text-[#111111] md:text-7xl lg:text-8xl">
              Katherine
              <br />
              <span className="text-[#d95c6b]">
                Alvarenga
              </span>
            </h1>

       
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#252525]">
              I build software that combines{" "}
              <span className="text-[#d95c6b]">
                problem solving, design,
              </span>{" "}
              and technology.
            </p>

      
            <div className="mt-6 h-[2px] w-14 bg-[#d95c6b]" />
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="rounded-xl bg-black px-7 py-4 font-medium text-white transition hover:-translate-y-1 hover:bg-[#d95c6b]"
              >
                ↓ &nbsp; Download Resume
              </a>

  <Link
  href="/projects"
  className="rounded-xl border border-[#d95c6b] bg-transparent px-7 py-4 font-medium text-black transition hover:-translate-y-1 hover:bg-[#fde8eb]"
>
  → &nbsp; View Projects
</Link>
            </div>

        
            <div className="mt-8 flex items-center gap-6 text-sm font-medium text-gray-700">
              <a
                href="https://github.com/kalvare3-creator"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#d95c6b]"
              >
                GitHub
              </a>

              <span className="h-5 w-px bg-gray-300" />

              <a
                href="https://www.linkedin.com/in/katherine-alvarenga"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#d95c6b]"
              >
                LinkedIn
              </a>

              <span className="h-5 w-px bg-gray-300" />

              <a
                href="mailto:umanzorgabriela15@gmail.com"
                className="transition hover:text-[#d95c6b]"
              >
                Email
              </a>
            </div>
          </div>

   
          <div className="relative flex justify-center lg:justify-end">

  
            <div className="absolute h-[480px] w-[480px] rounded-full bg-[#f8d9de] blur-3xl" />

   
            <div className="relative h-[520px] w-[400px] overflow-hidden rounded-t-[220px] rounded-b-[40px] bg-[#f4cdd3] shadow-xl">

              <Image
                src="/K.jpeg"
                alt="Katherine Alvarenga"
                fill
                priority
                className="object-cover object-center"
              />

            </div>

          
  
          

          </div>
        </div>
      </div>
    </section>
  );
}