import {createSlice} from "@reduxjs/toolkit"

const userSlice= createSlice({
name:"user",
initialState:{isLoogedIn : false},
reducers:{
    login(state) {
        state.isLoogedIn=true;
    },
    logout(state) {
        state.isLoogedIn=false;
    }
}
})

export const userAction = userSlice.actions;
export default  userSlice 