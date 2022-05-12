import React, { useState, useEffect } from "react";
import Wrapper from "./About.styles";
import Item from "../About/Item";

const TextArr = [
  [
    "I am a Germany based",
    "frontend developer with a passion",
    "for modern web technologies.",
  ],
  [
    "I love making pages come to life ",
    "using UI effects",
    "for a  dynamic user experience.",
  ],
  ["I enjoy turning problems", "into beautiful and", "intuitive designs."],
  [
    "My work is",
    "responsive and optimized for",
    "diverse devices and browsers.",
  ],
];

const About = (props) => {
  const [text, setText] = useState();
  const [counter, setCounter] = useState(0);

  const handleNext = (e) => {
    if (counter === TextArr.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }

    setText(TextArr[counter]);
  };
  const handleBack = (e) => {
    if (counter === 0) {
      setCounter(+TextArr.length - 1);
    } else {
      setCounter(counter - 1);
    }

    setText(TextArr[counter]);
  };

  useEffect(() => {}, []);

  console.log(text);
  return (
    <Wrapper onClick={props.onClick} id={props.id}>
      {TextArr.map((item, i) => {
        if (i === counter) {
          return item.map((item, i) => <Item text={item} key={i} />);
        }
      })}

      <div className="control">
        <button className="button" onClick={handleBack}>
          <i class="fas fa-chevron-circle-left fa-3x"></i>
        </button>
        <div className="paginationCont">
          {TextArr.map((item, i) => {
            const classCurrent =
              counter === i ? "paginationSelected" : "pagination";
            return <div className={classCurrent} key={i}></div>;
          })}
        </div>
        <button className="button" onClick={handleNext}>
          <i class="fas fa-chevron-circle-right fa-3x"></i>
        </button>
      </div>
    </Wrapper>
  );
};

export default About;
