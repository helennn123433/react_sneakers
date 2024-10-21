function App() {
  return (
    <div className ="App">
      <header>
      <div className="headerLeft">
      <img width={40} height={40} src="/img/logo.png" />
        <div className="headerLeftInfo">
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

        <div>
          <ul className="headerRigth">
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
      <h1>Все кроссовки</h1>
      ....
     </div>
    </div>
  );
}

export default App;
