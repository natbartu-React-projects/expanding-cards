import React, { useState } from "react";
import styles from "./ExpandingCard.module.css";

import Cards from "../cards/Cards";

import { Grid } from "@mui/material";

const ExpandingCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState(props.data);

  const onCardClick = (id) => {
    const newState = [...data];

    newState.map((item) =>
      item.id === id ? (item.active = true) : (item.active = false)
    );

    setData(newState);
  };

  if (!data || data.length <= 0) {
    return "No data to render cards!";
  } else {
    return (
      <Grid className={styles.gridDisplayCards}>
        {data.map((card) => (
          <Cards
            key={card.id}
            data={card}
            onClick={() => setIsOpen(!isOpen)}
            onCardClick={onCardClick}
          />
        ))}
      </Grid>
    );
  }
};

export default ExpandingCard;
