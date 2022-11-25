import React from "react";
import styles from "./Card.module.css";
function Card(props) {
  const selectCard = () => {
    props.setToggle(props.togglekey);
  };
  return (
    <div data-aos="fade-up">
      <div
        className={
          props.togglekey == props.toggle ? styles.card_selected : styles.card
        }
        onClick={selectCard}
      >
        {props.icon}
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}

export default Card;
