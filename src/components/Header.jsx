import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header>
      <Link to='/'>
      <div className="headerLeft">
        <div className="headerLeftImg">
          <img width={40} height={40} src="/img/logo.png" alt="logotype" />
        </div>
        <div>
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      </Link>

      <div className="headerRigth">
        <ul>
          <li onClick={props.onClickCart}>
            <img width={18} height={18} src="/img/cart.svg" alt="cartimg" />
            <span>1205 руб.</span>
          </li>
          <li>
            <Link to='/favorites'>
              <img width={18} height={18} src="/img/heart.svg" alt="favorites" />
            </Link>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="userimg" />
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
