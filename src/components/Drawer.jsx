function Drawer({onClose, items = []}){
    return (
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина <img onClick={onClose} className="removeBtn" src="/img/delete.svg" alt="delete" /></h2>
          <div className="items">
          {items.map((obj) => (
            <div className="cartItem">
            <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
            <div className="cardItem">
              <p>{obj.title}</p>
              <b>{obj.price} руб.</b>
            </div>
            <img className="removeBtn" src="/img/delete.svg" alt="delete" />
          </div>
          ))}
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
        </div>
    )
}

export default Drawer;