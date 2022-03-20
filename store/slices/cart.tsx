import { createSlice, Dispatch } from "@reduxjs/toolkit";

export interface CartStoreState {
    isOpenCart: boolean,
    cart: Array<any>
}
const initialState = {
    isOpenCart: false,
    cart: []
}

const cartSlice = createSlice({
    name: 'cart-slice',
    initialState,
    reducers: {
        onAddItemToCart(state, action) {

        },
        onChangeActiveCart(state) {
            state.isOpenCart = !state.isOpenCart
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;

export const fetchCart = () => {
    return (dispatch: Dispatch) => {
        
    }
}