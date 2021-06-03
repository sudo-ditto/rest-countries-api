import countriesSlice from '../recuders/countriesReducer';
import countrySlice from '../recuders/countryReducer';

// Equivallent to combineReducers
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: { countries: countriesSlice.reducer, country: countrySlice.reducer }
});

export default store;