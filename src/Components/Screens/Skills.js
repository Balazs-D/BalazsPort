import React, { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { Context } from "../../Context/Context";

const SkillsCont = styled.div`
  @media (min-width: 0px) {
    width: 100vw;
    height: 65%;
    display: flex;
    flex-direction: column;
    transform: skewX(0deg);
    justify-content: space-between;
    align-items: center;
    position: absolute;
    overflow-y: scroll;
    overflow-x: hidden;
    font-family: "logo";
    left: 0;
    /* padding-bottom: 20vw; */

    h3 {
      font-size: 8vw;
      /* text-shadow: 1px 1px ${(props) => props.theme.colors.bgPurple}; */
      color: ${(props) => props.theme.colors.mainPurple};
      font-family: "text";
      position: relative;

      &:before {
        content: "";
        width: 80vw;
        height: 5vw;
        background: ${(props) => props.theme.colors.bgPink};
        position: absolute;
        z-index: -1;
        left: -5px;
        top: 10px;
      }
    }
  }

  @media (min-width: 800px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    background-image: none;
    background-color: ${(props) => props.theme.colors.bgYellow};
    border-left: 15px solid ${(props) => props.theme.colors.mainPurple};
    border-right: 15px solid ${(props) => props.theme.colors.mainPurple};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    transform: skewX(20deg);
    overflow: hidden;
    font-family: "logo";
    .cont {
      width: 100%;
      height: 100%;
      padding: 2vw;
      opacity: 0;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      /* background: pink; */
    }

    h3 {
      font-size: 1.6vw;
      &:before {
        content: "";
        width: 10vw;
        height: 1vw;
        background: ${(props) => props.theme.colors.bgBlue};
        position: absolute;
        z-index: -1;
        left: -10px;
        top: 10px;
      }
    }
  }
`;

const GridDiv = styled.div`
  @media (min-width: 0px) {
    width: 100vw;
    display: none;
    flex-direction: column;
  }
  @media (min-width: 800px) {
    transform: skew(-20deg) translate(20%, 20%);
    display: none;
    flex-direction: row;
    width: 70vw;
    flex-wrap: wrap;
  }
`;

const GridItem = styled.div`
  @media (min-width: 0px) {
    margin-right: 1vw;
    width: 100vw;
    padding: 0 5vw;
    color: ${(props) => props.theme.colors.mainPurple};
    /* background-color: pink; */
  }
  @media (min-width: 800px) {
    margin-right: 1vw;
    width: 15vw;
    height: 15vw;
    margin: 1vw;
    padding: 1vw;

    h3 {
      margin: 0;
    }
  }
`;

const Skills = (props) => {
  const gsap = window.gsap;
  const tl = gsap.timeline();
  const context = useContext(Context);
  const { isSkills, isAbout, isContact, isWorks, SkillsList } = context;

  useEffect(() => {
    if (isSkills) {
      tl.set("#cont", { display: "flex" }).to("#cont", { opacity: 1 });
      // .to(".SkillsContAnim", 0.5, { backgroundColor: "#E7DA3E" }, 0);
    } else {
      tl.set("#cont", { display: "none" }).to("#cont", { opacity: 0 });
      // .to(".SkillsContAnim", 0.5, { backgroundColor: "#404255" }, 0)
    }
  }, [isSkills]);

  return (
    <SkillsCont className="SkillsContAnim" id={props.id}>
      {/* <div id="cont"> */}
      <GridDiv id="cont">
        {SkillsList.map((item, i) => {
          return (
            <GridItem id="gridItem">
              <h3>{item.title}</h3>
              {item.list.map((list, i) => {
                return <p key={i}>{list}</p>;
              })}
            </GridItem>
          );
        })}
      </GridDiv>
      {/* </div> */}
    </SkillsCont>
  );
};

export default Skills;
