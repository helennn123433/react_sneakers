import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Drawer from "./components/Drawer.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get(`https://6723b460493fac3cf24bf9e2.mockapi.io/items`).then(responce => {
      setItems(responce.data);
    });
    axios.get(`https://6723b460493fac3cf24bf9e2.mockapi.io/cart`).then(responce => {
      setCartItems(responce.data);
    })
  }, []);
  const onAddToCart = (obj) => {
    axios.post(`https://6723b460493fac3cf24bf9e2.mockapi.io/cart`, obj)
     setCartItems((prev) => [...prev, obj]);
  };
  const onRemoveItem = (id) => {
    axios.delete(`https://6723b460493fac3cf24bf9e2.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id));
}
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const onFavorite = (obj) => {
    setFavoriteItems((prev) => [...prev, obj]);
  };
  return (
    <div className="App">
      <Routes>
        <Route path='/favorites' element={
          <div>
            {favoriteItems.map((obj) => (
              <h1>{obj.title}</h1>
            ))}
          </div>
        } />
      </Routes>
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route path='/' element={
          <Home 
          items={items} 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToCart={onAddToCart}
          onFavorite={onFavorite}
          />
        }>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
