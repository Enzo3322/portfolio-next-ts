"use client";
import scrollToSection from "@/utils/scrollRef";
import styles from "./styles.module.scss";
import { useRef } from "react";

export default function About() {
  const aboutRef = useRef(null);

  return (
    <main>
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <div className={styles.imageContainer}>
            <picture>
              <img src="profile.jpeg" alt="" />
            </picture>
          </div>
          <div className={styles.textContainer}>
            <h1>Enzo Spagnolli</h1>
            <p>
              As a seasoned full-stack developer with over 4 years of
              experience, I possess a broad skill set that includes both backend
              and frontend development. I am well-versed in backend technologies
              such as Node.js, Fastify, RabbitMQ, PostgreSQL, MongoDB, Docker,
              Azure, Nginx, and Prisma, as well as frontend technologies focused
              on the eCommerce industry such as Next.js, Gatsby, TypeScript,
              React, and VTEX IO.
            </p>
            <p>
              Working in collaboration with business stakeholders, I am able to
              design and develop comprehensive solutions that meet quality and
              performance standards. My ability to work well in a team, combined
              with my passion for problem-solving, enables me to assist other
              developers in their day-to-day tasks.
            </p>
            <p>
              With a strong focus on continuous learning and development, I am
              constantly refining my skills and staying abreast of industry
              trends to ensure that I can deliver the best possible solutions to
              my clients.
            </p>
          </div>
        </div>
        <a onClick={() => (window.location.hash = "skills")}>
          <picture>
            <img src="icons/arrowDown.svg" alt="Arrow down" />
          </picture>
        </a>
      </section>

      <section ref={aboutRef} className={styles.skills} id="skills">
        <h2>Skills</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.card}>
            <picture>
              <img src="icons/phone.svg" alt="" />
            </picture>
            <h3>Responsive design</h3>
            <p>
              I have experience in developing responsive interfaces aimed at
              accessibility.
            </p>
          </div>
          <div className={styles.card}>
            <picture>
              <img src="icons/dev.svg" alt="" />
            </picture>
            <h3>Typescript</h3>
            <p>
              I have advanced knowledge in the language, applied in frontend and
              backend.
            </p>
          </div>
          <div className={styles.card}>
            <picture>
              <img src="icons/interaction.svg" alt="" />
            </picture>
            <h3>Communication</h3>
            <p>
              I have worked in teams that work in the asynchronous communication
              model.
            </p>
          </div>
          <div className={styles.card}>
            <picture>
              <img src="icons/people.svg" alt="" />
            </picture>
            <h3>Cooworking</h3>
            <p>
              I work well in a team, and I am able to assist developers in
              developing activities.
            </p>
          </div>
          <div className={styles.card}>
            <picture>
              <img src="icons/comunication.svg" alt="" />
            </picture>
            <h3>Interaction</h3>
            <p>
              I receive all kinds of feedback very well and I am always looking
              to improve my technical and professional skills.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
