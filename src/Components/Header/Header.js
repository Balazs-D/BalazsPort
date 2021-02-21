import React from "react";

import styled from "styled-components";
import Logo from "../Logo/Logo";
import Navbar from "./Navbar";

const Container = styled.div`
  width: 25vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <Logo />
      <Navbar />
    </Container>
  );
};

export default Header;
