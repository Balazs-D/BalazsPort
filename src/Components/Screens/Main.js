import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../Context/Context";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import Navbar from "../Header/Navbar";
import Logo from "../Logo/Logo";
import Cursor from "../../Graphics/1x/cursor.png";
const MainCont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.bgBlue};
  position: relative;
  overflow: hidden;
  cursor: url(${Cursor}), auto;
`;
const Main = () => {
  const gsap = window.gsap;
  const tl = gsap.timeline();
  const context = useContext(Context);

  const { isAbout, isSkills, isWorks, isContact } = context;

  useEffect(() => {
    if (isAbout) {
      tl.to("#about", { x: "20vw" }, { duration: 1 })
        .to("#skills", { x: "-75vw" }, { duration: 1 })
        .to("#contact", { y: "100vw" }, { duration: 1 })
        .to("#works", { x: "120vw" }, { duration: 1 });
    } else if (isSkills) {
      tl.to("#about", { x: "-120vw" }, { duration: 0.5 })
        .to("#skills", { x: "-20vw" }, { duration: 0.5 })
        .to("#contact", { y: "100vw" }, { duration: 0.5 })
        .to("#works", { x: "120vw" }, { duration: 0.5 });
    } else if (isWorks) {
      tl.to("#about", { x: "-105vw" }, { duration: 0.5 })
        .to("#skills", { x: "120vw" }, { duration: 0.5 })
        .to("#contact", { y: "100vw" }, { duration: 0.5 })
        .to("#works", { x: "0vw" }, { duration: 0.5 });
    } else if (isContact) {
      tl.to("#contact", { y: "0vw" }, { duration: 0.5 });
    } else {
      tl.to("#about", { x: "-120vw" }, { duration: 0.5 })
        .to("#skills", { x: "0vw" }, { duration: 0.5 })
        .to("#contact", { y: "100vw" }, { duration: 0.5 })
        .to("#works", { x: "140vw" }, { duration: 0.5 });
    }
    //eslint-disable-next-line
  }, [isAbout, isSkills, isWorks, isContact]);

  return (
    <MainCont>
      <About id="about" />
      <Works id="works" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Navbar />
      <Logo />
    </MainCont>
  );
};

export default Main;
