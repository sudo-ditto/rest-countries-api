import { countriesActions } from "../recuders/countriesReducer";

// Parse cached countries from string to JSON
const cachedCountries = JSON.parse(localStorage.getItem('countries'));

const countriesUrl = 'https://restcountries.eu/rest/v2/all';

export const fetchCountries = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch(countriesUrl);

            if (!response.ok) {
                throw new Error('Could not fetch countries data...');
            }

            const data = await response.json();
            return data;
        }

        try {
            const countriesData = await fetchData();
            cacheCountries(countriesData);
            dispatch(countriesActions.setCountries(countriesData));
        } catch (error) {
            console.error(error);
        }
    }
}

const filterData = (data, category) => {
    return data.filter((country) => {
        if (category !== 'All') {
            /* Return countries where region 
            is equivalent to the filter category */
            return country.region === category;

        } else {
            // Return all countries
            return country.region;
        }
    })
}

export const filterCountries = (data, category) => {
    return dispatch => {
        const filtered = filterData(data, category);
        
        dispatch(countriesActions.setLocalCountries(filtered));
    }
}


const cacheCountries = (data) => {
    if (cachedCountries) {
        return;
    } else {
        // Transforming Data to JSON string to be able to work with it later
        localStorage.setItem('countries', JSON.stringify(data));
    }
}


