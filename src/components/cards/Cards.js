import React from "react";

import styles from "./Cards.module.css";

import { Typography, CardMedia, Container } from "@mui/material";
//import { styled } from "@mui/material/styles";

// const Responsive = styled("div")(({ theme }) => ({
//   [theme.breakpoint.down("sm")]: {

//   },
// }));

const Cards = (props) => {
  const { id, url, title, active } = props.data;

  return (
    <Container disableGutters={true} className={styles.cardMediaContainer}>
      <CardMedia
        key={id}
        className={active ? styles.cardActive : styles.card}
        style={{ backgroundImage: `url(${url})` }}
        onClick={() => props.onCardClick(id)}
        alt="kids">
        {active ? (
          <Typography
            variant="h5"
            style={{
              color: "#aafa32",
              fontFamily: "Dancing Script, cursive",
              position: "relative",
              textAlign: "center",
            }}>
            {title}
          </Typography>
        ) : (
          <span />
        )}
      </CardMedia>
    </Container>
  );
};

export default Cards;
