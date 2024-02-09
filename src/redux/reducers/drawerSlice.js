import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    drawer: false,
}

export const drawerSlice = createSlice({
    name: "drawer",
    initialState,
    reducers: {
        openCard: (state) => {
            state.drawer = !state.drawer
        }
    }
})

export const { openCard } = drawerSlice.actions

export default drawerSlice.reducer