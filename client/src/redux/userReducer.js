import {createSlice} from "@reduxjs/toolkit"

const initialState={
   isFetching:false,
   error:false,
   currentUser:null
}

export const userSlice= createSlice({
    name:'user',
    initialState,
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false
            state.currentUser=action.payload
        },
        loginFailure:(state)=>{
            state.isFetching=false
            state.error=true
        },
        logout:(state)=>{
            state.currentUser=null
            state.error=false
        }
    }
})

export const {loginStart,loginSuccess,loginFailure,logout}= userSlice.actions
export default userSlice.reducer
 

