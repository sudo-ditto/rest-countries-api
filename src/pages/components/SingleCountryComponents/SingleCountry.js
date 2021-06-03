import axios from 'axios';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { countryActions } from '../../../recuders/countryReducer';

const SingleCountry = () => {
    const dispatch = useDispatch();

    const { country: countryID } = useParams();

    const country = useSelector(state => state.country.country);

    const error = useSelector(state => state.country.error);

    const countryUrl = 'https://restcountries.eu/rest/v2/name/' + countryID;

    const fetchCountry = async () => {
        try {
            await axios.get(countryUrl).then(ctry => {
                console.log('Fetching borders');
                dispatch(countryActions.setCountry(ctry.data[0]));
            });
        } catch (err) {
            console.error(err);
            dispatch(countryActions.setError(err));
        }
    }

    useEffect(() => {
        fetchCountry();
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
                            {country ? (
                                <p>{country.borders}</p>
                            ) : ''}
                            <div className="border-list">
                            </div>
                        </div>
                    </>
                )
                : ''}
        </div>
    )
}

export default SingleCountry;
