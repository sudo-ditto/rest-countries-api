import React from 'react';
import Controls from '../components/CountriesComponents/Controls/Controls';
import CountriesList from '../components/CountriesComponents/Countries/CountriesList';

const Countries = () => {
    return (
        <section id="countries">
            <Controls />
            <CountriesList />
        </section>
    )
}

export default Countries;
