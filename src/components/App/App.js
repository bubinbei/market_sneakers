
import './App.scss'
import 'macro-css'
import Card from '../Card/Card'
import Header from '../Header/Header';
import Drawer from '../Drawer/Draver'

function App() {
    const arr = [{
      name:"Мужские Кроссовки Nike Blazer Mid Suede",
      key:1,
      prise:1,
      num: "/img/sneakers/1.jpg"},
      {
        name:"Мужские Кроссовки Nike Air Max 270",
        key:2,
        prise:1.5,
        num: "/img/sneakers/2.jpg"},
        {
          name:"Мужские Кроссовки Nike Blazer Mid Suede",
          key:3,
          prise:2,
          num: "/img/sneakers/3.jpg"},
          {
            name:"Мужские Кроссовки Nike Blazer Mid Suede",
            key:1,
            prise:1,
            num: "/img/sneakers/1.jpg"},
            {
              name:"Мужские Кроссовки Nike Air Max 270",
              key:2,
              prise:1.5,
              num: "/img/sneakers/2.jpg"},
              {
                name:"Мужские Кроссовки Nike Blazer Mid Suede",
                key:3,
                prise:2,
                num: "/img/sneakers/3.jpg"}
    ]
    
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex aligh-center justify-between mb-40">
          <h1> Все кросcовки </h1>
          <div className="search-block d-flex">
            <img src="/img/Search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map(data => 
          <Card data = {data}/>
            )}
          
        </div>
      </div>
    </div>
  );
}

export default App;
