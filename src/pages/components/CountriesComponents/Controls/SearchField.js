import React from 'react'
import searchIcon from '../../../../assets/images/search-outline.svg';
import { useDispatch, useSelector } from 'react-redux';
import { searchActions } from '../../../../recuders/searchFieldReducer';

const SearchField = () => {
    const value = useSelector(state => state.search.value)
    const dispatch = useDispatch();
    
    const onKeyDownHandler = (event) => {
        dispatch(searchActions.setFilter(event.target.value, event.target.value));
    }
    console.log(value);

    return (
        <div className="search-field__container">
            <img src={searchIcon} alt="Search icon" onKeyDown={onKeyDownHandler} />
            <input type="text" placeholder="Search for country..." />
        </div>
    )
}

export default SearchField
