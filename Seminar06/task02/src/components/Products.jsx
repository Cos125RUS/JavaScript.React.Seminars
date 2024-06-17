import {useDispatch, useSelector} from "react-redux";
import {add} from "../reducers/productSlice";

const Products = () => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    const addToFavorites = (product) => {
        dispatch(add(product));
    }

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <button onClick={() => addToFavorites(product)}>Add To Favorites</button>
                </li>
            ))}
        </ul>
    );
};

export default Products;