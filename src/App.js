import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import Drawer from "./components/Drawer.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
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
    // axios.delete(`https://6723b460493fac3cf24bf9e2.mockapi.io/cart${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id));
}
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="App">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content-search">
          <h1>
            {searchValue ? `Поиск по запросу: "${searchValue}"`: "Все кроссовки"}
          </h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="search_btn removeBtn"
                src="/img/delete.svg"
                alt="delete"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="sneakers">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
