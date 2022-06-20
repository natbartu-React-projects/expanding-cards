import React from "react";
import styles from "./Cards.module.css";

import boys from "./../../assets/boys.jpeg";

import { Card, Container, CardMedia, Grid } from "@mui/material";

const Cards = () => {
  return (
    <Container className={styles.containerCard}>
      <Grid className={styles.gridPanel}>
        <Card>
          <CardMedia component="img" src={boys} alt="boys" />
        </Card>
      </Grid>
    </Container>
  );
};

export default Cards;
