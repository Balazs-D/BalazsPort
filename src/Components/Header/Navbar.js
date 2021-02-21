import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../Context/Context";

const NavCont = styled.ul`
  width: 30vw;
  height: 20vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 5vw;
  position: absolute;
  bottom: 0vw;
`;

const Li = styled.li`
  text-decoration: none;
  padding: 5px 10px 3px 10px;
  border: 1px solid ${(props) => props.theme.colors.mainPurple};
  border-radius: 0px;
  font-family: "logo";
  color: ${(props) => props.theme.colors.mainPurple};
  width: 5vw;
  text-align: center;
  box-shadow: -3px 3px 0px ${(props) => props.theme.colors.mainPurple};
  transition: all 0.1s linear;
  cursor: pointer;
  position: relative;
  overflow: hidden;

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
  return (
    <NavCont>
      <Li
        onClick={() => {
          context.setIsAbout((prev) => !prev);
        }}
      >
        <p>ABOUT</p>
        <div className="pop"></div>
      </Li>
      <Li>
        <p>SKILLS</p>
        <div className="pop"></div>
      </Li>
      <Li>
        <p>WORKS</p>
        <div className="pop"></div>
      </Li>
      <Li>
        <p>CONTACT</p>
        <div className="pop"></div>
      </Li>
    </NavCont>
  );
};

export default Navbar;
