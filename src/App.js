import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Drawer from "./components/Drawer.jsx";
import Header from "./components/Header.jsx";
import Favorites from "./pages/Favorites.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`https://6723b460493fac3cf24bf9e2.mockapi.io/items`);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`https://6723b460493fac3cf24bf9e2.mockapi.io/cart`);
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchItems();
    fetchCartItems();
  }, []);
  const onAddToCart = async (obj) => {
    await axios.post(`https://6723b460493fac3cf24bf9e2.mockapi.io/cart`, obj)
     setCartItems((prev) => [...prev, obj]);
  };
  const onRemoveItem = async (id) => {
   await axios.delete(`https://6723b460493fac3cf24bf9e2.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id));
}
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onFavorite = (obj) => {
    const itemIndex = favoriteItems.findIndex(item => item.price === obj.price);
    if (itemIndex !== -1) {
      setFavoriteItems((prev) => prev.filter((_, index) => index !== itemIndex));
    } else {
      setFavoriteItems((prev) => [...prev, obj]);
    }
  };

  return (
    <div className="App">
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

      <Routes>
        <Route path='/favorites' element={
          <div> 
            <Favorites items={favoriteItems} onFavorite={onFavorite} />
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
