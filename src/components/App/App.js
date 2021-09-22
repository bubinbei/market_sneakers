
import './App.scss'
import 'macro-css'
import Card from '../Card/Card'

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between aling-center p-40">
        {/* <div className="headerLeft"> */}
        <div className="d-flex align-center">
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
        <h1>
        Все кросcовки  
        </h1>
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
