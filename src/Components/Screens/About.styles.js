import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 60vw;
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.theme.colors.bgBlue};
  margin-left: -15%;
  padding: 0 5vw;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: absolute;

  font-family: "logo";
  font-size: 3vw;

  & :nth-child(2) {
    border: 2px solid ${(props) => props.theme.colors.mainPurple};
    box-shadow: 5px -5px ${(props) => props.theme.colors.mainPurple};
    transition: all 0.1s linear;
  }

  & :nth-child(2):hover {
    border: 2px solid ${(props) => props.theme.colors.mainPurple};
    box-shadow: -5px 5px ${(props) => props.theme.colors.mainPurple};
  }
`;

const About = (props) => {
  return (
    <Wrapper onClick={props.onClick} id={props.id}>
      {props.children}
    </Wrapper>
  );
};

export default About;
