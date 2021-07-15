import React from 'react'
import { useDispatch } from 'react-redux';
import { searchActions } from '../../../../recuders/searchFieldReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchField = () => {

    const dispatch = useDispatch();

    const onKeyUpHandler = async (event) => {
        dispatch(searchActions.setSearchValue(event.target.value));
    }



    return (
        <div className="search-field__container">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search for country..." onKeyUp={onKeyUpHandler} />
        </div>
    )
}

export default SearchField
