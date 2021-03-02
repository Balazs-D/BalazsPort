import React from "react";
import styled from "styled-components";

const WorksCont = styled.div`
  @media (min-width: 0px) {
    width: 100vw;
    height: 65%;
    left: 0;
    position: absolute;
    transform: skewX(0deg);
    top: 0;
    left: 0;
    display: flex;
  }

  @media (min-width: 800px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: ${(props) => props.theme.colors.bgPink};
    border-left: 15px solid ${(props) => props.theme.colors.mainPurple};
    border-right: 15px solid ${(props) => props.theme.colors.mainPurple};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    transform: skewX(-130deg);

    .cont {
      transform: skewX(130deg) rotate(0deg);
    }
  }
`;

const Works = (props) => {
  return (
    <WorksCont id={props.id}>
      <div className="cont">{props.children}</div>
    </WorksCont>
  );
};

export default Works;
