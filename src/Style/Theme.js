import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    bgBlue: "#6DF2EE",
    bgPurple: "#F966EA",
    bgYellow: "#E7DA3E",
    mainPurple: "#624B9D",
  },
  fontSizes: {},
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
