import React, { useState, useEffect } from 'react';
import Card from './components/Card'
import Drawer from './components/Drawer.jsx';
import Header from './components/Header.jsx';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() =>{
    fetch(`https://6723b460493fac3cf24bf9e2.mockapi.io/items`).then(responce => {
      return responce.json();
    }).then(json => {
      setItems(json);
    })
  }, [])
   const onAddToCart = (obj) =>{
    setCartItems(prev => [...prev, obj]);
   }
  return (
    <div className ="App">
       {cartOpened && <Drawer 
       items={cartItems}
       onClose = {() => setCartOpened(false)} />} 
      <Header 
      onClickCart = {() => setCartOpened(true)}/>
     <div className="content">
      <div className="content-search">
        <h1>Все кроссовки</h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="search" />
          <input placeholder="Поиск..."/>
        </div>
      </div>
      <div className="sneakers">
        {items.map((item) => (
          <Card 
            title={item.title}
            price={item.price} 
            imageUrl={item.imageUrl} 
            onPlus = {(obj) => onAddToCart(obj)}
           />
        ))}
      </div>
     </div>
    </div>
  );
}

export default App;
