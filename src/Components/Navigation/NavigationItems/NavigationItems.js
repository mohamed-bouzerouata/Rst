import React from 'react'
import classes  from './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = () => {
    return (
        <div>
            <ul className={classes.NavigationItems}>
                <NavigationItem Link='/' active>Burger Builde</NavigationItem>
                <NavigationItem Link='/'>Checkout</NavigationItem>
            </ul>
        </div>
    )
}

export default NavigationItems
