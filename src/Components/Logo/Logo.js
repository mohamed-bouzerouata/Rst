import React from 'react';
import classes from './Logo.css';
import LogoBurger from '../../Assests/IMG/burger-logo.png';

const Logo = (props) => {
    return (
        <div className={classes.logo}>
            <img src={LogoBurger} alt='Burger Logo' />
        </div>
    )
}

export default Logo
