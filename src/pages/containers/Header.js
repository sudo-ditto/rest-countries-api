import React from 'react';
import Logo from '../components/HeaderComponents/Logo';
import ThemeColorSwitch from '../components/HeaderComponents/ThemeColorSwitch';

const Header = () => {
    return (
        <header>
            <Logo />
            <ThemeColorSwitch />
        </header>
    )
}

export default Header;
