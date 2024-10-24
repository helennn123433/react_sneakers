function Header(){
    return(
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
    )
}
export default Header;