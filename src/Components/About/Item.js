import React from "react";
import styled from "styled-components";

const CardCont = styled.div`
  /* width: 60vw; */
  margin-bottom: 1vw;
  font-family: "logo";

  p {
    /* border: 2px solid black; */
    font-size: 3vw;
    margin: 0;
    padding: 0.5vw 0.5vw 0vw 0.5vw;
    color: ${(props) => props.theme.colors.bgYellow};
    -webkit-text-stroke: 1px ${(props) => props.theme.colors.mainPurple};
    text-shadow: -2px 2px 0px ${(props) => props.theme.colors.mainPurple};
  }
`;

const Item = (props) => {
  return (
    <CardCont onClick={props.onClick} id={props.id}>
      <p>{props.text}</p>
    </CardCont>
  );
};

export default Item;
