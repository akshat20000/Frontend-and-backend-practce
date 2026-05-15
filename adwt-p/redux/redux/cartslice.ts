import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { product } from "./productslice"


type cartitems = {
    id: number,
    title: String,
    price: number,
    quantity: number
};

type cartstate = {
    cartitem: cartitems[],
    totalprice: number
}

const initialState: cartstate = {
    cartitem: [
        {
            id: 1,
            title: "Handmade Vase",
            price: 800,
            quantity: 1
        }
    ],
    totalprice: 800

}

const cartslice = createSlice({
    name: "cartitems",
    initialState,
    reducers: {
        addtocart: (state, action: PayloadAction<product>) => {
            const item = state.cartitem.find(
                (cartproduct) => cartproduct.id === action.payload.id
            )
            if (item) {
                item.quantity += 1;
            } else {
                state.cartitem.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    price: action.payload.price,
                    quantity: 1,
                })
            }

            state.totalprice = state.cartitem.reduce(
                (total, item) =>total+ item.price * item.quantity,
                0
            )
        }
    }
})

export const { addtocart } = cartslice.actions;
export default cartslice.reducer;
