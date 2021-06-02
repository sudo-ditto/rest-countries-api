import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

const Country = ({ location }) => {
    const { country: countryID } = useParams();
    const [country, setCountry] = useState('');

    useEffect(() => {
        const countryUrl = 'https://restcountries.eu/rest/v2/name/' + countryID;
        axios.get(countryUrl).then(country => {
            setCountry(country.data[0]);
            console.log(country.data[0]);
        });
    }, [setCountry]);

    return (
        <section id="country">
            <div className="country-data__container">
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
                            {country ? (
                                country.currencies.map(currency => {
                                    return currency.name;
                                })
                            ) : ''}
                        </span></p>
                    </div>

                    <h3>Border Countries:</h3>
                    {country ? (
                        country.borders.map(country => {
                            return country;
                        })

                    ) : ''}
                </div>
            </div>
        </section>
    )
}

export default Country;
