import { createSlice } from "@reduxjs/toolkit";



const initialState = {
   
    name: "example",
}


export const Stringslice = createSlice({
    name: 'string',
    initialState,
    reducers: {
        change: (state) => {
            state.name ="change"
        }
        
    }
})


export const {  change} = Stringslice.actions

export default Stringslice.reducer