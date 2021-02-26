import React, { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { Context } from "../../Context/Context";

const SkillsCont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.theme.colors.bgYellow};
  border-left: 15px solid ${(props) => props.theme.colors.mainPurple};
  border-right: 15px solid ${(props) => props.theme.colors.mainPurple};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  transform: skewX(20deg) rotate(0deg);
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
    border: 1px dashed green;
    background: pink;
  }

  h3 {
    font-size: 1.6vw;
    /* text-shadow: 1px 1px ${(props) => props.theme.colors.bgPurple}; */
    color: ${(props) => props.theme.colors.mainPurple};
    font-family: "text";
    position: relative;

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

  p {
    color: ${(props) => props.theme.colors.mainPurple};
  }
`;

const GridDiv = styled.div`
  transform: skew(-20deg) translate(30%, 20%);
  display: flex;
  width: 50vw;
  flex-wrap: wrap;
`;

const GridItem = styled.div`
  margin-right: 1vw;
  width: 20vw;
`;

const Skills = (props) => {
  const gsap = window.gsap;
  const tl = gsap.timeline();
  const context = useContext(Context);
  const { isSkills, SkillsList } = context;

  useEffect(() => {
    if (isSkills) {
      tl.set("#cont", { display: "flex" }).to("#cont", { opacity: 1 });
    } else {
      tl.set("#cont", { display: "none" }).to("#cont", { opacity: 0 });
    }
  }, [isSkills]);

  return (
    <SkillsCont id={props.id}>
      <div id="cont">
        <GridDiv>
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
      </div>
    </SkillsCont>
  );
};

export default Skills;
