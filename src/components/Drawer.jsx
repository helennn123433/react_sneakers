function Drawer(){
    return (
        <div className="drawer">
          <h2>Корзина <img className="removeBtn" src="/img/delete.svg" alt="delete" /></h2>
          <div className="items">
          <div className="cartItem">
            <div style={{ backgroundImage: 'url(/img/sneakers/image_5.jpg)' }} className="cartItemImg"></div>
            <div className="cardItem">
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/delete.svg" alt="delete" />
          </div>
          <div className="cartItem">
            <div style={{ backgroundImage: 'url(/img/sneakers/image_5.jpg)' }} className="cartItemImg"></div>
            <div className="cardItem">
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/delete.svg" alt="delete" />
          </div>
          </div>
          <ul className="infoPrices">
            <li className="infoPrice">
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className="infoPrice">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrowInButton" /></button>
        </div>
    )
}

export default Drawer;