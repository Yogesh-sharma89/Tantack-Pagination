import { createSlice } from "@reduxjs/toolkit";
import { hydrateUser, login } from "./auth.thunk";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticated:false,
        isLoading:false
    },

    reducers:{

        logout:(state,action)=>{
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("accessToken");
        }
    },
    extraReducers:(builder)=>{

        builder.addCase(login.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(login.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.user = action.payload;
            state.isAuthenticated = true
        }).addCase(login.rejected,(state,action)=>{
            state.isLoading = false,
            state.user = null;
            state.isAuthenticated = false;
        })
         
        //hydreate user
        .addCase(hydrateUser.pending,(state,action)=>{
            state.isLoading = true;
        })
        .addCase(hydrateUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        })
        .addCase(hydrateUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.user = null;
        })
    }
})

export const {addUser,logout} = authSlice.actions;

export default authSlice.reducer;