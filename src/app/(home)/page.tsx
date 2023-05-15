"use client";
import getProjects from "@/services/useProject";
import styles from "./styles.module.scss";
import ProjectCard from "@/components/ProjectCard";
import { useRef } from "react";
import scrollToSection from "@/utils/scrollRef";

export default async function Home() {
  // const projects = await getProjects();

  const projects = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const aboutRef = useRef(null);

  return (
    <main>
      <section className={`${styles.hero}`}>
        <h1>Enzo Spagnolli</h1>
        <p>Senior Software Enginner</p>
        <button onClick={() => scrollToSection(aboutRef)}>
          <picture>
            <img src="icons/arrowDown.svg" alt="Arrow down" />
          </picture>
        </button>
      </section>
      <section className={`${styles.about} `} ref={aboutRef}>
        <div className={styles.aboutContainer}>
          <div className={styles.imageContainer}>
            <picture>
              <img src="profile.jpeg" alt="" />
            </picture>
          </div>
          <div className={styles.textContainer}>
            <h2>About me</h2>
            <p>
              As a seasoned full-stack developer with over 4 years of
              experience, I possess a broad skill set that includes both backend
              and frontend development. I am well-versed in backend technologies
              such as Node.js, Fastify, RabbitMQ, PostgreSQL, MongoDB, Docker,
              Azure, Nginx, and Prisma, as well as frontend technologies focused
              on the eCommerce industry such as Next.js, Gatsby, TypeScript,
              React, and VTEX IO.
            </p>
            <a href="/about">See more</a>
          </div>
        </div>
      </section>
      <section className={`${styles.projects}`}>
        <h2>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project: any, i: number) => (
            <ProjectCard projectImg={project.image} id={project.id} key={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
