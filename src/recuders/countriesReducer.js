const countriesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_COUNTRIES':
            return {
                ...state,
                countries: action.payload
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default countriesReducer;