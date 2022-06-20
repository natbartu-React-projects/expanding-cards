import React from "react";
import styles from "./Cards.module.css";

import boys from "./../../assets/boys.jpeg";

import { Card, Container, CardMedia, Grid } from "@mui/material";

const Cards = () => {
  return (
    <Container className={styles.containerCard}>
      <Grid className={styles.gridPanel}>
        {[
          { image: boys },
          { image: boys },
          { image: boys },
          { image: boys },
          { image: boys },
          { image: boys },
        ].map((item) => (
          <Card>
            <CardMedia component="img" src={item.image} alt="boys" />
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;
