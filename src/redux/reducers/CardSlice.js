import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const cardItems = JSON.parse(localStorage.getItem('cardItems')) || []
const initialState = {
    cardValue: cardItems,
    total: 0,
    qty: 0
}

export const getCard = createAsyncThunk('getCard', async (id, { dispatch, getState }) => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)

    const payload = {
        id: data.id,
        image: data.image,
        title: data.title,
        description: data.description,
        price: data.price,

    };

    dispatch(addObject(payload));

    const { cardValue } = getState().cards;

    localStorage.setItem('cardItems', JSON.stringify([...cardValue, payload]))

    return data;


})

export const cardSlice = createSlice({
    name: "details",
    initialState,
    reducers: {
        addObject: (state, action) => {
            const findCard = state.cardValue.find(item => item.id === action.payload.id)

            if (findCard) {
                findCard.qty++
            } else {
                state.cardValue.push(action.payload)
            }
            state.total += action.payload.price
            state.qty++;
            // state.qty += parseInt(action.payload.qty,10)
        },

        removeObject: (state, action) => {
            const itemRemove = state.cardValue.find(item => item.id === action.payload)

            if (itemRemove) {
                if (itemRemove.qty > 1) {
                    itemRemove.qty--;
                    state.total -= itemRemove.price
                    state.qty--;
                } else {
                    state.cardValue = state.cardValue.filter(item => item.id !== action.payload)
                    state.total -= itemRemove.price
                    state.qty--;
                }
            }
        },

    },
    extraReducers: (builder) => {
        builder.addCase(getCard.fulfilled, (state, action) => {
            state.cardValue = action.payload
        })
    }
})

export const { addObject, removeObject } = cardSlice.actions
export default cardSlice.reducer