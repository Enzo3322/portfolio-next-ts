import styles from "./styles.module.scss";

export default function ProjectCard({
  projectImg,
  id,
}: {
  projectImg: string;
  id: string;
}) {
  return (
    <a href={`/projects/${id}`} className={styles.link}>
      <picture>
        <img src={projectImg} alt="" />
      </picture>
    </a>
  );
}
