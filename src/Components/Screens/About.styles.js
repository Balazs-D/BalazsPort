import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 0px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 5vw 5vw 25vw 5vw;
    background-color: ${(props) => props.theme.colors.bgPink};

    .control {
      display: flex;
      align-items: center;
      height: 15vh;
      width: 80%;
      justify-content: center;
      position: absolute;
      bottom: 0vw;
      left: 5%;
      /* bottom: 0.1vh; */
      transform: translate(0%);
    }

    .paginationCont {
      display: flex;
      flex-direction: row;
    }

    .pagination {
      width: 3vw;
      height: 3vw;
      border-radius: 2vw;
      background: ${(props) => props.theme.colors.bgBlue};
      border: 1px solid ${(props) => props.theme.colors.mainPurple};
      margin: 0.5vw;
    }
    .paginationSelected {
      width: 3vw;
      height: 3vw;
      border-radius: 2vw;
      background: ${(props) => props.theme.colors.bgYellow};
      border: 1px solid ${(props) => props.theme.colors.mainPurple};
      margin: 0.5vw;
    }

    button {
      background: none;
      border: none;
      outline: none;
      color: ${(props) => props.theme.colors.mainPurple};
      &:active {
        color: ${(props) => props.theme.colors.bgYellow};
      }
    }
  }
  @media (min-width: 800px) {
    width: 61vw;
    height: 100vh;
    margin-left: -5vw;
    padding: 0vw;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    font-family: "logo";
    font-size: 3vw;
    border: none;
    background-color: transparent;

    .control {
      display: flex;
      align-items: center;
      height: auto;
      width: auto;
      justify-content: center;
      position: relative;
      bottom: 0vh;
      left: 0%;
      margin-top: 1vw;
      transform: translate(0%);
    }

    .paginationCont {
      display: flex;
    }

    .pagination {
      width: 10px;
      height: 2vw;
      border-radius: 0.5vw;
      background: ${(props) => props.theme.colors.bgBlue};
      border: 1px solid ${(props) => props.theme.colors.mainPurple};
      margin: 0.1vw;
    }
    .paginationSelected {
      width: 10px;
      height: 2vw;
      border-radius: 0.5vw;
      background: ${(props) => props.theme.colors.bgYellow};
      border: 1px solid ${(props) => props.theme.colors.mainPurple};
      margin: 0.1vw;
    }

    /* &::after {
    content: "";
    width: 2vw;
    height: 2vw;
    background: ${(props) => props.theme.colors.mainPurple};
  } */

    & :nth-child(3) {
      /* border: 2px solid ${(props) => props.theme.colors.mainPurple};
    box-shadow: 5px -5px ${(props) => props.theme.colors.mainPurple}; */
      transition: all 0.1s linear;
    }

    & :last-child():hover {
      /* border: 2px solid ${(props) => props.theme.colors.mainPurple};
    box-shadow: -5px 5px ${(props) => props.theme.colors.mainPurple}; */
    }

    button {
      background: none;
      border: none;
      outline: none;
      color: ${(props) => props.theme.colors.mainPurple};
      transition: all 0.3s linear;

      &:hover {
        text-shadow: -1px 1px ${(props) => props.theme.colors.bgYellow},
          1px -1px ${(props) => props.theme.colors.bgPurple}, 0px 0px 5px cyan;
      }
    }
  }
`;

const About = (props) => {
  return (
    <Wrapper onClick={props.onClick} id={props.id}>
      {props.children}
    </Wrapper>
  );
};

export default About;
