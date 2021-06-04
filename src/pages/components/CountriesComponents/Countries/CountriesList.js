import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { countriesActions } from '../../../../recuders/countriesReducer';

import { Link } from 'react-router-dom';
import CountryCard from '../../../components/CountriesComponents/Countries/CountryCard';
import { fetchCountries } from '../../../../actions/countriesActions';

const Countries = () => {
    const dispatch = useDispatch();

    // Get a slice of the store. Retrieve the part of the store that you need
    // useSelector automatically subscribes the component
    const allCountries = useSelector(state => state.countries.countries);
    const localCountries = useSelector(state => state.countries.localCountries);
    const searchValue = useSelector(state => state.search.value);
    const filter = useSelector(state => state.filter.category)

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch, fetchCountries]);



    const filterData = (data, category) => {
        data.filter((country) => {
            if (category !== 'All') {
                /* Return countries where region 
                is equivalent to the filter category */
                console.log('Not all');
                return country.region === category;

            } else {
                // Return all countries
                console.log('all');

                return country.region;
            }
        })
    }

    const filtered = filterData(allCountries, filter);

    useEffect(() => {
        dispatch(countriesActions.setLocalCountries(filtered));
    }, [dispatch, filter]);

    console.log(filter);
    console.log(localCountries);

    // const [localCountries, setLocalCountries] = useState([]);

    // const error = useSelector(state => state.countries.error)


    useEffect(() => {
        // if (localStorage.getItem('countries')) {
        //     const jsonData = JSON.parse(localStorage.getItem('countries'));
        //     dispatch(countriesActions.setCountries(jsonData));
        // } else {
        //     fetchAllCountries();
        // }

    }, []);

    useEffect(() => {
        // dispatch(countriesActions.setLocalCountries(allCountries));
    }, []);


    // SEARCH COUNTRIES FEATURE
    const searchCountries = (inp) => {
        dispatch(countriesActions.setLocalCountries(
            allCountries.filter((country) => {
                return country.name.toLowerCase().includes(inp.toLowerCase());
            })));
    }

    useEffect(() => {
        // filterCountries(filter, 'region');
    }, [filter]);

    // SEARCH FEATURE
    useEffect(() => {
        setTimeout(() => {
            searchCountries(searchValue);
        }, 500);

        return () => {
            console.log('Cleanup');
        }

    }, [searchValue]);

    return (
        <section id="country-list">
            <div className="country-grid">
                {allCountries.map((country) => {
                    return (
                        <Link to={"/" + country.name} key={country.alpha3Code}><CountryCard name={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flag} /></Link>
                    );
                })
                }
            </div>
        </section>
    )
}

export default Countries;
