import { configureStore } from "@reduxjs/toolkit";
import sideMenuSlice from "./sideMenuSlice";

const appStore = configureStore({
    reducer:{
        sideMenu: sideMenuSlice
    }
})

export default appStore;