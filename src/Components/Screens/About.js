import React from "react";

import styled from "styled-components";

const AboutContainer = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.theme.colors.bgYellow};
  border-right: 15px solid ${(props) => props.theme.colors.mainPurple};
  border-left: 15px solid ${(props) => props.theme.colors.mainPurple};

  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  transform: skewX(15deg);
  /* left: 10vw; */
`;

const About = (props) => {
  return (
    <AboutContainer onClick={props.onClick} id={props.id}></AboutContainer>
  );
};

export default About;
