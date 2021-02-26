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
  @media (min-width: 0px) {
    height: 100vh;
    background: ${(props) => props.theme.colors.bgBlue};
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  @media (min-width: 800px) {
    cursor: url(${Cursor}), auto;
  }
`;
const Main = () => {
  const gsap = window.gsap;
  const tl = gsap.timeline();
  const context = useContext(Context);
  const W = window.innerWidth;
  const { isAbout, isSkills, isWorks, isContact } = context;

  useEffect(() => {
    if (W > 0) {
      if (isAbout) {
        tl.to("#about", { x: "0vw" }, { duration: 1 })
          .to("#skills", { x: "-200vw" }, { duration: 1 })
          .to("#contact", { y: "200vw" }, { duration: 1 })
          .to("#works", { x: "-210vw" }, { duration: 1 });
      } else if (isSkills) {
        tl.to("#about", { x: "-200vw" }, { duration: 0.5 })
          .to("#skills", { x: "0vw" }, { duration: 0.5 })
          .to("#contact", { y: "200vw" }, { duration: 0.5 })
          .to("#works", { x: "-200vw" }, { duration: 0.5 });
      } else if (isWorks) {
        tl.to("#about", { x: "-200vw" }, { duration: 0.5 })
          .to("#skills", { x: "-200vw" }, { duration: 0.5 })
          .to("#contact", { y: "200vw" }, { duration: 0.5 })
          .to("#works", { x: "0vw" }, { duration: 0.5 });
      } else if (isContact) {
        tl.to("#about", { x: "100vw" }, { duration: 0.5 })
          .to("#skills", { x: "-100vw" }, { duration: 0.5 })
          .to("#works", { x: "100vw" }, { duration: 0.5 })
          .to("#contact", { y: "0vw" }, { duration: 0.5, delay: 1 });
      } else {
        tl.to("#about", { x: "-120vw" }, { duration: 0.5 })
          .to("#skills", { x: "0vw" }, { duration: 0.5 })
          .to("#contact", { y: "200vw" }, { duration: 0.5 })
          .to("#works", { x: "140vw" }, { duration: 0.5 });
      }
    }
    if (W > 800) {
      if (isAbout) {
        tl.to("#about", { x: "20vw" }, { duration: 1 })
          .to("#skills", { x: "-75vw" }, { duration: 1 })
          .to("#contact", { y: "200vw" }, { duration: 1 })
          .to("#works", { x: "120vw" }, { duration: 1 });
      } else if (isSkills) {
        tl.to("#about", { x: "-120vw" }, { duration: 0.5 })
          .to("#skills", { x: "-20vw" }, { duration: 0.5 })
          .to("#contact", { y: "200vw" }, { duration: 0.5 })
          .to("#works", { x: "120vw" }, { duration: 0.5 });
      } else if (isWorks) {
        tl.to("#about", { x: "-105vw" }, { duration: 0.5 })
          .to("#skills", { x: "-120vw" }, { duration: 0.5 })
          .to("#contact", { y: "200vw" }, { duration: 0.5 })
          .to("#works", { x: "0vw" }, { duration: 0.5 });
      } else if (isContact) {
        tl.to("#about", { x: "100vw" }, { duration: 0.5 })
          .to("#skills", { x: "-100vw" }, { duration: 0.5 })
          .to("#works", { x: "100vw" }, { duration: 0.5 })
          .to("#contact", { y: "0vw" }, { duration: 0.5, delay: 1 });
      } else {
        tl.to("#about", { x: "-120vw" }, { duration: 0.5 })
          .to("#skills", { x: "0vw" }, { duration: 0.5 })
          .to("#contact", { y: "200vw" }, { duration: 0.5 })
          .to("#works", { x: "140vw" }, { duration: 0.5 });
      }
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
