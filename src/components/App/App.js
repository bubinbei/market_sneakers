
import './App.scss'
import 'macro-css'
import Card from '../Card/Card'

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer d-flex flex-column">
          <h2>Корзина</h2>
          <div className="item flex">

          <div className="cartItem d-flex align-center">

            <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers" />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="btnDelete" src="/img/Delete.svg" alt="Delete" />
          </div>
          <ul className="cartTotalBlock">
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
          </ul>
        </div>
        <button>оформить заказ</button>
        </div>
      </div>
      <header className="d-flex justify-between aling-center p-40">
        <div c  lassName="d-flex align-center">
          <img width={60} height={60} src="/img/m_pngegg.png" />
          <div  >
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-6">Магазин оригинальных кросовок</p>
          </div>
        </div>
       <ul className="d-flex">
         <li className="mr-30"><img width={20} height={20} src="/img/car.svg" />
          <span>1505 руб.</span>
         </li>
         <li><img width={20} height={20} src="/img/user.svg" /></li>
       </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex aligh-center justify-between mb-40">
          <h1> Все кросcовки </h1>
          <div className="search-block d-flex">
            <img src="/img/Search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          <Card key = {1} prise = {1} num = {"/img/sneakers/1.jpg"}/>
          <Card key = {2} prise = {2} num = {"/img/sneakers/2.jpg"}/>
          <Card key = {3} prise = {3} num = {"/img/sneakers/3.jpg"}/>
          <Card key = {4} prise = {4} num = {"/img/sneakers/4.jpg"}/>
        </div>
        {/* <div className="card">
          <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
