import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: 'All'
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter(state, action) {
            state.category = action.payload;
        }
    }

});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;