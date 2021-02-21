import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../Context/Context";
import About from "./About";
import Skills from "./Skills";

import Navbar from "../Header/Navbar";
import Logo from "../Logo/Logo";
const MainCont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.bgBlue};
  position: relative;
  overflow: hidden;
`;
const Main = () => {
  const gsap = window.gsap;
  const tl = gsap.timeline();
  const context = useContext(Context);

  const { isAbout } = context;

  useEffect(() => {
    console.log(isAbout);
    if (isAbout) {
      tl.to("#about", { x: "-65vw" }, { duration: 0.5 });
    } else {
      tl.to("#about", { x: "0vw" }, { duration: 0.5 });
    }
  }, [isAbout]);

  return (
    <MainCont>
      <About id="about" />
      <Skills />
      <Navbar />
      <Logo />
    </MainCont>
  );
};

export default Main;
