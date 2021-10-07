import React from 'react';
import Card from '../Card/Card'

           
  function Home({
    items, 
    addItemsCar, 
    onSearchInput, 
    addItemsFavorit,
    searchValue,
    setSearchValue
  }) {

  return (
    <div>
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

export default Home;
