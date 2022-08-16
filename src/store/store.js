import {configureStore, combineReducers} from '@reduxjs/toolkit';
import registerSlice from './registerSlice';
import signInSlice from './signInSlice';
import storageSlice from './storage';
const rootReducer = combineReducers ({
    registerSlice,
    signInSlice,
    storageSlice
})
const store = configureStore({
    reducer : rootReducer
});
export default store;