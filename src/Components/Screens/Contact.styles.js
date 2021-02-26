import React from "react";
import styled from "styled-components";

const ContactWrapper = styled.div`
  @media (min-width: 0px) {
    background-color: orange;
    width: 100vw;
    height: 100vh;
    bottom: 0vw;
    position: absolute;
    display: flex;
    align-items: center;

    div {
      width: 100vw;
      height: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      span {
        color: ${(props) => props.theme.colors.mainPurple};
        border: 2px solid ${(props) => props.theme.colors.mainPurple};
        box-shadow: -5px 5px ${(props) => props.theme.colors.mainPurple};
        padding: 1vw;
        width: 60%;
        flex-direction: column;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-family: "text";

        transition: all 0.1s linear;
        margin: 0 4vw;
        font-size: 4vw;

        p {
          font-size: 10vw;
          margin: 0;
          text-align: center;
          width: 100%;
        }

        &:hover {
          box-shadow: 5px -5px ${(props) => props.theme.colors.dark};
          color: ${(props) => props.theme.colors.dark};
          border: 2px solid ${(props) => props.theme.colors.dark};
        }
      }
    }
  }
  @media (min-width: 800px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0vw;
    transform: rotate(0deg);
    border-top: 10px solid ${(props) => props.theme.colors.mainPurple};
    border-bottom: 10px solid ${(props) => props.theme.colors.mainPurple};

    div {
      width: 40vw;
      height: auto;
      transform: translateY(20%);
      flex-direction: row;
      span {
        font-size: 1.1vw;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 200px;

        p {
          font-size: 1.3vw;
          margin: 0;
          text-align: center;
          margin: 1vw;
          width: 4vw;
        }
      }
    }
  }
`;

const Contact = (props) => {
  return <ContactWrapper id={props.id}>{props.children}</ContactWrapper>;
};

export default Contact;
