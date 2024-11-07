import Card from "../components/Card";
function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart,
  onFavorite,
  cartItems,
  isLoading
}) {
  const renderItems = () => {
    const filteredItems = items && items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()))
    return (isLoading ? [...Array(7)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        title={item?.title}
        price={item?.price}
        imageUrl={item?.imageUrl}
        onPlus={(obj) => onAddToCart(obj)}
        onAddFavorite={(obj) => onFavorite(obj)}
        added={cartItems.some((obj) => obj.price === item.price)}
        loading={isLoading}
      />
    ))
  } 
  return (
    <div className="content">
      <div className="content-search">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
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
        {renderItems()}
      </div>
    </div>
  );
}

export default Home;
