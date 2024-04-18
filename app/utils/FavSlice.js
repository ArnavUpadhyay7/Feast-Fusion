"use client"
import { createSlice } from '@reduxjs/toolkit'

const FavSlice = createSlice({
    name: 'favourites',
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
        },
        removeFromCart: (state, action) => {
            //    state.items.pop()
            state.items.splice(action.payload, 1)
            // state.items.filter(item => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.items.length = 0
        }
    }
})

export const {addToCart, removeFromCart, clearCart} = FavSlice.actions
export default FavSlice.reducer