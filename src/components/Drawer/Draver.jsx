import React from 'react';

function Draver({itemsCar=[], onClickCar, deleteItemCar}) {
  console.log('====================================');
  console.log(itemsCar);
  console.log('====================================');
  return (
    <div>
      {/* <div style ={{display:'none'}} className="overlay"> */}
      <div className="overlay">
        <div className="drawer d-flex flex-column">
          <div className="headDrawer d-flex justify-between aling-center mb-20">
          <h2>Корзина{itemsCar.length == 0 &&' пуста'}</h2>
          <img  className="cu-p " 
                width={33} 
                height={33} 
                src="/img/Delete.svg" 
                alt="Delete drawer" 
                onClick={onClickCar}
          />
          </div>
        
          <div className="item flex">
          {itemsCar.map((data, index )=> 
          <div key={index}
             className="cartItem d-flex align-center mb-20">
            <img  className="mr-20" 
                  width={70} 
                  height={70} 
                  src={data.num}
                  alt="Sneakers" />
            <div className="mr-20">
              <p className="mb-5">{data.name}</p>
              <b>{data.price}</b>
            </div>
            <img  className="btnDelete" 
                  src="/img/Delete.svg" 
                  alt="Delete"
                  onClick={() => deleteItemCar(data.key)}
            />
          </div>
            )}

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
    </div>
  );
}

export default Draver;
