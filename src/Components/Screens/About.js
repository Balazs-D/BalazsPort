import React from "react";
import Wrapper from "./About.styles";
import Item from "../About/Item";

const Text = [
  " Berlin based frontend developer",
  "with a passion",
  "for modern web technologies.",
];

const About = (props) => {
  return (
    <Wrapper onClick={props.onClick} id={props.id}>
      {Text.map((item, i) => {
        return <Item text={item} key={i} />;
      })}
    </Wrapper>
  );
};

export default About;
