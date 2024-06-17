import {useDispatch, useSelector} from "react-redux";
import {remove} from "../reducers/productSlice";

const Favorites = () => {
    const favorites = useSelector((state) => state.products.favorites);
    const dispatch = useDispatch();

    const removeFavorite = (id) => {
        dispatch(remove(id));
    }

    return (
        <ul>
            {favorites.map((favorite) => (
                <li key={favorite.id}>
                    <h3>{favorite.name}</h3>
                    <p>{favorite.description}</p>
                    <p>{favorite.price}</p>
                    <button onClick={() => removeFavorite(favorite.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default Favorites;