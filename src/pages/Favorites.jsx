import React from "react";
import Card from "../components/Card";
import { AppContext } from '../App'

function Favorites({ onFavorite }) {
  const {favoriteItems} = React.useContext(AppContext); 
  return (
    <div className="content">
      <div className="content-search">
        <h1>Мои закладки</h1>
      </div>
      <div className="sneakers">
        {favoriteItems.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            isAddFavorite={favoriteItems.some((favItem) => favItem.price === item.price)}
            // onPlus={(obj) => onAddToCart(obj)}
            onAddFavorite={(obj) => onFavorite(obj)}
             />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
