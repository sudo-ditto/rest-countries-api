import React from 'react';
import { Link } from 'react-router-dom';

const Border = ({country, countryUrl}) => {
    console.log('work');
    return (
        <Link to={countryUrl}>
            <div className="border">
                {country} 
            </div>
        </Link>
    )
}

export default Border;
