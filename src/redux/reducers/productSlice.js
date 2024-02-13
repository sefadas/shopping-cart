import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    searchData: [],
    productValue: [],
}

export const getProducts = createAsyncThunk('getProducts', async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products')
    return data
})

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        filterSearch: (state, action) => {
            const search = action.payload.toLowerCase()

            state.productValue = state.searchData.filter(
                (prd) => prd.category.toLowerCase().includes(search)
                    ||
                    prd.title.toLowerCase().includes(search.toLowerCase())
                    ||
                    prd.description.toLowerCase().includes(search.toLowerCase())
            )
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.productValue = action.payload
            state.searchData = action.payload
        })
    }
})

export default productSlice.reducer
export const { filterSearch } = productSlice.actions