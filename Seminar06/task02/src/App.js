import logo from './logo.svg';
import './App.css';
import ProductsProvider from "./components/ProductsProvider";
import Products from "./components/Products";
import Favorites from "./components/Favorites";

function App() {
    return (
        <ProductsProvider>
            <div className="container">
                <Products/>
                <Favorites/>
            </div>
        </ProductsProvider>
    );
}

export default App;
