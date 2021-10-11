// eslint-disable-next-line max-len
/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import styles from "./Card.module.scss";

function Card({ data, addItemsCar, addItemsFavorit, favorited = false }) {
  const { num, prise, name } = data;
  const [add, setAdd] = useState(false);
  const [isLike, setIsLike] = useState(favorited);

  const onClickAdd = () => {
    console.log(data);
    addItemsCar(data);
    setAdd(!add);
  };

  const onClickLike = () => {
    addItemsFavorit(data);
    setIsLike(!isLike);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onClickLike}
          src={isLike ? "/img/heart-on.svg" : "/img/heart-off.svg"}
          alt="heart"
        />
      </div>
      <img width={133} height={112} src={num} alt="Sneakers" />
      <h5>{name}</h5>

      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{prise} руб.</b>
        </div>
        <img
          className="cu-p"
          onClick={onClickAdd}
          src={add ? "/img/chek.svg" : "/img/plus2.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
