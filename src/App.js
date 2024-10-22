function App() {
  return (
    <div className ="App">

      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>
          <div className="cartItem">
            <img width={70} height={70}  src="/img/sneakers/image 5.jpg" alt="product1" />
            <div className="cardItem">
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/delete.svg" alt="delete" />
          </div>
        </div>
      </div>
      <header>
      <div className="headerLeft">
        <div className="headerLeftImg">
        <img width={40} height={40} src="/img/logo.png" /></div>
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
      </div>

        <div className="headerRigth">
          <ul>
            <li>
              <img width={18} height={18} src="/img/cart.svg" />
              <span>1205 руб.</span>
            </li>
            <li>
            <img width={18} height={18} src="/img/user.svg" />
            </li>
          </ul>
        </div>
      </header>
     <div className="content">
      <div className="content-search">
        <h1>Все кроссовки</h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="search" />
          <input placeholder="Поиск..."/>
        </div>
      </div>
      <div className="sneakers">
        <div className="card">
        <div className="cardImageContainer">
          <div className="favorite"><img src="/img/heartunlike.svg" alt="heart" /></div>
          <img width={133} height={112} src="/img/sneakers/image 5.jpg" alt="sneakers" />
        </div>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardBottom">
            <div className="cardBottomInfo">
              <p>Цена:</p>
              <b>12 999 руб.</b>
            </div>
          <button>
            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
          </button>
          </div>
        </div>
        <div className="card">
        <div className="cardImageContainer">
          <img width={133} height={112} src="/img/sneakers/image 5 (1).jpg" alt="sneakers" />
        </div>
          <h5>Мужские Кроссовки Nike Air Max 270</h5>
          <div className="cardBottom">
            <div className="cardBottomInfo">
              <p>Цена:</p>
              <b>12 999 руб.</b>
            </div>
          <button>
            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
          </button>
          </div>
        </div>
        <div className="card">
        <div className="cardImageContainer">
          <img width={133} height={112} src="/img/sneakers/image 5 (2).jpg" alt="sneakers" />
        </div>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardBottom">
            <div className="cardBottomInfo">
              <p>Цена:</p>
              <b>8 499 руб.</b>
            </div>
          <button>
            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
          </button>
          </div>
        </div>
        <div className="card">
        <div className="cardImageContainer">
          <img width={133} height={112} src="/img/sneakers/image 5 (1).png" alt="sneakers" />
        </div>
          <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
          <div className="cardBottom">
            <div className="cardBottomInfo">
              <p>Цена:</p>
              <b>8 999 руб.</b>
            </div>
          <button>
            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
          </button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
