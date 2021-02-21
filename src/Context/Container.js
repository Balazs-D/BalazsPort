import React, { Fragment, useState } from "react";
import { Context } from "./Context";

const Container = (props) => {
  const [isAbout, setIsAbout] = useState(false);

  return (
    <Context.Provider value={{ isAbout, setIsAbout }}>
      <Fragment>{props.children}</Fragment>
    </Context.Provider>
  );
};

export default Container;
