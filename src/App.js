import "./App.css";

import Nav from "./components/Nav";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import blue from "@material-ui/core/colors/blue";

import test from "./test.jpg";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: blue[500],
    },
  },
});

function App() {
  const [src, setSrc] = React.useState("");
  console.log(src);
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundImage: src === "" ? `url(${test})` : src,
          backgroundSize: "100% 100%",
          width: "100%",
          height: "100vh",
        }}
      >
        <Nav src={src} setSrc={setSrc} />
      </div>
    </ThemeProvider>
  );
}

export default App;
