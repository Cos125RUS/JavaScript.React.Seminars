import {createSlice} from "@reduxjs/toolkit";
import Product from "../classes/product";


export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [
            new Product(Date.now(), 'iPhone', "Бессмысленная переплата", 100000),
            new Product(Date.now(), 'Samsung', "Тоже переплата", 80000),
        ],
        favorites: []
    },
    reducers: {
        add: (state, action) => {
            state.favorites.push(action.payload);
        },
        remove: (state, action) => {
            state.favorites.splice(state.favorites.indexOf(action.payload), 1);
        },
    }
});

export const {add, remove} = productSlice.actions;
export default productSlice.reducer;