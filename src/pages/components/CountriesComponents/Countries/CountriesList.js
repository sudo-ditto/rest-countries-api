import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { countriesActions } from '../../../../recuders/countriesReducer';

import { Link } from 'react-router-dom';
import CountryCard from '../../../components/CountriesComponents/Countries/CountryCard';
import { fetchCountries, filterCountries } from '../../../../actions/countriesActions';

const initial = {
    initial: true
}
const Countries = () => {
    const dispatch = useDispatch();

    // Get a slice of the store. Retrieve the part of the store that you need
    // useSelector automatically subscribes the component
    const allCountries = useSelector(state => state.countries.countries);
    const localCountries = useSelector(state => state.countries.localCountries);
    const searchValue = useSelector(state => state.search.value);
    const filter = useSelector(state => state.filter.category)
    const theme = useSelector(state => state.theme.dark)


    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch, fetchCountries]);



    useEffect(() => {
        dispatch(filterCountries(allCountries, filter));
        if (initial.initial) {
            initial.initial = false;
        }

    }, [dispatch, filter, initial.initial]);

    useEffect(() => {
        dispatch(countriesActions.setLocalCountries(allCountries));
    }, []);


    // SEARCH COUNTRIES FEATURE
    const searchCountries = (inp) => {
        dispatch(countriesActions.setLocalCountries(
            allCountries.filter((country) => {
                return country.name.toLowerCase().includes(inp.toLowerCase());
            })));
    }

    // SEARCH FEATURE
    useEffect(() => {
        setTimeout(() => {
            searchCountries(searchValue);
        }, 500);

        return () => {
            console.log('Cleanup');
        }

    }, [searchValue]);

    return (
        <section id="country-list">
            <div className="country-grid">
                {initial.initial ? (allCountries.map((country) => {
                    return (
                        <Link to={"/" + country.name} key={country.alpha3Code}><CountryCard name={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flag} /></Link>
                    );
                })) : (
                    localCountries.map((country) => {
                        return (
                            <Link to={"/" + country.name} key={country.alpha3Code}><CountryCard name={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flag} /></Link>
                        );
                    })
                )
                }
            </div>
        </section>
    )
}

export default Countries;
