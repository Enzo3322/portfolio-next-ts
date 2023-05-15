import { RefObject } from "react";

export default function scrollToSection(
  sectionRef: RefObject<HTMLElement>
): void {
  const section = sectionRef.current;
  if (section) {
    const { top, height } = section.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollTargetY = top + scrollY - window.innerHeight / 2 + height / 2;
    window.scrollTo({
      top: scrollTargetY,
      behavior: "smooth",
    });
  }
}
