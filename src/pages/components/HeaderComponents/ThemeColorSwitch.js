import React from 'react';
import whiteMoon from '../../../assets/images/moon-white.svg';
import { useSelector, useDispatch } from 'react-redux';
import { themeActions } from '../../../recuders/themeReducer';

const ThemeColorSwitch = () => {
    const theme = useSelector(state => state.theme.dark);

    const dispatch = useDispatch();

    const themeToggleHandler = () => {
        dispatch(themeActions.toggleTheme(theme));
    }

    return (
        <div className="theme-color--switch" onClick={themeToggleHandler}>
            <img src={whiteMoon} alt="A moon icon. Theme color switch." />
            <p>Dark Mode</p>
        </div>
    )
}

export default ThemeColorSwitch;
