import "./App.css";

import Nav from "./components/Nav";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import blue from "@material-ui/core/colors/blue";

import React, { useEffect } from "react";
import db from "./components/firebase";

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
      light: indigo[700],
      dark: indigo[300],
    },
    secondary: {
      main: blue[800],
      light: blue[700],
      dark: blue[300],
    },
  },
});

function App() {
  const [src, setSrc] = React.useState("");
  useEffect(() => {
    if (localStorage.getItem("image") !== null) {
      if (localStorage.getItem("image").date !== new Date().getDate()) {
        try {
          db.collection("app")
            .doc("data")
            .get()
            .then((x) => {
              setSrc(x.data().image);
              localStorage.setItem(
                "image",
                JSON.stringify({
                  date: new Date().getDate(),
                  image: x.data().image,
                })
              );
            });
        } catch (e) {}
      } else {
        setSrc(JSON.parse(localStorage.getItem("image")).image);
      }
    } else {
      localStorage.setItem(
        "image",
        JSON.stringify({
          date: 0,
          image: "",
        })
      );
      try {
        db.collection("app")
          .doc("data")
          .get()
          .then((x) => {
            setSrc(x.data().image);
            localStorage.setItem(
              "image",
              JSON.stringify({
                date: new Date().getDate(),
                image: x.data().image,
              })
            );
          });
      } catch (e) {}
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundImage: `url(${src})`,
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
