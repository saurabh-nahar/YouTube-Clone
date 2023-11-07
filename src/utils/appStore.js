import { configureStore } from "@reduxjs/toolkit";
import sideMenuSlice from "./sideMenuSlice";
import searchSlice from "./searchSlice";

const appStore = configureStore({
    reducer:{
        sideMenu: sideMenuSlice,
        search: searchSlice
    }
})

export default appStore;