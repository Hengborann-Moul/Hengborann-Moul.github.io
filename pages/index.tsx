import type { NextPage } from "next";

import { ActionsList } from "../components/ActionsList/actions-list.component";
import { Content } from "../components/Content/content.component";
import { Particle } from "../components/Particle/particle.component";

const Home: NextPage = () => {
  return (
    <div>
      <Content />
      <ActionsList />
      <Particle />
    </div>
  );
};

export default Home;
