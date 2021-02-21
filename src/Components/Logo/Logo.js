import React from "react";
import styled from "styled-components";
import { ReactComponent as logoText } from "../../Graphics/SVG/logo.svg";

const Container = styled.div`
  /* width: 20vw; */
  font-family: "logo";
  /* display: inline-block; */
  /* display: flex; */
  /* justify-content: flex-start;
  align-items: center; */
  /* flex-direction: column; */
  position: absolute;
  margin-top: 2vw;

  h1 {
    width: 15vw;
    font-size: 3vw;
    margin: 0;
    border: 2px solid ${(props) => props.theme.colors.mainPurple};
    margin-bottom: 1vw;
    padding: 10px 10px 2px 12px;
    color: ${(props) => props.theme.colors.bgPurple};
    box-shadow: -5px 5px 0px ${(props) => props.theme.colors.mainPurple};

    &::after {
      content: "BALAZS DANYADI";
      position: absolute;
      left: 17px;
      top: 9px;
      color: transparent;
      -webkit-text-stroke: 1px ${(props) => props.theme.colors.mainPurple};
    }
  }
  h3 {
    font-size: 1vw;
    width: 12vw;
    margin: 0;
    border: 2px solid ${(props) => props.theme.colors.mainPurple};
    margin-bottom: 1vw;
    padding: 10px 10px 7px 10px;
    color: ${(props) => props.theme.colors.bgPurple};
    box-shadow: -5px 5px 0px ${(props) => props.theme.colors.mainPurple};
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    /* -webkit-text-stroke: 1px ${(props) => props.theme.colors.mainPurple}; */
  }
`;

const Logo = () => {
  return (
    <Container>
      <h1>BALAZS DANYADI</h1>
      {/* <h1>DANYADI</h1> */}

      <h3>Front-end Developer</h3>
      {/* <h3>Developer</h3> */}
    </Container>
  );
};

export default Logo;
