
  import React from "react";
  import { ThemeProvider } from "styled-components";
  
  const theme = {
    colors: {
        color1:'#000a30',
        color2:'#003865',
        color3:'#23c3ff',
        color4:'#718092',
        color5:'#ff990e',
        grey1: '#e6e9ed',
        fontcolor: '#434343',
        white:'#fff'
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em"
    }
  };
  
  const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  
  export default Theme;