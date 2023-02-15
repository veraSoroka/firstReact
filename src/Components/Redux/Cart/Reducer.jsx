import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsInCart: [],
        itemsWithLike:[],
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state,action) => {
            state.itemsInCart = state.itemsInCart.filter(i => i.id !== action.payload)
        },
        addFavorite: (state,action)=> {
            state.itemsWithLike.push(action.payload)
        },
        deleteFavorite: (state,action)=> {
            state.itemsWithLike = state.itemsWithLike.filter(i => i.id !== action.payload)
        },
    },

});

export const {setItemInCart, deleteItemFromCart, addFavorite, deleteFavorite} = cartSlice.actions;
export default cartSlice.reducer;