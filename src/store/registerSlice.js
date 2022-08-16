import { createSlice } from "@reduxjs/toolkit";

const defaultRegisterInput = {
    name: {value: '', error:false},    
    date: {value: '', error:false},
    gender: {value: '', error:false},    
    email: {value: '', error:false},
    password: {value: '', error:false},
    confirmPassword: {value: '', error:false},
};


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
        }
    }
});


export const registerActions = registerSlice.actions;

export default registerSlice.reducer;
