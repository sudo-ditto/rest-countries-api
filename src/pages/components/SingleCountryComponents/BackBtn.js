import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BackBtn = () => {

    return (
        <Link to="/">
            <button type="button" id="go-back__btn">
                <FontAwesomeIcon className="arrow-back" icon={faReply} /> Go Back
            </button>
        </Link>
    )
}

export default BackBtn;
