import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/Context";
import Wrapper from "./Logo.styles";

const Logo = () => {
  const gsap = window.gsap;
  const tl = gsap.timeline();
  const context = useContext(Context);
  const {
    isAbout,
    isSkills,
    isWorks,
    setIsAbout,
    setIsSkills,
    setIsWorks,
  } = context;
  const goHome = () => {
    setIsAbout(false);
    setIsSkills(false);
  };

  useEffect(() => {
    if (isAbout) {
      tl.to(
        "#logo",
        { x: "-30vw", ease: "elastic.out(0.9, 1)" },
        { duration: 1.9 }
      );
    } else if (isSkills) {
      tl.to(
        "#logo",
        { x: "25vw", ease: "elastic.out(0.9, 1)" },
        { duration: 1.9 }
      );
    } else if (isWorks) {
      tl.to(
        "#logo",
        { x: "32vw", ease: "elastic.out(0.9, 1)" },
        { duration: 1.9 }
      );
    } else {
      tl.to(
        "#logo",
        { x: "0vw", ease: "elastic.out(0.9, 1)" },
        { duration: 1.9 }
      );
    }
  }, [isAbout, isSkills, isWorks]);
  return (
    <Wrapper id="logo" onClick={() => goHome()}>
      <h1 className="item">BALAZS DANYADI</h1>
      <h3 className="item">Front-end Developer</h3>
    </Wrapper>
  );
};

export default Logo;
