import { createSlice } from "@reduxjs/toolkit";
import { defaultRegisterInput } from './constants';



const registerSlice = createSlice({
    name: "input",
    initialState: defaultRegisterInput,
    reducers: {
        name(state,action){
            state.name.value = action.payload.value;
            state.name.error = action.payload.error;
        },
        date(state,action){
            state.date.value = action.payload.value;
            state.date.error = action.payload.error;
        },
        gender(state,action){
            state.gender.value = action.payload.value;
            state.gender.error = action.payload.error;
        },
        email(state,action){
            state.email.value = action.payload.value;
            state.email.error = action.payload.error;
        },
        password(state,action){
            state.password.value = action.payload.value;
            state.password.error = action.payload.error;
        },
        confirmPassword(state,action){
            state.confirmPassword.value = action.payload.value;
            state.confirmPassword.error = action.payload.error;
        },
        key(state,action){
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
            state.email.value = action.payload.email;
            state.address.value = action.payload.address;
            state.blood.value = action.payload.blood;
            state.center.value = action.payload.center;
            state.gender.value = action.payload.gender;
            state.expierence.value = action.payload.expierence;
            state.dateOfBirth.value = action.payload.dateOfBirth;
        }
    }
});


export const registerActions = registerSlice.actions;

export default registerSlice.reducer;
