import axios from 'axios';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { countryActions } from '../../../recuders/countryReducer';
import { countriesActions } from '../../../recuders/countriesReducer';

import Border from './Border';

const SingleCountry = () => {
    const dispatch = useDispatch();
    
    const { country: countryID } = useParams();
    
    const allCountries = useSelector(state => state.countries.countries);
    
    const country = useSelector(state => state.country.country);
    
    const error = useSelector(state => state.country.error);
    
    
    const countries = useSelector(state => state.countries.countries)
    const countriesError = useSelector(state => state.countries.error)
    
    
    const countriesUrl = 'https://restcountries.eu/rest/v2/all';
    
    // Refactor later
    const fetchCountries = async () => {
        // Parse cached countries from string to JSON
        const cachedCountries = JSON.parse(localStorage.getItem('countries'));

        // Check if countries already exist
        if (cachedCountries) {
            dispatch(countriesActions.setCountries(cachedCountries));
        } else {
            // If countries don't exist
            try {
                await axios.get(countriesUrl).then((countries) => {
                    dispatch(countriesActions.setCountries(countries.data));
                    console.log('Caching');
                    localStorage.setItems('countries', countries.data);
                });
            } catch (err) {
                dispatch(countryActions.setError(err));
            }
        }
    }

    const countryUrl = 'https://restcountries.eu/rest/v2/name/' + countryID;
    const borderUrl = 'https://restcountries.eu/rest/v2/name/';

    const fetchCountry = async () => {
        try {
            await axios.get(countryUrl).then(ctry => {
                dispatch(countryActions.setCountry(ctry.data[0]));
            });
        } catch (err) {
            dispatch(countryActions.setError(err));
        }
    }

    const borderFilter = (alpha3Code) => {
        const borderName = allCountries.filter(ctry => ctry.alpha3Code === alpha3Code);
        return borderName[0].name;
    }

    useEffect(() => {
        fetchCountry();
        fetchCountries();
    }, []);

    return (
        <div className="country-data__container">
            {country ?
                (
                    <>
                        <img src={country.flag} alt="" />

                        <div className="country-data">
                            <h1>{country.name}</h1>

                            <div className="main-data">
                                <p>Native name: <span>{country.nativeName}</span></p>
                                <p>Population: <span>{country.population}</span></p>
                                <p>Region: <span>{country.region}</span></p>
                                <p>Sub Region: <span>{country.subRegion}</span></p>
                                <p>Capital: <span>{country.capital}</span></p>
                            </div>

                            <div className="sub-data">

                                <p>Top Level Domain: <span>{country.topLevelDomain}</span></p>
                                <p>Currencies: <span>
                                    {country.currencies.map(currency => {
                                        return <span className="currency" key={currency.name}>{currency.name}</span>
                                    })}
                                </span></p>
                                <p>Languages: <span>
                                    {country.languages.map(language => {
                                        return <span key={language.name} className="language">{language.name}</span>
                                    })}
                                </span></p>
                            </div>

                            <h3>Border Countries:</h3>
                            <div className="border-list">
                                {country.borders.map((brd, index) => {
                                    return <Border countryUrl={countryUrl + borderFilter(brd)} country={borderFilter(brd)} key={index}></Border>
                                })}
                            </div>
                        </div>
                    </>
                )
                : ''}
        </div>
    )
}

export default SingleCountry;
