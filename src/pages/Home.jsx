import Card from "../components/Card";
function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onFavorite}){
  return (
    <div className="content">
        <div className="content-search">
          <h1>
            {searchValue ? `Поиск по запросу: "${searchValue}"`: "Все кроссовки"}
          </h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            {searchValue && (
              <img onClick={() => setSearchValue("")}
                className="search_btn removeBtn"
                src="/img/delete.svg"
                alt="delete"
              />
            )}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
          </div>
        </div>
        <div className="sneakers">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={(obj) => onAddToCart(obj)}
                onAddFavorite={(obj) => onFavorite(obj)}
              />
            ))}
        </div>
      </div>
  )
}

export default Home;