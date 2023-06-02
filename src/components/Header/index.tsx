"use client";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleShowMenu = (state: boolean) => {
    setShow(state);
  };

  const isMobile = window.innerWidth < 640;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <p className={styles.logo}>Enzo Spagnolli</p>
        <ul className={show ? styles.show : styles.hide}>
          {isMobile ? (
            <li>
              <a onClick={() => handleShowMenu(!show)}> close </a>
            </li>
          ) : null}
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="projects">Projects</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
        {isMobile ? (
          <button onClick={() => handleShowMenu(!show)}>Menu</button>
        ) : null}
      </nav>
    </header>
  );
}
