import React from 'react';
import { useHistory } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';

const BackBtn = () => {
    let history = useHistory();

    const goBackHandler = () => {
        history.push('/');
    }
    return (
        <button type="button" onClick={goBackHandler} id="go-back__btn">
           	<FontAwesomeIcon className="arrow-back" icon={faReply}/> Go Back
        </button>
    )
}

export default BackBtn;
