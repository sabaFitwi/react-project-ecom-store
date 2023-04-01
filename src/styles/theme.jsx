import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: "#333",
    button: "#4a4325",
    lightgray: "lightgray",
    green: "#3cb371",
    default: "#fff",
    pink: "pink",
    red: "#ff0000",
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
