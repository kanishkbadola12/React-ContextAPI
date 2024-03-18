import Product from './components/Product';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import { CartContexProvider } from './store/shopping-cart-context'

function App() {
  
  return (
    <CartContexProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContexProvider>
  );
}

export default App;
