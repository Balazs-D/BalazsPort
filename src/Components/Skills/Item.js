import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../../Context/Context";
import Grid from "@material-ui/core/Grid";

import Link from "../../Graphics/1x/link.png";

const Cont = styled.div`
  @media (min-width: 0px) {
    /* padding-top: 5vh; */
    width: 100%;
    margin-bottom: 105vw;
  }

  @media (min-width: 800px) {
    padding: 7vw;
    width: 8vw;
    height: 12vw;
    margin-top: 3vw;
    margin-bottom: 3vh;
  }
`;

const GridItem = styled.div`
  @media (min-width: 0px) {
    color: ${(props) => props.theme.colors.mainPurple};
    display: flex;
    height: 12vw;
    width: 8vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 0;
    #workItemCol {
      display: flex;
      flex-direction: column;
    }

    #titleRow {
      display: flex;
    }

    h1 {
      margin: 5vw 3vw 0 3vw;
      font-family: "logo";
      font-size: 6vw;
      color: ${(props) => props.theme.colors.mainPurple};
      text-shadow: 1px 1px 0px pink;
    }

    p,
    h5 {
      margin: 0vw 3vw;
      font-family: "logo";
    }

    p {
      color: ${(props) => props.theme.colors.mainPurple};
    }

    #tech {
      margin: 0vw 3vw;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h5  {
        font-size: 4vw;
        margin: 4vw 0;
        color: ${(props) => props.theme.colors.mainPurple};
        text-shadow: 1px 1px 0px pink;
      }
      p {
        margin: 0;
        text-align: start;
        font-size: 4vw;
      }
    }
  }
  @media (min-width: 800px) {
    color: ${(props) => props.theme.colors.mainPurple};
    display: flex;
    height: 12vw;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    animation: showUpCard 0.3s linear forward;
    margin: 0;
    padding: 0;

    #workItemCol {
      padding: 1vw;
    }

    h1 {
      font-size: 1.5vw;
      margin: 0 0vw 0.5vw 0;
      font-family: "logo";
    }

    p,
    h5 {
      margin: 0 0 0vw 0;
      font-family: "logo";
      font-size: 1vw;
    }

    #tech {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0;
      height: 5vw;

      h5  {
        font-size: 1vw;
        margin: 1.5vw 0 0.5vw 0;
      }
      p {
        margin: 0;
        text-align: start;
        font-size: 1vw;
      }
    }
  }
`;
const CardCont = styled.div`
  @media (min-width: 0px) {
    /* width: 80vw; */
    border: 3px solid ${(props) => props.theme.colors.mainPurple};
    box-shadow: -5px 5px 0 ${(props) => props.theme.colors.mainPurple};
    background-color: ${(props) => props.theme.colors.bgBlue};
    display: flex;
    flex-direction: column;

    .imageDiv {
      width: 80vw;
      height: 50vw;
    }
    .iconCont {
      display: flex;
      flex-direction: row;
      height: 100%;
      width: 100%;
      justify-content: center;
      border-top: 1px solid ${(props) => props.theme.colors.mainPurple};
      padding: 3vw 0;
      margin-top: 3vw;
    }
    i {
      font-size: 8vw;
    }
    a {
      color: ${(props) => props.theme.colors.mainPurple};
      transition: all 0.2s linear infinity;
      &:hover {
        animation: linkBlink 0.5s linear infinite;
        cursor: url(${Link}), auto;
      }
    }
    @media (min-width: 800px) {
      padding: 0vw;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border: 5px solid ${(props) => props.theme.colors.mainPurple};
      box-shadow: -0px 0px 0 ${(props) => props.theme.colors.mainPurple};
      background-color: ${(props) => props.theme.colors.bgBlue};
      margin: 0;
      /* margin-left: 40vw; */
      width: auto;
      transition: all 0.3s linear;

      .imageDiv {
        width: 18vw;
        height: 10vw;
      }

      .iconCont {
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
        justify-content: center;
        padding: 0;
        margin-top: 0vw;
        border-top: none;
      }
      i {
        font-size: 3vw;
      }
      a {
        color: ${(props) => props.theme.colors.mainPurple};
        transition: all 0.2s linear infinity;
        margin: 1vw;
        &:hover {
          animation: linkBlink 0.5s linear infinite;
          cursor: url(${Link}), auto;
        }

        @keyframes linkBlink {
          from {
            color: ${(props) => props.theme.colors.bgYellow};
            -webkit-text-stroke: 2px ${(props) => props.theme.colors.dark};
          }
          to {
            color: ${(props) => props.theme.colors.bgPurple};
            -webkit-text-stroke: 1px ${(props) => props.theme.colors.dark};
          }
        }
      }
    }
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;

  visibility: visible;
`;

const Works = (props) => {
  const context = useContext(Context);
  const { Works } = context;
  const [isImg, setIsImg] = useState("false");
  const gsap = window.gsap;
  const tl = gsap.timeline();
  const W = window.innerWidth;

  return (
    <Cont>
      <GridItem xs={12} item>
        <CardCont
          onMouseEnter={() => {
            setIsImg((prev) => !prev);
          }}
          onMouseLeave={() => {
            setIsImg((prev) => !prev);
          }}
        >
          <div className="imageDiv">
            <Image id="imgWork" alt={props.title} src={props.img} />
          </div>

          <div id="workItemCol">
            <div id="titleRow">
              <h1>{props.title}</h1>
              {props.subtitle && (
                <>
                  <h1> / </h1>
                  <h1>{props.subtitle}</h1>
                </>
              )}
            </div>

            <p>{props.info}</p>
            <p>{props.form}</p>

            <div id="tech">
              <h5>Technologies:</h5>
              {props.tech.map((item, i) => {
                return <p>{item}</p>;
              })}
            </div>
          </div>
          {props.url && (
            <div className="iconCont">
              <a href={props.url} target="about_blank">
                <i class="far fa-arrow-alt-circle-right"></i>
              </a>
            </div>
          )}
        </CardCont>
      </GridItem>
    </Cont>
  );
};

export default Works;
