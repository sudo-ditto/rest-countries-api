import countriesSlice from '../recuders/countriesReducer';
import countrySlice from '../recuders/countryReducer';
import filterReducer from '../recuders/filterReducer';
import searchReducer from '../recuders/searchFieldReducer';
import themeReducer from '../recuders/themeReducer';

// Equivallent to combineReducers
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {
        countries: countriesSlice.reducer,
        country: countrySlice.reducer,
        // Trying out a different export technique
        filter: filterReducer,
        search: searchReducer,
        theme: themeReducer,
    }
});

export default store;