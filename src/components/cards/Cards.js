import React from "react";
import boys from "./../../assets/boys.jpeg";

import { Typography, Card, Container, CardMedia } from "@mui/material";

const Cards = () => {
  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" heigth="80vh" src={boys} alt="boys" />
        <Typography gutterBottom variant="h3" component="div">
          Boys
        </Typography>
      </Card>
    </Container>
  );
};

export default Cards;
