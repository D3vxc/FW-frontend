import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart(state, action) {
            state.items.push(action.payload);
        },
        removeFromCart(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const getItemsSelector = createSelector(
    (state) => state.cart.items,
    (items) => items
);

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
