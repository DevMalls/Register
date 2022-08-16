import { createSlice } from "@reduxjs/toolkit";

const data = [];

const storageSlice = createSlice({
    name: "storeData",
    initialState: data,
    reducers: {
        storeData(state,action){

        }
    }
});

export const storeActions = storageSlice.actions;

export default storageSlice.reducer;