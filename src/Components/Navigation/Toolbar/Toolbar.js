import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Drawertoggle from '../SideDrawer/DrawerToggle/Drawertoggle';

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <Drawertoggle clicked={props.drawertoggleClicked} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar