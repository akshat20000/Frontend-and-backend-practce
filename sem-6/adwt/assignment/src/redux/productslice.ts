import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type product={
    id: number,
    title: String,
    price: number,
    stock: number
}

type productstate={
    products:product[]
}

const initialState:productstate={
    products: [
    {
      id: 1,
      title: "Handmade Vase",
      price: 800,
      stock: 5
    },
    {
      id: 2,
      title: "Wooden Craft",
      price: 1200,
      stock: 3
    }
  ]
}

const productslice = createSlice({
    name: "products",
    initialState,
    reducers: {
        decreasestock: (state, action: PayloadAction<number>)=>{
            const product = state.products.find((item)=>item.id === action.payload);
            if(product && product.stock > 0){
                product.stock -=1;
            }
        },

        increasestock: (state, action: PayloadAction<number>)=>{
            const product = state.products.find((item)=>item.id === action.payload);
            if(product && product.stock > 0){
                product.stock +=1;
            }
        }
    }
}) 

export const { decreasestock, increasestock } = productslice.actions;
export default productslice.reducer;