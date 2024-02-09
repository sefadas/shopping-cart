import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    productValue: [],
}

export const getProducts = createAsyncThunk('getProducts', async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products')
    return data
})

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.productValue = action.payload
        })
    }
})


export default productSlice.reducer