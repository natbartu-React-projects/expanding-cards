import React from "react";
import styles from "./App.module.css";

import { images } from "../../data/data";

import { Container, Typography } from "@mui/material";

import ExpandingCard from "../expandingCard/ExpandingCard";

function App() {
  return (
    <Container disableGutters={true}>
      <Typography
        variant="h3"
        className="header"
        style={{
          fontFamily: "Dancing Script, cursive",
          textAlign: "center",
          color: "whitesmoke",
          textShadow: "1px 1px #aafa32",
          padding: "10px",
          marginTop: "10px",
        }}>
        Criando Memórias
      </Typography>
      <Container disableGutters={true} className={styles.mainContainer}>
        <ExpandingCard data={images} />
      </Container>
    </Container>
  );
}

export default App;
