import React, { Fragment, useState } from "react";
import { Context } from "./Context";
import img01 from "../Graphics/K&H_images/01.png";
import img02 from "../Graphics/K&H_images/02.png";
import img03 from "../Graphics/K&H_images/03.png";

const Container = (props) => {
  const [isAbout, setIsAbout] = useState(false);
  const [isSkills, setIsSkills] = useState(false);
  const [isWorks, setIsWorks] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const Works = [
    {
      title: "K&H",
      subtitle: "Kicks & Hugs",
      form: "Responsive Website",
      tech: ["React", "Styled Components", "Firebase Realtime Database"],
      tasks: ["Planing", "Design", "Programming"],
      images: `${img01}`,
      url: "https://kh-version2.vercel.app/feed",
    },
  ];
  const SkillsList = [
    { title: "Programming Languages", list: ["HTML", "CSS", "JAVASCRIPT"] },
    {
      title: "Database & Cloud",
      list: ["MongoDB", "Firebase Realtime Database"],
    },
    {
      title: "JS Frameworks",
      list: ["React.js", "React Native", "Node.js", "Express.js"],
    },

    {
      title: "Additional",
      list: [
        "Agile Methodoligies (Scrum & Kanban)",
        "Adobe Illustrator",
        "Adobe Photoshop",
      ],
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
