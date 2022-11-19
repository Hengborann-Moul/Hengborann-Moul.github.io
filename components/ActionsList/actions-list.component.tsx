import React from "react";

import { EmailIcon, LinkedInIcon, GitHubIcon, DownloadIcon, GitlabIcon } from "../../assets/icons";

export function ActionsList(): JSX.Element {
  const DATA = [
    {
      href: "mailto:moulhengborann@gmail.com",
      aria: "Open a pre-addressed email prompt to me that you can fill out",
      icon: <EmailIcon />,
      label: "Email",
    },
    {
      href: "https://www.linkedin.com/in/moul-hengborann-35a307115/",
      aria: "Visit my LinkedIn profile to learn more about my education and work experience",
      icon: <LinkedInIcon />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/Hengborann-Moul",
      aria: "Visit my GitHub profile to learn more about the projects I have created and contributed to",
      icon: <GitHubIcon />,
      label: "Github",
    },
    {
      href: "https://gitlab.com/hengborann.moul",
      aria: "Visit my Gitlab profile to learn more about the projects I have created and contributed to",
      icon: <GitlabIcon />,
      label: "Github",
    },
    {
      href: "/cv/Moul_Hengborann_CV.pdf",
      aria: "Download my CV.",
      icon: <DownloadIcon />,
      label: "Download",
    },
  ];

  const Button = ({ href, aria, icon, label }: { href: string; aria: string; icon: React.ReactNode; label: string }) => {
    return (
      <span className="inline-block my-0 mx-[0.8rem] h-20 w-20 md:h-24 md:w-24 md:my-0 md:mx-7">
        <a
          className="h-20 w-20 text-color table-cell align-middle rounded-[25%] relative z-[1] no-underline md:h-24 md:w-24"
          download={label === "Download" ? href : ""}
          href={href}
          target="_blank"
          aria-label={aria}
          rel="noopener noreferrer"
        >
          <div className="p-2 h-16 w-16 md:p-4 md:h-[4.5rem] md:w-[4.5rem]">{icon}</div>
          <span className="text-xl hidden md:text-2xl">{label}</span>
        </a>
      </span>
    );
  };

  return (
    <div>
      {DATA.map((props, i) => (
        <Button {...props} key={i} />
      ))}
    </div>
  );
}
