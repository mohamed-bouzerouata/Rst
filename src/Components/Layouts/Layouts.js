import React, { Component } from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layouts.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layouts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            showSideDrawer: false
        }
    }

    sideDrawerClosedhandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerToggleHandler = () => {
        this.setState(( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer}
        })
    }
    
    render() {
        return (
            <div>
                <Toolbar drawertoggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer showSide={this.state.showSideDrawer} 
                            closed={this.sideDrawerClosedhandler} />
                    
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
            </div>
        )
    }
}

export default Layouts

