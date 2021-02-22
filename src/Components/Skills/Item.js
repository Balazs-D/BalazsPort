import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../Context/Context";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Link from "../../Graphics/1x/link.png";

const Works = (props) => {
  const context = useContext(Context);
  const { Works } = context;

  const Cont = styled(Grid)`
    padding: 7vw;
  `;
  const CardCont = styled(CardContent)`
    background-color: ${(props) => props.theme.colors.bgBlue};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    i {
      font-size: 3vw;
    }
    a {
      color: ${(props) => props.theme.colors.dark};
      &:hover {
        color: ${(props) => props.theme.colors.bgYellow};
        -webkit-text-stroke: 2px ${(props) => props.theme.colors.dark};
        cursor: url(${Link}), auto;
      }
    }
  `;
  const CardItem = styled.div`
    width: 27vw;
  `;
  const Image = styled(CardMedia)`
    height: 12vw;
    width: 24vw;
  `;
  const GridItem = styled(Grid)`
    border: 3px solid ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.dark};
    box-shadow: -5px 5px 0 ${(props) => props.theme.colors.dark};
    #titleRow {
      display: flex;
    }
    #workItemCol {
      display: flex;
      flex-direction: column;
    }
    h1 {
      margin: 0vw 1vw 0vw 0;
      font-family: "logo";
    }

    p,
    h5 {
      margin: 0 0 1vw 0;
      font-family: "logo";
    }

    #tech {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h5  {
        margin: 0.5vw 0;
        font-size: 1vw;
      }
      p {
        margin: 0;
        text-align: start;
      }
    }
  `;

  return (
    <Cont container xs={12}>
      <GridItem xs={12} item>
        <CardItem>
          {/* <Image title={props.title} image={props.img} /> */}
          <CardCont>
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
            <a href={props.url} target="about_blank">
              <i class="far fa-arrow-alt-circle-right"></i>
            </a>
          </CardCont>
        </CardItem>
      </GridItem>
    </Cont>
  );
};

export default Works;
