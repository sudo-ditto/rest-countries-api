import React from 'react';
import { useDispatch } from 'react-redux';
import { filterActions } from '../../../../recuders/filterReducer';

const Filter = () => {
    
    const dispatch = useDispatch();

    const onChangeHandler = (event) => {
        dispatch(filterActions.setFilter(event.target.value));
    }

    return (
        <div className="filter__container">
            <select name="region" id="region" onChange={onChangeHandler}>
                <option value="All" >Filter By Region</option>
                <option value="Africa" >Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default Filter
