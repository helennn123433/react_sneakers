import React, { useState } from 'react';
import Card from './components/Card'
import Drawer from './components/Drawer.jsx';
import Header from './components/Header.jsx';

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: '/img/sneakers/image_5.jpg'
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    imageUrl: '/img/sneakers/image2.jpg'
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: '/img/sneakers/image4.png'
  }
]


function App() {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  }

  const minus = () =>{
    setCount(count - 1);
  }

  return (
    <div className ="App">
      <div>
        <h1>{count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
      <div style={{ display: 'none' }} className="overlay">
        <Drawer/>
      </div>
      <Header />
     <div className="content">
      <div className="content-search">
        <h1>Все кроссовки</h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="search" />
          <input placeholder="Поиск..."/>
        </div>
      </div>
      <div className="sneakers">
        {arr.map((obj) => (
          <Card 
            title={obj.title}
            price={obj.price} 
            imageUrl={obj.imageUrl} 
            onClickPlus ={() => alert('Goodbue')}
           />
        ))}
      </div>
     </div>
    </div>
  );
}

export default App;
