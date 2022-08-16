import { createSlice } from "@reduxjs/toolkit";

const defaultSignInInput = {    
    userEmail: {value: '', error:false},
    userPassword: {value: '', error:false}
};

const signInSlice = createSlice({
    name: "signin",
    initialState: defaultSignInInput,
    reducers: {
        userEmail(state,action){
            state.userEmail.value = action.payload.value;
            state.userEmail.error = action.payload.error;
        },
        userPassword(state,action){
            state.userPassword.value = action.payload.value;
            state.userPassword.error = action.payload.error;
        }
    }
});

export const signInActions = signInSlice.actions;

export default signInSlice.reducer;
