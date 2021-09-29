import React from 'react';

function Draver(props) {
  return (
    <div>
      <div style ={{display:'none'}} className="overlay">
        <div className="drawer d-flex flex-column">
          <h2>Корзина</h2>
          <div className="item flex">

          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers" />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="btnDelete" src="/img/Delete.svg" alt="Delete" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers" />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="btnDelete" src="/img/Delete.svg" alt="Delete" />
          </div>
        </div>

          <ul className="cartTotalBlock mb-20">
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21333 руб.</b>
            </li>
            <li>
              <span>НДС:</span>
              <div></div>
              <b>1 045 руб.</b>
            </li>
            <button>оформить заказ</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Draver;
