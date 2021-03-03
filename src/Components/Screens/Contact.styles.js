import React from "react";
import styled from "styled-components";
import Cursor from "../../Graphics/1x/pointer.png";

const ContactWrapper = styled.div`
  @media (min-width: 0px) {
    background-color: orange;
    width: 100vw;
    height: 100vh;
    bottom: 0vw;
    position: absolute;
    display: flex;
    align-items: flex-end;
    left: 0;

    div {
      width: 100vw;
      height: 45%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 5vw;

      a {
        color: ${(props) => props.theme.colors.mainPurple};
        border: 2px solid ${(props) => props.theme.colors.mainPurple};
        box-shadow: -5px 5px ${(props) => props.theme.colors.mainPurple};
        background-color: ${(props) => props.theme.colors.bgBlue};
        padding: 2vw;
        width: 60%;
        flex-direction: column;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-family: "text";
        text-decoration: none;
        transition: all 0.1s linear;
        margin: 3vw 4vw;
        font-size: 4vw;
        text-shadow: 1px 1px ${(props) => props.theme.colors.bgYellow},
          -1px -1px ${(props) => props.theme.colors.bgPurple};

        p {
          font-size: 10vw;
          margin: 0;
          text-align: center;
          width: 100%;
        }

        &:active {
          box-shadow: 0px 0px ${(props) => props.theme.colors.dark};
        }
      }
    }
  }
  @media (min-width: 800px) {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;

    /* transform: translateY(100%); */
    border-top: 10px solid ${(props) => props.theme.colors.mainPurple};
    /* border-bottom: 10px solid ${(props) => props.theme.colors.mainPurple}; */

    div {
      width: 60vw;
      height: auto;
      transform: translateY(20%);
      flex-direction: row;
      margin: 0;
      a {
        font-size: 1.1vw;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 200px;
        cursor: url(${Cursor}), auto;
        &:hover {
          box-shadow: 5px -5px ${(props) => props.theme.colors.dark};
          color: ${(props) => props.theme.colors.dark};
          border: 2px solid ${(props) => props.theme.colors.dark};
          text-shadow: 0px 0px ${(props) => props.theme.colors.bgYellow},
            0px 0px ${(props) => props.theme.colors.bgPurple};
          background-color: ${(props) => props.theme.colors.bgPink};
        }

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
