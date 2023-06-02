"use client";
import styles from "./styles.module.scss";
import ProjectCard from "@/components/ProjectCard";

export default async function Home() {
  const projects = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <main>
      <section className={`${styles.hero}`}>
        <h1>Enzo Spagnolli</h1>
        <p>Senior Software Enginner</p>
        <a onClick={() => (window.location.hash = "about")}>
          <picture>
            <img src="icons/arrowDown.svg" alt="Arrow down" />
          </picture>
        </a>
      </section>
      <section className={`${styles.about} `} id="about">
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
        <a onClick={() => (window.location.hash = "projects")}>
          <picture>
            <img src="icons/arrowDown.svg" alt="Arrow down" />
          </picture>
        </a>
      </section>
      <section className={`${styles.projects}`} id="projects">
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
