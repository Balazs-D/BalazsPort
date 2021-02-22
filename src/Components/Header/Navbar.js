import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../../Context/Context";
import Cursor from "../../Graphics/1x/pointer.png";

const NavCont = styled.ul`
  width: 30vw;
  height: 20vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 5vw;
  position: absolute;
  bottom: -5vw;
`;

const Li = styled.li`
  text-decoration: none;
  padding: 5px 10px 3px 10px;
  border-radius: 0px;
  font-family: "logo";
  color: ${(props) => props.theme.colors.mainPurple};
  background-color: ${(props) => props.theme.colors.bgBlue};
  width: 5vw;
  text-align: center;
  box-shadow: -3px 3px 0px ${(props) => props.theme.colors.mainPurple};
  transition: all 0.1s linear;
  cursor: url(${Cursor}), auto;
  position: relative;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.mainPurple};
  margin-bottom: 10px;
  &:hover {
    box-shadow: -1px 1px 0px ${(props) => props.theme.colors.mainPurple};
  }

  &:active {
    box-shadow: 0px 0px 0px ${(props) => props.theme.colors.mainPurple};
  }

  p {
    margin: 0;
    position: relative;
    z-index: 2;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: orange;
    top: 300%;
    left: 0;
    z-index: 1;
    transition: all 0.3s linear;
    transform: skewY(40deg);
  }

  &:hover::after {
    top: 0;
    transform: rotate(0deg);
  }

  /* -webkit-text-stroke: 1px ${(props) => props.theme.colors.mainPurple}; */
`;

const Navbar = () => {
  const context = useContext(Context);
  const {
    setIsAbout,
    setIsSkills,
    setIsWorks,
    setIsContact,
    isAbout,
    isSkills,
    isWorks,
    isContact,
  } = context;
  const gsap = window.gsap;
  const tl = gsap.timeline();

  const handleNav = (e) => {
    if (e.target.id === "ABOUT") {
      setIsAbout(true);
      setIsSkills(false);
      setIsWorks(false);
      setIsContact(false);
    } else if (e.target.id === "SKILLS") {
      setIsAbout(false);
      setIsSkills(true);
      setIsWorks(false);
      setIsContact(false);
    } else if (e.target.id === "WORKS") {
      setIsAbout(false);
      setIsSkills(false);
      setIsWorks(true);
      setIsContact(false);
    } else if (e.target.id === "CONTACT") {
      setIsAbout(false);
      setIsSkills(false);
      setIsWorks(false);
      setIsContact(true);
    }
  };

  useEffect(() => {
    if (isAbout) {
      tl.to(
        "#nav",
        { x: "-30vw", ease: "elastic.out(0.9, 1)" },
        { duration: 1.9 }
      );
    } else if (isSkills) {
      tl.to(
        "#nav",
        { x: "25vw", ease: "elastic.out(0.9, 1)" },
        { duration: 1.9 }
      );
    } else if (isWorks) {
      tl.to(
        "#nav",
        { x: "32vw", ease: "elastic.out(0.9, 1)" },
        { duration: 1.9 }
      );
    } else {
      tl.to(
        "#nav",
        { x: "0vw", ease: "elastic.out(0.9, 1)" },
        { duration: 1.9 }
      );
    }
  }, [isAbout, isSkills, isWorks]);
  return (
    <NavCont id="nav">
      <Li
        id="ABOUT"
        onClick={(e) => {
          handleNav(e);
        }}
      >
        <p>ABOUT</p>
        <div className="pop"></div>
      </Li>
      <Li
        id="SKILLS"
        onClick={(e) => {
          handleNav(e);
        }}
      >
        <p>SKILLS</p>
        <div className="pop"></div>
      </Li>
      <Li
        id="WORKS"
        onClick={(e) => {
          handleNav(e);
        }}
      >
        <p>WORKS</p>
        <div className="pop"></div>
      </Li>
      <Li
        id="CONTACT"
        onClick={(e) => {
          handleNav(e);
        }}
      >
        <p>CONTACT</p>
        <div className="pop"></div>
      </Li>
    </NavCont>
  );
};

export default Navbar;
