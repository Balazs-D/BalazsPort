import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../../Context/Context";
import TriangleOne from "../../Graphics/SVG/i01.svg";
import TriangleTwo from "../../Graphics/SVG/i02.svg";
import ItemOne from "../../Graphics/SVG/i03.svg";
import ItemTwo from "../../Graphics/SVG/i04.svg";
import ItemThree from "../../Graphics/SVG/i05.svg";

const AnimCont = styled.div`
  @media (min-width: 0px) {
    width: 100vw;
    height: 100%;
    position: absolute;
    display: none;
    /* transform: translateY(50%); */
    .small {
      filter: drop-shadow(
        0px 0px 0px ${(props) => props.theme.colors.mainPurple}
      );
      transition: all 0.1s linear;

      &:hover {
        filter: drop-shadow(
            5px -5px 20px ${(props) => props.theme.colors.bgBlue}
          )
          hue-rotate(210deg);
      }
    }

    .large {
      filter: drop-shadow(
        -5px 5px 0px ${(props) => props.theme.colors.mainPurple}
      );
      transition: all 0.1s linear;

      &:hover {
        filter: drop-shadow(
            5px -5px 0px ${(props) => props.theme.colors.mainPurple}
          )
          hue-rotate(300deg);
      }
    }

    /* Orange Triangle */
    & :nth-child(1) {
      width: 40%;
      position: absolute;
      transform: translate(-100vw) rotate(-30deg);
    }
    /* Pink Triangle */
    & :nth-child(2) {
      width: 25%;
      position: absolute;
      transform: translate(100vw);
    }

    /* Square Item */
    & :nth-child(3) {
      width: 3.5%;
      position: absolute;
      /* top: 16%;
    left: 39%; */
      transform: translate(-50vw, -50vh);
    }

    /* Snake Item */
    & :nth-child(4) {
      width: 8.5%;
      position: absolute;
      top: 18%;
      left: 62%;
      transform: translate(50vw, 50vh);
    }

    /* Snake Item */
    & :nth-child(5) {
      width: 3.5%;
      position: absolute;
      top: 5%;
      left: 57%;
      transform: translate(30vw, -50vh);
    }
  }
  @media (min-width: 800px) {
    width: 100vw;
    height: 100%;
    position: absolute;
    visibility: visible;
    display: inline-block;
  }
`;

const IntroAnim = (props) => {
  const gsap = window.gsap;
  const tl = gsap.timeline();
  const context = useContext(Context);
  const W = window.innerWidth;
  const { isAbout, isSkills, isWorks, isContact, setIsAbout } = context;

  useEffect(() => {
    if (isWorks || isContact || isAbout || isSkills) {
      tl.to(
        "#item01",
        1,
        {
          x: "-50vw",
          y: "-50vw",
          ease: "elastic.out(1, 0.8)",
        },
        0
      )
        .to(
          "#item02",
          1,
          {
            x: "120vw",
            y: "60vw",
            ease: "elastic.out(0.9, 0.7)",
          },
          0
        )
        .to(
          "#item03",
          1,
          {
            x: "-36vw",
            y: "-16vh",
            ease: "elastic.out(0.7, 0.7)",
          },
          0
        )
        .to(
          "#item04",
          1,
          {
            x: "40vw",
            y: "20vh",
            ease: "elastic.out(0.8, 0.3)",
          },
          0
        )
        .to(
          "#item05",
          1,
          {
            x: "5vw",
            y: "-25vh",
            ease: "elastic.out(0.7, 0.5)",
          },
          0
        )
        .to(
          "#animCont",
          0,
          {
            visibility: "hidden",
          },
          1
        );
    } else {
      tl.set("#animCont", {
        visibility: "visible",
      })
        .to(
          "#item01",
          0.8,
          {
            x: "30vw",
            y: "7vw",
            ease: "elastic.out(1, 0.8)",
          },
          0.5
        )
        .to(
          "#item02",
          2,
          {
            x: "48vw",
            y: "0vw",
            ease: "elastic.out(0.9, 0.7)",
          },

          0.5
        )
        .to(
          "#item03",
          2,
          {
            x: "36vw",
            y: "16vh",
            ease: "elastic.out(0.7, 0.7)",
          },

          0.6
        )
        .to(
          "#item04",
          1.8,
          {
            x: "-4vw",
            y: "0vh",
            ease: "elastic.out(0.8, 0.3)",
          },

          0.7
        )
        .to(
          "#item05",
          1.8,
          {
            x: "0vw",
            y: "0vh",
            ease: "elastic.out(0.7, 0.5)",
          },

          0.7
        );
    }

    //eslint-disable-next-line
  }, [isAbout, isSkills, isWorks, isContact]);

  return (
    <AnimCont id="animCont">
      <img id="item01" src={TriangleOne} className="large" alt="item" />
      <img id="item02" src={TriangleTwo} className="large" alt="item" />
      <img id="item03" src={ItemOne} className="small" alt="item" />
      <img id="item04" src={ItemTwo} className="small" alt="item" />
      <img id="item05" src={ItemThree} className="small" alt="item" />
    </AnimCont>
  );
};

export default IntroAnim;
