import React from 'react';
import { Link } from 'react-router-dom'
function Header(props) {
  return (
    <>
      <header className="d-flex justify-between aling-center p-40">
        <Link to="/">
        <div className="d-flex align-center">
          <img width={60} height={60} src="/img/m_pngegg.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-6">Магазин оригинальных кросовок</p>
          </div>
        </div>
        </Link>
       <ul className="d-flex align-center">
         <li className="mr-30 cu-p">
          <img 
          width={20} 
          height={20} 
          src="/img/car.svg" 
          onClick={props.onClickCar} 
          alt="car"/>
          <span>1505 руб.</span>
         </li>
          <li className="mr-30 cu-p">
            <Link to="/favorite">
              <img width={21} height={21} src="/img/heart.svg" alt="heart"/>
            </Link>
          </li>
          <li className="mr-20 cu-p">
           <img width={20} height={20} src="/img/user.svg" alt="user"/>
          </li>
       </ul>
      </header>
    </>
  );
}

export default Header;
