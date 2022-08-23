import { createSlice } from "@reduxjs/toolkit";
import {getLocalStorage} from '../utils/utilities';
let initalData = {data : []};
const data = getLocalStorage('existingData') === null ? initalData : initalData = {data : getLocalStorage('existingData')};

const storageSlice = createSlice({
    name: "storeData",
    initialState: data,
    reducers: {
        storeData(state,action){
            state.data.push({
                name: action.payload.name,
                date: action.payload.date,
                gender: action.payload.gender,
                email: action.payload.email,
                password: action.payload.password,
                status: action.payload.status,
            });
        },
        updateStatus(state,action){
            state.data =  state.data.map (item => {
                if(item.id === action.payload.id) {
                    return {...item, status: action.payload.status}
                }
                return item;
            })
        },
        updateSpecificItem(state,action){
            state.data = state.data.map( item => {
                if(item.id === action.payload.id) {
                    return {...action.payload.updatedData}
                }
                return item;
            })
            
            console.log(state.data);
        }
    }
});

export const storeActions = storageSlice.actions;

export default storageSlice.reducer;