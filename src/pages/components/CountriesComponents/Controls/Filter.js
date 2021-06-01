import React from 'react'

const Filter = () => {
    return (
        <div className="filter__container">
            <select name="region" id="region">
                <option value="filter" >Filter By Region</option>
                <option value="africa" >Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
}

export default Filter
