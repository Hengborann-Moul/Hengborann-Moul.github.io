import React from "react";

import { Profile } from "../Profile/profile.component";
import styles from './content.module.scss';

export function Content(): JSX.Element {
  return (
    <div className={styles.container}>
      <Profile />
      <h1 className={styles.name} aria-label="My name is Moul Hengborann">
        Moul Hengborann
      </h1>
      <h2 className={styles.title} aria-label="I am a software engineer">
        Software Engineer
      </h2>
    </div>
  );
}
