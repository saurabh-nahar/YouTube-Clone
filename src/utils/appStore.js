import { configureStore } from "@reduxjs/toolkit";
import sideMenuSlice from "./sideMenuSlice";
import searchSlice from "./searchSlice";
import chatsSlice from "./chatsSlice";

const appStore = configureStore({
    reducer:{
        sideMenu: sideMenuSlice,
        search: searchSlice,
        chat: chatsSlice
    }
})

export default appStore;