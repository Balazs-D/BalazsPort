import React, { useContext } from "react";
import styled from "styled-components";

const WrapperCont = styled.div`
  font-family: "logo";
  position: absolute;
  margin-top: 7vw;

  h1 {
    width: 15vw;
    font-size: 3vw;
    margin: 0;
    border: 2px solid ${(props) => props.theme.colors.mainPurple};
    margin-bottom: 1vw;
    padding: 10px 10px 2px 12px;
    color: ${(props) => props.theme.colors.bgPurple};
    background-color: ${(props) => props.theme.colors.bgBlue};
    box-shadow: -5px 5px 0px ${(props) => props.theme.colors.mainPurple};
    transition: all 0.1s linear;

    &:hover {
      box-shadow: 5px -5px 0px ${(props) => props.theme.colors.mainPurple};
    }

    &:hover:after {
      left: 11px;
      top: 15px;
    }

    &::after {
      content: "BALAZS DANYADI";
      position: absolute;
      left: 17px;
      top: 9px;
      color: transparent;
      -webkit-text-stroke: 1px ${(props) => props.theme.colors.mainPurple};
      transition: all 0.1s linear;
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
    background-color: ${(props) => props.theme.colors.bgBlue};
    transition: all 0.1s linear;

    &:hover {
      box-shadow: 5px -5px 0px ${(props) => props.theme.colors.mainPurple};
    }
  }
`;

const Wrapper = (props) => {
  return (
    <WrapperCont id={props.id} onClick={props.onClick}>
      {props.children}
    </WrapperCont>
  );
};

export default Wrapper;
