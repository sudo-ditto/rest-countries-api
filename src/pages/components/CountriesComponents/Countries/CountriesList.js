import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom';

import CountryCard from '../../../components/CountriesComponents/Countries/CountryCard';

const Countries = () => {
    // const [allCountries, setAllCountries] = useState('');

    // useEffect(() => {
    //     const countriesUrl = 'https://restcountries.eu/rest/v2/all';

    //     axios.get(countriesUrl).then((countries) => {
    //         setAllCountries(countries.data);
    //         console.log(allCountries);
    //     })
    // }, [setAllCountries]);
    return (
        <section id="country-list">
            <div className="country-grid">
                {/* {allCountries.map((country) => {
                    return (
                        <CountryCard name={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flag} />
                    )
                })} */}
            </div>
        </section>
    )
}

export default Countries
