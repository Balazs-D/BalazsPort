import React, { useEffect } from "react";
import styled from "styled-components";

const CardCont = styled.div`
  @media (min-width: 0px) {
    font-family: "logo";

    p {
      color: ${(props) => props.theme.colors.bgYellow};
      -webkit-text-stroke: 1px ${(props) => props.theme.colors.mainPurple};
      text-shadow: -2px 2px 0px ${(props) => props.theme.colors.mainPurple};
      font-size: 8vw;
      margin: 5vw 0;
    }
  }

  @media (min-width: 800px) {
    /* width: 60vw; */
    margin-bottom: 1vw;

    p {
      text-align: end;
      font-size: 3vw;
      margin: 0;
      padding: 0.5vw 0.5vw 0vw 0.5vw;
    }
  }
`;

const Item = (props) => {
  const gsap = window.gsap;
  const tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo("#aboutItem", { x: -200 }, { x: 0 });
  }, []);
  return (
    <CardCont onClick={props.onClick} id="aboutItem">
      <p>{props.text}</p>
    </CardCont>
  );
};

export default Item;
