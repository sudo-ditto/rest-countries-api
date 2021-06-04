import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { themeActions } from '../../../recuders/themeReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeColorSwitch = () => {
    const theme = useSelector(state => state.theme.dark);

    const dispatch = useDispatch();

    const themeToggleHandler = () => {
        dispatch(themeActions.toggleTheme(theme));
        localStorage.setItem('theme', theme);
        
        if (!theme) {
            // Add class dark 
            document.body.classList.add('dark-theme');
        } else {
            // Clear all classes
            document.body.classList.remove(...document.body.classList);
        }
    }

    return (
        <div className="theme-color--switch" onClick={themeToggleHandler}>
            <FontAwesomeIcon icon={faMoon} />
            <p>Dark Mode</p>
        </div>
    )
}

export default ThemeColorSwitch;
