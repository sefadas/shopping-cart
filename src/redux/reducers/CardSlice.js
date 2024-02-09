import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    cardValue: [],
}

export const getCard = createAsyncThunk('getCard', async (id) => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return data
})

export const cardSlice = createSlice({
    name: "details",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCard.fulfilled, (state, action) => {
            state.cardValue = action.payload
        })
    }
})


export default cardSlice.reducer