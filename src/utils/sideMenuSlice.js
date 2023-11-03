import { createSlice } from "@reduxjs/toolkit";

const sideMenuSlice = createSlice({
    name: "sideMenu",
    initialState: {
        menuOpen: true
    },
    reducers:{
        menuToggle: (state) => {
            state.menuOpen = !state.menuOpen;
        },
        closeMenuToggle: (state) => {
            state.menuOpen = false;
        }
    }
})

export const {menuToggle, closeMenuToggle} = sideMenuSlice.actions;
export default sideMenuSlice.reducer;
