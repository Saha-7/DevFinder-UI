import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state,action)=>{
            return action.payload
        },
        removeUserFromFeed: (state, action) => {
            const newFeed = state.filter((user)=>user._id!=action.payload)
            return newFeed
        }
    }
})


export const { addUser, removeUserFromFeed} = userSlice.actions;

export default userSlice.reducer;