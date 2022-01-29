import type { NextPage } from "next";

import { ActionsList } from "../components/ActionsList/actions-list.component";
import { Content } from "../components/Content/content.component";
import { Particle } from "../components/Particle/particle.component";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Content />
      <ActionsList />
      <Particle />
    </div>
  );
};

export default Home;
