import Link from "next/link";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.linksWrapper}>
          <p>Enzo Spagnolli</p>
          <ul>
            <li>
              <Link href="/"> Home</Link>
            </li>
            <li>
              <Link href="/about"> About</Link>
            </li>
            <li>
              <Link href="/projects"> Projects</Link>
            </li>
            <li>
              <Link href="/contact"> Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
