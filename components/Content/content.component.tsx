import React from "react";

import { Profile } from "../Profile/profile.component";

export function Content(): JSX.Element {
  return (
    <div>
      <Profile />
      <h1
        className="font-normal z-[1] relative transition-colors text-[4.5rem] m-0 mb-14 text-color md:text-8xl"
        aria-label="My name is Moul Hengborann"
      >
        Moul Hengborann
      </h1>
      <h2
        className="font-normal z-[1] relative transition-colors mx-0 my-16 text-[2.5rem] text-color md:text-[3.5rem]"
        aria-label="I am a software engineer"
      >
        Software Engineer
      </h2>
    </div>
  );
}
