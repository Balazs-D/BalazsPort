import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 0px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: ${(props) => props.theme.colors.bgBlue};
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5vw;
    background-color: pink;
    border-left: 3px solid ${(props) => props.theme.colors.mainPurple};
    border-right: 3px solid ${(props) => props.theme.colors.mainPurple};
    border: 10px solid ${(props) => props.theme.colors.mainPurple};
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
    .control {
      display: flex;
      align-items: center;
      height: 15vh;
      width: 100%;
      justify-content: center;
      position: fixed;
      bottom: 15vh;
      left: 50%;
      transform: translate(-50%);
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
    padding: 0 5vw;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    font-family: "logo";
    font-size: 3vw;
    border: none;
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
