
import './App.scss'
import 'macro-css'
function App() {
  return (
    <div className="wrapper">
      <header className="d-flex justify-between">
        {/* <div className="headerLeft"> */}
        <div className="d-flex align-center">
          <img width={60} height={60} src="/img/m_pngegg.png" />
          <div className="hederInfo">
            <h3>React Sneakers</h3>
            <p>Магазин оригинальных кросовок</p>
          </div>
        </div>
       <ul className="hederRight">
         <li><img width={20} height={20} src="/img/car.svg" />
          <span>1505 руб.</span>
         </li>
         <li><img width={20} height={20} src="/img/user.svg" /></li>
       </ul>
      </header>
      <div className="content">
        <h1>
        Все кросовки  
        .......
        </h1>
      </div>
    </div>
  );
}

export default App;
