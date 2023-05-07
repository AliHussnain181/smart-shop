import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { _id, name, price, image } = action.payload;
            const existingItem = state.items.find((item) => item._id === _id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ _id, name, price, image, quantity: 1 });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.items));

        },
        removeFromCart: (state, action) => {
            const _id = action.payload;
            const filteredItems = state.items.filter((item) => item._id !== _id);
            state.items = filteredItems;
            localStorage.setItem('cartItems', JSON.stringify(filteredItems));
        },

        adjustQuantity: (state, action) => {
            const { _id, quantity } = action.payload;
            const itemIndex = state.items.findIndex(item => item._id === _id);

            if (itemIndex !== -1) {
                if (parseInt(quantity) <= 0) {
                    state.items.splice(itemIndex, 1); // remove item from array
                } else {
                    state.items[itemIndex].quantity = parseInt(quantity); // update quantity
                }

                localStorage.setItem('cartItems', JSON.stringify(state.items));
            }
        }
    },

}
)

export const { addToCart, removeFromCart, adjustQuantity } = cartSlice.actions;


export default cartSlice.reducer;