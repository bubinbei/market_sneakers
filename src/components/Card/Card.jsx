import React, { useEffect, useState } from 'react';
import styles from './Card.module.scss'

function Card({data}) {
  const [add, setAdd] = useState(false)
  const onClickAdd = () => setAdd(!add)
  const {num, prise, name} = data

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
      <img src="/img/heart-off.svg" alt="heart"/>
      </div>
          <img width={133} height={112} src = {num} alt="Sneakers" />
          <h5>{name}</h5>
          
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{prise} руб.</b>
            </div>
              <img className="cu-p" onClick={onClickAdd} src={add?"/img/chek.svg":"/img/plus2.svg"} alt="Plus"/>
            </div>
        </div>
  );
}

export default Card;
