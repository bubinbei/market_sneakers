import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.scss'
import 'macro-css'

import Header from '../Header/Header';
import Drawer from '../Drawer/Draver'
import { Route } from 'react-router';
import Home from '../Home/Home';
import Favorites from '../Favorites/Favorites';


function App() {
  const [items, setItems] = useState([])
  const [favorits, setFavorits] = useState([])
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
    axios.get('https://6159ea49601e6f0017e5a350.mockapi.io/favorit')
    .then(res => setFavorits(res.data))
  },[])
  const onClickCar = () => setCar(!car)
  const onSearchInput = (event) => setSearchValue(event.target.value)

  const addItemsCar = (item) => {
    axios.post('https://6159ea49601e6f0017e5a350.mockapi.io/cart', item)
    setItemsCar(prev => [...prev, item])}
    
  const addItemsFavorit = (item) => {
    console.log(item);
    if(favorits.find((obj) => obj.id === item.id)){
      axios.delete(`https://6159ea49601e6f0017e5a350.mockapi.io/favorit/${item.id}`)
      setFavorits(prev => prev.filter(el => el.id !== item.id))
    }else{
      axios.post('https://6159ea49601e6f0017e5a350.mockapi.io/favorit', item)
      setItemsCar(prev => [...prev, item])
    }
  }

  const deleteItemCar = (id) => {
    axios.delete(`https://6159ea49601e6f0017e5a350.mockapi.io/cart/${id}`)
    console.log("deleteItemCar - " + id);
    setItemsCar(prev => prev.filter(item=>item.id!==id))}

  return (
    <div className = "wrapper clear">
          {car && <Drawer deleteItemCar={deleteItemCar} itemsCar={itemsCar} onClickCar={onClickCar}/>}
      <Header onClickCar={onClickCar} />
      <Route path="/" exact> 
      <Home 
            items={items}
            onSearchInput={onSearchInput}
            addItemsFavorit={addItemsFavorit}
            addItemsCar={addItemsCar}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />
      </Route> 

      <Route path="/favorite">
        <Favorites 
                  items={favorits}
                  addItemsFavorit={addItemsFavorit}
                  // favorited={true}
        />
      </Route>  
    </div>
  );
}

export default App;

