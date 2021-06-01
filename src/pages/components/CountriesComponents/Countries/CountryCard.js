import React from 'react'

const CountryCard = ({flag, name, population, region, capital}) => {
    return (
        <div className="country-card">
            <div className="country-flag">
                <img src={flag} alt="" />
            </div>
            <div className="country-data">
                <h2>{name}</h2>
                <p>Population: <span>{population}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </div>
        </div>
    )
}

export default CountryCard
