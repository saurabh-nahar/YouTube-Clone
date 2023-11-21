import { configureStore } from "@reduxjs/toolkit";
import sideMenuSlice from "./sideMenuSlice";
import searchSlice from "./searchSlice";
import chatsSlice from "./chatsSlice";
import videoReducer from "./videoSlice";

const appStore = configureStore({
    reducer:{
        sideMenu: sideMenuSlice,
        search: searchSlice,
        chat: chatsSlice,
        videos: videoReducer,
    }
})

export default appStore;