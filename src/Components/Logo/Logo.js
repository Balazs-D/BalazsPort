import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/Context";
import Wrapper from "./Logo.styles";
import memphis from "../../Graphics/1x/memphis.png";

const Logo = () => {
  const gsap = window.gsap;
  const tl = gsap.timeline();
  const context = useContext(Context);
  const W = window.innerWidth;

  const {
    isAbout,
    isSkills,
    isWorks,
    setIsAbout,
    setIsSkills,
    setIsWorks,
    setIsContact,
  } = context;
  const goHome = () => {
    setIsAbout(false);
    setIsSkills(false);
    setIsContact(false);
    setIsWorks(false);
  };

  useEffect(() => {
    if (W > 800) {
      if (isAbout) {
        tl.to(
          "#logo",
          { x: "10vw", ease: "elastic.out(0.9, 1)" },
          { duration: 1.9 }
        );
      } else if (isSkills) {
        tl.to(
          "#logo",
          { x: "65vw", ease: "elastic.out(0.9, 1)" },
          { duration: 1.9 }
        );
      } else if (isWorks) {
        tl.to(
          "#logo",
          { x: "70vw", ease: "elastic.out(0.9, 1)" },
          { duration: 1.9 }
        );
      } else {
        tl.to(
          "#logo",
          { x: "37vw", ease: "elastic.out(0.9, 1)" },
          { duration: 1.9 }
        );
      }
    }
  }, [isAbout, isSkills, isWorks]);
  return (
    <Wrapper id="logo" onClick={() => goHome()}>
      {/* <img src={memphis} alt="background" /> */}
      <h1 className="item">BALAZS DANYADI</h1>
      <h3 className="item">Front-end Developer</h3>
    </Wrapper>
  );
};

export default Logo;
