import axios from 'axios';

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { countriesActions } from '../../../../recuders/countriesReducer';

import { Link } from 'react-router-dom';
import CountryCard from '../../../components/CountriesComponents/Countries/CountryCard';

const Countries = () => {
    const dispatch = useDispatch();

    // Get a slice of the store. Retrieve the part of the store that you need
    // useSelector automatically subscribes the component
    const countries = useSelector(state => state.countries.countries)
    const error = useSelector(state => state.countries.error)

    const countriesUrl = 'https://restcountries.eu/rest/v2/all';

    useEffect(() => {
        axios.get(countriesUrl).then((countries) => {
            console.log(countries.data);
            dispatch(countriesActions.setCountries(countries.data));
        });
    }, []);

    console.log(countries.countries);

    return (
        <section id="country-list">
            <div className="country-grid">
                {countries.map((country) => {
                    return (
                        <Link to={"/" + country.name} key={country.alpha3Code}><CountryCard name={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flag} /></Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Countries;
