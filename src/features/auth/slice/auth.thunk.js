import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUserApi, loginApi } from "../api/auth.api";

export const login = createAsyncThunk(
    "auth/login",
    async (credentials, thunkApi) => {
        try {
            const data = await loginApi(credentials);
            localStorage.setItem("accessToken", data.accessToken);
            return data;

        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
)

export const hydrateUser = createAsyncThunk(
    "auth/hydrate",
    async (_, thunkApi) => {
        try {

            const token = localStorage.getItem("accessToken") ;

            if(!token){
                 return thunkApi.rejectWithValue("Invalid token"); 
            }

            console.log(token);

            const data = await getCurrentUserApi(token);
            return data;

        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
)