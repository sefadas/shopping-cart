import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    detailValue: {},
}

export const getDetail = createAsyncThunk('getDetail', async (id) => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return data
})

export const detailSlice = createSlice({
    name: "details",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDetail.fulfilled, (state, action) => {
            state.detailValue = action.payload
        })
    }
})


export default detailSlice.reducer