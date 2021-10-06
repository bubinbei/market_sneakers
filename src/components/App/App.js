import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.scss'
import 'macro-css'
import Card from '../Card/Card'
import Header from '../Header/Header';
import Drawer from '../Drawer/Draver'


function App() {
  const [items, setItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [itemsCar, setItemsCar] = useState([])
  const [car, setCar] = useState(false)
  useEffect (()=>{
    // fetch('https://6159ea49601e6f0017e5a350.mockapi.io/items')
    // .then(res => res.json())
    // .then(req => setItems(req))
    axios.get('https://6159ea49601e6f0017e5a350.mockapi.io/items')
    .then(res => setItems(res.data))
    axios.get('https://6159ea49601e6f0017e5a350.mockapi.io/cart')
    .then(res => setItemsCar(res.data))
  },[])
  const onClickCar = () => setCar(!car)
  const onSearchInput = (event) => setSearchValue(event.target.value)

  const addItemsCar = (item) => {
    axios.post('https://6159ea49601e6f0017e5a350.mockapi.io/cart', item)
    setItemsCar(prev => [...prev, item])}
    
  const addItemsFavorit = (item) => {
    axios.post('https://6159ea49601e6f0017e5a350.mockapi.io/favorit', item)
    setItemsCar(prev => [...prev, item])}

  const deleteItemCar = (id) => {
    axios.delete(`https://6159ea49601e6f0017e5a350.mockapi.io/cart/${id}`)
    console.log("deleteItemCar - " + id);
    setItemsCar(prev => prev.filter(item=>item.id!==id))}

  return (
    <div className = "wrapper clear">
          {car && <Drawer deleteItemCar={deleteItemCar} itemsCar={itemsCar} onClickCar={onClickCar}/>}
          <Header onClickCar={onClickCar} />
      <div className="content p-40">
        <div className="d-flex aligh-center justify-between mb-40">
          <h1> {searchValue ? `Поиск: "` + searchValue + `"` : "Все кросcовки"} </h1>
          <div className="search-block d-flex">
            <img src="/img/Search.svg" alt="Search" />
            <input onChange={onSearchInput} 
                    value={searchValue} 
                    placeholder="Поиск..." />
            {searchValue && <img  className="cu-p " 
                width={30} height={30} 
                src="/img/Delete.svg" 
                alt="delete search" 
                onClick={() => setSearchValue('')}/>}
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
          .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
          .map((data, index) => 
          <Card 
          key={index}
          addItemsFavorit={addItemsFavorit}
          addItemsCar={addItemsCar} 
          data = {data}/>
            )}
          
        </div>
      </div>
    </div>
  );
}

export default App;

