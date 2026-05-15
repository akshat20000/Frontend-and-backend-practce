import { configureStore } from"@reduxjs/toolkit"
import cartreducer from "./cartslice"
import productreducer from "./productslice"

export const store = configureStore({
    reducer: {
        products: productreducer,
        cart: cartreducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;