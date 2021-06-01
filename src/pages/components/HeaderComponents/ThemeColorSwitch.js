import React from 'react';
import whiteMoon from '../../../assets/images/moon-white.svg'; 

const ThemeColorSwitch = () => {
    return (
        <div className="theme-color--switch">
            <img src={whiteMoon} alt="A moon icon. Theme color switch." />
            <p>Dark Mode</p>
        </div>
    )
}

export default ThemeColorSwitch;
