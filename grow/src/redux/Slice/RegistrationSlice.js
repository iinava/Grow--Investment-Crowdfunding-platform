import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    data: [],
    loading: false,
    error: false
}

export const registration = createAsyncThunk('registration',async(userData)=>{
    try{
        const response = await axios.post('http://127.0.0.1:8000/api/investorregisterApi',userData)
        return response.data.data
    }catch (error){
        console.log(error);
    }
})


export const RegistrationSlice = createSlice({
    name: "reg",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(registration.pending,(state)=>{
            state.loading=true
        })
    
        builder.addCase(registration.fulfilled,(state,action)=>{
            state.loading=false
        })
        builder.addCase(registration.rejected,(state,action)=>{
            state.loading=false
            state.error=true
        })
    }

})