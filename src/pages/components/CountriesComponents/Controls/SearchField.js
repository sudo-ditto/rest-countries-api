import React from 'react'
import searchIcon from '../../../../assets/images/search-outline.svg';

const SearchField = () => {
    return (
        <div className="search-field__container">
            <img src={searchIcon} alt="Search icon" />
            <input type="text" placeholder="Search for country..."/>
        </div>
    )
}

export default SearchField
