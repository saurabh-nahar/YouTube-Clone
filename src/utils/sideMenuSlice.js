import { createSlice } from "@reduxjs/toolkit";

const sideMenuSlice = createSlice({
    name: "sideMenu",
    initialState: {
        menuOpen: true
    },
    reducers:{
        menuToggle: (state) => {
            state.menuOpen = !state.menuOpen;
        }
    }
})

export const {menuToggle} = sideMenuSlice.actions;
export default sideMenuSlice.reducer;
