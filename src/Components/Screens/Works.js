import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { Works as WrapperWorks } from "./Works.style";

import Item from "../Skills/Item";

const Works = (props) => {
  const context = useContext(Context);
  const { Works } = context;
  return (
    <WrapperWorks id={props.id}>
      {Works.map((item, i) => {
        return (
          <Item
            key={i}
            title={item.title}
            subtitle={item.subtitle}
            img={item.images}
            tech={item.tech}
            form={item.form}
            url={item.url}
            info={item.info}
          />
        );
      })}
    </WrapperWorks>
  );
};

export default Works;
