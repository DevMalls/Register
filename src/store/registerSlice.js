import { createSlice } from "@reduxjs/toolkit";
import { defaultRegisterInput } from './constants';



const registerSlice = createSlice({
    name: "input",
    initialState: defaultRegisterInput,
    reducers: {
        nameAction(state,action){
            state.name.value = action.payload.value;
            state.name.error = action.payload.error;
        },
        dateAction(state,action){
            state.date.value = action.payload.value;
            state.date.error = action.payload.error;
        },
        genderAction(state,action){
            state.gender.value = action.payload.value;
            state.gender.error = action.payload.error;
        },
        emailAction(state,action){
            state.email.value = action.payload.value;
            state.email.error = action.payload.error;
        },
        passwordAction(state,action){
            state.password.value = action.payload.value;
            state.password.error = action.payload.error;
        },
        confirmPasswordAction(state,action){
            state.confirmPassword.value = action.payload.value;
            state.confirmPassword.error = action.payload.error;
        },
        error(state,action){
            state[action.payload.key].error = action.payload.error;
        },
        inputClear(state,action) {
            state.name = action.payload.name;
            state.date = action.payload.date;
            state.gender = action.payload.gender;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.confirmPassword = action.payload.confirmPassword;
        },
        inputEdit(state,action){
            state.name.value = action.payload.name;
            state.date.value = action.payload.date;
            state.gender.value = action.payload.gender;
            state.email.value = action.payload.email;
            state.password.value = action.payload.password;
            state.confirmPassword.value = action.payload.confirmPassword;
        }
    }
});


export const registerActions = registerSlice.actions;

export default registerSlice.reducer;
