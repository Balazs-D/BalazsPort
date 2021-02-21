import React, { useState, useContext } from "react";
import styled from "styled-components";
import ContextContainer from "./Context/Container";
import { Context } from "./Context/Context";
import Theme from "./Style/Theme";
import GlobalFonts from "./Style/Global";
import Header from "./Components/Header/Header";
import About from "./Components/Screens/About";
import Skills from "./Components/Screens/Skills";

import Navbar from "./Components/Header/Navbar";
import Logo from "./Components/Logo/Logo";
import MainCont from "./Components/Screens/Main";
const App = () => {
  return (
    <ContextContainer>
      <Theme>
        <GlobalFonts />
        <MainCont>
          <About id="about" />
          <Skills />
          <Navbar />
          <Logo />
        </MainCont>
      </Theme>
    </ContextContainer>
  );
};

export default App;
