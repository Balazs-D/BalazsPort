import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../../Context/Context";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Link from "../../Graphics/1x/link.png";

const Cont = styled(Grid)`
  padding: 7vw;
`;

const GridItem = styled(Grid)`
  color: ${(props) => props.theme.colors.mainPurple};
  display: flex;
  height: 12vw;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;

  #titleRow {
    display: flex;
  }
  #workItemCol {
    display: flex;
    flex-direction: column;
  }
  h1 {
    margin: 0 1vw 0 0;
    font-family: "logo";
  }

  p,
  h5 {
    margin: 0 0 2vw 0;
    font-family: "logo";
  }

  #tech {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h5  {
      font-size: 1vw;
      margin: 0.5vw 0;
    }
    p {
      margin: 0;
      text-align: start;
    }
  }
`;
const CardCont = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border: 3px solid ${(props) => props.theme.colors.mainPurple};
  box-shadow: -5px 5px 0 ${(props) => props.theme.colors.mainPurple};
  background-color: ${(props) => props.theme.colors.bgBlue};
  margin: 0;
  margin-left: 1vw;
  width: 30vw;
  transition: all 0.3s linear;

  .iconCont {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  i {
    font-size: 3vw;
  }
  a {
    color: ${(props) => props.theme.colors.mainPurple};
    transition: all 0.2s linear infinity;
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
`;

const Image = styled.img`
  height: 7.5vw;
  width: 15vw;
  border: 3px solid ${(props) => props.theme.colors.dark};
  box-shadow: -5px 5px 0 ${(props) => props.theme.colors.dark};
  background-color: ${(props) => props.theme.colors.bgBlue};
  position: absolute;
  z-index: -1;
  right: -16vw;
  top: -0vw;
  visibility: hidden;
  transform: translate(-100%);
`;

const Works = (props) => {
  const context = useContext(Context);
  const { Works } = context;
  const [isImg, setIsImg] = useState(false);
  const gsap = window.gsap;
  const tl = gsap.timeline();

  useEffect(() => {
    if (isImg) {
      tl.to("#imgWork", { visibility: "visible", x: 0, autoAlpha: 1 });
    } else {
      tl.to("#imgWork", { x: "-100%", autoAlpha: 0 }).to("#imgWork", {
        visibility: "hidden",
      });
    }
  }, [isImg]);

  return (
    <Cont container xs={12}>
      <GridItem xs={12} item>
        <Image id="imgWork" alt={props.title} src={props.img} />

        <CardCont
          onMouseEnter={() => {
            setIsImg((prev) => !prev);
          }}
          onMouseLeave={() => {
            setIsImg((prev) => !prev);
          }}
        >
          <div id="workItemCol">
            <div id="titleRow">
              <h1>{props.title}</h1>
              <h1> / </h1>
              <h1>{props.subtitle}</h1>
            </div>
            <p>{props.form}</p>

            <div id="tech">
              <h5>Technologies:</h5>
              {props.tech.map((item, i) => {
                return <p>{item}</p>;
              })}
            </div>
          </div>
          <div className="iconCont">
            <a href={props.url} target="about_blank">
              <i class="far fa-arrow-alt-circle-right"></i>
            </a>
          </div>
        </CardCont>
      </GridItem>
    </Cont>
  );
};

export default Works;
