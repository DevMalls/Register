import { createSlice } from "@reduxjs/toolkit";
import { defaultSignInInput } from './constants';

const signInSlice = createSlice({
    name: "signin",
    initialState: defaultSignInInput,
    reducers: {
        email(state,action){
            state.userEmail.value = action.payload.value;
            state.userEmail.error = action.payload.error;
        },
        password(state,action){
            state.userPassword.value = action.payload.value;
            state.userPassword.error = action.payload.error;
        },
        error(state,action){
            state[action.payload.key].error = action.payload.error;
        },
        inputClear(state,action) {
            state.userEmail = action.payload.userEmail;
            state.userPassword = action.payload.userPassword;
        }
    }
});

export const signInActions = signInSlice.actions;

export default signInSlice.reducer;
