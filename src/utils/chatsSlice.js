import { createSlice } from "@reduxjs/toolkit";

const chatsSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers:{
        addChat:(state, action) => {
            state.messages.splice(100,1)
            state.messages.push(action.payload)
            
            // if (state.messages.length > 15){
            //     state.messages.pop();
            // }
        }
    }

})

export const {addChat} = chatsSlice.actions;
export default chatsSlice.reducer;