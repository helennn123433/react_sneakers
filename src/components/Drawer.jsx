function Drawer({onClose, items = [], onRemove}){
    return (
      <div className="overlay">
        <div className="drawer">
          
          <h2>Корзина <img onClick={onClose} className="removeBtn" src="/img/delete.svg" alt="delete" /></h2>
          {
            items.length > 0 ? <> <div className="items">
            {items.map((obj) => (
              <div className="cartItem">
              <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
              <div className="cardItem">
                <p>{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img className="removeBtn" src="/img/delete.svg" alt="delete" onClick={() => onRemove(obj.id)} />
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
            </>
            : <div className="cartEmpty">
            <img width={120} height={120} src="/img/empty_box.png" alt="empty_cart" />
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/arrow.svg" alt="arrow" /> Вернуться назад
            </button>
          </div>}
        </div>
        </div>
    )
}

export default Drawer;