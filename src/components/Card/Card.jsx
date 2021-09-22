import React from 'react';

function Card({num, prise}) {
  console.log('====================================');
  console.log(num);
  console.log('====================================');
  return (
    <div className="card">
          <img width={133} height={112} src = {num} alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{prise*1000} руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
  );
}

export default Card;
