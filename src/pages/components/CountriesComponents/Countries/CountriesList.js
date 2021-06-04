import axios from 'axios';

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { countriesActions } from '../../../../recuders/countriesReducer';

import { Link } from 'react-router-dom';
import CountryCard from '../../../components/CountriesComponents/Countries/CountryCard';

const Countries = () => {
    const dispatch = useDispatch();

    // Get a slice of the store. Retrieve the part of the store that you need
    // useSelector automatically subscribes the component
    const countries = useSelector(state => state.countries.countries);
    const searchValue = useSelector(state => state.search.value);

    const [filteredCountries, setFilteredCountries] = useState([]);

    const error = useSelector(state => state.countries.error)

    const filter = useSelector(state => state.filter.category)

    // Parse cached countries from string to JSON
    const cachedCountries = JSON.parse(localStorage.getItem('countries'));

    const countriesUrl = 'https://restcountries.eu/rest/v2/all';

    const cacheCountries = (data) => {
        if (cachedCountries) {
            return;
        } else {
            // Transforming Data to JSON string to be able to work with it later
            localStorage.setItem('countries', JSON.stringify(data));
        }
    }

    const fetchAllCountries = async () => {
        await axios.get(countriesUrl).then((allCountries) => {
            // Fetch all countries and update state
            const countriesData = allCountries.data;

            dispatch(countriesActions.setCountries(countriesData));

            // Cache all countries
            cacheCountries(countries);
        });

    }

    useEffect(() => {
        fetchAllCountries();
        setFilteredCountries(countries);
    }, []);

    // FILTER COUNTRIES FEATURE
    const filterCountries = () => {
        setFilteredCountries(countries.filter((country) => country.region === filter));
    }

    useEffect(() => {
        filterCountries();
    }, [filter]);

    return (
        <section id="country-list">
            <div className="country-grid">
                {filter === 'All' ? (countries.map((country) => {
                    return (
                        <Link to={"/" + country.name} key={country.alpha3Code}><CountryCard name={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flag} /></Link>
                    )
                })) : (filteredCountries.map((country) => {
                    return (
                        <Link to={"/" + country.name} key={country.alpha3Code}><CountryCard name={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flag} /></Link>
                    )
                }))}
            </div>
        </section>
    )
}

export default Countries;
