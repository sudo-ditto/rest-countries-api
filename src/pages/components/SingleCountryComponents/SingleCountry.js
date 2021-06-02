import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleCountry = () => {
    const { country: countryID } = useParams();
    const [country, setCountry] = useState('');
    const [borders, setBorders] = useState([]);
    const [allCountries, setCountries] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const countryUrl = 'https://restcountries.eu/rest/v2/name/' + countryID;

                await axios.get(countryUrl).then(ctry => {
                    console.log('Fetching borders');
                    setCountry(ctry.data[0]);
                    setBorders(ctry.data[0].borders);
                });

            } catch (err) {
                console.error(err);
            }
            
            
        })();
        (async () => {
            try {
                const newBorders = [];
                console.log(borders);

                borders.map(async (border) => {
                    const countriesUrl = 'https://restcountries.eu/rest/v2/alpha/' + border;

                    await axios.get(countriesUrl).then(border => {
                        newBorders.push(border.data.name);
                        
                        console.log('Here');
                        console.log(border.data.name);
                        console.log(newBorders);
                        setBorders(newBorders);
                    });
                })
            } catch (error) {
                console.error(error);
            }
        })();

        (async () => {
            const countriesUrl = 'https://restcountries.eu/rest/v2/all/';
            
            await axios.get(countriesUrl).then(countries => {
                setCountries(countries.data);

            });
        })();

    }, [setCountry, setBorders, setCountries]);
    // console.log(country);
    // console.log(borders);

    return (
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
                                return <span className="currency" key={currency.name}>{currency.name}</span>
                            })
                        ) : ''}
                    </span></p>
                    <p>Languages: <span>
                        {country ? (
                            country.languages.map(language => {
                                return <span key={language.name}className="language">{language.name}</span>
                            })
                        ) : ''}
                    </span></p>
                </div>

                <h3>Border Countries:</h3>
                {country ? (
                    <p>{borders}</p>
                ) : ''}
                <div className="border-list">
                </div>
            </div>
        </div>
    )
}

export default SingleCountry;
