"use client";

import { useState, useEffect } from "react";
import styles from "./typewriter-title.module.css";

const TITLES = [
  "Software Engineer",
  "Data Engineer",
  "Machine Learning Engineer",
  "Data Scientist",
  "Mathematic Lover 💕",
];

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 2000;

export default function TypewriterTitle() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[currentTitleIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, PAUSE_DURATION);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % TITLES.length);
        return;
      }

      const deleteTimeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, DELETING_SPEED);
      return () => clearTimeout(deleteTimeout);
    }

    // Typing
    if (displayText === currentTitle) {
      setIsPaused(true);
      return;
    }

    const typeTimeout = setTimeout(() => {
      setDisplayText(currentTitle.slice(0, displayText.length + 1));
    }, TYPING_SPEED);

    return () => clearTimeout(typeTimeout);
  }, [displayText, isDeleting, isPaused, currentTitleIndex]);

  return (
    <h2 className={styles.typewriter}>
      {displayText}
      <span className={styles.cursor} />
    </h2>
  );
}
