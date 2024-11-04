import Card from "../components/Card";

function Favorites({ items, onFavorite }) {
  console.log(items)
  return (
    <div className="content">
      <div className="content-search">
        <h1>Мои закладки</h1>
      </div>
      <div className="sneakers">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            isAddFavorite={items.some((favItem) => favItem.price === item.price)}
            // onPlus={(obj) => onAddToCart(obj)}
            onAddFavorite={(obj) => onFavorite(obj)}
             />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
