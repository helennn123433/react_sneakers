import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Drawer from "./components/Drawer.jsx";
import Header from "./components/Header.jsx";
import Favorites from "./pages/Favorites.jsx";


export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cartResponce = await axios.get(`https://6723b460493fac3cf24bf9e2.mockapi.io/cart`);
      const itemResponce = await axios.get(`https://6723b460493fac3cf24bf9e2.mockapi.io/items`);
      setIsLoading(false);
      
      setCartItems(cartResponce.data);
      setItems(itemResponce.data);
      
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((item) => item.price === obj.price)) {
        setCartItems(prev => prev.filter(item => item.price !== obj.price))
      } else {
        await axios.post(`https://6723b460493fac3cf24bf9e2.mockapi.io/cart`, obj)
        setCartItems((prev) => [...prev, obj]);
      }
    } catch(error) {
      console.log(error)
  }
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
    <AppContext.Provider value={{items, cartItems, favoriteItems }}>
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
          cartItems={cartItems}
          isLoading={isLoading}
          />
        }>
        </Route>
      </Routes>

      <Routes>
        <Route path='/favorites' element={
          <div> 
            <Favorites onFavorite={onFavorite} />
          </div>
        } />
      </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
