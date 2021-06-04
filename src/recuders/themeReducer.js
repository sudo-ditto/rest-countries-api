import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dark: false
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.dark = !state.dark;
        }
    }

});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;