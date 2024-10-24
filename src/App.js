import Card from './components/Card.jsx'
import Drawer from './components/Drawer.jsx';
import Header from './components/Header.jsx';

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 15600
  }
]


function App() {
  return (
    <div className ="App">

      <div style={{ display: 'none' }} className="overlay">
        <Drawer/>
      </div>
      <Header />
     <div className="content">
      <div className="content-search">
        <h1>Все кроссовки</h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="search" />
          <input placeholder="Поиск..."/>
        </div>
      </div>
      <div className="sneakers">
      <Card title="Мужские Кроссовки Nike Blazer Mid Suede" price={12999} imageUrl="/img/sneakers/image_5.jpg" />
      </div>
     </div>
    </div>
  );
}

export default App;
