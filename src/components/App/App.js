
import './App.scss'
import 'macro-css'
import { useEffect, useState } from 'react';
import Card from '../Card/Card'
import Header from '../Header/Header';
import Drawer from '../Drawer/Draver'

function App() {
  const [items, setItems] = useState([])
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
  useEffect (()=>{
    fetch('https://6159ea49601e6f0017e5a350.mockapi.io/items')
    .then(res => res.json())
    .then(req => setItems(req))
  },[])

  const [car, setCar] = useState(false)
 
  return (
    <div className = "wrapper clear">
          {car && <Drawer onClickCar={ () => setCar(false) }/>}
          <Header onClickCar={ () => setCar(true) } />
      <div className="content p-40">
        <div className="d-flex aligh-center justify-between mb-40">
          <h1> Все кросcовки </h1>
          <div className="search-block d-flex">
            <img src="/img/Search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map(data => 
          <Card data = {data}/>
            )}
          
        </div>
      </div>
    </div>
  );
}

export default App;

