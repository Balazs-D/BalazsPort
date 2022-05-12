import React from "react";
import styled from "styled-components";

const WorksCont = styled.div`
  @media (min-width: 0px) {
    width: 100vw;
    height: 70%;
    left: 0;
    position: absolute;
    transform: skewX(0deg);
    bottom: 0;
    left: 0%;
    display: flex;
    background-color: ${(props) => props.theme.colors.bgPink};

    .cont {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: auto;
      position: relative;
      left: 0%;
      top: 0%;
      overflow-y: scroll;
      padding-top: 5vw;
    }
  }

  @media (min-width: 800px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: ${(props) => props.theme.colors.bgPink};
    border-left: 15px solid ${(props) => props.theme.colors.mainPurple};
    border-right: 15px solid ${(props) => props.theme.colors.mainPurple};
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    transform: skewX(-130deg);
    overflow: hidden;

    .cont {
      transform: skewX(130deg) rotate(0deg);
      display: flex;
      width: 55%;
      height: 100%;
      position: relative;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      overflow-y: scroll;
      padding-top: 0vw;
      padding: 0;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

export const Works = (props) => {
  return (
    <WorksCont id={props.id}>
      <div className="cont">{props.children}</div>
    </WorksCont>
  );
};
