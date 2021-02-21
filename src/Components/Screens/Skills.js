import React from "react";

import styled from "styled-components";

const SkillsCont = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.theme.colors.bgPurple};
  border-left: 15px solid ${(props) => props.theme.colors.mainPurple};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  transform: skewX(10deg);
  right: -100vw;
`;

const Skills = () => {
  return <SkillsCont></SkillsCont>;
};

export default Skills;
