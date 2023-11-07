import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice(
    {name: "searchCache",
    initialState: {
    },
    reducers: {
        createCache: (state, action) => {
            state = Object.assign( state, action.payload)
        }
    }
    }
)

export const {createCache} = searchSlice.actions;
export default searchSlice.reducer; 