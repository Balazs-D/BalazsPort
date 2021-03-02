import React, { useContext } from "react";
import styled from "styled-components";

const WrapperCont = styled.div`
  @media (min-width: 0px) {
    font-family: "logo";
    position: absolute;
    top: 0;
    left: 5vw;
    margin-top: 7vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    img {
      width: 21vw;
      height: 13vw;
      z-index: -1;
      left: -2.5vw;
      top: -1.4vw;
      position: absolute;
    }
    h1 {
      width: auto;
      max-width: 95%;
      font-size: 8.5vw;
      margin: 0;
      border: 2px solid ${(props) => props.theme.colors.mainPurple};
      margin-bottom: 1vw;
      padding: 10px 10px 2px 12px;
      color: ${(props) => props.theme.colors.bgPurple};
      background-color: ${(props) => props.theme.colors.bgBlue};
      filter: drop-shadow(
        -5px 5px 0px ${(props) => props.theme.colors.mainPurple}
      );
      transition: all 0.1s linear;

      &::after {
        content: "BALAZS DANYADI";
        position: absolute;
        left: 15px;
        top: 11px;
        color: transparent;
        -webkit-text-stroke: 1px ${(props) => props.theme.colors.mainPurple};
        transition: all 0.1s linear;
      }
    }

    h3 {
      font-size: 4vw;
      width: auto;
      margin: 1vw;
      border: 2px solid ${(props) => props.theme.colors.mainPurple};
      margin-bottom: 1vw;
      padding: 10px 10px 7px 10px;
      color: ${(props) => props.theme.colors.bgPurple};
      filter: drop-shadow(
        -5px 5px 0px ${(props) => props.theme.colors.mainPurple}
      );
      background-color: ${(props) => props.theme.colors.bgBlue};
      transition: all 0.1s linear;
    }
  }
  @media (min-width: 800px) {
    font-family: "logo";
    position: absolute;
    margin-top: 7vw;
    align-items: center;
    h1 {
      width: 15vw;
      font-size: 3vw;
      margin: 0;
      margin-bottom: 1vw;
      padding: 10px 10px 2px 12px;
      transition: all 0.1s linear;

      &:hover:after {
        left: 11px;
        top: 15px;
      }

      &:hover {
        filter: drop-shadow(
            5px -5px 0px ${(props) => props.theme.colors.mainPurple}
          )
          hue-rotate(300deg);
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

      background-color: ${(props) => props.theme.colors.bgBlue};
      transition: all 0.1s linear;

      &:hover {
        filter: drop-shadow(
            5px -5px 0px ${(props) => props.theme.colors.mainPurple}
          )
          hue-rotate(100deg);
      }
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
