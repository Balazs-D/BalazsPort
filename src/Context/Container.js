import React, { Fragment, useState } from "react";
import { Context } from "./Context";
import img01 from "../Graphics/K&H_images/01.png";
import img02 from "../Graphics/BCT/BCT.png";
import img03 from "../Graphics/Fastpass/fastpass.png";

const Container = (props) => {
  const [isAbout, setIsAbout] = useState(false);
  const [isSkills, setIsSkills] = useState(false);
  const [isWorks, setIsWorks] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const Works = [
    {
      title: "FastPass",
      subtitle: "",
      form: "Web Application",
      tech: ["React", "Styled Components", "Firebase Realtime Database"],
      tasks: ["Frontend Developer", "Design", "Coding"],
      images: `${img03}`,
      url: "https://www.fastest-business.at/",
      info: "Digital Covid Assitent",
    },
    {
      title: "K&H",
      subtitle: "Kicks & Hugs",
      form: "Responsive Website",
      tech: ["React", "Styled Components", "Firebase Realtime Database"],
      tasks: ["Planing", "Design", "Programming"],
      images: `${img01}`,
      url: "https://www.kickshugs.com/feed",
      info: "Booking Agency",
    },
    {
      title: "BCT",
      subtitle: "",
      form: "Responsive Website",
      tech: ["React", "Styled Components"],
      tasks: ["Planing", "Design", "Programming"],
      images: `${img02}`,
      url: "https://www.banucicektulu.com/",
      info: "Artist Page",
    },
  ];
  const SkillsList = [
    { title: "Programming Languages", list: ["HTML", "CSS", "JAVASCRIPT"] },
    {
      title: "JS Frameworks",
      list: [ "Vue & Nuxt", "React.js", "React Native", "Node.js", "Express.js"],
    },
    {
      title: "More Frameworks",
      list: [
        "Redux & Thunk",
        "SASS",
        "Material UI",
        "Styled Components",
        "Gsap Animation",
      ],
    },
    {
      title: "Database & Cloud",
      list: ["MongoDB", "Firebase Realtime Database"],
    },
    {
      title: "Additional",
      list: [
        "Storyblok (CMS)",
        "Storybook",
        "GIT",
        "Jira",
        "Agile Methodoligies (Scrum & Kanban)",
        "Adobe Illustrator",
        "Adobe Photoshop",
      ],
    },
  ];
  return (
    <Context.Provider
      value={{
        isAbout,
        setIsAbout,
        isSkills,
        setIsSkills,
        isWorks,
        setIsWorks,
        isContact,
        setIsContact,
        SkillsList,
        Works,
      }}
    >
      <Fragment>{props.children}</Fragment>
    </Context.Provider>
  );
};

export default Container;
