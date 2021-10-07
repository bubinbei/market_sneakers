import React from 'react';
import Card from '../Card/Card';

function Favorites({items, addItemsFavorit}) {
  return (
      <div>
      <div className="content p-40">
        <div className="d-flex aligh-center justify-between mb-40">
          <h1> Мои закладки </h1>
          
        </div>
        <div className="d-flex flex-wrap">
          {items
          .map((data, index) => 
          <Card 
          key={index}
          data = {data}
          favorited={true}
          addItemsFavorit={addItemsFavorit}
          />
            )}
          
        </div>
      </div>
    </div>
  );
}

export default Favorites;
