import { createSlice } from "@reduxjs/toolkit"
import cartItems from '../../cartItems'
const initialState= {
    cartItem:cartItems,
    amount:3,
    total:0,
    isLoading:true,
};

const cartSlice =createSlice({
    name: "cart",
    initialState,
    reducers:{
        clearCart: (store) =>{
            store.cartItem = [];
        },
        removeItem: (store, action) =>{
            const itemId = action.payload;
            store.cartItem = store.cartItem.filter((item)=> item.id != itemId
            )
        },
        increase: (state, { payload }) => {
            console.log(payload)
            // const cartItem = state.cartItem.find((item) => item.id === payload.id);
            // cartItem.amount = cartItem.amount + 1;
          },
    },
})

// console.log(cartSlice)
export const {clearCart, removeItem, increase} = cartSlice.actions
export default cartSlice.reducer